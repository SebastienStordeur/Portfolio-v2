import React, { useState } from 'react'
import Image from 'next/image'

import { ChevronLeft, ChevronRight } from '../../../public/assets'

const Carousel = () => {

  const [index, setIndex] = useState(0);

  const previousButtonHandler = () => {
    setIndex(index-1)
  }

  const nextButtonHandler = () => {
    setIndex(index+1)
  }

  return (
    <div className="flex">
{/*       <button type='button' aria-label='Projet précédent' className=''>
        <Image src={ChevronLeft} alt='Projet précédent' aria-label='Projet précédent' onClick={previousButtonHandler}/>
      </button>
      <div className='w-[300px] h-[200px] bg-primary'></div>
      <button type='button' aria-label='Projet suivant'>
        <Image src={ChevronRight} alt='Projet suivant' aria-label='Projet suivant' onClick={nextButtonHandler}/>
      </button> */}
    </div>

  )
}

export default Carousel