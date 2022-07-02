import React from 'react'
import Carousel from './Carousel'
import ProjectCard from './ProjectCard'
import data from "../data/data.json";

const ProjectSection = () => {

    console.log("data",data)
    return (
        <section>
            <Carousel />
            <div className="grid grid-cols-1 gap-x-4 content-center">
                {data.map(project => {
                    return <ProjectCard key={project.title} project={project} />
                })}
            </div>

        </section>
    )
}

export default ProjectSection