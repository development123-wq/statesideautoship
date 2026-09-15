"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Network,
  BadgeDollarSign,
  Headphones,
  Zap,
  Calculator,
  Building2,
  Mail,
} from "lucide-react";

export default function RentalFleetPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const rentalFaqs = [
    {
      q: "How does fleet transport work for car rental companies?",
      a: "We manage complete fleet logistics—including seasonal repositioning, inter-branch transfers, and vehicle maintenance transport. Our team handles carrier dispatch, paperwork, insurance verification, and real-time tracking.",
    },
    {
      q: "Can you handle bulk or multi-vehicle fleet relocations?",
      a: "Yes, we specialize in high-volume and bulk transport, coordinating multiple carriers to move entire fleets seamlessly across local or nationwide rental locations.",
    },
    {
      q: "How quickly can you arrange fleet pickup and transfers?",
      a: "Thanks to our extensive nationwide carrier network, we can arrange rapid dispatch—often securing drivers within 24 to 48 hours for urgent operational demands.",
    },
    {
      q: "Are the vehicles fully insured during fleet transport?",
      a: "Absolutely. Every carrier in our network undergoes strict vetting for proper licensing and carries comprehensive cargo liability insurance to protect your fleet during transit.",
    },
    {
      q: "What payment options are available for ongoing fleet logistics?",
      a: "We offer flexible payment options tailored for businesses, including QuickPay and Direct Deposit, ensuring smooth and hassle-free financial processing.",
    },
  ];

  const benefits = [
    {
      icon: Network,
      title: "Large Carrier Network",
      description:
        "Connect your rental business with hundreds of licensed carriers nationwide for faster availability and optimized routes.",
      points: [
        "Hundreds of licensed carriers",
        "Optimized routes",
        "Reduced delays",
      ],
    },
    {
      icon: BadgeDollarSign,
      title: "Cost-Effective Pricing",
      description:
        "Compare multiple carrier rates to find the best value for every route while efficiently managing high-volume transportation.",
      points: [
        "Competitive pricing",
        "Cost optimization",
        "Bulk transport rates",
      ],
    },
    {
      icon: Headphones,
      title: "Simplified Logistics",
      description:
        "Get one dedicated point of contact who manages scheduling, insurance, paperwork, carrier coordination, and updates.",
      points: [
        "Single point of contact",
        "Comprehensive logistics",
        "Paperwork handling",
      ],
    },
    {
      icon: Zap,
      title: "Flexibility & Speed",
      description:
        "Coordinate multiple vehicles across locations and handle urgent or last-minute fleet transfers with confidence.",
      points: [
        "Multi-location coordination",
        "Urgent transport capability",
        "Last-minute scheduling",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-800 font-sans selection:bg-[#CA0003] selection:text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[430px] flex items-center overflow-hidden bg-[#01162F]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.20]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01162F] via-[#01162F]/95 to-[#01162F]/45" />

        {/* Decorative Glow */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#CA0003]/10 blur-3xl" />
        <div className="absolute -left-40 -bottom-40 h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-3xl" />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1350px] items-center px-5 py-20 sm:px-8 lg:px-10">

          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CA0003] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CA0003]" />
              </span>
              Fleet Logistics & Transport
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-[34px] font-black leading-[1.08] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[52px]">
              Streamlined Fleet Logistics for{" "}
              <span className="text-[#CA0003]">
                Rental Companies
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-[#ffffff] sm:text-[16px]">
              Managing a car rental fleet requires constant movement of
              vehicles between locations. We simplify logistics with
              nationwide coverage.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#calculator"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#CA0003] px-6 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ad0003] hover:shadow-xl hover:shadow-[#CA0003]/20"
              >
                Calculate Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#reasons"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                Why Choose Us
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-[1350px] space-y-16 px-5 py-14 sm:px-8 lg:px-10">

        {/* ================= INTRO ================= */}
        <section
          id="reasons"
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-[#CA0003]" />

          <div className="grid lg:grid-cols-[0.8fr_1.6fr]">

            <div className="flex items-center bg-[#01162F] p-7 sm:p-10">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#CA0003]/10 text-[#CA0003]">
                  <Building2 className="h-6 w-6" />
                </div>

                <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                  Fleet Transportation Built Around Your Business
                </h2>

                <div className="mt-5 h-1 w-12 rounded-full bg-[#CA0003]" />
              </div>
            </div>

            <div className="space-y-4 p-7 sm:p-10">
              <p className="text-[13px] md:text-[16px] leading-7 text-slate-600 sm:text-[16px]">
                Managing a car rental fleet requires constant movement of
                vehicles between locations, seasonal repositioning, or
                transfers for maintenance and sales. United Freeway
                Transportation connects rental companies with a nationwide
                network of licensed and insured carriers, simplifying fleet
                logistics and ensuring vehicles arrive on time, in perfect
                condition.
              </p>

              <p className="text-[13px] md:text-[16px] leading-7 text-slate-600 sm:text-[16px]">
                By handling scheduling, paperwork, insurance verification, and
                carrier coordination, the company removes the burden of
                managing multiple carriers and lets your team focus on
                operations, customer service, and fleet management.
              </p>

              <p className="text-[13px] md:text-[16px] leading-7 text-slate-600 sm:text-[16px]">
                Rental companies also benefit from the flexibility and
                expertise that United Freeway Transportation provides. Whether
                transferring multiple vehicles between branches, responding to
                last-minute demand shifts, or moving cars for seasonal
                repositioning, the company ensures smooth, reliable, and
                cost-effective transport.
              </p>
            </div>

          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section>

          <div className="mx-auto mb-8 max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-[#CA0003]/15 bg-[#CA0003]/5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#CA0003]">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-[25px] font-black tracking-tight text-[#0b1e48] sm:text-[42px]">
              Why Car Rental Companies Choose United Freeway Transportation
            </h2>

            <p className="mt-3 text-[13px] md:text-[16px] leading-6 text-[#475569]">
              Reliable fleet transportation backed by nationwide coverage,
              flexible logistics, and dedicated support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#CA0003]/30 hover:shadow-xl"
                >

                  {/* Top Accent */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#CA0003] transition-all duration-300 group-hover:w-full" />

                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#01162F]/5 text-[#01162F] transition-all duration-300 group-hover:bg-[#CA0003] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-[17px] font-extrabold leading-6 text-[#01162F]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-[13px] md:text-[14px] leading-6 text-slate-500">
                    {benefit.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {benefit.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-2 text-[13px] font-medium text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#CA0003]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              );
            })}

          </div>
        </section>

        {/* ================= CALCULATOR CTA ================= */}
        <section
          id="calculator"
          className="relative overflow-hidden rounded-2xl bg-[#01162F] shadow-xl"
        >

          {/* Decorative Elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#CA0003]/10 blur-2xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-500/5 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-3xl px-6 py-12 text-center sm:px-10 sm:py-14">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#CA0003] ring-1 ring-white/10">
              <Calculator className="h-6 w-6" />
            </div>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#CA0003]">
              Fast & Accurate Estimates
            </span>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Advanced and Reliable Cost Calculator
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[13px] md:text-[16px] leading-7 text-slate-300">
              Generates accurate transport estimates in seconds. Helps plan
              transport budgets efficiently without waiting for multiple
              quotes.
            </p>

            <button className="group mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-[#CA0003] px-7 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ad0003] hover:shadow-xl hover:shadow-[#CA0003]/30">
              Calculate Your Fleet Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </div>
        </section>

       

      </main>

      {/* ================= FAQ ================= */}
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-[1050px] px-5 sm:px-8">

          {/* Header */}
          <div className="mx-auto mb-10 max-w-5xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#CA0003]/15 bg-[#CA0003]/5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#CA0003]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Got Questions?
            </span>

            <h2 className="mt-4 text-[25px] font-black tracking-tight text-[#0b1e48] sm:text-[44px]">
              Fleet Logistics Frequently Asked Questions
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-[#475569] sm:text-[16px]">
              Everything you need to know about our corporate car transport
              and fleet relocations.
            </p>

          </div>

          {/* Accordion */}
          <div className="space-y-3">

            {rentalFaqs.map((faq, idx) => {
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
                        className={`hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-black sm:flex ${
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
                            : "text-[#01162F]"
                        }`}
                      >
                        {faq.q}
                      </span>

                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#CA0003] text-white shadow-md shadow-[#CA0003]/20"
                          : "bg-slate-100 text-[#01162F]"
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
                        <p className="text-[13px] leading-7 text-slate-500 sm:text-[16px]">
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
