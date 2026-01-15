import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="text-gray-800 mt-16" style={{backgroundColor: '#CFE9F5'}}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4" style={{color: '#9FB7C9'}}>CMDP</h3>
            <p className="text-sm">
              Cámara Nacional de la Iniciativa Privada - Promoviendo el desarrollo 
              empresarial y económico de Venezuela.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4" style={{color: '#9FB7C9'}}>Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" style={{color: '#E6D6A8'}} className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9FB7C9'} onMouseLeave={(e) => e.currentTarget.style.color = '#E6D6A8'}>Inicio</Link></li>
              <li><Link href="/webinars" style={{color: '#E6D6A8'}} className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9FB7C9'} onMouseLeave={(e) => e.currentTarget.style.color = '#E6D6A8'}>Webinars</Link></li>
              <li><Link href="/blog" style={{color: '#E6D6A8'}} className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9FB7C9'} onMouseLeave={(e) => e.currentTarget.style.color = '#E6D6A8'}>Blog</Link></li>
              <li><Link href="/contacto" style={{color: '#E6D6A8'}} className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9FB7C9'} onMouseLeave={(e) => e.currentTarget.style.color = '#E6D6A8'}>Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4" style={{color: '#9FB7C9'}}>Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/estatutos" style={{color: '#E6D6A8'}} className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9FB7C9'} onMouseLeave={(e) => e.currentTarget.style.color = '#E6D6A8'}>Estatutos</Link></li>
              <li><Link href="/estatutos" style={{color: '#E6D6A8'}} className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9FB7C9'} onMouseLeave={(e) => e.currentTarget.style.color = '#E6D6A8'}>Política de Privacidad</Link></li>
              <li><Link href="/estatutos" style={{color: '#E6D6A8'}} className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9FB7C9'} onMouseLeave={(e) => e.currentTarget.style.color = '#E6D6A8'}>Código de Ética</Link></li>
              <li><Link href="/cndp" style={{color: '#E6D6A8'}} className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9FB7C9'} onMouseLeave={(e) => e.currentTarget.style.color = '#E6D6A8'}>Congreso Nacional</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4" style={{color: '#9FB7C9'}}>Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>📱 +58 212 1234567</li>
              <li>✉️ info@cmdp.org</li>
              <li>📍 Caracas, Venezuela</li>
              <li className="pt-2">
                <a href="/contacto" style={{color: '#E6D6A8'}} className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9FB7C9'} onMouseLeave={(e) => e.currentTarget.style.color = '#E6D6A8'}>
                  Enviar Mensaje
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{borderTop: '1px solid #B7D7E8'}} className="pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-2xl transition-colors" style={{color: '#9FB7C9'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E6D6A8'} onMouseLeave={(e) => e.currentTarget.style.color = '#9FB7C9'}>f</a>
            <a href="#" className="text-2xl transition-colors" style={{color: '#9FB7C9'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E6D6A8'} onMouseLeave={(e) => e.currentTarget.style.color = '#9FB7C9'}>📷</a>
            <a href="#" className="text-2xl transition-colors" style={{color: '#9FB7C9'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E6D6A8'} onMouseLeave={(e) => e.currentTarget.style.color = '#9FB7C9'}>▶</a>
            <a href="#" className="text-2xl transition-colors" style={{color: '#9FB7C9'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E6D6A8'} onMouseLeave={(e) => e.currentTarget.style.color = '#9FB7C9'}>💬</a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm">
            <p>
              © {year} CMDP - Cámara Nacional de la Iniciativa Privada. 
              Todos los derechos reservados.
            </p>
            <p className="mt-2 text-gray-500">
              Desarrollado con ❤️ usando Next.js, Supabase y Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
