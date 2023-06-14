import React, { useState } from 'react';
import image1 from './images/image1.jpeg';
import './FAQs.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq__item ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
      <h2 className="faq__question">{question}</h2>
      <p className={`faq__answer ${isOpen && 'open'}`}>{answer}</p>
    </div>
  );
}

function FAQs() {
  const faqs = [
    {
      question: "Question 1",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "Question 2",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "Question 3",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "Question 4",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "Question 5",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "Question 6",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "Question 7",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    
    // Can add as many FAQs as we like
  ];

  return (
    <div className="faqs" style={{ backgroundImage: `url(${image1})` }}>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} />)}
      <div className="home__footer">
            <p>&copy; 2023 - Our Travel Packages App. All rights reserved.</p>
      </div>
    </div>
    
  );
}

export default FAQs;
