"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const API_BASE = "https://darkturquoise-jackal-561480.hostingersite.com/api";
const STORAGE_BASE = "https://darkturquoise-jackal-561480.hostingersite.com/storage/";

export default function BlogPage() {
  const [tabs, setTabs] = useState(["All"]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 6;

  const getImageUrl = (img: string | null) => {
    if (!img) return "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80";
    if (img.startsWith("http")) return img;
    // fix relative path
    return `${STORAGE_BASE}${img}`;
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(`${API_BASE}/categories`);
        const json = await res.json();
        if (json.success && json.data) {
          const catTitles = json.data.map((c: any) => c.title);
          setTabs(["All", ...catTitles]);
        }
      } catch (err) {
        console.error("Categories fetch failed", err);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/blogs`);
        const json = await res.json();
        if (json.success && json.data) {
          setBlogs(json.data);
        } else if (Array.isArray(json)) {
          setBlogs(json);
        } else if (json.data && Array.isArray(json.data.data)) {
          setBlogs(json.data.data);
        }
      } catch (err) {
        console.error("Blogs fetch failed", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const filtered = activeTab === "All" ? blogs : blogs.filter((b: any) => 
    (typeof b.category === 'string' ? b.category : b.category?.title) === activeTab
  );
  
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  if (loading) {
    return <div style={{padding: "100px", textAlign:"center"}}>Loading blogs...</div>
  }

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <section style={{ background: "#fff", padding: "60px 20px 20px" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto", textAlign: "center" }}>
          <h1 className="blog-heading">Auto Transport Insights</h1>
          <p className="blog-sub">Expert advice, industry insights, and helpful guides to make your vehicle shipping experience seamless.</p>
          <div className="tabs-wrap">
            {tabs.map(tab => (
              <button key={tab} onClick={() => { setActiveTab(tab); setCurrentPage(1); }} className={`tab-btn ${activeTab === tab ? "active" : ""}`}>
                {tab}
              </button>
            ))}
          </div>
          <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "18px" }}>
            Showing {paginated.length > 0 ? (currentPage - 1) * perPage + 1 : 0} - {Math.min(currentPage * perPage, filtered.length)} of {filtered.length} posts
          </p>
        </div>
      </section>

      <section style={{ padding: "30px 20px 60px" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div className="blog-grid">
            {paginated.map((blog: any) => {
              const categoryName = typeof blog.category === 'string' ? blog.category : blog.category?.title || blog.category_title || "General";
              const blogDate = blog.blog_date ? new Date(blog.blog_date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}) : blog.created_at ? new Date(blog.created_at).toLocaleDateString() : "";
              const blogImage = getImageUrl(blog.featured_image);
              const blogLink = `/blogs/${blog.slug || blog.id}`;

              return (
              <div key={blog.id} className="blog-card">
                <div className="blog-img-wrap">
                  <img src={blogImage} alt={blog.title} />
                </div>
                <div style={{ padding: "18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", gap: "8px" }}>
                    <span className="badge">{categoryName}</span>
                    <span style={{ fontSize: "11px", color: "#94a3b8" }}>📅 {blogDate}</span>
                  </div>
                  <h3>{blog.title}</h3>
                  {/* FIXED: use short_description */}
                  <p>{blog.short_description || blog.description || ""}</p>
                  <Link href={blogLink} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
              )
            })}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Prev</button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} className={currentPage === i + 1 ? "active" : ""} onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </button>
              ))}
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        main { font-family: 'Inter', sans-serif; }
        .blog-heading { color: #0b1e48; font-size: 44px; font-weight: 800; line-height: 1.15; margin: 0 0 12px; letter-spacing: -0.6px; }
        .blog-sub { color: #475569; font-size: 16px; line-height: 1.7; max-width: 700px; margin: 0 auto 28px; }
        .tabs-wrap { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 900px; margin: 0 auto; }
        .tab-btn { background: #fff; border: 1px solid #e2e8f0; padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; color: #475569; cursor: pointer; transition: all 0.25s ease; }
        .tab-btn:hover { border-color: #0b1e48; color: #0b1e48; }
        .tab-btn.active { background: #0b1e48; color: #fff; border-color: #0b1e48; }
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .blog-card { background: #fff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.04); transition: all 0.3s ease; display: flex; flex-direction: column; }
        .blog-card:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
        .blog-img-wrap { height: 200px; overflow: hidden; background: #f1f5f9; }
        .blog-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .blog-card:hover .blog-img-wrap img { transform: scale(1.06); }
        .badge { background: #f1f5f9; color: #0b1e48; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 100px; }
        .blog-card h3 { color: #0b1e48; font-size: 18px; font-weight: 800; line-height: 1.3; margin: 0 0 8px; }
        .blog-card p { color: #475569; font-size: 13px; line-height: 1.6; margin: 0 0 14px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .read-more { color: #0b1e48; font-size: 13px; font-weight: 700; text-decoration: none; }
        .read-more:hover { color: #d90429; }
        .pagination { display: flex; justify-content: center; gap: 8px; margin-top: 40px; flex-wrap: wrap; }
        .pagination button { background: #fff; border: 1px solid #e2e8f0; padding: 8px 14px; border-radius: 8px; font-size: 13px; font-weight: 600; color: #0b1e48; cursor: pointer; }
        .pagination button.active { background: #0b1e48; color: #fff; border-color: #0b1e48; }
        .pagination button:disabled { opacity: 0.4; cursor: not-allowed; }
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) {
          .blog-heading { font-size: 25px !important; }
          .blog-sub { font-size: 13px !important; }
          .blog-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .blog-img-wrap { height: 190px !important; }
          .blog-card h3 { font-size: 16px !important; }
          .tabs-wrap { justify-content: flex-start; flex-wrap: nowrap; overflow-x: auto; padding-bottom: 8px; }
          .tabs-wrap::-webkit-scrollbar { display: none; }
          .tab-btn { white-space: nowrap; font-size: 12px !important; padding: 7px 14px !important; }
        }
      `}</style>
    </main>
  );
}