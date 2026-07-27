"use client";

import React, { useState } from "react";
import InquiryForm from "@/components/InquiryForm";
import { ShieldCheck, Target, Coffee, Bus, Tv, Bookmark, HelpCircle, ChevronRight } from "lucide-react";

export default function Facilities() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const facilitiesFaqs = [
    {
      q: "Does the school transport reach out to Indirapuram and Noida?",
      a: "Yes! We run air-conditioned GPS-enabled buses with security staff across Noida (Sector 62, 50, 120), Indirapuram, Vasundhara, Vaishali, and Ghaziabad city centers.",
    },
    {
      q: "Can students access labs and sports fields after normal school hours?",
      a: "Yes. Day boarders and residential scholars have dedicated hours till 5:00 PM and 7:00 PM respectively, fully supported by expert coaches and scientists.",
    },
    {
      q: "Are classroom technologies updated annually?",
      a: "Absolutely. All smart projection systems and interactive software dashboards are audited and updated annually to support immersive learning.",
    },
  ];

  return (
    <div id="subpage-facilities" className="pt-24 bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/school_corridors/1600/600"
            alt="Dynamic spatial school campus corridor"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-[#fffc4d] text-xs font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
            A 15-Acre World-Class Campus
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight">
            NIMT State-of-the-Art Facilities
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium font-sans">
            Exceptional technical laboratories, digital study rooms, Olympic rifle ranges, separate modern dormitories, and safe transport.
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
                  Built to Empower Global Talent & Creative Mindsets
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">
                  The infrastructure of NIMT Beacon School Ghaziabad is designed to challenge the status quo. It blends safe academic zones with intensive sports, technological exploration, and modern organic cuisines.
                </p>
              </div>

              {/* Master Grid list of Facilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    name: "Advanced Science Labs",
                    desc: "Perfect safety regulations, computer monitors, and quality testing chemicals.",
                    icon: ShieldCheck,
                  },
                  {
                    name: "Computer & AI Centers",
                    desc: "Equipped with advanced smart screens, block-code machines, and development resources.",
                    icon: Tv,
                  },
                  {
                    name: "Prinstine Library Room",
                    desc: "Containing thousands of original CBSE curriculum guides, research logs, and newspapers.",
                    icon: Bookmark,
                  },
                  {
                    name: "Indoor Shooting Range",
                    desc: "Olympic certified air rifle and air pistol firing lanes with safety walls.",
                    icon: Target,
                  },
                  {
                    name: "Organic Dining Cafeteria",
                    desc: "Highly hygienic automated serving lines providing dietitian-curated food.",
                    icon: Coffee,
                  },
                  {
                    name: "Safe Air-Conditioned Buses",
                    desc: "GPS tracking bus fleet, smart guard logs, speed restrictions, and backup support.",
                    icon: Bus,
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
                <h3 className="font-serif font-black text-xl text-slate-900">Facilities FAQs</h3>
                <div className="space-y-3">
                  {facilitiesFaqs.map((faq, idx) => (
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
                <InquiryForm pageTitle="NIMT Campus Facilities" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
