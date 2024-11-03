import React from 'react';
import './hero.css';

function Hero() {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video
        className="hero-video"
        src="https://res.cloudinary.com/dhxtzhs6h/video/upload/v1730586263/lithg0uv3vdiszlaf4wj.mp4"
        autoPlay
        loop
        muted>
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to NetLink</h1>
          <p>Connecting You at the Speed of Now</p>
          <button className="hero-button">Grab Enticing Offers!</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
