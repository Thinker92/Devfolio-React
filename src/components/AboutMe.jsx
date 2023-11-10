import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-container">
      <aside className="sidebar">
        <div className="card personal-details">
          {/* <img src="path-to-selfie.jpg" alt="Vilson Apostolovski" /> */}
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
          <p>Write an about me section here!</p>
          
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
