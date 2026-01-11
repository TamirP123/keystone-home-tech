import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:tamirphillips@live.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">Let's Connect</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-subtitle">Get in Touch</h3>
            <p className="contact-description">
              I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>tamirphillips@live.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Philadelphia, PA</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-link"><i className="fab fa-github"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}