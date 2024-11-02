import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Designed for companies</h4>
          <p>
            We are a team of passionate people whose goal is to improve
            everyone's life through disruptive products.
          </p>
        </div>
        <div className="footer-section">
          <h4>My Company</h4>
          <p>
            250 Executive Park Blvd, Suite 3400
            <br />
            San Francisco, CA 94134
            <br />
            United States
          </p>
        </div>
        <div className="footer-section">
          <h4>Follow us</h4>
          <div className="social-icons">
            <span>Facebook</span> | <span>Twitter</span> | <span>LinkedIn</span>{' '}
            | <span>Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
