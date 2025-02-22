import React from 'react';
import aboutImage from '../images/charminar.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="about-heading">
        <h1>About Us: The Hyderabad Royale</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="Charminar" />
        </div>
        <div className="about-text">
          <h1>Discover the Royal Essence of Hyderabadi Cuisine</h1>
          <p>
            At The Hyderabad Royale, we are dedicated to preserving and showcasing the culinary heritage of Hyderabad, once the gastronomic hub of the Nizams' empire. Our journey began with a passion for authentic flavors and a vision to deliver an unparalleled dining experience steeped in tradition and luxury.
            <br /><br />
            With decades of culinary expertise, our chefs meticulously craft each dish using time-honored recipes, premium ingredients, and an exquisite blend of spices. From the fragrant Hyderabadi Dum Biryani to the indulgent richness of Qubani Ka Meetha, every plate is a celebration of royal splendor and authenticity.
          </p>
          <h1>Our Legacy</h1>
          <p>
            Our team has curated a dining experience that blends heritage with modern elegance. Having served countless patrons, from families to dignitaries, we take pride in being the custodians of Hyderabadi culinary traditions.
            <br /><br />
            Join us at The Hyderabad Royale to embark on a journey through time, savoring the flavors that once graced royal feasts and courtly banquets. Here, every meal is a tribute to Hyderabad’s opulent past and its vibrant culinary legacy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;