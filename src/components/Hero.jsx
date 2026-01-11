import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import logo from "../assets/Logo.png";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      {/* NAVBAR */}
      <header className={`hero-nav ${scrolled ? "nav-solid" : ""}`}>
        <div className="container nav-inner">
          <img src={logo} alt="Keystone Home Tech" className="nav-logo" />

          <nav className="hero-links">
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Service Area</a>
            <button className="nav-cta">Request Service</button>
          </nav>
        </div>
      </header>

      {/* HERO CONTENT */}
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
    <button className="primary-btn">Call / Text for Estimate</button>
    <button className="secondary-btn">Request Service</button>
  </div>

  {/* FEATURES LINE */}
  <div className="hero-features">
  <div className="feature">
    <span className="check">&#10003;</span> Local Services
  </div>
  <div className="separator">|</div>
  <div className="feature">
    <span className="check">&#10003;</span> Upfront Pricing
  </div>
  <div className="separator">|</div>
  <div className="feature">
    <span className="check">&#10003;</span> Trusted Experts
  </div>
</div>


</div>


    </section>
  );
}
