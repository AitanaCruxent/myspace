import { useState } from 'react'

function ProjectCard({ title, tech, status, description, details }) {
    const [showDetails, setShowDetails] = useState(false)

    function handleToggleDetails() {
        setShowDetails(!showDetails)
    }

  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="project-tech">{tech}</p>
      <span className="project-status">{status}</span>
      <p>{description}</p>

      <button type="button" className="project-button" onClick={handleToggleDetails}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>

      {showDetails && (
        <p className="project-details">
            {details}
        </p>
      )}
    </article>
  )
}

export default ProjectCard