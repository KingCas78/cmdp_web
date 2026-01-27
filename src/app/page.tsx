'use client'

import Slider from '@/components/Slider'

export default function Home() {
  const seccionesNav = [
    { nombre: 'Inicio', href: '/', imagen: '/images/Logo_CMDP.png' },
    { nombre: 'Webinars', href: '/webinars', imagen: '/images/webinars.png' },
    { nombre: 'Mesa Directiva', href: '/mesa-directiva', imagen: '/images/mesa-directiva.png' },
    { nombre: 'Videoteca', href: '/videoteca', imagen: '/images/videoteca.png' },
    { nombre: 'Estatutos', href: '/estatutos', imagen: '/images/estatutos.png' },
    { nombre: 'Galería', href: '/galeria', imagen: '/images/galeria.png' },
    { nombre: 'Blog', href: '/blog', imagen: '/images/blog.png' },
    { nombre: 'Contacto', href: '/contacto', imagen: '/images/contacto.png' },
    { nombre: 'Congreso Nacional', href: '/cndp', imagen: '/images/cndp.png' }
  ]

  return (
    <div className="min-h-screen page-bg">
      {/* Slider */}
      <Slider isVisible={true} />

      {/* Hero Section */}
      <div className="text-white py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenidos</h1>
          <p className="text-xl hero-text-white">
            Colegio Mexicano de Dermatología Pediátrica A.C.
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
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="relative w-full h-40 mb-4 rounded-lg flex items-center justify-center section-bg-sky">
                <img
                  src={seccion.imagen}
                  alt={seccion.nombre}
                  className="max-h-full max-w-full object-contain p-4"
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
      <div className="py-16 section-bg-sky" data-aos="fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center section-title" data-aos="fade-down">Quienes somos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Columna izquierda: Carta de Mesa Directiva */}
            <div className="rounded-lg p-8 card-bg shadow-lg" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-4 card-title">Mensaje de la Mesa Directiva</h3>
              <p className="card-text mb-4 leading-relaxed">
                El Colegio Mexicano de Dermatología Pediátrica se dedica a promover la excelencia en el cuidado dermatológico de nuestros niños. 
              </p>
              <p className="card-text mb-4 leading-relaxed">
                Nos comprometemos a ofrecer capacitación continua, facilitar la colaboración entre profesionales y mantenernos a la vanguardia de los avances científicos en dermatología pediátrica.
              </p>
              <p className="card-text mb-6 leading-relaxed">
                Juntos, construimos una comunidad dedicada a mejorar la salud dermatológica de los menores en México.
              </p>
              <div className="pt-4 border-t border-gray-300">
                <p className="font-semibold card-title">Mesa Directiva</p>
                <p className="text-sm card-text">Colegio Mexicano de Dermatología Pediátrica A.C.</p>
              </div>
            </div>

            {/* Columna derecha: Imagen Fotográfica */}
            <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-96" data-aos="fade-left">
              <img 
                src="/images/mesa-directiva.jpg" 
                alt="Mesa Directiva" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Últimas Actividades */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 section-title">No te pierdas el Congreso Nacional de Dermatología Pediátrica del 2026</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto section-title">
            Únete a la celebración anual del colegio donde se reúnen los mejores expertos en dermatología pediátrica para compartir conocimiento, innovación y experiencias en el cuidado dermatológico infantil.
          </p>
          <a
            href="/cndp"
            className="btn btn-primary"
          >
            Informes del Congreso
          </a>
        </div>
      </div>
      {/* Divider */}
        <div className="footer-divider pt-8"></div>
      {/* Video CNDP 2025 */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center section-title">Así se vivió el CNDP 2025</h2>
        
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-4xl">
            <div className="video-responsive">
            <div className="vimeo-wrapper"><iframe src="https://player.vimeo.com/video/1158253418?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" className="vimeo-iframe" title="Clausura 2"></iframe></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-white py-16 cta-gradient">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Se parte del Colegio Mexicano de Dermatología Pediátrica</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg hero-text-white">
            Únete al Colegio Mexicano de Dermatología Pediátrica, participa en eventos y una comunidad dedicada a la excelencia.
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
