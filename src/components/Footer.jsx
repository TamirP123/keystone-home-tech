import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* COLUMN 1: BRAND/ABOUT */}
        <div className="footer-column">
          <h3 className="footer-logo">Keystone<span>HomeTech</span></h3>
          <p className="footer-tagline">
            Reliable home improvements and repairs, served with professional integrity.
          </p>
        </div>

        {/* COLUMN 2: HOURS */}
        <div className="footer-column">
          <h4>Business Hours</h4>
          <ul className="hours-list">
            <li><span>Mon - Fri:</span> 8:00 AM - 2:00 PM</li>
            <li><span>Saturday:</span> 9:00 AM - 6:00 PM</li>
            <li><span>Sunday:</span> 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        {/* COLUMN 3: CONTACT */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <FaPhoneAlt className="footer-icon" />
            <a href="tel:2673084755">(267) 308-4755</a>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope className="footer-icon" />
            <a href="mailto:info@keystone.com">keystonehometech@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span>Montgomery County, PA</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Keystone Home Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}