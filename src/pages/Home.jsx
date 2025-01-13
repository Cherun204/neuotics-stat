import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const images = [
  '/src/assets/veg.jpg',
  '/src/assets/veg-globe.jpg',
  '/src/assets/medicine.jpg',
  '/src/assets/lab-doc.jpg',
  '/src/assets/human.jpg',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="slideshow">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <div className="hero-content">
          <h1 className="company-name">Neuotics</h1>
          <p className="tagline">Win the Pain</p>
          <a href="#about" className="learn-more-btn">Learn More</a>
        </div>
      </section>
      <Link to="/about" className="section-link">
        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>At Neuotics, we are dedicated to providing high-quality pharmaceuticals that help you manage pain effectively and live a healthier life.</p>
        </section>
      </Link>
        <section id="partners" className="partners-section">
          <h2>Our Partners</h2>
          <p>We collaborate with leading healthcare providers and research institutions to bring you the best in medical innovation.</p>
        </section>
        <section id="achievements" className="achievements-section">
          <h2>Our Achievements</h2>
          <p>We have been recognized for our contributions to the pharmaceutical industry and our commitment to patient care.</p>
        </section>
        <section id="products" className="products-section">
          <h2>Our Products</h2>
          <p>Explore our range of products designed to help you manage pain and improve your quality of life.</p>
        </section>
        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <p>We offer a variety of services to support your health and well-being, including consultations and personalized treatment plans.</p>
        </section>
    </div>
  );
};

export default Home;