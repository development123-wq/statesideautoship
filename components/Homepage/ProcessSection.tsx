import React from "react";
import "./process.css";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Get Your Quote",
      description: "Tell us where your vehicle is and where it's going.",
    },
    {
      number: "02",
      title: "Book Your Shipment",
      description: "Choose your transport option and schedule pickup.",
    },
    {
      number: "03",
      title: "We Pick Up Your Vehicle",
      description: "A professional carrier arrives and completes the inspection.",
    },
    {
      number: "04",
      title: "Receive Your Vehicle",
      description: "Your vehicle arrives at its destination ready for you.",
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <span className="process-subtitle">OUR PROCESS</span>

          <h2>Simple Steps. Seamless Experience.</h2>

          <p>
            From your first quote to final delivery, we keep vehicle shipping
            straightforward.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div className="step-item" key={step.number}>
              <div className="step-circle-wrapper">
                <div className="step-circle">
                  <span className="circle-pulse"></span>
                  <span className="circle-number">{step.number}</span>
                </div>

                {index < steps.length - 1 && (
                  <div className="step-line-container">
                    <div className="step-dashed-line"></div>
                  </div>
                )}
              </div>

              <h3 className="step-title">{step.title}</h3>

              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}