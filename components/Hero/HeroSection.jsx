import React from 'react'
import HeroContent from './HeroContent'

const HeroSection = () => {
  return (
    <section className="flex flex-col min-h-screen text-center text-white pt-10 max-w-[1240px] m-auto md:text-left md:ml-4">
        <HeroContent />
    </section>
  )
}

export default HeroSection