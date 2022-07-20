import React from 'react'

const MobileMenu = (props) => {
  return (
    <nav className='p-4 flex flex-col space-y-3 bg-background text-white md:hidden'>
        {props.children}
    </nav>
  )
}

export default MobileMenu