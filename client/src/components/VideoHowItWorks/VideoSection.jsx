import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-text">
        <h2>How Does Atom Work?</h2>
        <p>Atom helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.</p>
      </div>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/exampleVideoID"
          title="How Does Atom Work?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;