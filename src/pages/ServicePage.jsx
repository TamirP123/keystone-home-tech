import React, { useState } from "react";
import "../styles/ServicePage.css";

export default function RequestService() {
  const [contactMethod, setContactMethod] = useState("text");

  const handleTextSubmit = () => {
    const message = encodeURIComponent(
      `Hello Keystone Home Services,

Name:
Service Needed:
Address:
Details:
Preferred Time:`
    );

    window.location.href = `sms:+12155551234?body=${message}`;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert("Email submission will be connected to backend later.");
  };

  return (
    <section className="request-service">
      <div className="request-wrapper">

        {/* LEFT INFO */}
        <div className="request-info">
          <h2>Request Service</h2>
          <p>
            Tell us what you need — from furniture assembly to home repairs.
            We respond quickly and keep things simple.
          </p>

          <ul>
            <li>✔ Fast response</li>
            <li>✔ Clear pricing</li>
            <li>✔ Trusted local professionals</li>
            <li>✔ Residential & small business</li>
          </ul>
        </div>

        {/* FORM */}
        <div className="request-form-card">
          <h3>How would you like to contact us?</h3>

          {/* TOGGLE */}
          <div className="contact-toggle">
            <button
              className={contactMethod === "email" ? "active" : ""}
              onClick={() => setContactMethod("email")}
            >
              📩 Email
            </button>

            <button
              className={contactMethod === "text" ? "active" : ""}
              onClick={() => setContactMethod("text")}
            >
              💬 Text
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleEmailSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Service Needed" required />
            <input type="text" placeholder="Address or Area" />
            <textarea placeholder="Brief description of the job" rows="4" />

            <button
              type={contactMethod === "email" ? "submit" : "button"}
              className="primary-btn"
              onClick={contactMethod === "text" ? handleTextSubmit : undefined}
            >
              {contactMethod === "text"
                ? "Send via Text Message"
                : "Send via Email"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
