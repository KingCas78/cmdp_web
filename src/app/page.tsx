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
    <div className="min-h-screen" style={{backgroundColor: '#F6F4EF'}}>
      {/* Hero Section */}
      <div className="text-white py-20" style={{background: 'linear-gradient(to right, #9FB7C9, #B7D7E8)'}}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvienidos</h1>
          <p className="text-xl text-blue-100">
            Colegio Mexicano de Dermatología Pediátrica A.C. - Uniendo a los especialistas en dermatología pediátrica de México para promover la excelencia médica y el bienestar infantil.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/webinars"
              className="px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: '#F6F4EF',
                color: '#9FB7C9'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E3E7EA';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F6F4EF';
              }}
            >
              Ver Webinars
            </a>
            <a
              href="/contacto"
              className="border-2 px-8 py-3 rounded-lg transition-all"
              style={{
                borderColor: '#F6F4EF',
                color: '#F6F4EF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D8D3E8';
                e.currentTarget.style.borderColor = '#D8D3E8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#F6F4EF';
              }}
            >
              Contactarnos
            </a>
          </div>
        </div>
      </div>

      {/* Secciones Principales */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#9FB7C9'}}>Conoce Nuestro Sitio</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{color: '#9FB7C9'}}>
          Explora todas nuestras secciones y descubre lo que CMDP tiene para ofrecerte
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seccionesNav.map((seccion, idx) => (
            <a
              key={idx}
              href={seccion.href}
              className="rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-2 p-6 block group"
              style={{backgroundColor: '#B7D7E8'}}
            >
              <div className="relative w-full h-40 mb-4 rounded-lg flex items-center justify-center" style={{backgroundColor: '#CFE9F5'}}>
                <Image
                  src={seccion.imagen}
                  alt={seccion.nombre}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-xl font-bold transition-colors group-hover:text-blue-600" style={{color: '#9FB7C9'}}>
                {seccion.nombre}
              </h3>
              <div className="mt-4 font-semibold text-sm flex items-center gap-1" style={{color: '#E6D6A8'}}>
                Explorar <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Características */}
      <div className="py-16" style={{backgroundColor: '#CFE9F5'}}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#9FB7C9'}}>¿Por qué unirse a CMDP?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center rounded-lg p-8" style={{backgroundColor: '#B7D7E8'}}>
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#9FB7C9'}}>Capacitación Continua</h3>
              <p style={{color: '#2C2C2C'}}>
                Acceso a webinars, talleres y conferencias con expertos en dermatología pediátrica.
              </p>
            </div>
            <div className="text-center rounded-lg p-8" style={{backgroundColor: '#B7D7E8'}}>
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#9FB7C9'}}>Networking</h3>
              <p style={{color: '#2C2C2C'}}>
                Conecta con otros dermatólogos pediatras y profesionales del sector.
              </p>
            </div>
            <div className="text-center rounded-lg p-8" style={{backgroundColor: '#B7D7E8'}}>
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3" style={{color: '#9FB7C9'}}>Actualizaciones</h3>
              <p style={{color: '#2C2C2C'}}>
                Actualizaciones constantes sobre avances y tendencias en dermatología pediátrica.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Últimas Actividades */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#9FB7C9'}}>Próximas Sesiones y Eventos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-sm p-6" style={{backgroundColor: '#B7D7E8', border: '1px solid #E3E7EA'}}>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3" style={{backgroundColor: '#D8D3E8', color: '#9FB7C9'}}>
              Webinar
            </span>
            <h3 className="text-xl font-bold mb-2" style={{color: '#9FB7C9'}}>Conferencias Magistrales</h3>
            <p className="text-sm mb-4" style={{color: '#2C2C2C'}}>
              Explora nuestras conferencias magistrales impartidas por expertos en dermatología pediátrica.
            </p>
            <p className="text-xs" style={{color: '#9FB7C9'}}>📅 Próxima: Enero 2026</p>
          </div>

          <div className="rounded-lg shadow-sm p-6" style={{backgroundColor: '#B7D7E8', border: '1px solid #E3E7EA'}}>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3" style={{backgroundColor: '#D8D3E8', color: '#9FB7C9'}}>
              Galería
            </span>
            <h3 className="text-xl font-bold mb-2" style={{color: '#9FB7C9'}}>Congresos y Eventos</h3>
            <p className="text-sm mb-4" style={{color: '#2C2C2C'}}>
              Revive los momentos especiales de nuestros congresos nacionales
            </p>
            <p className="text-xs" style={{color: '#9FB7C9'}}>📸 Galería disponible</p>
          </div>

          <div className="rounded-lg shadow-sm p-6" style={{backgroundColor: '#B7D7E8', border: '1px solid #E3E7EA'}}>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3" style={{backgroundColor: '#D8D3E8', color: '#9FB7C9'}}>
              Blog
            </span>
            <h3 className="text-xl font-bold mb-2" style={{color: '#9FB7C9'}}>Artículos y Noticias</h3>
            <p className="text-sm mb-4" style={{color: '#2C2C2C'}}>
              Exploramos las tendencias que definen el futuro de la dermatología pediátrica
            </p>
            <p className="text-xs" style={{color: '#9FB7C9'}}>📝 Artículos recientes</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-white py-16" style={{background: 'linear-gradient(to right, #9FB7C9, #B7D7E8)'}}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para formar parte?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg" style={{opacity: 0.95}}>
            Únete al Colegio de Médicos Dermatólogos Pediátricos y accede a recursos exclusivos, eventos y una comunidad dedicada a la excelencia.
          </p>
          <a
            href="/contacto"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all"
            style={{
              backgroundColor: '#F6F4EF',
              color: '#9FB7C9'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E6D6A8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F6F4EF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Solicita tu ingreso hoy
          </a>
        </div>
      </div>
    </div>
  )
}
