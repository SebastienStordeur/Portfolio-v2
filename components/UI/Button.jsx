import React from 'react'

const Button = (props) => {
  return (
    <button 
        className="w-[300px] h-[45px] m-auto md:mx-8 border text-primary border-primary rounded-lg bg-transparent hover:bg-primarytransparent mt-6 font-Montserrat font-semibold md:w-[250px] md:ml-0" 
        aria-label={props.text}
        type={props.type || 'button'}
    >
        {props.text}
    </button>
  )
}

export default Button