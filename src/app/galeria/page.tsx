'use client'

import { useState } from 'react'

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const fotos = [
    {
      id: 1,
      titulo: 'Asamblea General 2025',
      descripcion: 'Reunión anual de socios y directivos',
      fecha: 'Enero 2026',
      emoji: '👥'
    },
    {
      id: 2,
      titulo: 'Conferencia Magistral',
      descripcion: 'Experto internacional compartiendo conocimientos',
      fecha: 'Diciembre 2025',
      emoji: '🎤'
    },
    {
      id: 3,
      titulo: 'Taller de Capacitación',
      descripcion: 'Sesión de aprendizaje práctico',
      fecha: 'Diciembre 2025',
      emoji: '📚'
    },
    {
      id: 4,
      titulo: 'Networking Empresarial',
      descripcion: 'Encuentro de emprendedores y empresarios',
      fecha: 'Noviembre 2025',
      emoji: '🤝'
    },
    {
      id: 5,
      titulo: 'Evento de Gala',
      descripcion: 'Celebración aniversario de la organización',
      fecha: 'Noviembre 2025',
      emoji: '🎉'
    },
    {
      id: 6,
      titulo: 'Visita Empresarial',
      descripcion: 'Recorrida por instalaciones innovadoras',
      fecha: 'Octubre 2025',
      emoji: '🏢'
    },
    {
      id: 7,
      titulo: 'Workshop de Innovación',
      descripcion: 'Taller sobre nuevas tecnologías',
      fecha: 'Octubre 2025',
      emoji: '💡'
    },
    {
      id: 8,
      titulo: 'Panel de Discusión',
      descripcion: 'Debate sobre tendencias del mercado',
      fecha: 'Septiembre 2025',
      emoji: '💬'
    },
    {
      id: 9,
      titulo: 'Actividad Social',
      descripcion: 'Integración y confraternidad',
      fecha: 'Septiembre 2025',
      emoji: '🎊'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Galería Fotográfica</h1>
          <p className="text-green-100 mt-2">Momentos destacados de nuestras actividades</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotos.map((foto) => (
            <div
              key={foto.id}
              onClick={() => setSelectedImage(foto.id)}
              className="cursor-pointer group"
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg overflow-hidden h-48 flex items-center justify-center relative">
                <span className="text-6xl">{foto.emoji}</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold transition-opacity">
                    Ver Más
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
        >
          <div className="bg-white rounded-lg max-w-2xl w-full p-6" onClick={(e) => e.stopPropagation()}>
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
