"use client";

import React, { useState } from "react";
import "./faq.css";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "How much does it cost to ship a car?",
    answer:
      "The cost to ship a car depends on factors such as distance, vehicle size, transport type (open vs. enclosed), and seasonal demand. Request a free quote for an accurate estimate.",
  },
  {
    id: 2,
    question: "How long does vehicle shipping take?",
    answer:
      "Transit time varies based on distance. Local or regional shipments usually take 1–3 days, while coast-to-coast shipping typically takes 5–9 days.",
  },
  {
    id: 3,
    question: "What is the difference between open and enclosed transport?",
    answer:
      "Open transport carries vehicles on an open trailer and is the most cost-effective option. Enclosed transport provides a fully covered trailer for maximum protection against weather and road debris.",
  },
  {
    id: 4,
    question: "Can you ship an inoperable vehicle?",
    answer:
      "Yes, we can ship non-running vehicles. Please inform us during booking so we can assign a carrier equipped with specialized loading tools like winches.",
  },
  {
    id: 5,
    question: "Can I ship a motorcycle?",
    answer:
      "Yes, we transport motorcycles using specialized tie-downs and enclosed or open trailers designed for two-wheeled vehicles.",
  },
];

interface FaqSectionProps {
  customFaqs?: FaqItem[];
}

export default function FaqSection({ customFaqs }: FaqSectionProps): React.ReactElement {
  const dataToShow = customFaqs || faqData;
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number): void => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <span className="faq-subtitle">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {dataToShow.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? "active" : ""}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-toggle-icon">
                    <span className="icon-bar horizontal"></span>
                    <span className="icon-bar vertical"></span>
                  </span>
                </button>

                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Large CTA Banner Section */}
        <div className="faq-cta-banner large-banner">
          <div className="faq-cta-content">
            <h2>Ready to Ship Your Vehicle?</h2>
            <p>Get your free, no-obligation auto transport quote today.</p>
          </div>
          <div className="faq-cta-actions">
            <a href="/contact" className="btn-secondary">
              Get In Touch &rarr;
            </a>
            <a href="/services" className="btn-primary">
              Explore Our Services &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}