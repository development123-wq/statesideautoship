"use client";
import Link from "next/link";

type OfferItem = {
  title: string;
  image: string;
  link: string; // <- you edit link here manually
};

const offers: OfferItem[] = [
  { 
    title: "Door-To-Door Car Transport", 
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80", 
    link: "/services/door-to-door" 
  },
  { 
    title: "Open Car Transport", 
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80", 
    link: "/services/open-car-transport" 
  },
  { 
    title: "Enclosed Auto Transport", 
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=500&q=80", 
    link: "/services/enclosed-auto-transport" 
  },
  { 
    title: "Motorcycle Shipping", 
    image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=500&q=80", 
    link: "/services/motorcycle-shipping" 
  },
  { 
    title: "Car Reseller Shipping", 
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=500&q=80", 
    link: "/services/car-reseller-shipping" 
  },
];

export default function WhatWeOffer() {
  return (
    <section style={{ background: "#0b1e48", padding: "70px 20px", position: "relative", overflow: "hidden" }}>
      {/* Decor bubbles */}
      <div style={{ position: "absolute", width: "180px", height: "180px", background: "rgba(255,255,255,0.06)", borderRadius: "100%", top: "30px", left: "12%" }} />
      <div style={{ position: "absolute", width: "220px", height: "220px", background: "rgba(255,255,255,0.04)", borderRadius: "100%", bottom: "-50px", left: "-40px" }} />

      <div style={{ maxWidth: "1350px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <h2 style={{ color: "#fff", fontSize: "36px", fontWeight: "800", textAlign: "center", margin: "0 0 42px" }} className="offer-heading">
          What We Offer ?
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "20px" }} className="offer-grid">
          {offers.map((item, i) => (
            <Link key={i} href={item.link} style={{ textDecoration: "none" }}>
              <div className="offer-card" style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", border: "2px solid #fff", boxShadow: "0 8px 20px rgba(0,0,0,0.18)", cursor: "pointer", height: "100%" }}>
                <div style={{ height: "170px", overflow: "hidden" }}>
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} className="offer-img" />
                </div>
                <div style={{ padding: "14px 12px", textAlign: "center", minHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p style={{ color: "#0b1e48", fontSize: "13px", fontWeight: "700", lineHeight: "1.35", margin: 0 }}>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .offer-card { transition: all 0.35s ease; }
        .offer-card:hover { transform: translateY(-8px); box-shadow: 0 18px 40px rgba(0,0,0,0.3)!important; }
        .offer-img { transition: transform 0.5s ease; }
        .offer-card:hover .offer-img { transform: scale(1.1); }
        @media (max-width: 1200px) { .offer-grid { grid-template-columns: repeat(3,1fr)!important; } }
        @media (max-width: 768px) { .offer-grid { grid-template-columns: repeat(2,1fr)!important; } .offer-heading { font-size: 28px!important; } }
        @media (max-width: 480px) { .offer-grid { grid-template-columns: 1fr!important; } .offer-heading { font-size: 24px!important; } }
      `}</style>
    </section>
  );
}