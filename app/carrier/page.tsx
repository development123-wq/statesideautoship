"use client";

import React, { useState } from "react";

export default function CarrierPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    usdot: "",
    phone: "",
    loadNumber: "",
    pickupDate: "",
    dropoffDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Carrier Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#CA0003] selection:text-white">
      
      {/* BACKGROUND DECORATIVE GLOWS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-blue-100/40 via-red-50/30 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* SECTION 1: HERO & CARRIER FORM CONTAINER */}
      <div className="w-full max-w-[1350px] bg-white rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-20">
        
        {/* Left Form Section (7 Columns) */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#CA0003] bg-[#CA0003]/10 border border-[#CA0003]/20 px-4 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#CA0003] animate-pulse"></span>
              Dispatch System
            </span>
            <h1 className="text-[25px] sm:text-[44px] font-black text-[#0b1e48] tracking-tight leading-tight">
              Request a Load
            </h1>
            <p className="text-[#475569] text-base mt-3 max-w-lg text-[13px] md:text-[16px]">
              Complete the dispatch details below to receive instant load confirmation and priority routing.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Company Name <span className="text-[#CA0003]">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                required
                placeholder="Transport Logistics Inc."
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
              />
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Contact Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="dispatch@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
              />
            </div>

            {/* USDOT & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  USDOT <span className="text-[#CA0003]">*</span>
                </label>
                <input
                  type="text"
                  name="usdot"
                  required
                  placeholder="USDOT Number"
                  value={formData.usdot}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Phone Number <span className="text-[#CA0003]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
                />
              </div>
            </div>

            {/* Load Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Load Number <span className="text-[#CA0003]">*</span>
              </label>
              <input
                type="text"
                name="loadNumber"
                required
                placeholder="e.g. 3086040-UF"
                value={formData.loadNumber}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Pick up date <span className="text-[#CA0003]">*</span>
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  required
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Drop off date <span className="text-[#CA0003]">*</span>
                </label>
                <input
                  type="date"
                  name="dropoffDate"
                  required
                  value={formData.dropoffDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Additional equipment specs or instructions..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200 resize-none"
              />
            </div>

            {/* Submit Button with Gradient Accent */}
            <button
              type="submit"
              className="w-full py-4 bg-[#CA0003] hover:bg-[#a60002] text-white font-bold rounded-xl shadow-lg shadow-[#CA0003]/25 hover:shadow-[#CA0003]/40 transition-all duration-300 cursor-pointer text-base uppercase tracking-wider mt-2 active:scale-[0.99]"
            >
              Submit Load Request
            </button>
          </form>
        </div>

        {/* Right Feature Panel (#02254F Visual Section with Red Accent Glows) */}
        <div className="lg:col-span-5 bg-[#02254F] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CA0003]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block text-[11px] uppercase font-bold tracking-widest text-[#CA0003] bg-white px-3 py-1 rounded-full mb-3 shadow-sm">
              Carrier Priority
            </span>
            <h2 className="text-[25px] md:text-[30px] font-bold text-white tracking-wide">
              Auto Transport Logistics
            </h2>
            <p className="text-blue-200 text-[13px] md:text-[16px] mt-2 leading-relaxed">
              Nationwide vehicle haulage network with guaranteed capacity and live telemetry.
            </p>
          </div>

          <div className="my-8 relative z-10 group">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519003722824-192d9978e841?q=80&w=800&auto=format&fit=crop"
                alt="Auto Transport Fleet"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02254F] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
                <p className="text-xs font-semibold text-red-300">Verified Carrier Fleet</p>
                <p className="text-sm font-bold text-white">Coast-to-Coast Enclosed & Open Hauling</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative z-10 pt-4 border-t border-white/10">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
              <span className="block text-2xl font-black text-[#CA0003]">100%</span>
              <span className="text-xs text-blue-100 uppercase font-medium mt-1">Fully Insured</span>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
              <span className="block text-2xl font-black text-white">24/7</span>
              <span className="text-xs text-blue-200 uppercase font-medium mt-1">Live Tracking</span>
            </div>
          </div>
        </div>

      </div>


      {/* SECTION 2: LIGHT FEATURES SECTION WITH RED ACCENTS */}
      <div className="w-full max-w-[1350px] space-y-12 mb-20">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#CA0003] bg-[#CA0003]/10 px-3.5 py-1.5 rounded-full">
            Our Key Advantages
          </span>
          <h2 className="text-[25px] font-extrabold text-[#0b1e48] tracking-tight sm:text-[44px] mt-3">
            Why Top Carriers Choose Us
          </h2>
          <p className="text-[#475569] sm:text-[16px] text-[13px] mt-3 text-base">
            Streamlined operations, guaranteed payments, and direct access to premium freight.
          </p>
        </div>

        {/* Feature Card 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200/80 p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-md hover:border-[#CA0003]/30 transition duration-300 group">
          <div className="lg:col-span-7 space-y-4">
            <div className="w-12 h-12 bg-[#CA0003]/10 border border-[#CA0003]/20 rounded-2xl flex items-center justify-center text-[#CA0003] font-bold text-lg group-hover:bg-[#CA0003] group-hover:text-white transition duration-300">
              01
            </div>
            <h3 className="text-2xl font-bold text-[#02254F]">Dedicated Support</h3>
            <p className="text-slate-600 leading-relaxed sm:text-[16px] text-[13px]">
              Our Carrier Relations team puts your needs first, taking the time to understand your business requirements and preferences. Work smarter and faster with a dedicated account specialist behind every dispatch.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=800&auto=format&fit=crop"
              alt="Dedicated Support Team"
              className="w-full h-64 object-cover rounded-2xl border border-slate-100 shadow-md"
            />
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200/80 p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-md hover:border-[#CA0003]/30 transition duration-300 group">
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop"
              alt="Quick Access to Loads"
              className="w-full h-64 object-cover rounded-2xl border border-slate-100 shadow-md"
            />
          </div>
          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <div className="w-12 h-12 bg-[#02254F]/10 border border-[#02254F]/20 rounded-2xl flex items-center justify-center text-[#02254F] font-bold text-lg group-hover:bg-[#02254F] group-hover:text-white transition duration-300">
              02
            </div>
            <h3 className="text-2xl font-bold text-[#02254F]">Quick Access to Loads</h3>
            <p className="text-slate-600 leading-relaxed sm:text-[16px] text-[13px]">
              Direct integration with SuperDispatch TMS allows seamless access to thousands of vehicle loads coast-to-coast. Instantly accept, track, and manage shipments right from your mobile dashboard.
            </p>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200/80 p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-md hover:border-[#CA0003]/30 transition duration-300 group">
          <div className="lg:col-span-7 space-y-4">
            <div className="w-12 h-12 bg-[#CA0003]/10 border border-[#CA0003]/20 rounded-2xl flex items-center justify-center text-[#CA0003] font-bold text-lg group-hover:bg-[#CA0003] group-hover:text-white transition duration-300">
              03
            </div>
            <h3 className="text-2xl font-bold text-[#02254F]">On-Time Guaranteed Payment</h3>
            <p className="text-slate-600 leading-relaxed sm:text-[16px] text-[13px]">
              Choose flexible payout terms including QuickPay and Direct Deposit. Get funds delivered directly to your account in as little as 2 business days with zero hidden processing fees.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
              alt="On Time Payment"
              className="w-full h-64 object-cover rounded-2xl border border-slate-100 shadow-md"
            />
          </div>
        </div>

      </div>


      {/* SECTION 3: CALL TO ACTION WITH RED ACCENT BUTTON */}
      <div className="w-full max-w-[1350px] bg-[#02254F] border border-[#02254F] rounded-3xl p-10 sm:p-14 text-center text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#CA0003]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-[25px] font-black tracking-tight sm:text-[44px]">
            Ready to Move Your Next Load?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Join our nationwide network today for fast load booking, transparent rates, and round-the-clock support.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block mt-4 px-8 py-4 bg-[#CA0003] hover:bg-[#a60002] text-white font-extrabold rounded-xl transition duration-200 cursor-pointer shadow-lg shadow-[#CA0003]/30 uppercase tracking-wider text-sm active:scale-95"
          >
            Submit Request Above
          </button>
        </div>
      </div>

    </div>
  );
}