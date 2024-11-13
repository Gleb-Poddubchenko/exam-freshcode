import React from 'react';
import './HowItWorks.css'; // Подключаем файл со стилями

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h1 className="title">How It Works</h1>
      <p className="intro-text">
        Here’s how our platform works to help you get the best experience. Just follow these steps.
      </p>
      <div className="steps">
        <div className="step">
          <h2>Step 1: Sign Up</h2>
          <p>Register an account to start exploring our features and services.</p>
        </div>
        <div className="step">
          <h2>Step 2: Choose a Plan</h2>
          <p>Select the plan that best suits your needs and goals.</p>
        </div>
        <div className="step">
          <h2>Step 3: Start Using</h2>
          <p>Access our tools and resources to achieve your objectives.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;