import React from 'react'

const Button = (props) => {
  return (
    <button 
        className="w-[300px] h-[45px] mx-auto border text-primary border-primary rounded-lg bg-transparent hover:bg-primarytransparent mt-6 font-['default'] font-semibold" 
        aria-label={props.text}
        type={props.type || 'button'}
    >
        {props.text}
    </button>
  )
}

export default Button