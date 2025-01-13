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
      <h2>Profile</h2>
      <p>
        Neuotics is a 'Science & Research' based company run by Healthcare Professionals. The Neuotics is based at Hyderabad and operating in southern states of India. Neuotics has its strengths in Formulation development, Quality Assurance, Regulatory Affairs, Pharmaceutical Manufacturing and Pharmaceutical marketing.
      </p>
      <p>
        With initial focus into the Gynecology and the ensuing success, Neuotics is gradually spreading its wings into other chronic therapy segments like pain management, diabetology and cardiology as well.
        The company’s key strength is wide range of 100 products, 5 Specialised Divisions, covering almost all therapeutic segments and specialties.
        Neuotics Laboratories is a reliable healthcare partner which is not only committed to developing Novel technologies but also to provide the best services to medical fraternity across the country, thereby improving the quality of a patient’s life & helping them live a normal, happy and active life.
      </p>
      <h2>Our Vision</h2>
      <p>
        Win the pain through Qualitative affordable Medication.
        Neuotics aims at maximizing healthcare facilities by providing quality & Affordable drug formulations to cater the healthcare needs of the people across nation.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li><strong>Quality:</strong> Get it right the first time</li>
        <li><strong>Reliability:</strong> Maintain efficiency & discipline in all processes & systems and fulfill the promises made to stakeholders</li>
        <li><strong>Consistency:</strong> Endeavour to bring new products to the market & consistently deliver value to stakeholders</li>
        <li><strong>Trust:</strong> Be transparent in dealings</li>
        <li><strong>Innovation:</strong> Implement new ideas & technologies to meet unmet needs and think ahead of times</li>
      </ul>
      <h2>Board of Directors</h2>
      <ul>
        <li><strong>SAICHAND VIJAYAGIRI M.Pharm:</strong> Director</li>
        <li><strong>LAXMINARYANA GOLLA B.Pharm MBA:</strong> Director</li>
        <li><strong>Dr.G.VENKATESHWARLU M.Pharm PhD.:</strong> Director of Research & Development</li>
        <li><strong>VIKRAM KULSHRESTHA M.Pharm:</strong> Director of Quality Assurance</li>
      </ul>
      <h2>Team Neuotics</h2>
      <p>
        A dedicated team of well qualified professionals is a blend of Quality assurance, Regulatory, Production, Manufacturing, Analysis, Marketing, Logistics, Research and Development, Finance who can challenge any farcing competition in the market place.
        Team Neuotics is pooled by diligent experts who consistently thrive for Neuotics to be better than the best pharmaceutical formulators.
        Apart from them we have good support from leading Technical and Marketing consultants in the Pharmaceutical Industry and get regular inputs from them for the up gradation and optimization.
      </p>
      <h2>Corporate Identity Number</h2>
      <p>U24299TG2017PTC117998</p>
    </div>
  </div>
);

export default About;