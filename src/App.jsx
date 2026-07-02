import Header from './components/Header'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectCard from './components/ProjectCard'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Section title="About me">
        <section id="about" className="about-section">
          <div className="section-heading">
            <h3>Analytical mindset, creative approach.</h3>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                I am a Mathematics graduate and junior software developer with a strong
                interest in web technologies.
              </p>

              <p>
                I like building digital solutions that are clear, useful and easy to
                understand. My mathematical background helps me approach problems with
                structure and logic, while my creative side pushes me to care about
                design, user experience and how things feel.
              </p>

              <p>
                At the moment, I am especially interested in web development,
                automation and artificial intelligence, and I am looking for
                opportunities where I can keep learning, contribute to real projects
                and grow as a developer.
              </p>
            </div>
          </div>
        </section>
        </Section>

        <Skills /> 

        <Projects />

        <Section title="Contact">
          <p>You can contact me through LinkedIn, GitHub, or email.</p>
        </Section>
      </main>
    </div>
  )
}

export default App