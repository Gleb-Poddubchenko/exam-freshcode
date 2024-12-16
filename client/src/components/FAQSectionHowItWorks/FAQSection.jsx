import React, { useState } from 'react';
import './FAQSection.css';

const faqData = [
  {
    question: 'How long does it take to start receiving submissions?',
    answer: 'You will start receiving submissions within minutes after launching your contest.',
  },
  {
    question: 'How long do Naming Contests last?',
    answer: 'Most naming contests last for 5 to 7 days, but you can choose your desired duration.',
  },
  {
    question: 'Where are the creatives located?',
    answer: 'Our creative community is global, with participants from various countries.',
  },
  {
    question: 'What if I do not like any submissions?',
    answer: 'If you do not like any submissions, we will work with you to provide additional ideas.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection