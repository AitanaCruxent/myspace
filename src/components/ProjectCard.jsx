import "../static/ProjectCard.css";

function ProjectCard({
  title,
  status,
  image,
  tech,
  description,
  contribution,
}) {
  return (
    <article className={`project-card ${!image ? "no-image" : ""}`}>
      {image && (
        <div className="project-image-wrapper">
          <img src={image} alt={`${title} preview`} className="project-image" />
        </div>
      )}

      <div className="project-content">
        <div className="project-header">
          <h3>{title}</h3>
          <span className="project-status">{status}</span>
        </div>

        <p className="project-description">{description}</p>

        <div className="project-tech">
          {tech?.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-contribution">
          <h4>What I worked on</h4>
          <ul>
            {contribution?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;