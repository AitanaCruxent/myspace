import { useState } from "react";
import Section from "./Section";
//import "../static/Timeline.css";

const timelineItems = [
  {
    id: "math",
    year: "2018 - 2023",
    title: "Mathematics Background",
    label: "Mathematics",
    description:
      "I studied Mathematics at Universitat Autònoma de Barcelona, where I developed strong analytical thinking, abstraction skills and problem-solving habits.",
    skills: ["Logic", "Problem-solving", "Abstract thinking", "Data analysis"],
  },
  {
    id: "mountain",
    year: "2022 - 2024",
    title: "Mountain & Outdoor Experience",
    label: "Mountain guide",
    description:
      "I worked in mountain and canyoning environments, developing communication, responsibility, adaptability and decision-making under pressure.",
    skills: ["Communication", "Leadership", "Adaptability", "Risk management"],
  },
  {
    id: "raona",
    year: "2026",
    title: "Web Development in a Professional Environment",
    label: "Raona",
    description:
      "I worked on web development and Microsoft 365 solutions, including SharePoint Online, SPFx, React components, workflow automation and internal process improvements.",
    skills: ["SharePoint", "SPFx", "React", "Power Automate", "Microsoft 365"],
  },
  {
    id: "projects",
    year: "2026",
    title: "Personal Web Projects",
    label: "Projects",
    description:
      "I built personal and freelance projects to keep improving as a web developer, combining frontend, backend, APIs, maps and responsive design.",
    skills: ["Django", "React", "JavaScript", "Leaflet", "WordPress"],
  },
  {
    id: "next",
    year: "Now",
    title: "Building My Developer Profile",
    label: "Next step",
    description:
      "I am currently focused on strengthening my frontend skills, building interactive interfaces and preparing for junior web developer opportunities.",
    skills: ["Frontend", "React", "TypeScript", "UI interactions", "Continuous learning"],
  },
];

function Timeline() {
  const [activeItem, setActiveItem] = useState(timelineItems[0]);

  return (
    <Section>
      <div className="timeline-section" id="timeline">
        <div className="timeline-heading">
          <span className="section-eyebrow">My path</span>
          <h2>Timeline</h2>
          <p>
            A short overview of the path that connects my background in
            mathematics, outdoor experience and web development.
          </p>
        </div>

        <div className="timeline-layout">
          <div className="timeline-track">
            {timelineItems.map((item) => (
              <button
                key={item.id}
                className={`timeline-point ${
                  activeItem.id === item.id ? "active" : ""
                }`}
                onClick={() => setActiveItem(item)}
              >
                <span className="timeline-dot"></span>
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-label">{item.label}</span>
              </button>
            ))}
          </div>

          <article className="timeline-card">
            <span className="timeline-card-year">{activeItem.year}</span>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.description}</p>

            <div className="timeline-skills">
              {activeItem.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}

export default Timeline;