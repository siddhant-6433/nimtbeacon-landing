import React from "react";

export default function HealthyBody() {
  const points = [
    {
      title: "Nutritious Meals",
      desc: "Our in-house chefs prepare balanced, nutritious meals using fresh ingredients. Every meal is designed to support student growth and academic performance.",
    },
    {
      title: "Hygiene Standards",
      desc: "We follow strict food preparation and kitchen hygiene protocols. Our dining facilities are regularly inspected and maintained.",
    },
    {
      title: "Sports & Wellness",
      desc: "From indoor sports to outdoor activities, we encourage physical fitness and mental wellness through various programs.",
    },
    {
      title: "Dietary Preferences",
      desc: "We accommodate various dietary preferences and allergies. Every student's nutritional needs are carefully considered.",
    },
  ];

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">

          {/* Left Column Images */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            {/* Dining Hall Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-lg group">
              <img
                src="/dining-hall.webp"
                alt="Dining Hall"
                className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-white text-xl font-bold font-display">
                  Dining Hall
                </h3>
              </div>
            </div>

            {/* Balanced Meals Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-lg group">
              <img
                src="/balanced-meals.webp"
                alt="Balanced Meals"
                className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-white text-xl font-bold font-display">
                  Balanced Meals
                </h3>
              </div>
            </div>

          </div>

          {/* Right Column Content */}
          <div className="flex flex-col justify-center text-left lg:col-span-7">

            <h2 className="font-display text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl lg:leading-[1.1] leading-tight">
              Healthy Body. <br />
              <span className="text-[#16a34a]">Sharp Mind.</span>
            </h2>

            <div className="mt-8 space-y-6 max-w-2xl">
              {points.map((pt, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <span className="text-lg md:text-xl font-bold text-gray-800 font-display">
                    {pt.title}
                  </span>
                  <p className="mt-2 text-base font-semibold text-slate-500 leading-relaxed">
                    {pt.desc}
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