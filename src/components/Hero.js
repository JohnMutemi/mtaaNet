import React from 'react';
import './hero.css';

function Hero() {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video
        className="hero-video"
        src="https://res.cloudinary.com/dhxtzhs6h/video/upload/v1730633102/fp303styn4d0wetltyal.mp4"
        autoPlay
        loop
        muted>
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to NetLink</h1>
          <p>Connecting You at the Speed of Now</p>
          <button className="hero-button">Click Here for Enticing Offers!</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
