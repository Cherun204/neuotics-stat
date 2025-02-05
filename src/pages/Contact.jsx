import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact-container">
    <h1>Contact Us</h1>
    <p>Get in touch with us for any inquiries or support.</p>
    <div className="contact-details">
      <h2>Corp Office:</h2>
      <p>H.NO; 12-5-55/2, D.NO:G1, Samskruthi Sirimalli, Vijayapuri, Tarnaka, Hyderabad, Secunderabad- 500017, IN.</p>
      <p>Email: <a href="mailto:info@neuotics.com">info@neuotics.com</a></p>
      <p>Phone: <a href="tel:+914048518521">040-48518521</a>, <a href="tel:+919963533060">9963533060</a></p>
    </div>
    <div className="map-container">
      <iframe
        title="Neuotics Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789012!2d78.48667131512345!3d17.38504408812345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f123456789%3A0x1234567890abcdef!2sNeuotics%20Corp%20Office!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin"
        width="100"
        height="100"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default Contact;