import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Reviews from "@/components/Review/Reviews";
import FaqSection from '@/components/Homepage/FaqSection';

const myFaqs = [
  { 
    id: 1, 
    question: "How long does car shipping take?", 
    answer: "Delivery times vary based on distance and route. Typically, cross-country shipments take 7-10 days, while shorter distances may take 2-5 days. We provide estimated delivery windows when you book." 
  },
  { 
    id: 2, 
    question: "Is my vehicle insured during transport?", 
    answer: "Yes, all vehicles are covered by our carrier's insurance during transport. We provide full insurance documentation and can discuss additional coverage options if needed." 
  },
  { 
    id: 3, 
    question: "Can I put personal items in my car?", 
    answer: "You can place up to 100 lbs of personal items in the trunk, but they must be below window level. Items are not covered by insurance, so we recommend not shipping valuables." 
  },
  { 
    id: 4, 
    question: "How much does car shipping cost?", 
    answer: "Costs vary based on distance, vehicle size, transport type (open vs. enclosed), and season. Use our quote calculator for an accurate estimate, or call us for a personalized quote." 
  },
  { 
    id: 5, 
    question: "Do I need to be present for pickup and delivery?", 
    answer: "Yes, you or an authorized representative must be present to sign the Bill of Lading and inspect the vehicle at both pickup and delivery." 
  },
  { 
    id: 6, 
    question: "What payment methods do you accept?", 
    answer: "We accept all major credit cards, bank transfers, and certified checks. A deposit is typically required to book, with the balance due upon delivery." 
  },
];

// Then use:
<FaqSection customFaqs={myFaqs} />


export default function AboutUsPage() {
  return (
    <main>
      {/* Hero */}
     <HomeBanner 
      title="How Car Shipping Works"
      desc="Our streamlined process makes shipping your vehicle simple, safe, and stress-free. Here's how we do it.

"
      bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
      ctaLink="/contact-us"
    />

   <Reviews />









{/* STEP 1 - EQUAL HEIGHT - HEADING ONE LINE - 1300px */}
<section style={{ background: "#fff", padding: "0 20px 40px 20px", fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
  <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
    
    {/* HEADING - SUB ABOVE + ONE LINE */}
    <div style={{ marginBottom: "40px" }}>
      <p style={{ color: "#16a34a", fontSize: "14px", fontWeight: "800", letterSpacing: "1.5px", margin: "0 0 12px", fontFamily: "inherit" }}>STEP 1</p>
      <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#0b1e48", lineHeight: "1.1", margin: "0", whiteSpace: "nowrap", fontFamily: "inherit" }}>
        Get your instant quote and place an order.
      </h2>
    </div>

    <div className="main-grid">
      <div className="left-col">
        <div className="s-item">
          <div className="s-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div><h4>ENTER VEHICLE INFO</h4><p>Input key vehicle details including the year, make and model, and delivery pickup zip codes.</p></div>
        </div>
        <div className="s-item">
          <div className="s-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div><h4>RECEIVE A QUOTE</h4><p>Our instant car shipping calculator gives you a quote within moments.</p></div>
        </div>
        <div className="s-item">
          <div className="s-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div><h4>BOOK YOUR SHIPMENT</h4><p>Schedule your order online or call one of our knowledgeable reps for assistance.</p></div>
        </div>
      </div>

      <div className="s-form">
        <div className="f-group"><label>Email</label><input placeholder="Your Email Here" /></div>
        <div className="f-group"><label>Message</label><textarea placeholder="Your Message Here"></textarea></div>
        <button>Send</button>
        <a href="tel:6105800610">📞 (610) 580-0610</a>
      </div>
    </div>
  </div>

  <style>{`
    .main-grid{display:grid;grid-template-columns:1.15fr 0.85fr;gap:40px;align-items:stretch}
    .left-col{display:flex;flex-direction:column;justify-content:space-between;gap:20px;height:100%}
    .s-item{flex:1;display:flex;gap:18px;align-items:center;padding:24px 22px;border-radius:16px;border:1px solid #f1f5f9;background:#fff;transition:all .35s ease}
    .s-item:hover{border-color:#e2e8f0;background:#f8fafc;transform:translateY(-3px);box-shadow:0 12px 30px rgba(11,30,72,0.08)}
    .s-icon{width:52px;height:52px;min-width:52px;background:#fff3e0;color:#ea580c;border-radius:14px;display:flex;align-items:center;justify-content:center;transition:.35s}
    .s-item:hover .s-icon{background:#0b1e48;color:#fff}
    .s-item h4{font-size:15px;font-weight:800;color:#0b1e48;margin:0 0 6px;letter-spacing:.4px;font-family:inherit}
    .s-item p{font-size:16px;color:#475569;margin:0;line-height:1.7;font-family:inherit}
    .s-form{background:#f8fafc;border:1px solid #e2e8f0;border-radius:18px;padding:32px;display:flex;flex-direction:column;justify-content:space-between;height:100%}
    .f-group{margin-bottom:20px}
    .f-group label{font-size:14px;font-weight:700;color:#0b1e48;display:block;margin-bottom:8px;font-family:inherit}
    .f-group input{width:100%;height:52px;border:1px solid #cbd5e1;border-radius:12px;padding:0 16px;font-size:16px;outline:none;background:#fff;color:#475569;font-family:inherit}
    .f-group textarea{width:100%;height:140px;border:1px solid #cbd5e1;border-radius:12px;padding:14px 16px;font-size:16px;outline:none;background:#fff;color:#475569;resize:none;flex:1;font-family:inherit}
    .f-group input:focus,.f-group textarea:focus{border-color:#0b1e48}
    .s-form button{width:100%;height:52px;background:#0b1e48;color:#fff;border:0;border-radius:30px;font-weight:700;font-size:15px;cursor:pointer;margin:10px 0 18px;transition:.3s;font-family:inherit}
    .s-form button:hover{background:#162f68}
    .s-form a{color:#d60000;font-weight:700;font-size:16px;text-decoration:none;font-family:inherit}

    @media(max-width:1300px){
      h2{white-space:normal!important;font-size:2.5rem!important}
    }
    @media(max-width:1000px){
      .main-grid{grid-template-columns:1fr}
      .left-col,.s-form{height:auto}
    }
    @media(max-width:600px){
      section{padding:50px 14px!important}
      h2{font-size:2rem!important}
    }
  `}</style>
</section>





{/* STEP 2 - EQUAL HEIGHT + ICON #d60000 */}
<section style={{ background: "#fff", padding: "20px 20px 40px 20px", fontFamily: "Inter, system-ui, sans-serif" }}>
  <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
    
    <div style={{ marginBottom: "44px" }}>
      <p style={{ color: "#16a34a", fontSize: "13px", fontWeight: "800", letterSpacing: "1.5px", margin: "0 0 12px" }}>STEP 2</p>
      <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#0b1e48", lineHeight: "1.1", margin: "0" }}>
        We manage your door-to-door shipment from start to finish.
      </h2>
    </div>

    <div className="s2-grid">
      
      <div className="s2-left">
        <div className="s2-bg">
          <div className="bg-blob b1"></div>
          <div className="bg-blob b2"></div>
          <div className="bg-dots"></div>
        </div>

        <div className="map-wrap">
          <div className="map-card">
            <svg viewBox="0 0 200 300" width="100%" height="100%">
              <rect x="15" y="10" width="170" height="280" rx="18" fill="#ff4d4d"/>
              <g opacity="0.35" stroke="#fff" strokeWidth="1.1">
                <path d="M15 65 H185 M15 115 H185 M15 165 H185 M15 215 H185 M60 10 V290 M120 10 V290"/>
                <path className="route-line" d="M40 15 Q70 80 95 130 T145 210 T175 285" fill="none" stroke="#fff" strokeWidth="1.8" strokeDasharray="8 6"/>
              </g>
              <circle cx="100" cy="38" r="8" fill="#0b1e48" stroke="#fff" strokeWidth="2"/>
              <circle cx="100" cy="250" r="12" fill="#fff" stroke="#0b1e48" strokeWidth="2.5"/>
            </svg>
            <div className="run-dot"></div>
          </div>

          <div className="mini-card c1">
            <div className="mini-icon">✓</div>
            <div><b>Carrier Assigned</b><span>Today 9:42 AM</span></div>
          </div>
          <div className="mini-card c2">
            <div className="mini-icon blue">◍</div>
            <div><b>Pickup Scheduled</b><span>Tomorrow 10 AM</span></div>
          </div>
        </div>
      </div>

      <div className="s2-right">
        <div className="s2-item">
          <div className="s2-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
          <div><h4>WE'LL CONTACT YOU</h4><p>A Nexus rep will email you your carrier's information, pickup date, and estimated delivery time.</p></div>
        </div>
        <div className="s2-item">
          <div className="s2-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
          <div><h4>MEET YOUR CARRIER</h4><p>One of our trucking partners will call you at least one hour before pickup.</p></div>
        </div>
        <div className="s2-item">
          <div className="s2-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
          <div><h4>INSPECT AND GO</h4><p>Your trucker will perform a full walkthrough inspection at pickup, marking all dings, damages, and dents.</p></div>
        </div>
      </div>

    </div>
  </div>

  <style>{`
    .s2-grid{display:grid;grid-template-columns:0.85fr 1.15fr;gap:50px;align-items:stretch}
    
    .s2-left{
      position:relative;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#f8fafc;
      border:1px solid #eef2f7;
      border-radius:22px;
      padding:36px 24px;
      height:100%;
      min-height:100%;
      overflow:visible;
    }
    .s2-bg{position:absolute;inset:0;z-index:0;pointer-events:none;border-radius:22px;overflow:hidden}
    .bg-blob{position:absolute;border-radius:50%;filter:blur(28px);opacity:0.6}
    .b1{width:180px;height:180px;background:#ffeaea;top:12%;left:12%}
    .b2{width:220px;height:220px;background:#e0e8ff;bottom:8%;right:12%}
    .bg-dots{position:absolute;inset:0;background-image:radial-gradient(#cbd5e1 1px, transparent 1px);background-size:20px 20px;opacity:0.35}

    .map-wrap{position:relative;z-index:2;width:290px;height:400px}
    .map-card{
      width:100%;height:100%;
      background:#ff4d4d;
      border-radius:22px;
      box-shadow:0 22px 50px rgba(255,77,77,0.32);
      animation:runMove 3s ease-in-out infinite;
      position:relative;
      overflow:hidden;
    }
    @keyframes runMove{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-10px) rotate(1deg)}}
    .route-line{animation:routeDash 2s linear infinite}
    @keyframes routeDash{to{stroke-dashoffset:-28}}
    .run-dot{
      position:absolute;width:14px;height:14px;background:#0b1e48;border:2px solid #fff;border-radius:50%;
      top:15%;left:30%;box-shadow:0 2px 10px rgba(0,0,0,0.3);
      animation:runDot 4.5s ease-in-out infinite;
    }
    @keyframes runDot{0%{top:15%;left:30%}25%{top:40%;left:48%}50%{top:65%;left:60%}75%{top:82%;left:74%}100%{top:15%;left:30%}}

    .mini-card{
      position:absolute;display:flex;gap:10px;align-items:center;
      background:#fff;border:1px solid #e2e8f0;border-radius:12px;
      padding:11px 14px;box-shadow:0 14px 32px rgba(11,30,72,0.16);
      z-index:10;animation:floatCard 3s ease-in-out infinite;
    }
    .c1{top:-16px;left:-36px}
    .c2{bottom:-16px;right:-40px;animation-delay:1.5s}
    @keyframes floatCard{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
    .mini-icon{width:28px;height:28px;background:#dcfce7;color:#16a34a;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800}
    .mini-icon.blue{background:#dbeafe;color:#2563eb}
    .mini-card b{display:block;font-size:12px;color:#0b1e48;line-height:1.2}
    .mini-card span{font-size:11px;color:#475569}

    .s2-right{display:flex;flex-direction:column;justify-content:space-between;gap:20px;height:100%}
    .s2-item{
      flex:1;
      display:flex;gap:20px;align-items:center;
      padding:26px 26px;border-radius:16px;
      border:1px solid #f1f5f9;background:#fff;
      transition:all 0.32s ease;
    }
    .s2-item:hover{background:#f8fafc;border-color:#e2e8f0;transform:translateX(8px);box-shadow:0 14px 32px rgba(11,30,72,0.07)}
    
    /* ICON #d60000 BEFORE HOVER */
    .s2-icon{
      width:52px;height:52px;min-width:52px;
      background:#ffeaea;
      color:#d60000;
      border-radius:12px;
      display:flex;align-items:center;justify-content:center;
      transition:all 0.32s ease;
    }
    .s2-item:hover .s2-icon{background:#0b1e48;color:#fff;transform:scale(1.06)}
    
    .s2-item h4{font-size:15px;font-weight:800;color:#0b1e48;margin:0 0 8px;letter-spacing:0.5px}
    .s2-item p{font-size:16px;color:#475569;margin:0;line-height:1.7}

    @media(max-width:1100px){
      .s2-grid{grid-template-columns:1fr;gap:36px;align-items:start}
      .s2-left{height:auto;min-height:420px;order:2;padding:36px 20px}
      .s2-right{height:auto}
      .map-wrap{width:250px;height:350px}
      .s2-item{padding:22px}
      h2{font-size:2.3rem!important}
    }
    @media(max-width:600px){
      section{padding:50px 14px!important}
      h2{font-size:1.9rem!important}
      .s2-left{overflow:hidden;padding:28px 14px;min-height:360px}
      .map-wrap{width:200px;height:280px}
      .s2-item{padding:18px 16px;align-items:flex-start;gap:14px}
      .s2-item:hover{transform:translateY(-2px)}
      .s2-icon{width:44px;height:44px;min-width:44px}
      .s2-item h4{font-size:14px}
      .s2-item p{font-size:14px}
      .c1{left:-6px;top:-8px;transform:scale(0.9)}
      .c2{right:-6px;bottom:-8px;transform:scale(0.9)}
    }
  `}</style>
</section>




{/* STEP 3 - CLEAN - ONLY YOUR CONTENT - EQUAL HEIGHT */}
<section style={{ background: "#fff", padding: "10px 20px 40px 20px", fontFamily: "Inter, system-ui, sans-serif" }}>
  <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
    
    <div style={{ marginBottom: "44px" }}>
      <p style={{ color: "#2563eb", fontSize: "13px", fontWeight: "800", letterSpacing: "1.5px", margin: "0 0 12px" }}>STEP 3</p>
      <h2 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#0b1e48", lineHeight: "1.1", margin: "0" }}>
        Accept your delivery and complete payment.
      </h2>
    </div>

    <div className="s3-grid">
      
      <div className="s3-left">
        <div className="s3-item">
          <div className="s3-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <div><h4>YOU'RE COVERED</h4><p>We keep your carrier's insurance information on file.</p></div>
        </div>
        <div className="s3-item">
          <div className="s3-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
          <div><h4>ARRANGE YOUR PICKUP</h4><p>Your carrier will generally call 24 hours in advance to arrange your delivery time.</p></div>
        </div>
        <div className="s3-item">
          <div className="s3-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div>
          <div><h4>SIGN AND PAY</h4><p>Provide a signature after one final inspection. Pay your driver, and you're off!</p></div>
        </div>
      </div>

      <div className="s3-right">
        <img src="/how-it-works2.jpg" alt="Accept delivery" />
      </div>

    </div>
  </div>

  <style>{`
    .s3-grid{display:grid;grid-template-columns:1.15fr 0.85fr;gap:40px;align-items:stretch}

    .s3-left{display:flex;flex-direction:column;justify-content:space-between;gap:20px;height:100%}
    .s3-item{
      flex:1;
      display:flex;gap:20px;align-items:center;
      padding:26px 26px;border-radius:16px;
      border:1px solid #f1f5f9;background:#fff;
      transition:all 0.32s ease;
    }
    .s3-item:hover{border-color:#e2e8f0;background:#f8fafc;transform:translateX(6px);box-shadow:0 12px 28px rgba(11,30,72,0.06)}
    .s3-icon{
      width:52px;height:52px;min-width:52px;
      background:#ffeaea;color:#d60000;
      border-radius:12px;
      display:flex;align-items:center;justify-content:center;
      transition:all 0.32s ease;
    }
    .s3-item:hover .s3-icon{background:#0b1e48;color:#fff}
    .s3-item h4{font-size:15px;font-weight:800;color:#0b1e48;margin:0 0 8px;letter-spacing:0.5px}
    .s3-item p{font-size:16px;color:#475569;margin:0;line-height:1.7}

    .s3-right{
      height:100%;
      border-radius:20px;
      overflow:hidden;
      border:1px solid #eef2f7;
      background:#ffffff;
      display:flex;
      align-items:center;
      justify-content:center;
    }
    .s3-right img{width:100%;height:100%;object-fit:contain;display:block}

    @media(max-width:1000px){
      .s3-grid{grid-template-columns:1fr;gap:28px;align-items:start}
      .s3-left{height:auto}
      .s3-right{height:auto;min-height:360px}
      h2{font-size:2.3rem!important}
    }
    @media(max-width:600px){
      section{padding:50px 14px!important}
      h2{font-size:1.9rem!important}
      .s3-item{padding:20px 18px;gap:16px}
      .s3-item p{font-size:15px}
      .s3-right{min-height:280px}
    }
  `}</style>
</section>




<FaqSection customFaqs={myFaqs} />


    </main>
  );
}