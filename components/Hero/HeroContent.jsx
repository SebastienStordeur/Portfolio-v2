import React, { Fragment } from 'react'
import Button from '../UI/Button'

const HeroContent = () => {
  return (
    <Fragment>
{/*         <h1 className="text-3xl font-semibold">Sébastien Stordeur</h1>
        <h2 className="text-2xl font-semibold">Développeur front-end</h2> */}
        <Button text="Télécharger CV" />
        <Button text="Contact" />
    </Fragment>
  )
}

export default HeroContent