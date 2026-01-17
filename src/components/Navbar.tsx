'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Inicio', href: '/' },
    { label: 'Webinars', href: '/webinars' },
    { label: 'Mesa Directiva', href: '/mesa-directiva' },
    { label: 'Videoteca', href: '/videoteca' },
    { label: 'Estatutos', href: '/estatutos' },
    { label: 'Galería', href: '/galeria' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Congreso Nacional', href: '/cndp' }
  ]

  return (
    <nav className={`shadow-md sticky top-0 z-50 ${styles.navbar}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏢</span>
            <span className="font-bold text-gray-900 text-lg hidden sm:inline">CMDP</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navbarLink} text-gray-700 text-sm font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${styles.mobileLink} block px-3 py-2 text-gray-700 rounded-md`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
