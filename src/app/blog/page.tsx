'use client'

import { useState } from 'react'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  const articulos = [
    {
      id: 1,
      titulo: 'El Futuro del Liderazgo Empresarial',
      resumen: 'Exploramos las nuevas tendencias en liderazgo corporativo para la próxima década.',
      autor: 'Dr. Juan García',
      fecha: 'Enero 10, 2026',
      categoria: 'Liderazgo',
      lecturaMin: '8 min',
      imagen: '📝'
    },
    {
      id: 2,
      titulo: 'Innovación Tecnológica en PYMES',
      resumen: 'Cómo las pequeñas y medianas empresas pueden aprovechar la tecnología.',
      autor: 'Ing. Carlos López',
      fecha: 'Enero 8, 2026',
      categoria: 'Tecnología',
      lecturaMin: '6 min',
      imagen: '💻'
    },
    {
      id: 3,
      titulo: 'Sustentabilidad: Un Imperativo Empresarial',
      resumen: 'La importancia de implementar prácticas sustentables en las organizaciones.',
      autor: 'Lic. Patricia Rodríguez',
      fecha: 'Enero 5, 2026',
      categoria: 'Sustentabilidad',
      lecturaMin: '7 min',
      imagen: '🌱'
    },
    {
      id: 4,
      titulo: 'Transformación Digital: Guía Práctica',
      resumen: 'Pasos concretos para comenzar el proceso de transformación digital.',
      autor: 'Mg. Fernando Díaz',
      fecha: 'Diciembre 30, 2025',
      categoria: 'Digital',
      lecturaMin: '9 min',
      imagen: '📲'
    },
    {
      id: 5,
      titulo: 'Emprendimiento en la Era Pos Pandemia',
      resumen: 'Oportunidades y desafíos para nuevos emprendimientos.',
      autor: 'Lic. Elena Flores',
      fecha: 'Diciembre 25, 2025',
      categoria: 'Emprendimiento',
      lecturaMin: '6 min',
      imagen: '🚀'
    },
    {
      id: 6,
      titulo: 'Bienestar Laboral y Productividad',
      resumen: 'Cómo el bienestar de los empleados impacta en la productividad empresarial.',
      autor: 'Psic. Sandra Martínez',
      fecha: 'Diciembre 20, 2025',
      categoria: 'Recursos Humanos',
      lecturaMin: '7 min',
      imagen: '😊'
    }
  ]

  const categorias = ['Todos', 'Liderazgo', 'Tecnología', 'Sustentabilidad', 'Digital', 'Emprendimiento', 'Recursos Humanos']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-indigo-100 mt-2">Artículos, análisis y reflexiones sobre negocios</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Buscador */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Categorías */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                cat === 'Todos'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 border hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Artículos */}
        <div className="space-y-6">
          {articulos.map((articulo) => (
            <article key={articulo.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden md:flex">
              <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 md:w-64 h-48 md:h-auto flex items-center justify-center flex-shrink-0">
                <span className="text-6xl">{articulo.imagen}</span>
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                    {articulo.categoria}
                  </span>
                  <span className="text-gray-500 text-sm">{articulo.lecturaMin}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{articulo.titulo}</h2>
                <p className="text-gray-600 mb-4">{articulo.resumen}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <p><strong>{articulo.autor}</strong></p>
                    <p>{articulo.fecha}</p>
                  </div>
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Leer Más
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
