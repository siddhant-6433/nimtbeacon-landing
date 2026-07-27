"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Calendar, Award, BookOpen } from "lucide-react";

interface InquiryFormProps {
  pageTitle: string;
}

export default function InquiryForm({ pageTitle }: InquiryFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    email: "",
    targetClass: "Nursery",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.parentName && formData.studentName && formData.phone) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          parentName: "",
          studentName: "",
          phone: "",
          email: "",
          targetClass: "Nursery",
          message: "",
        });
      }, 5000);
    }
  };

  return (
    <div id="subpage-lead-card" className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-150 relative">
      <div className="absolute top-4 right-4 bg-blue-105 text-[#0041f5] px-3.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-blue-50">
        Inquiry Desk
      </div>

      <h3 className="font-serif font-black text-xl text-slate-950 mb-1">
        Request info on {pageTitle}
      </h3>
      <p className="text-xs text-slate-500 mb-6">
        Submit details below to schedule a custom counselor walkthrough.
      </p>

      {formSubmitted ? (
        <div className="bg-emerald-50/50 border border-emerald-500/20 p-6 rounded-2xl text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-serif font-bold text-slate-900">Inquiry Logged Successfully!</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Thank you! Our {pageTitle} coordinator will contact you shortly via phone or WhatsApp with details.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
              Parent Name *
            </label>
            <input
              type="text"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-all"
              placeholder="e.g. Mrs. Sharma"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                Student Name *
              </label>
              <input
                type="text"
                name="studentName"
                required
                value={formData.studentName}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-all"
                placeholder="e.g. Kartik Sharma"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                Class *
              </label>
              <select
                name="targetClass"
                value={formData.targetClass}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-all"
              >
                <option value="Nursery">Nursery / Play School</option>
                <option value="Primary">Primary (I - V)</option>
                <option value="Middle">Middle (VI - VIII)</option>
                <option value="Secondary">Secondary (IX - X)</option>
                <option value="SeniorSec">Senior Secondary (XI - XII)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                WhatsApp Phone *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-all"
                placeholder="e.g. +91 95999 31443"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-all"
                placeholder="email@address.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
              Custom Inquiry Notes
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-xl px-4 py-2.5 text-xs focus:outline-none transition-all resize-none"
              placeholder="e.g. I want details on bus transport routes near Indirapuram..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#0041f5] hover:bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md mt-2 flex items-center justify-center gap-2"
          >
            Submit Inquiry Now
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  );
}
