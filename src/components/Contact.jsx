import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:tamirphillips@live.com?subject=Free Quote Request from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">

        {/* LEFT — FREE QUOTE CARD */}
        <div className="quote-card">
          <span className="quote-eyebrow">Free Estimate</span>
          <h2>No-Pressure, Honest Pricing</h2>

          <p>
            Reach out today for a fast, transparent quote.
            No upsells. No surprises. Just reliable work done right.
          </p>

          <ul className="quote-benefits">
            <li>✓ Local & Trusted</li>
            <li>✓ Fast Response Time</li>
            <li>✓ Clear Communication</li>
            <li>✓ Quality Workmanship</li>
          </ul>

          <div className="quote-highlight">
            <span>Same-Day Responses Available</span>
          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Request Your Free Quote</h3>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>How can we help?</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Request →
          </button>
        </form>

      </div>
    </section>
  );
}
