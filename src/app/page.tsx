'use client'

import Image from 'next/image'

export default function Home() {
  const seccionesNav = [
    { nombre: 'Inicio', href: '/', imagen: '/images/inicio.svg' },
    { nombre: 'Webinars', href: '/webinars', imagen: '/images/webinars.png' },
    { nombre: 'Mesa Directiva', href: '/mesa-directiva', imagen: '/images/mesa-directiva.png' },
    { nombre: 'Videoteca', href: '/videoteca', imagen: '/images/videoteca.png' },
    { nombre: 'Estatutos', href: '/estatutos', imagen: '/images/estatutos.svg' },
    { nombre: 'Galería', href: '/galeria', imagen: '/images/galeria.svg' },
    { nombre: 'Blog', href: '/blog', imagen: '/images/blog.svg' },
    { nombre: 'Contacto', href: '/contacto', imagen: '/images/contacto.svg' },
    { nombre: 'Congreso Nacional', href: '/cndp', imagen: '/images/cndp.png' }
  ]

  return (
    <div className="min-h-screen page-bg">
      {/* Hero Section */}
      <div className="text-white py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenidos</h1>
          <p className="text-xl hero-text-white">
            Colegio Mexicano de Dermatología Pediátrica A.C. - Uniendo a los especialistas en dermatología pediátrica de México para promover la excelencia médica y el bienestar infantil.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/webinars"
              className="hero-btn-primary"
            >
              Ver Webinars
            </a>
            <a
              href="/contacto"
              className="hero-btn-secondary"
            >
              Contactarnos
            </a>
          </div>
        </div>
      </div>

      {/* Secciones Principales */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-4 text-center section-title">Conoce Nuestro Sitio</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto section-title">
          Explora todas nuestras secciones y descubre lo que CMDP tiene para ofrecerte
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seccionesNav.map((seccion, idx) => (
            <a
              key={idx}
              href={seccion.href}
              className="rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-2 p-6 block group card-bg"
            >
              <div className="relative w-full h-40 mb-4 rounded-lg flex items-center justify-center section-bg-sky">
                <Image
                  src={seccion.imagen}
                  alt={seccion.nombre}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-xl font-bold transition-colors group-hover:text-blue-600 card-title">
                {seccion.nombre}
              </h3>
              <div className="mt-4 font-semibold text-sm flex items-center gap-1 card-badge">
                Explorar <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Características */}
      <div className="py-16 section-bg-sky">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center section-title">¿Por qué unirse a CMDP?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center rounded-lg p-8 card-bg">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 card-title">Capacitación Continua</h3>
              <p className="card-text">
                Acceso a webinars, talleres y conferencias con expertos en dermatología pediátrica.
              </p>
            </div>
            <div className="text-center rounded-lg p-8 card-bg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 card-title">Networking</h3>
              <p className="card-text">
                Conecta con otros dermatólogos pediatras y profesionales del sector.
              </p>
            </div>
            <div className="text-center rounded-lg p-8 card-bg">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 card-title">Actualizaciones</h3>
              <p className="card-text">
                Actualizaciones constantes sobre avances y tendencias en dermatología pediátrica.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Últimas Actividades */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center section-title">Próximas Sesiones y Eventos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-sm p-6 card-bg card-border">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 card-badge">
              Webinar
            </span>
            <h3 className="text-xl font-bold mb-2 card-title">Conferencias Magistrales</h3>
            <p className="text-sm mb-4 card-text">
              Explora nuestras conferencias magistrales impartidas por expertos en dermatología pediátrica.
            </p>
            <p className="text-xs card-title">📅 Próxima: Enero 2026</p>
          </div>

          <div className="rounded-lg shadow-sm p-6 card-bg card-border">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 card-badge">
              Galería
            </span>
            <h3 className="text-xl font-bold mb-2 card-title">Congresos y Eventos</h3>
            <p className="text-sm mb-4 card-text">
              Revive los momentos especiales de nuestros congresos nacionales
            </p>
            <p className="text-xs card-title">📸 Galería disponible</p>
          </div>

          <div className="rounded-lg shadow-sm p-6 card-bg card-border">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 card-badge">
              Blog
            </span>
            <h3 className="text-xl font-bold mb-2 card-title">Artículos y Noticias</h3>
            <p className="text-sm mb-4 card-text">
              Exploramos las tendencias que definen el futuro de la dermatología pediátrica
            </p>
            <p className="text-xs card-title">📝 Artículos recientes</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-white py-16 cta-gradient">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para formar parte?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg hero-text-white">
            Únete al Colegio de Médicos Dermatólogos Pediátricos y accede a recursos exclusivos, eventos y una comunidad dedicada a la excelencia.
          </p>
          <a
            href="/contacto"
            className="cta-btn"
          >
            Solicita tu ingreso hoy
          </a>
        </div>
      </div>
    </div>
  )
}
