import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Reviews from "@/components/Review/Reviews";
import FaqSection from '@/components/Homepage/FaqSection';
import ShippingCostsTransit from "@/components/ShippingCostsTransit";

const myFaqs = [
  { 
    id: 1, 
    question: "What types of heavy equipment can you ship?", 
    answer: "We ship all types of construction and agricultural equipment including excavators, bulldozers, cranes, tractors, forklifts, and more." 
  },
  { 
    id: 2, 
    question: "Do you handle oversized equipment?", 
    answer: "Yes, we specialize in oversized and overweight equipment transport. We handle all necessary permits and route planning for legal compliance." 
  },
  { 
    id: 3, 
    question: "How is heavy equipment secured during transport?", 
    answer: "We use heavy-duty chains, binders, and specialized securing equipment rated for the weight and size of your machinery." 
  },
  { 
    id: 4, 
    question: "Can you ship inoperable equipment?", 
    answer: "Yes, we can transport non-running equipment using specialized loading equipment like forklifts or cranes. Additional fees may apply." 
  },
  { 
    id: 5, 
    question: "How long does heavy equipment shipping take?", 
    answer: "Transit times vary based on distance and permit requirements. Typical shipments take 3-10 days, with oversized loads potentially taking longer due to routing restrictions." 
  },
];

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero */}
      <HomeBanner
        title="Heavy Equipment Shipping Experts
"
        desc="Professional heavy equipment transport with specialized trailers and experienced operators. We handle oversized loads, permits, and complex logistics.



"
        bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
        ctaLink="/contact-us"
      />

      <Reviews />

      {/* HOW CAR SHIPPING WORKS - PREMIUM WITH HOVER */}
<section
  style={{
    width: "100%",
    padding: "40px 20px",
    background: "#f8fbff",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  }}
>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');
    .hsw-card{transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease}
    .hsw-card:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(6,45,87,.12) !important;border-color:#dbe4f0 !important}
    .hsw-card:hover .hsw-icon{transform:scale(1.08);background:#062d57}
    .hsw-card:hover .hsw-num{background:#062d57}
    .hsw-icon{transition:all .25s ease}
    .hsw-num{transition:all .25s ease}
    @media(max-width:700px){
      .hsw-title{font-size:2rem !important}
    }
  `}</style>

  <div style={{ maxWidth:"1300px", margin:"0 auto" }}>

    {/* LEFT FULL WIDTH */}
    <div
      style={{
        textAlign: "left",
        maxWidth: "100%",
        margin: "0 0 40px",
      }}
    >
      <h2
        className="hsw-title"
        style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          color: "#062d57",
          margin: "0 0 10px",
          lineHeight: 1.1,
          letterSpacing: "-0.5px",
        }}
      >
        How Heavy Equipment Shipping Works?
      </h2>
      <p
        style={{
          fontSize: "16px",
          color: "#64748b",
          margin: 0,
          lineHeight: 1.6,
          maxWidth:"100%",
        }}
      >
        Our streamlined process ensures your vehicle is transported safely and efficiently
      </p>
    </div>

    <div
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px",
      }}
    >
      {[
        {
          n: "01",
          t: "Equipment Assessment",
          d: "Provide detailed equipment specifications including dimensions, weight, and special requirements. Get a comprehensive transport quote.",
          i: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2 14 8 20 8 M16 13H8 M16 17H8 M10 9H8",
        },
        {
          n: "02",
          t: "Logistics Planning",
          d: "Our team arranges specialized trailers, permits, and route planning for your heavy equipment transport.",
          i: "M1 6v16l7-4 8 4V6l-8-4-7 4z M8 2v16 M16 6v16",
        },
        {
          n: "03",
          t: "Expert Loading",
          d: "Professional operators use specialized equipment to safely load and secure your machinery for transport.",
          i: "M1 3h15v13H1z M16 8h4l3 6v5h-7V8z M5.5 18.5a2.5 2.5 0 1 0 0 1 2.5 2.5 0 0 0 0-1z M18.5 18.5a2.5 2.5 0 1 0 0 1 2.5 2.5 0 0 0 0-1z",
        },
        {
          n: "04",
          t: "Secure Delivery",
          d: "Your equipment arrives safely at the job site or destination. Professional unloading and placement as needed.",
          i: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01",
        },
      ].map((s) => (
        <div
          key={s.n}
          className="hsw-card"
          style={{
            position: "relative",
            background: "#fff",
            borderRadius: "20px",
            padding: "30px 24px 28px",
            boxShadow: "0 10px 30px rgba(6,45,87,0.06)",
            border: "1px solid #eef2f7",
            textAlign: "left",
          }}
        >
          <div
            className="hsw-num"
            style={{
              position: "absolute",
              top: "-14px",
              left: "-10px",
              width: "44px",
              height: "44px",
              background: "#d60000",
              color: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "13px",
              boxShadow: "0 6px 16px rgba(214,0,0,.25)",
            }}
          >
            {s.n}
          </div>
          <div
            className="hsw-icon"
            style={{
              width: "54px",
              height: "54px",
              background: "#062d57",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "18px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={s.i} />
            </svg>
          </div>
          <h3
            style={{
              margin: "0 0 10px",
              color: "#062d57",
              fontSize: "18px",
              fontWeight: 800,
            }}
          >
            {s.t}
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "14.5px",
              color: "#64748b",
              lineHeight: 1.65,
            }}
          >
            {s.d}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    {/* NATIONWIDE RV - TOTALLY DIFFERENT PREMIUM */}
<section style={{ width:"100%", padding:"40px 20px", background:"#ffffff", fontFamily:"'Inter', sans-serif", boxSizing:"border-box" }}>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');
    .rv2-card{transition:all .3s ease}
    .rv2-card:hover{transform:translateY(-6px); box-shadow:0 18px 36px rgba(6,45,87,.12) !important}
    @media(max-width:900px){ .rv2-grid{grid-template-columns:1fr !important; gap:24px !important} .rv2-left{position:relative !important; top:0 !important} }
  `}</style>

  <div className="rv2-grid" style={{ maxWidth:"1300px", margin:"0 auto", display:"grid", gridTemplateColumns:"360px 1fr", gap:"40px", alignItems:"start" }}>

    <div className="rv2-left" style={{ position:"sticky", top:"90px" }}>
      <h2 style={{ fontSize:"2.8rem", fontWeight:800, color:"#062d57", lineHeight:1.15, margin:"0 0 12px", letterSpacing:"-0.6px" }}>
        Nationwide Auto Transport Made Simple
      </h2>
      <p style={{ fontSize:"16px", fontWeight:400, color:"#64748b", lineHeight:1.6, margin:"0 0 20px" }}>
        Trusted heavy equipment shipping for construction, agriculture, and industrial operations across all 50 states.
      </p>

      <div style={{ background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:"12px", padding:"12px 14px", display:"flex", alignItems:"center", gap:"10px" }}>
        <div style={{ width:"36px", height:"36px", background:"#062d57", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 10a4 4 0 1 0 0-0.01"/><path d="M19 10a4 4 0 1 0 0-0.01"/><path d="M5 10h6l-1-3h4l-1 3h6"/><path d="M9 10v2"/><path d="M15 10v2"/></svg>
        </div>
        <div>
          <div style={{ fontSize:"13px", fontWeight:700, color:"#062d57" }}>Heavy Equipment - 50 States</div>
          <div style={{ fontSize:"11px", color:"#64748b" }}>Excavators, bulldozers & more</div>
        </div>
      </div>
    </div>

    <div style={{ display:"grid", gap:"18px" }}>

      <div className="rv2-card" style={{ background:"#f8fafc", borderRadius:"16px", padding:"22px", border:"1px solid #eef2f7", display:"grid", gridTemplateColumns:"48px 1fr", gap:"16px" }}>
        <div style={{ width:"48px", height:"48px", background:"#ffffff", border:"1px solid #e2e8f0", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 12px rgba(6,45,87,.06)" }}>
          <span style={{ fontSize:"14px", fontWeight:800, color:"#d60000" }}>01</span>
        </div>
        <div>
          <h3 style={{ margin:"0 0 8px", fontSize:"16px", fontWeight:700, color:"#062d57" }}>Nationwide Heavy Equipment Shipping Made Simple</h3>
          <p style={{ margin:0, fontSize:"14px", fontWeight:400, color:"#64748b", lineHeight:1.7 }}>Heavy equipment shipping supports construction, agriculture, and industrial operations. Certified carriers move excavators, bulldozers, tractors, forklifts, and more using flatbed, step-deck, and lowboy trailers across the US.</p>
        </div>
      </div>

      <div className="rv2-card" style={{ background:"#ffffff", borderRadius:"16px", padding:"22px", border:"1px solid #e2e8f0", boxShadow:"0 8px 24px rgba(6,45,87,.05)", display:"grid", gridTemplateColumns:"48px 1fr", gap:"16px" }}>
        <div style={{ width:"48px", height:"48px", background:"#062d57", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:"14px", fontWeight:800, color:"#fff" }}>02</span>
        </div>
        <div>
          <h3 style={{ margin:"0 0 8px", fontSize:"16px", fontWeight:700, color:"#062d57" }}>How the Heavy Equipment Shipping Process Works</h3>
          <p style={{ margin:0, fontSize:"14px", fontWeight:400, color:"#64748b", lineHeight:1.7 }}>You request a quote with dimensions, weight, and route. After booking, a suitably equipped carrier is assigned and performs inspection, secure loading, and transit updates. A final inspection happens at delivery.</p>
        </div>
      </div>

      <div className="rv2-card" style={{ background:"#062d57", borderRadius:"16px", padding:"22px", border:"1px solid #062d57", display:"grid", gridTemplateColumns:"48px 1fr", gap:"16px" }}>
        <div style={{ width:"48px", height:"48px", background:"rgba(255,255,255,.12)", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:"14px", fontWeight:800, color:"#fff" }}>03</span>
        </div>
        <div>
          <h3 style={{ margin:"0 0 8px", fontSize:"16px", fontWeight:700, color:"#ffffff" }}>Why Choose United Freeway Transportation (Heavy Equipment)</h3>
          <p style={{ margin:0, fontSize:"14px", fontWeight:400, color:"#94a3b8", lineHeight:1.7 }}>UFT offers nationwide heavy equipment transport handled by certified carriers with proper equipment and permits. We deliver transparent pricing, instant quotes, and professional handling of large machinery.</p>
        </div>
      </div>

    </div>

  </div>
</section>

      {/* HOW MUCH DOES IT COST - PREMIUM NEW UI */}
  <section
  style={{
    width: "100%",
    padding: "40px 20px",
    background: "#f8fafc",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  }}
>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');
    .cost-card{transition:all .3s ease; border-top:3px solid transparent}
    .cost-card:hover{transform:translateY(-6px); box-shadow:0 18px 40px rgba(11,30,72,.12) !important; border-top-color:#d60000}
    .cost-card:hover .cost-icon{transform:rotate(-8deg) scale(1.1); background:#0b1e48}
    .cost-icon{transition:all .3s ease}
    @media(max-width:900px){ .cost-grid{grid-template-columns:1fr 1fr !important} }
    @media(max-width:600px){ .cost-grid{grid-template-columns:1fr !important} .cost-title{font-size:26px !important} }
  `}</style>

  <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
    {/* HEADER - LEFT ALIGNED NOT CENTER */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        gap: "20px",
        flexWrap: "wrap",
        marginBottom: "36px",
      }}
    >
      <div>
        <h2
          className="cost-title"
          style={{
            fontSize: "2.8rem",
            fontWeight: 800,
            color: "#0b1e48",
            margin: 0,
            lineHeight: 1.15,
            letterSpacing: "-0.6px",
          }}
        >
          How Much Does it Cost to <span style={{ color: "#d60000" }}>Ship a Car</span>?
        </h2>
      </div>
    </div>

    <div
      className="cost-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      <div
        className="cost-card"
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "22px 20px",
          boxShadow: "0 8px 24px rgba(11,30,72,.05)",
          border: "1px solid #eef2f7",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
         
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Equipment Size</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>
          Larger equipment requires specialized trailers and may need permits, significantly affecting cost.
        </p>
      </div>

      <div
        className="cost-card"
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "22px 20px",
          boxShadow: "0 8px 24px rgba(11,30,72,.05)",
          border: "1px solid #eef2f7",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
         
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Weight</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>
          Heavier machinery requires stronger trailers and may have route restrictions, impacting pricing.
        </p>
      </div>

      <div
        className="cost-card"
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "22px 20px",
          boxShadow: "0 8px 24px rgba(11,30,72,.05)",
          border: "1px solid #eef2f7",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
       
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Distance</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>
          Long-distance heavy equipment transport costs more but offers economies of scale for cross-country moves.
        </p>
      </div>

      <div
        className="cost-card"
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "22px 20px",
          boxShadow: "0 8px 24px rgba(11,30,72,.05)",
          border: "1px solid #eef2f7",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <div className="cost-icon" style={{ width: "44px", height: "44px", background: "#0b1e48", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
       
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 700, color: "#0b1e48" }}>Special Requirements</h3>
        <p style={{ margin: 0, fontSize: "13.5px", color: "#475569", lineHeight: 1.6 }}>
          Oversized loads, permits, escorts, and specialized loading equipment add to the total cost.
        </p>
      </div>
    </div>
  </div>
</section>
      
{/* SHIPPING TABS - FIXED VISIBILITY + ACTIVE BUG + PREMIUM */}
 <ShippingCostsTransit
  shipData={[
    ["Los Angeles, CA","Sacramento, CA","$2,500","$1.67"],
    ["Houston, TX","New Orleans, LA","$1,800","$1.29"],
    ["Chicago, IL","Milwaukee, WI","$900","$1.80"],
    ["Denver, CO","Phoenix, AZ","$2,200","$1.57"],
    ["Atlanta, GA","Nashville, TN","$1,400","$1.40"],
    ["Portland, OR","Seattle, WA","$1,100","$1.57"],
    ["Dallas, TX","Memphis, TN","$2,600","$1.69"],
  ]}
  transitData={[
    ["0 - 200 Miles","1 - 3 Days"],
    ["200 - 500 Miles","3 - 7 Days"],
    ["500 - 1,000 Miles","7 - 14 Days"],
    ["1,000 Miles and Up","14 - 28 Days"],
  ]}
/>

      <FaqSection customFaqs={myFaqs} />
    
    </main>
  );
}
