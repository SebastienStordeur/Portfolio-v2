import React from 'react'

const Card = (props) => {
  return (
    <article className='w-11/12 h-80 m-auto bg-lightnavy px-6 pt-3 transtion ease-in duration-150 hover:-translate-y-3 rounded-lg'>
        {props.children}
    </article>
  )
}

export default Card