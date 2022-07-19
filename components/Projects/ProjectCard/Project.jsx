import React from 'react'
import Link from 'next/link';

import Card from '../../UI/Card'

const Project = (props) => {
  return (
    <Card className='bg-lightnavy'>
        <header className='flex items-center justify-between'>
            <div className='folder'>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 text-primary"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div className='project-link cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="w-8 text-lightgray transition ease-in duration-150 hover:text-primary "><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </div>
        </header>
        <h3 className='project-title mt-6 text-lightgray'>
            <Link href='#' aria-label='External Link' target='_blank' rel='noopener noreferrer'>Titre du projet{/* {props.title} */}</Link>
        </h3>
        <p>Description du projet{/* {props.description} */}</p>
{/*         {props.technologies.map(techno => {
            return <span key={Math.random().toString()}>{techno}</span>
        })} */}
    </Card>
  )
}

export default Project