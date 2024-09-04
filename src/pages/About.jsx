import React from 'react';
import './About.css';
import teamPhoto from '../assets/team.jpg'; // Example image import, ensure you have the image in the correct path
import labPhoto from '../assets/lab.jpg'; // Example image import

const About = () => (
  <div className="about-container">
    <h1>About Us</h1>
    <p>At Neuotics, we are dedicated to providing high-quality pharmaceuticals that help you manage pain effectively and live a healthier life.</p>
    <div className="bio-section">
      <h2>Our Mission</h2>
      <p>
        Neuotics was founded with the mission to bring innovative and effective solutions to those suffering from chronic pain. We believe in the power of science and technology to transform lives and are committed to making our treatments accessible to everyone who needs them.
      </p>
      <h2>Our Team</h2>
      <div className="team-photo">
        <img src={teamPhoto} alt="Our Team" />
      </div>
      <p>
        Our passionate team of scientists, researchers, and medical professionals work tirelessly to develop pharmaceuticals that meet the highest standards of quality and efficacy. We are driven by a shared goal of improving patient outcomes and enhancing the quality of life for people around the world.
      </p>
      <h2>State-of-the-Art Facilities</h2>
      <div className="lab-photo">
        <img src={labPhoto} alt="Our Laboratory" />
      </div>
      <p>
        Neuotics is equipped with state-of-the-art laboratories and manufacturing facilities. Our cutting-edge technology and rigorous quality control processes ensure that every product we deliver is safe, reliable, and effective.
      </p>
    </div>
  </div>
);

export default About;