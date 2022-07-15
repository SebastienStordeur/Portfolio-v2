import React, { useState } from 'react'

const ContactForm = () => {

    const [form, setForm] = useState({
        name: "",
        firstName: "",
        email: "",
        message: "",
    })

  return (
    <form>
        <div>
            <label htmlFor='name'>Nom</label>
            <input type='text' name='name' value={form.name} placeholder='Votre nom' />
        </div>
        <div>
            <label htmlFor='firstname'>Prénom</label>
            <input type='text' name='firstname' value={form.firstName} placeholder='Votre prénom' />
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={form.email} placeholder='Votre email' />
        </div>
        <div>
            <label htmlFor='message'>Message</label>
            <textarea name='message' value={form.message} placeholder='Votre message' />
        </div>
    </form>
  )
}

export default ContactForm