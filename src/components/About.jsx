import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section className="services-area-section">
      <div className="services-area-container">

        {/* TOP CARDS */}
        <div className="top-cards">
          <div className="info-card">
            <h3 className="card-title">
              <span className="icon">🛠️</span> Our Services
            </h3>
            <ul className="card-list">
              <li>Electrical & lighting repairs</li>
              <li>TV mounting & installations</li>
              <li>Smart home setup</li>
              <li>General handyman work</li>
            </ul>
          </div>

          <div className="info-card">
            <h3 className="card-title">
              <span className="icon">⭐</span> Why Choose Us
            </h3>
            <ul className="card-list">
              <li>Licensed & insured</li>
              <li>Reliable and on-time service</li>
              <li>Transparent pricing</li>
              <li>Local, trusted professional</li>
            </ul>
          </div>
        </div>

        {/* SERVICE AREA */}
        {/* <div className="service-area">
          <div className="service-area-text">
            <h2>Proudly Serving Montgomery County, PA</h2>
            <p>
              We provide reliable handyman services throughout the local area.
              Not sure if you're covered? Just ask!
            </p>

            <div className="mini-card">
              <h4>Our Services</h4>
              <ul>
                <li>Electrical & lighting repairs</li>
                <li>TV mounting & installations</li>
                <li>Smart home setup</li>
                <li>General handyman work</li>
              </ul>
            </div>
          </div>

          
        </div> */}

      </div>
    </section>
  );
}
