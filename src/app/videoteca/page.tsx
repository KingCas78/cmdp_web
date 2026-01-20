'use client'

export default function Videoteca() {
  const videos = [
    {
      id: 1,
      titulo: 'Innovación en Tecnología',
      descripcion: 'Charla sobre las últimas tendencias tecnológicas',
      fecha: 'Enero 8, 2026',
      speaker: 'Dr. Juan Martínez',
      thumbnail: 'https://via.placeholder.com/400x225',
      duracion: '45:32',
    },
    {
      id: 2,
      titulo: 'Liderazgo Corporativo',
      descripcion: 'Estrategias de liderazgo en el siglo XXI',
      fecha: 'Enero 5, 2026',
      speaker: 'Patricia García',
      thumbnail: 'https://via.placeholder.com/400x225',
      duracion: '38:15',
    },
    {
      id: 3,
      titulo: 'Sustentabilidad Empresarial',
      descripcion: 'Cómo implementar prácticas sustentables',
      fecha: 'Diciembre 28, 2025',
      speaker: 'Ing. Carlos López',
      thumbnail: 'https://via.placeholder.com/400x225',
      duracion: '52:47',
    },
    {
      id: 4,
      titulo: 'Transformación Digital',
      descripcion: 'Guía completa para la transformación digital',
      fecha: 'Diciembre 20, 2025',
      speaker: 'Lic. Sandra Rodríguez',
      thumbnail: 'https://via.placeholder.com/400x225',
      duracion: '41:20',
    },
    {
      id: 5,
      titulo: 'Emprendimiento y Startup',
      descripcion: 'Cómo convertir tu idea en negocio',
      fecha: 'Diciembre 15, 2025',
      speaker: 'Mg. Fernando Díaz',
      thumbnail: 'https://via.placeholder.com/400x225',
      duracion: '36:08',
    },
    {
      id: 6,
      titulo: 'Gestión Financiera',
      descripcion: 'Finanzas personales y empresariales',
      fecha: 'Diciembre 10, 2025',
      speaker: 'Cr. Elena Flores',
      thumbnail: 'https://via.placeholder.com/400x225',
      duracion: '44:55',
    }
  ]

  return (
    <div className="videoteca-container">
      {/* Header */}
      <div className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Videoteca</h1>
          <p className="videoteca-header-text">Acceso a todas nuestras grabaciones</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Buscador */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar videos..."
            className="videoteca-search-input"
          />
        </div>

        {/* Grid de Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="card-header">
                <span>{video.thumbnail}</span>
                <div className="videoteca-duration">
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

                <button className="videoteca-watch-btn">
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
