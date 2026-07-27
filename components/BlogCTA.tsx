'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface BlogCTAProps {
  onBookVisit: () => void;
  onContactAdmissions?: () => void;
}

export default function BlogCTA({ onBookVisit, onContactAdmissions }: BlogCTAProps) {
  const handleContact = () => {
    if (onContactAdmissions) {
      onContactAdmissions();
    } else {
      alert("Admissions Helpline: +91 9205555135 | Email: admissions@nimt.ac.in");
    }
  };

  return (
    <div className="bg-[#0041F5] text-white my-16 py-16 px-4 sm:px-8 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-[#FFFC4D]/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-blue-400/25 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="h-3.5 w-3.5 text-[#FFFC4D]" />
          Secure Your Child&apos;s Educational Pathway
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Ready to Explore NIMT Beacon School?
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
          We warmly invite you and your family to explore our sprawling green campus. Witness our smart learning interfaces, interact with faculty members, and discover why we are considered the best learning playground in Ghaziabad.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onBookVisit}
            className="w-full sm:w-auto bg-[#FFFC4D] hover:bg-yellow-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#FFFC4D]/15 hover:-translate-y-0.5 text-sm"
          >
            Book Campus Visit
          </button>
          <button
            onClick={handleContact}
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/40 font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm"
          >
            Contact Admissions
          </button>
        </div>
      </div>
    </div>
  );
}