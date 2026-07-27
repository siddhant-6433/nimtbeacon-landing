'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  GraduationCap,
  Phone,
  Sparkles,
  ArrowRight,
  Calendar,
  Award,
  ShieldCheck,
  Users,
  School,
  Shield,
  Tv,
  Trophy,
  Camera,
  FileText,
  Compass,
  ClipboardCheck,
  Baby,
  Star,
  BookOpen,
  Layers,
  FileOutput,
  FileSpreadsheet,
  Fingerprint,
  MapPin,
  Heart,
  AlertCircle,
  Check,
  Download,
  Mail,
  HelpCircle,
  Loader2,
  Clock,
  Cpu,
  HeartHandshake,
  Eye,
  ChevronDown,
  Milestone,
  Bus,
  MessageSquare,
  CheckCircle2,
  Send
} from 'lucide-react';
import { IMAGES } from '@/lib/images';

// Global Scroll Utility
const scrollToSection = (id: string, offset = 80) => {
  const element = document.getElementById(id);
  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

/* ==========================================================================
   1. NAVBAR COMPONENT
   ========================================================================== */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why NIMT', id: 'why-choose' },
    { name: 'Admissions Process', id: 'admission-process' },
    { name: 'Eligibility', id: 'eligibility' },
    { name: 'Fees', id: 'fee-structure' },
    { name: 'Scholarships', id: 'scholarships' },
    { name: 'Gallery', id: 'photo-gallery' },
    { name: 'FAQs', id: 'faqs' },
  ];
}

/* ==========================================================================
   2. HERO COMPONENT (UPDATED WITH FEE DOWNLOAD GATEWAY)
   ========================================================================== */
interface HeroProps {
  onOpenFeeModal: () => void;
}

function Hero({ onOpenFeeModal }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#f6eada]/50 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-8 z-10">
            {/* Admissions Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-[#0041f5]/10 border border-[#0041f5]/20 py-1.5 px-4 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-[#0041f5]" />
              <span className="font-sans font-semibold text-xs tracking-wider text-[#0041f5] uppercase">
                Admissions Open 2026–27
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.1]"
            >
              Admissions Open for <br />
              <span className="text-[#0041f5] relative">
                Nursery to Class XII
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#fffc4d] -z-10 rounded"></span>
              </span>
            </motion.h1>

            {/* Simple Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Start your child&apos;s journey with NIMT Beacon School. We offer Day School, Day Boarding, and Full Boarding programs in a safe, modern, and inspiring learning environment that nurtures excellence.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <button
                onClick={() => scrollToSection('enquiry-form')}
                className="bg-[#0041f5] hover:bg-blue-700 text-white font-sans font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer text-base border-none"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              {/* UPDATED BUTTON */}
              <button
                onClick={onOpenFeeModal}
                className="bg-white hover:bg-stone-50 text-slate-900 border border-stone-200 font-sans font-semibold py-4 px-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-base"
              >
                <Download className="w-4 h-4 text-[#0041f5]" />
                <span>Download Fee Structure</span>
              </button>
            </motion.div>

            {/* Floating Info Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-6 grid grid-cols-2 gap-4 max-w-lg"
            >
              <div className="flex items-center space-x-2.5 bg-stone-50 border border-stone-100 p-3 rounded-xl">
                <div className="bg-[#fffc4d] p-1.5 rounded-lg text-slate-900 flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="font-sans font-semibold text-xs text-slate-800">CBSE Curriculum</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-stone-50 border border-stone-100 p-3 rounded-xl">
                <div className="bg-[#0041f5]/10 p-1.5 rounded-lg text-[#0041f5] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="font-sans font-semibold text-xs text-slate-800">Safe & Caring Habitat</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#f6eada] rounded-full filter blur-[80px] opacity-40 -z-20"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src={IMAGES.hero}
                alt="Families and Students Visiting NIMT Beacon School Campus"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent"></div>
            </motion.div>

            {/* Program highlights floating badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -right-4 top-1/4 bg-white/95 backdrop-blur-md shadow-xl border border-stone-100 p-4 rounded-2xl hidden md:flex flex-col space-y-1"
            >
              <span className="text-xs text-stone-500 font-sans uppercase font-bold tracking-widest">Format options</span>
              <span className="font-sans font-bold text-sm text-[#0041f5]">Day School</span>
              <span className="font-sans font-bold text-sm text-[#0041f5]">Day Boarding</span>
              <span className="font-sans font-bold text-sm text-[#0041f5]">Full Boarding</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -left-4 bottom-6 bg-white/95 backdrop-blur-md shadow-xl border border-stone-100 py-3 px-5 rounded-2xl hidden md:flex items-center space-x-3"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="font-sans font-bold text-sm text-slate-800">Personalized Campus Tours Live</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   3. UPDATED FEE STRUCTURE DOWNLOAD MODAL (WITH STRICT +91 VALIDATION & PDF DEPLOYMENT)
   ========================================================================== */
interface FeeDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadSuccess: () => void;
}

function FeeDownloadModal({ isOpen, onClose, onDownloadSuccess }: FeeDownloadModalProps) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulated API call tracking data execution
    setTimeout(() => {
      setIsProcessing(false);
      
      // Trigger target file initialization path pointing directly to public/fee.pdf
      const link = document.createElement('a');
      link.href = '/fee.pdf';
      link.setAttribute('download', 'fee.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean form inputs, invoke parent metrics notification popup, close modal context
      setName('');
      setMobile('');
      onDownloadSuccess();
      onClose();
    }, 1800);
  };

  // Restricts non-numeric characters on standard input events natively
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanDigitsOnly = e.target.value.replace(/\D/g, '');
    setMobile(cleanDigitsOnly.slice(0, 10));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-stone-100"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-stone-400 hover:text-slate-900 p-1.5 rounded-full hover:bg-stone-100 transition-colors cursor-pointer border-none bg-transparent"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2 mb-6">
              <div className="bg-[#0041f5]/10 text-[#0041f5] p-3 rounded-full w-fit mx-auto mb-2">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-extrabold text-xl text-slate-900">Get 2026-27 Fee Details</h4>
              <p className="font-sans text-xs text-stone-500">
                Please enter your details below to unlock the official fee structure documentation instantly.
              </p>
            </div>

            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block font-sans font-bold text-[11px] text-stone-700 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 focus:border-[#0041f5] focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-sans font-bold text-[11px] text-stone-700 uppercase tracking-wider">
                  Mobile / WhatsApp Number *
                </label>
                
                {/* Structural Input Prefix wrapper aligning dynamic country specifications */}
                <div className="flex rounded-xl bg-stone-50 border border-stone-200 focus-within:border-[#0041f5] focus-within:bg-white overflow-hidden transition-all duration-300">
                  <span className="bg-stone-100 border-r border-stone-200 text-stone-600 px-3.5 py-3 text-sm flex items-center font-sans font-semibold select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    placeholder="9876543210"
                    value={mobile}
                    onChange={handleMobileChange}
                    className="w-full bg-transparent text-slate-900 px-4 py-3 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full mt-2 bg-[#0041f5] hover:bg-blue-700 text-white font-sans font-bold py-3.5 px-4 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-xs uppercase tracking-wider border-none disabled:opacity-85"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Preparing PDF File...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Fee Structure Now</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ==========================================================================
   4. ADMISSION PROCESS COMPONENT
   ========================================================================== */
function AdmissionProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: 'STEP 1',
      title: 'Submit Admission Enquiry',
      description: 'Complete the enquiry form online or contact our admissions team directly through WhatsApp or phone.',
      image: IMAGES.stepEnquiry,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      num: 'STEP 2',
      title: 'Campus Visit',
      description: 'Visit the campus with your family, explore classrooms, laboratories, sports facilities, library, and boarding structures.',
      image: IMAGES.stepVisit,
      icon: Compass,
      color: 'bg-emerald-500',
    },
    {
      num: 'STEP 3',
      title: 'Student Interaction / Entrance Assessment',
      description: 'Students may attend a simple interaction or academic assessment depending on the class applying for.',
      image: IMAGES.stepAssessment,
      icon: ClipboardCheck,
      color: 'bg-amber-500',
    },
    {
      num: 'STEP 4',
      title: 'Admission Confirmation',
      description: 'Complete documentation, fee formalities, and secure your child&apos;s seat in the upcoming session.',
      image: IMAGES.stepConfirmation,
      icon: Award,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section id="admission-process" className="py-20 lg:py-24 bg-[#f6eada]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-sans font-bold text-xs tracking-widest text-[#0041f5] uppercase">
            Simple 4-Step Entrance
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Our Transparent Admission Process
          </h2>
          <p className="font-sans text-stone-500 text-sm sm:text-base leading-relaxed">
            We ensure the onboarding journey is warm, direct, and straightforward. Explore our structured stages below.
          </p>
        </div>

        <div className="hidden lg:block space-y-12">
          <div className="relative max-w-4xl mx-auto px-4">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-stone-200 -translate-y-1/2 -z-10"></div>
            <div className="flex justify-between items-center">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className="relative flex flex-col items-center group cursor-pointer focus:outline-none border-none bg-transparent"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#0041f5] text-white border-white ring-4 ring-blue-100 scale-110'
                          : 'bg-white text-stone-400 border-stone-200 group-hover:border-stone-400 group-hover:text-stone-600'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`font-sans font-bold text-xs mt-3 transition-colors duration-300 ${
                        isActive ? 'text-[#0041f5]' : 'text-stone-500 group-hover:text-stone-800'
                      }`}
                    >
                      {step.num}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-white border border-stone-200/50 rounded-3xl p-8 shadow-xl">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center space-x-2 bg-[#0041f5]/10 border border-[#0041f5]/20 py-1 px-3.5 rounded-full">
                  <span className="font-sans font-extrabold text-[11px] tracking-wider text-[#0041f5]">
                    {steps[activeStep].num}
                  </span>
                </div>
                <h3 className="font-sans font-extrabold text-2xl text-slate-900 leading-tight">
                  {steps[activeStep].title}
                </h3>
                <p className="font-sans text-stone-600 text-sm leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:hidden space-y-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white border border-stone-200/60 p-6 rounded-2xl shadow-sm flex flex-col space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-[#0041f5] text-white p-2 rounded-xl">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-extrabold text-[10px] text-[#0041f5] uppercase tracking-wider">
                      {step.num}
                    </span>
                    <h3 className="font-sans font-bold text-base text-slate-900 leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>

                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   5. ELIGIBILITY COMPONENT
   ========================================================================== */
function Eligibility() {}

/* ==========================================================================
   6. REQUIRED DOCUMENTS COMPONENT
   ========================================================================== */
function RequiredDocuments() {
  const docs = [
    { title: 'Birth Certificate', icon: Baby, detail: 'Official birth registry certificate validating age benchmark criteria.' },
    { title: 'Passport Size Photographs', icon: Camera, detail: '3 recent high-resolution colour photographs of the child and parents.' },
    { title: 'Transfer Certificate', icon: FileOutput, detail: 'Countersigned Transfer Certificate from the previous school.' },
    { title: 'Previous Academic Report Card', icon: FileSpreadsheet, detail: 'Marks statement/portfolio from the immediate preceding academic level.' },
    { title: 'Aadhar Card (Student & Parent)', icon: Fingerprint, detail: 'Copy of identity logs for student, mother, and father.' },
    { title: 'Address Proof', icon: MapPin, detail: 'Valid electricity bill, voter card, passport, or rent lease document.' },
    { title: 'Medical Information', icon: Heart, detail: 'Simple medical fitness fitness log, immunization details, or blood group reports.' },
  ];

  return (
    <section id="required-documents" className="py-20 lg:py-24 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-sans font-bold text-xs tracking-widest text-[#0041f5] uppercase">Checklist Pointers</span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">Required Admission Documents</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {docs.map((doc, idx) => {
            const IconComponent = doc.icon;
            return (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-stone-200/50 hover:border-[#0041f5]/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-[#0041f5]/5 text-[#0041f5] p-3 rounded-xl w-fit group-hover:bg-[#0041f5] group-hover:text-white transition-colors duration-300 mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-sm text-slate-900 mb-1.5">{doc.title}</h3>
                <p className="font-sans text-stone-500 text-xs leading-relaxed">{doc.detail}</p>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#0041f5] text-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-full"
          >
            <div>
              <div className="bg-[#fffc4d]/20 text-[#fffc4d] p-2 rounded-lg w-fit mb-4">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-sm text-[#fffc4d] uppercase tracking-wider mb-2">Need Help?</h3>
              <p className="font-sans text-xs text-white/90 leading-relaxed">
                Our counselor office will assist with compiling, printing, or attesting documents on-the-spot during your visit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   7. FEE STRUCTURE COMPONENT
   ========================================================================== */
interface FeeStructureProps {
  onSelectProgram: (programName: string) => void;
}

function FeeStructure({ onSelectProgram }: FeeStructureProps) {
  const programs = [
    {
      title: 'Day School',
      badge: 'Balanced Academic Path',
      features: [
        'Rigorous CBSE curriculum mapping',
        'Smart audio-visual modern classrooms',
        'Daily standard lunch & nutrition options',
        'Primary sports skill development',
        'Standard lab and library access',
      ],
      description: 'Ideal for parents seeking excellent scholastic standards and active social development within traditional school timings.',
    },
    {
      title: 'Day Boarding',
      badge: 'Extended Care & Guidance',
      features: [
        'All Day School academic features',
        'Supervised homework & study extension sessions',
        'Evening healthy high-nutrition snacks',
        'Dedicated sport specialization training',
        'Creative arts and drama hobbies classes',
      ],
      description: 'Designed for working parents, providing professional homework guidance and structural evening sports under school care.',
    },
    {
      title: 'Full Boarding',
      badge: 'Immersive Boarding Habitat',
      features: [
        'All Day Boarding facilities',
        'Safe air-cooled sharing rooms with study tables',
        '4 balanced meals supervised by dieticians',
        'Round-the-clock medical desk & security guards',
        'Supervised weekend skill labs & campus outings',
      ],
      description: 'A luxurious home away from home focusing on independent habits, deep social bonding, and continuous mentor guidelines.',
    },
  ];

  return (
    <section id="fee-structure" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-sans font-bold text-xs tracking-widest text-[#0041f5] uppercase">Transparent Policies</span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">Flexible Program Formats</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-16">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-stone-50 border border-stone-200/65 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative ${
                prog.title === 'Day Boarding' ? 'ring-2 ring-[#0041f5]/20 bg-white' : ''
              }`}
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[#0041f5] font-sans font-semibold text-xs uppercase tracking-widest font-bold">{prog.badge}</span>
                  <h3 className="font-sans font-extrabold text-2xl text-slate-900 mt-1">{prog.title}</h3>
                  <p className="font-sans text-stone-500 text-xs mt-2 leading-relaxed h-12">{prog.description}</p>
                </div>

                <div className="pt-4 border-t border-stone-200/60">
                  <ul className="space-y-2.5">
                    {prog.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2.5">
                        <div className="bg-[#0041f5]/10 text-[#0041f5] p-0.5 rounded-full mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-sans text-stone-700 text-xs leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-stone-200/60">
                <button
                  onClick={() => onSelectProgram(prog.title)}
                  className="w-full bg-[#0041f5] hover:bg-blue-700 text-white font-sans font-bold py-3 px-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-xs uppercase tracking-wider cursor-pointer text-center border-none"
                >
                  Request Fee Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   8. SCHOLARSHIPS COMPONENT
   ========================================================================== */
function Scholarships() {
  const cards = [
    { title: 'Academic Merit', icon: GraduationCap, description: 'Awarded to students showcasing spectacular board outcomes.' },
    { title: 'Scholarship Test', icon: Award, description: 'Evaluated through our annual NIMT Beacon Cognitive Scholarship exam.' },
    { title: 'Special Achievements', icon: Trophy, description: 'Supporting achievements in sports, classic music, or creative tech.' },
  ];

  return (
    <section id="scholarships" className="py-20 lg:py-24 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <motion.div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image src={IMAGES.scholarships} alt="Scholarships" fill className="object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">Merit-Based Scholarship Opportunities</h2>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {cards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={card.title} className="bg-white border border-stone-200/50 p-5 rounded-2xl flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="bg-[#0041f5]/10 text-[#0041f5] p-2.5 rounded-xl w-fit"><IconComp className="w-5 h-5" /></div>
                      <h3 className="font-sans font-bold text-sm text-slate-900">{card.title}</h3>
                      <p className="font-sans text-stone-500 text-[11px] leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   9. TRANSPORT COMPONENT
   ========================================================================== */
function Transport() {
  const cards = [
    { title: 'GPS-enabled buses', icon: MapPin, detail: 'Live cellular navigation and SMS arrival alerts shared with parents.' },
    { title: 'Trained drivers', icon: Users, detail: 'Fully certified commercial drivers verified with safety clearances.' },
    { title: 'Female attendant', icon: Heart, detail: 'Mandatory female conductor/attendant present inside every vehicle.' },
    { title: 'Well-planned routes', icon: Compass, detail: 'Sparsely timed routes mapped specifically to avoid risky zones.' },
  ];

  return (
    <section id="transport" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">Safe & Regulated School Transport</h2>
            <p className="font-sans text-stone-500 text-sm">NIMT Beacon School operates a modern transport fleet.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="bg-stone-50 border p-5 rounded-2xl space-y-2">
                    <div className="bg-[#0041f5]/10 text-[#0041f5] p-2 rounded-xl w-fit"><IconComponent className="w-5 h-5" /></div>
                    <h3 className="font-sans font-bold text-sm text-slate-900">{item.title}</h3>
                    <p className="font-sans text-stone-500 text-[11px]">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image src={IMAGES.transport} alt="Buses" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   10. ENQUIRY FORM COMPONENT
   ========================================================================== */
interface EnquiryFormProps {
  selectedProgram: string;
  onClearProgram: () => void;
}

function EnquiryForm({ selectedProgram, onClearProgram }: EnquiryFormProps) {
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');
  const [prevSelectedProgram, setPrevSelectedProgram] = useState(selectedProgram);
  const [program, setProgram] = useState('Day School');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [refId, setRefId] = useState('');

  if (selectedProgram !== prevSelectedProgram) {
    setPrevSelectedProgram(selectedProgram);
    if (selectedProgram) {
      setProgram(selectedProgram);
    }
  }

  const classesList = ['Play School', 'Nursery', 'KG / Prep', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setRefId('NIMT-2026-' + Math.floor(1000 + Math.random() * 9000));
      setShowSuccessModal(true);
    }, 1500);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setParentName('');
    setStudentName('');
    setMobileNumber('');
    setEmail('');
    setGrade('');
    setMessage('');
    onClearProgram();
  };

  return (
    <section id="enquiry-form" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 border border-stone-200/50 rounded-3xl overflow-hidden shadow-xl grid lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 relative min-h-[300px] flex flex-col justify-end p-8 bg-slate-900 overflow-hidden">
            <Image src={IMAGES.counselorWithParents} alt="Counselor" fill className="object-cover opacity-60" referrerPolicy="no-referrer" />
            <div className="relative space-y-4 z-10 text-white">
              <h3 className="font-sans font-extrabold text-2xl text-white">We are here to help you make the best choice</h3>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 bg-white flex flex-col justify-center">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 mb-6">Admission Enquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block font-sans font-bold text-[11px] text-stone-700 uppercase">Parent&apos;s Name *</label>
                  <input type="text" required placeholder="Enter full name" value={parentName} onChange={(e) => setParentName(e.target.value)} className="w-full bg-stone-50 border rounded-xl px-4 py-3 text-sm focus:outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="block font-sans font-bold text-[11px] text-stone-700 uppercase">Student&apos;s Name *</label>
                  <input type="text" required placeholder="Enter child's name" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="w-full bg-stone-50 border rounded-xl px-4 py-3 text-sm focus:outline-none" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block font-sans font-bold text-[11px] text-stone-700 uppercase">WhatsApp/Mobile *</label>
                  <input type="tel" required pattern="[0-9]{10}" placeholder="e.g. 9876543210" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="w-full bg-stone-50 border rounded-xl px-4 py-3 text-sm focus:outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="block font-sans font-bold text-[11px] text-stone-700 uppercase">Email Address *</label>
                  <input type="email" required placeholder="parent@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-stone-50 border rounded-xl px-4 py-3 text-sm focus:outline-none" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block font-sans font-bold text-[11px] text-stone-700 uppercase">Class Applying For *</label>
                  <select required value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full bg-stone-50 border rounded-xl px-4 py-3 text-sm focus:outline-none">
                    <option value="" disabled>Select Class</option>
                    {classesList.map((cls) => (<option key={cls} value={cls}>{cls}</option>))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block font-sans font-bold text-[11px] text-stone-700 uppercase">Program Format *</label>
                  <select required value={program} onChange={(e) => setProgram(e.target.value)} className="w-full bg-stone-50 border rounded-xl px-4 py-3 text-sm focus:outline-none">
                    <option value="Day School">Day School</option>
                    <option value="Day Boarding">Day Boarding</option>
                    <option value="Full Boarding">Full Boarding</option>
                  </select>
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-[#0041f5] hover:bg-blue-700 text-white font-sans font-bold py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 border-none uppercase text-sm tracking-wider">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4 text-[#fffc4d]" />}
                <span>Submit Online Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white max-w-md w-full rounded-3xl p-8 text-center space-y-5 relative">
              <button onClick={handleCloseModal} className="absolute top-4 right-4 text-stone-400 border-none bg-transparent cursor-pointer"><X className="w-5 h-5" /></button>
              <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full w-fit mx-auto"><CheckCircle2 className="w-10 h-10" /></div>
              <h4 className="font-sans font-extrabold text-xl text-slate-900">Enquiry Received Successfully!</h4>
              <div className="bg-stone-50 border rounded-2xl py-3 px-5 font-mono text-xs flex justify-between items-center">
                <span>REFERENCE NO:</span>
                <span className="font-bold text-[#0041f5]">{refId}</span>
              </div>
              <button onClick={handleCloseModal} className="w-full bg-slate-900 text-white py-3.5 rounded-2xl font-bold border-none uppercase text-xs tracking-wider cursor-pointer">Close & Continue</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ==========================================================================
   11. MAIN ADMISSIONS PAGE
   ========================================================================== */
export default function AdmissionsPage() {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
  const [showDownloadNotification, setShowDownloadNotification] = useState(false);

  const handleSelectProgram = (programName: string) => {
    setSelectedProgram(programName);
    scrollToSection('enquiry-form');
  };

  const handleClearProgram = () => {
    setSelectedProgram('');
  };

  const triggerDownloadNotification = () => {
    setShowDownloadNotification(true);
    setTimeout(() => setShowDownloadNotification(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden antialiased font-sans selection:bg-[#fffc4d]/80 selection:text-slate-950">
      <main>
        {/* Pass Modal Opener State logic downward */}
        <Hero onOpenFeeModal={() => setIsFeeModalOpen(true)} />

        <AdmissionProcess />
        <RequiredDocuments />
        <FeeStructure onSelectProgram={handleSelectProgram} />
        <Scholarships />
        <Transport />
        
        <EnquiryForm
          selectedProgram={selectedProgram}
          onClearProgram={handleClearProgram}
        />
      </main>

      {/* Popups & Notifications Engine */}
      <FeeDownloadModal 
        isOpen={isFeeModalOpen}
        onClose={() => setIsFeeModalOpen(false)}
        onDownloadSuccess={triggerDownloadNotification}
      />

      <AnimatePresence>
        {showDownloadNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0041f5] text-white p-5 rounded-2xl shadow-2xl border border-blue-400 flex items-center space-x-4 max-w-sm"
          >
            <div className="bg-[#fffc4d] text-slate-900 p-2 rounded-xl flex-shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-sans font-bold text-sm text-[#fffc4d]">Download Completed!</h5>
              <p className="font-sans text-[11px] text-white/90 leading-tight mt-0.5">
                The NIMT Beacon School Brochure & Fee Breakdown booklet file has been saved to your local drive device directory.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}