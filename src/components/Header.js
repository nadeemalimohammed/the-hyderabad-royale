import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">The Hyderabad Royale</div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink exact to="/the-hyderabad-royale/" activeClassName="active" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/the-hyderabad-royale/menu" activeClassName="active" onClick={closeMenu}>Our Menu</NavLink></li>
          <li><NavLink to="/the-hyderabad-royale/about" activeClassName="active" onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/the-hyderabad-royale/gallery" activeClassName="active" onClick={closeMenu}>Gallery</NavLink></li>
          <li><NavLink to="/the-hyderabad-royale/contact" activeClassName="active" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </nav>
      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
}

export default Header;