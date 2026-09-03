import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Reviews from "@/components/Review/Reviews";
import FaqSection from '@/components/Homepage/FaqSection';

const myFaqs = [
  { 
    id: 1, 
    question: "What size boats can you transport?", 
    answer: "We transport boats of all sizes from small fishing boats to large yachts. Boats over 12 feet wide may require special permits and routing." 
  },
  { 
    id: 2, 
    question: "Do I need to prepare my boat for shipping?", 
    answer: "Yes, remove all loose items, secure hatches and doors, disconnect batteries, drain water systems, and document the boat's condition with photos." 
  },
  { 
    id: 3, 
    question: "Can you transport my boat without a trailer?", 
    answer: "Yes, we can provide a specialized boat trailer if you don't have one. This service is included in your quote." 
  },
  { 
    id: 4, 
    question: "Is my boat insured during transport?", 
    answer: "Yes, all our carriers carry comprehensive insurance. Your boat is fully covered throughout the entire shipping process." 
  },
  { 
    id: 5, 
    question: "How long does boat shipping take?", 
    answer: "Typical boat shipping takes 3-10 days depending on distance and size. Oversized boats may take longer due to permit requirements and route restrictions." 
  },
];

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero */}
   <HomeBanner 
  title="
Buy, Sell, and Let Us Take Care of the Transport"
  desc="We do our best to make sure every sale reaches the buyer on time, safely, and efficiently — so you can focus on growing your online business."
  bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
  ctaLink="/contact-us"
/>
      {/* About Content */}
      {/* OUR STORY - Aligned */}
  {/* EFFORTLESS SHIPPING FOR ONLINE CAR SALE - PREMIUM */}
<section
  style={{
    width: "100%",
    padding: "50px 20px",
    background: "#ffffff",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  }}
>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');
    .eff-card{transition:all .3s ease}
    .eff-card:hover{transform:translateY(-4px); box-shadow:0 16px 36px rgba(11,30,72,.10) !important; border-color:#e2e8f0 !important}
    @media(max-width:900px){ .eff-wrap{grid-template-columns:1fr !important; gap:24px !important} .eff-title{font-size:2rem !important; text-align:center !important} .eff-desc{text-align:center !important} .eff-top{justify-content:center !important} }
  `}</style>

  <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
    
    {/* Center Heading */}
    <div style={{ textAlign: "center", maxWidth: "1000px", margin: "0 auto 36px" }}>
     
      <h2 className="eff-title" style={{ fontSize: "2.8rem", fontWeight: 800, color: "#0b1e48", lineHeight: 1.15, margin: "0", letterSpacing: "-0.6px", textAlign: "center" }}>
        Effortless Shipping for Every <span style={{ color: "#d60000" }}>Online Car Sale</span>
      </h2>
    </div>

    <div className="eff-wrap" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "32px", alignItems: "start" }}>

      {/* Left Content Cards */}
      <div style={{ display: "grid", gap: "16px" }}>
        <div className="eff-card" style={{ background: "#f8fafc", border: "1px solid #eef2f7", borderRadius: "16px", padding: "22px 22px" }}>
          <p style={{ margin: 0, fontSize: "15px", fontWeight: 400, color: "#475569", lineHeight: 1.75 }}>
            Shipping vehicles sold online comes with unique challenges: timing, coordination, and ensuring cars arrive in perfect condition. <span style={{ color: "#0b1e48", fontWeight: 600 }}>United Freeway Transportation</span> provides access to a nationwide network of licensed and insured carriers, making it easier to move vehicles to buyers across the country. The company handles scheduling, paperwork, insurance verification, and carrier coordination, so online sellers don't have to worry about managing multiple transporters or tracking shipments manually. This allows you to focus on marketing, closing sales, and building customer trust.
          </p>
        </div>

        <div className="eff-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "22px 22px", boxShadow: "0 8px 24px rgba(11,30,72,.04)" }}>
          <p style={{ margin: 0, fontSize: "15px", fontWeight: 400, color: "#475569", lineHeight: 1.75 }}>
            Online car sellers also gain flexibility and peace of mind through the expertise of United Freeway Transportation. Whether it's a single car sold to a distant buyer or multiple vehicles being shipped to different locations, the company ensures efficient, timely transport. Pre-vetted carriers reduce risk, digital tools provide real-time tracking and instant quotes, and an advanced cost calculator allows sellers to plan transport budgets quickly and accurately. With nationwide coverage and reliable service, every sale can be shipped confidently and professionally.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginTop: "4px" }}>
          {[
            { t: "Licensed Carriers", d: "100% verified" },
            { t: "Real-time Tracking", d: "Live updates" },
            { t: "Instant Quotes", d: "Cost calculator" },
          ].map((f) => (
            <div key={f.t} style={{ background: "#0b1e48", borderRadius: "12px", padding: "14px 14px", textAlign: "center" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "2px" }}>{f.t}</div>
              <div style={{ fontSize: "11px", color: "#94a3b8" }}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visual */}
      <div style={{ position: "sticky", top: "90px", display: "grid", gap: "16px" }}>
        <div style={{ width: "100%", height: "320px", borderRadius: "18px", overflow: "hidden", background: "linear-gradient(135deg,#0b1e48 0%,#1e3a8a 100%)", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="online car sale" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(11,30,72,.6) 0%, transparent 60%)" }}></div>
          <div style={{ position: "absolute", bottom: "14px", left: "14px", right: "14px", background: "rgba(255,255,255,.96)", backdropFilter: "blur(8px)", borderRadius: "12px", padding: "12px 14px", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", background: "#d60000", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0b1e48" }}>Nationwide Coverage</div>
              <div style={{ fontSize: "11px", color: "#475569" }}>All 50 states, fully insured</div>
            </div>
          </div>
        </div>

        <div style={{ background: "#f8fafc", border: "1px solid #eef2f7", borderRadius: "14px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "center" }}>
          <div style={{ width: "42px", height: "42px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b1e48" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0b1e48" }}>Focus on Sales</div>
            <div style={{ fontSize: "12px", color: "#475569" }}>We handle scheduling & paperwork</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


{/* HOW UFT HELPS YOU GROW - PREMIUM UNIQUE NO NUMBERS */}
<section
  style={{
    width: "100%",
    padding: "20px 20px 20px 20px",
    background: "#ffffff",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  }}
>
  <style>{`
    .growU-card{transition:all .35s ease; position:relative; overflow:hidden}
    .growU-card:hover{transform:translateY(-5px); box-shadow:0 20px 44px rgba(11,30,72,.12) !important}
    .growU-card:hover .growU-blob{transform:scale(1.4)}
    .growU-blob{transition:all .4s ease}
    .growU-icon{transition:all .3s ease}
    .growU-card:hover .growU-icon{transform:scale(1.08)}
    @media(max-width:1000px){ .growU-grid{grid-template-columns:1fr 1fr !important} }
    @media(max-width:600px){ .growU-grid{grid-template-columns:1fr !important} .growU-title{font-size:2rem !important} }
  `}</style>

  <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
    
    <div style={{ textAlign: "center", maxWidth: "1000px", margin: "0 auto 36px" }}>
     
      <h2 className="growU-title" style={{ fontSize: "2.8rem", fontWeight: 800, color: "#0b1e48", lineHeight: 1.15, letterSpacing: "-0.6px", margin: 0 }}>
        How United Freeway Transportation<br />
        Helps You <span style={{ color: "#d60000" }}>Grow</span>
      </h2>
    </div>

    <div className="growU-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>

      <div className="growU-card" style={{ background: "#f8fafc", border: "1px solid #eef2f7", borderRadius: "18px", padding: "24px 20px" }}>
        <div className="growU-blob" style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", background: "rgba(11,30,72,.06)", borderRadius: "50%" }}></div>
        <div className="growU-icon" style={{ width: "46px", height: "46px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#0b1e48", lineHeight: 1.3 }}>Access to a Large Carrier Network</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>Connects sellers with hundreds of licensed carriers nationwide and ensures fleet availability with optimized routes for every vehicle delivery.</p>
      </div>

      <div className="growU-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "24px 20px", boxShadow: "0 8px 24px rgba(11,30,72,.04)" }}>
        <div className="growU-blob" style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", background: "rgba(214,0,0,.06)", borderRadius: "50%" }}></div>
        <div className="growU-icon" style={{ width: "46px", height: "46px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d60000" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#0b1e48" }}>Competitive & Transparent Pricing</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>Compares multiple carrier rates to find the best value and honest quotes along with an advanced cost calculator allows sellers to plan transport budgets efficiently and quickly.</p>
      </div>

      <div className="growU-card" style={{ background: "#f8fafc", border: "1px solid #eef2f7", borderRadius: "18px", padding: "24px 20px" }}>
        <div className="growU-icon" style={{ width: "46px", height: "46px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11h-6"/><path d="M19 8v6"/></svg>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#0b1e48" }}>Simplified Shipping & Single Point of Contact</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>Provides scheduling, paperwork, insurance verification, and updates — giving sellers one dedicated contact and freeing them from managing multiple carriers.</p>
      </div>

      <div className="growU-card" style={{ background: "#0b1e48", border: "1px solid #0b1e48", borderRadius: "18px", padding: "24px 20px" }}>
        <div className="growU-icon" style={{ width: "46px", height: "46px", background: "rgba(255,255,255,.12)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Flexibility & Speed</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#94a3b8", lineHeight: 1.6 }}>Ships single or multiple vehicle shipments efficiently and handles urgent or time-sensitive deliveries seamlessly, keeping your sales schedule on track.</p>
      </div>

      <div className="growU-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "24px 20px", boxShadow: "0 8px 24px rgba(11,30,72,.04)" }}>
        <div className="growU-icon" style={{ width: "46px", height: "46px", background: "#f8fafc", border: "1px solid #eef2f7", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b1e48" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#0b1e48" }}>Risk Management</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>Works only with pre-vetted, licensed, and insured carriers, protecting sellers and managing transportation risk, focus on maintaining integrity and reliability during transport.</p>
      </div>

      <div className="growU-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "24px 20px", boxShadow: "0 8px 24px rgba(11,30,72,.04)" }}>
        <div className="growU-icon" style={{ width: "46px", height: "46px", background: "#d60000", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#0b1e48" }}>Digital Tools for Efficiency</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>Provides instant quotes, real-time tracking, and digital billing to simplify shipping operations and enhance transparency.</p>
      </div>

      <div className="growU-card" style={{ background: "#f8fafc", border: "1px solid #eef2f7", borderRadius: "18px", padding: "24px 20px" }}>
        <div className="growU-icon" style={{ width: "46px", height: "46px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#0b1e48" }}>Nationwide Coverage</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>Ensures reliable delivery to buyers across all states, avoiding the need to coordinate with multiple local carriers.</p>
      </div>

      <div className="growU-card" style={{ background: "#f8fafc", border: "1px solid #eef2f7", borderRadius: "18px", padding: "24px 20px" }}>
        <div className="growU-icon" style={{ width: "46px", height: "46px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b1e48" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#0b1e48" }}>Advanced Cost Calculator</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>Generates accurate shipping estimates in seconds and helps plan transport budgets quickly and efficiently.</p>
      </div>

    </div>
  </div>
</section>




<Reviews />

 <FaqSection customFaqs={myFaqs} />

   
    </main>
  );
}
