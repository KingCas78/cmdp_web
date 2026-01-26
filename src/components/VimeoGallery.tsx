'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Video {
  id: string
  title: string
  description: string | null
  thumbnail: string | null
  duration: number
  embed_url: string | null
  created_at: string
}

export default function VimeoGallery() {
  const [videos, setVideos] = useState<Video[]>([])
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/videoteca-videos')
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Error al obtener videos')
        }
        
        const { data } = await response.json()
        setVideos(data || [])
        setFilteredVideos(data || [])
        setError(null)
        
        // Reinicializar AOS después de cargar los videos
        setTimeout(() => {
          AOS.refresh()
        }, 100)
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Error desconocido'
        setError(`Error al cargar videos: ${message}`)
        console.error('Error fetching videos:', err)
      } finally {
        setLoading(false)
      }
    }

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    })

    fetchVideos()
  }, [])

  useEffect(() => {
    const filtered = videos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (video.description?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    )
    setFilteredVideos(filtered)
  }, [searchTerm, videos])

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    }
    return `${minutes}:${String(secs).padStart(2, '0')}`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        {error}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div>
      {/* Buscador */}
      <div className="mb-8" data-aos="fade-up">
        <input
          type="text"
          placeholder="Buscar videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="videoteca-search-input w-full"
        />
      </div>

      {/* Contador de resultados */}
      <div className="mb-6 text-gray-600" data-aos="fade-up" data-aos-delay="100">
        Mostrando <strong>{filteredVideos.length}</strong> de <strong>{videos.length}</strong> videos
      </div>

      {/* Grid de Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={`${(index % 3) * 100}`}
            >
              {/* Thumbnail */}
              <div className="relative bg-gray-900 aspect-video overflow-hidden">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover hover:opacity-75 transition-opacity cursor-pointer"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500">Sin portada</span>
                  </div>
                )}

                {/* Duración */}
                {video.duration > 0 && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs font-semibold">
                    {formatDuration(video.duration)}
                  </div>
                )}

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                  {video.title}
                </h3>

                {video.description && (
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {video.description}
                  </p>
                )}

                <div className="mt-4 text-xs text-gray-500">
                  <p>Publicado: {formatDate(video.created_at)}</p>
                </div>

                {/* Botón */}
                <a
                  href={video.embed_url || `https://vimeo.com/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="videoteca-watch-btn mt-4 inline-block"
                >
                  Ver Video
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            <p>No se encontraron videos con tu búsqueda</p>
          </div>
        )}
      </div>
    </div>
  )
}
