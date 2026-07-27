"use client";

import React, { useState } from "react";
import InquiryForm from "@/components/InquiryForm";
import { Cpu, ShieldCheck, HelpCircle, ChevronRight, Sparkles, Sliders } from "lucide-react";

export default function Laboratories() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const labFaqs = [
    {
      q: "What safety equipment is present within chemistry and biology labs?",
      a: "Every science lab is constructed with emergency eye-wash stations, high-power fume hoods, first-aid fire extinguishers, and strict safety rules requiring lab coats and goggles.",
    },
    {
      q: "Which robotics hardware kits do students utilize?",
      a: "Our tech-forward tech lab equips students with LEGO Mindstorms, Arduino microcontrollers, Raspberry Pi systems, and 3D printers for tactile coding and design iterations.",
    },
    {
      q: "Are the labs integrated into standard CBSE weekly schedules?",
      a: "Yes! Practical lab cycles are conducted twice-weekly for every class starting from Grade VI.",
    },
  ];

  return (
    <div id="subpage-laboratories" className="pt-24 bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/scientific_labs/1600/600"
            alt="Robotics and science lab setup"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-[#fffc4d] text-xs font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
            Inspiring Future Innovators
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight">
            Science & Robotics Labs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium font-sans">
            Deep academic spaces for physics, chemistry, biology, AI design, and block logic coding.
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
                  Transforming Abstract Concepts Into Tactile Innovation
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">
                  The tech and science labs at NIMT are state-of-the-art. Students have separate equipment benches, guidance maps, and advanced digital analytical modules. Let your child&apos;s curiosity explore the limits of logic.
                </p>
              </div>

              {/* Labs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    name: "AI & Robotics Coding Hub",
                    desc: "3D printers, IoT cards, Python compiler units, and robotics parts to design automation systems of tomorrow.",
                    icon: Cpu,
                  },
                  {
                    name: "Physics Experiment Lab",
                    desc: "Fitted with prism modules, digital scale indicators, circuit board rigs, and optics lasers.",
                    icon: Sliders,
                  },
                  {
                    name: "Chemistry Research Lab",
                    desc: "Perfect safe reagent shelves, computerised gas burner systems, and digital pH readers.",
                    icon: ShieldCheck,
                  },
                  {
                    name: "Biology Observation Lab",
                    desc: "Featuring  high-resolution compound microscopes, human anatomical models, and botanical specimens.",
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
                <h3 className="font-serif font-black text-xl text-slate-900">Laboratory FAQs</h3>
                <div className="space-y-3">
                  {labFaqs.map((faq, idx) => (
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
                <InquiryForm pageTitle="NIMT Advanced Laboratories" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
