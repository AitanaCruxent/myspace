import "../static/ProjectCard.css";

function ProjectCard({
  title,
  status,
  image,
  images = [],
  tech,
  description,
  contribution,
}) {
  const hasImages = images.length >0;

  return (
    <article className={`project-card ${!hasImages ? "no-image" : ""}`}>
      {hasImages && (
        <div className="project-gallery">
          <img
          src={images[0]}
            alt={`${title} main preview`}
            className="project-main-image"
            />

          {images.length > 1 && (
            <div className="project-gallery-grid">
              {images.slice(1).map((item, index) => (
                <img
                  key={item}
                  src={item}
                  alt={`${title} screenshot ${index + 2}`}
                  className="project-gallery-image"
                />
              ))}
            </div>
          )}
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