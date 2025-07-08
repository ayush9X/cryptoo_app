import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What is Digital Currency Investor EA?",
      answer: "It’s a PDF guide curated by experts to help you make smart Digital Currency investments. Plus, you get access to our exclusive Telegram group."
    },
    {
      question: "What do I get after payment?",
      answer: "You instantly receive the PDF download link and access to our private Telegram group with crypto tips and ₹10,000 reward updates."
    },
    {
      question: "Is this a one-time payment?",
      answer: "Yes! ₹1999 is a one-time payment for lifetime access to the guide and community."
    },
    {
      question: "How do I join the Telegram group?",
      answer: "After successful payment, you’ll be redirected to the PDF and group invite link."
    },
    {
      question: "Can I get a refund?",
      answer: "We don’t offer refunds since it's a digital product. Please read the details before buying."
    },
    {
      question: "Who is this e-book suitable for?",
      answer: "Anyone interested in learning about digital currency investing—from complete beginners to those looking to sharpen their crypto skills."
    },
     {
      question: "Can I share the e-book or Telegram access with others?",
      answer: "The e-book and Telegram group access are for personal use only and cannot be shared or resold."
    },
    {
      question: "What kind of rewards can I earn in the Telegram group?",
      answer: "Active members can participate in exclusive contests, quizzes, and referral programs to win rewards worth up to ₹10,000."
    },
    {
      question: "Who created this e-book?",
      answer: "The e-book is written by digital currency experts with years of experience in the crypto market, dedicated to helping you make smarter investment decisions9"
    },

    

  ];

  const toggleQuestion = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <h4 onClick={() => toggleQuestion(index)} className="faq-question">
              {item.question}
              <span className="faq-toggle">{activeIndex === index ? "−" : "+"}</span>
            </h4>
            {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
