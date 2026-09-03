import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Reviews from "@/components/Review/Reviews";
import FaqSection from '@/components/Homepage/FaqSection';
import ShippingCostsTransit from "@/components/ShippingCostsTransit";

const myFaqs = [
  { id: 1, question: "What types of RVs can you ship?", answer: "We ship all types of RVs including Class A, B, and C motorhomes, travel trailers, fifth wheels, toy haulers, and pop-up campers." },
  { id: 2, question: "Do I need to prepare my RV for shipping?", answer: "Yes, secure all loose items inside, empty holding tanks, disconnect propane, retract awnings and antennas, and ensure the RV is mechanically sound if being driven." },
  { id: 3, question: "Can my RV be driven or does it need to be towed?", answer: "Motorhomes can be driven if they're in good working condition. Travel trailers and fifth wheels are towed using specialized equipment." },
  { id: 4, question: "How long does RV shipping take?", answer: "RV shipping typically takes 5-10 days for cross-country transport, depending on size, route, and any permit requirements for oversized loads." },
  { id: 5, question: "Are there weight or size restrictions?", answer: "We can handle most RV sizes, but extremely large or heavy units may require special permits and routing. Contact us with your specific dimensions for accurate planning." },
];

export default function AboutUsPage() {
  return (
    <main>
      <HomeBanner
        title="Premium RV & Trailer Shipping"
        desc="Professional RV and trailer transport with experienced drivers who know how to handle oversized loads. Safe, reliable,and fully insured."
        bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
        ctaLink="/contact-us"
      />
      <Reviews />

{/* HOW RV SHIPPING WORKS - HEADING CENTER ONLY */}
<section style={{ width: "100%", padding: "40px 20px", background: "#f8fbff", fontFamily: "'Inter', sans-serif", boxSizing: "border-box" }}>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');
    .hsw-card{transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease}
    .hsw-card:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(6,45,87,.12) !important;border-color:#dbe4f0 !important}
    .hsw-card:hover .hsw-icon{transform:scale(1.08);background:#062d57}
    .hsw-card:hover .hsw-num{background:#062d57}
    .hsw-icon{transition:all .25s ease}
    .hsw-num{transition:all .25s ease}
    @media(max-width:700px){ .hsw-title{font-size:2rem !important} }
  `}</style>

  <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
    <div style={{ textAlign: "center", maxWidth: "1000px", margin: "0 auto 40px" }}>
      <h2 className="hsw-title" style={{ fontSize: "2.8rem", fontWeight: 800, color: "#062d57", margin: "0 0 10px", lineHeight: 1.1, letterSpacing: "-0.5px", textAlign:"center" }}>
        How RV & Trailer Shipping Works?
      </h2>
      <p style={{ fontSize: "16px", color: "#64748b", margin: 0, lineHeight: 1.6, maxWidth:"100%", textAlign:"center" }}>
        Our streamlined process ensures your vehicle is transported safely and efficiently
      </p>
    </div>

    <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
      {[
        { n: "01", t: "Get Custom Quote", d: "Provide your RV or trailer specifications, dimensions, and route details. Receive a detailed quote for your oversized transport.", i: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2 14 8 20 8 M16 13H8 M16 17H8 M10 9H8" },
        { n: "02", t: "Route Planning", d: "Our logistics team plans the optimal route considering size restrictions, permits, and regulations for your RV transport.", i: "M1 6v16l7-4 8 4V6l-8-4-7 4z M8 2v16 M16 6v16" },
        { n: "03", t: "Professional Pickup", d: "Experienced drivers handle your RV or trailer with specialized equipment. Complete inspection before departure.", i: "M1 3h15v13H1z M16 8h4l3 6v5h-7V8z M5.5 18.5a2.5 2.5 0 1 0 0 1 2.5 2.5 0 0 0 0-1z M18.5 18.5a2.5 2.5 0 1 0 0 1 2.5 2.5 0 0 0 0-1z" },
        { n: "04", t: "Safe Delivery", d: "Your RV arrives safely at the destination. Final walkthrough and delivery to your specified location.", i: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01" },
      ].map((s) => (
        <div key={s.n} className="hsw-card" style={{ position: "relative", background: "#fff", borderRadius: "20px", padding: "30px 24px 28px", boxShadow: "0 10px 30px rgba(6,45,87,0.06)", border: "1px solid #eef2f7", textAlign: "left" }}>
          <div className="hsw-num" style={{ position: "absolute", top: "-14px", left: "-10px", width: "44px", height: "44px", background: "#d60000", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "13px", boxShadow: "0 6px 16px rgba(214,0,0,.25)" }}>{s.n}</div>
          <div className="hsw-icon" style={{ width: "54px", height: "54px", background: "#062d57", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.i} /></svg>
          </div>
          <h3 style={{ margin: "0 0 10px", color: "#062d57", fontSize: "18px", fontWeight: 800 }}>{s.t}</h3>
          <p style={{ margin: 0, fontSize: "14.5px", color: "#64748b", lineHeight: 1.65 }}>{s.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    {/* NATIONWIDE RV - UNTOUCHED */}
<section style={{ width: "100%", padding: "40px 20px", background: "#fff", fontFamily: "'Inter', sans-serif", boxSizing: "border-box" }}>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');
    .nat2-row{transition:all .3s ease}
    .nat2-row:hover{transform:translateX(6px)}
    .nat2-row:hover .nat2-line{height:100%;background:#d60000}
    .nat2-row:hover .nat2-num{background:#d60000;color:#fff}
    @media(max-width:900px){
      .nat2-wrap{grid-template-columns:1fr !important; gap:32px !important}
      .nat2-sticky{position:relative !important; top:0 !important}
      .nat2-timeline{border-left:none !important; padding-left:0 !important}
      .nat2-line, .nat2-num{display:none !important}
      .nat2-row{padding-left:0 !important; margin-left:0 !important}
    }
  `}</style>
  <div className="nat2-wrap" style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "380px 1fr", gap: "60px", alignItems: "start" }}>
    <div className="nat2-sticky" style={{ position: "sticky", top: "100px" }}>
      <h2 style={{ fontSize: "2.8rem", fontWeight: 800, color: "#062d57", lineHeight: 1.1, margin: "18px 0 14px", letterSpacing: "-0.8px" }}>Nationwide Auto<br />Transport Made<br />Simple</h2>
      <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.6, margin: "0 0 20px" }}>Trusted by thousands for safe, fast and affordable RV and trailer shipping across all 50 states.</p>
      <div style={{ width: "100%", height: "260px", borderRadius: "18px", overflow: "hidden", background: "linear-gradient(135deg,#062d57 0%,#1e3a8a 100%)", position: "relative", marginTop: "10px" }}>
        <img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=600&q=80" alt="RV transport" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
      </div>
    </div>
    <div className="nat2-timeline" style={{ display: "grid", gap: "0", position: "relative", borderLeft: "1px solid #e2e8f0", paddingLeft: "32px" }}>
      <div className="nat2-row" style={{ position: "relative", padding: "0 0 40px 0" }}>
        <div className="nat2-line" style={{ position: "absolute", left: "-33px", top: "0", width: "2px", height: "32px", background: "#e2e8f0", transition: "all .3s ease" }}></div>
        <div className="nat2-num" style={{ position: "absolute", left: "-50px", top: "0", width: "32px", height: "32px", background: "#062d57", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800 }}>01</div>
        <h3 style={{ margin: "0 0 12px", fontSize: "19px", fontWeight: 700, color: "#062d57" }}>Nationwide RV & Trailer Shipping Made Simple</h3>
        <p style={{ margin: 0, fontSize: "16px", color: "#64748b", lineHeight: 1.75 }}>The RV & trailer shipping industry in the US provides reliable transport for travel trailers, motorhomes, and campers of all sizes. Licensed carriers move RVs nationwide safely using proper equipment and professional routing.</p>
      </div>
      <div className="nat2-row" style={{ position: "relative", padding: "0 0 40px 0" }}>
        <div className="nat2-line" style={{ position: "absolute", left: "-33px", top: "0", width: "2px", height: "32px", background: "#e2e8f0" }}></div>
        <div className="nat2-num" style={{ position: "absolute", left: "-50px", top: "0", width: "32px", height: "32px", background: "#062d57", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800 }}>02</div>
        <h3 style={{ margin: "0 0 12px", fontSize: "19px", fontWeight: 700, color: "#062d57" }}>How the RV & Trailer Shipping Process Works</h3>
        <p style={{ margin: 0, fontSize: "16px", color: "#64748b", lineHeight: 1.75 }}>You submit RV/trailer size + pickup / drop-off details to request a quote. After booking, a qualified carrier is assigned, inspection is performed, and the vehicle is secured for transport. Customers receive updates all the way to delivery.</p>
      </div>
      <div className="nat2-row" style={{ position: "relative", padding: "22px 22px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", marginLeft: "-8px" }}>
        <div className="nat2-line" style={{ position: "absolute", left: "-25px", top: "22px", width: "2px", height: "32px", background: "#d60000" }}></div>
        <div className="nat2-num" style={{ position: "absolute", left: "-42px", top: "22px", width: "32px", height: "32px", background: "#d60000", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800 }}>03</div>
        <h3 style={{ margin: "0 0 12px", fontSize: "19px", fontWeight: 700, color: "#062d57" }}>Why Choose United Freeway Transportation (RV/Trailer)</h3>
        <p style={{ margin: 0, fontSize: "16px", color: "#64748b", lineHeight: 1.75 }}>UFT partners with experienced RV & trailer carriers nationwide offering instant estimates, transparent pricing, and personalized coordination from start to finish — from small travel trailers to large motorhomes.</p>
      </div>
    </div>
  </div>
</section>

      <section style={{ width:"100%", padding:"50px 20px", background:"#f8fafc", fontFamily:"'Inter', sans-serif", boxSizing:"border-box" }}>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800&display=swap');
    .good-card{transition:all .25s ease}
    .good-card:hover{transform:translateY(-3px); box-shadow:0 12px 28px rgba(6,45,87,.08); border-color:#cbd5e1}
    @media(max-width:900px){ .good-wrap{grid-template-columns:1fr !important; gap:24px !important} .good-img{height:260px !important} .good-title{font-size:2.2rem !important} }
  `}</style>
  <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
    <div className="good-wrap" style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"32px", alignItems:"center", background:"#fff", border:"1px solid #e2e8f0", borderRadius:"20px", padding:"28px", boxShadow:"0 8px 30px rgba(6,45,87,.04)" }}>
      <div>
        <h2 className="good-title" style={{ fontSize:"2.8rem", fontWeight:800, color:"#062d57", margin:"0 0 18px", lineHeight:1.1, letterSpacing:"-0.6px" }}>
          How Much Does it Cost to <span style={{ color:"#d60000" }}>Ship a Car?</span>
        </h2>
        <div style={{ display:"grid", gap:"14px", marginTop:"8px" }}>
          <div className="good-card" style={{ display:"flex", gap:"14px", padding:"18px 20px", background:"#fff", border:"1px solid #eef2f7", borderRadius:"14px" }}>
            <div style={{ width:"44px", height:"44px", background:"linear-gradient(135deg,#d60000,#a00000)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 4px 12px rgba(214,0,0,.25)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 6v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div><h3 style={{ margin:"0 0 4px", fontSize:"15px", fontWeight:700, color:"#062d57" }}>RV Type</h3><p style={{ margin:0, fontSize:"13.5px", color:"#64748b", lineHeight:1.6 }}>Class A motorhomes cost more than travel trailers or fifth wheels due to size and complexity.</p></div>
          </div>
          <div className="good-card" style={{ display:"flex", gap:"14px", padding:"18px 20px", background:"#f8fafc", border:"1px solid #eef2f7", borderRadius:"14px" }}>
            <div style={{ width:"44px", height:"44px", background:"#062d57", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
            </div>
            <div><h3 style={{ margin:"0 0 4px", fontSize:"15px", fontWeight:700, color:"#062d57" }}>Permits & Escorts</h3><p style={{ margin:0, fontSize:"13.5px", color:"#64748b", lineHeight:1.6 }}>Oversized loads may require special permits and escort vehicles, adding to the total cost.</p></div>
          </div>
        </div>
      </div>
      <div className="good-img" style={{ width:"100%", height:"300px", borderRadius:"16px", overflow:"hidden", position:"relative", background:"#e2e8f0" }}>
        <img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80" alt="RV Shipping" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(0deg, rgba(6,45,87,.35) 0%, transparent 60%)" }}></div>
        <div style={{ position:"absolute", bottom:"14px", left:"14px", background:"rgba(255,255,255,.92)", backdropFilter:"blur(6px)", padding:"8px 12px", borderRadius:"10px", display:"flex", gap:"8px", alignItems:"center" }}>
          <div style={{ width:"8px", height:"8px", background:"#22c55e", borderRadius:"50%" }}></div>
          <span style={{ fontSize:"12px", fontWeight:700, color:"#062d57" }}>Nationwide RV Transport</span>
        </div>
      </div>
    </div>
  </div>
</section>
      
      <ShippingCostsTransit
        shipData={[
          ["Los Angeles, CA","New York, NY","$3,200","$1.14"],
          ["New York, NY","Chicago, IL","$1,800","$1.15"],
          ["Chicago, IL","Denver, CO","$2,100","$1.32"],
          ["Denver, CO","Seattle, WA","$2,500","$1.28"],
          ["Miami, FL","San Diego, CA","$4,500","$1.19"],
          ["Boston, MA","Phoenix, AZ","$4,000","$1.25"],
          ["Houston, TX","Portland, OR","$3,800","$1.32"],
        ]}
        transitData={[
          ["0 - 500 Miles","3 - 6 Days"],
          ["500 - 1,000 Miles","6 - 10 Days"],
          ["1,000 - 2,000 Miles","10 - 15 Days"],
          ["2,000 Miles and Up","15 - 21 Days"],
        ]}
      />
      <FaqSection customFaqs={myFaqs} />
    </main>
  );
}