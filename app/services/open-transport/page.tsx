"use client";
import { useState, useEffect, useRef } from "react";
import HomeBanner from "@/components/HomeBanner";
import FaqSection from "@/components/Homepage/FaqSection";
import Reviews from "@/components/Review/Reviews";
import {
  Car,
  CircleDot,
  MapPinned,
  Truck,
  ShieldCheck,
  BadgeDollarSign,
  Clock3,
  FileText,
  MapPin,
  Timer,
} from "lucide-react";

const myFaqs = [
  {
    id: 1,
    question: "What is open car transport and how does it work?",
    answer:
      "Open car transport is the most popular and affordable way to ship everyday vehicles. Your car is loaded onto an open-air trailer that carries 8-10 vehicles at once — the same method dealerships use daily. It's fast, cost-effective, and fully insured.",
  },
  {
    id: 2,
    question: "Is open car transport safe for my vehicle?",
    answer:
      "Yes, 100% safe. Your vehicle is secured with industrial wheel straps, chains and soft ties. All carriers are DOT-approved, FMCSA-registered with $1M cargo insurance and 99.5% damage-free rate.",
  },
  {
    id: 3,
    question: "How much cheaper is open transport vs enclosed?",
    answer:
      "Open transport saves you 30-40% compared to enclosed transport. It's the ideal choice for sedans, SUVs, trucks, daily drivers and vehicles valued under $60k.",
  },
  {
    id: 4,
    question: "How long does open car transport take?",
    answer:
      "Typical open car shipping takes 2-7 days depending on distance. Pickup is usually within 24-48 hours across the USA.",
  },
  {
    id: 5,
    question: "What do I need to do to prepare my car for open shipping?",
    answer:
      "Remove personal items, keep gas at 1/4 tank, wash your car for inspection, disable alarm, and document existing damage with photos.",
  },
];

export default function OpenCarTransportPage() {
  const topRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [topVisible, setTopVisible] = useState(false);
  const [midVisible, setMidVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  useEffect(() => {
    const opt = { threshold: 0.2, rootMargin: "0px 0px -100px 0px" };
    const o1 = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTopVisible(true);
        o1.unobserve(e.target);
      }
    }, opt);
    const o2 = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setMidVisible(true);
        o2.unobserve(e.target);
      }
    }, opt);
    const o3 = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setBottomVisible(true);
        o3.unobserve(e.target);
      }
    }, opt);
    if (topRef.current) o1.observe(topRef.current);
    if (midRef.current) o2.observe(midRef.current);
    if (bottomRef.current) o3.observe(bottomRef.current);
    return () => {
      o1.disconnect();
      o2.disconnect();
      o3.disconnect();
    };
  }, []);

  const steps = [
    {
      icon: BadgeDollarSign,
      text: "Get your instant online quote in 30 seconds with transparent pricing for open car transport.",
    },
    {
      icon: Truck,
      text: "Book your shipment — our team assigns a DOT-approved open carrier with faster dispatch.",
    },
    {
      icon: ShieldCheck,
      text: "Your vehicle is inspected, secured and insured for safe door-to-door delivery anywhere USA.",
    },
    {
      icon: FileText,
      text: "Transparent paperwork & Bill of Lading — no hidden fees, clear terms for everyday vehicles.",
    },
    {
      icon: MapPin,
      text: "Live tracking & real-time updates — know exactly where your car is from pickup to delivery.",
    },
    {
      icon: Timer,
      text: "On-time delivery guarantee — average 2-7 days transit for affordable open car transport.",
    },
  ];

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <HomeBanner
        title="Professional Open Car Transport"
        desc="Affordable and dependable transportation for everyday vehicles."
        bgImage="/car_transporter_highway.jpg"
        ctaLink="/contact-us"
      />

      {/* 2ND SECTION - LEFT FROM LEFT, RIGHT FROM RIGHT ON SCROLL */}
      <section
        ref={midRef}
        style={{
          position: "relative",
          padding: "30px 20px",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="ss-grid">
            <div
              className="ss-left"
              style={{
                opacity: midVisible ? 1 : 0,
                transform: midVisible ? "translateX(0)" : "translateX(-56px)",
                transition: "all 0.75s cubic-bezier(0.16,1,0.36,1)",
              }}
            >
              <h2 className="ss-title">Open Car Shipping Trusted By Dealers</h2>
              <p className="ss-para">
                Most affordable and safest way to ship your daily driver. Same
                carriers used by OEMs and dealers — now for you.
              </p>

              <div className="ss-features">
                <div
                  className="ss-feat-pro"
                  style={{
                    opacity: midVisible ? 1 : 0,
                    transform: midVisible
                      ? "translateX(0)"
                      : "translateX(-30px)",
                    transition: `all 0.6s ease ${0.2}s`,
                  }}
                >
                  <div className="ss-ficon-pro">
                    <ShieldCheck size={20} color="#fff" />
                  </div>
                  <div className="ss-ftext">
                    <p>Fully Insured Transit</p>
                    <span>
                      Up to $100k cargo insurance + $1M liability coverage
                    </span>
                  </div>
                </div>
                <div
                  className="ss-feat-pro"
                  style={{
                    opacity: midVisible ? 1 : 0,
                    transform: midVisible
                      ? "translateX(0)"
                      : "translateX(-30px)",
                    transition: `all 0.6s ease ${0.32}s`,
                  }}
                >
                  <div className="ss-ficon-pro red">
                    <BadgeDollarSign size={20} color="#fff" />
                  </div>
                  <div className="ss-ftext">
                    <p>30% Cheaper Than Enclosed</p>
                    <span>Best value for sedans, SUVs & daily drivers</span>
                  </div>
                </div>
                <div
                  className="ss-feat-pro"
                  style={{
                    opacity: midVisible ? 1 : 0,
                    transform: midVisible
                      ? "translateX(0)"
                      : "translateX(-30px)",
                    transition: `all 0.6s ease ${0.44}s`,
                  }}
                >
                  <div className="ss-ficon-pro dark">
                    <Truck size={20} color="#fff" />
                  </div>
                  <div className="ss-ftext">
                    <p>8-10 Cars Per Load</p>
                    <span>
                      Shared load = lower cost, faster dispatch across USA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="ss-right"
              style={{
                opacity: midVisible ? 1 : 0,
                transform: midVisible ? "translateX(0)" : "translateX(60px)",
                transition: "all 0.75s cubic-bezier(0.16,1,0.36,1) 0.15s",
              }}
            >
              <div className="ss-img1">
                <img src="/car_transporter_highway.jpg" alt="open transport" />
                <div className="ss-price">
                  <small>Starting From</small>
                  <strong>$499</strong>
                </div>
              </div>
              <div className="ss-img2">
                <img src="/camaro_night_transport.jpg" alt="carrier" />
                <div className="ss-check">
                  <span>✓</span> DOT Verified
                </div>
              </div>
              <div className="ss-blob" />
            </div>
          </div>
        </div>

        <style>{`
    .ss-title { color: #0b1e48; font-size: 44px; font-weight: 800; line-height: 1.12; margin: 0 0 14px; }
    .ss-para { color: #475569; font-size: 16px; line-height: 1.7; margin: 0 0 26px; }
    .ss-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: stretch; }
    .ss-left { display: flex; flex-direction: column; justify-content: center; height: 100%; align-self: center; }
    .ss-features { display: flex; flex-direction: column; gap: 12px; margin-bottom: 0; }
    .ss-feat-pro { display: flex; gap: 14px; align-items: center; background: #fff; border: 1px solid #e9eef5; padding: 16px 16px; border-radius: 14px; transition: all 0.38s cubic-bezier(0.22,1,0.36,1); position: relative; overflow: hidden; }
    .ss-feat-pro::before { content:""; position:absolute; left:0; top:0; bottom:0; width:3px; background:#0b1e48; opacity:0; transition: all 0.38s ease; }
    .ss-feat-pro:hover { transform: translateX(6px); box-shadow: 0 12px 28px rgba(11,30,72,0.08); border-color: #0b1e48; }
    .ss-feat-pro:hover::before { opacity:1; }
    .ss-ficon-pro { width: 44px; height: 44px; min-width: 44px; background: #0b1e48; border-radius: 11px; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 16px rgba(11,30,72,0.18); }
    .ss-ficon-pro.red { background: #d60000; box-shadow: 0 6px 16px rgba(214,0,0,0.22); }
    .ss-ftext { flex:1; }
    .ss-ftext p { color: #0b1e48; font-size: 18px; font-weight: 700; margin: 0 0 2px; }
    .ss-ftext span { color: #475569; font-size: 16px; display: block; }
    
    .ss-right { position: relative; height: 460px; align-self: center; }
    .ss-img1 { position: absolute; left: 6%; top: 0; width: 76%; height: 66%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(11,30,72,0.18); transform: rotate(-1.8deg); transition: all 0.6s ease; }
    .ss-img1 img,.ss-img2 img { width: 100%; height: 100%; object-fit: cover; }
    .ss-img2 { position: absolute; right: 4%; bottom: 0%; width: 54%; height: 48%; border-radius: 18px; overflow: hidden; border: 4px solid #fff; box-shadow: 0 16px 40px rgba(11,30,72,0.22); transform: rotate(2.2deg); transition: all 0.6s ease; }
    .ss-img1:hover { transform: rotate(0deg) scale(1.02); }
    .ss-img2:hover { transform: rotate(0deg) scale(1.03); }
    .ss-price { position: absolute; top: 14px; right: 14px; background: #fff; border-radius: 12px; padding: 8px 12px; }
    .ss-price small { display: block; color: #475569; font-size: 9px; font-weight: 700; }
    .ss-price strong { color: #d60000; font-size: 18px; font-weight: 900; }
    .ss-check { position: absolute; bottom: 10px; left: 10px; background: #fff; padding: 6px 10px; border-radius: 100px; font-size: 11px; font-weight: 700; color: #0b1e48; display: flex; gap: 6px; align-items: center; }
    .ss-check span { width: 18px; height: 18px; background: #0b1e48; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; }
    .ss-blob { position: absolute; right: -12px; top: -18px; width: 160px; height: 160px; background: #0b1e48; opacity: 0.06; border-radius: 24px; transform: rotate(12deg); z-index: -1; }
    
    @media (max-width: 1024px) { 
      .ss-grid { grid-template-columns: 1fr!important; gap: 40px!important; align-items: center!important; } 
      .ss-left { height: auto!important; }
      .ss-right { height: 460px!important; max-width: 560px; margin: 0 auto; width: 100%; } 
    }
    @media (max-width: 640px) { 
      .ss-title { font-size: 25px!important; } 
      .ss-para { font-size: 13px!important; } 
      .ss-ftext p { font-size: 15px!important; }
      .ss-ftext span { font-size: 13px!important; }
      .ss-right { height: 360px!important; } 
    }
  `}</style>
      </section>

      {/* 1ST SECTION - LEFT FROM LEFT, RIGHT CARDS FROM RIGHT */}
      <section
        ref={topRef}
        style={{
          background: "#fff",
          padding: "60px 20px 50px",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div className="top-grid">
            <div
              className="top-img-wrap"
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 10px 28px rgba(11,30,72,0.12)",
                opacity: topVisible ? 1 : 0,
                transform: topVisible ? "translateX(0)" : "translateX(-56px)",
                transition: "all 0.75s cubic-bezier(0.16,1,0.36,1)",
              }}
            >
              <img
                src="/bmw_m2_transport.jpg"
                alt="Open Car Transport"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "#d60000",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: "800",
                  padding: "7px 14px",
                  borderRadius: "100px",
                }}
              >
                MOST POPULAR • 30% CHEAPER
              </div>
            </div>

            <div className="top-cards-wrap">
              {[
                {
                  n: "01",
                  title: "Most Affordable Option",
                  sub: "Save 30-40% vs enclosed — ideal for everyday vehicles",
                },
                {
                  n: "02",
                  title: "Faster Pickup & Dispatch",
                  sub: "More open carriers available across the USA",
                },
                {
                  n: "03",
                  title: "Dealership Trusted Method",
                  sub: "Same safe method used by dealers nationwide",
                },
                {
                  n: "04",
                  title: "Fully Insured & Secure",
                  sub: "Professional straps, wheel locks & full coverage",
                },
              ].map((item, i) => (
                <div
                  key={item.n}
                  className="white-card"
                  style={{
                    background: "#fff",
                    border: "1px solid #e9eef5",
                    borderLeft: "4px solid #d60000",
                    borderRadius: "14px",
                    padding: "20px 22px",
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                    boxShadow: "0 4px 18px rgba(11,30,72,0.06)",
                    opacity: topVisible ? 1 : 0,
                    transform: topVisible
                      ? "translateX(0)"
                      : `translateX(60px)`,
                    transition: `all 0.7s cubic-bezier(0.16,1,0.36,1) ${0.12 + i * 0.12}s`,
                  }}
                >
                  <div
                    style={{
                      minWidth: "48px",
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px",
                      background: "#d60000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: "900",
                      fontSize: "13px",
                    }}
                  >
                    {item.n}
                  </div>
                  <div>
                    <h4
                      style={{
                        color: "#0b1e48",
                        fontSize: "18px",
                        fontWeight: "700",
                        margin: "0 0 3px",
                      }}
                      className="wc-title"
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{ color: "#475569", fontSize: "16px", margin: 0 }}
                      className="wc-sub"
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .top-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 24px; align-items: stretch; }
          .top-img-wrap { height: 100%; min-height: 100%; align-self: stretch; }
          .top-cards-wrap { display: flex; flex-direction: column; gap: 14px; height: 100%; align-self: stretch; }
          .top-cards-wrap .white-card { flex: 1 1 0; }
          .white-card { position: relative; transition: all 0.38s cubic-bezier(0.22,1,0.36,1)!important; cursor: pointer; }
          .white-card:hover { transform: translateX(8px)!important; box-shadow: 0 12px 28px rgba(11,30,72,0.12)!important; border-color: #0b1e48!important; border-left-color: #0b1e48!important; }
          @media (max-width: 1024px) {
            .top-grid { grid-template-columns: 1fr!important; gap: 28px!important; }
            .top-img-wrap { height: 380px!important; min-height: 380px!important; }
            .top-cards-wrap { height: auto!important; }
            .top-cards-wrap .white-card { flex: none!important; }
          }
          @media (max-width: 640px) {
            .wc-title { font-size: 15px!important; line-height: 1.3!important; }
            .wc-sub { font-size: 13px!important; line-height: 1.5!important; }
            .top-grid { gap: 20px!important; }
            .top-img-wrap { height: 260px!important; min-height: 260px!important; border-radius: 14px!important; }
            .white-card { padding: 16px 16px!important; border-radius: 12px!important; }
            .white-card:hover { transform: translateX(4px)!important; }
          }
        `}</style>
      </section>
      
      <section
        style={{
          background: "#fff",
          padding: "20px 20px 60px",
          overflow: "hidden",
        }}
      >
        <div
          style={{ maxWidth: "1300px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 className="main-heading-3 anim-up">Car Shipping Made Easy!</h2>
          <p className="main-desc anim-up d1" style={{ textAlign: "center" }}>
            How Open Car Transport Works — In 4 Simple Steps
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              position: "relative",
              marginTop: "55px",
            }}
            className="four-steps-grid"
          >
            <div className="connector-line"></div>

            {[
              {
                t: "Get Instant Quote",
                d: "Affordable open transport pricing with no hidden fees",
              },
              {
                t: "Book Your Transport",
                d: "Confirm date & carrier — open trailers ready faster",
              },
              {
                t: "Vehicle Pickup",
                d: "Door-to-door pickup, inspected & secured on carrier",
              },
              {
                t: "Safe Delivery",
                d: "Affordable, dependable delivery anywhere USA",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`step-card anim-up d${i + 2}`}
                style={{ animationDelay: `${0.2 + i * 0.15}s` }}
              >
                <div
                  className="icon-box float-anim"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <span className="icon-num">{i + 1}</span>
                </div>
                <h3 className="step-label">STEP {i + 1}</h3>
                <p className="step-title">{s.t}</p>
                <p className="step-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
    .main-heading { color: #0b1e48; font-size: 44px; font-weight: 800; line-height: 1.2; margin: 0 0 10px; text-align:center; }
    .main-heading-3 { color: #0b1e48; font-size: 44px; font-weight: 800; line-height: 1.2; margin: 0 0 10px; text-align:center; }
    .main-desc { color: #475569; font-size: 16px; line-height: 1.85; margin: 0; text-align: center; }
    .step-label { color: #0b1e48; font-size: 13px; font-weight: 800; letter-spacing: 0.8px; margin: 0 0 8px; text-align: center; }
    .step-title { color: #0b1e48; font-size: 18px; font-weight: 700; margin: 0 0 6px; text-align: center; transition: color 0.3s ease; }
    .step-desc { color: #475569; font-size: 16px; line-height: 1.65; margin: 0 auto; max-width: 240px; text-align: center; }

    .connector-line {
      position: absolute; top: 36px; left: 12%; right: 12%; height: 2px; z-index: 0;
      background: linear-gradient(90deg, #e2e8f0 0%, #0b1e48 25%, #d60000 50%, #0b1e48 75%, #e2e8f0 100%);
      background-size: 200% 100%;
      animation: lineFlow 3s linear infinite;
    }
    @keyframes lineFlow {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .step-card {
      display: flex; flex-direction: column; align-items: center;
      position: relative; z-index: 1;
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
    }
    .step-card:hover { transform: translateY(-8px); }
    .step-card:hover .step-title { color: #d60000; }

    .icon-box {
      width: 74px; height: 74px; border-radius: 18px;
      background: #0b1e48; color: #fff; font-weight: 800; font-size: 20px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 18px; box-shadow: 0 10px 24px rgba(11,30,72,0.20);
      position: relative; overflow: hidden;
      transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
    }
    .icon-box::after {
      content: ""; position: absolute; inset: 0;
      background: #d60000; transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1); z-index: 0;
    }
    .icon-num { position: relative; z-index: 1; }
    .step-card:nth-child(even) .icon-box { background: #fff; border: 2px solid #0b1e48; color: #0b1e48; }
    .step-card:nth-child(even):hover .icon-box { border-color: #d60000; color: #fff; }

    .step-card:hover .icon-box { transform: scale(1.1); box-shadow: 0 16px 32px rgba(214,0,0,0.32); }
    .step-card:hover .icon-box::after { transform: translateY(0); }

    .float-anim {
      animation: floatUpDown 3s ease-in-out infinite;
    }
    @keyframes floatUpDown {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    .step-card:hover .float-anim {
      animation-play-state: paused;
    }

    .anim-up {
      opacity: 0; transform: translateY(24px);
      animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
    }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    .d1 { animation-delay: 0.1s; }
    .d2 { animation-delay: 0.2s; }
    .d3 { animation-delay: 0.35s; }
    .d4 { animation-delay: 0.5s; }
    .d5 { animation-delay: 0.65s; }

    @media (max-width: 1024px) {
      .four-steps-grid { grid-template-columns: 1fr 1fr!important; gap: 36px!important; }
      .connector-line { display: none!important; }
      .main-heading { font-size: 32px!important; }
    }
    @media (max-width: 600px) {
      .four-steps-grid { grid-template-columns: 1fr!important; gap: 28px!important; }
      .main-heading { font-size: 25px!important; }
      .main-heading-3 { font-size: 25px!important; }
      .main-desc { font-size: 13px!important; line-height: 1.6!important; }
      .step-title { font-size: 15px!important; }
      .step-desc { font-size: 13px!important; line-height: 1.6!important; }
    }
  `}</style>
      </section>

      {/* 6 CARDS */}
      <section
        ref={bottomRef}
        style={{
          position: "relative",
          padding: "40px 20px",
          overflow: "hidden",
          background: "#f8fafc",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
          className="bg-slow"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(248,250,252,0.9) 0%, #f8fafc 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <h2 className="premium-heading">
              The Way Car Shipping Works With Stateside
            </h2>
            <p className="premium-desc">
              Safe, fast and on time car shipping delivery — fully insured &
              transparent
            </p>
          </div>

          <div className="cards-grid-pro">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="premium-card-pro"
                  style={{
                    opacity: bottomVisible ? 1 : 0,
                    transform: bottomVisible
                      ? "translateY(0)"
                      : "translateY(28px)",
                    transition: `all 0.7s cubic-bezier(0.16,1,0.36,1) ${i * 0.08}s`,
                  }}
                >
                  <div className="premium-top">
                    <div className="premium-icon-pro">
                      <Icon size={18} color="#fff" />
                    </div>
                    <span className="premium-num-pro">0{i + 1}</span>
                    <div className="premium-line" />
                  </div>
                  <p className="premium-text-pro">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
    .premium-heading { color: #0b1e48; font-size: 44px; font-weight: 800; line-height: 1.15; margin: 0 0 12px; text-align: center; letter-spacing: -0.5px; }
    .premium-desc { color: #475569; font-size: 16px; line-height: 1.7; margin: 0; text-align: center; }
    .bg-slow { animation: premiumZoom 22s ease-in-out infinite alternate; }
    @keyframes premiumZoom { 0%{transform:scale(1)} 100%{transform:scale(1.06)} }

    .cards-grid-pro { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

    .premium-card-pro {
      background: #fff;
      border-radius: 18px;
      padding: 24px 22px;
      border: 1px solid rgba(11,30,72,0.07);
      box-shadow: 0 4px 20px rgba(11,30,72,0.05);
      position: relative;
      overflow: hidden;
      transition: all 0.45s cubic-bezier(0.22,1,0.36,1);
    }
    .premium-card-pro::after {
      content:""; position:absolute; left:0; right:0; bottom:0; height:3px;
      background: linear-gradient(90deg, #0b1e48, #d60000);
      transform: scaleX(0); transform-origin: left;
      transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
    }
    .premium-card-pro:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(11,30,72,0.11); border-color: rgba(11,30,72,0.12); }
    .premium-card-pro:hover::after { transform: scaleX(1); }
    .premium-card-pro:hover .premium-icon-pro { background: #d60000; transform: scale(1.08); }

    .premium-top { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
    .premium-icon-pro {
      width: 38px; height: 38px; min-width: 38px;
      background: #0b1e48; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 6px 14px rgba(11,30,72,0.18);
      transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
    }
    .premium-num-pro { color: #0b1e48; font-size: 18px; font-weight: 900; letter-spacing: 0.5px; opacity: 0.4; }
    .premium-line { flex:1; height: 1px; background: linear-gradient(90deg, #e2e8f0, transparent); margin-left: 8px; }
    .premium-text-pro { color: #0b1e48; font-size: 16px;  line-height: 1.6; margin: 0; }

    @media (max-width: 1024px) { .cards-grid-pro { grid-template-columns: repeat(2, 1fr)!important; } }
    @media (max-width: 640px) {
      .cards-grid-pro { grid-template-columns: 1fr!important; gap: 14px!important; }
      .premium-heading { font-size: 25px!important; }
      .premium-desc { font-size: 13px!important; line-height: 1.6!important; }
      .premium-num-pro { font-size: 15px!important; }
      .premium-text-pro { font-size: 13px!important; line-height: 1.6!important; }
    }
  `}</style>
      </section>

      <section
        style={{
          background: "#f8fafc",
          padding: "40px 20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "56px",
            alignItems: "center",
          }}
          className="charge-grid-diff"
        >
          <div className="charge-left-diff">
            <div
              style={{
                width: "44px",
                height: "44px",
                background: "#0b1e48",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <BadgeDollarSign size={20} color="#fff" />
            </div>
            <h2 className="charge-heading-diff">
              How Much Car Transport Charge?
            </h2>
            <p className="charge-desc-diff">
              When it comes to shipping your vehicle, understanding the factors
              influencing car transport costs is crucial. At Stateside Auto
              Ship, we offer competitive pricing based on size, condition and
              distance.
            </p>

            <div className="charge-social">
              <div style={{ display: "flex" }}>
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    marginLeft: "-6px",
                  }}
                  alt=""
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    marginLeft: "-6px",
                  }}
                  alt=""
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    marginLeft: "-6px",
                  }}
                  alt=""
                />
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#0b1e48",
                  fontWeight: "700",
                }}
              >
                15k+ happy customers
                <br />
                <span style={{ color: "#475569", fontWeight: "500" }}>
                  Trusted across USA
                </span>
              </div>
            </div>
          </div>

          <div className="charge-right-diff">
            <div className="charge-line" />
            {[
              {
                icon: Car,
                title: "Size And Weight Of Vehicle",
                desc: "Larger vehicles may need specialized equipment, impacting cost.",
              },
              {
                icon: CircleDot,
                title: "The Car Condition",
                desc: "Operational vehicles are easier to handle, while inoperable ones need special handling.",
              },
              {
                icon: MapPinned,
                title: "The Shipping Distance",
                desc: "Longer journeys incur higher costs due to fuel, tolls and logistics.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="charge-item-diff">
                  <div className="charge-dot">
                    <Icon size={16} color="#fff" />
                  </div>
                  <div className="charge-card-diff">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
   .charge-grid-diff { align-items: center; }
   .charge-left-diff { display: flex; flex-direction: column; justify-content: center; max-width: 100%; }
   .charge-right-diff { position: relative; display: flex; flex-direction: column; justify-content: center; gap: 16px; }

   .charge-line { position: absolute; left: 23px; top: 24px; bottom: 24px; width: 2px; background: linear-gradient(180deg, #0b1e48, #d60000, #e2e8f0); opacity: 0.18; }

   .charge-heading-diff { color: #0b1e48; font-size: 44px; font-weight: 800; line-height: 1.12; margin: 0 0 12px; letter-spacing: -0.4px; text-align: left; max-width: 420px; }
   .charge-desc-diff { color: #475569; font-size: 16px; font-weight: 500; line-height: 1.65; margin: 0; text-align: left; max-width: 100%; }
   .charge-social { margin-top: 20px; display: flex; align-items: center; gap: 14px; }

   .charge-item-diff { display: flex; gap: 18px; align-items: center; position: relative; }
   .charge-dot { min-width: 46px; width: 46px; height: 46px; background: #0b1e48; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 6px #f8fafc, 0 0 0 7px #e2e8f0; z-index: 2; transition: all 0.3s ease; flex-shrink: 0; }
   .charge-item-diff:nth-child(2) .charge-dot { background: #d60000; }
   .charge-card-diff { background: #fff; border: 1px solid #e9eef5; border-radius: 12px; padding: 16px 18px; flex: 1; box-shadow: 0 2px 12px rgba(11,30,72,0.04); transition: all 0.3s ease; min-height: 68px; display: flex; flex-direction: column; justify-content: center; }
   .charge-item-diff:hover .charge-dot { transform: scale(1.06); }
   .charge-item-diff:hover .charge-card-diff { transform: translateX(5px); border-color: #0b1e48; box-shadow: 0 8px 24px rgba(11,30,72,0.08); }
   .charge-card-diff h4 { color: #0b1e48; font-size: 18px; font-weight: 800; margin: 0 0 3px; }
   .charge-card-diff p { color: #475569; font-size: 16px; line-height: 1.5; margin: 0; }

   @media (max-width: 1024px) {
     .charge-grid-diff { grid-template-columns: 1fr!important; gap: 32px!important; }
     .charge-left-diff { max-width: 100%!important; align-items: center!important; text-align: center!important; }
     .charge-heading-diff { max-width: 100%!important; text-align: center!important; font-size: 32px!important; }
     .charge-desc-diff { max-width: 100%!important; text-align: center!important; }
     .charge-social { justify-content: center!important; }
     .charge-line { display: none!important; }
   }
   @media (max-width: 640px) {
     .charge-heading-diff { font-size: 25px!important; line-height: 1.25!important; max-width: 300px!important; }
     .charge-desc-diff { font-size: 13px!important; line-height: 1.6!important; max-width: 310px!important; }
     .charge-card-diff h4 { font-size: 15px!important; }
     .charge-card-diff p { font-size: 13px!important; line-height: 1.6!important; }
     .charge-dot { min-width: 40px; width: 40px; height: 40px; }
   }
  `}</style>
      </section>
      <Reviews />
      <FaqSection customFaqs={myFaqs} />
    </main>
  );
}
