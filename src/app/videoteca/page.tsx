'use client'

import { useEffect } from 'react'
import VimeoGallery from '@/components/VimeoGallery'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Videoteca() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    })
  }, [])

  return (
    <div className="videoteca-container">
      {/* Header */}
      <div className="hero-gradient text-white py-12" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Videoteca</h1>
          <p className="videoteca-header-text">Acceso a todos los webinars</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12" data-aos="fade-up">
        <VimeoGallery />
      </div>
    </div>
  )
}
