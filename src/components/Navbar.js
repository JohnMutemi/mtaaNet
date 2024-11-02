import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="topnav">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="right-section">
            <Link to="/signin" className="sign-in-link">
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
