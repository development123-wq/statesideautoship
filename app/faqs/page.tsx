"use client";

import React, { useState } from "react";

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<number | null>(1);

  const categories = ["All", "General", "Carriers & Drivers", "Pricing & Payment", "Tracking & Delivery"];

  const faqs: FAQItem[] = [
    {
      id: 1,
      category: "Carriers & Drivers",
      question: "How do I request or book a load?",
      answer: "You can easily book a load by filling out our 'Request a Load' form on the Carrier page. Provide your USDOT number, load details, pickup/drop-off dates, and our dispatch team will confirm your booking immediately.",
    },
    {
      id: 2,
      category: "Pricing & Payment",
      question: "What payment terms do you offer to carriers?",
      answer: "We offer highly flexible payment options including QuickPay (payout within 2 business days) and standard Direct Deposit. There are zero hidden processing fees for verified carriers in our network.",
    },
    {
      id: 3,
      category: "Tracking & Delivery",
      question: "How can I track my shipment in real-time?",
      answer: "We integrate directly with SuperDispatch TMS to provide 24/7 live telemetry and real-time GPS tracking for every assigned shipment. You can monitor progress from your mobile or web dashboard.",
    },
    {
      id: 4,
      category: "General",
      question: "What types of vehicle transport do you support?",
      answer: "We handle both Open and Enclosed auto haulage coast-to-coast. Whether you are shipping single passenger vehicles, dealership fleets, or high-value exotic cars, we have specialized capacity.",
    },
    {
      id: 5,
      category: "Carriers & Drivers",
      question: "What documents are required to join your carrier network?",
      answer: "To get setup, you will need an active USDOT/MC number, a valid Certificate of Insurance (COA) listing auto liability & cargo coverage, and a completed W-9 form.",
    },
    {
      id: 6,
      category: "Pricing & Payment",
      question: "Are there any upfront fees for dispatching through your platform?",
      answer: "No, we do not charge any upfront or subscription fees to search and book loads through our network. All rate confirmations are completely transparent prior to load acceptance.",
    },
    {
      id: 7,
      category: "Tracking & Delivery",
      question: "What happens if a vehicle is delayed due to weather or transit issues?",
      answer: "Our 24/7 support team monitors all active routes. In the event of unforeseen weather or mechanical delays, both the carrier and recipient are notified instantly with updated ETAs.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#CA0003] selection:text-white">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h- bg-gradient-to-b from-blue-100/50 via-red-50/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w- space-y-8 sm:space-y-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#CA0003] bg-[#CA0003]/10 border border-[#CA0003]/20 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#CA0003] animate-pulse"></span>
            Help & Knowledgebase
          </span>
          <h1 className="text-[25px] sm:text-[44px] font-black text-[#0b1e48] tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-[#475569] text-[13px] md:text-[16px] leading-relaxed">
            Have questions about auto transport dispatch, carrier setup, or payments? Find instant answers right here.
          </p>

          <div className="relative max-w-xl mx-auto mt-6 w-full">
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200/80 shadow-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#CA0003]/30 focus:border-[#CA0003] transition duration-200"
            />
            <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* TABS - responsive scroll */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 sm:gap-3 sm:justify-center w-max sm:w-full mx-auto px-1 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat? "bg-[#02254F] text-white shadow-md shadow-[#02254F]/20 scale-105" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4 max-w-4xl mx-auto w-full">
          {filteredFaqs.length > 0? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen? "border-[#CA0003]/40 shadow-lg shadow-slate-200/80" : "border-slate-200/80 shadow-sm hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-4 sm:p-6 flex items-start justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#CA0003] bg-[#CA0003]/10 px-2.5 py-1 rounded-md shrink-0 w-fit">
                        {faq.category}
                      </span>
                      <h3 className="text-[15px] sm:text-[16px] font-bold text-[#02254F] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen? "bg-[#CA0003] text-white rotate-180" : "bg-slate-100 text-slate-500"}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-0 text-[#475569] text- sm:text- leading-relaxed border-t border-slate-100 mt-2">
                      <p className="pt-4 text-[14px]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 font-semibold">No questions found matching your criteria.</p>
              <button onClick={() => {setSearchTerm(""); setActiveCategory("All");}} className="mt-3 text-xs font-bold uppercase tracking-wider text-[#CA0003] underline cursor-pointer">
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-[#02254F] rounded-3xl p-6 sm:p-12 text-center text-white shadow-xl relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#CA0003]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl font-black tracking-tight sm:text-3xl">Still Have Questions?</h3>
            <p className="text-blue-100 text-sm">If you couldn't find the answer to your question, feel free to reach out to our 24/7 support team directly.</p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
              <a href="/contact-us" className="w-full sm:w-auto px-6 py-3.5 bg-[#CA0003] hover:bg-[#a60002] text-white font-extrabold rounded-xl transition duration-200 shadow-md text-xs uppercase tracking-wider hover:scale-105 text-center">
                Contact Support
              </a>
              <a href="tel:02152012010" className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-extrabold rounded-xl transition duration-200 border border-white/20 text-xs uppercase tracking-wider text-center">
                Call (215) 201-2010
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}