import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import "./footer.css";

export default function Footer(): React.ReactElement {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img
                src="/logo.png"
                alt="Stateside Auto Ship"
              />
            </div>

            <p className="footer-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took dummy text
              for Letraset's Body Type sheets.
            </p>

            {/* Social Icons */}
            <div className="footer-socials">

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="social-icon"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* X */}
              <a
                href="#x"
                aria-label="X"
                className="social-icon"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3C3.75 3 3 3.76 3 4.73c0 .97.75 1.73 1.82 1.73h.03c1.12 0 1.84-.76 1.84-1.73C6.69 3.76 5.97 3 4.85 3ZM21 13.84c0-3.76-2.01-5.51-4.69-5.51-2.16 0-3.13 1.19-3.67 2.02V8.5H9.34V21h3.3v-6.97c0-1.84.34-3.64 2.64-3.64 2.27 0 2.3 2.05 2.3 3.76V21H21v-7.16Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="social-icon"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M13.5 21v-8h2.75l.42-3h-3.17V8.08c0-.87.24-1.46 1.49-1.46h1.59V3.94c-.28-.04-1.25-.12-2.38-.12-2.36 0-3.98 1.44-3.98 4.08V10H7.55v3h2.67v8h3.28Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-title">
              QUICK LINKS
            </h4>

            <ul className="footer-links-list">
              <li>
                <a href="/">
                  <span>Home</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>

              <li>
                <a href="/about-us">
                  <span>About Us</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>

              <li>
                <a href="/services">
                  <span>Services</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>

              <li>
                <a href="/how-it-works">
                  <span>How It Works</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>

              <li>
                <a href="/faqs">
                  <span>FAQ</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>

               <li>
                <a href="/carrier">
                  <span>Carrier</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>

               <li>
                <a href="/contact-us">
                  <span>Customer</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links-col">
            <h4 className="footer-title">
              SERVICES
            </h4>

            <ul className="footer-links-list">
              <li>
                <a href="/services/car-shipping">
                  <span>Car Shipping</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>

              <li>
                <a href="/services/motorcycle-shipping">
                  <span>Motorcycle Shipping</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>

              <li>
                <a href="/services/rv-trailer-shipping">
                  <span>RV & Trailer Shipping</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>

              <li>
                <a href="/services/heavy-equipment-shipping">
                  <span>Heavy Equipment Shipping</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>

              <li>
                <a href="/services/boat-shipping">
                  <span>Boat Shipping</span>
                  <ArrowUpRight className="link-arrow" size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact-card">

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={18} strokeWidth={1.8} />
              </div>

              <div className="contact-info">
                <span className="contact-label">
                  PHONE
                </span>

                <a
                  href="tel:2152012010"
                  className="contact-val"
                >
                  (215) 201-2010
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={18} strokeWidth={1.8} />
              </div>

              <div className="contact-info">
                <span className="contact-label">
                  EMAIL
                </span>

                <a
                  href="mailto:allan@royalautoship.com"
                  className="contact-val"
                >
                  allan@royalautoship.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={18} strokeWidth={1.8} />
              </div>

              <div className="contact-info">
                <span className="contact-label">
                  ADDRESS
                </span>

                <span className="contact-val">
                  600 Red Lion Rd Apt S11,
                  <br />
                  Philadelphia
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="footer-bottom">

          <p className="copyright-text">
            ©2026 Stateside Auto Ship. All Rights Reserved.
          </p>

          <div className="footer-legal-links">
            <a href="#privacy">
              Privacy Policy
            </a>

            <span className="legal-divider">
              |
            </span>

            <a href="#terms">
              Terms Of Use
            </a>

            <span className="legal-divider">
              |
            </span>

            <a href="#sitemap">
              Sitemap
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}