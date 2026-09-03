"use client";

import { useState } from "react";
import Link from "next/link";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },

    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "Car Shipping", href: "/services/car-shipping" },
        { label: "Motorcycle Shipping", href: "/services/motorcycle-shipping" },
        { label: "RV & Trailer Shipping", href: "/services/rv-trailer-shipping" },
        { label: "Heavy Equipment Shipping", href: "/services/heavy-equipment-shipping" },
        { label: "Boat Shipping", href: "/services/boat-shipping" },
      ],
    },

    { label: "How It Works", href: "/how-it-works" },
    // { label: "Locations", href: "/locations" },
    // { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faqs" },

    {
      label: "For Businesses",
      href: "",
      dropdown: [
        { label: "Auto Dealerships", href: "/auto-dealerships" },
        { label: "Auto Auctions", href: "/auto-auctions" },
        { label: "Rental Car Companies", href: "/rental-car-companies" },
        { label: "Online Car Sellers", href: "/online-car-sellers" },
      ],
    },

    {
      label: "Contact",
      href: "/contact",
      dropdown: [
        { label: "Carrier", href: "/carrier" },
        { label: "Customer", href: "/contact-us" },
      ],
    },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  // Chevron Down SVG Component
  const ChevronDown = () => (
    <svg
      className="dropdown-arrow"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );

  // Chevron Down SVG for Mobile
  const MobileChevronDown = () => (
    <svg
      className="mobile-dropdown-arrow"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );

  return (
    <header className="site-header">

      {/* Top Bar */}
      <div className="top-bar">
        <div className="header-container top-bar-inner">

          <div className="top-left">
            <span className="truck-icon">🚚</span>
            <span>Nationwide Auto Transport</span>

            <span className="top-divider" />

            <span>Safe • Reliable • Door-To-Door</span>
          </div>

          <div className="top-right">

            <a href="tel:+12152012010">
              <svg
                viewBox="0 0 24 24"
                className="top-icon"
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

              <span>(215) 201-2010</span>
            </a>

            <a href="mailto:allan@royalautoship.com">
              <svg
                viewBox="0 0 24 24"
                className="top-icon"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>

              <span>allan@royalautoship.com</span>
            </a>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        <div className="header-container navbar-inner">

          {/* Logo */}
          <Link href="/" className="logo" onClick={closeMobileMenu}>
            <img
              src="/logo.png"
              alt="Stateside Auto Ship"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">

            {navItems.map((item) => (
              <div
                key={item.href}
                className={`nav-item ${
                  item.dropdown ? "has-dropdown" : ""
                }`}
              >

                <Link href={item.href}>
                  {item.label}

                  {item.dropdown && (
                    <ChevronDown />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="dropdown-menu">

                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                      >
                        {subItem.label}
                      </Link>
                    ))}

                  </div>
                )}

              </div>
            ))}

          </nav>

          {/* Discover Button */}
          <Link href="/contact-us" className="discover-btn">
            <span>Discover More</span>
            <span className="arrow">→</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`mobile-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

          {navItems.map((item) => (

            <div
              key={item.href}
              className="mobile-nav-item"
            >

              <div className="mobile-nav-row">

                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>

                {item.dropdown && (
                  <button
                    type="button"
                    className={`mobile-dropdown-toggle ${
                      openDropdown === item.label ? "active" : ""
                    }`}
                    onClick={() => toggleDropdown(item.label)}
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <MobileChevronDown />
                  </button>
                )}

              </div>

              {item.dropdown && (
                <div
                  className={`mobile-dropdown ${
                    openDropdown === item.label ? "active" : ""
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={closeMobileMenu}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}

            </div>

          ))}

          <Link
            href="/contact"
            className="mobile-discover"
            onClick={closeMobileMenu}
          >
            Discover More <span>→</span>
          </Link>

        </div>
      </div>

    </header>
  );
}