import React from "react";
import { ArrowRight } from "lucide-react";

interface ReasonCard {
  num: number;
  title: string;
  desc: string;
}

export default function WhyBoarding() {
  const reasons: ReasonCard[] = [
    { num: 1, title: "Better Discipline", desc: "Structured environment for focus" },
    { num: 2, title: "Focused Study Routine", desc: "Distraction-free learning" },
    { num: 3, title: "Less Screen Time", desc: "Healthy digital boundaries" },
    { num: 4, title: "Stronger Confidence", desc: "Social & personal growth" },
    { num: 5, title: "Independent Thinking", desc: "Problem-solving skills" },
    { num: 6, title: "Better Time Management", desc: "Organization & planning" },
    { num: 7, title: "Leadership Skills", desc: "Responsibility & initiative" },
  ];

  return (
    <section id="why-boarding" className="bg-[#f8fafc] py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title / Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Why More Parents Are Choosing Boarding Education
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Boarding schools provide a structured environment that develops discipline, focus, and leadership qualities in students.
          </p>
        </div>

        {/* Reason Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.slice(0, 6).map((item) => (
            <div 
              key={item.num}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 font-display text-sm font-bold text-[#1344e6] border border-blue-100">
                {item.num}
              </div>
              <h3 className="mt-4 text-xl md:text-2xl font-bold text-gray-900 font-display">{item.title}</h3>
              <p className="mt-2 text-base md:text-lg font-medium text-slate-600">{item.desc}</p>
            </div>
          ))}
          
          {/* 7th item takes a special display or fits in grid */}
          <div className="sm:col-span-2 lg:col-span-3 flex justify-center mt-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm max-w-sm w-full text-center sm:text-left flex flex-col sm:flex-row items-center gap-4 hover:shadow-md transition-shadow duration-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-display text-sm font-bold text-[#1344e6] border border-blue-100">
                7
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-display">{reasons[6].title}</h3>
                <p className="text-base md:text-lg font-medium text-slate-600 mt-1">{reasons[6].desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Section */}
        <div className="mt-20">
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/70 p-8 shadow-sm border border-blue-100/50 max-w-4xl mx-auto">
            <h4 className="text-center text-sm font-bold tracking-widest text-[#1344e6] uppercase">
              Parent → Student Transformation Journey
            </h4>
            
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 items-center text-center">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <span className="text-base font-bold text-slate-400 font-display uppercase tracking-wider">Before</span>
                <span className="mt-2 text-lg md:text-xl font-bold text-slate-800">Concerned parent</span>
              </div>

              {/* Step 2 - Middle with nice line decorators */}
              <div className="flex flex-col items-center relative py-2">
                <div className="hidden sm:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-slate-200"></div>
                <span className="relative z-10 rounded-full bg-white border border-blue-100 px-6 py-2 text-sm font-extrabold tracking-wide text-[#1344e6] uppercase shadow-sm">
                  At NIMT Beacon
                </span>
                <span className="text-xs font-semibold text-slate-400/90 mt-1 uppercase tracking-wider sm:hidden">Transformation</span>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <span className="text-base font-bold text-[#1344e6] font-display uppercase tracking-wider">After</span>
                <span className="mt-2 text-lg md:text-xl font-bold text-[#1344e6]">Confident student</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
