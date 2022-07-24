import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section className='flex flex-col m-auto'>
      <h2 className='ml-8 mb-8 text-primary font-semibold text-lg md:after:content-[""] md:after:ml-5 after:w-[300px] md:after:h-px md:after:bg-primary md:after:absolute md:after:mt-3 md:after:bg-gradient-to-r from-background via-primary to-background'>Contact</h2>
        <ContactForm />
    </section>
  )
}

export default ContactSection