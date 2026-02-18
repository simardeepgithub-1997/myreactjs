import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Prime Shopping Edition</h1>
        <p>Free delivery, exclusive offers, and early access to sales.</p>
        <button className="prime-btn">Join Prime Now</button>
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
};

export default Hero;
