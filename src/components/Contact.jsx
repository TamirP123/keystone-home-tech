import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        {/* LEFT — FREE QUOTE */}
        <div className="quote-panel">
  <span className="quote-eyebrow">Free Estimate</span>

  <h3>Get a Free Quote Today</h3>

  <p>
    Fast, reliable home services from a trusted local professional.
    Call or text for quick scheduling.
  </p>

  <div className="quote-phone">
    📞 <span>(267) 308-4755</span>
  </div>

  <a href="sms:+12673084755" className="quote-btn">
    Text for Estimate →
  </a>
</div>


        {/* RIGHT — CONTACT FORM */}
        <form className="form-panel">
          <h3>Contact Form</h3>

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <select name="service" onChange={handleChange}>
            <option value="">Service Needed</option>
            <option>General Contracting</option>
            <option>Remodeling</option>
            <option>Repairs</option>
            <option>Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
          />

          <button type="submit" className="form-submit">
            Submit Request →
          </button>
        </form>
      </div>
    </section>
  );
}
