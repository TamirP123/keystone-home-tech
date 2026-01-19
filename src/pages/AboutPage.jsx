import React from "react";
import "../styles/AboutPage.css";

export default function AboutPage() {
  return (
    <section className="about-page">

      {/* ABOUT HERO */}
      <div className="about-hero">
        <div className="container">
          <span className="eyebrow">About Keystone Home</span>
          <h1>Reliable Home Services Built on Trust</h1>
          <p>
            Keystone Home provides dependable, high-quality handyman and home
            services with a focus on craftsmanship, transparency, and customer
            satisfaction.
          </p>

          <div className="about-hero-stats">
  <div>
    <strong>On-Time</strong>
<span>Respect for Your Schedule</span>
  </div>
  <div>
    <strong>5★</strong>
    <span>Customer Satisfaction</span>
  </div>
  <div>
    <strong>Local</strong>
    <span>Trusted Service</span>
  </div>
</div>

        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="about-section">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Keystone Home was founded with one goal in mind — to deliver
              professional, reliable home services without the frustration
              homeowners often experience.
            </p>
            <p>
              From furniture assembly and TV mounting to electrical work and
              general repairs, every job is handled with attention to detail and
              respect for your home.
            </p>
          </div>

          <div className="about-highlight">
            <h3>Our Promise</h3>
            <ul>
              <li>✓ Honest, upfront pricing</li>
              <li>✓ Respect for your home & time</li>
              <li>✓ Work done right the first time</li>
              <li>✓ Clear communication</li>
            </ul>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="about-why">
        <div className="container">
          <h2>Why Choose Keystone Home</h2>

          <div className="why-grid">
            <div className="why-card">
              <h4>Local & Trusted</h4>
              <p>
                Proudly serving our local community with reliable, personalized
                service.
              </p>
            </div>

            <div className="why-card">
              <h4>Licensed & Insured</h4>
              <p>
                Peace of mind knowing your home is in safe, professional hands.
              </p>
            </div>

            <div className="why-card">
              <h4>Quality Craftsmanship</h4>
              <p>
                No shortcuts — just quality work that lasts.
              </p>
            </div>

            <div className="why-card">
              <h4>Fast Response</h4>
              <p>
                Quick scheduling and responsive communication.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <div className="container">
          <h2>Need Reliable Home Services?</h2>
          <p>
            Get in touch today for a free estimate and fast, friendly service.
          </p>

          <button className="primary-btn">
            Call / Text for Estimate
          </button>
        </div>
      </div>

    </section>
  );
}
