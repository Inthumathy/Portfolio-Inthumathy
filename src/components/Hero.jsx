import "../styles/Home.css";

function Hero() {
  return (
    <section className="hero">
      <img 
        src="/profile1.jpeg" 
        alt="Inthumathy's Profile Photo" 
        className="profile-photo"
      />
      
      <h1>Hello, I'm Inthumathy</h1>
      
      <p>
        Software Developer | React Developer | Java Developer
      </p>

      {/* Button container to align buttons side-by-side */}
      <div className="hero-buttons">
        <a 
          href="/cv.pdf" 
          download="Inthumathy_CV.pdf" 
          className="cv-btn"
        >
          Download CV
        </a>

        <a 
          href="https://linkedin.com/in/inthumathy-veerasegaram-924640240" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="linkedin-btn"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;