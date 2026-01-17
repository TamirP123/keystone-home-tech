import React from "react";
import "../styles/ServiceAreaHighlight.css";
import mapBanner from "../assets/MapBackground.png";

export default function ServiceAreaHighlight() {
  return (
    <section className="service-highlight">
      {/* Background image for mobile */}
      <img
        src={mapBanner}
        alt=""
        className="service-highlight-bg"
        aria-hidden="true"
      />

      <div className="service-highlight-inner">
        <div className="service-highlight-content">
          <h2>Proudly Serving Montgomery County, PA</h2>

          <ul className="area-list">
            <li>Upper Moreland</li>
            <li>Willow Grove</li>
            <li>Hatboro</li>
            <li>Horsham</li>
            <p className="muted">And surrounding areas</p>
          </ul>
        </div>
      </div>
    </section>
  );
}
