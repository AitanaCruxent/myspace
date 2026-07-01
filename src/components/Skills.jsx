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
    title: "Frontend & Web",
    category: "frontend",
    description: "Clean, responsive and user-focused interfaces.",
    items: ["HTML", "CSS/SASS", "JavaScript", "React", "WordPress", "Elementor", "SPFx", "Responsive UI"],
  },
  {
    title: "Backend & Programming",
    category: "backend",
    description: "Server-side logic, databases and web applications.",
    items: ["Python", "Django", "C#", ".NET", "SQL", "C", "APIs"],
  },
  {
    title: "Data Analysis",
    category: "data",
    description: "Data processing, analysis and visualization",
    items: ["Pandas", "Seaborn"],
  },
  {
    title: "Microsoft & Automation",
    category: "microsoft",
    description: "Microsoft 365 solutions, automation and business tools",
    items: ["SharePoint Online", "SQL Server", "Oracle", "Power Automate", "Copilot Studio", "AI agent development", "Workflow automation"],
  },
  {
    title: "Cloud & Tools",
    category: "tools",
    description: "Development platforms, cloud tools and version control",
    items: ["Microsoft Azure", "Azure DevOps", "Hostinger", "Oracle", "SQL Server Management Studio", "Git", "GitHub", "Bitbucket", "GitLab", "VsCode", "Visual Studio"],
  },
  {
    title: "Soft Skills",
    category: "soft",
    description: "Interpersonal and professional abilities",
    items: ["Problem-solving", "Adaptability","Analytical thinking", "Communication", "Teamwork", "Time Management", "Creativity", "Continuous learning", "Client-oriented mindset"],
  },
];

const softSkillKeys = [
  {
    name: "Analytical thinking",
    shortName: "Logic",
    number: "7",
  },
  {
    name: "Problem-solving",
    shortName: "Solve",
    number: "8",
  },
  {
    name: "Creativity",
    shortName: "Create",
    number: "9",
  },
  {
    name: "Adaptability",
    shortName: "Adapt",
    number: "4",
  },
  {
    name: "Fast learning",
    shortName: "Learn",
    number: "5",
  },
  {
    name: "Communication",
    shortName: "Comms",
    number: "6",
  },
  {
    name: "Initiative",
    shortName: "Init",
    number: "1",
  },
  {
    name: "Client-oriented mindset",
    shortName: "User",
    number: "2",
  },
  {
    name: "Continuous learning",
    shortName: "Growth",
    number: "3",
  },
  {
    name: "Focus",
    shortName: "Focus",
    number: "0",
    wide: true,
  },
   {
    name: "Teamwork",
    shortName: "Team",
    number: "*",
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p className="section-eyebrow">Technical toolkit</p>

          <h2>Skills</h2>
        </div>
        

        <div className="skills-keyboards-layout">
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

          <div className="soft-keyboard" aria-label="Soft skills numpad">
            

            <div className="soft-keyboard-grid">
              {softSkillKeys.map((skill) => (
                <button
                  className={`soft-key ${skill.wide ? "soft-key-wide" : ""}`}
                  key={skill.name}
                  type="button"
                  aria-label={skill.name}
                  title={skill.name}
                >
                  <span className="soft-key-number">{skill.number}</span>
                  <span className="soft-key-label">{skill.shortName}</span>
                </button>
              ))}
            </div>
          </div>
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