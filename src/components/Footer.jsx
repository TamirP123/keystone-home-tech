import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <p className="copyright">© {new Date().getFullYear()} Tamir Phillips. All rights reserved.</p>
      </div>
    </footer>
  );
}
