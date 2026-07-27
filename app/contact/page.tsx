"use client";

import React, { useState } from "react";
import InquiryForm from "@/components/InquiryForm";
import { MapPin, Phone, Mail, Clock, ShieldAlert, ChevronRight, Navigation } from "lucide-react";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const contactFaqs = [
    {
      q: "Can I schedule a consultation visit on Sundays?",
      a: "Our central office and classrooms are locked on Sundays. However, parent-assistance counselors can arrange exceptions for digital video consultation walkthroughs.",
    },
    {
      q: "Who is the point of contact for hostel billing questions?",
      a: "You can write directly to nsae@nimt.ac.in or ask our main admissions desk to route you to the residential accounts director.",
    },
    {
      q: "Do you have tie-ups with corporate firms for fee plans?",
      a: "Yes. NIMT has group-benefits arrangements with top technology firms in Noida and Delhi. Ask our admissions counselors for current packages.",
    },
  ];

  return (
    <div id="subpage-contact" className="pt-24 bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/contact_office_halls/1600/600"
            alt="Warm greeting consultation lounge"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-[#fffc4d] text-xs font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
            Reach Out we are here to help
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight">
            Contact NIMT Beacon School
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium font-sans">
            Have questions about fees, bus routes, or hostel facilities? Greet our admissions counselor desk today.
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
                  Connect With India&apos;s Finest Secondary Educators
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">
                  NIMT values parent communication. Our campus operates standard helpline hours, fully secure electronic mail processing portals, and convenient floating chat links.
                </p>
              </div>

              {/* Master details columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <MapPin className="w-8 h-8 text-[#0041f5]" />
                  <h4 className="font-serif font-bold text-slate-900 text-sm">Prinstine Campus Site</h4>
                  <p className="text-xs text-slate-500 leading-tight">Ansal, Avantika Ext Rd, Avantika Colony, Shastri Nagar, Ghaziabad, Uttar Pradesh 201002</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <Phone className="w-8 h-8 text-[#0041f5]" />
                  <h4 className="font-serif font-bold text-slate-900 text-sm">Admissions Helpline</h4>
                  <p className="text-xs text-slate-500 leading-tight">+91 95999 31443</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <Mail className="w-8 h-8 text-[#0041f5]" />
                  <h4 className="font-serif font-bold text-slate-900 text-sm">Electronic Support</h4>
                  <p className="text-xs text-slate-500 leading-tight">nsae@nimt.ac.in</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <Clock className="w-8 h-8 text-[#0041f5]" />
                  <h4 className="font-serif font-bold text-slate-900 text-sm">Working Hours</h4>
                  <p className="text-xs text-slate-500 leading-tight">Monday - Saturday: 8 AM - 4 PM</p>
                </div>
              </div>

              {/* Maps embed replacement - highly stylized interactive locator */}
              <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 text-white flex flex-col justify-between p-6">
                {/* Background graphic grid & route design */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] z-0" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-[#0041f5]/30 z-0" />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-3">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                      Active Campus Node
                    </span>
                    <h4 className="font-serif font-bold text-lg text-white">NIMT Beacon Campus</h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-md">Ansal Avantika-II, Ghaziabad, Uttar Pradesh, India - 201013</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-2">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Expressway Conn.</p>
                      <p className="text-xs text-[#fffc4d] font-semibold mt-0.5">NH-24 (2.5 KM)</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Delhi Border</p>
                      <p className="text-xs text-[#fffc4d] font-semibold mt-0.5">20 Min Drive</p>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=NIMT+Beacon+School+Ansal+Avantika-II+Ghaziabad"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#0041f5] hover:bg-blue-600 text-white text-center py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-6">
                <h3 className="font-serif font-black text-xl text-slate-900">Communication Desk FAQs</h3>
                <div className="space-y-3">
                  {contactFaqs.map((faq, idx) => (
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
                <InquiryForm pageTitle="General Helpline Support" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
