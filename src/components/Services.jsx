import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-page">

      {/* SERVICES */}
<div className="about-services">
  <div className="container">
    <span className="eyebrow">Our Services</span>
    <h2>Professional Home Services You Can Rely On</h2>

    <div className="services-grid">
      <div className="service-card">
        <h4>Furniture Assembly</h4>
        <p>
          Expert assembly of beds, desks, shelving, and more — done right and
          built to last.
        </p>
      </div>

      <div className="service-card">
        <h4>TV Mounting & Wall Installations</h4>
        <p>
          Secure mounting with clean cable management for a polished,
          professional finish.
        </p>
      </div>

      <div className="service-card">
        <h4>Plumbing Fixtures & Repairs</h4>
        <p>
          Faucets, toilets, and fixture replacements handled efficiently and
          correctly.
        </p>
      </div>

      <div className="service-card">
        <h4>Light Electrical Services</h4>
        <p>
          Switches, outlets, lighting, and small electrical upgrades done safely.
        </p>
      </div>

      <div className="service-card">
        <h4>General Home Repairs</h4>
        <p>
          From small fixes to finishing touches — dependable solutions for your
          home.
        </p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}
