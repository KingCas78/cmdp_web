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
            <img 
              src="/images/logo-horizontal.png" 
              alt="CMDP Logo" 
              className="h-12 object-contain"
            />
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
            <h4 className="footer-title">Legales</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/estatutos" className="footer-link">Estatutos</Link></li>
              <li><a href="/documents/aviso-de-privacidad.pdf" className="footer-link" target="_blank" rel="noopener noreferrer">Aviso de Privacidad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-title">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>📱 +52 </li>
              <li>✉️ col.mex.derma.pediao@gmail.com</li>
              <li>📍 México</li>
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
            <a href="https://www.facebook.com" className="footer-link">
              <img src="/images/icon-facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" className="footer-link">
              <img src="/images/icon-ig.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com" className="footer-link">
              <img src="/images/icon-youtube.png" alt="YouTube" className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm">
            <p>
              © {year} CMDP - Colegio Mexicano de Dermatología Pediátrica. 
              Todos los derechos reservados.
            </p>
            <p className="mt-2 text-gray-500">
              Desarrollado CCS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
