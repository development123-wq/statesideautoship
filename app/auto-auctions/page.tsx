"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock3, Truck, ChevronDown } from "lucide-react";

export default function AutoAuctionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const auctionFaqs = [
    {
      q: "How does auto auction vehicle shipping work?",
      a: "We manage end-to-end auction logistics—from carrier dispatch and gate release compliance to scheduling, insurance verification, and real-time tracking—ensuring your auction vehicles arrive safely without administrative delays.",
    },
    {
      q: "Can you pick up vehicles directly from major auction houses?",
      a: "Yes, we coordinate directly with major auction facilities nationwide (e.g., Manheim, Copart, IAAI). Our carriers follow all gate release protocols, stock numbers, and pick-up deadlines to avoid gate storage fees.",
    },
    {
      q: "How quickly can you arrange pick-up after an auction purchase?",
      a: "Our expansive carrier network enables rapid dispatch—often securing driver assignment within 24–48 hours to help you meet strict auction removal deadlines.",
    },
    {
      q: "What payment options are available for auction transport?",
      a: "Stateside Auto Ship offers flexible payment methods, including QuickPay and Direct Deposit options, ensuring fast processing and zero hassle.",
    },
  ];

  const benefits = [
    {
      title: "Access to a Large Carrier Network",
      points: [
        "Connects with hundreds of licensed carriers",
        "Faster availability and optimized routes",
        "Reduces downtime waiting for availability",
      ],
    },
    {
      title: "Better Pricing Through Market Reach",
      points: [
        "Compares rates across multiple carriers",
        "Leverages knowledge of lane rates",
        "Eliminates individual negotiations",
      ],
    },
    {
      title: "Simplified Logistics & One Point of Contact",
      points: [
        "Single broker contact for all shipments",
        "Handles scheduling and insurance",
        "Saves time and resources",
      ],
    },
    {
      title: "Flexibility & Speed",
      points: [
        "Coordinates multiple locations",
        "Handles urgent pickups faster",
        "Keeps auction operations on track",
      ],
    },
    {
      title: "Expertise & Problem Solving",
      points: [
        "Quickly resolves delays and issues",
        "Ensures compliance and coverage",
        "Smooth coordination throughout",
      ],
    },
    {
      title: "Risk Reduction",
      points: [
        "Vets carriers for licensing and insurance",
        "Protects inventory",
        "Acts as intermediary if issues arise",
      ],
    },
    {
      title: "Nationwide Coverage",
      points: [
        "Consistent service across states",
        "Avoids multiple carrier coordination",
        "Reliable nationwide network",
      ],
    },
    {
      title: "Advanced, Reliable Calculator",
      points: [
        "Accurate estimates in seconds",
        "Efficient budget planning",
        "No need for multiple quotes",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F7FA] text-slate-800 selection:bg-[#CA0003] selection:text-white">

      {/* HERO */}
      <section className="relative isolate min-h-[430px] overflow-hidden bg-[#061A33]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-[1200ms] hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A33] via-[#061A33]/95 to-[#061A33]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(202,0,3,0.22),transparent_30%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[430px] max-w-[1350px] items-center px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_380px]">

            {/* Hero content */}
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#CA0003]" />
                Auto Auction Vehicle Transport
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[54px]">
                Reliable Auto Transport
                <span className="block text-[#CA0003]">
                  Built for Auctions.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Fast, transparent, and hassle-free vehicle shipping solutions
                designed specifically for auction buyers, dealerships, and sellers
                nationwide.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#calculator"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#CA0003] px-6 py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(202,0,3,.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a90002] hover:shadow-[0_15px_35px_rgba(202,0,3,.35)]"
                >
                  Calculate Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#reasons"
                  className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3.5 text-xs font-black uppercase tracking-widest text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10"
                >
                  Why Partner With Us
                </a>
              </div>

              {/* Trust points */}
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#CA0003]" />
                  Vetted Carriers
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#CA0003]" />
                  Fast Dispatch
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-[#CA0003]" />
                  Nationwide Coverage
                </div>
              </div>
            </div>

            {/* Hero stats card */}
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Built for Auction Operations
                </p>

                <div className="mt-6 space-y-5">
                  <div className="border-b border-white/10 pb-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-3xl font-black text-white">24–48</p>
                        <p className="mt-1 text-sm text-slate-400">
                          Hours for driver assignment
                        </p>
                      </div>
                      <Clock3 className="mb-1 h-6 w-6 text-[#CA0003]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-3xl font-black text-white">100%</p>
                        <p className="mt-1 text-sm text-slate-400">
                          Vetted carrier network
                        </p>
                      </div>
                      <ShieldCheck className="mb-1 h-6 w-6 text-[#CA0003]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="mx-auto max-w-[1350px] space-y-20 px-4 py-14 sm:px-6 lg:px-8">

        {/* WHY US */}
        <section id="reasons">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div className="lg:sticky lg:top-8 lg:self-start">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#CA0003]">
                Auction Logistics
              </span>

              <h2 className="mt-3 text-[25px] font-black leading-tight tracking-tight text-[#0b1e48] sm:text-[44px]">
                Why Partner With a Broker for Auctions?
              </h2>

              <div className="mt-5 h-1 w-14 rounded-full bg-[#CA0003]" />

              <p className="mt-6 text-[13px] sm:text-[16px] leading-7 text-[#475569]">
                Move auction vehicles efficiently while reducing administrative
                work, transportation delays, and unnecessary storage costs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="space-y-6">
                <p className="text-[13px] md:text-[16px] leading-8 text-slate-600">
                  Working with Stateside Auto Ship can make a significant
                  difference when managing vehicles for auctions. Instead of
                  coordinating with individual carriers and handling multiple
                  shipments yourself, you gain access to a wide network of licensed
                  and insured carriers. This helps provide faster transport,
                  optimized routes, and competitive pricing for every vehicle,
                  whether it&apos;s being sent to a local or out-of-state auction.
                </p>

                <p className="text-[16px] leading-8 text-slate-600">
                  The service also provides the flexibility and expertise needed to
                  meet strict auction timing requirements. Multiple shipments,
                  last-minute pickups, carrier coordination, insurance verification,
                  paperwork, and shipment updates can all be managed through one
                  logistics partner.
                </p>
              </div>

              <div className="mt-8 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-3">
                {[
                  ["01", "Carrier Network"],
                  ["02", "Auction Coordination"],
                  ["03", "Shipment Visibility"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="rounded-xl bg-[#F7F9FC] p-4 transition-colors hover:bg-[#FFF4F4]"
                  >
                    <span className="text-xs font-black text-[#CA0003]">
                      {number}
                    </span>
                    <p className="mt-1 text-sm font-bold text-[#02254F]">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section>
          <div className="mb-8">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#CA0003]">
              Built Around Your Business
            </span>
            <h2 className="mt-2 text-[25px] md:text-[44px] font-black tracking-tight text-[#0b1e48]">
              A Smarter Way to Manage Auction Transport
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Dedicated Support",
                text: "Our Carrier Relations team puts your needs first, taking the time to understand your business requirements and helping you move vehicles efficiently.",
                image:
                  "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Quick Access to Loads",
                text: "Stateside Auto Ship works closely with SuperDispatch to post and dispatch loads through its TMS, giving carriers access to vehicles moving coast-to-coast.",
                image:
                  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "On-Time Payment",
                text: "Flexible payment options, including QuickPay and direct deposit, help carriers receive payment quickly with a streamlined process.",
                image:
                  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#CA0003]/30 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02254F]/80 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-[#02254F] transition-colors group-hover:text-[#CA0003]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {feature.text}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#CA0003]">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#CA0003]">
              Core Benefits
            </span>

            <h2 className="mt-3 text-[25px] font-black tracking-tight text-[#0b1e48] sm:text-[44px]">
              Why Auction Businesses Choose a Broker
            </h2>

            <p className="mt-4 text-[16px]md:text-[13px] leading-7 text-[#475569]">
              From carrier sourcing to shipment coordination, simplify every
              part of your vehicle transportation workflow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#CA0003]/30 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8EAEA] text-xs font-black text-[#CA0003] transition-colors group-hover:bg-[#CA0003] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#CA0003]" />
                </div>

                <h3 className="mt-5 min-h-[52px] text-[17px] font-black leading-6 text-[#02254F]">
                  {benefit.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {benefit.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-500"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#CA0003]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* CALCULATOR CTA */}
        <section
          id="calculator"
          className="relative overflow-hidden rounded-3xl bg-[#02254F] px-6 py-12 shadow-xl sm:px-12 sm:py-16"
        >
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#CA0003]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
              Fast & Transparent Pricing
            </span>

            <h2 className="mt-5 text-[25px] font-black tracking-tight text-white sm:text-[44px]">
              Get Your Auto Transport Estimate
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-[#ffffff] sm:text-[16px]">
              Generate an accurate shipping estimate in seconds and plan your
              auction transportation budget without waiting for multiple carrier
              quotes.
            </p>

            <button className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-[#CA0003] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#a90002] hover:shadow-[0_15px_35px_rgba(202,0,3,.3)]">
              Calculate Your Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#CA0003]">
              Frequently Asked
            </span>

            <h2 className="mt-3 text-[25px] font-black tracking-tight text-[#0b1e48] sm:text-[44px]">
              Auto Auction Transport FAQs
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-500">
              Answers to common questions about auction vehicle transportation.
            </p>
          </div>

          <div className="space-y-3">
            {auctionFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                    isOpen
                      ? "border-[#CA0003]/30 bg-white shadow-md"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >
                    <span className="text-[15px] font-extrabold leading-6 text-[#02254F] sm:text-base">
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen
                          ? "bg-[#CA0003] text-white"
                          : "bg-slate-100 text-[#02254F]"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-[15px] leading-7 text-slate-600">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
