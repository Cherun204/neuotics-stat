import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust the path to your logo image

const Header = () => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/" onClick={handleLogoClick} className="logo-link">
          <img src={logo} alt="Neuotics Logo" className="logo-image" />
        </a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/" onClick={handleHomeClick} className="nav-link">Home</a></li>
          <li><Link to="/products" className="nav-link">Products</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/careers" className="nav-link">Careers</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;