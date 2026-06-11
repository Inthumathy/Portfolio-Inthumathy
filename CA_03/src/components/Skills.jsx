function Skills() {
  return (
    <section className="skills-section">
      <h1 className="section-title">My Skills</h1>

      <div className="skills-grid">
        {/* Left Column: Tech Stack */}
        <div className="skills-column">
          <h2>Development & Databases</h2>
          
          <div className="skill-item">
            <div className="skill-info">
              <h3>HTML</h3>
              <span>90%</span>
            </div>
            <progress value="90" max="100"></progress>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <h3>CSS</h3>
              <span>85%</span>
            </div>
            <progress value="85" max="100"></progress>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <h3>JavaScript</h3>
              <span>80%</span>
            </div>
            <progress value="80" max="100"></progress>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <h3>React.js</h3>
              <span>75%</span>
            </div>
            <progress value="75" max="100"></progress>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <h3>Java</h3>
              <span>85%</span>
            </div>
            <progress value="85" max="100"></progress>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <h3>Spring Boot</h3>
              <span>70%</span>
            </div>
            <progress value="70" max="100"></progress>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <h3>MySQL</h3>
              <span>80%</span>
            </div>
            <progress value="80" max="100"></progress>
          </div>
        </div>

        {/* Right Column: Tools & Other Competencies */}
        <div className="skills-column">
          <h2>Tools & Other Skills</h2>

          <div className="skill-item">
            <div className="skill-info">
              <h3>MS Office (Word, Excel, PowerPoint)</h3>
              <span>90%</span>
            </div>
            <progress value="90" max="100"></progress>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <h3>Database Management (MS Access)</h3>
              <span>80%</span>
            </div>
            <progress value="80" max="100"></progress>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <h3>Speed Typing (English & Tamil)</h3>
              <span>85%</span>
            </div>
            <progress value="85" max="100"></progress>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <h3>3D Modeling (Blender)</h3>
              <span>65%</span>
            </div>
            <progress value="65" max="100"></progress>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;