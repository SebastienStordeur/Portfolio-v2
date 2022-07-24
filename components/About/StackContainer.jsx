import React from 'react'
import Technos from '../../data/Techno.json';
import Stack from './Stack';

const StackContainer = () => {
    const types = ["Front-end", "Back-end", "Autres"];
    return (
        <div className='flex flex-col md:flex-row mt-10'>
            {types.map(type => {
                const technos = Technos.filter(techno => techno.type === `${type}`)
                return <Stack type={type} technos={technos} key={type} />
            }) }
        </div>
    )
}

export default StackContainer