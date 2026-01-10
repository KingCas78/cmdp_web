import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">CMDP</h3>
            <p className="text-sm">
              Cámara Nacional de la Iniciativa Privada - Promoviendo el desarrollo 
              empresarial y económico de Venezuela.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400">Inicio</Link></li>
              <li><Link href="/webinars" className="hover:text-blue-400">Webinars</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-blue-400">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/estatutos" className="hover:text-blue-400">Estatutos</Link></li>
              <li><Link href="/estatutos" className="hover:text-blue-400">Política de Privacidad</Link></li>
              <li><Link href="/estatutos" className="hover:text-blue-400">Código de Ética</Link></li>
              <li><Link href="/cndp" className="hover:text-blue-400">Congreso Nacional</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>📱 +58 212 1234567</li>
              <li>✉️ info@cmdp.org</li>
              <li>📍 Caracas, Venezuela</li>
              <li className="pt-2">
                <a href="/contacto" className="text-blue-400 hover:text-blue-300">
                  Enviar Mensaje
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-2xl hover:text-blue-400">f</a>
            <a href="#" className="text-2xl hover:text-blue-400">𝕏</a>
            <a href="#" className="text-2xl hover:text-blue-400">in</a>
            <a href="#" className="text-2xl hover:text-blue-400">▶</a>
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
