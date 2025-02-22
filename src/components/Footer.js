import React from 'react';
import '../styles/Footer.css';
import logo from '../images/logo.png'; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={logo} alt="The Hyderabad Royale Logo" className="footer-logo" />
        <h3><strong>THE HYDERABAD ROYALE</strong></h3>
      </div>
      <div className="footer-section">
        <h4>Address</h4>
        <p>123 Main Street, Hyderabad</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <li><a href="/contact">Contact Form</a></li>
          <li><a href="mailto:info@restaurant.com">Email: info@restaurant.com</a></li>
          <li>Phone: +91-12345-67890</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;