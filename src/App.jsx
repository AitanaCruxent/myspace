import Header from './components/Header'
import Section from './components/Section'
import Skills from './components/Skills'
import ProjectCard from './components/ProjectCard'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Section title="About me">
          <p>
            I am a web developer with experience in React, SharePoint,
            Microsoft 365 environments, and process automation. I enjoy solving
            problems, learning continuously, and creating solutions that bring
            real value to users.
          </p>
        </Section>

        <Skills /> 

        <Section>
          <div className="projects-heading" id="projects">
            <h2>Projects</h2>
          </div>
          <div className="projects-grid">
            <ProjectCard
              title="Ski Weather App"
              status="In progress"
              tech="Django, JavaScript, Leaflet, Open-Meteo API"
              description="A web application to explore ski resorts in Catalunya, including interactive maps and weather information."
              details="This project was built using Django for the backend and JavaScript with Leaflet for the frontend. It fetches weather data from the Open-Meteo API to provide real-time weather information for ski resorts."
            />

            <ProjectCard
              title="Multilingual Website"
              status="Completed"
              tech="WordPress, Elementor, Polylang, HTML/CSS"
              description="A freelance project where I designed and built a multilingual website from scratch."
              details="The website was built using WordPress with the Elementor page builder and the Polylang plugin for multilingual support. I focused on creating a user-friendly design and ensuring that the site was responsive across different devices."
            />

            <ProjectCard
              title="Microsoft 365 Solutions"
              status="Completed"
              tech="SharePoint Online, SPFx, React, Power Automate"
              description="Development and automation work in Microsoft 365 environments, focused on improving internal processes and user experience."
              details="I have developed custom solutions using SharePoint Framework (SPFx) and React, as well as automated workflows using Power Automate. These solutions aimed to streamline internal processes, enhance collaboration, and improve the overall user experience within Microsoft 365 environments."
            />
          </div>
        </Section>

        <Section title="Contact">
          <p>You can contact me through LinkedIn, GitHub, or email.</p>
        </Section>
      </main>
    </div>
  )
}

export default App