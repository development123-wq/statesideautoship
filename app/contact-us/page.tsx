"use client";

import React, { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#CA0003] selection:text-white">
      
      {/* Main Container */}
      <div className="w-full max-w-[1350px] space-y-12">
        
        {/* HERO BANNER SECTION */}
        <div className="bg-[#02254F] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CA0003]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#CA0003] bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#CA0003] animate-pulse"></span>
              24/7 Logistics Support
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
              Get in Touch <span className="text-[#CA0003]">.</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Have questions about our auto transport services? Contact our dispatch team today for immediate assistance and free freight quotes.
            </p>
          </div>
        </div>

        {/* TOP QUICK INFO CARDS WITH HOVER MOTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone */}
          <a
            href="tel:02152012010"
            className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#CA0003]/40 hover:-translate-y-2 transition-all duration-300 flex items-center gap-4 cursor-pointer"
          >
            <div className="p-4 bg-[#CA0003]/10 text-[#CA0003] rounded-2xl group-hover:bg-[#CA0003] group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Phone</span>
              <span className="text-base font-extrabold text-[#02254F] group-hover:text-[#CA0003] transition-colors">(215) 201-2010</span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:allan@royalautoship.com"
            className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#CA0003]/40 hover:-translate-y-2 transition-all duration-300 flex items-center gap-4 cursor-pointer overflow-hidden"
          >
            <div className="p-4 bg-[#02254F]/10 text-[#02254F] rounded-2xl group-hover:bg-[#02254F] group-hover:text-white transition-all duration-300 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email</span>
              <span className="text-sm font-extrabold text-[#02254F] group-hover:text-[#CA0003] transition-colors truncate block">
                allan@royalautoship.com
              </span>
            </div>
          </a>

          {/* Address */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#CA0003]/40 hover:-translate-y-2 transition-all duration-300 flex items-center gap-4">
            <div className="p-4 bg-[#CA0003]/10 text-[#CA0003] rounded-2xl group-hover:bg-[#CA0003] group-hover:text-white transition-all duration-300 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Location</span>
              <p className="text-xs font-bold text-[#02254F] leading-tight">Allentown, PA 18104</p>
            </div>
          </div>

          {/* Hours */}
          <div className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#CA0003]/40 hover:-translate-y-2 transition-all duration-300 flex items-center gap-4">
            <div className="p-4 bg-[#02254F]/10 text-[#02254F] rounded-2xl group-hover:bg-[#02254F] group-hover:text-white transition-all duration-300 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Working Hours</span>
              <p className="text-xs font-bold text-[#02254F] leading-tight">Mon-Fri: 8AM-8PM EST</p>
            </div>
          </div>

        </div>

        {/* SPLIT SECTION: FORM & EMBEDDED MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: FORM (6 Columns) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#02254F]">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mt-2 mb-8">
                Fill in your details below and our dispatch managers will reach out instantly.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                  <svg className="w-14 h-14 text-emerald-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-emerald-800">Message Received!</h3>
                  <p className="text-sm text-emerald-600">
                    We have received your query and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name <span className="text-[#CA0003]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address <span className="text-[#CA0003]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
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
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Message <span className="text-[#CA0003]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your vehicle shipping needs..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] focus:bg-white transition duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#CA0003] hover:bg-[#a60002] text-white font-bold rounded-xl shadow-lg shadow-[#CA0003]/25 hover:shadow-[#CA0003]/40 transition-all duration-300 cursor-pointer text-base uppercase tracking-wider flex items-center justify-center gap-2 group active:scale-[0.99]"
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: MAP & DETAILED ADDRESS PANEL (6 Columns) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-4 border border-slate-200 shadow-lg flex flex-col space-y-4">
            
            {/* GOOGLE MAP IFRAME */}
            <div className="w-full h-80 sm:h-[400px] lg:h-full min-h-[300px] rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner group">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.9329712398535!2d-75.5447101!3d40.5872105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c43a059c2ef16b%3A0xc4eb090d810f3c02!2s4628%20Broadway%2C%20Allentown%2C%20PA%2018104!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 p-4 bg-[#02254F]/95 backdrop-blur-md text-white rounded-xl border border-white/10 shadow-lg max-w-xs">
                <p className="text-xs font-bold text-[#CA0003] uppercase tracking-wider">Main Headquarters</p>
                <p className="text-sm font-semibold mt-0.5">4628 Broadway Suite A 1069</p>
                <p className="text-xs text-slate-300">Allentown, PA 18104</p>
              </div>
            </div>

            {/* LOWER DETAILS IN MAP CARD */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Hours</p>
                <p className="text-sm font-extrabold text-[#02254F] mt-0.5">Mon-Fri: 8AM-8PM EST | Sat: 9AM-5PM EST</p>
              </div>
              <a
                href="https://maps.google.com/?q=4628+Broadway+Suite+A+1069+Allentown+PA+18104"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#02254F] hover:bg-[#011a38] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition duration-200 shrink-0"
              >
                Get Directions
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}