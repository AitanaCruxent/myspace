import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiPython,
  SiDjango,
  SiDotnet,
  SiGit,
  SiGithub,
  SiCss,
} from "react-icons/si";

import {
  FaCode,
  FaDatabase,
  FaMicrosoft,
  FaTools,
  FaPaintBrush,
  FaCloud,
  FaWordpress,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

import "../static/Skills.css";

const keyboardRows = [
  [
    { name: "React", shortName: "React", icon: SiReact, category: "frontend" },
    { name: "JavaScript", shortName: "JS", icon: SiJavascript, category: "frontend" },
    { name: "HTML", shortName: "HTML", icon: SiHtml5, category: "frontend" },
    { name: "CSS", shortName: "CSS", icon: SiCss, category: "frontend" },
    { name: "Backspace", shortName: "⌫", type: "special", variant: "backspace" },
  ],
  [
    { name: "Tab", shortName: "⇄", type: "special", variant: "tab"},
    { name: "Python", shortName: "Python", icon: SiPython, category: "backend" },
    { name: "Django", shortName: "Django", icon: SiDjango, category: "backend" },
    { name: "C#", shortName: "C#", icon: TbBrandCSharp, category: "backend" },
    { name: ".NET", shortName: ".NET", icon: SiDotnet, category: "backend" },
    { name: "SQL", shortName: "SQL", icon: FaDatabase, category: "backend" },
  ],
  [
    { name: "Git", shortName: "Git", icon: SiGit, category: "tools" },
    { name: "GitHub", shortName: "GitHub", icon: SiGithub, category: "tools" },
    { name: "Azure DevOps", shortName: "ADO", icon: FaTools, category: "tools" },
    { name: "Azure", shortName: "Azure", icon: FaCloud, category: "tools" },
    { name: "Enter", shortName: "Enter", type: "special", variant: "enter" },
  ],
  [
    { name: "WordPress", shortName: "WP", icon: FaWordpress, category: "tools" },
    { name: "SharePoint", shortName: "SP", icon: FaMicrosoft, category: "tools" },
    { name: "VS Code", shortName: "VSCode", icon: VscVscode, category: "tools" },
    { name: "Visual Studio", shortName: "VS", icon: DiVisualstudio, category: "tools" },
    { name: "Alt", shortName: "🡅", type: "special", variant: "alt" },
  ],
];

const skillGroups = [
  {
    title: "Frontend",
    category: "frontend",
    description: "Clean, responsive and user-focused interfaces.",
    items: ["React", "JavaScript", "HTML", "CSS", "Responsive UI"],
  },
  {
    title: "Backend & Data",
    category: "backend",
    description: "Server-side logic, databases and web applications.",
    items: ["Python", "Django", "C#", ".NET", "SQL", "APIs"],
  },
  {
    title: "Tools & Platforms",
    category: "tools",
    description: "Collaborative tools and professional development environments.",
    items: ["Git", "GitHub", "Azure DevOps", "SharePoint","WordPress", "VS Code"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p className="section-eyebrow">Technical toolkit</p>

          <h2>Skills</h2>

          <p className="skills-intro">
            A practical toolkit for building web-based solutions, from
            interface development to backend evolutives and data handling.
          </p>
        </div>

        <div className="skills-keyboard" aria-label="Technical skills keyboard">
          {keyboardRows.map((row, rowIndex) => (
            <div className={`keyboard-row keyboard-row-${rowIndex + 1}`} key={rowIndex}>
              {row.map((key) => {
                const Icon = key.icon;

                if (key.type === "special") {
                  return (
                    <button
                      className={`skill-key special-key special-key-${key.variant}`}
                      key={key.name}
                      type="button"
                      aria-label={key.name}
                    >
                      <span>{key.shortName}</span>
                    </button>
                  );
                }

                return (
                  <button
                    className={`skill-key skill-key-${key.category}`}
                    key={key.name}
                    type="button"
                    aria-label={key.name}
                  >
                    <Icon className="skill-key-icon" />
                    <span>{key.shortName}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article
              className={`skill-card skill-card-${group.category}`}
              key={group.title}
            >
              <div className="skill-card-header">
                <span className="skill-card-dot"></span>
                <h3>{group.title}</h3>
              </div>

              <p>{group.description}</p>

              <div className="skill-list">
                {group.items.map((item) => (
                  <span className="skill-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;