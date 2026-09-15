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
  Battery,
  Wrench,
  KeyRound,
} from "lucide-react";

const myFaqs = [
  {
    id: 1,
    question: "What is dealer vault transport and how does it work?",
    answer:
      "Dealer vault is sealed, hard-sided transport built for dealership moves you can't delay. Your inventory goes inside a fully enclosed aluminum vault — lift-gate equipped, auction-ready — no open carrier, no exposure. Hard-sided, locked, same dealer-certified driver lot-to-lot.",
  },
  {
    id: 2,
    question: "Is vault transport safe for dealer inventory and trades?",
    answer:
      "Yes — built for dealer-level safety. Every unit is secured with soft wheel nets, zero frame contact, hydraulic lift-gate with no ramps, and fully sealed transit. All carriers are DOT-approved, FMCSA-registered with a damage-free record and lot-ready handling for frontline delivery.",
  },
  {
    id: 3,
    question: "Do you handle auction pickups and dealer-to-dealer trades?",
    answer:
      "Yes — we handle Manheim, Adesa and local auctions daily. Gate-ready pickup, release and paperwork handled, plus fast dealer-to-dealer trades, store-to-store transfers and overflow moves. Multi-unit vault available for high-volume lots.",
  },
  {
    id: 4,
    question: "How long does dealer vault shipping take?",
    answer:
      "Transit time depends on distance, route and unit count. Dealer vault runs with same driver, dedicated vault and direct routing for faster lot-to-lot delivery. Pickup is scheduled quickly after booking with auction gate times confirmed, with live tracking and lot ETAs available.",
  },
  {
    id: 5,
    question: "How do I prepare dealer vehicles for vault shipping?",
    answer:
      "Share VIN, lot address, gate release and contact for check-in. Remove dealer plates and personal items if needed, keep fuel low, and note frontline-ready condition. For multi-unit or auction moves, let us know in advance — we dispatch lift-gate, multi-unit ready vault with dealer custody.",
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
        title="Dealership Vehicle Transport"
        desc="Sealed vault transport for dealer trades, inventory moves, auction pickups & lot transfers — multi-unit ready, lift-gate, same-driver custody."
        bgImage="/car_carrier_delivery_arrival.jpg"
        ctaLink="/contact-us"
      />

    
      <section
        ref={midRef}
        style={{
          position: "relative",
          padding: "30px 20px",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div className="ss-grid">
            <div
              className="ss-left"
              style={{
                opacity: midVisible ? 1 : 0,
                transform: midVisible ? "translateX(0)" : "translateX(-56px)",
                transition: "all 0.75s cubic-bezier(0.16,1,0.36,1)",
              }}
            >
              <h2 className="ss-title">Built For Dealers, Not Just Drivers</h2>
              <p className="ss-para">
                Dealer-grade vault built for lot moves, trades & auction
                pickups. Same protocol used for franchise, independent &
                high-volume dealers — now for your inventory.
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    >
                      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
                      <path d="M12 17H5" />
                      <path d="M19 17h-2" />
                      <circle cx="7" cy="17" r="2" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                  </div>
                  <div className="ss-ftext">
                    <p>Dealer Trades & Lot Transfers</p>
                    <span>
                      Fast lot-to-lot moves, sealed vault, floorplan friendly &
                      protected
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M7 20h10" />
                      <path d="M12 16v4" />
                      <path d="M16 8h4" />
                      <path d="M19 8v4" />
                    </svg>
                  </div>
                  <div className="ss-ftext">
                    <p>Auction Pickup & Gate-Ready</p>
                    <span>
                      Manheim, Adesa & local auctions — paperwork & check-in
                      handled
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="ss-ftext">
                    <p>Single Custody & Lot-Ready</p>
                    <span>
                      Same driver door-to-door, sealed vault, frontline-ready
                      condition
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
                  src="/dealership_handshake_delivery_yard.jpg"
                  alt="dealership vehicle transport"
                />
                <div className="ss-price">
                  <small>Handling Type</small>
                  <strong>Dealer Fleet</strong>
                </div>
              </div>
              <div className="ss-img2">
                <img
                  src="/car_dealership_delivery.jpg"
                  alt="auction to dealer transport"
                />
                <div className="ss-check">
                  <span>✓</span> Dealer Certified
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
    .ss-ficon-pro.dark { background: #0b1e48; }
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
    .ss-price strong { color: #d60000; font-size: 14px; font-weight: 900; }
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
{/* DEALER TRANSPORT - FINAL - SAME STRUCTURE - DEALER CONTENT */}
      <section
        style={{
          background: "#f8fafc",
          padding: "40px 20px",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="inop-new-head">
            <div className="head-left">
              <h2>Every Dealer Move Has A Fast Lane.</h2>
            </div>
          </div>

          <div className="inop-bento">
            <div className="bento-left">
              <div className="bento-card">
                <div className="bento-top">
                  <div className="b-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1e48"
                      strokeWidth="2"
                    >
                      <path d="M14 7h4v10h-4" />
                      <path d="M6 7h8v10H6z" />
                      <path d="M2 11h2v2H2z" />
                      <path d="M20 11h2v2h-2z" />
                    </svg>
                  </div>
                  <span className="b-tag">DEALER TRADE</span>
                </div>
                <h4>Dealer Trades & Lot Transfers</h4>
                <p>
                  Fast lot-to-lot moves, inventory swaps & overflow transfers — sealed vault, floorplan friendly.
                </p>
                <div className="b-hover-line"></div>
              </div>
              <div className="bento-card dark">
                <div className="bento-top">
                  <div className="b-icon red">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <span className="b-tag red">AUCTION PICKUP</span>
                </div>
                <h4>Auction to Dealership</h4>
                <p>
                  Manheim, Adesa & local auctions — gate-ready pickup, paperwork handled, sealed delivery to your lot.
                </p>
                <div className="b-hover-line"></div>
              </div>
            </div>

            <div className="bento-center">
              <img
                src="/dealership_handshake_delivery_yard.jpg"
                alt="dealer vault transport"
              />
              <div className="center-overlay">
                <div className="c-top">
                  <div className="c-live">
                    <span className="dot"></span> DEALER FLEET ACTIVE
                  </div>
                  <div className="c-cable"></div>
                </div>
                <div className="c-bottom">
                  <div className="c-badge">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                    Multi-Unit • Lift-Gate • Same Driver
                  </div>
                  <h3>
                    We Move Inventory.
                    <br />
                    Not Just Cars.
                  </h3>
                  <div className="c-stats">
                    <span>✓ Sealed Vault</span>
                    <span>✓ Lot-Ready</span>
                    <span>✓ On Time</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-right">
              <div className="bento-card">
                <div className="bento-top">
                  <div className="b-icon dark">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    >
                      <circle cx="7.5" cy="7.5" r="4.5" />
                      <path d="M10.5 10.5 18 18" />
                      <path d="M14 14l3 3" />
                    </svg>
                  </div>
                  <span className="b-tag">FRONTLINE READY</span>
                </div>
                <h4>New & Used Inventory Moves</h4>
                <p>
                  Store-to-store transfers, new deliveries & used frontline — white-glove handling for lot-ready arrival.
                </p>
                <div className="b-hover-line"></div>
              </div>
              <div className="bento-card highlight">
                <div className="bento-top">
                  <div className="b-icon white">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1e48"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="b-tag white">DEALER CUSTODY</span>
                </div>
                <h4>Once In, It's Dealer-Sealed</h4>
                <p>
                  Your inventory locked in a hard-sided vault — single custody, dedicated driver, protected till check-in.
                </p>
                <div className="b-hover-line"></div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
  .inop-new-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 36px; flex-wrap: wrap; }
  .inop-new-head .head-left { flex: 1; min-width: 280px; }
  .inop-new-head span { color: #d60000; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; display: block; margin-bottom: 10px; text-transform: uppercase; }
  .inop-new-head h2 { color: #0b1e48; font-size: 44px; font-weight: 900; line-height: 1.2; letter-spacing: -1.3px; margin: 0; }
  .inop-new-head p { color: #475569; font-size: 16px; line-height: 1.6; margin: 0; max-width: 380px; flex-shrink: 0; text-align: right; }
  .inop-bento { display: grid; grid-template-columns: 0.9fr 1.2fr 0.9fr; gap: 18px; align-items: stretch; }
  .bento-left, .bento-right { display: flex; flex-direction: column; gap: 18px; height: 100%; }
  .bento-card { background: #fff; border: 1px solid #e9eef5; border-radius: 20px; padding: 22px 20px; position: relative; overflow: hidden; cursor: pointer; transition: all 0.45s cubic-bezier(0.16,1,0.36,1); display: flex; flex-direction: column; justify-content: center; flex: 1; }
  .bento-card::after { content:""; position:absolute; left:0; bottom:0; right:0; height: 3px; background: #0b1e48; transform: scaleX(0); transform-origin: left; transition: transform 0.45s ease; }
  .bento-card:hover { transform: translateY(-6px); box-shadow: 0 18px 36px rgba(11,30,72,0.12); border-color: #d60000; }
  .bento-card:hover::after { transform: scaleX(1); background: #d60000; }
  .bento-card.dark { background: #0b1e48; border-color: #0b1e48; } .bento-card.dark h4{color:#fff} .bento-card.dark p{color:rgba(255,255,255,0.68)}
  .bento-card.highlight { background: linear-gradient(135deg, #0b1e48 0%, #132f6b 100%); border-color: #0b1e48; } .bento-card.highlight h4{color:#fff} .bento-card.highlight p{color:rgba(255,255,255,0.72)}
  .bento-top { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .b-icon { width: 38px; height: 38px; min-width: 38px; border-radius: 11px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; transition: all 0.35s; }
  .b-icon.red{background:#d60000} .b-icon.dark{background:#1e293b} .b-icon.white{background:#fff}
  .bento-card:hover .b-icon{transform:scale(1.12) rotate(4deg); background:#d60000!important} .bento-card:hover .b-icon svg{stroke:#fff!important}
  .b-tag{font-size:8px;font-weight:800;letter-spacing:0.8px;padding:5px 9px;border-radius:100px;background:#f1f5f9;color:#0b1e48} .b-tag.red{background:#d60000;color:#fff} .b-tag.white{background:rgba(255,255,255,0.14);color:#fff;border:1px solid rgba(255,255,255,0.16)}
  .bento-card h4{color:#0b1e48;font-size:18px;font-weight:800;line-height:1.25;margin:0 0 8px;text-align:left} .bento-card p{font-size:16px;line-height:1.5;margin:0;text-align:left;color:#475569}
  .b-hover-line{position:absolute;left:0;top:0;bottom:0;width:4px;background:#d60000;opacity:0;transition:all 0.35s} .bento-card:hover .b-hover-line{opacity:1}
  .bento-center{position:relative;border-radius:24px;overflow:hidden;min-height:520px;border:1px solid #e9eef5;cursor:pointer;transition:all 0.5s cubic-bezier(0.16,1,0.36,1);display:flex}
  .bento-center img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.8s ease}
  .center-overlay{position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:space-between;padding:20px;background:linear-gradient(180deg,rgba(11,30,72,0.10) 0%,transparent 38%,rgba(11,30,72,0.94) 100%)}
  .c-top{display:flex;align-items:center;gap:12px} .c-live{background:#d60000;color:#fff;font-size:10px;font-weight:800;padding:7px 12px;border-radius:100px;display:flex;align-items:center;gap:6px;white-space:nowrap} .c-live .dot{width:6px;height:6px;background:#fff;border-radius:50%;display:inline-block;animation:blink 1.2s infinite} @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
  .c-cable{flex:1;height:2px;min-width:40px;background:repeating-linear-gradient(90deg,#d60000 0 8px,transparent 8px 14px);opacity:0.9}
  .c-bottom h3{color:#fff;font-size:32px;font-weight:900;line-height:0.95;margin:12px 0} .c-badge{background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.18);backdrop-filter:blur(8px);color:#fff;font-size:10px;font-weight:700;padding:7px 11px;border-radius:100px;display:inline-flex;align-items:center;gap:6px} .c-stats{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap} .c-stats span{background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.14);color:#fff;font-size:11px;font-weight:600;padding:6px 10px;border-radius:100px}
  .bento-center:hover{transform:translateY(-6px);box-shadow:0 24px 48px rgba(11,30,72,0.18);border-color:#d60000} .bento-center:hover img{transform:scale(1.08)}
  @media (max-width: 1100px){.inop-new-head{flex-direction:column!important;align-items:flex-start!important}.inop-new-head p{text-align:left!important;max-width:100%!important}.inop-bento{grid-template-columns:1fr 1fr!important}.bento-center{grid-column:1 / -1;order:-1;min-height:420px!important}}
  @media (max-width: 640px){.inop-new-head h2{font-size:26px!important;line-height:1.05!important}.inop-new-head p{font-size:13px!important}.inop-bento{grid-template-columns:1fr!important;gap:14px!important}.bento-center{min-height:340px!important;border-radius:18px!important}.center-overlay{min-height:340px!important}.bento-card{padding:18px 16px!important;border-radius:16px!important}.bento-card h4{font-size:15px!important}.bento-card p{font-size:13px!important;line-height:1.5!important}.c-bottom h3{font-size:22px!important}}
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
          <h2 className="main-heading-3 anim-up">
            Dealer-Level Protection, Every Mile
          </h2>
          <p className="main-desc anim-up d1" style={{ textAlign: "center" }}>
            How Dealer Vault Transport Works — In 4 Simple Steps
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
                t: "Get Dealer Vault Quote",
                d: "Instant dealer quote — multi-unit ready, no hidden fees, floorplan friendly",
              },
              {
                t: "Reserve Dealer Vault",
                d: "Lock your sealed vault — lift-gate equipped, auction-ready & fully enclosed",
              },
              {
                t: "Gate-Ready Lot Pickup",
                d: "Auction or lot pickup — paperwork checked, sealed loading, inspected & secured",
              },
              {
                t: "Sealed Dealer Delivery",
                d: "Same dealer-certified driver, sealed transit, lot-ready till delivery",
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
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <h2 className="premium-heading">
              For Dealer Inventory You Can't Delay
            </h2>
            <p className="premium-desc">
              Dealer vault — multi-unit, lift-gate, auction-ready, sealed care from lot to lot
            </p>
          </div>

          <div className="cards-grid-pro">
            {[
              {
                text: "Dealer Trade Ready — fast lot-to-lot moves, sealed vault, no open carrier, inventory protected between stores.",
              },
              {
                text: "Auction Pickup & Check-In — Manheim, Adesa & local auctions — gate-ready, paperwork & release handled.",
              },
              {
                text: "Multi-Unit Fleet Vault — multi-vehicle capacity for overflow, store-to-store & high-volume moves.",
              },
              {
                text: "Lift-Gate & Soft-Strap — ramp-free loading, soft-strap, frontline-ready condition on arrival.",
              },
              {
                text: "Sealed & Tracked — hard-sided sealed vault, live tracking with lot ETAs on request.",
              },
              {
                text: "Single Driver Custody — same driver lot-to-lot, no co-mingling, dedicated dealer care till check-in.",
              },
            ].map((step, i) => {
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
                      {i % 3 === 0 && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                      )}
                      {i % 3 === 1 && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                        >
                          <path d="M14 7h4v10h-4" />
                          <path d="M6 7h8v10H6z" />
                          <path d="M2 11h2v2H2z" />
                          <path d="M20 11h2v2h-2z" />
                        </svg>
                      )}
                      {i % 3 === 2 && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      )}
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h2 className="charge-heading-diff">
              What Determines Dealer Vault Pricing?
            </h2>
            <p className="charge-desc-diff">
              Dealer vault pricing reflects urgency, unit count & route, not just distance. At Stateside, dealer transport is priced by move type, lot distance, and custody level — fully enclosed, auction-ready and on schedule.
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
                Trusted by dealers
                <br />
                <span style={{ color: "#475569", fontWeight: "500" }}>
                  Franchise & independent across USA
                </span>
              </div>
            </div>
          </div>

          <div className="charge-right-diff">
            <div className="charge-line" />
            <div className="charge-item-diff">
              <div className="charge-dot">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M14 7h4v10h-4" />
                  <path d="M6 7h8v10H6z" />
                  <path d="M2 11h2v2H2z" />
                  <path d="M20 11h2v2h-2z" />
                </svg>
              </div>
              <div className="charge-card-diff">
                <h4>Move Type & Unit Count</h4>
                <p>
                  Dealer trade, inventory transfer, auction pickup or new delivery — single or multi-unit vault dedicated to your lot.
                </p>
              </div>
            </div>
            <div className="charge-item-diff">
              <div className="charge-dot">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="charge-card-diff">
                <h4>Auction Access & Vault Dedication</h4>
                <p>
                  Manheim, Adesa gate-ready, lift-gate equipped — limited capacity for fast check-in and sealed lot-to-lot custody.
                </p>
              </div>
            </div>
            <div className="charge-item-diff">
              <div className="charge-dot">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="charge-card-diff">
                <h4>Route & Dealer Custody</h4>
                <p>
                  Sealed transit with same dealer-certified driver and frontline-ready service across your entire route.
                </p>
              </div>
            </div>
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
