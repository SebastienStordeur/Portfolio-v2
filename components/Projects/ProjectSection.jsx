import { Carrousel, Project } from '../../components';

const ProjectSection = (props) => {
    return (
        <section className='min-h-screen pt-8'>
            <h2 className='ml-8 text-primary font-semibold text-lg md:after:content-[""] md:after:ml-5 after:w-[300px] md:after:h-px md:after:bg-primary md:after:absolute md:after:mt-3 md:after:bg-gradient-to-r from-background via-primary to-background'>Projets réalisés</h2>
            <Carrousel />
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {props.projects.map(project => {
                return <Project project={project} key={project.id} />
            }) }
            </div>

        </section>
    )
}

export default ProjectSection