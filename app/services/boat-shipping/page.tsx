import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Reviews from "@/components/Review/Reviews";
import FaqSection from '@/components/Homepage/FaqSection';
import ShippingCostsTransit from "@/components/ShippingCostsTransit";

const myFaqs = [
  { id: 1, question: "What size boats can you transport?", answer: "We transport boats of all sizes from small fishing boats to large yachts. Boats over 12 feet wide may require special permits and routing." },
  { id: 2, question: "Do I need to prepare my boat for shipping?", answer: "Yes, remove all loose items, secure hatches and doors, disconnect batteries, drain water systems, and document the boat's condition with photos." },
  { id: 3, question: "Can you transport my boat without a trailer?", answer: "Yes, we can provide a specialized boat trailer if you don't have one. This service is included in your quote." },
  { id: 4, question: "Is my boat insured during transport?", answer: "Yes, all our carriers carry comprehensive insurance. Your boat is fully covered throughout the entire shipping process." },
  { id: 5, question: "How long does boat shipping take?", answer: "Typical boat shipping takes 3-10 days depending on distance and size. Oversized boats may take longer due to permit requirements and route restrictions." },
];

export default function AboutUsPage() {
  return (
    <main>
      <HomeBanner
        title="Professional Boat and Yacht Shipping"
        desc="Specialized boat and yacht shipping with expert handlers. From fishing boats to luxury yachts, we transport your vessel safely and securely."
        bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
        ctaLink="/contact-us"
      />
      <Reviews />

{/* HOW BOAT SHIPPING WORKS */}
<section style={{ width: "100%", padding: "40px 20px", background: "#ffffff", fontFamily: "'Inter', sans-serif", boxSizing: "border-box" }}>
  <style>{`
    .hsw-card{transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease}
    .hsw-card:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(11,30,72,.12) !important;border-color:#e2e8f0 !important}
    .hsw-card:hover .hsw-icon{transform:scale(1.08);background:#0b1e48}
    .hsw-card:hover .hsw-num{background:#0b1e48}
    .hsw-icon{transition:all .25s ease}
    .hsw-num{transition:all .25s ease}
    .hsw-title{color:#0b1e48 !important;font-size:44px !important;font-weight:800 !important;line-height:1.15 !important;letter-spacing:-0.6px !important;margin:0 0 8px !important}
    .hsw-subtitle{color:#475569 !important;font-size:16px !important;line-height:1.6 !important;margin:0 !important}
    .hsw-card-desc{color:#475569 !important;font-size:16px !important;line-height:1.6 !important;margin:0 !important}
    @media(max-width:900px){ .hsw-grid{grid-template-columns:1fr 1fr !important} }
    @media(max-width:600px){ 
      .hsw-grid{grid-template-columns:1fr !important} 
      .hsw-title{font-size:25px !important;line-height:1.25 !important} 
      .hsw-subtitle{font-size:13px !important}
      .hsw-card-desc{font-size:13px !important}
    }
  `}</style>
  <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
    <div style={{ textAlign: "left", maxWidth: "100%", margin: "0 0 30px" }}>
      <h2 className="hsw-title">How Boat Shipping Works?</h2>
      <p className="hsw-subtitle">Our streamlined process ensures your vehicle is transported safely and efficiently</p>
    </div>
    <div className="hsw-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
      {[
        { n: "01", t: "Boat Details", d: "Provide your boat specifications including length, beam, weight, and trailer status. Get an accurate transport quote.", i: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2 14 8 20 8 M16 13H8 M16 17H8 M10 9H8" },
        { n: "02", t: "Transport Planning", d: "We arrange the appropriate trailer, permits for oversized loads, and plan the safest route for your boat.", i: "M1 6v16l7-4 8 4V6l-8-4-7 4z M8 2v16 M16 6v16" },
        { n: "03", t: "Secure Loading", d: "Professional boat haulers carefully load and secure your vessel using specialized equipment and techniques.", i: "M1 3h15v13H1z M16 8h4l3 6v5h-7V8z M5.5 18.5a2.5 2.5 0 1 0 0 1 2.5 2.5 0 0 0 0-1z M18.5 18.5a2.5 2.5 0 1 0 0 1 2.5 2.5 0 0 0 0-1z" },
        { n: "04", t: "Marina Delivery", d: "Your boat arrives safely at the destination marina or storage facility. Professional unloading and placement.", i: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01" },
      ].map((s) => (
        <div key={s.n} className="hsw-card" style={{ position: "relative", background: "#f8fafc", borderRadius: "20px", padding: "30px 24px 28px", boxShadow: "0 10px 30px rgba(11,30,72,0.04)", border: "1px solid #eef2f7", textAlign: "left" }}>
          <div className="hsw-num" style={{ position: "absolute", top: "-14px", left: "-10px", width: "44px", height: "44px", background: "#d60000", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "13px", boxShadow: "0 6px 16px rgba(214,0,0,.25)" }}>{s.n}</div>
          <div className="hsw-icon" style={{ width: "54px", height: "54px", background: "#0b1e48", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.i} /></svg>
          </div>
          <h3 style={{ margin: "0 0 8px", color: "#0b1e48", fontSize: "15px", fontWeight: 700 }}>{s.t}</h3>
          <p className="hsw-card-desc">{s.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* NATIONWIDE AUTO */}
<section style={{ width:"100%", padding:"40px 20px", background:"#ffffff", fontFamily:"'Inter', sans-serif", boxSizing:"border-box" }}>
  <style>{`
    .rv2-card{transition:all .3s ease}
    .rv2-card:hover{transform:translateY(-6px); box-shadow:0 18px 36px rgba(11,30,72,.12) !important}
    .rv2-title{color:#0b1e48 !important;font-size:44px !important;font-weight:800 !important;line-height:1.15 !important;letter-spacing:-0.6px !important;margin:0 0 12px !important}
    .rv2-desc{color:#475569 !important;font-size:16px !important;font-weight:400 !important;line-height:1.6 !important;margin:0 !important}
    @media(max-width:900px){ .rv2-grid{grid-template-columns:1fr !important; gap:24px !important} .rv2-left{position:relative !important; top:0 !important} }
    @media(max-width:600px){ 
      .rv2-title{font-size:25px !important;line-height:1.25 !important}
      .rv2-desc{font-size:13px !important;line-height:1.6 !important}
    }
  `}</style>
  <div className="rv2-grid" style={{ maxWidth:"1300px", margin:"0 auto", display:"grid", gridTemplateColumns:"360px 1fr", gap:"40px", alignItems:"start" }}>
    <div className="rv2-left" style={{ position:"sticky", top:"90px" }}>
      <h2 className="rv2-title">Nationwide Auto Transport Made Simple</h2>
      <p className="rv2-desc" style={{ margin:"0 0 20px" }}>Trusted boat shipping for private owners, marinas, dealers, and marine businesses across all 50 states.</p>
      <div style={{ background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:"12px", padding:"12px 14px", display:"flex", alignItems:"center", gap:"10px" }}>
        <div style={{ width:"36px", height:"36px", background:"#0b1e48", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 10a4 4 0 1 0 0-0.01"/><path d="M19 10a4 4 0 1 0 0-0.01"/><path d="M5 10h6l-1-3h4l-1 3h6"/><path d="M9 10v2"/><path d="M15 10v2"/></svg>
        </div>
        <div>
          <div style={{ fontSize:"13px", fontWeight:700, color:"#0b1e48" }}>Boats - 50 States</div>
          <div style={{ fontSize:"11px", color:"#475569" }}>Small boats to large yachts</div>
        </div>
      </div>
    </div>
    <div style={{ display:"grid", gap:"18px" }}>
      <div className="rv2-card" style={{ background:"#f8fafc", borderRadius:"16px", padding:"22px", border:"1px solid #eef2f7", display:"grid", gridTemplateColumns:"48px 1fr", gap:"16px" }}>
        <div style={{ width:"48px", height:"48px", background:"#ffffff", border:"1px solid #e2e8f0", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 12px rgba(11,30,72,.06)" }}>
          <span style={{ fontSize:"14px", fontWeight:800, color:"#d60000" }}>01</span>
        </div>
        <div>
          <h3 style={{ margin:"0 0 8px", fontSize:"16px", fontWeight:700, color:"#0b1e48" }}>Nationwide Boat Shipping Made Simple</h3>
          <p className="rv2-desc">The boat shipping industry in the US helps private owners, marinas, dealers, and marine businesses move small boats to large yachts nationwide. Licensed carriers offer overland trailer transport, enclosed shipping, and specialized marine handling.</p>
        </div>
      </div>
      <div className="rv2-card" style={{ background:"#ffffff", borderRadius:"16px", padding:"22px", border:"1px solid #e2e8f0", boxShadow:"0 8px 24px rgba(11,30,72,.05)", display:"grid", gridTemplateColumns:"48px 1fr", gap:"16px" }}>
        <div style={{ width:"48px", height:"48px", background:"#0b1e48", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:"14px", fontWeight:800, color:"#fff" }}>02</span>
        </div>
        <div>
          <h3 style={{ margin:"0 0 8px", fontSize:"16px", fontWeight:700, color:"#0b1e48" }}>How the Boat Shipping Process Works</h3>
          <p className="rv2-desc">You request a quote with boat size, weight, and route. After booking, a specialized carrier performs inspection and prepares the vessel for transit. Customers receive updates until final inspection at delivery.</p>
        </div>
      </div>
      <div className="rv2-card" style={{ background:"#0b1e48", borderRadius:"16px", padding:"22px", border:"1px solid #0b1e48", display:"grid", gridTemplateColumns:"48px 1fr", gap:"16px" }}>
        <div style={{ width:"48px", height:"48px", background:"rgba(255,255,255,.12)", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:"14px", fontWeight:800, color:"#fff" }}>03</span>
        </div>
        <div>
          <h3 style={{ margin:"0 0 8px", fontSize:"16px", fontWeight:700, color:"#ffffff" }}>Why Choose United Freeway Transportation (Boats)</h3>
          <p style={{ margin:0, fontSize:"16px", fontWeight:400, color:"#ffffff", lineHeight:1.7 }}>UFT connects marine clients with experienced boat transporters nationwide — providing accurate pricing, instant quotes, and dedicated coordination for safe, stress-free shipping of any vessel type.</p>
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
        <h2 className="cost-title">How Much Does it Cost to <span style={{ color: "#d60000" }}>Ship a Car</span>?</h2>
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
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Boat Size</h3>
        <p className="cost-desc">Larger boats require specialized trailers and may need permits, significantly affecting transport costs.</p>
      </div>
      <div className="cost-card" style={{ background: "#fff", borderRadius: "16px", padding: "22px 20px", boxShadow: "0 8px 24px rgba(11,30,72,.05)", border: "1px solid #eef2f7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
          </div>
          <span style={{ fontSize: "12px", fontWeight: 800, color: "#94a3b8", letterSpacing: "1px" }}>02</span>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Distance</h3>
        <p className="cost-desc">Longer distances cost more, but per-mile rates decrease for cross-country boat transport.</p>
      </div>
      <div className="cost-card" style={{ background: "#fff", borderRadius: "16px", padding: "22px 20px", boxShadow: "0 8px 24px rgba(11,30,72,.05)", border: "1px solid #eef2f7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
          </div>
          <span style={{ fontSize: "12px", fontWeight: 800, color: "#94a3b8", letterSpacing: "1px" }}>03</span>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Transport Method</h3>
        <p className="cost-desc">Overland transport, yacht shipping, or containerized shipping each have different cost structures.</p>
      </div>
      <div className="cost-card" style={{ background: "#fff", borderRadius: "16px", padding: "22px 20px", boxShadow: "0 8px 24px rgba(11,30,72,.05)", border: "1px solid #eef2f7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
          </div>
          <span style={{ fontSize: "12px", fontWeight: 800, color: "#94a3b8", letterSpacing: "1px" }}>04</span>
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Permits & Escorts</h3>
        <p className="cost-desc">Oversized boats may require special permits and pilot vehicles, adding to the total cost.</p>
      </div>
    </div>
  </div>
</section>

      <ShippingCostsTransit
        shipData={[
          ["Los Angeles, CA","San Diego, CA","$800","$2.67"],
          ["Miami, FL","Tampa, FL","$1,200","$2.40"],
          ["Seattle, WA","San Francisco, CA","$2,800","$2.24"],
          ["Boston, MA","New York, NY","$900","$1.80"],
          ["New Orleans, LA","Galveston, TX","$1,500","$1.96"],
          ["San Diego, CA","Vancouver, BC","$4,200","$2.38"],
          ["Fort Lauderdale, FL","Charleston, SC","$2,100","$2.06"],
        ]}
        transitData={[
          ["0 - 200 Miles","2 - 4 Days"],
          ["200 - 500 Miles","4 - 7 Days"],
          ["500 - 1,000 Miles","7 - 12 Days"],
          ["1,000 Miles and Up","12 - 20 Days"],
        ]}
      />

      <FaqSection customFaqs={myFaqs} />
    </main>
  );
}