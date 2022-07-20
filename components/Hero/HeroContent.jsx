import React, { Fragment } from 'react'
import Button from '../UI/Button'

const HeroContent = () => {
  return (
    <Fragment>
        <h1 className="text-3xl font-semibold text-primary text-h1 mb-4">Sébastien Stordeur</h1>
        <h2 className="text-2xl font-semibold">Développeur front-end</h2>
        <div className='flex flex-col md:flex-row md:justify-items-start'>
          <Button text="Télécharger CV" />
          <Button text="Contact" />
        </div>
    </Fragment>
  )
}

export default HeroContent