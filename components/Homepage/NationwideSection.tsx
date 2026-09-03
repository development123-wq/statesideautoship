import React from "react";
import "./nationwide.css";

export default function NationwideSection() {
  const regions = [
    "Northeast",
    "Southeast",
    "Midwest",
    "Southwest",
    "West",
    "Nationwide",
  ];

  return (
    <section className="nationwide-section">
      <div className="nationwide-container">
        {/* Left Side: Map Graphic */}
        <div className="map-container">
          <div className="map-overlay-glow"></div>
          <img
            src="./map-logo.png"
            alt="US Map Nationwide Network"
            className="us-map-img"
          />
        </div>

        {/* Right Side: Content */}
        <div className="nationwide-content">
          <span className="nationwide-subtitle">NATIONWIDE COVERAGE</span>
          <h2>Shipping Vehicles Across the States.</h2>
          <p>
            From coast to coast, Stateside Auto Ship helps customers move
            vehicles throughout the United States.
          </p>

          {/* Region Buttons Grid */}
          <div className="regions-grid">
            {regions.map((region, index) => (
              <div key={index} className="region-card">
                <span className="red-accent-bar"></span>
                <span className="region-name">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}