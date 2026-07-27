import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQs } from "../data/boardingData";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title / Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            Get answers to common questions about NIMT Beacon
          </p>
        </div>

        {/* 8 Accordions list layout */}
        <div className="max-w-4xl mx-auto space-y-3">
          {FAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="rounded-xl border border-slate-100 bg-white overflow-hidden shadow-sm transition-shadow duration-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none focus:bg-slate-50/50"
                >
                  <span className="text-base md:text-lg font-bold text-gray-900 font-display">
                    {faq.question}
                  </span>
                  <div className={`rounded-full bg-slate-50 p-1 text-gray-400 border border-slate-100 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#1344e6] bg-blue-50 border-blue-100" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Smooth Toggled Answer Section */}
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] border-t border-slate-50 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}>
                  <div className="px-6 py-5 text-sm md:text-base font-semibold text-slate-500 leading-relaxed bg-slate-50/40">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
