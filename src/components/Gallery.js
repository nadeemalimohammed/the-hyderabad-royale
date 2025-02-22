import React from 'react';
import '../styles/Gallery.css';

function Gallery() {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-section">
        <h2>Hotel Ambience</h2>
        <div className="gallery-row">
          <img src={require('../images/restaurant-img1.jpg')} alt="Restaurant  1" />
          <img src={require('../images/restaurant-img2.jpg')} alt="Restaurant  2" />
          <img src={require('../images/restaurant-img3.jpg')} alt="Restaurant  3" />
          <img src={require('../images/restaurant-img4.jpg')} alt="Restaurant  4" />
        </div>
      </div>
      <div className="gallery-section">
        <h2>Awards</h2>
        <div className="gallery-row">
          <img src={require('../images/awards-1.jpg')} alt="Award 1" />
          <img src={require('../images/awards-2.jpg')} alt="Award 2" />
          <img src={require('../images/awards-3.jpg')} alt="Award 3" />
          <img src={require('../images/awards-4.jpg')} alt="Award 4" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;