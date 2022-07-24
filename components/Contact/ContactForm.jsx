import React, { useReducer, useRef, useState } from 'react'
import Button from '../UI/Button';

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
    <form className='w-11/12 m-auto min-w-[300px]'>
        <div className='flex flex-col'>
            <label htmlFor='fullname' className='text-white mb-1'>Nom</label>
            <input 
                type='text'
                className='h-14 pl-3 rounded-lg shadow-lg'
                name='fullname' 
                placeholder='Votre nom complet'
                ref={nameInputRef}/>
        </div>
        <div className='flex flex-col mt-4'>
            <label htmlFor='email' className='text-white mb-1'>Email</label>
            <input type='email' className='h-14 pl-3 rounded-lg' name='email' placeholder='exemple@mail.fr' ref={emailInputRef}/>
        </div>
        <div className='flex flex-col mt-4'>
            <label htmlFor='message' className='text-white mb-1'>Message</label>
            <textarea name='message' placeholder='Votre message' ref={messageInputRef} className='resize-none h-[300px] rounded-lg p-4'/>
        </div>
        <Button>Envoyer</Button>
    </form>
  )
}

export default ContactForm