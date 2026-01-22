'use client'

export default function Webinars() {
  const webinars = [
    {
      id: 1,
      titulo: 'Trabajos de ingreso',
      fecha: '26 de Enero 2026',
      hora: '8:30 PM',
      descripcion: 'Título del trabajo de igreso',
      disertante: 'Candidato de trabajo de ingreso',
      estado: 'Próximo'
    },
    {
      id: 2,
      titulo: 'Webinar: Tema',
      fecha: '9 de febrero 2026',
      hora: '8:30 PM',
      descripcion: 'Descripción del webinar sobre el tema.',
      disertante: 'ponente',
      estado: 'Próximo'
    },
    {
      id: 3,
      titulo: 'Trabajos de ingreso',
      fecha: '23 de febrero 2026',
      hora: '8:30 AM',
      descripcion: 'Título del trabajo de igreso',
      disertante: 'Candidato de trabajo de ingreso',
      estado: 'Próximo'
    },
    {
      id: 4,
      titulo: 'Webinar: Tema',
      fecha: '9 de marzo 2026',
      hora: '8:30 PM',
      descripcion: 'Descripción del webinar sobre el tema.',
      disertante: 'Ponente',
      estado: 'Registrado'
    }
  ]

  return (
    <div className="webinars-container">
      {/* Header */}
      <div className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Webinars</h1>
          <p className="webinars-header-text">Educación Continua en Dermatología Pediátrica</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="flex gap-4 mb-8">
          <button className="btn btn-primary">
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
              <div className="card-header"></div>
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

                <button className="webinars-register-btn">
                  Ingresa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
