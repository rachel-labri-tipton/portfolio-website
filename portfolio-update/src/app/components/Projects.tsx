import projectsData from '../../data/projectsData';

const Projects = () => (
    <section className="projects-wrapper" id="work">
        <h1 className="section-heading">Work</h1>
        {projectsData.map((project) => (
            <div key={project.id} className="project-card">
                <h1>{project.title}</h1>
                <h3>{project.description}</h3>
                {project.imgSrc && <img className="project-image" src={project.imgSrc} alt={project.title} />}
                <a href={project.repoLink}><button>Go To Repo</button></a>
            </div>
        ))}
    </section>
);

export default Projects;