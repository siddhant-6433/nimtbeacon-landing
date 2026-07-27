import React from "react";
import { Check } from "lucide-react";

interface Benefit {
  boldText: string;
  normalText: string;
}

export default function SchoolingPrep() {
  const benefits: Benefit[] = [
    { boldText: "Integrated Preparation", normalText: "School + competitive exam coaching" },
    { boldText: "Doubt Support", normalText: "Expert faculty for clarification" },
    { boldText: "Study Mentorship", normalText: "Personalised guidance" },
    { boldText: "Time Saving", normalText: "No commute to coaching centers" },
    { boldText: "Academic Guidance", normalText: "Strategic planning for success" },
    { boldText: "Mock Tests", normalText: "Regular evaluations & feedback" },
  ];

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          
          {/* Left Block with Ticked Points */}
          <div className="flex flex-col justify-center text-left lg:col-span-7">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1] leading-tight">
              Schooling + Competitive <br />
              Preparation <span className="text-[#1344e6]">Under One <br />Campus</span>
            </h2>
            
            <p className="mt-6 text-lg md:text-xl font-medium text-gray-500 max-w-2xl leading-relaxed">
              Our integrated approach combines rigorous school curriculum with IIT-JEE and NEET preparation, eliminating the need for external coaching centers.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 max-w-2xl">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1344e6] border border-blue-100 mt-1">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div className="text-base">
                    <span className="font-bold text-gray-900">{benefit.boldText}</span>
                    <p className="text-sm font-semibold text-[#1344e6] mt-1">{benefit.normalText}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#admissions"
                onClick={handleApplyClick}
                className="inline-flex justify-center rounded-xl bg-[#1344e6] px-8 py-4.5 text-base font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
              >
                Learn About Our Exam Programs
              </a>
            </div>
          </div>

          {/* Right Column Success Stories Block */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Soft Blue Card "IIT + NEET Success Stories" */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1344e6]/5 to-indigo-50/70 border border-blue-100/50 p-8 flex flex-col items-center justify-center text-center shadow-sm py-16">
              <span className="text-[#1344e6] font-display text-5xl font-extrabold tracking-tight">
                IIT + NEET
              </span>
              <span className="text-slate-500 font-display text-lg font-bold tracking-widest uppercase mt-3">
                Success Stories
              </span>
            </div>

            {/* White Info Card bottom */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h4 className="text-sm font-bold text-[#1344e6] tracking-widest uppercase mb-4">
                Expert Faculty & Resources
              </h4>
              <ul className="space-y-3">
                {["Dedicated Exam Coordinators", "Topic-wise Study Materials", "Regular Mock Assessments"].map((point, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-base font-bold text-gray-700">
                    <span className="text-[#1344e6] font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
