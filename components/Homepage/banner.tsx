"use client";

import { useState } from "react";
import Link from "next/link";
import "./banner.css";

export default function Home() {
  const [transportType, setTransportType] = useState("open");
  const [vehicleType, setVehicleType] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      transportType,
      vehicleType,
    });

    alert("Thank you! Your quote request has been submitted.");
  };

  return (
    <main className="home-page">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="hero-section">

        <div className="hero-overlay"></div>

        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <p className="hero-small-title">
              SAFE. RELIABLE. NATIONWIDE.
            </p>

            <h1>
              Your Vehicle
              <br />
              Our Responsibility
            </h1>

            <p className="hero-description">
              Professional auto transport services across the United States.
              From pickup to delivery, Stateside Auto Ship makes vehicle
              shipping simple.
            </p>

            <div className="hero-buttons">

              <Link
                href="/services"
                className="hero-primary-btn"
              >
                Explore Services
                <span>→</span>
              </Link>

              <a
                href="tel:+12152012010"
                className="hero-secondary-btn"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2
                    19.79 19.79 0 0 1-8.63-3.07
                    19.5 19.5 0 0 1-6-6
                    19.79 19.79 0 0 1-3.07-8.67
                    A2 2 0 0 1 4.11 2h3
                    a2 2 0 0 1 2 1.72
                    12.84 12.84 0 0 0 .7 2.81
                    2 2 0 0 1-.45 2.11L8.09 9.91
                    a16 16 0 0 0 6 6l1.27-1.27
                    a2 2 0 0 1 2.11-.45
                    12.84 12.84 0 0 0 2.81.7
                    A2 2 0 0 1 22 16.92z"
                  />
                </svg>

                Call Us Today
              </a>

            </div>

          </div>


          {/* =========================================
              QUOTE FORM
          ========================================= */}

          <div className="quote-card">

            <h2>
              GET YOUR FREE
              <span>AUTO SHIPPING QUOTE</span>
            </h2>

            <form onSubmit={handleSubmit}>

              {/* LOCATIONS */}

              <div className="location-grid">

                <div className="form-group">
                  <label htmlFor="pickup">
                    PICKUP LOCATION
                  </label>

                  <input
                    id="pickup"
                    type="text"
                    placeholder="ZIP Code or City"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="delivery">
                    DELIVERY LOCATION
                  </label>

                  <input
                    id="delivery"
                    type="text"
                    placeholder="ZIP Code or City"
                    required
                  />
                </div>

              </div>


              {/* TRANSPORT TYPE */}

              <div className="form-group transport-group">

                <label>
                  TRANSPORT TYPE
                </label>

                <div className="transport-options">

                  <label className="radio-option">

                    <input
                      type="radio"
                      name="transport"
                      value="open"
                      checked={transportType === "open"}
                      onChange={(e) =>
                        setTransportType(e.target.value)
                      }
                    />

                    <span className="custom-radio"></span>

                    <span>Open Transport</span>

                  </label>


                  <label className="radio-option">

                    <input
                      type="radio"
                      name="transport"
                      value="enclosed"
                      checked={transportType === "enclosed"}
                      onChange={(e) =>
                        setTransportType(e.target.value)
                      }
                    />

                    <span className="custom-radio"></span>

                    <span>Enclosed</span>

                  </label>

                </div>

              </div>


              {/* VEHICLE TYPE */}

              <div className="form-group">

                <label htmlFor="vehicle">
                  VEHICLE TYPE
                </label>

                <select
                  id="vehicle"
                  value={vehicleType}
                  onChange={(e) =>
                    setVehicleType(e.target.value)
                  }
                  required
                >
                  <option value="">
                    Select Vehicle Type
                  </option>

                  <option value="car">
                    Car
                  </option>

                  <option value="suv">
                    SUV
                  </option>

                  <option value="truck">
                    Truck
                  </option>

                  <option value="motorcycle">
                    Motorcycle
                  </option>

                  <option value="van">
                    Van
                  </option>
                </select>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="quote-submit-btn"
              >
                Request A Quote
                <span>→</span>
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =========================================
          BENEFITS
      ========================================= */}

      <section className="benefits-section">

        <div className="benefits-container">

          {/* Benefit 1 */}

          <div className="benefit-item">

            <div className="benefit-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l8 3v5c0 5.5-3.5 8.5-8 10-4.5-1.5-8-4.5-8-10V6l8-3z" />
                <path d="m8 12 2.5 2.5L16 9" />
              </svg>
            </div>

            <div>
              <h3>Fully Insured</h3>

              <p>
                Your vehicle is 100% protected throughout transit.
              </p>
            </div>

          </div>


          {/* Benefit 2 */}

          <div className="benefit-item">

            <div className="benefit-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>

            <div>
              <h3>Nationwide Coverage</h3>

              <p>
                We ship vehicles to and from every state in the U.S.
              </p>
            </div>

          </div>


          {/* Benefit 3 */}

          <div className="benefit-item">

            <div className="benefit-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>

            <div>
              <h3>On-Time Delivery</h3>

              <p>
                We value your time and deliver as promised.
              </p>
            </div>

          </div>


          {/* Benefit 4 */}

          <div className="benefit-item">

            <div className="benefit-icon">
              <svg viewBox="0 0 24 24">
                <path d="M5 13a7 7 0 0 1 14 0" />
                <path d="M5 13v4H3v-4a9 9 0 0 1 18 0v4h-2v-4" />
                <path d="M8 18h8" />
              </svg>
            </div>

            <div>
              <h3>24/7 Support</h3>

              <p>
                Our team is here to assist you anytime.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}