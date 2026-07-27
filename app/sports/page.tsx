"use client";

import React, { useState } from "react";
import InquiryForm from "@/components/InquiryForm";
import { Target, Activity, Award, ShieldCheck, HelpCircle, ChevronRight } from "lucide-react";

export default function Sports() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const sportsFaqs = [
    {
      q: "Who conducts the coaching at the Indoor Shooting Range?",
      a: "Our range is managed by state-certified weapon instructors and former national marksmen. Safety regulations are absolute: students always train under direct supervision using safety goggles.",
    },
    {
      q: "What other major sports training turfs are on campus?",
      a: "We feature a FIFA-approved grass football turf, professional net cricket practice lanes with bowling ball machines, and  synthetic composite basketball courts.",
    },
    {
      q: "Do you support students participating in state tournaments?",
      a: "Yes! NIMT scholars actively compete in CBSE State Leagues, national level shooting events, and district school meets. We cover complete logistics and coaching.",
    },
  ];

  return (
    <div id="subpage-sports" className="pt-24 bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/sports_running_track/1600/600"
            alt="Young athletes training on running track"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-[#fffc4d] text-xs font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
            NIMT Sports Perfection
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight">
            Elite Sports Academy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium font-sans animate-pulse">
            State-certified Indoor Shooting Range,  football turf, cricket nets, basketball courts, and martial arts academies.
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
                  Building Healthy Bodies, Team Grit & Competitive Drive
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">
                  At NIMT Beacon, sports excellence is not an afterthought—it is a core pillar. Under the guidance of professional physical coaches, students are trained to master visual focus, athletic strength, strategic intelligence, and teamwork.
                </p>
              </div>

              {/* Sports specs card list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    name: "Indoor Shooting Range",
                    desc: "Ghaziabad\\'s finest Olympic-style indoor firing range for 10-meter air rifle and air pistol training. Managed with top safety layers.",
                    icon: Target,
                  },
                  {
                    name: "Professional Turf Football",
                    desc: "An incredible expansive green pitch supporting inter-school soccer drill formats and tournaments year-round.",
                    icon: Activity,
                  },
                  {
                    name: "Cricket Lane Practice",
                    desc: "Excellent grass nets and bowling ball machines to refine batting stances and bowling paces.",
                    icon: Award,
                  },
                  {
                    name: "Self Defense & Martial Arts",
                    desc: "Taekwondo, judo, and karate training modules to build physical agility, discipline, and core confidence.",
                    icon: ShieldCheck,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-[#0041f5] mb-4">
                      <item.icon className="w-5 h-5 animate-bounce" />
                    </div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm mb-1">{item.name}</h4>
                    <p className="text-xs text-slate-550 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <div className="space-y-6">
                <h3 className="font-serif font-black text-xl text-slate-900">Sports Program FAQs</h3>
                <div className="space-y-3">
                  {sportsFaqs.map((faq, idx) => (
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
                <InquiryForm pageTitle="NIMT Sports Programs" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
