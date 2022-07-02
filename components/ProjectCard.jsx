import React from 'react'

const ProjectCard = ({project}) => {
    const {title, description} = project
    return (
        <article className="flex-col border-2 text-blue-600 w-6/12">
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    )
}

export default ProjectCard