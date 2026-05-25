import { useState } from "react";
import { Star, ChevronRight } from "lucide-react";
import { Testimonials } from "../data/boardingData";
import { asset } from "../lib/asset";

export default function VideoTestimonials() {
  const [activeId, setActiveId] = useState<string>("t-1");

  const activeTestimonial =
    Testimonials.find((t) => t.id === activeId) || Testimonials[0];

  const handleSelect = (id: string) => {
    setActiveId(id);
  };

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Title Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Video Testimonials
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Real stories from parents whose children thrive at NIMT Beacon
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 max-w-6xl mx-auto">

          {/* Left Side - Video Player */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Actual Video */}
            <div className="relative aspect-[9/16] max-w-[380px] mx-auto rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-black">

              <video
                key={activeTestimonial.id}
                className="h-full w-full object-cover"
                controls
                preload="metadata"
                poster={asset(activeTestimonial.thumbnail)}
              >
                <source
                  src={asset(activeTestimonial.videoSrc)}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

            </div>

            {/* Quote Card */}
            <div className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">

              <div className="flex gap-1">
                {[...Array(activeTestimonial.stars)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4.5 w-4.5 fill-[#eab308] text-[#eab308]"
                  />
                ))}
              </div>

              <p className="mt-4 text-lg md:text-xl font-bold text-gray-800 italic leading-relaxed">
                "{activeTestimonial.quote}"
              </p>

              <div className="mt-5 border-t border-slate-100 pt-4 text-left">
                <span className="text-base md:text-lg font-extrabold text-[#1344e6] font-display block">
                  {activeTestimonial.name}
                </span>

                <span className="text-sm font-semibold text-gray-400">
                  {activeTestimonial.role}
                </span>
              </div>

            </div>

          </div>

          {/* Right Side - Testimonial List */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            <span className="text-xs font-bold uppercase tracking-widest text-[#1344e6] text-left block pl-2">
              More Testimonials
            </span>

            <div className="space-y-3.5">

              {Testimonials.map((t) => {
                const isSelected = t.id === activeId;

                return (
                  <button
                    key={t.id}
                    onClick={() => handleSelect(t.id)}
                    className={`w-full text-left rounded-2xl p-5 border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer focus:outline-none ${
                      isSelected
                        ? "bg-white border-[#1344e6] shadow-md"
                        : "bg-white/60 border-slate-100 hover:bg-white hover:border-slate-200 shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col">

                      <span
                        className={`text-base font-extrabold font-display ${
                          isSelected
                            ? "text-[#1344e6]"
                            : "text-gray-800"
                        }`}
                      >
                        {t.name}
                      </span>

                      <span className="text-sm font-semibold text-slate-500 mt-0.5">
                        {t.role}
                      </span>

                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mt-2">
                        Video Testimonial
                      </span>

                    </div>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isSelected
                          ? "bg-blue-50 border-blue-100 text-[#1344e6]"
                          : "bg-slate-50 border-slate-100 text-gray-400"
                      }`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </div>

                  </button>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}