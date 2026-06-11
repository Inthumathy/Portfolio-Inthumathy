function ProjectCard({ title, description, image, github }) {
  return (
    <div className="project-card">

      <img
        src={image}
        alt={title}
      />

      <h2>{title}</h2>

      <p>{description}</p>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
      >
        View Project
      </a>

    </div>
  );
}

export default ProjectCard;