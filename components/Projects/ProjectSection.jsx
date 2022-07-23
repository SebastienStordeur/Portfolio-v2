import React from 'react'
import { Carrousel, Project } from '../../components';

const ProjectSection = (props) => {
console.log(props)
    return (
        <section className='min-h-[100vh]'>
            <h2 className='ml-10 text-primary md:after:content-[""] md:after:ml-5 after:w-[300px] md:after:h-px md:after:bg-primary md:after:absolute md:after:mt-3 md:after:bg-gradient-to-r from-background via-primary to-background'>Projets réalisés</h2>
            <Carrousel />
{/*             <Carousel />
            <div className="grid grid-cols-1 gap-x-4 content-center">
                {data.map(project => {
                    return <ProjectCard key={project.title} project={project} />
                })}
            </div> */}
            <div className='grid'>
            {props.projects.map(project => {
                return <Project project={project} key={project.id} />
            }) }
            </div>

        </section>
    )
}

export default ProjectSection