import React from 'react'

const Card = (props) => {
  return (
    <article className='relative w-11/12 h-80 md:max-w-[300px] m-auto mt-8 bg-lightbg px-6 pt-3 transtion ease-in duration-200 hover:-translate-y-3 rounded-lg shadow-xl cursor-pointer'>
        {props.children}
    </article>
  )
}

export default Card