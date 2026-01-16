'use client'

export default function Banner() {
  return (
    <div className="py-6 banner-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg md:text-2xl font-bold mb-2 banner-title">
              🎉 Congreso Nacional de Dermatología Pediátrica
            </h3>
            <p className="text-sm md:text-base banner-text">
              Únete a nosotros del 2 al 5 de julio para el congreso más importante en dermatología pediátrica
            </p>
          </div>
          <a
            href="/cndp"
            className="banner-btn"
          >
            Saber más
          </a>
        </div>
      </div>
    </div>
  )
}
