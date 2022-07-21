import React from 'react'
import Image from 'next/image'


import Technos from '../../data/Techno.json';

const Stack = () => {
    const frontTechnos = Technos.filter(techno => techno.type === "Front");
    const backTechnos = Technos.filter(techno => techno.type === "Back");
    console.log(frontTechnos, backTechnos)
  return (
    <div className='mt-10'>
        <h3>Technologies utilisées</h3>
        <h4>Front-end</h4>
        {frontTechnos.map(techno => (
            <div key={techno.id}>
                <h4>{techno.name}</h4>
                <Image src="/../../assets/figma-svgrepo-com.svg" alt="" width="100%" height="100%" />
            </div>
        )
        )}
    </div>
  )
}

export default Stack