"use client";
import { useState } from "react";

type ShipRoute = [string, string, string, string];
type TransitRow = [string, string];

type Props = {
  title?: string;
  subtitle?: string;
  shipData?: ShipRoute[];
  transitData?: TransitRow[];
  defaultTab?: "ship" | "transit";
};

export default function ShippingCostsTransit({
  title = "Shipping Costs & Transit Times",
  subtitle = "Get a clear picture of what to expect. Transparent pricing and realistic delivery windows.",
  defaultTab = "ship",
  shipData = [
    ["Los Angeles, CA", "New York, NY", "$3,200", "$1.14"],
    ["New York, NY", "Chicago, IL", "$1,800", "$1.15"],
    ["Chicago, IL", "Denver, CO", "$2,100", "$1.32"],
    ["Denver, CO", "Seattle, WA", "$2,500", "$1.28"],
    ["Miami, FL", "San Diego, CA", "$4,500", "$1.19"],
    ["Boston, MA", "Phoenix, AZ", "$4,000", "$1.25"],
    ["Houston, TX", "Portland, OR", "$3,800", "$1.32"],
  ],
  transitData = [
    ["0 - 500 Miles", "3 - 6 Days"],
    ["500 - 1,000 Miles", "6 - 10 Days"],
    ["1,000 - 2,000 Miles", "10 - 15 Days"],
    ["2,000 Miles and Up", "15 - 21 Days"],
  ],
}: Props) {
  const [tab, setTab] = useState(defaultTab);
  return (
    <section style={{ width:"100%", padding:"0px 20px 60px 20px", background:"#f8fafc", fontFamily:"'Inter', sans-serif", boxSizing:"border-box" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');
     .tabBtn{transition:all.25s ease; color:#475569; background:transparent; border:none}
     .tabBtn.activeTab{background:#062d57!important; color:#ffffff!important; box-shadow:0 6px 16px rgba(6,45,87,.25)}
     .shipRow{transition:all.2s ease}
     .shipRow:hover{background:#f1f5f9!important; transform:translateX(3px)}
     .transitBox{transition:all.25s ease}
     .transitBox:hover{transform:translateY(-2px); box-shadow:0 12px 28px rgba(6,45,87,.10); border-color:#062d57!important}
        @media(max-width:700px){.shipHead,.shipRow{grid-template-columns:1fr 1fr!important}.shipHead div:last-child,.shipRow div:last-child{display:none}}
      `}</style>
      <div style={{ maxWidth:"1300px", margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:"20px", flexWrap:"wrap", marginBottom:"28px" }}>
          <div><h2 style={{ fontSize:"2.8rem", fontWeight:800, color:"#062d57", margin:"12px 0 8px", lineHeight:1.15 }}>{title}</h2><p style={{ fontSize:"16px", color:"#64748b", margin:0, lineHeight:1.6, maxWidth:"460px" }}>{subtitle}</p></div>
          <div style={{ background:"#ffffff", border:"1px solid #e2e8f0", padding:"5px", borderRadius:"100px", display:"inline-flex", gap:"4px" }}>
            <button onClick={() => setTab("ship")} className={`tabBtn ${tab==="ship"?"activeTab":""}`} style={{ padding:"10px 22px", borderRadius:"100px", cursor:"pointer", fontWeight:700, fontSize:"13px" }}>Shipping Distance</button>
            <button onClick={() => setTab("transit")} className={`tabBtn ${tab==="transit"?"activeTab":""}`} style={{ padding:"10px 22px", borderRadius:"100px", cursor:"pointer", fontWeight:700, fontSize:"13px" }}>Transit Time</button>
          </div>
        </div>
        <div style={{ background:"#ffffff", border:"1px solid #e2e8f0", borderRadius:"20px", overflow:"hidden", boxShadow:"0 10px 30px rgba(6,45,87,.06)" }}>
          {tab==="ship"? (
            <>
              <div style={{ padding:"18px 24px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #eef2f7" }}><h3 style={{ margin:0, fontSize:"17px", fontWeight:800, color:"#062d57" }}>Average Shipping Costs</h3><span style={{ fontSize:"11px", fontWeight:700, background:"#f1f5f9",color:"rgb(6, 45, 87)", border:"1px solid #e2e8f0", padding:"6px 10px", borderRadius:"100px" }}>{shipData.length} POPULAR ROUTES</span></div>
              <div className="shipHead" style={{ display:"grid", gridTemplateColumns:"1.2fr 1.2fr 0.8fr 0.8fr", gap:"10px", padding:"12px 24px", background:"#f8fafc", fontSize:"11px", fontWeight:800, color:"#062d57", borderBottom:"1px solid #e2e8f0" }}><div>ORIGIN</div><div>DESTINATION</div><div>AVERAGE COST</div><div>COST PER MILE</div></div>
              {shipData.map((r,i)=>(<div key={i} className="shipRow" style={{ display:"grid", gridTemplateColumns:"1.2fr 1.2fr 0.8fr 0.8fr", gap:"10px", padding:"16px 24px", fontSize:"14px", borderTop:"1px solid #f1f5f9", background: i%2===0? "#fff":"#fcfdff" }}><div style={{ fontWeight:600, color:"#062d57" }}>{r[0]}</div><div style={{ color:"#64748b" }}>{r[1]}</div><div style={{ fontWeight:800, color:"#062d57" }}>{r[2]}</div><div><span style={{ background:"#062d57", color:"#fff", padding:"5px 11px", borderRadius:"100px", fontSize:"12px", fontWeight:700 }}>{r[3]}</span></div></div>))}
            </>
          ) : (
            <>
              <div style={{ padding:"18px 24px", textAlign:"center", borderBottom:"1px solid #eef2f7" }}><h3 style={{ margin:0, fontSize:"17px", fontWeight:800, color:"#062d57" }}>Average Transit Times</h3></div>
              <div style={{ padding:"20px", display:"grid", gap:"10px" }}>{transitData.map((r,i)=>(<div key={i} className="transitBox" style={{ background: i%2===0? "#fff":"#f8fafc", border:"1px solid #e2e8f0", borderRadius:"10px", padding:"16px 20px", display:"flex", justifyContent:"space-between" }}><div style={{ fontSize:"14px", fontWeight:500, color:"#062d57" }}>{r[0]}</div><span style={{ fontSize:"13px", fontWeight:700, color:"#d60000" }}>{r[1]}</span></div>))}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}