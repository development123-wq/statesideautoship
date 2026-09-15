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
    question: "What is enclosed vault transport and how does it work?",
    answer:
      "Enclosed vault is sealed, hard-sided transport for anything you can't risk exposing. Your shipment goes inside a fully enclosed aluminum vault that carries only 2-6 loads — no open air, no tarp. Hard-sided, locked, lift-gate loaded, same driver door-to-door.",
  },
  {
    id: 2,
    question: "Is enclosed vault safe for high-value shipments?",
    answer:
      "Yes — vault-level safe. Every load is secured with soft wheel nets, zero frame contact, hydraulic lift-gate (no ramps), and $2M cargo coverage. All carriers are DOT-approved, FMCSA-registered with 99.9% damage-free record and sealed transit.",
  },
  {
    id: 3,
    question: "Why does enclosed vault cost more than open transport?",
    answer:
      "Vault costs 30-40% more because you get dedicated space, 2-6 vault only, hard-sided enclosure, white-glove handling, lift-gate, and $2M insurance. Built for exotic, classic, luxury, custom, or any shipment you can't risk in open.",
  },
  {
    id: 4,
    question: "How long does enclosed vault shipping take?",
    answer:
      "Typical vault transit is 2-7 days depending on distance. Pickup in 24-72 hours — fewer stops, same driver, direct route. Live tracking and video updates available on request.",
  },
  {
    id: 5,
    question: "How do I prepare for enclosed vault shipping?",
    answer:
      "Remove personal items, keep fuel at 1/4, wash for inspection, disable alarm, document condition with photos. For ultra-low clearance, tell us — we bring hydraulic lift-gate and extended ramps at no extra handling.",
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
        title="Professional Enclosed Car Transport"
        desc="Maximum protection and white-glove service for luxury, classic and exotic vehicles."
        bgImage="/coastal_sunset_car_transport.jpg"
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
              <h2 className="ss-title">
                Enclosed Car Shipping Trusted By Collectors
              </h2>
              <p className="ss-para">
                Most secure and premium way to ship your high-value vehicle.
                Same enclosed carriers used by exotic brands and collectors —
                now for you.
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
                    <p>Fully Enclosed & Weather-Proof</p>
                    <span>
                      Up to $2M cargo insurance + $1M liability coverage
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
                    <p>White-Glove Handling</p>
                    <span>
                      Hydraulic lift-gate, soft straps & climate protection
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
                    transition: `all 0.6s ease ${0.44}s`,
                  }}
                >
                  <div className="ss-ficon-pro dark">
                    <Truck size={20} color="#fff" />
                  </div>
                  <div className="ss-ftext">
                    <p>2-6 Cars Per Load Only</p>
                    <span>
                      More space, more care, maximum protection across USA
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
                <img
                  src="/bmw_m2_loading_trailer.jpg"
                  alt="enclosed transport"
                />
                <div className="ss-price">
                  <small>Starting From</small>
                  <strong>$899</strong>
                </div>
              </div>
              <div className="ss-img2">
                <img
                  src="/enclosed_car_transport_highway.jpg"
                  alt="enclosed carrier"
                />
                <div className="ss-check">
                  <span>✓</span> Enclosed Verified
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
    .ss-feat-pro { display: flex; gap: 14px; align-items: center; background: #fff; border: 1px solid #e9eef5; padding: 16px 16px; border-radius: 14px; transition: all 0.38s cubic-bezier(0.22,1,0.36,1)!important; position: relative; overflow: hidden; cursor: pointer; }
    .ss-feat-pro::before { content:""; position:absolute; left:0; top:0; bottom:0; width:3px; background:#0b1e48; opacity:0; transition: all 0.38s ease; }
    .ss-feat-pro:hover { transform: translateX(8px)!important; box-shadow: 0 12px 28px rgba(11,30,72,0.10)!important; border-color: #0b1e48!important; }
    .ss-feat-pro:hover::before { opacity:1; }
    .ss-ficon-pro { width: 44px; height: 44px; min-width: 44px; background: #0b1e48; border-radius: 11px; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 16px rgba(11,30,72,0.18); transition: all 0.3s ease; }
    .ss-ficon-pro.red { background: #d60000; box-shadow: 0 6px 16px rgba(214,0,0,0.22); }
    .ss-feat-pro:hover .ss-ficon-pro { transform: scale(1.08); }
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
    @media (max-width: 1024px) { .ss-grid { grid-template-columns: 1fr!important; gap: 40px!important; align-items: center!important; } .ss-left { height: auto!important; } .ss-right { height: 460px!important; max-width: 560px; margin: 0 auto; width: 100%; } }
    @media (max-width: 640px) { 
      .ss-title { font-size: 25px!important; } 
      .ss-para { font-size: 13px!important; } 
      .ss-ftext p { font-size: 15px!important; }
      .ss-ftext span { font-size: 13px!important; }
      .ss-right { height: 360px!important; } 
      .ss-feat-pro:hover { transform: translateX(4px)!important; }
    }
  `}</style>
      </section>

      {/* ENCLOSED - 1300px NO EMPTY SPACE BENTO VAULT */}
      <section
        ref={topRef}
        style={{ background: "#fff", padding: "50px 20px", overflow: "hidden" }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            background: "#0b1e48",
            borderRadius: "22px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "0.92fr 1.08fr",
            boxShadow: "0 20px 60px rgba(11,30,72,0.20)",
            opacity: topVisible ? 1 : 0,
            transform: topVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.75s cubic-bezier(0.16,1,0.36,1)",
          }}
          className="vault-wrap"
        >
          {/* LEFT - HOVER */}
          <div className="vault-left">
            <img
              src="/bmw_m2_loading_trailer.jpg"
              alt="enclosed vault"
              className="vault-left-img"
            />
            <div className="vault-left-overlay" />
            <div className="vault-left-content">
              <span className="vault-badge">ENCLOSED VAULT • 100% SECURE</span>
              <h3>Your Car Never Sees Daylight</h3>
              <p>
                Hard-sided enclosure + lift-gate + $2M coverage. Built for
                exotic clearance & paint.
              </p>
            </div>
          </div>

          {/* RIGHT - 4 CARDS PREMIUM ALIGNED */}
          <div className="vault-right">
            <div className="vault-right-head">
              <span>WHY ENCLOSED</span>
              <h4>When Open Fails</h4>
            </div>

            {[
              {
                n: "01",
                title: "Zero Exposure Transit",
                desc: "Sealed aluminum walls — no sun, rain, dust or debris from pickup to delivery.",
              },
              {
                n: "02",
                title: "Lift-Gate Loading",
                desc: "Hydraulic lift, no ramps. Safe for 3-inch ground clearance exotics & classics.",
              },
              {
                n: "03",
                title: "2-6 Cars Vault Only",
                desc: "More space, less movement. Soft wheel nets, zero frame touch, same driver.",
              },
            ].map((item, i) => (
              <div
                key={item.n}
                className="vault-feat"
                style={{
                  opacity: topVisible ? 1 : 0,
                  transform: topVisible ? "translateX(0)" : "translateX(30px)",
                  transition: `all 0.65s cubic-bezier(0.16,1,0.36,1) ${0.15 + i * 0.1}s`,
                }}
              >
                <div className="vault-num">{item.n}</div>
                <div className="vault-ftext">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
  .vault-left { position: relative; min-height: 560px; overflow: hidden; cursor: pointer; }
  .vault-left-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.9s cubic-bezier(0.16,1,0.36,1)!important; }
  .vault-left:hover .vault-left-img { transform: scale(1.07)!important; }
  .vault-left-overlay { position: absolute; inset: 0; background: linear-gradient(0deg, #0b1e48 14%, rgba(11,30,72,0.55) 52%, rgba(11,30,72,0.06) 100%); }
  .vault-left-content { position: absolute; left: 0; right: 0; bottom: 0; padding: 26px 24px; z-index: 2; transition: transform 0.4s ease; }
  .vault-left:hover .vault-left-content { transform: translateY(-5px); }
  .vault-badge { display: inline-block; background: #d60000; color: #fff; font-size: 10px; font-weight: 800; padding: 6px 12px; border-radius: 100px; margin-bottom: 14px; }
  .vault-left-content h3 { color: #fff; font-size: 28px; font-weight: 800; line-height: 1.15; margin: 0 0 8px; }
  .vault-left-content p { color: rgba(255,255,255,0.76); font-size: 16px; line-height: 1.6; margin: 0; max-width: 92%; }

  .vault-right { background: #0b1e48; display: flex; flex-direction: column; justify-content: center; padding: 20px 18px; border-left: 1px solid rgba(255,255,255,0.08); }
  .vault-right-head { padding: 4px 12px 14px; }
  .vault-right-head span { color: #ff3b3b; font-size: 11px; font-weight: 800; letter-spacing: 0.8px; display: block; margin-bottom: 6px; }
  .vault-right-head h4 { color: #fff; font-size: 44px; font-weight: 700; line-height: 1.25; margin: 0; }

  .vault-feat { display: grid; grid-template-columns: 44px 1fr; gap: 14px; padding: 18px 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.04); margin-bottom: 10px; transition: all 0.38s cubic-bezier(0.22,1,0.36,1)!important; cursor: pointer; align-items: center; }
  .vault-feat:last-child { margin-bottom: 0; }
  .vault-feat:hover { background: rgba(255,255,255,0.08)!important; border-color: rgba(255,255,255,0.16)!important; transform: translateX(8px)!important; }
  .vault-num { width: 36px; height: 36px; border-radius: 10px; background: #d60000; border: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 900; color: #ffffff; transition: all 0.32s ease; }
  .vault-feat:hover .vault-num { background: #d60000; border-color: #d60000; color: #fff; transform: scale(1.06); }
  .vault-ftext h5 { color: #fff; font-size: 18px; font-weight: 700; margin: 0 0 4px; line-height: 1.3; }
  .vault-ftext p { color: rgba(255,255,255,0.62); font-size: 16px; line-height: 1.55; margin: 0; }

  @media (max-width: 1024px){
    .vault-wrap { grid-template-columns: 1fr!important; border-radius: 18px!important; }
    .vault-left { min-height: 360px!important; }
    .vault-right { border-left: 0!important; border-top: 1px solid rgba(255,255,255,0.08); padding: 16px 14px!important; }
    .vault-feat { padding: 16px 14px!important; }
  }
  @media (max-width: 640px){
    .vault-left { min-height: 280px!important; }
    .vault-left-content { padding: 18px 16px!important; }
    .vault-left-content h3 { font-size: 21px!important; }
    .vault-left-content p { font-size: 12.5px!important; }
    .vault-right-head h4 { font-size: 25px!important; }
    .vault-feat { grid-template-columns: 36px 1fr!important; gap: 10px!important; padding: 14px 12px!important; border-radius: 12px!important; }
    .vault-feat:hover { transform: translateX(4px)!important; }
    .vault-ftext h5 { font-size: 15px!important; font-weight: 700!important; }
    .vault-ftext p { font-size: 13px!important; line-height: 1.5!important; }
    .vault-num { width: 32px!important; height: 32px!important; font-size: 11px!important; }
  }
`}</style>
      </section>
      {/* 1ST SECTION - LEFT FROM LEFT, RIGHT CARDS FROM RIGHT */}
      
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
          <h2 className="main-heading-3 anim-up">Protection For Every Shipment</h2>
          <p className="main-desc anim-up d1" style={{ textAlign: "center" }}>
            How Enclosed Vault Transport Works — In 4 Simple Steps
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
                t: "Get Vault Quote",
                d: "Instant enclosed pricing — $2M coverage, no hidden fees",
              },
              {
                t: "Reserve Your Vault",
                d: "Lock trailer — only 2-6 cars, hard-sided & sealed",
              },
              {
                t: "Lift-Gate Pickup",
                d: "No ramps, no touch — inspected & soft wheel-netted",
              },
              {
                t: "White-Glove Delivery",
                d: "Same driver, sealed transit, video updates till delivery",
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
      .step-title { font-size: 15px!important; font-weight: 700!important; }
      .step-desc { font-size: 13px!important; line-height: 1.6!important; }
    }
  `}</style>
      </section>

       {/* 6 CARDS - ENCLOSED */}
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
             For Shipments You Can't Risk
            </h2>
            <p className="premium-desc">
              Enclosed vault — sealed, lift-gate, insured & white-glove from pickup to delivery
            </p>
          </div>

          <div className="cards-grid-pro">
            {[
              { icon: ShieldCheck, text: "Full Armor Enclosure — 4-wall aluminum vault, no mesh or tarp, zero exposure." },
              { icon: Truck, text: "Hydraulic Lift-Gate — no ramps ever, safe for 3-inch exotic clearance." },
              { icon: BadgeDollarSign, text: "Soft-Strap Custody — wheel nets only, zero frame contact, same driver." },
              { icon: ShieldCheck, text: "2-6 Cars Vault Only — more space, less movement, dedicated room." },
              { icon: Truck, text: "$2M Insured & Tracked — live tracking + video updates on request." },
              { icon: BadgeDollarSign, text: "Zero Exposure Transit — no sun, rain, dust, rocks or prying eyes." },
            ].map((step, i) => {
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
              How Much Does Vault Shipping Cost?
            </h2>
            <p className="charge-desc-diff">
              Vault shipping cost depends on protection level, not just distance. At Stateside, we price enclosed based on size, vault space, and route — with $2M coverage included, no hidden fees.
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
                title: "Size & Clearance",
                desc: "Low clearance, oversize, or high-value builds need extra vault space and soft handling.",
              },
              {
                icon: CircleDot,
                title: "Vault Space Used",
                desc: "2-6 spot vault only — more dedicated space means max protection and less movement.",
              },
              {
                icon: MapPinned,
                title: "Distance & Route",
                desc: "Longer routes with sealed transit, same driver, and lift-gate service factor into final cost.",
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

   .charge-heading-diff { color: #0b1e48; font-size: 44px; font-weight: 800; line-height: 1.12; margin: 0 0 12px; letter-spacing: -0.4px; text-align: left; }
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
