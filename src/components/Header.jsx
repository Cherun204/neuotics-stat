import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <NavLink to="/" activeClassName="active-link">Neuotics</NavLink>
    </div>
    <nav className="nav">
      <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
      <NavLink to="/products" activeClassName="active-link">Products</NavLink>
      <NavLink to="/about" activeClassName="active-link">About</NavLink>
      <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
    </nav>
  </header>
);

export default Header;