import React, { useState } from "react";
import styles from "./FAQSection.module.scss";
import faqData from "./faqData"; 

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState(0); 
  const [activeIndexes, setActiveIndexes] = useState([]); 

  const toggleFAQ = (id) => {
    if (activeIndexes.includes(id)) {
      setActiveIndexes(activeIndexes.filter((index) => index !== id)); 
    } else {
      setActiveIndexes([...activeIndexes, id]); 
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    document
      .getElementById(faqData[index].category.replace(/\s+/g, "-"))
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.faqSection}>
      <h1 className={styles.header}>Frequently Asked Questions</h1>

     
      <div className={styles.tabs}>
        {faqData.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${
              activeTab === index ? styles.active : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.category}
          </button>
        ))}
      </div>

      
      {faqData.map((section, sectionIndex) => (
        <div
          id={section.category.replace(/\s+/g, "-")}
          key={sectionIndex}
          className={styles.section}
        >
          <h2>{section.category}</h2>
          {section.faqs.map((faq) => (
            <div
              key={faq.id}
              className={`${styles.faqItem} ${
                activeIndexes.includes(faq.id) ? styles.activeFaq : ""
              }`}
            >
              <div
                className={styles.faqHeader}
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3>{faq.question}</h3>
                <span>{activeIndexes.includes(faq.id) ? "×" : "+"}</span>
              </div>
              {activeIndexes.includes(faq.id) && (
                <div className={styles.faqContent}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;