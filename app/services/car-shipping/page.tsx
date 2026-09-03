import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Reviews from "@/components/Review/Reviews";
import FaqSection from '@/components/Homepage/FaqSection';
import ShippingCostsTransit from "@/components/ShippingCostsTransit";

const myFaqs = [
  { 
    id: 1, 
    question: "How long does car shipping take?", 
    answer: "Typical car shipping takes 1-7 days depending on distance. Cross-country shipments usually take 5-7 days, while shorter distances can be completed in 1-3 days." 
  },
  { 
    id: 2, 
    question: "Is my car insured during transport?", 
    answer: "Yes, all our carriers are fully insured and licensed. Your vehicle is covered by carrier insurance throughout the entire shipping process." 
  },
  { 
    id: 3, 
    question: "Can I put personal items in my car?", 
    answer: "You can place up to 100 lbs of personal items in the trunk, but they won't be covered by insurance. The items must be below window level." 
  },
  { 
    id: 4, 
    question: "What's the difference between open and enclosed transport?", 
    answer: "Open transport is more economical and exposes your car to weather elements. Enclosed transport provides complete protection from weather and road debris, ideal for luxury or classic cars." 
  },
  { 
    id: 5, 
    question: "How do I prepare my car for shipping?", 
    answer: "Remove personal items, clean your car, document existing damage with photos, ensure the gas tank is 1/4 full, and disable alarms." 
  },
];



export default function AboutUsPage() {
  return (
    <main>
      {/* Hero */}
      <HomeBanner
        title="Professional Car Shipping Services"
        desc="Ship your car with confidence. Our experienced specialists handle thousands of vehicles shipments annually with a perfect safety record.

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
          fontFamily: "inter, sans-serif",
          boxSizing: "border-box",
        }}
      >
        <style>{`
    .hsw-card{transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease}
    .hsw-card:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(11,30,72,.12) !important;border-color:#dbe4f0 !important}
    .hsw-card:hover .hsw-icon{transform:scale(1.08);background:#0b1e48}
    .hsw-card:hover .hsw-num{background:#0b1e48}
    .hsw-icon{transition:all .25s ease}
    .hsw-num{transition:all .25s ease}
    @media(max-width:700px){
      .hsw-title{font-size:28px !important}
    }
  `}</style>

        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 50px",
          }}
        >
          <h2
            className="hsw-title"
            style={{
              fontSize: "40px",
              fontWeight: 800,
              color: "#0b1e48",
              margin: "0 0 12px",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
            }}
          >
            How Car Shipping Works?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#475569",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Our streamlined process ensures your vehicle is transported safely
            and efficiently
          </p>
        </div>

        <div
          style={{
            maxWidth: "1640px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              n: "01",
              t: "Get Your Quote",
              d: "Fill out our simple form with your car details, pickup and delivery locations. Receive an instant quote tailored to your needs.",
              i: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2 14 8 20 8",
            },
            {
              n: "02",
              t: "Book Your Shipment",
              d: "Choose your preferred shipping method (open or enclosed) and schedule your pickup date. We'll assign a professional carrier.",
              i: "M3 4h18v18H3z M3 10h18",
            },
            {
              n: "03",
              t: "Vehicle Pickup",
              d: "The assigned carrier will inspect your vehicle and load it onto the transport truck. You may get real-time updates.",
              i: "M1 3h15v13H1z M16 8h4l3 6v5h-7V8z",
            },
            {
              n: "04",
              t: "Safe Delivery",
              d: "Your car arrives at the destination on time. Final inspection and delivery to your specified location.",
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
                boxShadow: "0 10px 30px rgba(11,30,72,0.06)",
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
                  background: "#0b1e48",
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
                  color: "#0b1e48",
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
                  color: "#475569",
                  lineHeight: 1.65,
                }}
              >
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NATIONWIDE - FINAL 1300px */}
      <section
        style={{
          width: "100%",
          padding: "40px 20px",
          background: "#fff",
          fontFamily: "'Inter', sans-serif",
          boxSizing: "border-box",
        }}
      >
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

        <div
          className="nat2-wrap"
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div
            className="nat2-sticky"
            style={{ position: "sticky", top: "100px" }}
          >
            <div
              style={{
                display: "inline-flex",
                background: "#f1f5f9",
                border: "1px solid #e2e8f0",
                padding: "6px 12px",
                borderRadius: "100px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.8px",
                color: "#0b1e48",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#d60000",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "6px",
                }}
              ></span>{" "}
              NATIONWIDE SERVICE
            </div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 800,
                color: "#0b1e48",
                lineHeight: 1.1,
                margin: "18px 0 14px",
                letterSpacing: "-0.8px",
              }}
            >
              Nationwide Auto
              <br />
              Transport Made
              <br />
              Simple
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#475569",
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              Trusted by thousands for safe, fast and affordable vehicle
              shipping across all 50 states.
            </p>

            {/* FILLS EMPTY SPACE */}
            <div
              style={{
                width: "100%",
                height: "260px",
                borderRadius: "18px",
                overflow: "hidden",
                background: "linear-gradient(135deg,#0b1e48 0%,#1e3a8a 100%)",
                position: "relative",
                marginTop: "10px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80"
                alt="transport"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.85,
                }}
              />
            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div
            className="nat2-timeline"
            style={{
              display: "grid",
              gap: "0",
              position: "relative",
              borderLeft: "1px solid #e2e8f0",
              paddingLeft: "32px",
            }}
          >
            <div
              className="nat2-row"
              style={{ position: "relative", padding: "0 0 40px 0" }}
            >
              <div
                className="nat2-line"
                style={{
                  position: "absolute",
                  left: "-33px",
                  top: "0",
                  width: "2px",
                  height: "32px",
                  background: "#e2e8f0",
                  transition: "all .3s ease",
                }}
              ></div>
              <div
                className="nat2-num"
                style={{
                  position: "absolute",
                  left: "-50px",
                  top: "0",
                  width: "32px",
                  height: "32px",
                  background: "#0b1e48",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 800,
                  transition: "all .3s ease",
                }}
              >
                01
              </div>
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#0b1e48",
                }}
              >
                Car Shipping Service in the US
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#475569",
                  lineHeight: 1.75,
                }}
              >
                The car shipping industry in the United States plays a vital
                role in helping individuals, dealerships, and businesses move
                vehicles across the country safely and efficiently. With
                millions of cars transported every year, auto transport services
                are essential for relocations, online car sales, seasonal moves,
                and fleet management. The industry connects customers with
                licensed carriers who operate nationwide, offering flexible
                solutions such as open or enclosed transport depending on
                vehicle type, distance, and budget.
              </p>
            </div>

            <div
              className="nat2-row"
              style={{ position: "relative", padding: "0 0 40px 0" }}
            >
              <div
                className="nat2-line"
                style={{
                  position: "absolute",
                  left: "-33px",
                  top: "0",
                  width: "2px",
                  height: "32px",
                  background: "#e2e8f0",
                  transition: "all .3s ease",
                }}
              ></div>
              <div
                className="nat2-num"
                style={{
                  position: "absolute",
                  left: "-50px",
                  top: "0",
                  width: "32px",
                  height: "32px",
                  background: "#0b1e48",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 800,
                  transition: "all .3s ease",
                }}
              >
                02
              </div>
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#0b1e48",
                }}
              >
                How the Car Shipping Process Works.
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#475569",
                  lineHeight: 1.75,
                }}
              >
                The process typically begins with requesting a quote based on
                vehicle details and pickup and delivery locations. Once the
                shipment is booked, a carrier is assigned to pick up the
                vehicle, followed by a pre-shipment inspection and secure
                loading. During transit, customers can track their shipment and
                stay in contact with the transport team. Upon arrival, the
                vehicle undergoes a final inspection and is delivered safely to
                the specified destination.
              </p>
            </div>

            <div
              className="nat2-row"
              style={{
                position: "relative",
                padding: "22px 22px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                marginLeft: "-8px",
              }}
            >
              <div
                className="nat2-line"
                style={{
                  position: "absolute",
                  left: "-25px",
                  top: "22px",
                  width: "2px",
                  height: "32px",
                  background: "#d60000",
                  transition: "all .3s ease",
                }}
              ></div>
              <div
                className="nat2-num"
                style={{
                  position: "absolute",
                  left: "-42px",
                  top: "22px",
                  width: "32px",
                  height: "32px",
                  background: "#d60000",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 800,
                  transition: "all .3s ease",
                }}
              >
                03
              </div>
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#0b1e48",
                }}
              >
                Why Choose United Freeway Transportation
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#475569",
                  lineHeight: 1.75,
                }}
              >
                United Freeway Transportation is a trusted auto transport
                brokerage connecting customers with reliable carriers
                nationwide. With personalized service, transparent pricing, and
                instant estimates, we simplify the entire shipping process. Our
                experienced agents monitor every shipment, ensuring smooth
                communication and timely delivery. Whether you're an individual,
                dealership, or business partner, United Freeway Transportation
                offers a professional, stress-free experience tailored to your
                needs.
              </p>
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
                How Much Does it Cost to{" "}
                <span style={{ color: "#d60000" }}>Ship a Car</span>?
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <div
                  className="cost-icon"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "#d60000",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
               
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0b1e48",
                }}
              >
                Distance
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13.5px",
                  color: "#475569",
                  lineHeight: 1.6,
                }}
              >
                Longer distances typically cost more, but the per-mile rate
                decreases for longer trips.
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <div
                  className="cost-icon"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "#d60000",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M14 16H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="17.5" cy="16.5" r="2.5" />
                  </svg>
                </div>
                
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0b1e48",
                }}
              >
                Vehicle Size
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13.5px",
                  color: "#475569",
                  lineHeight: 1.6,
                }}
              >
                Larger vehicles like SUVs and trucks cost more to ship than
                compact cars.
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <div
                  className="cost-icon"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "#d60000",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  </svg>
                </div>
               
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0b1e48",
                }}
              >
                Shipping Method
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13.5px",
                  color: "#475569",
                  lineHeight: 1.6,
                }}
              >
                Enclosed transport costs 30-40% more than open transport but
                offers maximum protection.
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <div
                  className="cost-icon"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "#d60000",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0b1e48",
                }}
              >
                Season & Timing
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13.5px",
                  color: "#475569",
                  lineHeight: 1.6,
                }}
              >
                Summer months and flexible scheduling can help you save on
                shipping costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      
{/* SHIPPING TABS - FIXED VISIBILITY + ACTIVE BUG + PREMIUM */}
<ShippingCostsTransit
  shipData={[
    ["Los Angeles, CA","New York, NY","$1,850","$0.66"],
    ["New York, NY","Chicago, IL","$400","$0.51"],
    ["Chicago, IL","Miami, FL","$650","$0.53"],
    ["Miami, FL","Dallas, TX","$450","$0.52"],
    ["Dallas, TX","Boston, MA","$875","$0.49"],
    ["Boston, MA","Seattle, WA","$2,050","$0.70"],
    ["Seattle, WA","Los Angeles, CA","$725","$0.58"],
  ]}
  transitData={[
    ["0 - 799 Miles","1 - 4 Days"],
    ["800 - 1,499 Miles","4 - 7 Days"],
    ["1,500 - 2,399 Miles","6 - 10 Days"],
    ["2,400 Miles and Up","10 - 15 Days"],
  ]}
/>

      <FaqSection customFaqs={myFaqs} />
    
    </main>
  );
}
