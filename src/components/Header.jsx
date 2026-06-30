import "../static/Header.css";

function Header() {
  return (
    <header className="hero">
      <nav className="navbar">
        <span className="logo">ACM</span>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
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
            useful and user-focused digital experiences.
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
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span>·</span>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orb"></div>

          <div className="floating-tag tag-react">React</div>
          <div className="floating-tag tag-django">Django</div>
          <div className="floating-tag tag-dotnet">.NET</div>
          <div className="floating-tag tag-sql">SQL</div>

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