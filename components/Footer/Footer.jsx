import React from 'react'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer id='footer' className='mt-16 flex flex-col w-full bg-background h-32 pb-8'>
      <FooterLinks />
      <p className='flex justify-center m-11 text-white font-medium'>2022© Designed and built by <span className='text-primary ml-1 font-semibold'>Sebastien Stordeur</span></p>
    </footer>
  )
}

export default Footer