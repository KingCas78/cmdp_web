'use client'

import { useState } from 'react'
import './blog.css'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  const articulos = [
    {
      id: 1,
      titulo: 'Avances en el Tratamiento de la Dermatitis Atópica Pediátrica',
      resumen: 'Últimas investigaciones y protocolos de tratamiento para la dermatitis atópica en niños.',
      autor: 'Dra. Rosa Martínez',
      fecha: 'Enero 10, 2026',
      categoria: 'Dermatología',
      lecturaMin: '8 min',
      imagen: '🔬'
    },
    {
      id: 2,
      titulo: 'Manejo de Acné en Adolescentes',
      resumen: 'Estrategias terapéuticas y dermocosmética para el acné juvenil.',
      autor: 'Dr. Carlos López',
      fecha: 'Enero 8, 2026',
      categoria: 'Acné',
      lecturaMin: '6 min',
      imagen: '💊'
    },
    {
      id: 3,
      titulo: 'Infecciones Fúngicas en Pediatría: Diagnóstico y Tratamiento',
      resumen: 'Abordaje clínico de las micosis más comunes en la población pediátrica.',
      autor: 'Dr. Fernando González',
      fecha: 'Enero 5, 2026',
      categoria: 'Micología',
      lecturaMin: '10 min',
      imagen: '🦠'
    },
    {
      id: 4,
      titulo: 'Nevus y Lesiones Pigmentadas en Niños',
      resumen: 'Diferenciación entre lesiones benignas y malignas, y criterios de seguimiento.',
      autor: 'Dra. Alejandra Ruiz',
      fecha: 'Enero 3, 2026',
      categoria: 'Oncología',
      lecturaMin: '7 min',
      imagen: '🎯'
    },
    {
      id: 5,
      titulo: 'Dermatología Cosmética Pediátrica',
      resumen: 'Procedimientos seguros y consideraciones éticas en la población pediátrica.',
      autor: 'Dr. Miguel Torres',
      fecha: 'Diciembre 28, 2025',
      categoria: 'Cosmética',
      lecturaMin: '6 min',
      imagen: '✨'
    }
  ]

  const categorias = ['Todos', 'Dermatología', 'Acné', 'Micología', 'Oncología', 'Cosmética']

  return (
    <div className="blog-container">
      {/* Header */}
      <div className="blog-header">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Blog CMDP</h1>
          <p className="blog-header-text">Artículos sobre dermatología pediátrica</p>
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
            className="blog-search-input"
          />
        </div>

        {/* Categorías */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`blog-category-btn ${
                cat === 'Todos'
                  ? 'blog-category-btn-active'
                  : 'blog-category-btn-inactive'
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
              <div className="blog-article-image md:w-64 h-48 md:h-auto">
                <span>{articulo.imagen}</span>
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="blog-category-badge">
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
                  <button className="blog-read-btn">
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
