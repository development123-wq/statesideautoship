"use client";
import { useRef, useState, useEffect } from "react";

const REVIEWS = [
  { name: "Genevieve Monk", time: "8 hours ago", text: "Alex provided me with excellent service for the delivery of my Mercedes,...", img: "https://i.pravatar.cc/100?img=5" },
  { name: "jamvarcub", time: "14 hours ago", text: "Great service, best price & communication. Mr Blake did a great job!!! Thanks.....", img: "https://i.pravatar.cc/100?img=12" },
  { name: "Therrin Allen", time: "1 day ago", text: "Alex always does a fantastic job for me. 4th car he has shipped and always does a...", letter: "T", bg: "#062d57" },
  { name: "Johny Dorgerard", time: "1 day ago", text: "My shipment with Alex was handled professionally. It was handled with care. I...", letter: "JD", bg: "#111" },
  { name: "Sarah Wilson", time: "2 days ago", text: "Amazing experience! Car arrived on time and in perfect condition. Highly recommend!", img: "https://i.pravatar.cc/100?img=26" },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const scrollTo = (i: number) => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0] as HTMLElement;
    const w = card.offsetWidth + 16;
    trackRef.current.scrollTo({ left: w * i, behavior: "smooth" });
    setIndex(i);
  };
  const next = () => scrollTo(index >= REVIEWS.length - 1? 0 : index + 1);
  const prev = () => scrollTo(index <= 0? REVIEWS.length - 1 : index - 1);

  return (
    <section style={{ background: "#fff", padding: "40px 20px" }}>
      <style>{`
       .reviews-title{color:#0b1e48!important;font-size:44px!important;font-weight:800!important;line-height:1.2!important;margin:0 0 12px!important}
       .reviews-desc{color:#475569!important;font-size:16px!important;max-width:650px!important;margin:0 auto!important;line-height:1.7!important}
       .review-card{flex:0 0 calc(25% - 12px);scroll-snap-align:start;background:#fff;border:1px solid #e9eef3;border-radius:16px;padding:18px;box-shadow:0 2px 12px rgba(6,45,87,0.06)}
       .review-text{font-size:16px!important;color:#475569!important;line-height:1.6!important;margin:0 0 6px!important;min-height:72px!important}
        @media (max-width: 1100px) {.review-card { flex: 0 0 calc(33.333% - 11px)!important; } }
        @media (max-width: 800px) {.review-card { flex: 0 0 calc(50% - 8px)!important; } }
        @media (max-width: 600px) {
         .reviews-title{font-size:25px!important;line-height:1.25!important}
         .reviews-desc{font-size:13px!important;line-height:1.6!important;padding:0 10px!important}
         .review-card{flex:0 0 88%!important}
         .review-text{font-size:13px!important}
        }
      `}</style>

      <div style={{ maxWidth: "1300px", margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 className="reviews-title">What Our Customers Say</h2>
          <p className="reviews-desc">Read reviews from satisfied customers who trusted us with their vehicle transportation needs</p>
        </div>

        <div style={{ position: "relative" }}>
          <div ref={trackRef} style={{ display: "flex", gap: "16px", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", paddingBottom: "4px" }}>
            {REVIEWS.map((r, i) => (
              <div key={i} className="review-card">
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
                  {r.img? <img src={r.img} alt="" style={{ width: "38px", height: "38px", borderRadius: "50%" }} /> : <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: r.bg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700" }}>{r.letter}</div>}
                  <div>
                    <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#062d57", margin: "0", display: "flex", gap: "4px", alignItems: "center" }}>{r.name} <span style={{ background: "#1d9bf0", color: "#fff", width: "14px", height: "14px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "8px" }}>✓</span></h4>
                    <small style={{ fontSize: "11px", color: "#94a3b8" }}>{r.time} on <b style={{ color: "#4285F4" }}>Google</b></small>
                  </div>
                </div>
                <div style={{ color: "#f5b400", fontSize: "16px", marginBottom: "8px" }}>★★★★★</div>
                <p className="review-text">{r.text}</p>
                <button style={{ background: "none", border: "0", color: "#d60000", fontSize: "13px", fontWeight: "600", cursor: "pointer", padding: "0" }}>Read more</button>
              </div>
            ))}
          </div>

          <button onClick={prev} style={{ position: "absolute", left: "-14px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "50%", border: "0", background: "#062d57", color: "#fff", fontSize: "20px", cursor: "pointer", zIndex: 2 }}>‹</button>
          <button onClick={next} style={{ position: "absolute", right: "-14px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "50%", border: "0", background: "#062d57", color: "#fff", fontSize: "20px", cursor: "pointer", zIndex: 2 }}>›</button>
        </div>

        <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "24px" }}>
          {REVIEWS.map((_, i) => <span key={i} onClick={() => scrollTo(i)} style={{ width: i === index? "18px" : "6px", height: "6px", borderRadius: "10px", background: i === index? "#062d57" : "#d1d5db", cursor: "pointer", transition: "all 0.3s" }}></span>)}
        </div>
      </div>
    </section>
  );
}