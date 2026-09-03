import React from "react";
import "./vehicletypes.css";

export default function VehicleTypesSection() {
  const vehicleTypes = [
    {
      title: "Sedans",
      icon: "🚗",
    },
    {
      title: "SUVs",
      icon: "🚙",
    },
    {
      title: "Trucks",
      icon: "🛻",
    },
    {
      title: "Motorcycles",
      icon: "🏍️",
    },
    {
      title: "Luxury",
      icon: "🏎️",
    },
    {
      title: "Vans",
      icon: "🚐",
    },
  ];

  return (
    <section className="vehicle-types-section">
      <div className="vehicle-types-container">
        {/* Header */}
        <div className="vehicle-types-header">
          <span className="vehicle-types-subtitle">VEHICLE TYPES</span>
          <h2>We Ship More Than Cars</h2>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="vehicle-types-grid">
          {vehicleTypes.map((vehicle, index) => (
            <div key={index} className="vehicle-card">
              <div className="vehicle-icon-wrapper">
                <span className="vehicle-emoji" role="img" aria-label={vehicle.title}>
                  {vehicle.icon}
                </span>
              </div>
              <h3 className="vehicle-title">{vehicle.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}