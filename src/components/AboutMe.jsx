import './AboutMe.css';
import headshot from '../assets/images/headshot.jpg';

function AboutMe() {
  return (
    <div className="about-container">
      <aside className="sidebar">
        <div className="card personal-details">
          <img src={headshot} alt="Vilson Apostolovski" />
          <h2>Vilson Apostolovski II</h2>
          <p>vilsonapo@me.com</p>
          <ul className="skills-list">
            <li>Python for Data Science</li>
            <li>MERN Full Stack Web Development</li>
            <li>VBA- Excel</li>
          </ul>
        </div>
      </aside>
      <section className="main-content">
        <div className="card about-me">
          <p>I am driven by a deep-seated passion for solving complex problems and an ability to adapt to new challenges with ease. Leveraging expertise in Excel VBA and Python for data science, I excel at delivering data-driven insights and automations that enhance productivity and decision making. My journey into web development is marked by an expanding knowledge of the MERN stack, where I am actively honing my skills to build responsive and dynamic web applications</p>
          
          <a href="https://www.linkedin.com/in/vilson-apostolovski-ii-59212052/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <br />
          <a href="https://github.com/Thinker92" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
