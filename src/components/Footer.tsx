'use client'

import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="text-gray-800 mt-16 footer-bg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="footer-title">CMDP</h3>
            <p className="text-sm">
              Colegio de Médicos Dermatólogos - Promoviendo la excelencia, 
              innovación y educación continua en dermatología.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="footer-link">Inicio</Link></li>
              <li><Link href="/webinars" className="footer-link">Webinars</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
              <li><Link href="/contacto" className="footer-link">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="footer-title">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/estatutos" className="footer-link">Estatutos</Link></li>
              <li><Link href="/estatutos" className="footer-link">Política de Privacidad</Link></li>
              <li><Link href="/estatutos" className="footer-link">Código de Ética</Link></li>
              <li><Link href="/cndp" className="footer-link">Congreso Nacional</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-title">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>📱 +52 (33) 1303-4546</li>
              <li>✉️ info@cmdp.org</li>
              <li>📍 Guadalajara, Jalisco</li>
              <li className="pt-2">
                <a href="/contacto" className="footer-link">
                  Enviar Mensaje
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.facebook.com" className="text-2xl footer-link">f</a>
            <a href="https://www.instagram.com" className="text-2xl footer-link">📷</a>
            <a href="https://www.youtube.com" className="text-2xl footer-link">▶</a>
            <a href="https://wa.me" className="text-2xl footer-link">💬</a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm">
            <p>
              © {year} CMDP - Colegio de Médicos Dermatólogos. 
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
