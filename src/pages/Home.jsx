import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <div id="threejs-container"></div>
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="company-name">Neuotics</h1>
        <p className="tagline">Win the Pain</p>
        <a href="#about" className="learn-more-btn">Learn More</a>
      </div>
    </section>
    <section id="about" className="about-section">
      <h2>About Us</h2>
      <p>At Neuotics, we are dedicated to providing high-quality pharmaceuticals that help you manage pain effectively and live a healthier life.</p>
    </section>
    <section id="products" className="products-section">
      <h2>Our Products</h2>
      <div className="products-list">
        <div className="product-card">
          <h3>Product 1</h3>
          <p>Short description of Product 1.</p>
        </div>
        <div className="product-card">
          <h3>Product 2</h3>
          <p>Short description of Product 2.</p>
        </div>
        <div className="product-card">
          <h3>Product 3</h3>
          <p>Short description of Product 3.</p>
        </div>
      </div>
    </section>
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>Get in touch with us for any inquiries or support.</p>
      <a href="#contact-form" className="contact-btn">Contact Us</a>
    </section>
  </div>
);

export default Home;