import React from 'react';
import CardSection from '../CardSectionHowItWorks/CardSection';
import StepSection from '../StepSection/StepSection';
import FAQSection from '../FAQSectionHowItWorks/FAQSection';
import Home from '../HowItWorksVideo/Home';
import styles from './HowItWorks.module.scss';

const HowItWorks = () => {
  return (
    <div className={styles.howItWorks}>
      <Home />
      <CardSection />
      <StepSection />
      <FAQSection />
    </div>
  );
};

export default HowItWorks;
