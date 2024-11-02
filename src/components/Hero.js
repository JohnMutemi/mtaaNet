import React from 'react';
import './hero.css';

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to NetLink</h1>
            <p>Connecting You at the Speed of Now</p>
            <button className="hero-button">
              Click to Grab Enticing offers!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
