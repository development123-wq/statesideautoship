import React from "react";
import "./whychoose.css";

export default function WhyChooseSection() {
  const blocksData = [
    {
      number: "01",
      title: "Insurance Coverage and Safety",
      description:
        "United Freeway is a FMCSA and DOT licensed, BBB accredited company. We partner only with insured, carefully vetted carriers to ensure complete peace of mind. Car shipping can be stressful — that’s why we work exclusively with trusted, experienced auto transporters selected for their safety and reliability.",
      points: [
        "FMCSA Licensed",
        "FMCSA Licensed",
        "DOT Certified",
        "DOT Certified",
      ],
      reverse: false,
      graphic: (
        <div className="shield-card">
          <div className="shield-wrapper">
            <svg
              className="shield-bg"
              viewBox="0 0 200 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 10L180 50V110C180 165.23 145.86 215.12 100 230C54.14 215.12 20 165.23 20 110V50L100 10Z"
                fill="#E0F2FE"
                stroke="#D90429"
                strokeWidth="8"
              />
              <path
                d="M60 115L88 143L142 85"
                stroke="#D90429"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="badge badge-left">
            <span className="badge-check">✓</span>
            <span>LICENSED</span>
          </div>
          <div className="badge badge-right">
            <span className="badge-check">✓</span>
            <span>CERTIFIED</span>
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "4+ Years Experience",
      description:
        "With over 4 years of proven excellence in auto transport, we've safely delivered thousands of vehicles nationwide and gained overall 4.9-star rating on major platforms like Google, Facebook and BBB. Our company is built on trust, transparency, and outstanding customer service.",
      points: [
        "4+ Years in Business",
        "16,000+ Vehicles Delivered",
        "Nationwide Coverage",
        "Overall 4.9-rated service on major platforms",
      ],
      reverse: true,
      graphic: (
        <div className="truck-illustration">
          <div className="truck-body">
            <div className="truck-top-bar"></div>
            <div className="truck-plus">+</div>
            <div className="truck-cabin"></div>
          </div>
          <div className="truck-wheels">
            <span className="wheel"></span>
            <span className="wheel"></span>
          </div>
          <div className="road-line"></div>
        </div>
      ),
    },
    {
      number: "03",
      title: "Expert Team",
      description:
        "Our experienced auto transport specialists and dedicated professional agents ensure your vehicle is handled with the utmost care and professionalism. From booking to delivery, our logistics team oversees every detail to provide a smooth, secure, and timely shipment.",
      points: [
        "Professional Team",
        "Personalized Support",
        "Dedicated Agents",
        "Experienced Specialists",
      ],
      reverse: false,
      graphic: (
        <div className="team-illustration">
          <div className="people-group">
            <div className="person side"></div>
            <div className="person main">
              <span className="person-check">✓</span>
            </div>
            <div className="person side"></div>
          </div>
          <div className="illustration-label">EXPERT TRANSPORT TEAM</div>
        </div>
      ),
    },
    {
      number: "04",
      title: "Competitive Pricing",
      description:
        "Instant estimates, competitive rates, and complete transparency — no hidden fees. Our advanced car shipping calculator delivers highly accurate pricing, giving you a clear and reliable quote within seconds.",
      points: [
        "Instant Price Estimates",
        "Advanced Cost Calculator",
      ],
      reverse: true,
      graphic: (
        <div className="pricing-illustration">
          <div className="card-frame">
            <span className="card-check">✓</span>
            <div className="currency-circle">$</div>
            <div className="card-line long"></div>
            <div className="card-line-group">
              <div className="card-line medium"></div>
              <div className="card-line red-short"></div>
            </div>
            <div className="card-line red-long"></div>
          </div>
          <div className="illustration-label">CLEAR & COMPETITIVE PRICING</div>
        </div>
      ),
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Section Header */}
        <div className="why-choose-header">
          <span className="why-choose-subtitle">WHY CHOOSE STATESIDE?</span>
          <h2>Built Around Safety. Driven by Service.</h2>
          <p>
            Professional support and dependable transportation from start to finish.
          </p>
        </div>

        {/* Dynamic Blocks Grid */}
        <div className="why-blocks-wrapper">
          {blocksData.map((block, index) => (
            <div
              key={index}
              className={`block-row ${block.reverse ? "reverse-row" : ""}`}
            >
              {/* Text Area */}
              <div className="block-content">
                <span className="block-number">{block.number}</span>
                <h3>{block.title}</h3>
                <p>{block.description}</p>

                <div
                  className={`points-grid ${
                    block.points.length === 2 ? "two-col" : ""
                  }`}
                >
                  {block.points.map((pt, idx) => (
                    <div key={idx} className="point-item">
                      <span className="point-check">✓</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphic Area */}
              <div className="block-graphic-container">
                <div className="block-graphic-card">{block.graphic}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}