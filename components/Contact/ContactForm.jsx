import React, { useReducer, useRef, useState } from 'react'

const emailReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    };
    if(action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    };
    return { value: '', isValid: false };
};


const ContactForm = () => {

    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    });
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();

  return (
    <form>
        <div>
            <label htmlFor='full name'>Nom</label>
            <input type='text' name='full name' value={form.name} placeholder='Votre nom complet' ref={nameInputRef}/>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={form.email} placeholder='Votre email' ref={emailInputRef}/>
        </div>
        <div>
            <label htmlFor='message'>Message</label>
            <textarea name='message' value={form.message} placeholder='Votre message' ref={messageInputRef}/>
        </div>
    </form>
  )
}

export default ContactForm