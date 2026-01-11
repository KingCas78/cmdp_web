'use client'

import Image from 'next/image'

export default function Home() {
  const seccionesNav = [
    { nombre: 'Inicio', href: '/', imagen: '/images/inicio.svg' },
    { nombre: 'Webinars', href: '/webinars', imagen: '/images/webinars.svg' },
    { nombre: 'Mesa Directiva', href: '/mesa-directiva', imagen: '/images/mesa-directiva.svg' },
    { nombre: 'Videoteca', href: '/videoteca', imagen: '/images/videoteca.svg' },
    { nombre: 'Estatutos', href: '/estatutos', imagen: '/images/estatutos.svg' },
    { nombre: 'Galería', href: '/galeria', imagen: '/images/galeria.svg' },
    { nombre: 'Blog', href: '/blog', imagen: '/images/blog.svg' },
    { nombre: 'Contacto', href: '/contacto', imagen: '/images/contacto.svg' },
    { nombre: 'Congreso Nacional', href: '/cndp', imagen: '/images/cndp.svg' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">CMDP - Excelencia en Dermatología Pediátrica</h1>
          <p className="text-xl text-blue-100">
            La asociación líder en México dedicada a la formación, investigación y excelencia clínica de dermatólogos pediatras. Únete a nuestra comunidad de expertos.
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
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={seccion.imagen}
                  alt={seccion.nombre}
                  fill
                  className="object-contain"
                />
              </div>
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
                Acceso a webinars, talleres y conferencias con expertos en dermatología pediátrica.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Networking</h3>
              <p className="text-gray-600">
                Conecta con otros dermatólogos pediatras y profesionales del sector.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comunidad médica dermatológica</h3>
              <p className="text-gray-600">
                Actualizaciones constantes sobre avances y tendencias en dermatología pediátrica.
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Conferencias magistrales y clases destacadas</h3>
            <p className="text-gray-600 text-sm mb-4">
             Explora nuestras conferencias magistrales y clases destacadas impartidas por expertos en dermatología pediátrica.
            </p>
            <p className="text-gray-500 text-xs">15 de Enero - 10:00 AM</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-3">
              Galería
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Congresos Nacionales de Dermatología Pediátrica</h3>
            <p className="text-gray-600 text-sm mb-4">
              Revive los momentos especiales de los últimos congresos
            </p>
            <p className="text-gray-500 text-xs">Noviembre 2025</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-3">
              Artículo
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Próximos Avances en Dermatología Pediátrica</h3>
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
            Únete al Colegio Mexicano de Dermatología Pediátrica A.C. y accede a recursos exclusivos, eventos y una comunidad dedicada a la excelencia en dermatología pediátrica.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-semibold transition-colors"
          >
            Solicita tu ingreso hoy
          </a>
        </div>
      </div>
    </div>
  )
}
