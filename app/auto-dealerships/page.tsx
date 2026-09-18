"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Network,
  ShieldCheck,
  Zap,
  DollarSign,
  Headphones,
  FileCheck,
  Globe2,
  Truck,
  Calculator,
  Building2,
  BadgeCheck,
} from "lucide-react";

export default function DealershipsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const dealershipFaqs = [
    {
      q: "How does auto transport work for car dealerships?",
      a: "We manage end-to-end vehicle logistics for dealerships—including carrier vetting, scheduling, insurance verification, and real-time tracking—ensuring seamless inventory movement without administrative stress.",
    },
    {
      q: "Can you handle multi-car dealership inventory shipments?",
      a: "Yes, whether you need single-car dealer trades or full multi-car haulers across state lines, our large carrier network accommodates any volume requirements.",
    },
    {
      q: "How quickly can we get a transport quote?",
      a: "Our advanced cost calculator and dedicated broker team provide instant, transparent quotes tailored to current lane rates and seasonal market trends.",
    },
    {
      q: "Are all carriers in your network fully insured?",
      a: "Every carrier undergoes rigorous pre-vetting for active FMCSA licensing, safety compliance, and comprehensive cargo insurance to protect your valuable inventory.",
    },
  ];

  const advantages = [
    {
      icon: Network,
      number: "01",
      title: "Massive Carrier Network",
      description:
        "Connect with vetted carriers coast-to-coast. Eliminate inventory downtime with rapid driver assignment.",
    },
    {
      icon: DollarSign,
      number: "02",
      title: "Optimal Market Rates",
      description:
        "Multi-carrier price comparison ensures maximum route economy aligned with live market trends.",
    },
    {
      icon: Headphones,
      number: "03",
      title: "Single Point Contact",
      description:
        "Dedicated account managers handle scheduling, compliance, and real-time transit telemetry.",
    },
    {
      icon: Zap,
      number: "04",
      title: "High-Velocity Execution",
      description:
        "Seamlessly dispatch single-car dealer trades or multi-car transport rigs on short notice.",
    },
    {
      icon: ShieldCheck,
      number: "05",
      title: "Proactive Resolution",
      description:
        "Immediate broker intervention for weather delays, route shifts, or carrier adjustments.",
    },
    {
      icon: BadgeCheck,
      number: "06",
      title: "Rigorous Safety Vetting",
      description:
        "Strict FMCSA safety rating checks and active cargo insurance validation prior to loading.",
    },
    {
      icon: FileCheck,
      number: "07",
      title: "Digital Paperwork",
      description:
        "Instant electronic quotes, digital BOL signing, and automated dispatch tracking.",
    },
    {
      icon: Globe2,
      number: "08",
      title: "50-State Logistics",
      description:
        "Scalable transport coverage for dealership groups operating across multiple regional hubs.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] font-sans text-slate-800 selection:bg-[#CA0003] selection:text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="group relative min-h-[430px] w-full overflow-hidden bg-[#01162F]">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.20] transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#01162F] via-[#01162F]/95 to-[#01162F]/40" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Decorative glow */}
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#CA0003]/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[430px] w-full max-w-[1350px] items-center px-5 py-16 sm:px-8 lg:px-10">

          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_340px]">

            {/* Hero Content */}
            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CA0003] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CA0003]" />
                </span>
                Corporate Dealership Fleet Logistics
              </div>

              <h1 className="text-[35px] font-black leading-[1.08] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[52px]">
                Premier Auto Transport for{" "}
                <span className="text-[#CA0003]">
                  Dealerships
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] leading-7 text-slate-300 sm:text-[17px]">
                Scale your inventory logistics nationwide with instant digital
                quoting, pre-vetted carriers, and dedicated account managers.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#calculator"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#CA0003] px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ad0003] hover:shadow-xl hover:shadow-[#CA0003]/20"
                >
                  Calculate Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#obstacles"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                >
                  Solutions Overview
                </a>

              </div>

            </div>

            {/* Hero Stats */}
            <div className="hidden lg:block">

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">

                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CA0003]/10 text-[#CA0003]">
                    <Truck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Network Performance
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-white">
                      Built for dealerships
                    </p>
                  </div>
                </div>

                <div className="space-y-5">

                  <div className="border-b border-white/10 pb-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Network Reliability
                    </p>
                    <p className="mt-1 text-2xl font-black text-white">
                      99.4%
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      On-time performance
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Active Fleet Capacity
                    </p>
                    <p className="mt-1 text-2xl font-black text-white">
                      15,000+
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Carriers available
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main className="mx-auto max-w-[1350px] space-y-16 px-5 py-14 sm:px-8 lg:px-10">

        {/* =====================================================
            OPERATIONAL OBSTACLES
        ===================================================== */}
        <section
          id="obstacles"
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >

          <div className="absolute left-0 top-0 h-full w-1 bg-[#CA0003]" />

          <div className="p-7 sm:p-10">

            <div className="mb-9 flex flex-col justify-between gap-4 border-b border-slate-100 pb-7 md:flex-row md:items-end">

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#CA0003]">
                  Seamless Fleet Operations
                </span>

                <h2 className="mt-2 text-[25px] font-black tracking-tight text-[#0b1e48] sm:text-[44px]">
                  Overcome Operational Obstacles
                </h2>
              </div>

              <p className="max-w-md text-[13px] md:text-[16px] leading-6 text-[#475569]">
                Streamline dealership logistics through our centralized
                network and eliminate dispatch bottlenecks.
              </p>

            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

              {[
                {
                  number: "01",
                  label: "Capacity",
                  title: "Nationwide Carrier Network",
                  text: "Gain instant access to thousands of licensed transporters instead of relying on a single carrier. Benefit from faster pickup and optimal pricing.",
                  icon: Network,
                },
                {
                  number: "02",
                  label: "Execution",
                  title: "Full Logistics Delegation",
                  text: "We manage scheduling, dispatch paperwork, insurance checks, and carrier tracking so your sales team stays focused on showroom sales.",
                  icon: Headphones,
                },
                {
                  number: "03",
                  label: "Protection",
                  title: "Compliance & Risk Mitigation",
                  text: "Every carrier undergoes multi-point safety vetting for active FMCSA licensing and cargo insurance to protect high-value inventory.",
                  icon: ShieldCheck,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group relative border-l-2 border-slate-200 pl-6 transition-all duration-300 hover:border-[#CA0003]"
                  >

                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#01162F]/5 text-[#01162F] transition-all duration-300 group-hover:bg-[#CA0003] group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400 group-hover:text-[#CA0003]">
                        {item.number} / {item.label}
                      </span>
                    </div>

                    <h3 className="text-[18px] font-extrabold text-[#02254F] transition-colors group-hover:text-[#CA0003]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-slate-500">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* =====================================================
            ADVANTAGES
        ===================================================== */}
        <section>

          <div className="mx-auto mb-9 max-w-2xl text-center">

            <span className="inline-flex rounded-full border border-[#CA0003]/15 bg-[#CA0003]/5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#CA0003]">
              Built For Fleet Operators
            </span>

            <h2 className="mt-3 text-[25px] font-black tracking-tight text-[#0b1e48] sm:text-[44px]">
              Key Advantages for Dealerships
            </h2>

            <p className="mt-3 text-[13px] md:text-[16px] leading-6 text-[#475569]">
              Everything your dealership needs to move inventory faster,
              safer, and more efficiently.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#CA0003]/30 hover:shadow-xl"
                >

                  {/* Top Accent */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#CA0003] transition-all duration-300 group-hover:w-full" />

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#01162F]/5 text-[#01162F] transition-all duration-300 group-hover:bg-[#CA0003] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[11px] font-black tracking-widest text-slate-300">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-5 text-[17px] font-extrabold leading-6 text-[#02254F] transition-colors group-hover:text-[#CA0003]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] md:text-[14px] leading-6 text-slate-500">
                    {item.description}
                  </p>

                  {/* <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-[11px] font-bold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-[#CA0003]">
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div> */}

                </div>
              );
            })}

          </div>

        </section>

        {/* =====================================================
            CALCULATOR CTA
        ===================================================== */}
        <section
          id="calculator"
          className="relative overflow-hidden rounded-2xl bg-[#01162F] shadow-xl"
        >

          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#CA0003]/10 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 py-12 text-center sm:px-10 sm:py-14">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#CA0003] ring-1 ring-white/10">
              <Calculator className="h-6 w-6" />
            </div>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#CA0003]">
              Fast & Accurate Estimates
            </span>

            <h2 className="mt-2 text-[25px] font-black tracking-tight text-white sm:text-[44px]">
              Advanced & Reliable Cost Calculator
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] md:text-[16px] leading-7 text-white">
              Generate precise lane shipping estimates instantly. Streamline
              transport budgeting across multi-vehicle shipments without
              manual broker call delays.
            </p>

            <button className="group mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-[#CA0003] px-7 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ad0003] hover:shadow-xl hover:shadow-[#CA0003]/30">
              Calculate Your Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </div>
        </section>

      </main>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-[1050px] px-5 sm:px-8">

          <div className="mx-auto mb-10 max-w-2xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#CA0003]/15 bg-[#CA0003]/5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#CA0003]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Frequently Asked
            </span>

            <h2 className="mt-4 text-[25px] font-black tracking-tight text-[#0b1e48] sm:text-[44px]">
              Dealership Transport FAQs
            </h2>

            <p className="mt-3 text-[13px] md:text-[16px] leading-6 text-[#475569]">
              Answers to common questions about dealership vehicle
              transportation and logistics.
            </p>

          </div>

          <div className="space-y-3">

            {dealershipFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#CA0003]/25 bg-white shadow-lg shadow-slate-900/5"
                      : "border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-white"
                  }`}
                >

                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >

                    <div className="flex items-center gap-4">

                      <span
                        className={`hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-black sm:flex ${
                          isOpen
                            ? "bg-[#CA0003] text-white"
                            : "bg-[#01162F]/5 text-[#01162F]"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-[15px] font-extrabold leading-6 transition-colors sm:text-[16px] ${
                          isOpen
                            ? "text-[#CA0003]"
                            : "text-[#02254F]"
                        }`}
                      >
                        {faq.q}
                      </span>

                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#CA0003] text-white shadow-md shadow-[#CA0003]/20"
                          : "bg-slate-100 text-[#02254F]"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>

                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6 sm:pl-[76px]">
                        <p className="text-[14px] leading-7 text-slate-500 sm:text-[15px]">
                          {faq.a}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

    </div>
  );
}
