"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Mail, 
  Check, 
  Sparkles, 
  GraduationCap, 
  Send, 
  Bookmark, 
  X
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogs";
import { cn } from "@/lib/utils";

export default function BlogsPage() {
  // Modals state
  const [showVisitModal, setShowVisitModal] = useState<boolean>(false);
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);
  const [newsletterLoading, setNewsletterLoading] = useState<boolean>(false);

  // Visit Form state
  const [visitForm, setVisitForm] = useState({
    parentName: "",
    email: "",
    phone: "",
    grade: "Grade 1",
    visitDate: "2026-07-10",
    message: ""
  });
  const [visitSubmitted, setVisitSubmitted] = useState<boolean>(false);
  const [visitLoading, setVisitLoading] = useState<boolean>(false);

  // Apply Form state
  const [applyForm, setApplyForm] = useState({
    parentName: "",
    childName: "",
    grade: "Grade 1",
    phone: "",
    email: "",
    prevSchool: "",
    message: ""
  });
  const [applySubmitted, setApplySubmitted] = useState<boolean>(false);
  const [applyLoading, setApplyLoading] = useState<boolean>(false);

  // Saved/Bookmarked blogs
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  // Handle subscribe action
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterLoading(true);
    setTimeout(() => {
      setNewsletterLoading(false);
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }, 1200);
  };

  // Handle visit action
  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitForm.parentName || !visitForm.email || !visitForm.phone) return;
    setVisitLoading(true);
    setTimeout(() => {
      setVisitLoading(false);
      setVisitSubmitted(true);
    }, 1500);
  };

  // Handle apply action
  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyForm.parentName || !applyForm.childName || !applyForm.phone || !applyForm.email) return;
    setApplyLoading(true);
    setTimeout(() => {
      setApplyLoading(false);
      setApplySubmitted(true);
    }, 1500);
  };

  // Toggle bookmarks
  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Reset forms on close
  const closeVisitModal = () => {
    setShowVisitModal(false);
    setTimeout(() => {
      setVisitSubmitted(false);
      setVisitForm({ parentName: "", email: "", phone: "", grade: "Grade 1", visitDate: "2026-07-10", message: "" });
    }, 300);
  };

  const closeApplyModal = () => {
    setShowApplyModal(false);
    setTimeout(() => {
      setApplySubmitted(false);
      setApplyForm({ parentName: "", childName: "", grade: "Grade 1", phone: "", email: "", prevSchool: "", message: "" });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 font-sans selection:bg-[#fffc4d] selection:text-slate-900">
      
      {/* PAGE HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-white to-[#faf8f5]" id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-[#0041f5]/10 text-[#0041f5]">
                <Sparkles className="w-3.5 h-3.5 fill-[#fffc4d] stroke-[#0041f5]" /> NIMT BLOG
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight sm:leading-none">
                Learning Beyond <br />
                <span className="text-[#0041f5] relative inline-block">
                  the Classroom
                  <span className="absolute left-0 bottom-1 w-full h-2 bg-[#fffc4d] -z-10 rounded-full" />
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Read helpful articles on parenting, school admissions, study tips, student development, career guidance, and the latest updates from NIMT Beacon School.
              </p>
              
              <div className="pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-6">
                <div>
                  <span className="block text-2xl font-black text-[#0041f5]">4.9★</span>
                  <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Parent Rating</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-slate-900">15+</span>
                  <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Expert Advisors</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-slate-900">99%</span>
                  <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Board Success</span>
                </div>
              </div>
            </div>

            {/* Right Column: Image Banner */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 group border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200"
                  alt="Students in library"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-xl bg-[#0041f5] flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
          
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SIMPLE BLOG GRID SECTION: 4 cols on Desktop, 2 cols on Tablet, 1 col on Mobile */}
      <section className="py-12 bg-white border-t border-slate-200/60" id="blogs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {BLOG_POSTS.map((blog) => {
                const isBookmarked = bookmarkedIds.includes(blog.id);

                return (
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={blog.id}
                    className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-md hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <Link href={`/blogs/${blog.slug}`} className="flex flex-col h-full justify-between">
                      {/* Card Image Area */}
                      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                        <Image 
                          src={blog.coverImage}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest bg-white/90 text-[#0041f5] backdrop-blur-sm shadow-sm">
                            {blog.category}
                          </span>
                        </div>

                        <button
                          onClick={(e) => toggleBookmark(blog.id, e)}
                          className={cn(
                            "absolute top-3 right-3 p-1.5 rounded-full transition-all bg-white/90 backdrop-blur-sm shadow-sm",
                            isBookmarked ? "text-[#0041f5]" : "text-slate-400 hover:text-slate-600"
                          )}
                          title={isBookmarked ? "Bookmarked" : "Save article"}
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>

                      {/* Card Text & Metadata */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-[#0041f5]" />
                              {blog.publishedDate}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#0041f5]" />
                              {blog.readingTime}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#0041f5] transition-colors line-clamp-2">
                            {blog.title}
                          </h3>

                          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                            {blog.excerpt}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0041f5] group-hover:text-slate-900 transition-colors inline-flex items-center gap-1">
                            Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 bg-[#0041f5] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto text-[#fffc4d]">
            <Mail className="w-6 h-6" />
          </div>

          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Never Miss a New Article
            </h2>
            <p className="text-slate-100/90 text-sm sm:text-base leading-relaxed">
              Get useful education tips, parenting advice, and school updates delivered directly to your inbox.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {newsletterSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 flex items-center justify-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#fffc4d] text-slate-900 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white">You&apos;re on the list!</h4>
                  <p className="text-[11px] text-slate-200">Watch your inbox for updates.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-5 py-4 bg-white/10 hover:bg-white/15 focus:bg-white text-white focus:text-slate-900 rounded-2xl placeholder-slate-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#fffc4d] transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={newsletterLoading}
                  className="px-6 py-4 bg-[#fffc4d] hover:bg-yellow-400 text-slate-900 font-extrabold rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#fffc4d]/10 shrink-0 flex items-center justify-center gap-2 min-w-[120px]"
                >
                  {newsletterLoading ? (
                    <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Subscribe <Send className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CAMPUS VISIT MODAL */}
      <AnimatePresence>
        {showVisitModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeVisitModal}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-[#f6eada]">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Book Campus Visit</h3>
                  <p className="text-slate-500 text-[11px] font-medium uppercase tracking-wider">Experience NIMT first-hand</p>
                </div>
                <button onClick={closeVisitModal} className="p-1.5 text-slate-500 hover:text-slate-800 rounded-full hover:bg-white/50">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {visitSubmitted ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900">Campus Tour Scheduled!</h4>
                    <button onClick={closeVisitModal} className="mt-4 px-6 py-3 bg-[#0041f5] text-white text-xs font-bold rounded-xl uppercase tracking-wider">
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleVisitSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Parent Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={visitForm.parentName}
                        onChange={(e) => setVisitForm({...visitForm, parentName: e.target.value})}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0041f5]"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={visitForm.email}
                          onChange={(e) => setVisitForm({...visitForm, email: e.target.value})}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0041f5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
                        <input 
                          type="tel" 
                          required
                          value={visitForm.phone}
                          onChange={(e) => setVisitForm({...visitForm, phone: e.target.value})}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0041f5]"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={visitLoading}
                      className="w-full py-3.5 bg-[#0041f5] hover:bg-[#0034c4] text-white font-extrabold rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      {visitLoading ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Confirm Appointment"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ADMISSIONS APPLICATION MODAL */}
      <AnimatePresence>
        {showApplyModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeApplyModal}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-[#0041f5] text-white">
                <div>
                  <h3 className="font-extrabold text-white text-lg">Online Admission Form</h3>
                  <p className="text-slate-200 text-[11px] font-medium uppercase tracking-wider">Academic Session 2026-27</p>
                </div>
                <button onClick={closeApplyModal} className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/15">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {applySubmitted ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900">Application Submitted!</h4>
                    <button onClick={closeApplyModal} className="mt-6 px-6 py-3 bg-[#0041f5] text-white text-xs font-bold rounded-xl uppercase tracking-wider">
                      Close Portal
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Parent Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={applyForm.parentName}
                          onChange={(e) => setApplyForm({...applyForm, parentName: e.target.value})}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0041f5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Candidate Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={applyForm.childName}
                          onChange={(e) => setApplyForm({...applyForm, childName: e.target.value})}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0041f5]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Contact Phone *</label>
                        <input 
                          type="tel" 
                          required
                          value={applyForm.phone}
                          onChange={(e) => setApplyForm({...applyForm, phone: e.target.value})}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0041f5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">Contact Email *</label>
                        <input 
                          type="email" 
                          required
                          value={applyForm.email}
                          onChange={(e) => setApplyForm({...applyForm, email: e.target.value})}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0041f5]"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={applyLoading}
                      className="w-full py-3.5 bg-[#0041f5] hover:bg-[#0034c4] text-white font-extrabold rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      {applyLoading ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Submit Application"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}