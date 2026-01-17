'use client'

export default function Banner() {
  return (
    <div className="w-full" style={{ aspectRatio: '16 / 5' }}>
      <img 
        src="/images/CONGRESO_BANNER.webp" 
        alt="Congreso Nacional de Dermatología Pediátrica" 
        srcSet="/images/CONGRESO_BANNER.webp?w=375 375w, /images/CONGRESO_BANNER.webp?w=768 768w, /images/CONGRESO_BANNER.webp?w=1280 1280w, /images/CONGRESO_BANNER.webp?w=1920 1920w" 
        sizes="100vw" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          display: 'block'
        }}
      />
    </div>
  )
}
