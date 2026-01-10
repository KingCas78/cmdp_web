'use client'

export default function Videoteca() {
  const videos = [
    {
      id: 1,
      titulo: 'Innovación en Tecnología',
      descripcion: 'Charla sobre las últimas tendencias tecnológicas',
      fecha: 'Enero 8, 2026',
      speaker: 'Dr. Juan Martínez',
      duracion: '45 min',
      thumbnail: '🎥'
    },
    {
      id: 2,
      titulo: 'Liderazgo Corporativo',
      descripcion: 'Estrategias de liderazgo en el siglo XXI',
      fecha: 'Enero 5, 2026',
      speaker: 'Patricia García',
      duracion: '52 min',
      thumbnail: '🎥'
    },
    {
      id: 3,
      titulo: 'Sustentabilidad Empresarial',
      descripcion: 'Cómo implementar prácticas sustentables',
      fecha: 'Diciembre 28, 2025',
      speaker: 'Ing. Carlos López',
      duracion: '38 min',
      thumbnail: '🎥'
    },
    {
      id: 4,
      titulo: 'Transformación Digital',
      descripcion: 'Guía completa para la transformación digital',
      fecha: 'Diciembre 20, 2025',
      speaker: 'Lic. Sandra Rodríguez',
      duracion: '48 min',
      thumbnail: '🎥'
    },
    {
      id: 5,
      titulo: 'Emprendimiento y Startup',
      descripcion: 'Cómo convertir tu idea en negocio',
      fecha: 'Diciembre 15, 2025',
      speaker: 'Mg. Fernando Díaz',
      duracion: '55 min',
      thumbnail: '🎥'
    },
    {
      id: 6,
      titulo: 'Gestión Financiera',
      descripcion: 'Finanzas personales y empresariales',
      fecha: 'Diciembre 10, 2025',
      speaker: 'Cr. Elena Flores',
      duracion: '41 min',
      thumbnail: '🎥'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Videoteca</h1>
          <p className="text-red-100 mt-2">Acceso a todas nuestras grabaciones</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Buscador */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar videos..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Grid de Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 h-40 flex items-center justify-center relative">
                <span className="text-6xl">{video.thumbnail}</span>
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-semibold">
                  {video.duracion}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">{video.titulo}</h3>
                <p className="text-gray-600 text-sm mt-2">{video.descripcion}</p>
                
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p><strong>Disertante:</strong> {video.speaker}</p>
                  <p><strong>Fecha:</strong> {video.fecha}</p>
                </div>

                <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Ver Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
