import React from 'react'
import { Carrousel, Project } from '../../components';

const ProjectSection = () => {

    return (
        <section>
            <Carrousel />
{/*             <Carousel />
            <div className="grid grid-cols-1 gap-x-4 content-center">
                {data.map(project => {
                    return <ProjectCard key={project.title} project={project} />
                })}
            </div> */}

        </section>
    )
}

export default ProjectSection