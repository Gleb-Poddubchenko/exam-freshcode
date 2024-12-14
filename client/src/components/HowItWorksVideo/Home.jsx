import React from 'react';
import HeroSection from '../HeroSection/HeroSection';

import styles from './Home.module.scss';
import VideoSection from '../VideoHowItWorks/VideoSection';

const Home = () => {
  return (
    <main className={styles.home}>
      <HeroSection />
      <VideoSection />
    </main>
  );
};

export default Home;
