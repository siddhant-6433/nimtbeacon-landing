import React from "react";
import { useLeadModal } from "./LeadModal";

export default function CallToAction() {
  const { open: openLead } = useLeadModal();

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Full-width gradient container */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-[#1344e6] px-8 py-20 text-white text-center shadow-xl relative overflow-hidden max-w-6xl mx-auto">

          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Secure Your Child's Future Today
          </h2>
          <p className="mt-4 text-base md:text-lg font-bold text-blue-100 uppercase tracking-wider">
            Limited Boarding Seats Available from Nursery to Class 12th
          </p>

          {/* Stat Metrics columns */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto pb-10 border-b border-white/15">
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl font-extrabold text-white">500+</span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-blue-200">Happy Students</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl font-extrabold text-white">25+</span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-blue-200">Years Excellence</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl font-extrabold text-white">98%</span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-blue-200">Success Rate</span>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">

            <button
              onClick={() => openLead("admission")}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 text-base font-bold text-[#1344e6] hover:bg-blue-50 transition-colors shadow-md cursor-pointer"
            >
              Apply Now
            </button>

            <button
              onClick={() => openLead("schedule-visit")}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-10 py-5 text-base font-bold text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              Book Campus Visit
            </button>

            <button
              onClick={() => openLead("speak-to-counsellor")}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-10 py-5 text-base font-bold text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              Speak to Counsellor
            </button>

          </div>

          <p className="mt-8 text-sm font-semibold text-blue-200/90 italic">
            Contact our admissions team today. Seats are limited.
          </p>

        </div>

      </div>
    </section>
  );
}
