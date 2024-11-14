import React from 'react';
import "../HeaderHowItWorks/Header.sass";

const steps = [
  { title: "Step 1", description: "Description of step 1" },
  { title: "Step 2", description: "Description of step 2" },
  { title: "Step 3", description: "Description of step 3" },
];

const HowItWorks = () => (
  <section className="how-it-works" id="how-it-works">
    <h2>How it Works</h2>
    <div className="how-it-works__steps">
      {steps.map((step, index) => (
        <div key={index} className="how-it-works__step">
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;