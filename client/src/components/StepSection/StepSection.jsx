import React from 'react';
import './StepSection.css';

const StepSection = ({ number, title, description }) => {
  return (
    <div className="step-section">
      <div className="step-number">Step {number}</div>
      <div className="step-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StepSection