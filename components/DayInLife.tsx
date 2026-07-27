import React from "react";
import { DailyRoutine } from "../data/boardingData";

export default function DayInLife() {
  return (
    <section className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            A Day in the Life of a Boarder
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Structured routine for maximum learning and personal growth
          </p>
        </div>

        {/* Clock Cards Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 max-w-6xl mx-auto">
          {DailyRoutine.map((item, index) => (
            <div 
              key={index}
              className="rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[120px]"
            >
              <span className="text-base font-extrabold text-[#1344e6] font-display">
                {item.time}
              </span>
              <span className="mt-2 text-sm font-bold text-gray-700">
                {item.activity}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Column Box Below */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-100/50 p-8 text-center shadow-sm">
            <h4 className="text-sm font-bold tracking-widest text-[#1344e6] uppercase">
              Balanced Schedule for Holistic Development
            </h4>
            
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              
              <div className="flex flex-col items-center">
                <span className="font-display text-4xl font-extrabold text-[#1344e6]">8 hrs</span>
                <span className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">Academic Study</span>
              </div>
              
              <div className="flex flex-col items-center border-y border-slate-100 py-4 sm:border-y-0 sm:border-x sm:py-0 sm:border-slate-200">
                <span className="font-display text-4xl font-extrabold text-[#1344e6]">4 hrs</span>
                <span className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">Sports & Activities</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="font-display text-4xl font-extrabold text-[#1344e6]">10 hrs</span>
                <span className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">Rest & Sleep</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
