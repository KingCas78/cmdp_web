'use client'

import styles from './Banner.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img 
        src="/images/CONGRESO_BANNER.webp" 
        alt="Congreso Nacional de Dermatología Pediátrica" 
        srcSet="/images/CONGRESO_BANNER.webp?w=375 375w, /images/CONGRESO_BANNER.webp?w=768 768w, /images/CONGRESO_BANNER.webp?w=1280 1280w, /images/CONGRESO_BANNER.webp?w=1920 1920w" 
        sizes="100vw" 
        className={styles.bannerImage}
      />
    </div>
  )
}
