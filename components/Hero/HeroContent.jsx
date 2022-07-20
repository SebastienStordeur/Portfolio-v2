import React, { Fragment } from 'react'
import Button from '../UI/Button'

const HeroContent = () => {
  return (
    <Fragment>
        <h1 className="text-3xl text-primary text-h1 mb-4 font-semibold md:mt-[10vh] font-Montserrat">Sébastien Stordeur</h1>
        <h2 className="text-2xl font-semibold font-default">Développeur front-end</h2>
        <div className='flex flex-col md:flex-row md:justify-items-start'>
          <Button text="Télécharger CV" />
          <Button text="Contact" />
        </div>
    </Fragment>
  )
}

export default HeroContent