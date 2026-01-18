'use client'

import { usePathname } from 'next/navigation'
import Slider from './Slider'

export default function SliderWrapper() {
  const pathname = usePathname()
  
  // Mostrar slider solo en la página home (/)
  const isHome = pathname === '/'
  
  return <Slider isVisible={isHome} />
}
