'use client'

import styles from './page.module.css'

export default function Webinars() {
  const webinars = [
    {
      id: 1,
      titulo: 'Webinar: Dermatología Pediátrica - Casos Clínicos',
      fecha: '15 de Enero 2026',
      hora: '10:00 AM',
      descripcion: 'Presentación de casos clínicos complejos en dermatología pediátrica y su manejo.',
      disertante: 'Dra. Rosa Martínez',
      estado: 'Próximo'
    },
    {
      id: 2,
      titulo: 'Webinar: Novedades en Tratamientos Biológicos',
      fecha: '22 de Enero 2026',
      hora: '2:00 PM',
      descripcion: 'Uso de terapias biológicas en dermatología pediátrica: indicaciones y resultados.',
      disertante: 'Dr. Miguel Ángel García',
      estado: 'Próximo'
    },
    {
      id: 3,
      titulo: 'Webinar: Seguridad Dermatológica en Menores',
      fecha: '29 de Enero 2026',
      hora: '11:00 AM',
      descripcion: 'Consideraciones especiales de seguridad en el tratamiento dermatológico pediátrico.',
      disertante: 'Dra. Alejandra Ruiz',
      estado: 'Próximo'
    },
    {
      id: 4,
      titulo: 'Webinar: Psicosomática en Dermatología Infantil',
      fecha: '8 de Enero 2026',
      hora: '3:00 PM',
      descripcion: 'Impacto psicológico de las enfermedades dermatológicas en niños y adolescentes.',
      disertante: 'Dr. Carlos López',
      estado: 'Registrado'
    }
  ]

  return (
    <div className={`min-h-screen ${styles.container}`}>
      {/* Header */}
      <div className={`text-white py-12 ${styles.header}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Webinars</h1>
          <p className={`mt-2 ${styles.headerText}`}>Aprende de expertos en tu industria</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="flex gap-4 mb-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Todos
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 border">
            Próximos
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 border">
            Registrados
          </button>
        </div>

        {/* Grid de Webinars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webinars.map((webinar) => (
            <div key={webinar.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className={`h-32 ${styles.imagePlaceholder}`}></div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  webinar.estado === 'Próximo' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {webinar.estado}
                </span>
                <h3 className="text-xl font-bold mt-4 text-gray-900">{webinar.titulo}</h3>
                <p className="text-gray-600 mt-2">{webinar.descripcion}</p>
                
                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-gray-700"><strong>Fecha:</strong> {webinar.fecha}</p>
                  <p className="text-gray-700"><strong>Hora:</strong> {webinar.hora}</p>
                  <p className="text-gray-700"><strong>Disertante:</strong> {webinar.disertante}</p>
                </div>

                <button className={`mt-6 w-full text-white py-2 rounded-lg transition-colors ${styles.registerButton}`}>
                  Registrarse
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
