import PropTypes from 'prop-types'; 

const Project = ({ title, description, imageUrl, githubLink }) => {
    return (
        <div className="project">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    );
  };

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
};

const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            description: "Project 1 description",
            imageUrl: '/path-to-image.jpg',
            githubLink: 'https://github.com/thinker92/project-1'
        }
    ];
    return (
        <div className="portfolio">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
    );
};

export default Portfolio;