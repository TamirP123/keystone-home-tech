import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-page">

      {/* INTRO */}
      <div className="about-intro">
        <div className="container">
          <span className="eyebrow">About Keystone Home</span>

          <h1>Built on Quality, Trust, and Honest Work</h1>
          <p>
            Keystone Home provides dependable home services with a focus on
            craftsmanship, clear communication, and respect for your time and
            home. Every project is handled with care — no shortcuts, no
            surprises.
          </p>
        </div>
      </div>

      

      {/* HOW WE WORK */}
      <div className="about-process">
        <div className="container process-grid">
          <div className="process-item">
            <h3>Clear Communication</h3>
            <p>
              We explain the work, pricing, and timeline upfront so you always
              know what to expect.
            </p>
          </div>

          <div className="process-item">
            <h3>Skilled Craftsmanship</h3>
            <p>
              Every job is completed with attention to detail and a commitment
              to doing it right the first time.
            </p>
          </div>

          <div className="process-item">
            <h3>Reliable Service</h3>
            <p>
              We show up on time, work efficiently, and leave your space clean
              and respected.
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES */}
<div className="about-services" id="services">
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


      {/* WHY CHOOSE */}
      <div className="about-why">
        <div className="container">
          <h2>Why Choose Keystone Home</h2>

          <div className="why-grid">
            <div className="why-card">
              <h4>Licensed & Insured</h4>
              <p>Your home is protected — professionalism you can trust.</p>
            </div>

            <div className="why-card">
              <h4>Upfront Pricing</h4>
              <p>No hidden fees or surprises. Honest pricing from the start.</p>
            </div>

            <div className="why-card">
              <h4>Local & Trusted</h4>
              <p>Proudly serving the community with dependable service.</p>
            </div>

            <div className="why-card">
              <h4>Quality Guaranteed</h4>
              <p>We stand behind our work and care about long-term results.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <div className="container">
          <h2>Let’s Get Your Project Started</h2>
          <p>
            Have a project in mind? Reach out today for a fast, free estimate.
          </p>
          <a href="#contact" className="cta-btn">
            Request Service →
          </a>
        </div>
      </div>

    </section>
  );
}
