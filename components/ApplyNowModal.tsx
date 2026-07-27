'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyNowModal({ isOpen, onClose }: ApplyNowModalProps) {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState({
    childName: '',
    dob: '',
    session: '2026-2027',
    grade: 'Grade I',
    lastSchool: '',
    parentName: '',
    parentOccupation: '',
    mobile: '',
    email: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setForm({
      childName: '',
      dob: '',
      session: '2026-2027',
      grade: 'Grade I',
      lastSchool: '',
      parentName: '',
      parentOccupation: '',
      mobile: '',
      email: '',
      address: ''
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100"
          >
            <button 
              onClick={handleResetAndClose}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-slate-900 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {!submitted ? (
              <div className="p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0041F5]">ADMISSIONS OFFICE</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">NIMT Admissions Application Form</h3>
                  <p className="text-xs text-gray-500">Provide basic student details below to initiate formal review by our Admissions Committee.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Child's Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={form.childName}
                        onChange={(e) => setForm({ ...form, childName: e.target.value })}
                        placeholder="e.g. Aarav Rakesh Sharma" 
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Date of Birth</label>
                      <input 
                        type="date" 
                        required
                        value={form.dob}
                        onChange={(e) => setForm({ ...form, dob: e.target.value })}
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Academic Session</label>
                      <select 
                        value={form.session}
                        onChange={(e) => setForm({ ...form, session: e.target.value })}
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      >
                        <option>2026-2027</option>
                        <option>2027-2028</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Target Grade</label>
                      <select 
                        value={form.grade}
                        onChange={(e) => setForm({ ...form, grade: e.target.value })}
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      >
                        <option>Pre-Nursery</option>
                        <option>Nursery</option>
                        <option>Kindergarten</option>
                        <option>Grade I</option>
                        <option>Grade V</option>
                        <option>Grade IX</option>
                        <option>Grade XI</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Last School Attended (If Any)</label>
                    <input 
                      type="text" 
                      value={form.lastSchool}
                      onChange={(e) => setForm({ ...form, lastSchool: e.target.value })}
                      placeholder="e.g. Little Angels Playschool" 
                      className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Parent's Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={form.parentName}
                        onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                        placeholder="e.g. Rakesh Sharma" 
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Parent's Occupation</label>
                      <input 
                        type="text" 
                        required
                        value={form.parentOccupation}
                        onChange={(e) => setForm({ ...form, parentOccupation: e.target.value })}
                        placeholder="e.g. Software Architect" 
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Mobile Number</label>
                      <input 
                        type="tel" 
                        required
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        placeholder="e.g. +91 9876543210" 
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. rakesh@gmail.com" 
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Residential Address</label>
                    <textarea 
                      required
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="e.g. Tower B-402, Shalimar Housing, Ghaziabad" 
                      rows={2}
                      className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#0041F5] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-[#0041F5]/10 flex items-center justify-center gap-2 mt-2 text-sm"
                  >
                    Submit Registration Request
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center space-y-6">
                <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Registration Submitted Successfully!</h3>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{form.parentName}</span>. We have logged an official admission inquiry for your child <span className="font-bold text-slate-900">{form.childName}</span> for admission to <span className="font-bold text-[#0041F5]">{form.grade}</span> during session <span className="font-bold text-slate-900">{form.session}</span>.
                  </p>
                </div>

                <div className="bg-[#F6EADA]/40 border border-[#F6EADA] rounded-xl p-4 text-left max-w-sm mx-auto space-y-1.5">
                  <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider font-mono">Inquiry ID Code</span>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-md font-bold text-slate-800 tracking-wider">NIMT-APP-2026-992B</span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">RECEIVED</span>
                  </div>
                  <p className="text-[10px] text-gray-500 pt-1.5 border-t border-gray-200/60 font-sans">
                    Our admissions panel will evaluate your details and call you on your registered telephone number (+91 {form.mobile}) within the next 24 business hours to organize formal documentation.
                  </p>
                </div>

                <button 
                  onClick={handleResetAndClose}
                  className="bg-[#0041F5] hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}