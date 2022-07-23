import React from 'react'
import Image from 'next/image'


import Technos from '../../data/Techno.json';

const Stack = () => {
    const frontTechnos = Technos.filter(techno => techno.type === "Front");
    const backTechnos = Technos.filter(techno => techno.type === "Back");
    const otherTechnos = Technos.filter(techno => techno.type === "Other")
    console.log(frontTechnos, backTechnos)
  return (
    <div className='mt-10'>
        <h3>Technologies utilisées</h3>
        <h4>Front-end</h4>
        <div className='grid grid-cols-2 mt-8 gap-4 md:grid-cols-4'>
        {frontTechnos.map(techno => (
          <Image src={techno.icon} alt="" width="64px" height="64px" loading='lazy' key={techno.id} />
        )
        )}
        </div>
        <h3>Back-end</h3>
        <div className='grid grid-cols-2 mt-8 gap-4 md:grid-cols-4'>
          {backTechnos.map(techno => (
            <Image src={techno.icon} alt="" width="64px" height="64px" loading='lazy' key={techno.id} />
          ))}
        </div>
        <h3>Autres</h3>
        <div className='grid grid-cols-2 mt-8 gap-4 mb-8 md:grid-cols-4'>
          {otherTechnos.map(techno => (
            <Image src={techno.icon} alt="" width="64px" height="64px" loading='lazy' key={techno.id} />
          ))}
        </div>
    </div>
  )
}

export default Stack