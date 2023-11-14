import PropTypes from 'prop-types'; 
import './Portfolio.css'
import weatherRepoImage from '../assets/images/weatherRepo.png';
import pwGeneratorImage from '../assets/images/pw-Generator.png';
import readmeCreatorImage from '../assets/images/readmeCreator.png'
import noteTakerImage from '../assets/images/noteTaker.png'
import employeeTrackerImage from '../assets/images/employeeTracker.png'

const Project = ({ title, description, imageUrl, githubLink, liveUrl }) => {
    return (
        <div className="project">
        <img className="project-image" src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live Link
        </a>
        <br></br>
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
    liveUrl: PropTypes.string,
};

const Portfolio = () => {
    const projects = [
        {
            title: 'Weather Repository',
            description: "A weather dashboard application allows you to search for current and 5-day forecast weather information for any city",
            imageUrl: weatherRepoImage,
            githubLink: 'https://github.com/Thinker92/Weather-Repo',
            liveUrl: 'https://thinker92.github.io/Javascript-Password-Generator/'
        },
        {
            title: 'Password Generator',
            description: "A simple to use Javascript password generator",
            imageUrl: pwGeneratorImage,
            githubLink: 'https://github.com/Thinker92/Javascript-Password-Generator',
            liveUrl: 'https://thinker92.github.io/Javascript-Password-Generator/'
        },
        {
            title: 'Readme-Creator',
            description: "A Node.js application for writing 'README.md' files for all your projects!",
            imageUrl: readmeCreatorImage,
            githubLink: 'https://github.com/Thinker92/Readme-Creator',
        },
        {
            title: 'QuickNotes-Express',
            description: "A note taking application written with an Express server for the backend.",
            imageUrl: noteTakerImage,
            githubLink: 'https://github.com/Thinker92/QuickNotes-Express',
            liveUrl: 'https://calm-wave-33741-356be5d5662f.herokuapp.com/'
        },
        {
            title: 'Employee-Tracker',
            description: "A Node.js application ran with MySQL2 and Inquirer to manage a company's employees. It allows you to view, add, and update departments, roles, and employees.",
            imageUrl: employeeTrackerImage,
            githubLink: 'https://github.com/Thinker92/Employee-Tracker',
        },
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
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
    );
};

export default Portfolio;