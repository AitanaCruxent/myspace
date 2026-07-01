import { SiReact, SiDjango, SiDotnet, SiPython, SiHtml5 } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import "../static/Header.css";


function Header() {
  return (
    <header className="hero">
      <nav className="navbar">
        <span className="logo">ACM</span>

        <div className="nav-links">
          <a href="#projects">About</a>
          <a href="#projects">Skills</a>
          <a href="#about">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-content">
        <div className="hero-text">
          
          <p className="eyebrow">Software Developer CV & Portfolio</p>

          <h1>Aitana Cruxent</h1>

          <h2>
            Junior Software Developer · Web Technologies · Mathematics background
          </h2>

          <p className="hero-description">
            I combine analytical thinking and creativity to build clean,
            useful and user-focused digital experiences. I consider myself as a generalist at the moment, but I am particulary interested in web development.
          </p>

          <div className="hero-links-row">
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn btn-secondary" href="#contact">
                Contact me
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/AitanaCruxent" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/aitana-cruxent-m%C3%A1rquez-71a911223/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orb"></div>

          <div className="floating-tag tag-react" aria-label="React">
            <SiReact />
          </div>

          <div className="floating-tag tag-django" aria-label="Django">
            <SiDjango />
          </div>

          <div className="floating-tag tag-dotnet" aria-label=".NET">
            <SiDotnet />
          </div>

          <div className="floating-tag tag-sql" aria-label="SQL">
            <FaDatabase />
          </div>

          <div className="floating-tag tag-python" aria-label="Python">
            <SiPython />
          </div>

          <div className="floating-tag tag-html" aria-label="HTML">
            <SiHtml5 />
          </div>
          <div className="visual-card">
            <span>Web solutions</span>
            <strong>Logic + creativity</strong>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;