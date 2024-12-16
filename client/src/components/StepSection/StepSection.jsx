import React from 'react';
import './StepSection.module.scss';

const StepSection = ({ stepNumber, title, description, icon }) => {
  return (
    <div className="step-section">
      <div className="icon-container">
        <i className={icon}></i>
      </div>
      <div className="content">
        <h2>{`Шаг ${stepNumber}: ${title}`}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StepSection;