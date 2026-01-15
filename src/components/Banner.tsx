'use client'

export default function Banner() {
  return (
    <div className="py-6" style={{background: 'linear-gradient(to right, #D8D3E8, #E6D6A8)'}}>
      <style>{`
        .banner-btn {
          background-color: #9FB7C9;
          color: #F6F4EF;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .banner-btn:hover {
          background-color: #B7D7E8;
          transform: translateY(-2px);
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg md:text-2xl font-bold mb-2" style={{color: '#9FB7C9'}}>
              🎉 Congreso Nacional de Dermatología Pediátrica
            </h3>
            <p className="text-sm md:text-base" style={{color: '#9FB7C9', opacity: 0.9}}>
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
