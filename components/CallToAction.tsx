import React from "react";

export default function CallToAction() {
  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Full-width gradient container */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-[#1344e6] px-8 py-20 text-white text-center shadow-xl relative overflow-hidden max-w-6xl mx-auto">
          
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Secure Your Child's Future Today
          </h2>
          <p className="mt-4 text-base md:text-lg font-bold text-blue-100 uppercase tracking-wider">
            Limited Boarding Seats Available from Nursery to Class 12th
          </p>

          {/* Stat Metrics columns */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto pb-10 border-b border-white/15">
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl font-extrabold text-white">500+</span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-blue-200">Happy Students</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl font-extrabold text-white">25+</span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-blue-200">Years Excellence</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl font-extrabold text-white">98%</span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-blue-200">Success Rate</span>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* White solid Apply button */}
 

            {/* WhatsApp Link for Book Campus Visit */}
            <a
              href="https://wa.me/919599931443?text=I%20want%20to%20book%20a%20campus%20visit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-10 py-5 text-base font-mono tracking-wider font-semibold text-white hover:bg-white/10 transition-all gap-2"
            >
              <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.8 1.45 5.514 0 10.002-4.487 10.005-10 0-2.67-1.04-5.18-2.924-7.07C16.643 1.638 14.133.6 11.474.6c-5.51-.001-10 4.49-10 10 0 1.83.492 3.61 1.42 5.2l-.18-.54L1.75 21.3l6.095-1.59-.44.25-.76-.806z"/>
              </svg>
              <span>[ Book Campus Visit ]</span>
            </a>

            <a
              href="#admissions"
              onClick={handleApplyClick}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-10 py-5 text-base font-mono tracking-wider font-semibold text-white/95 hover:bg-white/10 transition-colors"
            >
              [ Contact Admissions ]
            </a>

          </div>

          {/* Warning disclaimer at footer of CTA card */}
          <p className="mt-8 text-sm font-semibold text-blue-200/90 italic">
            Contact our admissions team today. Seats are limited.
          </p>

        </div>

      </div>
    </section>
  );
}
