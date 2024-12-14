import React from 'react';
import styles from './CardSection.module.scss';
import icon1 from '../../../public/staticImages/diamond.png';
import icon2 from '../../../public/staticImages/clock.png';
import icon3 from '../../../public/staticImages/star.png';

const CardSection = () => {
  const cards = [
    {
      id: 1,
      icon: icon1,
      title: 'Launch a Contest',
      description: 'Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.',
      buttonText: 'Launch a Contest',
      buttonLink: 'https://www.google.com',
    },
    {
      id: 2,
      icon: icon2,
      title: 'Explore Names For Sale',
      description: 'Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design.',
      buttonText: 'Explore Names For Sale',
      buttonLink: 'https://www.google.com',
    },
    {
      id: 3,
      icon: icon3,
      title: 'Agency-level Managed Contests',
      description: 'Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs.',
      buttonText: 'Learn More',
      buttonLink: 'https://www.google.com',
    },
  ];

  return (
    <div className={styles.cardSection}>
      <div className={styles.header}>
        <h2>3 Ways To Use Atom</h2>
        <p>Atom offers 3 ways to get you a perfect name for your business.</p>
      </div>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div className={styles.card} key={card.id}>
            <div className={styles.iconWrapper}>
              <img src={card.icon} alt={card.title} className={styles.icon} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.buttonLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
              {card.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;