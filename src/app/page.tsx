export default function Home() {
  const seccionesNav = [
    { nombre: 'Inicio', href: '/', icon: '🏠' },
    { nombre: 'Webinars', href: '/webinars', icon: '📺' },
    { nombre: 'Mesa Directiva', href: '/mesa-directiva', icon: '👥' },
    { nombre: 'Videoteca', href: '/videoteca', icon: '🎥' },
    { nombre: 'Estatutos', href: '/estatutos', icon: '📄' },
    { nombre: 'Galería', href: '/galeria', icon: '📷' },
    { nombre: 'Blog', href: '/blog', icon: '📝' },
    { nombre: 'Contacto', href: '/contacto', icon: '✉️' },
    { nombre: 'CNDP', href: '/cndp', icon: '🏢' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a CMDP</h1>
          <p className="text-xl text-blue-100">
            Cámara Nacional de la Iniciativa Privada - Venezuela
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/webinars"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-semibold"
            >
              Ver Webinars
            </a>
            <a
              href="/contacto"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            >
              Contactarnos
            </a>
          </div>
        </div>
      </div>

      {/* Secciones Principales */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Conoce Nuestro Sitio</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explora todas nuestras secciones y descubre lo que CMDP tiene para ofrecerte
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seccionesNav.map((seccion, idx) => (
            <a
              key={idx}
              href={seccion.href}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-2 p-6 block group"
            >
              <div className="text-5xl mb-4">{seccion.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {seccion.nombre}
              </h3>
              <div className="mt-4 text-blue-600 font-semibold text-sm">
                Explorar →
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Características */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">¿Por qué unirse a CMDP?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Capacitación Continua</h3>
              <p className="text-gray-600">
                Acceso a webinars, talleres y conferencias con expertos de la industria.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Networking</h3>
              <p className="text-gray-600">
                Conecta con otros empresarios y profesionales en eventos exclusivos.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Información Estratégica</h3>
              <p className="text-gray-600">
                Acceso a análisis, reportes y actualizaciones del sector.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Últimas Actividades */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Últimas Actividades</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-3">
              Webinar
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gobernanza y Liderazgo</h3>
            <p className="text-gray-600 text-sm mb-4">
              Aprende sobre los principios de gobernanza corporativa
            </p>
            <p className="text-gray-500 text-xs">15 de Enero - 10:00 AM</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-3">
              Galería
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Evento de Gala 2025</h3>
            <p className="text-gray-600 text-sm mb-4">
              Revive los momentos especiales de nuestro aniversario
            </p>
            <p className="text-gray-500 text-xs">Noviembre 2025</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-3">
              Artículo
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">El Futuro del Liderazgo</h3>
            <p className="text-gray-600 text-sm mb-4">
              Exploramos las tendencias que definirán el próximo cambio
            </p>
            <p className="text-gray-500 text-xs">10 de Enero - 8 min lectura</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para formar parte?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Únete a cientos de empresarios y profesionales que ya confían en CMDP
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-semibold transition-colors"
          >
            Solicitar Membresía
          </a>
        </div>
      </div>
    </div>
  )
}
