import React from 'react';
import './HowItWorks.css';
import HeroSection from '../HeroSection/HeroSection';
import VideoSection from '../VideoHowItWorks/VideoSection';
import CardSection from '../CardSectionHowItWorks/CardSection';
import StepSection from '../StepSection/StepSection';
import FAQSection from '../FAQSectionHowItWorks/FAQSection';

const steps = [
  {
    number: 1,
    title: 'Step One',
    description: 'Fill out your Naming Brief and begin receiving name ideas in minutes.',
  },
  {
    number: 2,
    title: 'Step Two',
    description: 'Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.',
  },
  {
    number: 3,
    title: 'Step Three',
    description: 'Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.',
  },
  {
    number: 4,
    title: 'Step Four',
    description: 'Pick a Winner. The winner gets paid for their submission.',
  },
];

const HowItWorks = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <CardSection />
      <section className="how-it-works-section">
        <h2>How Do Naming Contests Work?</h2>
        <div className="steps-container">
          {steps.map((step) => (
            <StepSection key={step.number} number={step.number} title={step.title} description={step.description} />
          ))}
        </div>
      </section>
      <FAQSection />
    </>
  );
};

export default HowItWorks;