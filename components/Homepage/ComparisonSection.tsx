import React from "react";
import "./comparison.css";

export default function ComparisonSection() {
  const comparisonData = [
    {
      title: "Open Transport",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
      points: [
        "Most affordable option",
        "Ideal for everyday vehicles",
        "Nationwide availability",
        "Multiple vehicles per carrier",
      ],
      btnText: "Choose Open Transport",
      btnLink: "/",
    },
    {
      title: "Enclosed Transport",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      points: [
        "Maximum protection",
        "Ideal for luxury vehicles",
        "Premium service",
        "Fully enclosed trailer",
      ],
      btnText: "Choose Enclosed Transport",
      btnLink: "/",
    },
  ];

  return (
    <section className="comparison-section">
      <div className="comparison-container">
        {/* Header */}
        <div className="comparison-header">
          <span className="comparison-subtitle">OPEN VS ENCLOSED</span>
          <h2>Which Transport Option Is Right for You?</h2>
        </div>

        {/* Cards Grid */}
        <div className="comparison-grid">
          {comparisonData.map((item, index) => (
            <div key={index} className="comparison-card">
              <div className="card-image-box">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="card-content">
                <h3>{item.title}</h3>
                <ul className="bullet-list">
                  {item.points.map((point, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a href={item.btnLink} className="comparison-btn">
                  {item.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}