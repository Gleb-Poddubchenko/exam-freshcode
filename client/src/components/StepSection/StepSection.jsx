import React from 'react';
import styles from './StepSection.module.scss';
import stepsData from './stepsData';

const StepSection = () => {
  return (<>
      <h2 className={styles.heading}>How Do Naming Contests Work?</h2>
    <div className={styles.container}>
      {stepsData.map((step, index) => (
        <div key={step.id} className={styles.stepWrapper}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>Step {step.id}</div>
            <p className={styles.stepDescription}>{step.title}</p>
          </div>
          {index < stepsData.length - 1 && <div className={styles.arrow}></div>}
        </div>
      ))}
    </div>
    </>
  );
};

export default StepSection;