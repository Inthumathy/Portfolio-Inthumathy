import "../styles/About.css";

function About() {
  return (
    // ADDED: The page-container wrapper forces the dark background color to expand edge-to-edge
    <div className="page-container">
      <div className="about">
        <h1>About Me</h1>
        <p>
          I am an enthusiastic Information Technology student currently pursuing my NDT in IT at the 
          Institute of Technology, University of Moratuwa. Hailing from Point Pedro, Jaffna, I am deeply 
          professional, passionate about software design, full-stack development, and leveraging modern programming 
          technologies to build robust, efficient applications.
        </p>

        <hr className="section-divider" />

        <h2>Education</h2>
        <div className="education-section">
          <h3 className="education-title">National Diploma in Technology (NDT) — Information Technology</h3>
          <p className="institution">Institute of Technology, University of Moratuwa</p>
          
          <h3 className="education-title">Secondary Education</h3>
          <p className="institution">J/Methodist Girls' High School</p>
          <ul>
            <li><strong>G.C.E. A/L Examination (2022):</strong> Completed in the Physical Science stream (Combined Maths, Physics, Chemistry).</li>
            <li><strong>G.C.E. O/L Examination (2018):</strong> Completed with Distinctions (As) in Mathematics and Carnatic Music, and Very Good Passes (Bs) in I.C.T, Science, History, Tamil, and English.</li>
          </ul>
        </div>

        <hr className="section-divider" />

        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div>
            <h3 className="skills-title">Languages & Frameworks</h3>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>React.js</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div>
            <h3 className="skills-title">Other Competencies</h3>
            <ul>
              <li>MS Office Suite (Word, Excel, Access, PowerPoint)</li>
              <li>Data Entry & Document Typing (English & Tamil)</li>
              <li>Version Control (GitHub)</li>
            </ul>
          </div>
        </div>

        <hr className="section-divider" />

        <h2>Certifications & Extracurriculars</h2>
        <ul>
          <li><strong>Basic Coding Course</strong> — American Corner</li>
          <li><strong>Basic 3D Animation with Blender</strong> — American Corner</li>
          <li><strong>Computer Application Assistant</strong> — CRC</li>
          <li><strong>Diploma in Spoken English & Sinhala</strong> — Hindu, Buddhist Cultural Association</li>
          <li><strong>Preliminary First Aid</strong> — St. John Ambulance Association</li>
        </ul>

        <hr className="section-divider" />

        <h2>Work Experience</h2>
        <ul>
          <li><strong>IT/Academic Instructor</strong> at Study Point (PVT) Ltd.</li>
          <li><strong>Clerical Assistant</strong> for a Legal Practice</li>
        </ul>
      </div>
    </div>
  );
}

export default About;