import { useState } from "react";
import Section from "./Section";
import "../static/Header.css";
import "../static/Projects.css";

function Contact() {
  const email = "aitana.crumar@gmail.com";
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <Section title="Contact">
        <div className="contact-section" id="contact">
            <p>You can contact me through LinkedIn, GitHub, or sent me an email.</p>

            <div className="hero-socials">
                <a href="https://github.com/AitanaCruxent" target="_blank" rel="noreferrer">
                GitHub
                </a>
                <span>·</span>
                <a href="https://www.linkedin.com/in/aitana-cruxent-m%C3%A1rquez-71a911223/" target="_blank" rel="noreferrer">
                LinkedIn
                </a>
                <span>·</span>
                <button className="details-button" onClick={handleCopyEmail}>
                {copied ? "Email copied!" : "Copy email"}
                </button>

            </div>

        </div>
    </Section>
    
  );
}

export default Contact;
