import React from "react";
import { Check, ArrowDown, ExternalLink } from "lucide-react";
import InteractiveVideoPlayer from "./InteractiveVideoPlayer";
import { useLeadModal } from "./LeadModal";

export default function Hero() {
  const { open: openLead } = useLeadModal();
  const points = [
    "CBSE Affiliated",
    "Safe Campus & 24x7 Security",
    "IIT-JEE & NEET Support",
    "Personal Mentorship",
  ];

  return (
    <section className="relative overflow-hidden pt-0 pb-12 sm:pb-16 lg:pb-20" style={{ backgroundColor: "#0041f5" }}>
      {/* Background soft light shapes for high-end look */}
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute left-10 bottom-0 -z-10 h-80 w-80 rounded-full bg-white/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Hero Column */}
          <div className="flex flex-col text-left lg:col-span-7">
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
              Looking for the <br className="hidden sm:inline" />
              Perfect Boarding <br className="hidden sm:inline" />
              School in Delhi <br className="hidden sm:inline" />
              NCR for Your Child?
            </h1>
            
            <p className="mt-8 text-xl font-medium text-blue-100 sm:text-2xl max-w-3xl leading-relaxed">
              A Safe, Disciplined & Future-Ready Boarding School Where Students Learn, Grow & Succeed With Confidence.
            </p>

            <div className="mt-10">
              <span className="text-sm font-bold tracking-widest text-[#93c5fd] uppercase block mb-4">
                Trusted by Parents
              </span>
              <div className="grid grid-cols-1 gap-y-3.5 gap-x-6 sm:grid-cols-2 max-w-xl">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-white border border-white/20">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="text-base font-semibold text-white">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openLead("admission")}
                className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 text-lg font-extrabold text-[#0041f5] shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Apply Now
              </button>
              <button
                onClick={() => openLead("schedule-visit")}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-transparent px-10 py-5 text-lg font-extrabold text-white hover:border-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                Book Campus Visit
              </button>
            </div>


          </div>

          {/* Right Video Player Column */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <InteractiveVideoPlayer />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
