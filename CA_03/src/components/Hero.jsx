import "../styles/Home.css";

function Hero() {
  return (
    <section className="hero">
      <img
        src="/profile.jpg"
        alt="Inthumathy's Profile Photo"
      />

      <h1>Hello, I'm Inthumathy</h1>

      <p>
        Software Developer | React Developer | Java Developer
      </p>

      {/* Added an explicit filename to force the download successfully */}
      <a
        href="/cv.pdf"
        download="Inthumathy_CV.pdf" 
        className="cv-btn"
      >
        Download CV
      </a>
    </section>
  );
}

export default Hero;