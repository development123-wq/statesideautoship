import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero */}
   <HomeBanner 
  title="Stateside Auto Ship"
  desc="Safe and Modern Auto Transport driven by customer satisfaction."
  bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
  ctaLink="/contact-us"
/>
      {/* About Content */}
      <section style={{ background: "#fff", padding: "40px 20px" }}>
  <div
    style={{
      maxWidth: "1300px",
      width: "100%",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: "70px",
      alignItems: "center",
    }}
    className="our-story-grid"
  >
    <div>
      <h2
        style={{
          color: "#0b1e48",
          fontSize: "44px",
          fontWeight: "800",
          lineHeight: "1.15",
          margin: "0 0 24px",
        }}
        className="our-story-heading"
      >
        Our Story
      </h2>

      <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.9", marginBottom: "18px" }} className="desc-text">
        We, Stateside Auto Ship, a 5-star rated, BBB-accredited auto transport company, founded in 2021, and in just a few years, we&apos;ve shipped over 16,000 vehicles across 48 states, growing from a small operation into one of the most respected and trusted vehicle shipping companies in the U.S.
      </p>

      <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.9", marginBottom: "18px" }} className="desc-text">
        Our team of dedicated professionals ensures every shipment is handled with care, assigning a personal expert to each load to manage scheduling, paperwork, carrier coordination, and real-time updates. Our compliance team carefully vets all carriers for licensing, insurance coverage, driving history, and safety ratings.
      </p>

      <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.9" }} className="desc-text">
        Serving individuals, families, students, military personnel, online car sellers, and businesses, we combine modern technology, transparent pricing, and nationwide coverage to make vehicle shipping fast, reliable, and stress-free, while maintaining a strong commitment to customer satisfaction, safety, and professionalism at every step.
      </p>
    </div>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <div className="our-story-img-wrap">
        <img
          src="/about11.jpg"
          alt="Our Story"
          style={{
            width: "100%",
            height: "429px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
          className="our-story-img"
        />
      </div>
    </div>
  </div>

  <style>{`
    .our-story-img-wrap {
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: all 0.4s ease;
    }
    .our-story-img {
      transition: all 0.5s ease;
      cursor: pointer;
    }
    .our-story-img-wrap:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px rgba(11, 30, 72, 0.2);
    }
    .our-story-img-wrap:hover .our-story-img {
      transform: scale(1.05);
    }
    /* FIXED RESPONSIVE - Your Memory */
    @media (max-width: 1024px) {
      .our-story-grid {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      .our-story-img-wrap {
        max-width: 600px;
        margin: 0 auto;
      }
      .our-story-img-wrap .our-story-img {
        height: 380px !important;
      }
      .our-story-heading {
        font-size: 25px !important;
      }
      .desc-text {
        font-size: 13px !important;
      }
    }
    @media (max-width: 640px) {
      .our-story-img-wrap .our-story-img {
        height: 300px !important;
      }
      .our-story-heading {
        font-size: 25px !important;
      }
      .desc-text {
        font-size: 13px !important;
      }
    }
  `}</style>
</section>

<section style={{ background: "#ffffff", padding: "40px 20px", position: "relative", overflow: "hidden" }}>
  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 20%, rgba(11,30,72,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59,130,246,0.04) 0%, transparent 50%)" }}></div>

  <div style={{ maxWidth: "1300px", width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
    
    <div style={{ textAlign: "center", marginBottom: "60px" }}>
      <h2 style={{ color: "#0b1e48", fontSize: "44px", fontWeight: "800", lineHeight: "1.1", margin: "0 0 16px" }} className="premium-heading-white">
        Built on Trust, Driven by Excellence
      </h2>
      <p style={{ color: "#475569", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }} className="desc-text">Three pillars that define how we move your world forward</p>
    </div>

    <div className="premium-grid-white">
      <div className="premium-card-white">
        <span className="card-number-white">01</span>
        <div className="premium-icon-white" style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
        </div>
        <h3>Our Mission</h3>
        <p className="desc-text">To provide safe auto transport while exceeding customer expectations through professionalism, transparency, and modern technology.</p>
        <div className="card-line-white"></div>
      </div>

      <div className="premium-card-white featured-white">
        <span className="card-number-white">02</span>
        <div className="premium-icon-white" style={{ background: "linear-gradient(135deg, #0b1e48, #1e3a8a)" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3>Our Values</h3>
        <div className="premium-values-white">
          <div><i></i><div><strong>Customer Satisfaction</strong><span>Every vehicle with care</span></div></div>
          <div><i></i><div><strong>Safety & Compliance</strong><span>Licensed, insured, regulated</span></div></div>
          <div><i></i><div><strong>Professionalism</strong><span>Dedicated experts you trust</span></div></div>
          <div><i></i><div><strong>Innovation</strong><span>Technology-driven solutions</span></div></div>
        </div>
      </div>

      <div className="premium-card-white">
        <span className="card-number-white">03</span>
        <div className="premium-icon-white" style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <h3>Our Vision</h3>
        <p className="desc-text">To lead the auto transport industry with innovative technology, simplifying the shipping process and delivering maximum convenience and satisfaction.</p>
        <div className="card-line-white"></div>
      </div>
    </div>
  </div>

  <style>{`
    .premium-grid-white {
      display: grid;
      grid-template-columns: 1fr 1.1fr 1fr;
      gap: 28px;
      align-items: stretch;
    }
    .premium-card-white {
      background: #ffffff;
      border-radius: 20px;
      padding: 36px 30px;
      position: relative;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 24px rgba(11,30,72,0.06);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
    }
    .premium-card-white.featured-white {
      background: #ffffff;
      border: 1px solid #0b1e48;
      box-shadow: 0 12px 40px rgba(11,30,72,0.12);
      transform: scale(1.02);
    }
    .premium-card-white:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(11,30,72,0.14);
      border-color: #cbd5e1;
    }
    .premium-card-white.featured-white:hover {
      transform: translateY(-8px) scale(1.03);
      box-shadow: 0 25px 60px rgba(11,30,72,0.18);
    }
    .card-number-white {
      position: absolute;
      top: 20px;
      right: 24px;
      font-size: 52px;
      font-weight: 900;
      color: #0b1e48;
      opacity: 0.05;
      line-height: 1;
    }
    .premium-icon-white {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.12);
    }
    .premium-card-white h3 {
      color: #0b1e48;
      font-size: 44px;
      font-weight: 800;
      margin: 0 0 14px;
      letter-spacing: -0.3px;
      line-height: 1.15;
    }
    .premium-card-white p {
      color: #475569;
      font-size: 16px;
      line-height: 1.7;
      margin: 0;
      flex: 1;
    }
    .card-line-white {
      height: 3px;
      background: linear-gradient(90deg, #0b1e48, #3b82f6);
      border-radius: 10px;
      margin-top: 24px;
      width: 40px;
      transition: width 0.4s ease;
    }
    .premium-card-white:hover .card-line-white {
      width: 100%;
    }
    .premium-values-white {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 8px;
    }
    .premium-values-white > div {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }
    .premium-values-white i {
      width: 6px;
      height: 6px;
      background: #0b1e48;
      border-radius: 50%;
      margin-top: 8px;
      flex-shrink: 0;
    }
    .premium-values-white strong {
      display: block;
      color: #0b1e48;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.2;
    }
    .premium-values-white span {
      color: #475569;
      font-size: 16px;
    }
    @media (max-width: 1100px) {
      .premium-grid-white {
        grid-template-columns: 1fr;
      }
      .premium-card-white.featured-white {
        transform: scale(1);
      }
      .premium-heading-white {
        font-size: 25px !important;
      }
      .premium-card-white h3 {
        font-size: 25px !important;
      }
      .premium-card-white p, .premium-values-white span, .premium-values-white strong, .desc-text {
        font-size: 13px !important;
      }
    }
  `}</style>
</section>

<section style={{ background: "#fff", padding: "40px 20px" }}>
  <div style={{ maxWidth: "1300px", width: "100%", margin: "0 auto" }}>
    <div className="why-lux-wrap">
      <div className="why-lux-left">
        <div>
          <h2>Why Stateside Auto Ship?</h2>
          <div className="why-lux-line"></div>
          <p className="desc-text">Trusted by thousands for safe, reliable vehicle shipping across 48 states.</p>
        </div>
        <div className="why-lux-img">
          <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" alt="Car transport" />
          <div className="why-lux-img-gradient"></div>
          <div className="why-lux-img-badge"><span>●</span> Available Nationwide</div>
        </div>
      </div>

      <div className="why-lux-right">
        <div className="why-card">
          <div className="why-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d90429" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
          <div><h3>Dedicated Expertise</h3><p className="desc-text">Every vehicle is assigned a dedicated expert agent who coordinates every step from pickup to delivery, ensuring professional handling and real-time updates.</p></div>
        </div>
        <div className="why-card">
          <div className="why-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d90429" strokeWidth="2"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 6v5h-7V8z"/></svg></div>
          <div><h3>Trusted Carrier Network</h3><p className="desc-text">Our carriers are carefully vetted for auto liability coverage, cargo insurance, driving history, and safety ratings to safeguard your vehicle.</p></div>
        </div>
        <div className="why-card">
          <div className="why-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d90429" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/></svg></div>
          <div><h3>Advanced Technology</h3><p className="desc-text">Our powerful cost calculator provides accurate vehicle shipping estimates in seconds — for free, with transparent pricing and no hidden fees.</p></div>
        </div>
        <div className="why-card">
          <div className="why-card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d90429" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
          <div><h3>5-Star & BBB Accredited</h3><p className="desc-text">FMCSA and DOT licensed <b>MC:1304594, DOT:3713977</b> with proven reliability and thousands of successful deliveries across 48 states.</p></div>
        </div>
      </div>
    </div>
  </div>

  <style>{`
    .why-lux-wrap {
      display: grid;
      grid-template-columns: 4fr 6fr;
      gap: 40px;
      align-items: stretch;
      width: 100%;
    }
    .why-lux-left { 
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      min-height: 100%;
    }
    .why-lux-left h2 {
      color: #0b1e48;
      font-size: 44px;
      font-weight: 900;
      line-height: 1.1;
      margin: 0;
      letter-spacing: -1.5px;
      max-width: 100%;
    }
    .why-lux-left h2 span { color: #0b1e48; display: block; }
    .why-lux-line { width: 52px; height: 4px; background: #0b1e48; margin: 20px 0; border-radius: 100px; }
    .why-lux-left p { color: #475569; font-size: 16px; line-height: 1.6; margin: 0; max-width: 340px; }
    .why-lux-img {
      margin-top: 28px;
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      flex: 1;
      min-height: 380px;
      background: #031b4e;
      display: flex;
    }
    .why-lux-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s; position: absolute; inset: 0; }
    .why-lux-img:hover img { transform: scale(1.05); }
    .why-lux-img-gradient { position: absolute; inset: 0; background: linear-gradient(to top, rgba(3,27,78,0.55) 0%, transparent 60%); z-index: 1; }
    .why-lux-img-badge {
      position: absolute; top: 14px; left: 14px; z-index: 2;
      background: #fff; padding: 7px 12px; border-radius: 100px;
      font-size: 11px; font-weight: 800; color: #0b1e48; display: flex; gap: 6px; align-items: center;
    }
    .why-lux-img-badge span { color: #22c55e; }

    .why-lux-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 16px;
      width: 100%;
      height: 100%;
    }
    .why-card {
      display: flex;
      gap: 16px;
      background: #fff;
      border: 1px solid #eef2f7;
      border-radius: 18px;
      padding: 22px 20px;
      transition: all 0.35s ease;
      box-shadow: 0 2px 12px rgba(3,27,78,0.04);
      flex: 1;
      align-items: center;
    }
    .why-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 32px rgba(3,27,78,0.10);
      border-color: #e2e8f0;
    }
    .why-card-icon {
      width: 44px; height: 44px;
      background: #fff1f2;
      border: 1px solid #ffe4e6;
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: all 0.3s;
    }
    .why-card:hover .why-card-icon { background: #d90429; border-color: #d90429; }
    .why-card:hover .why-card-icon svg { stroke: #fff; }
    .why-card h3 { color: #0b1e48; font-size: 16px; font-weight: 800; margin: 0 0 6px; }
    .why-card p { color: #475569; font-size: 16px; line-height: 1.65; margin: 0; }
    .why-card b { color: #0b1e48; }

    @media (max-width: 1024px) {
      .why-lux-wrap { grid-template-columns: 1fr; gap: 28px; }
      .why-lux-left { height: auto; }
      .why-lux-left h2 { max-width: 100%; font-size: 25px !important; }
      .why-lux-left p, .why-card p, .desc-text { font-size: 13px !important; }
      .why-lux-img { min-height: 300px; flex: none; height: 300px; }
      .why-lux-right { height: auto; }
      .why-card { flex: none; }
    }
    @media (max-width: 640px) {
      .why-lux-left h2 { font-size: 25px !important; max-width: 100%; }
      .why-lux-img { min-height: 220px; height: 220px; border-radius: 16px; }
      .why-card { padding: 18px 16px; border-radius: 16px; }
      .why-card h3 { font-size: 15px !important; }
      .why-card p, .desc-text { font-size: 13px !important; }
    }
  `}</style>
</section>

<section style={{ background: "#0b1e48", padding: "60px 20px" }}>
  <div style={{ maxWidth: "1300px", width: "100%", margin: "0 auto" }}>
    <div className="balanced-grid">
      <div className="bal-card">
        <div className="bal-top">
          <div className="bal-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
          <span>01</span>
          <h3>Trusted Carrier Network</h3>
        </div>
        <p className="desc-text"><b>Our carriers are carefully vetted by our dedicated carrier compliance team. We check:</b></p>
        <div className="bal-pills"><span>Auto liability</span><span>Cargo insurance</span><span>Safety ratings</span></div>
        <p className="desc-text">This pre-vetting ensures that every vehicle is in reliable hands, minimizing risks and safeguarding your investment.</p>
        <div className="bal-foot">With a trusted network, we offer faster availability, optimized routes, and reliable service, even during high-demand periods.</div>
      </div>

      <div className="bal-card">
        <div className="bal-top">
          <div className="bal-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/></svg></div>
          <span>02</span>
          <h3>Advanced Technology</h3>
        </div>
        <p className="desc-text"><b>We have implemented a powerful, advanced cost calculator that provides accurate vehicle shipping estimates in seconds — for free. This tool allows customers to:</b></p>
        <div className="bal-pills"><span>Plan shipments</span><span>Compare rates</span><span>Budget efficiently</span></div>
        <div className="bal-foot">By leveraging technology, we make vehicle shipping simple, transparent, and nearly hands-free, reducing manual steps and unnecessary delays.</div>
      </div>

      <div className="bal-card">
        <div className="bal-top">
          <div className="bal-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
          <span>03</span>
          <h3>Customer Satisfaction</h3>
        </div>
        <p className="desc-text"><b>Our value is simple: customer satisfaction drives everything we do. We treat every vehicle as if it were our own and every customer as part of our family.</b></p>
        <ul>
          <li className="desc-text">Estimates are provided first, followed by a final cost confirmation before assigning a load, ensuring pricing is affordable and transparent even in a fluctuating market.</li>
          <li className="desc-text">Our dedicated agents maintain constant communication, providing updates and guidance at every stage.</li>
          <li className="desc-text">Customers enjoy a smooth and professional shipping experience from start to finish.</li>
        </ul>
        <div className="bal-foot dark">This approach ensures high customer satisfaction, repeat business, and referrals, making Stateside Auto Ship a trusted name in auto transport.</div>
      </div>

      <div className="bal-card">
        <div className="bal-top">
          <div className="bal-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
          <span>04</span>
          <h3>Licensing & Certifications</h3>
        </div>
        <p className="desc-text">We are fully licensed for FMCSA and DOT (MC:1304594, DOT:3713977) operations, BBB accredited and maintain all active certifications required to operate legally and safely in the auto transport industry.</p>
        <div className="bal-badges"><b>MC:1304594</b><b>DOT:3713977</b><b>BBB</b><b>FMCSA</b></div>
        <div className="bal-foot">This demonstrates our commitment to safety, compliance, and professionalism, giving customers confidence that their vehicles are in trusted hands.</div>
      </div>
    </div>
  </div>

  <style>{`
    .balanced-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      width: 100%;
    }
    .bal-card {
      background: #fff;
      border-radius: 16px;
      padding: 28px 26px;
      border: 1px solid rgba(255,255,255,0.1);
      display: flex;
      flex-direction: column;
    }
    .bal-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
    .bal-icon {
      width: 40px; height: 40px;
      background: #0b1e48;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .bal-top span {
      background: #f1f5f9;
      color: #0b1e48;
      font-size: 11px; font-weight: 800;
      padding: 4px 10px; border-radius: 100px;
    }
    .bal-card h3 { color: #0b1e48; font-size: 20px; font-weight: 800; margin: 0; line-height: 1.2; flex: 1; }
    .bal-card p { color: #475569; font-size: 16px; line-height: 1.65; margin: 0 0 12px; }
    .bal-card b { color: #0b1e48; }
    .bal-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
    .bal-pills span { background: #fef2f2; border: 1px solid #fecaca; color: #d90429; padding: 5px 12px; border-radius: 100px; font-size: 11px; font-weight: 700; }
    .bal-card ul { list-style: none; padding: 0; margin: 0 0 14px; }
    .bal-card ul li { position: relative; padding-left: 16px; font-size: 16px; color: #475569; line-height: 1.6; margin-bottom: 8px; }
    .bal-card ul li::before { content: ''; position: absolute; left: 0; top: 7px; width: 6px; height: 6px; background: #d90429; border-radius: 50%; }
    .bal-foot {
      margin-top: auto;
      background: #f8fafc;
      border-left: 3px solid #d90429;
      padding: 10px 14px;
      border-radius: 0 8px 8px 0;
      font-size: 13px;
      color: #0b1e48;
      font-weight: 500;
      line-height: 1.5;
    }
    .bal-foot.dark { background: #0b1e48; color: #e2e8f0; }
    .bal-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px; }
    .bal-badges b { background: #0b1e48; color: #fff; padding: 5px 12px; border-radius: 100px; font-size: 11px; }
    @media (max-width: 900px) {
      .balanced-grid { grid-template-columns: 1fr; }
      .bal-card h3 { font-size: 18px !important; }
      .bal-card p, .bal-card ul li, .desc-text { font-size: 13px !important; }
    }
  `}</style>
</section>

<section style={{ background: "#fff", padding: "40px 20px 60px 20px" }}>
  <div style={{ maxWidth: "1300px", width: "100%", margin: "0 auto" }}>
    <div className="glance-top">
      <h2>Our Strong Points <span>at a Glance</span></h2>
      <Link href="/contact" className="glance-btn">Get a Free Quote →</Link>
    </div>

    <div className="white-glance">
      <div className="w-item">
        <div className="w-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 6v5h-7V8z"/></svg></div>
        <div><h4>16,000+</h4><p className="desc-text">vehicles shipped in 48 states</p></div>
        <div className="w-check">✓</div>
      </div>
      <div className="w-item">
        <div className="w-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
        <div><h4>5-Star Rated</h4><p className="desc-text">service with BBB accreditation</p></div>
        <div className="w-check">✓</div>
      </div>
      <div className="w-item">
        <div className="w-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
        <div><h4>Dedicated Experts</h4><p className="desc-text">for every shipment</p></div>
        <div className="w-check">✓</div>
      </div>
      <div className="w-item">
        <div className="w-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div><h4>Pre-Vetted</h4><p className="desc-text">licensed, and insured carriers</p></div>
        <div className="w-check">✓</div>
      </div>
      <div className="w-item">
        <div className="w-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/></svg></div>
        <div><h4>Advanced Calculator</h4><p className="desc-text">for instant estimates</p></div>
        <div className="w-check">✓</div>
      </div>
      <div className="w-item">
        <div className="w-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg></div>
        <div><h4>Coast-to-Coast</h4><p className="desc-text">coverage and fast availability</p></div>
        <div className="w-check">✓</div>
      </div>
      <div className="w-item">
        <div className="w-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
        <div><h4>Customer First</h4><p className="desc-text">satisfaction as the core value</p></div>
        <div className="w-check">✓</div>
      </div>
      <div className="w-item">
        <div className="w-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
        <div><h4>Transparent Pricing</h4><p className="desc-text">with no hidden fees</p></div>
        <div className="w-check">✓</div>
      </div>
    </div>
  </div>

  <style>{`
    .glance-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 20px;
      margin-bottom: 28px;
      flex-wrap: wrap;
    }
    .glance-top h2 {
      color: #0b1e48;
      font-size: 44px;
      font-weight: 900;
      margin: 0;
      line-height: 1.1;
      letter-spacing: -0.8px;
    }
    .glance-top h2 span { color: #0b1e48; }
    .glance-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #d60000;
      color: #fff;
      padding: 13px 26px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      white-space: nowrap;
      transition: all 0.3s ease;
      box-shadow: 0 8px 20px rgba(214,0,0,0.25);
      flex-shrink: 0;
    }
    .glance-btn:hover { background: #b80000; transform: translateY(-2px); box-shadow: 0 12px 28px rgba(214,0,0,0.32); }
    .white-glance {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      width: 100%;
    }
    .w-item {
      background: #fff;
      border: 1px solid #eef2f7;
      border-radius: 16px;
      padding: 18px 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(3,27,78,0.03);
      min-width: 0;
    }
    .w-item:hover {
      border-color: #e2e8f0;
      box-shadow: 0 12px 28px rgba(3,27,78,0.08);
      transform: translateY(-3px);
    }
    .w-icon {
      width: 40px; height: 40px;
      background: #0b1e48;
      border-radius: 11px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: all 0.3s;
    }
    .w-item:hover .w-icon { background: #d90429; }
    .w-item h4 { color: #0b1e48; font-size: 16px; font-weight: 800; margin: 0 0 2px; line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .w-item p { color: #475569; font-size: 16px; margin: 0; line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .w-item > div:nth-child(2) { min-width: 0; flex: 1; }
    .w-check {
      margin-left: auto;
      width: 24px; height: 24px;
      background: #f1f5f9;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: #0b1e48;
      font-size: 11px; font-weight: 800;
      flex-shrink: 0;
      transition: all 0.3s;
    }
    .w-item:hover .w-check { background: #0b1e48; color: #fff; }

    @media (max-width: 1200px) {
      .white-glance { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 900px) {
      .white-glance { grid-template-columns: repeat(2, 1fr); }
      .glance-top h2 { font-size: 25px !important; }
      .w-item h4, .w-item p, .desc-text { font-size: 13px !important; }
    }
    @media (max-width: 560px) {
      .white-glance { grid-template-columns: 1fr; }
      .glance-top { flex-direction: column; align-items: flex-start; }
      .glance-top h2 { font-size: 25px !important; }
      .w-item p { white-space: normal; font-size: 13px !important; }
      .w-item h4 { white-space: normal; font-size: 13px !important; }
      .desc-text { font-size: 13px !important; }
    }
  `}</style>
</section>

      <section
  style={{
    position: "relative",
    color: "#fff",
    textAlign: "center",
    padding: "80px 20px",
    backgroundImage: `linear-gradient(rgba(6,45,87,0.88), rgba(6,45,87,0.88)), url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="cta-section"
>
  <h2 style={{ fontSize: "44px", marginBottom: "15px", color: "#ffffff" }}>
    Ready to Ship Your Vehicle?
  </h2>
  <p style={{ fontSize: "16px", color: "#ffffff", marginBottom: "30px", opacity: 0.9 }} className="desc-text">
    Get in touch with our team today and receive a free, no-obligation quote.
  </p>
  <Link
    href="/contact"
    style={{
      display: "inline-block",
      background: "#d60000",
      color: "#fff",
      padding: "14px 30px",
      borderRadius: "30px",
      textDecoration: "none",
      fontWeight: "600",
    }}
  >
    Discover More →
  </Link>
  <style>{`
    @media (max-width: 768px) {
      .cta-section h2 {
        font-size: 25px !important;
      }
      .cta-section p, .desc-text {
        font-size: 13px !important;
      }
    }
  `}</style>
</section>
    </main>
  );
}