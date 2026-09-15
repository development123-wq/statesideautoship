"use client";
import { useState } from "react";
import Link from "next/link";
import Reviews from "@/components/Review/Reviews";

const BLOG = {
  title: "Car Movers Service in the USA",
  category: "Car Shipping Services",
  date: "March 15, 2024",
  banner: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80",
  mainImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000&q=80",
  content: `
    <p>Shipping your car across the USA doesn't have to be stressful. Whether you're relocating for work, buying a car online, or sending a vehicle to a family member, choosing the right car movers service is the key to safe and on-time delivery.</p>
    <h2>What is a Car Movers Service?</h2>
    <p>Car movers service is a professional auto transport solution that moves cars, SUVs, trucks, and luxury vehicles from one state to another using open or enclosed carriers.</p>
    <h2>How Much Does It Cost?</h2>
    <p>Distance, vehicle size, open vs enclosed transport, and season affect pricing. A sedan from California to Texas costs $800-$1200 on average.</p>
  `,
  tags: ["Car Shipping", "Auto Transport", "Car Movers", "USA", "Enclosed", "Open Transport", "Door to Door"],
  faqs: [
    { q: "How much does car shipping cost in the USA?", a: "Average cost is $800-$1200 for cross-country. Price depends on distance, vehicle size, and open vs enclosed transport." },
    { q: "How long does it take to ship a car?", a: "Typically 3-7 days for 1000-2500 miles. Coast-to-coast takes 7-10 days." },
    { q: "Is my car insured during transport?", a: "Yes, all shipments include cargo insurance up to $100k." },
    { q: "Door-to-door or terminal-to-terminal?", a: "We offer door-to-door - carrier picks up from your location and delivers to your destination." },
  ],
  related: [
    { title: "Open vs Enclosed Car Transport", slug: "open-vs-enclosed", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80", desc: "Learn the difference between open and enclosed carriers and which is best for your vehicle shipping needs and budget." },
    { title: "How Much Does Car Shipping Cost in 2024?", slug: "car-shipping-cost", img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80", desc: "Complete cost breakdown for car shipping in 2024 including distance, vehicle type and seasonal pricing factors explained." },
    { title: "Door to Door Auto Transport Explained", slug: "door-to-door", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80", desc: "Understand how door-to-door auto transport works and why it's the most convenient shipping option available today." },
  ],
  categories: ["Transport Types", "Cost Guide", "Services", "Safety Tips", "Insurance"],
};

export default function BlogDetailPremium() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <section className="hero-section blog-hero">
        <div className="hero-overlay"></div>
        <div className="hero-container-centered">
          <div className="hero-content-centered">
            <h1>{BLOG.title}</h1>
            <div className="hero-badge-row">
              <span className="hero-badge">{BLOG.category}</span>
              <span className="hero-badge-outline">📅 {BLOG.date}</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1300px", margin: "0 auto", padding: "40px 20px 80px", display: "grid", gridTemplateColumns: "1.7fr 0.62fr", gap: "36px" }} className="main-grid">
        <div>
          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}>
            <img src={BLOG.mainImage} alt={BLOG.title} style={{ width: "100%", height: "520px", objectFit: "cover", objectPosition:"center" }} className="main-img" />
            <div style={{ padding: "36px" }} className="content-pad">
              <h2 style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1px", color: "#d60000", margin: "0 0 10px" }}>ABOUT THIS SERVICE</h2>
              <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#334155" }} className="blog-content" dangerouslySetInnerHTML={{ __html: BLOG.content }} />
            </div>
          </div>
          <div style={{ marginTop: "28px", background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }} className="faq-box">
            <h2 style={{ fontSize: "20px", fontWeight: 900, color: "#0b1e48", margin: "0 0 14px" }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {BLOG.faqs.map((f, i) => (
                <div key={i} style={{ border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden", background: openFaq === i ? "#f8fafc" : "#fff" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "16px 18px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#0b1e48" }}>{f.q}</span>
                    <span style={{ minWidth: "28px", height: "28px", borderRadius: "100%", background: openFaq === i ? "#0b1e48" : "#f1f5f9", color: openFaq === i ? "#fff" : "#0b1e48", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 800 }}>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && <div style={{ padding: "0 18px 16px", fontSize: "13.5px", lineHeight: 1.7, color: "#475569" }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PREMIUM RIGHT SIDE */}
        <div>
          <div style={{ position: "sticky", top: "20px", display:"flex", flexDirection:"column", gap:"20px" }}>
            
            <div className="premium-box">
              <div className="premium-head">
                <h3>Related Services</h3>
                <span className="premium-line"></span>
              </div>
              <div className="premium-list">
                {BLOG.related.map((item) => (
                  <Link key={item.slug} href={`/blogs/${item.slug}`} style={{ textDecoration: "none" }}>
                    <div className="premium-card">
                      <div className="premium-img">
                        <img src={item.img} alt={item.title} />
                        <div className="premium-shine"></div>
                      </div>
                      <div className="premium-content">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                        <div className="premium-more">
                          <span>Read Article</span>
                          <div className="arrow-circle">→</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="premium-box">
              <h3>Categories</h3>
              <div className="cat-premium">
                {BLOG.categories.map(cat=>(
                  <Link key={cat} href={`/blogs/category/${cat.toLowerCase().replace(/\s+/g,'-')}`} className="cat-premium-item">
                    <span className="cat-dot"></span>
                    <span>{cat}</span>
                    <span className="cat-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="premium-box">
              <h3>Popular Tags</h3>
              <div className="tag-premium">
                {BLOG.tags.map(t=>(
                  <Link key={t} href={`/blogs/tag/${t.toLowerCase().replace(/\s+/g,'-')}`} className="tag-premium-item">{t}</Link>
                ))}
              </div>
            </div>

            <div className="quote-premium">
              <div className="quote-icon">✦</div>
              <h4>Need a Quote?</h4>
              <p>Get instant car shipping quote in 30 seconds. No hidden fees.</p>
              <Link href="/quote" className="quote-btn">Get Free Quote →</Link>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&display=swap');
        main{font-family:'Inter',sans-serif}
        .hero-section{position:relative; min-height:440px; display:flex; align-items:center; justify-content:center; background-size:cover; background-position:center; padding:60px 20px; overflow:hidden;}
        .blog-hero{background-image: url("${BLOG.banner}");}
        .hero-overlay{position:absolute; inset:0; background:linear-gradient(90deg, rgba(8,28,60,0.92) 0%, rgba(8,28,60,0.6) 100%); z-index:1;}
        .hero-container-centered{position:relative; z-index:2; max-width:900px; width:100%; text-align:center;}
        .hero-content-centered h1{font-size:54px; font-weight:900; line-height:1.1; letter-spacing:-1px; margin:0 0 18px; color:#fff;}
        .hero-badge-row{display:flex; gap:10px; justify-content:center; flex-wrap:wrap;}
        .hero-badge{background:#fff; color:#0b1e48; font-size:11px; font-weight:800; padding:7px 14px; border-radius:100px;}
        .hero-badge-outline{background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3); color:#fff; font-size:11px; font-weight:700; padding:7px 14px; border-radius:100px; backdrop-filter:blur(6px);}
        .blog-content h2{color:#0b1e48;font-size:22px;font-weight:800;margin:28px 0 12px}
        .blog-content p{margin:0 0 16px}

        /* PREMIUM RIGHT UI */
        .premium-box{background:#fff; border:1px solid #e2e8f0; border-radius:20px; padding:22px; box-shadow:0 12px 32px rgba(11,30,72,0.06);}
        .premium-head{display:flex; align-items:center; gap:12px; margin-bottom:18px;}
        .premium-head h3{font-size:17px; font-weight:900; color:#0b1e48; margin:0; letter-spacing:-0.3px;}
        .premium-line{flex:1; height:1px; background:linear-gradient(90deg, #e2e8f0, transparent);}
        .premium-box h3{font-size:16px; font-weight:800; color:#0b1e48; margin:0 0 16px;}

        .premium-list{display:flex; flex-direction:column; gap:16px;}
        .premium-card{display:flex; gap:14px; background:#f8fafc; border:1px solid #eef2f7; border-radius:16px; padding:12px; transition:all 0.4s cubic-bezier(0.16,1,0.3,1); overflow:hidden;}
        .premium-card:hover{background:#fff; border-color:#0b1e48; box-shadow:0 12px 32px rgba(11,30,72,0.12); transform:translateY(-4px);}
        .premium-img{width:130px; min-width:130px; height:118px; border-radius:12px; overflow:hidden; position:relative; background:#e2e8f0;}
        .premium-img img{width:100%; height:100%; object-fit:cover; object-position:center; transition:transform 0.6s ease;}
        .premium-card:hover .premium-img img{transform:scale(1.12);}
        .premium-shine{position:absolute; inset:0; background:linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%); transform:translateX(-100%); transition:transform 0.8s;}
        .premium-card:hover .premium-shine{transform:translateX(100%);}
        .premium-content{flex:1; display:flex; flex-direction:column; justify-content:space-between; padding:2px 0;}
        .premium-content h4{font-size:14.5px; font-weight:800; color:#0b1e48; line-height:1.3; margin:0 0 6px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;}
        .premium-content p{font-size:11.5px; color:#64748b; line-height:1.5; margin:0 0 10px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;}
        .premium-more{display:flex; align-items:center; gap:8px; margin-top:auto;}
        .premium-more span{font-size:11px; font-weight:800; color:#0b1e48; letter-spacing:0.2px;}
        .arrow-circle{width:22px; height:22px; background:#0b1e48; color:#fff; border-radius:100%; display:flex; align-items:center; justify-content:center; font-size:11px; transition:all 0.3s;}
        .premium-card:hover .arrow-circle{background:#d60000; transform:translateX(3px);}

        .cat-premium{display:flex; flex-direction:column; gap:8px;}
        .cat-premium-item{display:flex; align-items:center; gap:10px; padding:11px 12px; background:#f8fafc; border:1px solid #eef2f7; border-radius:12px; text-decoration:none; color:#334155; font-size:13px; font-weight:600; transition:all 0.25s;}
        .cat-premium-item:hover{background:#0b1e48; color:#fff; border-color:#0b1e48; transform:translateX(4px);}
        .cat-dot{width:6px; height:6px; background:#d60000; border-radius:100%; flex-shrink:0;}
        .cat-arrow{margin-left:auto; opacity:0.4; font-size:12px;}
        .cat-premium-item:hover .cat-arrow{opacity:1;}

        .tag-premium{display:flex; flex-wrap:wrap; gap:8px;}
        .tag-premium-item{background:#f1f5f9; border:1px solid #e2e8f0; color:#0b1e48; font-size:11.5px; font-weight:600; padding:7px 13px; border-radius:100px; text-decoration:none; transition:all 0.2s;}
        .tag-premium-item:hover{background:#0b1e48; color:#fff; border-color:#0b1e48; transform:translateY(-1px);}

        .quote-premium{background:linear-gradient(135deg, #0b1e48 0%, #122f6b 100%); border-radius:20px; padding:24px; color:#fff; position:relative; overflow:hidden;}
        .quote-premium:before{content:""; position:absolute; top:-40px; right:-40px; width:120px; height:120px; background:rgba(255,255,255,0.06); border-radius:100%;}
        .quote-icon{width:36px; height:36px; background:rgba(255,255,255,0.12); border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:18px; margin-bottom:12px;}
        .quote-premium h4{font-size:16px; font-weight:800; margin:0 0 6px; position:relative;}
        .quote-premium p{font-size:12px; opacity:0.8; line-height:1.5; margin:0 0 16px; position:relative;}
        .quote-btn{display:inline-flex; background:#fff; color:#0b1e48; font-size:12.5px; font-weight:800; padding:10px 18px; border-radius:100px; text-decoration:none; transition:all 0.2s; position:relative;}
        .quote-btn:hover{transform:translateY(-2px); box-shadow:0 8px 20px rgba(0,0,0,0.2);}

        @media(max-width:1100px){ .main-grid{grid-template-columns:1fr!important} }
        @media(max-width:640px){ 
          .hero-section{min-height:360px!important; padding:40px 16px!important} 
          .hero-content-centered h1{font-size:28px!important} 
          .main-img{height:260px!important} 
          .content-pad,.faq-box{padding:18px!important} 
          .blog-content{font-size:14px!important}
          .premium-img{width:110px; min-width:110px; height:100px;}
          .premium-content h4{font-size:13px;}
        }
      `}</style>

      <Reviews />
    </main>
  );
}