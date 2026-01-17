'use client'

import Image from 'next/image'

export default function Banner() {
  return (
    <div className="w-full">
      <Image 
        src="//congresodermajal.com.mx/cdn/shop/files/CONGRESO_BANNER_2.jpg?v=1747427278&width=3840" 
        alt="Congreso Nacional de Dermatología Pediátrica" 
        width={6000} 
        height={2000} 
        sizes="100vw" 
        className="w-full h-auto"
        priority
      />
    </div>
  )
}
