import React from 'react';
import './CardSection.css';


import icon1 from '../../../public/staticImages/diamond.png';
import icon2 from '../../../public/staticImages/clock.png';
import icon3 from '../../../public/staticImages/star.png';

const cards = [
  {
    icon: icon1,
    title: 'Launch a Contest',
    description: 'Work with hundreds of creative experts to get custom name suggestions for your business.',
    buttonText: 'Launch a Contest',
  },
  {
    icon: icon2,
    title: 'Explore Names For Sale',
    description: 'Our branding team has curated thousands of pre-made names that you can purchase instantly.',
    buttonText: 'Explore Names For Sale',
  },
  {
    icon: icon3,
    title: 'Agency-level Managed Contests',
    description: 'Get a complete agency-level experience at a fraction of Agency costs.',
    buttonText: 'Learn More',
  },
];

const CardSection = () => {
  return (
    <section className="card-section">
      <h2>3 Ways To Use Atom</h2>
      <p>Atom offers 3 ways to get you a perfect name for your business.</p>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.icon} alt={`${card.title} icon`} className="card-icon" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button onClick={() => window.open('https://www.google.com', '_blank')}>{card.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;