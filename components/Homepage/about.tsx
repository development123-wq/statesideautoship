import Link from "next/link";
import "./about.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Image */}
        <div className="about-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000"
            alt="Stateside Auto Ship Truck"
            className="about-img"
          />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <span className="about-tag">ABOUT STATESIDE AUTO SHIP</span>
          
          <h2>
            Moving Your Vehicle <br />
            Shouldn't Be Complicated.
          </h2>

          <p>
            We make vehicle transportation simple, transparent, and stress-free.
            Whether you're moving across the country, purchasing a vehicle online,
            relocating for work, or transporting a specialty vehicle, our team helps
            coordinate the journey from pickup to delivery.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Reliable Carrier Network</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Professional Support</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Transparent Pricing</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Open & Enclosed Shipping</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Door-to-Door Service</span>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <span>Nationwide Service</span>
            </div>
          </div>

          <Link href="/about-us" className="about-btn">
            Learn More About Us <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}