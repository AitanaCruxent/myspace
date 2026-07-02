import Section from "./Section";
import ProjectCard from "./ProjectCard";
import "../static/Projects.css";

const projects = [
  {
    title: "Ski Weather App",
    status: "In progress",
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
    status: "Completed",
    image: "/projects/multilingual-website.png",
    tech: ["WordPress", "Elementor", "Polylang", "HTML/CSS", "SEO"],
    description:
      "A freelance project where I designed and built a multilingual website from scratch for a Hotel.",
    contribution: [
      "Defined the website structure and visual layout.",
      "Built the site using WordPress, Elementor and custom CSS.",
      "Configured multilingual content using Polylang.",
      "Worked on responsive design, hosting setup and basic SEO."
    ],
  },
  {
    title: "Microsoft 365 Solutions",
    status: "Professional experience",
    image: "/projects/microsoft365.png",
    tech: ["SharePoint Online", "SPFx", "React", "Power Automate", "Copilot Studio"],
    description:
      "Development and automation work in Microsoft 365 environments, focused on improving internal processes and user experience.",
    contribution: [
      "Developed custom SharePoint components using SPFx and React.",
      "Created automations to improve internal processes.",
      "Worked with Microsoft 365 tools in professional client environments.",
      "Focused on usability, maintainability and business value."
    ],
  }
];

function Projects() {
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

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card-wrapper">
                <div className= "project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-status">{project.status}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span className="tech-pill" key={item}>{item}</span>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;