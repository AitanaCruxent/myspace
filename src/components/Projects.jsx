import { useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import "../static/Projects.css";

const projects = [
  {
    title: "Ski Weather Web App",
    status: "Working on new features",
    image: "/projects/ski-weather.png",
    images: [
      "/projects/Pirineu1.png",
      "/projects/Pirineu2.png",
      "/projects/Pirineu3.png"
    ],
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
    images: [
      "/projects/multilingual-website.png",
      "/projects/Arturo2.png",
      "/projects/Arturo3.png"
    ],
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
    images: [],
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
  },

  {
    title: "Pinned Web App: Kitchen organization",
    status: "Finished",
    image: "/projects/Pinned1.png",
    images: [
      "/projects/Pinned1.png",
      "/projects/Pinned2.png",
      "/projects/Pinned3.png",
    ],
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap"],
    description:
      "A web application with its main purpose is to help users organize their kitchen, manage their pantry, and decide what to cook.",
    contribution: [
      "Provide the user with information about their pantry. It consists of a checklist that the user creates and helps them by generating a grocery shopping list",
      "The user can save their own recipes.",
      "Suggests different recipes to cook depending on what you have on your pantry page.",
      "More suggestions from popular cooking websites.",
    ],
  }
];


function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    function handleRandomProject() {
    const randomIndex = Math.floor(Math.random() * projects.length);

    const randomProject = projects[randomIndex];

    setSelectedProject(randomProject);
  }

  return (
    <Section>
      <div className="projects-section" id="projects">
        <div className="projects-heading">
          <div>
            <span className="section-eyebrow">Selected work</span>
            <h2>Projects</h2>

            <p>
              A selection of projects where I have worked on web development,automation, user experience and data-driven interfaces.
            </p>
          </div>
          
          <div >
            <button className="details-button" onClick={handleRandomProject}>
              Show random project
            </button>
          </div>
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