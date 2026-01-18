'use client'

import './mesa-directiva.css'

export default function MesaDirectiva() {
  const miembros = [
    {
      id: 1,
      nombre: 'Dra. Rosa María Martínez López',
      cargo: 'Presidenta',
      especialidad: 'Dermatología Pediátrica',
      institucion: 'Instituto Nacional de Pediatría',
      bio: 'Especialista con 25 años de experiencia en dermatología pediátrica',
      foto: '👩‍⚕️'
    },
    {
      id: 2,
      nombre: 'Dr. Carlos Alberto García Ruiz',
      cargo: 'Vicepresidente',
      especialidad: 'Dermatología Pediátrica',
      institucion: 'Hospital Infantil de México',
      bio: 'Líder en investigación de dermatitis atópica pediátrica',
      foto: '👨‍⚕️'
    },
    {
      id: 3,
      nombre: 'Dra. Alejandra Ruiz Sánchez',
      cargo: 'Secretaria',
      especialidad: 'Dermatología Pediátrica',
      institucion: 'UNAM - Facultad de Medicina',
      bio: 'Docente y investigadora en oncología dermatológica pediátrica',
      foto: '👩‍⚕️'
    },
    {
      id: 4,
      nombre: 'Dr. Miguel Ángel Torres Navarro',
      cargo: 'Tesorero',
      especialidad: 'Dermatología Pediátrica',
      institucion: 'Clínica Dermatológica México',
      bio: 'Especialista en dermatología cosmética pediátrica',
      foto: '👨‍⚕️'
    },
    {
      id: 5,
      nombre: 'Dra. Patricia González López',
      cargo: 'Vocal 1',
      especialidad: 'Dermatología Pediátrica',
      institucion: 'Hospital Regional Pediátrico',
      bio: 'Experta en infecciones dermatológicas pediátricas',
      foto: '👩‍⚕️'
    },
    {
      id: 6,
      nombre: 'Dr. Fernando López Ruiz',
      cargo: 'Vocal 2',
      especialidad: 'Dermatología Pediátrica',
      institucion: 'Centro Médico Dermatológico',
      bio: 'Investigador en nuevas terapias dermatológicas',
      foto: '👨‍⚕️'
    }
  ]

  return (
    <div className="mesa-directiva-container">
      {/* Header */}
      <div className="mesa-directiva-header">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Mesa Directiva</h1>
          <p className="mesa-directiva-header-text">Conoce a nuestros líderes</p>
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
              <div className="mesa-directiva-card-header">
                <span>{miembro.foto}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{miembro.nombre}</h3>
                <p className="mesa-directiva-cargo">{miembro.cargo}</p>
                <p className="text-gray-600 text-sm mt-1">{miembro.institucion}</p>
                <p className="text-gray-600 text-xs mt-1">{miembro.especialidad}</p>
                <p className="text-gray-600 mt-4">{miembro.bio}</p>
                
                <div className="mt-6 flex gap-2 justify-center">
                  <button className="mesa-directiva-btn-primary">
                    Email
                  </button>
                  <button className="mesa-directiva-btn-secondary">
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
