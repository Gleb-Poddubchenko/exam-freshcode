import React from 'react';
import './HowItWorks.scss';
import StepSection from '../StepSection/StepSection'; // компонент для секций
import HeroSection from '../HeroSection/HeroSection'; // заглавная секция

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <HeroSection />
      <div className="steps-container">
        <StepSection
          stepNumber="1"
          title="Заголовок шага 1"
          description="Описание шага 1."
          icon="fa fa-search" // Используем иконку, например, из FontAwesome
        />
        <StepSection
          stepNumber="2"
          title="Заголовок шага 2"
          description="Описание шага 2."
          icon="fa fa-cog"
        />
        <StepSection
          stepNumber="3"
          title="Заголовок шага 3"
          description="Описание шага 3."
          icon="fa fa-check"
        />
      </div>
    </div>
  );
};

export default HowItWorks;