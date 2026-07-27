import React from "react";

interface TrustCard {
  icon: string;
  title: string;
  desc: string;
}

export default function WhyNIMT() {
  const trustPoints: TrustCard[] = [
    {
      icon: "🏠",
      title: "24x7 Hostel Supervision",
      desc: "Round-the-clock care and support",
    },
    {
      icon: "👥",
      title: "Personal Mentorship",
      desc: "One-on-one guidance for growth",
    },
    {
      icon: "📚",
      title: "Academic Support",
      desc: "Expert faculty & doubt sessions",
    },
    {
      icon: "⏰",
      title: "Structured Daily Routine",
      desc: "Disciplined schedule for focus",
    },
    {
      icon: "🔒",
      title: "Safe Campus",
      desc: "Security & CCTV monitoring",
    },
    {
      icon: "🚀",
      title: "Future Skills Development",
      desc: "Leadership & soft skills training",
    },
    {
      icon: "🎯",
      title: "Leadership Growth",
      desc: "Responsibility & decision-making",
    },
    {
      icon: "💪",
      title: "Healthy Lifestyle",
      desc: "Sports, nutrition & wellness",
    },
  ];

  return (
    <section id="why-nimt" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
             World-Class Campus & Facilities
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
             State-of-the-art infrastructure supporting world-class education and holistic development.
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              {/* Colored Emoji/Icon container */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-2xl shadow-inner group-hover:bg-blue-50/50 transition-colors">
                {point.icon}
              </div>
              
              <h3 className="mt-5 text-lg md:text-xl font-bold text-gray-900 font-display">
                {point.title}
              </h3>
              
              <p className="mt-2 text-sm font-semibold text-slate-500">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
