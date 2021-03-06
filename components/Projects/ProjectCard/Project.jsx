import React from 'react'
import Link from 'next/link';

import Card from '../../UI/Card'

const Project = (props) => {
  return (
    <Card>
        <header className='flex items-center justify-between'>
            <div className='folder'>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 text-primary"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div className='project-link cursor-pointer'>
                {props.project.live && <Link href={props.project.live}>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className="w-8 text-white transition ease-in duration-150 hover:text-primary ">
                        <title>Lien Externe</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </Link>}
            </div>
        </header>
        <h3 className='project-title mt-6 text-white font-semibold opacity-90 text-xl cursor-default'>
            {props.project.title}
        </h3>
        <div className='flex flex-col justify-between'>
            <p className='mb-6 text-white opacity-70 font-semibold'>{props.project.description}</p>
            <div className='absolute bottom-4 '>
                {props.project.technologies.map(techno => {
                    return <span className='mr-2 mt-4 font-semibold text-white opacity-90' key={Math.random().toString()}>{techno}</span>
                })}
            </div>
        </div>
    </Card>
  )
}

export default Project