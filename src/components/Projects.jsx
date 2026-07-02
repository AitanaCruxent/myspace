import { useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import "../static/Projects.css";

const projects = [
  {
    title: "Ski Weather App",
    status: "Working on new features",
    image: "/projects/ski-weather.png",
    tech: ["Django", "Python", "JavaScript", "Leaflet", "Open-Meteo API"],
    description:
      "A web application to explore the snow forecast in Catalunya, including interactive maps and real-time weather information.",
    contribution: [
      "Built the backend with Django and structured ski resort data.",
      "Created an interactive map using Leaflet.",
      "Integrated weather data from the Open-Meteo API.",
      "Designed a responsive interface to compare resorts quickly."
    ],
  },
  {
    title: "Multilingual Website",
    status: "In the translation phase at the moment",
    image: "/projects/multilingual-website.png",
    tech: ["WordPress", "Elementor", "Polylang", "HTML/CSS", "SEO"],
    description:
      "A freelance project where I designed and built a multilingual website from scratch for a Hotel and Restaurant.",
    contribution: [
      "Defined the website structure and visual layout.",
      "Built the site using WordPress, Elementor and custom HTML/CSS.",
      "Configured multilingual content using Polylang.",
      "Worked on responsive design, hosting setup and basic SEO."
    ],
  },
  {
    title: "Microsoft 365 Solutions",
    status: "Several independent projects",
    image: null,
    tech: ["SharePoint Online", "SPFx", "React", "Power Automate", "Copilot Studio"],
    description:
      "Development and automation work in Microsoft 365 environments, focused on evolutions of customized webparts, AI agent creation and workflow automation",
    contribution: [
      "Developed continuous improvements tocustom SharePoint components using SPFx and React.",
      "Created automations to improve internal processes.",
      "Developed AI agents and workflows using Copilot Studio and Power Automate.",
      "Worked with Microsoft 365 tools in professional client environments.",
      "Focused on usability, maintainability and business value."
    ],
  }
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section>
      <div className="projects-section" id="projects">
        <div className="projects-heading">
          <span className="section-eyebrow">Selected work</span>
          <h2>Projects</h2>
          <p>
            A selection of projects where I have worked on web development,automation, user experience and data-driven interfaces.
          </p>
        </div>

        {selectedProject ? (
            <div className="project-details">
            <button
              className="project-details-close"
              onClick={() => setSelectedProject(null)}
            >
              Back to projects
            </button>
             <ProjectCard {...selectedProject} />
          </div>
        ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card-wrapper">
                <div className= "project-header">
                    <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="details-button-wrapper">
                  <button className="details-button" onClick={() => setSelectedProject(project)}>
                    View Details
                  </button>
                </div>
                {project.image &&(
                    <div className="project-preview">
                        <img src={project.image} alt={`${project.title} preview`} />
                    </div>
                )}
            </div>
          ))}
        </div>
        )}
      </div>
    </Section>
  );
}

export default Projects;