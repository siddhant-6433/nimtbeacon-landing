"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
  X,
  Download,
} from "lucide-react";

export default function Footer() {
  // Modal & Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Allow only numbers and limit to 10 digits
      const sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setError(""); // Clear error on typing
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (formData.phone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Trigger programmatic download of /fee.pdf
    const link = document.createElement("a");
    link.href = "/fee.pdf";
    link.download = "fee.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset Form & Close Modal
    setFormData({ name: "", phone: "" });
    setIsModalOpen(false);
  };

  return (
    <>
      <footer id="mega-footer" className="relative bg-slate-950 text-white overflow-hidden pt-20 pb-12 border-t border-slate-900">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            {/* Column 1: School Identity */}
            <div className="lg:col-span-2 space-y-6">
              <div id="footer-branding" className="flex items-center gap-3">
                <img
                  src="/white-logo.webp"
                  alt="NIMT Beacon School"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                NIMT Beacon School is Ghaziabad&apos;s leading CBSE Day-Boarding and Residential institution. Established in 2001, we empower the future generation through academic depth, sports perfection, and leadership grit.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/nimtschoolgzb"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0041f5] hover:bg-[#0041f5]/15 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
            
                <a
                  href="https://www.instagram.com/nimtschool"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0041f5] hover:bg-[#0041f5]/15 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@nimtschool"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0041f5] hover:bg-[#0041f5]/15 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Academics & Day Programs */}
            <div>
              <h4 className="font-serif font-bold text-sm tracking-widest uppercase text-[#fffc4d] mb-6">Academics</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <Link href="/day-school" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Day School Program</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                  </Link>
                </li>
                <li>
                  <Link href="/day-boarding" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Day Boarding Program</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                  </Link>
                </li>
                <li>
                  <Link href="/full-boarding" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Residential Boarding</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Senior Secondary Streams</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Campus & Facilities */}
            <div>
              <h4 className="font-serif font-bold text-sm tracking-widest uppercase text-[#fffc4d] mb-6">Useful Links</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <Link href="/mandatory-public-disclosure" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Mandatory Public Disclosures</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Blogs</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                  </Link>
                </li>
                <li>
                  {/* Changed from Link to button for custom form triggering */}
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="hover:text-white transition-colors flex items-center gap-1 group text-left cursor-pointer"
                  >
                    <span>Download Fee Structure</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Locations */}
            <div>
              <h4 className="font-serif font-bold text-sm tracking-widest uppercase text-[#fffc4d] mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0041f5] shrink-0 mt-0.5" />
                  <span className="leading-tight">Ansal, Avantika Ext Rd, Avantika Colony, Shastri Nagar, Ghaziabad, Uttar Pradesh 201002</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0041f5]" />
                  <span>+91 95999 31443</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0041f5]" />
                  <span>nsae@nimt.ac.in</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#0041f5]" />
                  <span>Mon - Sat: 8:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Underlay bottom bar */}
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 NIMT Beacon School. Ghaziabad, UP, India. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/admissions" className="hover:text-white transition-colors">Admission Guidelines</Link>
              <span className="text-slate-650 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                Affiliated with CBSE (Affiliation No: 2131310)
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Floating Actions */}
      <div id="floating-actions-dock" className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        <a
          id="floating-call"
          href="tel:+919599931443"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0041f5] hover:bg-blue-700 text-white shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 border border-white/20"
          title="Call School Admissions"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>

        <a
          id="floating-whatsapp"
          href="https://wa.me/919599931443?text=Hello%20NIMT%20Beacon%20School%20Admissions"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
          title="WhatsApp Us"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2C6.485 2 2 6.485 2 12.012c0 1.766.458 3.49 1.33 5.016L2 22l5.127-1.341c1.472.802 3.125 1.229 4.815 1.229 5.527 0 10.012-4.485 10.012-10.012A10.011 10.011 0 0 0 12.012 2zm5.727 13.91c-.244.686-1.214 1.32-1.685 1.393-.41.064-.943.12-2.731-.618-2.28-.941-3.712-3.238-3.826-3.39-.115-.152-.932-1.238-.932-2.362 0-1.124.587-1.677.797-1.905.21-.228.456-.285.607-.285.152 0 .304.004.434.01.134.007.315-.051.493.38.185.45.633 1.543.688 1.657.054.114.09.247.014.399-.076.152-.152.247-.304.418-.152.17-.319.38-.456.51-.152.143-.312.3-.134.608.178.307.793 1.307 1.7 2.115.782.695 1.442.91 1.747 1.062.304.152.482.13.662-.076.18-.21.782-.911.992-1.22.21-.308.419-.257.707-.152.287.106 1.823.86 2.138 1.018.315.158.525.237.601.365.076.128.076.74-.168 1.425z" />
          </svg>
        </a>

        <Link
          id="floating-apply"
          href="/admissions"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 active:scale-95 border border-amber-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          Admissions 2026 Open
        </Link>
      </div>

      {/* POPUP MODAL FORM FOR FEE STRUCTURE DOWNLOAD */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-white">
            
            {/* Close Button */}
            <button
              onClick={() => { setIsModalOpen(false); setError(""); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl font-serif font-bold text-amber-400 flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-500" /> Download Fee Structure
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Please provide your details below to instantly unlock and save the fee blueprint.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              {/* Mobile Number Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Mobile Number
                </label>
                <div className="flex rounded-lg overflow-hidden border border-slate-800 bg-slate-950 focus-within:border-blue-500 transition-colors">
                  <span className="flex items-center justify-center px-3 text-sm bg-slate-900 border-r border-slate-800 text-slate-400 font-medium select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    className="w-full px-3 py-2 text-sm bg-transparent text-white placeholder-slate-600 focus:outline-none"
                    required
                  />
                </div>
                <p className="text-[10px] text-slate-500 mt-1">Must be exactly 10 digits</p>
              </div>

              {/* Error Box */}
              {error && (
                <div className="text-xs font-medium text-red-400 bg-red-500/10 border border-red-500/20 p-2.5 rounded-lg">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-lg shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                Access & Download PDF
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}