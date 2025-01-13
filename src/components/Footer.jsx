import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <button className="contact-button" onClick={toggleFormVisibility}>Contact Us</button>
        {isFormVisible && (
          <div className="contact-form-overlay">
            <div className="contact-form">
              <h3>Contact Us</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
              </form>
              <button className="close-button" onClick={toggleFormVisibility}>Close</button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;