import * as images from '../assets/images/index'

const projects = []
export default function Portfolio() {
    // renders the portfolio page
    return (
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
          {/* iterates over the projects array above to create indiviudal elements */}
          {projects.map((project, index) => (
            // links the project to the URL. key prop is set to index for an id of each project, also allows for styling to be done with the class name
            <a key={index} href={project.link} className="project-link">
                          <img className="project" src={images[project.imageName]} alt={project.title} />
                          <div className="project-title">{project.title}</div>
                          {/* Displaying the repository link as clickable text */}
                          <a href={project.repo} className="project-repo">Project Repository</a>
                      </a>
          ))}
        </div>
      </section>
    );
  }