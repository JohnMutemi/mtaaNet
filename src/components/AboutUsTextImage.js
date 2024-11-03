import React from 'react';
import './about.css';

const AboutUsTextImage = () => {
  return (
    <section className="about-text-image">
      <div className="text-image-container">
        <div className="text-section">
          <h2>Our Story</h2>
          <p>
            We have been delivering exceptional connectivity solutions for
            years, empowering communities and businesses.
          </p>
        </div>
        <div className="image-section">
          <img
            src="path/to/image.jpg"
            alt="Our journey"
            className="story-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsTextImage;
