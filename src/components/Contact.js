import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Your Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Your Email" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Phone:</label>
            <input type="phone" placeholder="Your Phone Number" />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Message:</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
        </div>
        <div className="form-row form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;