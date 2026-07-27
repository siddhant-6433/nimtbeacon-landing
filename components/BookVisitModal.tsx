'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Check } from 'lucide-react';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookVisitModal({ isOpen, onClose }: BookVisitModalProps) {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState({
    parentName: '',
    mobile: '',
    email: '',
    childName: '',
    grade: 'Grade I',
    visitDate: '',
    visitSlot: 'Morning (9:00 AM - 11:00 AM)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setForm({
      parentName: '',
      mobile: '',
      email: '',
      childName: '',
      grade: 'Grade I',
      visitDate: '',
      visitSlot: 'Morning (9:00 AM - 11:00 AM)'
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
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-100"
          >
            <button 
              onClick={handleResetAndClose}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-slate-900 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {!submitted ? (
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0041F5]">PERSONALIZED TOUR</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Schedule Campus Tour</h3>
                  <p className="text-xs text-gray-500">Experience our physical science modules, creative playgrounds, and classrooms in-person.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Parent's Name</label>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Child's Name</label>
                      <input 
                        type="text" 
                        required
                        value={form.childName}
                        onChange={(e) => setForm({ ...form, childName: e.target.value })}
                        placeholder="e.g. Aarav Sharma" 
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Admission Grade</label>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Preferred Date</label>
                      <input 
                        type="date" 
                        required
                        value={form.visitDate}
                        onChange={(e) => setForm({ ...form, visitDate: e.target.value })}
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Preferred Slot</label>
                      <select 
                        value={form.visitSlot}
                        onChange={(e) => setForm({ ...form, visitSlot: e.target.value })}
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#0041F5]"
                      >
                        <option>Morning (9:00 AM - 11:00 AM)</option>
                        <option>Noon (12:00 PM - 2:00 PM)</option>
                        <option>Afternoon (3:00 PM - 5:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#0041F5] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-[#0041F5]/10 flex items-center justify-center gap-2 mt-2 text-sm"
                  >
                    Confirm Schedule Slot
                    <Check className="h-4 w-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center space-y-6">
                <div className="h-16 w-16 bg-[#0041F5]/10 rounded-full flex items-center justify-center text-[#0041F5] mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Campus Visit Reserved!</h3>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{form.parentName}</span>. We have blocked your personal interactive slot on <span className="font-bold text-[#0041F5]">{form.visitDate}</span> during the <span className="font-bold text-slate-900">{form.visitSlot}</span>.
                  </p>
                </div>
                
                <div className="bg-[#F6EADA]/40 border border-[#F6EADA] rounded-xl p-4 text-left max-w-sm mx-auto space-y-1.5">
                  <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider">Reservation Reference</span>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-md font-bold text-slate-800 tracking-wider">NIMT-2026-X84A</span>
                    <span className="text-xs bg-[#0041F5]/10 text-[#0041F5] px-2 py-0.5 rounded font-bold uppercase">CONFIRMED</span>
                  </div>
                  <p className="text-[10px] text-gray-500 pt-1.5 border-t border-gray-200/60">
                    Please carry your confirmation code and arrive 10 minutes prior to your allocated slot. Our Admissions Coordinator will meet you at the primary reception desk.
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