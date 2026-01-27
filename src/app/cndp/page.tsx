'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function CNDP() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    })
  }, [])
  return (
    <div className="min-h-screen page-bg">
      {/* Header */}
      <div className="hero-gradient text-white py-12" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">CNDP</h1>
          <p className="text-cyan-100 mt-2">Congreso Nacional de Dermatología Pediátrica 2026</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Sección Introducción */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bienvenidos</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            El Colegio Mexicano de Dermatología Pediátrica A.C. (CMDP) es una asociación civil sin fines de lucro que agrupa a los dermatólogos pediatras más destacados de México. 
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
           Desde su fundación en 1997, el CMDP se ha dedicado a promover la excelencia en la atención dermatológica infantil, fomentar la investigación científica y ofrecer educación continua a sus miembros y a la comunidad médica en general.
          </p>
        </div>

        {/* Banner */}
        <div className="my-8 rounded-lg overflow-hidden shadow-lg" data-aos="zoom-in">
          <Image
            src="/images/BANNER_1.webp"
            alt="Congreso Nacional de Dermatología Pediátrica"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
            priority={false}
          />
        </div>

       
          {/* Contacto Congreso Nacional */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contacto Congreso Nacional</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📱 Teléfono</h3>
                <p className="text-gray-600">+58 212 7654321</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">✉️ Email</h3>
                <p className="text-gray-600">info@cndp.org</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📍 Dirección</h3>
                <p className="text-gray-600">Sede Central, Caracas</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
