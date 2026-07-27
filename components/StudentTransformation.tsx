import React from "react";
import { MoveDown, ArrowRight, ArrowDown } from "lucide-react";

interface StatusFlow {
  before: string;
  after: string;
}

export default function StudentTransformation() {
  const pairs: StatusFlow[] = [
    { before: "Shy", after: "Confident" },
    { before: "Distracted", after: "Disciplined" },
    { before: "Dependent", after: "Independent" },
    { before: "Average Communication", after: "Leadership Mindset" },
    { before: "Unmotivated", after: "Strong Communication" },
  ];

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title / Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Student Transformation
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            See the remarkable change in our students at NIMT Beacon
          </p>
        </div>

        {/* Transformation Flow Tree */}
        <div className="max-w-5xl mx-auto overflow-x-auto pb-4">
          <div className="min-w-[700px] flex flex-col gap-6">
            
            {/* Before Row (Red tone) */}
            <div className="grid grid-cols-5 gap-4">
              {pairs.map((pair, index) => (
                <div 
                  key={`before-${index}`}
                  className="rounded-xl border border-red-100 bg-red-50/40 p-5 text-center shadow-sm"
                >
                  <span className="text-base md:text-lg font-bold text-red-700 tracking-wide font-display">
                    {pair.before}
                  </span>
                </div>
              ))}
            </div>

            {/* Downward Connecting Arrows/Lines Row */}
            <div className="grid grid-cols-5 gap-4 justify-items-center">
              {pairs.map((_, index) => (
                <div key={`arrow-${index}`} className="flex flex-col items-center">
                  <div className="h-6 w-[2px] bg-slate-200"></div>
                  <ArrowDown className="h-4 w-4 text-[#1344e6] -mt-1" />
                </div>
              ))}
            </div>

            {/* After Row (Green tone) */}
            <div className="grid grid-cols-5 gap-4">
              {pairs.map((pair, index) => (
                <div 
                  key={`after-${index}`}
                  className="rounded-xl border border-green-100 bg-green-50/40 p-5 text-center shadow-sm"
                >
                  <span className="text-base md:text-lg font-bold text-green-700 tracking-wide font-display">
                    {pair.after}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* NIMT Beacon Difference Highlight Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-indigo-50/70 border border-blue-100 p-8 text-center relative overflow-hidden shadow-sm">
            <div className="absolute right-0 top-0 h-16 w-16 bg-blue-500/5 blur-2xl rounded-full"></div>
            
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#1344e6] uppercase tracking-wider">
              NIMT Beacon School Makes the Difference
            </h3>
            
            <p className="mt-4 text-base md:text-lg font-semibold text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive approach to education combines academic excellence with personal development, ensuring every student reaches their full potential.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
