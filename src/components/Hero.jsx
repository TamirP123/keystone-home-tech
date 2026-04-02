import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <span className="eyebrow">Handyman Services</span>

        <h1>
          Reliable Home Services <br />
          Done Right the First Time
        </h1>

        <p>
          Furniture assembly, TV mounting, wall installations, and home
          improvements by a trusted local expert.
        </p>

        <div className="hero-actions">
          <button href="#contact" className="primary-btn">
            <a href="#contact" className="primary-btn">
              Call / Text for Estimate
            </a>
            </button>

          <Link to="/service">
          <button className="secondary-btn">Request Service</button>
          </Link> 
          
        </div>

        <div className="hero-features">
          <div className="feature">
            <span className="check">✓</span> Local Services
          </div>
          <div className="separator">|</div>
          <div className="feature">
            <span className="check">✓</span> Upfront Pricing
          </div>
          <div className="separator">|</div>
          <div className="feature">
            <span className="check">✓</span> Trusted Experts
          </div>
        </div>
      </div>
    </section>
  );
}
