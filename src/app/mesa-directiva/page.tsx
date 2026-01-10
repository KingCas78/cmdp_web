'use client'

export default function MesaDirectiva() {
  const miembros = [
    {
      id: 1,
      nombre: 'Ing. Roberto García',
      cargo: 'Presidente',
      empresa: 'Innovatech S.A.',
      bio: 'Líder empresarial con 20 años de experiencia',
      foto: '👨‍💼'
    },
    {
      id: 2,
      nombre: 'Lic. Patricia Rodríguez',
      cargo: 'Vicepresidenta',
      empresa: 'Solutions Corp',
      bio: 'Especialista en estrategia empresarial',
      foto: '👩‍💼'
    },
    {
      id: 3,
      nombre: 'Dr. Francisco López',
      cargo: 'Tesorero',
      empresa: 'Finance Global',
      bio: 'Experto en finanzas corporativas',
      foto: '👨‍💼'
    },
    {
      id: 4,
      nombre: 'Arq. Sandra Martínez',
      cargo: 'Secretaria',
      empresa: 'Design Studio',
      bio: 'Especialista en desarrollo empresarial',
      foto: '👩‍💼'
    },
    {
      id: 5,
      nombre: 'Ing. Manuel Flores',
      cargo: 'Vocal 1',
      empresa: 'Tech Ventures',
      bio: 'Emprendedor y visionario tecnológico',
      foto: '👨‍💼'
    },
    {
      id: 6,
      nombre: 'Lic. Elena Díaz',
      cargo: 'Vocal 2',
      empresa: 'Consulting Plus',
      bio: 'Consultora empresarial de renombre',
      foto: '👩‍💼'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Mesa Directiva</h1>
          <p className="text-purple-100 mt-2">Conoce a nuestros líderes</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Nuestro equipo está compuesto por profesionales experimentados comprometidos 
          con el desarrollo y crecimiento de la comunidad empresarial.
        </p>

        {/* Grid de Miembros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miembros.map((miembro) => (
            <div key={miembro.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-32 flex items-center justify-center">
                <span className="text-6xl">{miembro.foto}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{miembro.nombre}</h3>
                <p className="text-purple-600 font-semibold mt-1">{miembro.cargo}</p>
                <p className="text-gray-600 text-sm mt-1">{miembro.empresa}</p>
                <p className="text-gray-600 mt-4">{miembro.bio}</p>
                
                <div className="mt-6 flex gap-2 justify-center">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm">
                    Email
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm">
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
