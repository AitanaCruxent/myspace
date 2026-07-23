import { useState } from "react";
import Section from "./Section";
import "../static/Timeline.css";

const timelineItems = [
  {
    id: "math",
    year: "2018 - 2022",
    title: "Mathematics Background",
    label: "Mathematics",
    description:
      "I studied Mathematics at Universitat Autònoma de Barcelona, where I developed strong analytical thinking, abstraction skills and problem-solving habits.",
    skills: ["Logic", "Problem-solving", "Abstract thinking", "Data analysis"],
  },
  {
    id: "innovamat",
    year: "2021 - 2023",
    title: "Customer Success Manager and Account Manager",
    label: "Customer Success",
    description:
      "I worked as a Customer Success Manage and Account Executive at Innovamat. Innovamat buils a didactic maths proposla for schools with the goal of making maths reachable by everybody.",
    skills: ["Communication", "Maths", "Didactics", "Adaptability", "Management"],
  },
  {
    id: "international",
    year: "2023 - 2025",
    title: "International Experience",
    label: "Working abroad",
    description:
      "I worked in Japan as a Guest Service Agent in a Ski Lodge where I developed communication skills, responsibility, adaptability and decision-making.",
    skills: ["Communication", "Leadership", "Adaptability", "Management"],
  },
  {
    id: "raona",
    year: "2025-2026",
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
            mathematics, international experience and web development.
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