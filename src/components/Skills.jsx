import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiPython,
  SiDjango,
  SiDotnet,
  SiGit,
  SiGithub,
} from "react-icons/si";

import {
  FaCode,
  FaDatabase,
  FaMicrosoft,
  FaTools,
  FaPaintBrush,
} from "react-icons/fa";

import "../static/Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building clean, responsive and user-focused interfaces.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaPaintBrush },
    ],
  },
  {
    title: "Backend & Data",
    description:
      "Working with server-side logic, databases and web applications.",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Django", icon: SiDjango },
      { name: "C#", icon: FaCode },
      { name: ".NET", icon: SiDotnet },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Tools & Platforms",
    description:
      "Using collaborative tools and professional development environments.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Azure DevOps", icon: FaTools },
      { name: "SharePoint", icon: FaMicrosoft },
      { name: "VS Code", icon: FaCode },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <p className="section-eyebrow">Technical toolkit</p>

        <h2>Skills</h2>

        <p className="skills-intro">
          A practical set of technologies developed through personal projects,
          professional web evolutives and continuous learning.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-list">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <span className="skill-pill" key={skill.name}>
                      <Icon className="skill-icon" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;