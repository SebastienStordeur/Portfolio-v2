import React from 'react'

const HeroButton = ({text}) => {
  return (
    <button className="bg-primary hover:bg-primarytransparent mt-6 ">{text}</button>
  )
}

export default HeroButton