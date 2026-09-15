"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Reviews from "@/components/Review/Reviews";

const API_BASE = "https://darkturquoise-jackal-561480.hostingersite.com/api";
const STORAGE_BASE = "https://darkturquoise-jackal-561480.hostingersite.com/storage/";

export default function BlogDetailPremium() {
  const params = useParams();
  const slugParam = params?.slug as string;
  const [blog, setBlog] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getImageUrl = (img: string | null) => {
    if (!img) return "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000&q=80";
    if (img.startsWith("http")) return img;
    if (img.startsWith("/")) img = img.substring(1);
    return `${STORAGE_BASE}${img}`;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/blogs/${slugParam}`);
        const json = await res.json();
        const data = json.data || json;
        setBlog(data);
        const allRes = await fetch(`${API_BASE}/blogs`);
        const allJson = await allRes.json();
        let allBlogs: any[] = [];
        if (allJson.success && Array.isArray(allJson.data)) allBlogs = allJson.data;
        else if (Array.isArray(allJson)) allBlogs = allJson;
        else if (allJson.data?.data) allBlogs = allJson.data.data;
        setRelated(allBlogs.filter((b: any) => String(b.id)!== String(data.id)).slice(0, 3));
        const catRes = await fetch(`${API_BASE}/categories`);
        const catJson = await catRes.json();
        if (catJson.success && Array.isArray(catJson.data)) setCategories(catJson.data.map((c: any) => c.title || c.name));
      } catch (e) { console.error(e); } finally { setLoading(false); }
    }
    if (slugParam) fetchData();
  }, [slugParam]);

  if (loading) return <div style={{ padding: "120px", textAlign: "center" }}>Loading...</div>;
  if (!blog) return <div style={{ padding: "120px", textAlign: "center" }}>Blog not found</div>;

  const bannerImg = getImageUrl(blog.featured_image);
  const mainImg = getImageUrl(blog.featured_image);
  const blogDate = blog.blog_date? new Date(blog.blog_date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}) : "";
  const categoryName = typeof blog.category === 'string'? blog.category : blog.category?.title || "General";
  const contentHtml = blog.content || "";
  const faqs = blog.faqs || blog.faq || [];
  const tags = (blog.tags || []).map((t:any)=> typeof t === 'string'? t : t.title || t.name);

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <section className="hero-section" style={{ backgroundImage: `url("${bannerImg}")` }}>
        <div className="hero-overlay"></div>
        <div className="hero-container-centered">
          <div className="hero-content-centered">
            <h1>{blog.title}</h1>
            <div className="hero-badge-row">
              <span className="hero-badge">{categoryName}</span>
              <span className="hero-badge-outline">📅 {blogDate}</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1300px", margin: "0 auto", padding: "40px 20px 80px", display: "grid", gridTemplateColumns: "1.7fr 0.62fr", gap: "36px" }} className="main-grid">
        <div>
          <div className="content-card">
            <img src={mainImg} alt={blog.title} className="main-img" />
            <div className="content-pad">
              <div className="content-header-premium"><span className="content-label">ABOUT THIS ARTICLE </span><div className="content-line"></div></div>
              <div className="blog-content premium-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
          </div>

          {faqs.length > 0 && (
            <div className="faq-card">
              <div className="faq-header">
                <h2>Frequently Asked Questions</h2>
                <span className="faq-count">{faqs.length} Questions</span>
              </div>
              <div className="faq-list">
                {faqs.map((f: any, i: number) => {
                  const isOpen = openFaq === i;
                  return (
                  <div key={i} className={`faq-item ${isOpen? 'open':''}`}>
                    <button onClick={() => setOpenFaq(isOpen? null : i)} className="faq-btn">
                      <span className="faq-q">{f.question}</span>
                      <span className={`faq-icon ${isOpen? 'open':''}`}>{isOpen? "−" : "+"}</span>
                    </button>
                    {isOpen && <div className="faq-ans">{f.answer}</div>}
                  </div>
                )})}
              </div>
            </div>
          )}
        </div>

        <div><div style={{ position: "sticky", top: "20px", display:"flex", flexDirection:"column", gap:"20px" }}>
            <div className="premium-box"><div className="premium-head"><h3>Related Blogs</h3><span className="premium-line"></span></div><div className="premium-list">{related.map((item: any) => (<Link key={item.id} href={`/blogs/${item.slug}`} style={{ textDecoration: "none" }}><div className="premium-card"><div className="premium-img"><img src={getImageUrl(item.featured_image)} alt={item.title} /></div><div className="premium-content-side"><h4>{item.title}</h4><p>{item.short_description?.slice(0,90)}</p><div className="premium-more"><span>Read Article</span><div className="arrow-circle">→</div></div></div></div></Link>))}</div></div>
            <div className="premium-box"><h3>Categories</h3><div className="cat-premium">{categories.map(cat=>(<Link key={cat} href={`/blogs?category=${encodeURIComponent(cat)}`} className="cat-premium-item"><span className="cat-dot"></span><span>{cat}</span><span className="cat-arrow">→</span></Link>))}</div></div>
            {tags.length > 0 && (<div className="premium-box"><h3>Popular Tags</h3><div className="tag-premium">{tags.map((t: string, idx:number)=>(<span key={idx} className="tag-premium-item">{t}</span>))}</div></div>)}
        </div></div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        main{font-family:'Inter',sans-serif}
     .hero-section{position:relative; min-height:440px; display:flex; align-items:center; justify-content:center; background-size:cover; background-position:center; padding:60px 20px; overflow:hidden;}
     .hero-overlay{position:absolute; inset:0; background:linear-gradient(90deg, rgba(8,28,60,0.92) 0%, rgba(8,28,60,0.6) 100%); z-index:1;}
     .hero-container-centered{position:relative; z-index:2; max-width:900px; width:100%; text-align:center;}
     .hero-content-centered h1{font-size:52px; font-weight:900; line-height:1.1; letter-spacing:-1px; margin:0 0 18px; color:#fff;}
     .hero-badge-row{display:flex; gap:10px; justify-content:center; flex-wrap:wrap;}
     .hero-badge{background:#fff; color:#0b1e48; font-size:11px; font-weight:800; padding:7px 14px; border-radius:100px;}
     .hero-badge-outline{background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3); color:#fff; font-size:11px; font-weight:700; padding:7px 14px; border-radius:100px; backdrop-filter:blur(6px);}
     .content-card{background:#fff; border-radius:24px; border:1px solid #e2e8f0; overflow:hidden; box-shadow:0 20px 60px rgba(11,30,72,0.07);}
     .main-img{width:100%; height:520px; object-fit:cover; object-position:center; display:block;}
     .content-pad{padding:32px 36px 36px;}
     .content-header-premium{display:flex; align-items:center; gap:12px; margin-bottom:24px}
     .content-label{font-size:10px; font-weight:900; letter-spacing:1.4px; color:#d60000; background:#fff0f0; padding:7px 14px; border-radius:100px; border:1px solid #ffd4d4; text-transform:uppercase;}
     .content-line{flex:1; height:1px; background:linear-gradient(90deg, #ffd4d4, transparent)}
     .premium-content h2{color:#0b1e48!important; font-size:22px!important; font-weight:800!important; line-height:1.3!important; letter-spacing:-0.4px!important; margin:32px 0 12px!important;}
     .premium-content h2:first-child{margin-top:0!important;}
     .premium-content p{color:#475569!important; font-size:16px!important; line-height:1.8!important; font-weight:400!important; margin:0 0 18px!important;}
     .premium-content ul{margin:16px 0 24px 0!important; padding:0!important; list-style:none!important; display:flex; flex-direction:column; gap:10px;}
     .premium-content ul li{position:relative; padding:14px 16px 14px 44px!important; background:#f8fafc; border:1px solid #eef2f7; border-radius:12px; color:#334155!important; font-size:15px!important; line-height:1.5!important; font-weight:500!important; margin:0!important; transition:all 0.2s; list-style:none!important;}
     .premium-content ul li:hover{background:#fff; border-color:#0b1e48; box-shadow:0 8px 20px rgba(11,30,72,0.06); transform:translateY(-1px);}
     .premium-content ul li:before{content:""!important; position:absolute; left:14px; top:50%; transform:translateY(-50%); width:22px; height:22px; background:#0b1e48; border-radius:100%;}
     .premium-content ul li:after{content:"✓"; position:absolute; left:14px; top:50%; transform:translateY(-50%); width:22px; height:22px; color:#fff; font-size:11px; font-weight:900; display:flex; align-items:center; justify-content:center; text-align:center; line-height:22px;}

     .premium-box{background:#fff; border:1px solid #e2e8f0; border-radius:20px; padding:22px; box-shadow:0 12px 32px rgba(11,30,72,0.06);}
     .premium-head{display:flex; align-items:center; gap:12px; margin-bottom:18px;}.premium-head h3{font-size:17px; font-weight:900; color:#0b1e48; margin:0;}.premium-line{flex:1; height:1px; background:linear-gradient(90deg, #e2e8f0, transparent);}
     .premium-box h3{font-size:22px; font-weight:800; color:#0b1e48; margin:0 0 16px;}.premium-list{display:flex; flex-direction:column; gap:16px;}
     .premium-card{display:flex; gap:14px; background:#f8fafc; border:1px solid #eef2f7; border-radius:16px; padding:12px; transition:all 0.4s ease;}
     .premium-card:hover{background:#fff; border-color:#0b1e48; box-shadow:0 12px 32px rgba(11,30,72,0.12); transform:translateY(-3px);}
     .premium-img{width:130px; min-width:130px; height:118px; border-radius:12px; overflow:hidden; background:#e2e8f0;}.premium-img img{width:100%; height:100%; object-fit:cover;}
     .premium-content-side h4{font-size:14.5px; font-weight:800; color:#0b1e48; line-height:1.3; margin:0 0 6px;}.premium-content-side p{font-size:11.5px; color:#64748b; line-height:1.5; margin:0 0 10px;}
     .premium-more{display:flex; align-items:center; gap:8px;}.premium-more span{font-size:11px; font-weight:800; color:#0b1e48;}.arrow-circle{width:22px; height:22px; background:#0b1e48; color:#fff; border-radius:100%; display:flex; align-items:center; justify-content:center; font-size:11px;}
     .cat-premium{display:flex; flex-direction:column; gap:8px;}.cat-premium-item{display:flex; align-items:center; gap:10px; padding:11px 12px; background:#f8fafc; border:1px solid #eef2f7; border-radius:12px; text-decoration:none; color:#334155; font-size:13px; font-weight:600;}.cat-premium-item:hover{background:#0b1e48; color:#fff;}.cat-dot{width:6px; height:6px; background:#d60000; border-radius:100%;}.cat-arrow{margin-left:auto; opacity:0.4;}
     .tag-premium{display:flex; flex-wrap:wrap; gap:8px;}.tag-premium-item{background:#f1f5f9; border:1px solid #e2e8f0; color:#0b1e48; font-size:11.5px; font-weight:600; padding:7px 13px; border-radius:100px;}

      /* FAQ FIXED - PREMIUM */
     .faq-card{margin-top:28px; background:#fff; border-radius:24px; border:1px solid #e2e8f0; padding:28px; box-shadow:0 20px 60px rgba(11,30,72,0.06);}
     .faq-header{display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid #f1f5f9;}
     .faq-header h2{font-size:20px; font-weight:900; color:#0b1e48; margin:0!important;}
     .faq-count{font-size:11px; font-weight:800; letter-spacing:0.5px; color:#d60000; background:#fff0f0; border:1px solid #ffd4d4; padding:6px 12px; border-radius:100px;}
     .faq-list{display:flex; flex-direction:column; gap:12px;}
     .faq-item{border:1px solid #e2e8f0; border-radius:16px; overflow:hidden; background:#fff; transition:all 0.25s ease;}
     .faq-item.open{border-color:#0b1e48; background:#f8fafc; box-shadow:0 8px 24px rgba(11,30,72,0.06);}
     .faq-btn{width:100%; text-align:left; padding:18px 20px; background:none; border:none; cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:16px;}
     .faq-q{font-size:14.5px; font-weight:700; color:#0b1e48; line-height:1.4; flex:1;}
     .faq-icon{flex-shrink:0; width:32px; height:32px; border-radius:50%; background:#f1f5f9; color:#0b1e48; font-size:18px; font-weight:800; line-height:1; display:grid; place-items:center; transition:all 0.25s ease; border:1px solid #e2e8f0;}
     .faq-icon.open{background:#0b1e48; color:#fff; border-color:#0b1e48; transform:rotate(180deg);}
     .faq-ans{padding:0 20px 20px 20px; font-size:14px; line-height:1.7; color:#475569; animation:fadeIn 0.2s ease;}
      @keyframes fadeIn{from{opacity:0; transform:translateY(-4px);} to{opacity:1; transform:translateY(0);}}

        @media(max-width:1100px){.main-grid{grid-template-columns:1fr!important} }
        @media(max-width:640px){
       .hero-section{min-height:360px!important}.hero-content-centered h1{font-size:28px!important}
       .main-img{height:260px!important}.content-pad{padding:20px!important}
       .premium-content h2{font-size:18px!important;}
       .premium-content p{font-size:13px!important;}
       .premium-content ul li{font-size:13px!important; padding:12px 12px 12px 40px!important;}
       .faq-card{padding:20px!important;}
       .faq-q{font-size:13px!important;}
        }
      `}</style>
      <Reviews />
    </main>
  );
}