import React from "react";
import { Check } from "lucide-react";

interface StatItem {
  num: string;
  label: string;
}

export default function ResultsAchievements() {
  const stats: StatItem[] = [
    { num: "98%", label: "Selection Rate" },
    { num: "45+", label: "IIT Selections" },
    { num: "120+", label: "NEET Selections" },
    { num: "100+", label: "Merit Awards" },
  ];

  const academics = [
    "Consistently above 90% in board exams",
    "National Olympiad winners",
    "Science & Maths toppers",
    "Merit holders in all streams",
  ];

  const competitive = [
    "Top IIT selections every year",
    "Medical college admissions",
    "National Talent Search Scheme (NTSE) awardees",
    "Science Olympiad medalists",
  ];

  return (
    <section id="results" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title / Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Results & Achievements
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Our students consistently excel in academics and competitive exams
          </p>
        </div>

        {/* 4 Statistics Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-6xl mx-auto">
          {stats.map((item, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-blue-50 bg-blue-50/10 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-display text-4xl font-extrabold text-[#1344e6] sm:text-5xl block">
                {item.num}
              </span>
              <span className="mt-2 text-sm font-bold text-slate-500 block uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Dual Cards comparison block below */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-6xl mx-auto">
          
          {/* Academic Excellence Card (Blue tone) */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/5 p-8 shadow-sm">
            <h3 className="font-display text-xl md:text-2xl font-bold text-[#1344e6] mb-5">
              Academic Excellence
            </h3>
            <ul className="space-y-3.5">
              {academics.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#1344e6] font-bold text-base mt-1">✓</span>
                  <span className="text-base font-semibold text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitive Exams Card (Emerald/Green tone) */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/5 p-8 shadow-sm">
            <h3 className="font-display text-xl md:text-2xl font-bold text-[#15803d] mb-5">
              Competitive Exams
            </h3>
            <ul className="space-y-3.5">
              {competitive.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#15803d] font-bold text-base mt-1">✓</span>
                  <span className="text-base font-semibold text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
