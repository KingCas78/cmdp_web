'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MesaDirectiva() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    })
  }, [])
  const miembros = [
    {
      id: 1,
      nombre: 'Dra. Jessica Aranda Mendoza',
      cargo: 'Presidenta',
      especialidad: 'Dermatología Pediátrica',
      institucion: 'Instituto Nacional de Pediatría',
      bio: 'Dermatóloga Pediatra con amplia experiencia en el manejo de patología de la PIEL, PELO y UÑAS en NIÑOS y ADOLESCENTES',
      foto: '/images/team/dra-jessica-aranda.webp'
    },
    {
      id: 2,
      nombre: 'Dra. María del Mar Sáez de Ocariz Gutiérrez',
      cargo: 'Vicepresidenta',
      especialidad: 'Dermatología Pediátrica',
      institucion: 'Instituto Nacional de Pediatría',
      bio: 'Líder en investigación de dermatitis atópica pediátrica',
      foto: '/images/team/dra-maria-sáez.webp'
    },
    {
      id: 3,
      nombre: 'Dra. Laura Isabel Ramos Gomez',
      cargo: 'Secretaria',
      especialidad: 'Dermatología Pediátrica',
      institucion: 'Instituto Nacional de Pediatría',
      bio: 'Especialista en Dermatitis atópica, dermatoscopia, hemangiomas. Docente de dermatológica pediátrica',
      foto: '/images/team/dra-laura-ramos.webp'
    },
    {
      id: 4,
      nombre: 'Dra. Leticia Lara Mendoza',
      cargo: 'Tesorera',
      especialidad: 'Dermatología Pediátrica',
      institucion: 'Instituto Nacional de Pediatría',
      bio: 'Especialista en dermatología pediátrica',
      foto: '/images/team/dra-leticia-lara.webp'
    },
      ]

  return (
    <div className="mesa-directiva-container">
      {/* Header */}
      <div className="hero-gradient text-white py-12" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Mesa Directiva</h1>
          <p className="mesa-directiva-header-text">Conócenos</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          Nuestra Mesa Directiva está compuesta por dermatólogas pediatras comprometidas con el bienestar y la salud de los niños.
        </p>

        {/* Grid de Miembros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miembros.map((miembro) => (
            <div 
              key={miembro.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden text-center"
              data-aos="zoom-in"
              data-aos-delay={`${(miembro.id - 1) * 100}`}
            >
              <div className="card-header"></div>
              <div className="p-6">
                <div className="mesa-directiva-card-header">
                  <Image
                    src={miembro.foto}
                    alt={miembro.nombre}
                    width={400}
                    height={400}
                    className="rounded-lg"
                    priority={false}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{miembro.nombre}</h3>
                <p className="mesa-directiva-cargo">{miembro.cargo}</p>
                <p className="text-gray-600 text-sm mt-1">{miembro.institucion}</p>
                <p className="text-gray-600 text-xs mt-1">{miembro.especialidad}</p>
                <p className="text-gray-600 mt-4">{miembro.bio}</p>
                
                <div className="mt-6 flex gap-2 justify-center">
                  <button className="mesa-directiva-btn-primary">
                    Email
                  </button>
                  <button className="mesa-directiva-btn-secondary">
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
