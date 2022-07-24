import React from 'react'

  const MenuAlt4Svg = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${isOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="white">
      <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );

const Navbar = ({ isOpen, setIsOpen, navLinks }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-background max-w-[1240px] m-auto">
        <div className="flex items-center text-white">
            Logo
        </div>
        <nav className="block hidden md:block space-x-6 text-white font-default">
            {navLinks}
        </nav>
        <button 
          type="button" 
          aria-label="Toggle mobile menu" 
          onClick={() => setIsOpen(!isOpen)} 
          className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50">
          <MenuAlt4Svg isOpen={isOpen} />
        </button>
    </div>
  )
}

export default Navbar