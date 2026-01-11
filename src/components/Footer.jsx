import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Let's Connect</h2>
        <p className="footer-text">Please contact me through my email and/or LinkedIn profile for more information. For more information on projects that are not shown on my portfolio, check out my Github Profile!</p>
        <div className="social-links">
          <a href="mailto:tamirdevs@gmail.com" className="social-link email" aria-label="Email">
            <FaEnvelope />
            <span className="link-text">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/tamir-phillips-6096922ba" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
            <FaLinkedin />
            <span className="link-text">LinkedIn</span>
          </a>
          <a href="https://github.com/TamirP123" target="_blank" rel="noopener noreferrer" className="social-link github" aria-label="GitHub">
            <FaGithub />
            <span className="link-text">GitHub</span>
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Tamir Phillips. All rights reserved.</p>
      </div>
    </footer>
  );
}
