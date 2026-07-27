"use client";

import React, { useState } from "react";
import InquiryForm from "@/components/InquiryForm";
import { BookOpen, Sparkles, ShieldCheck, HelpCircle, ChevronRight, Bookmark } from "lucide-react";

export default function Library() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const libraryFaqs = [
    {
      q: "Does the library contain digital subscriptions?",
      a: "Yes. Our library is fully computerized and offers student access to elite scientific publication databases, national digital journals, and global online encyclopedias.",
    },
    {
      q: "What is the quiet reading space capacity?",
      a: "Our central hall accommodates up to 150 scholars simultaneously with independent silent wood partition study desks and comfortable executive reading armchairs.",
    },
    {
      q: "Can check-out times be extended for class board reviews?",
      a: "Yes. Senior secondary class scholars (Grade X/XII) have academic extension rights to reserve board practice papers and master-solving catalogs.",
    },
  ];

  return (
    <div id="subpage-library" className="pt-24 bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/computerized_library_hall/1600/600"
            alt="Colossal computerized library desks"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-[#fffc4d] text-xs font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
            A Hub of Intellectual Growth
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight">
            Learning Resource Centre
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium font-sans">
            A vast quiet sanctuary housing over 15,000 reference catalogs, digital subscriptions, journals and silent research corners.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-4">
                <h2 className="font-serif font-black text-2xl sm:text-3xl text-slate-955">
                  Fostering Critical Inquiry, Academic Passion & Deep Study Values
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">
                  The Learning Resource Library is the vascular heart of academic exploration at NIMT Beacon. Managed by veteran librarians, the center runs digital catalog checks, silent research zones, and weekend book reading seminars to turn our tagline &ldquo;Learners For Life&rdquo; into daily habit.
                </p>
              </div>

              {/* Specs detailed columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    name: "15,000+ Printed Classics",
                    desc: "An exhaustive list of CBSE reference books, engineering guides, classic fiction literature, and deep global histories.",
                    icon: Bookmark,
                  },
                  {
                    name: "Comprehensive Digital Hub",
                    desc: "Interactive tablets and desktop monitors allowing access to elite learning resource servers and encyclopedias.",
                    icon: BookOpen,
                  },
                  {
                    name: "Individual Silent Desks",
                    desc: "Comfortable wooden compartments ensuring absolute silence and concentration value during study cycles.",
                    icon: ShieldCheck,
                  },
                  {
                    name: "Weekly Literary Sessions",
                    desc: "Guided author talks, public dialogue events, book circles and speaking clubs to stimulate young minds.",
                    icon: Sparkles,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-[#0041f5] mb-4">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm mb-1">{item.name}</h4>
                    <p className="text-xs text-slate-550 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <div className="space-y-6">
                <h3 className="font-serif font-black text-xl text-slate-900">Learning Resource FAQs</h3>
                <div className="space-y-3">
                  {libraryFaqs.map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200/50">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between font-serif font-bold text-sm text-slate-950"
                      >
                        <span>{faq.q}</span>
                        <ChevronRight className="w-4 h-4 text-blue-500 shrink-0" />
                      </button>
                      {openFaq === idx && (
                        <div className="px-5 pb-4 text-xs font-sans text-slate-600 border-t border-slate-100 pt-2 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <InquiryForm pageTitle="NIMT Library Resources" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
