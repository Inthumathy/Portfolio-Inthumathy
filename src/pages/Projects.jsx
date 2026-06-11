import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">

      <h1>My Projects</h1>

      <ProjectCard
        title="Student Event Mangement System"
        description="PHP + CSS"
        image="/project1.jpg"
        github="https://github.com/Inthumathy/Student_Event_Management_System"
      />

      <ProjectCard
        title="Student Registration System"
        description="Spring Boot + MySQL + Java"
        image="/project2.jpeg"
        github="https://github.com/Inthumathy/Student_Registration_System"
      />

      <ProjectCard
        title="ResQAI"
        description="AI Disaster Management App"
        image="/project3.jpg"
        github="https://github.com/Inthumathy/resqai-platform"
      />

    </div>
  );
}

export default Projects;