import React from 'react';
import heroImage from '../images/background image.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img src={heroImage} alt="Hero" />
        <div className="hero-text">
          <h1>Welcome to <br />The Hyderabad Royale</h1>
          <p>Discover the Royal Essence of Hyderabadi Cuisine</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
