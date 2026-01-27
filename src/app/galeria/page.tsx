'use client'

import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    })
  }, [])

  const fotos = [
    {
      id: 1,
      titulo: 'Congreso Nacional CMDP 2025',
      descripcion: 'XIV Congreso Nacional de Dermatología Pediátrica',
      fecha: 'Octubre 2025',
      emoji: '👥'
    },
    {
      id: 2,
      titulo: 'Congreso Nacional CMDP 2024',
      descripcion: 'XIII Congreso Nacional de Dermatología Pediátrica',
      fecha: 'Octubre 2024',
      emoji: '🎤',
      galeriaUrl: 'https://photos.app.goo.gl/u3QsbPw3j4ZMu9nF8'
    },
    {
      id: 3,
      titulo: 'Congreso Nacional CMDP 2023',
      descripcion: 'XII Congreso Nacional de Dermatología Pediátrica',
      fecha: 'Octubre 2023',
      emoji: '🔍'
    },
  ]

  return (
    <div className="min-h-screen page-bg">
      {/* Header */}
      <div className="hero-gradient text-white py-12" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Galería Fotográfica</h1>
          <p className="page-header-text mt-2">Momentos destacados del los congresos nacionales</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2" data-aos="fade-up">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 whitespace-nowrap">
            Todas
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 border whitespace-nowrap">
            2026
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 border whitespace-nowrap">
            2025
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 border whitespace-nowrap">
            Eventos
          </button>
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-in">
          {fotos.map((foto, index) => (
            <div
              key={foto.id}
              onClick={() => foto.galeriaUrl ? window.open(foto.galeriaUrl, '_blank') : setSelectedImage(foto.id)}
              className="cursor-pointer group"
              data-aos="zoom-in"
              data-aos-delay={`${(index % 3) * 100}`}
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg overflow-hidden h-48 flex items-center justify-center relative">
                <span className="text-6xl">{foto.emoji}</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold transition-opacity">
                    {foto.galeriaUrl ? 'Ver Galería' : 'Ver Más'}
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{foto.titulo}</h3>
                <p className="text-gray-600 text-sm mt-1">{foto.descripcion}</p>
                <p className="text-gray-500 text-xs mt-2">{foto.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
          data-aos="fade-in"
        >
          <div className="bg-white rounded-lg max-w-2xl w-full p-6" onClick={(e) => e.stopPropagation()} data-aos="zoom-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="float-right text-gray-600 hover:text-gray-900 text-2xl"
            >
              ✕
            </button>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg h-64 flex items-center justify-center mb-4">
              <span className="text-8xl">{fotos.find(f => f.id === selectedImage)?.emoji}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {fotos.find(f => f.id === selectedImage)?.titulo}
            </h2>
            <p className="text-gray-600 mb-4">
              {fotos.find(f => f.id === selectedImage)?.descripcion}
            </p>
            <p className="text-gray-500">
              {fotos.find(f => f.id === selectedImage)?.fecha}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
