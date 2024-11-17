import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="highlight-text">World's #1 Naming Platform</span>
        <h1>How Does Atom Work?</h1>
        <p>Atom helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.</p>
        <button onClick={() => window.open('https://www.google.com', '_blank')}>Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;