import React from 'react'
import Informations from './Informations'

const AboutSection = () => {
  return (
    <section className='min-h-screen flex flex-col text-white m-auto'>
      <h2 className='ml-10 text-primary md:after:content-[""] md:after:ml-5 after:w-[300px] md:after:h-px md:after:bg-primary md:after:absolute md:after:mt-3 md:after:bg-gradient-to-r from-background via-primary to-background'>À propos</h2>
      <div>
        <Informations />
      </div>
    </section>
  )
}

export default AboutSection