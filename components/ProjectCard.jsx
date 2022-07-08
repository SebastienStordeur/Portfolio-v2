import React from 'react'

const ProjectCard = ({project}) => {
    const {title, description} = project
    return (
        <article className="flex-col border-2 rounded-r-lg text-blue-600 w-[300px] h-[300px]">
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    )
}

export default ProjectCard