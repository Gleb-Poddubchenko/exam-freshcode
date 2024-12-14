import React from "react";
import styles from "./VideoSection.module.scss";

const VideoSection = () => {
  return (
    <div className={styles.videoSection}>
     
      <div className={styles.textContainer}>
        <h2 className={styles.title}>How Does Atom Work?</h2>
        <p className={styles.description}>
          Atom combines the power of crowdsourcing with cutting-edge technology and
          agency-level validation to help you find the perfect name for your business.
        </p>
      </div>

     
      <div className={styles.videoContainer}>
        <div className={styles.videoFrame}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/Qlbm9p3pd-w"
            title="How Does Atom Work"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;