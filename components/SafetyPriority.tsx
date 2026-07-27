import React from "react";
import { ShieldAlert } from "lucide-react";

interface SafetyCard {
  title: string;
  desc: string;
}

export default function SafetyPriority() {
  const cards: SafetyCard[] = [
    { title: "24x7 Security", desc: "Trained security personnel" },
    { title: "CCTV Monitoring", desc: "Complete campus coverage" },
    { title: "Hostel Warden", desc: "Dedicated supervision" },
    { title: "Medical Support", desc: "On-campus health facility" },
    { title: "Visitor Control", desc: "Screening & management" },
    { title: "Emergency Response", desc: "Quick action protocols" },
  ];

  const measures = [
    "Comprehensive identity verification for all visitors",
    "Regular safety drills and emergency preparedness",
    "Strict entry-exit protocols",
    "Professional medical staff on campus 24x7",
  ];

  return (
    <section className="bg-red-50/10 py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Shield Icon & Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 shadow-sm mb-5">
            <ShieldAlert className="h-6 w-6 stroke-[2.5]" />
          </div>
          
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Your Child's Safety Is Our Highest Priority
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            We maintain the highest standards of safety and security to ensure your child has a secure, worry-free experience.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 font-display">
                {card.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Red Theme Details Box below */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-red-100 bg-red-50/20 p-8 shadow-sm">
            
            <h4 className="text-base font-bold text-red-700 tracking-widest uppercase mb-5 font-display">
              Safety Measures
            </h4>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {measures.map((measure, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-red-600 font-bold text-base mt-1">✓</span>
                  <p className="text-base font-semibold text-slate-600 leading-relaxed">
                    {measure}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
