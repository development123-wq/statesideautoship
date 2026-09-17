import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Reviews from "@/components/Review/Reviews";
import FaqSection from '@/components/Homepage/FaqSection';
import ShippingCostsTransit from "@/components/ShippingCostsTransit";

const myFaqs = [
  { id: 1, question: "How is my motorcycle secured during transport?", answer: "We use soft tie-down straps that won't damage your bike's finish, along with wheel chocks to keep it stable. The bike is never secured by handlebars or other delicate parts." },
  { id: 2, question: "Should I choose open or enclosed transport?", answer: "Open transport is economical for most bikes. Enclosed transport is recommended for high-value, custom, or vintage motorcycles that need extra protection from weather and road debris." },
  { id: 3, question: "How long does motorcycle shipping take?", answer: "Typical delivery times range from 1-7 days depending on distance. Cross-country shipments take 5-7 days, while regional transport can be completed in 1-3 days." },
  { id: 4, question: "Do I need to drain the fuel tank?", answer: "No, you should leave about 1/4 tank of fuel. This is enough for loading and unloading but reduces weight and fire risk during transport." },
  { id: 5, question: "Can you ship custom or modified motorcycles?", answer: "Yes, we regularly ship custom and modified bikes. Just provide accurate dimensions and any special handling requirements when requesting your quote." },
];

export default function AboutUsPage() {
  return (
    <main>
      <HomeBanner
        title="Expert Motorcycle Shipping"
        desc="Specialized motorcycle shipping with expert handlers who understand the value of your ride. From sport bikes to cruisers, we handle every bike with care."
        bgImage="/motorcycle_shipping_trailer_interior.jpg"
        ctaLink="/contact-us"
      />
      <Reviews />

{/* HOW MOTORCYCLE SHIPPING WORKS */}
<section style={{ width: "100%", padding: "0px 20px 40px 20px", background: "#ffffff", fontFamily: "'Inter', sans-serif", boxSizing: "border-box" }}>
  <style>{`
    .hsw2-card{transition:all .3s ease; position:relative}
    .hsw2-card:hover{transform:translateY(-6px); box-shadow:0 20px 44px rgba(6,45,87,.12) !important}
    .hsw2-card:hover .hsw2-bar{width:100%}
    .hsw2-title{color:#0b1e48 !important;font-size:44px !important;font-weight:800 !important;line-height:1.15 !important;letter-spacing:-0.6px !important;margin:0 !important;text-align:center !important}
    .hsw2-subtitle{color:#475569 !important;font-size:16px !important;line-height:1.6 !important;margin:8px 0 0 !important;text-align:center !important}
    .hsw2-card-desc{color:#475569 !important;font-size:16px !important;line-height:1.6 !important;margin:0 !important}
    @media(max-width:900px){ .hsw2-grid{grid-template-columns:1fr 1fr !important} }
    @media(max-width:600px){ 
      .hsw2-grid{grid-template-columns:1fr !important;gap:16px !important}
      .hsw2-title{font-size:25px !important;line-height:1.25 !important}
      .hsw2-subtitle{font-size:13px !important}
      .hsw2-card-desc{font-size:13px !important}
    }
  `}</style>
  <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
    <div style={{ textAlign:"center", margin:"0 auto 30px", maxWidth:"1000px" }}>
      <h2 className="hsw2-title">How Motorcycle Shipping Works?</h2>
      <p className="hsw2-subtitle">Our streamlined process ensures your vehicle is transported safely and efficiently</p>
    </div>
    <div className="hsw2-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"18px" }}>
      <div className="hsw2-card" style={{ background:"#f8fafc", border:"1px solid #eef2f7", borderRadius:"18px", padding:"22px 20px" }}>
        <div className="hsw2-bar" style={{ position:"absolute", top:0, left:0, height:"3px", width:"40px", background:"#d60000", borderRadius:"18px 18px 0 0", transition:"all .3s ease" }}></div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px" }}>
          <div style={{ width:"42px", height:"42px", background:"#0b1e48", borderRadius:"11px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <span style={{ fontSize:"28px", fontWeight:800, color:"#e2e8f0", lineHeight:1 }}>01</span>
        </div>
        <h3 style={{ margin:"0 0 8px", fontSize:"15px", fontWeight:700, color:"#0b1e48" }}>Request Quote</h3>
        <p className="hsw2-card-desc">Provide your motorcycle details, pickup and delivery locations. Get an instant customized quote for your bike transport.</p>
      </div>
      <div className="hsw2-card" style={{ background:"#ffffff", border:"1px solid #e2e8f0", borderRadius:"18px", padding:"22px 20px", boxShadow:"0 8px 24px rgba(6,45,87,.04)" }}>
        <div className="hsw2-bar" style={{ position:"absolute", top:0, left:0, height:"3px", width:"40px", background:"#d60000", borderRadius:"18px 18px 0 0", transition:"all .3s ease" }}></div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px" }}>
          <div style={{ width:"42px", height:"42px", background:"#0b1e48", borderRadius:"11px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <span style={{ fontSize:"28px", fontWeight:800, color:"#e2e8f0", lineHeight:1 }}>02</span>
        </div>
        <h3 style={{ margin:"0 0 8px", fontSize:"15px", fontWeight:700, color:"#0b1e48" }}>Schedule Pickup</h3>
        <p className="hsw2-card-desc">Choose your preferred transport method and pickup date. We'll match you with a specialized motorcycle carrier.</p>
      </div>
      <div className="hsw2-card" style={{ background:"#f8fafc", border:"1px solid #eef2f7", borderRadius:"18px", padding:"22px 20px" }}>
        <div className="hsw2-bar" style={{ position:"absolute", top:0, left:0, height:"3px", width:"40px", background:"#d60000", borderRadius:"18px 18px 0 0", transition:"all .3s ease" }}></div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px" }}>
          <div style={{ width:"42px", height:"42px", background:"#0b1e48", borderRadius:"11px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 6v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <span style={{ fontSize:"28px", fontWeight:800, color:"#e2e8f0", lineHeight:1 }}>03</span>
        </div>
        <h3 style={{ margin:"0 0 8px", fontSize:"15px", fontWeight:700, color:"#062d57" }}>Secure Loading</h3>
        <p className="hsw2-card-desc">Your motorcycle is carefully secured using soft straps and wheel chocks. Professional handling ensures zero damage.</p>
      </div>
      <div className="hsw2-card" style={{ background:"#0b1e48", border:"1px solid #062d57", borderRadius:"18px", padding:"22px 20px" }}>
        <div className="hsw2-bar" style={{ position:"absolute", top:0, left:0, height:"3px", width:"40px", background:"#d60000", borderRadius:"18px 18px 0 0", transition:"all .3s ease" }}></div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px" }}>
          <div style={{ width:"42px", height:"42px", background:"rgba(255,255,255,.12)", borderRadius:"11px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
          </div>
          <span style={{ fontSize:"28px", fontWeight:800, color:"rgba(255,255,255,.25)", lineHeight:1 }}>04</span>
        </div>
        <h3 style={{ margin:"0 0 8px", fontSize:"15px", fontWeight:700, color:"#ffffff" }}>Delivery</h3>
        <p style={{ margin:0, fontSize:"16px", color:"#94a3b8", lineHeight:1.6 }}>Your bike arrives safely at your destination. Final inspection and handover at your specified location.</p>
      </div>
    </div>
  </div>
</section>

{/* NATIONWIDE */}
<section style={{ width:"100%", padding:"40px 20px", background:"#ffffff", fontFamily:"'Inter', sans-serif", boxSizing:"border-box" }}>
  <style>{`
    .rv2-card{transition:all .3s ease}
    .rv2-card:hover{transform:translateY(-6px); box-shadow:0 18px 36px rgba(6,45,87,.12) !important}
    .rv2-title{color:#0b1e48 !important;font-size:44px !important;font-weight:800 !important;line-height:1.15 !important;letter-spacing:-0.6px !important;margin:0 0 12px !important}
    .rv2-desc{color:#475569 !important;font-size:16px !important;font-weight:400 !important;line-height:1.6 !important;margin:0 !important}
    @media(max-width:900px){ .rv2-grid{grid-template-columns:1fr !important; gap:24px !important} .rv2-left{position:relative !important; top:0 !important} }
    @media(max-width:600px){
      .rv2-title{font-size:25px !important;line-height:1.25 !important}
      .rv2-desc{font-size:13px !important;line-height:1.6 !important}
      .rv2-card{grid-template-columns:1fr !important}
    }
  `}</style>
  <div className="rv2-grid" style={{ maxWidth:"1300px", margin:"0 auto", display:"grid", gridTemplateColumns:"360px 1fr", gap:"40px", alignItems:"start" }}>
    <div className="rv2-left" style={{ position:"sticky", top:"90px" }}>
      <h2 className="rv2-title">Nationwide Auto Transport Made Simple</h2>
      <p className="rv2-desc" style={{ margin:"0 0 20px" }}>Trusted motorcycle shipping for riders, dealerships, and collectors across all 50 states.</p>
      <div style={{ background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:"12px", padding:"12px 14px", display:"flex", alignItems:"center", gap:"10px" }}>
        <div style={{ width:"36px", height:"36px", background:"#0b1e48", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 10a4 4 0 1 0 0-0.01"/><path d="M19 10a4 4 0 1 0 0-0.01"/><path d="M5 10h6l-1-3h4l-1 3h6"/><path d="M9 10v2"/><path d="M15 10v2"/></svg>
        </div>
        <div>
          <div style={{ fontSize:"13px", fontWeight:700, color:"#0b1e48" }}>Motorcycles - 50 States</div>
          <div style={{ fontSize:"11px", color:"#475569" }}>Standard, custom & luxury bikes</div>
        </div>
      </div>
    </div>
    <div style={{ display:"grid", gap:"18px" }}>
      <div className="rv2-card" style={{ background:"#f8fafc", borderRadius:"16px", padding:"22px", border:"1px solid #eef2f7", display:"grid", gridTemplateColumns:"48px 1fr", gap:"16px" }}>
        <div style={{ width:"48px", height:"48px", background:"#ffffff", border:"1px solid #e2e8f0", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 12px rgba(6,45,87,.06)" }}>
          <span style={{ fontSize:"14px", fontWeight:800, color:"#d60000" }}>01</span>
        </div>
        <div>
          <h3 style={{ margin:"0 0 8px", fontSize:"16px", fontWeight:700, color:"#0b1e48" }}>Nationwide Motorcycle Shipping Made Simple</h3>
          <p className="rv2-desc">The motorcycle shipping industry in the US provides a safe and convenient way for riders, dealerships, and collectors to transport bikes nationwide. Licensed carriers offer both open and enclosed shipping options for every distance and budget.</p>
        </div>
      </div>
      <div className="rv2-card" style={{ background:"#ffffff", borderRadius:"16px", padding:"22px", border:"1px solid #e2e8f0", boxShadow:"0 8px 24px rgba(6,45,87,.05)", display:"grid", gridTemplateColumns:"48px 1fr", gap:"16px" }}>
        <div style={{ width:"48px", height:"48px", background:"#0b1e48", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:"14px", fontWeight:800, color:"#fff" }}>02</span>
        </div>
        <div>
          <h3 style={{ margin:"0 0 8px", fontSize:"16px", fontWeight:700, color:"#0b1e48" }}>How the Motorcycle Shipping Process Works</h3>
          <p className="rv2-desc">You request a quote with your motorcycle details and pickup/delivery locations. After booking, a carrier is assigned, inspection is done, and the bike is securely loaded. Customers receive updates during transit, and a final inspection is done at delivery.</p>
        </div>
      </div>
      <div className="rv2-card" style={{ background:"#0b1e48", borderRadius:"16px", padding:"22px", border:"1px solid #0b1e48", display:"grid", gridTemplateColumns:"48px 1fr", gap:"16px" }}>
        <div style={{ width:"48px", height:"48px", background:"rgba(255,255,255,.12)", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:"14px", fontWeight:800, color:"#fff" }}>03</span>
        </div>
        <div>
          <h3 style={{ margin:"0 0 8px", fontSize:"16px", fontWeight:700, color:"#ffffff" }}>Why Choose Stateside Auto Ship (Motorcycles)</h3>
          <p style={{ margin:0, fontSize:"16px", fontWeight:400, color:"#ffffff", lineHeight:1.7 }}>Stateside Auto Ship connects you with trusted fully insured motorcycle carriers nationwide. We provide personalized service, transparent pricing, and instant estimates for standard bikes, custom builds, and luxury motorcycles.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* HOW MUCH DOES IT COST */}
<section style={{ width: "100%", padding: "40px 20px", background: "#f8fafc", fontFamily: "'Inter', sans-serif", boxSizing: "border-box" }}>
  <style>{`
    .cost-card{transition:all .3s ease; border-top:3px solid transparent}
    .cost-card:hover{transform:translateY(-6px); box-shadow:0 18px 40px rgba(11,30,72,.12) !important; border-top-color:#d60000}
    .cost-card:hover .cost-icon{transform:rotate(-8deg) scale(1.1); background:#0b1e48}
    .cost-icon{transition:all .3s ease}
    .cost-title{color:#0b1e48 !important;font-size:44px !important;font-weight:800 !important;line-height:1.15 !important;letter-spacing:-0.6px !important;margin:0 !important}
    .cost-desc{color:#475569 !important;font-size:16px !important;line-height:1.6 !important;margin:0 !important}
    @media(max-width:900px){ .cost-grid{grid-template-columns:1fr 1fr !important} }
    @media(max-width:600px){ 
      .cost-grid{grid-template-columns:1fr !important}
      .cost-title{font-size:25px !important;line-height:1.25 !important}
      .cost-desc{font-size:13px !important}
    }
  `}</style>
  <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "20px", flexWrap: "wrap", marginBottom: "36px" }}>
      <div>
        <h2 className="cost-title">How Much Does it Cost to <span style={{ color: "#d60000" }}>Ship a Motorcycle</span>?</h2>
      </div>
    </div>
    <div className="cost-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
      <div className="cost-card" style={{ background: "#fff", borderRadius: "16px", padding: "22px 20px", boxShadow: "0 8px 24px rgba(11,30,72,.05)", border: "1px solid #eef2f7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
          </div>
          <span style={{ fontSize: "12px", fontWeight: 800, color: "#94a3b8", letterSpacing: "1px" }}>01</span>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Distance</h3>
        <p className="cost-desc">Longer distances typically cost more, but the per-mile rate decreases for longer trips.</p>
      </div>
      <div className="cost-card" style={{ background: "#fff", borderRadius: "16px", padding: "22px 20px", boxShadow: "0 8px 24px rgba(11,30,72,.05)", border: "1px solid #eef2f7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M14 16H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2" /><circle cx="6.5" cy="16.5" r="2.5" /><circle cx="17.5" cy="16.5" r="2.5" /></svg>
          </div>
          <span style={{ fontSize: "12px", fontWeight: 800, color: "#94a3b8", letterSpacing: "1px" }}>02</span>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Vehicle Size</h3>
        <p className="cost-desc">Larger vehicles like SUVs and trucks cost more to ship than compact cars.</p>
      </div>
      <div className="cost-card" style={{ background: "#fff", borderRadius: "16px", padding: "22px 20px", boxShadow: "0 8px 24px rgba(11,30,72,.05)", border: "1px solid #eef2f7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>
          </div>
          <span style={{ fontSize: "12px", fontWeight: 800, color: "#94a3b8", letterSpacing: "1px" }}>03</span>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Shipping Method</h3>
        <p className="cost-desc">Enclosed transport costs 30-40% more than open transport but offers maximum protection.</p>
      </div>
      <div className="cost-card" style={{ background: "#fff", borderRadius: "16px", padding: "22px 20px", boxShadow: "0 8px 24px rgba(11,30,72,.05)", border: "1px solid #eef2f7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
          </div>
          <span style={{ fontSize: "12px", fontWeight: 800, color: "#94a3b8", letterSpacing: "1px" }}>04</span>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Season & Timing</h3>
        <p className="cost-desc">Summer months and flexible scheduling can help you save on shipping costs.</p>
      </div>
    </div>
  </div>
</section>

      <ShippingCostsTransit
        shipData={[
          ["Los Angeles, CA","San Francisco, CA","$350","$0.78"],
          ["New York, NY","Miami, FL","$750","$0.63"],
          ["Chicago, IL","Denver, CO","$650","$0.68"],
          ["Seattle, WA","Las Vegas, NV","$480","$0.64"],
          ["Boston, MA","Atlanta, GA","$1,200","$0.72"],
          ["Dallas, TX","Phoenix, AZ","$520","$0.62"],
          ["Miami, FL","Houston, TX","$580","$0.59"],
        ]}
        transitData={[
          ["0 - 500 Miles","2 - 5 Days"],
          ["500 - 1,000 Miles","5 - 8 Days"],
          ["1,000 - 1,500 Miles","7 - 10 Days"],
          ["1,500 Miles and Up","10 - 14 Days"],
        ]}
      />
      <FaqSection customFaqs={myFaqs} />
    </main>
  );
}