import React from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <p className={styles.label}>World's #1 Naming Platform</p>
      <h1 className={styles.title}>How Does Atom Work?</h1>
      <p className={styles.description}>
        Atom helps you come up with a great name for your business by combining the power
        of crowdsourcing with sophisticated technology and agency-level validation services.
      </p>
    </div>
  );
};

export default HeroSection;