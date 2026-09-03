import Link from "next/link";
import "./servicesection.css";

export default function ServicesSection() {
  const services = [
    {
      title: "Open Car Transport",
      description: "Affordable and dependable transportation for everyday vehicles.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      ),
      link: "/services/open-transport",
    },
    {
      title: "Enclosed Auto Transport",
      description: "Extra protection for luxury, classic, exotic and high-value vehicles.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <polygon points="12 8 13.09 10.21 15.5 10.56 13.75 12.26 14.16 14.67 12 13.53 9.84 14.67 10.25 12.26 8.5 10.56 10.91 10.21 12 8" />
        </svg>
      ),
      link: "/services/enclosed-transport",
    },
    {
      title: "Luxury & Exotic Transport",
      description: "Premium vehicle transportation with additional care and attention.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      link: "/services/luxury-transport",
    },
    {
      title: "Motorcycle Shipping",
      description: "Safe and secure transport customized specifically for all types of motorcycles.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="18.5" cy="17.5" r="3.5" />
          <path d="M15 6h1.5a2.5 2.5 0 0 1 2.5 2.5V14" />
          <path d="M9 18l3-7h4" />
        </svg>
      ),
      link: "/services/motorcycle-shipping",
    },
    {
      title: "Inoperable Vehicle Shipping",
      description: "Specialized equipment to safely load, transport, and unload non-running cars.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
        </svg>
      ),
      link: "/services/inoperable-shipping",
    },
    {
      title: "Dealer & Business Transport",
      description: "Bulk vehicle shipping solutions engineered for dealerships and businesses.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      link: "/services/dealer-transport",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        
        {/* Section Header */}
        <div className="services-header">
          <span className="services-subtitle">OUR SERVICES</span>
          <h2>
            Transportation Solutions Built <br />
            Around Your Vehicle
          </h2>
          <p>
            Flexible shipping options for everyday vehicles, specialty cars,
            motorcycles, dealerships and more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.link} className="service-link">
                Learn More <span>↗</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}