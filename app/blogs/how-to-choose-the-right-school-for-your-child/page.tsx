'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Clock, 
  Calendar, 
  User, 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Plus, 
  Minus, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Send, 
  Link2, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Check,
  Building,
  GraduationCap,
  ShieldCheck,
  Star,
  Sparkles,
  Share2
} from 'lucide-react';
import BookVisitModal from '@/components/BookVisitModal';
import ApplyNowModal from '@/components/ApplyNowModal';
import BlogCTA from '@/components/BlogCTA';
import RelatedBlogs from '@/components/RelatedBlogs';
import BlogFaq from '@/components/BlogFaq';


interface TOCSection {
  id: string;
  label: string;
}

const tocSections: TOCSection[] = [
  { id: 'understand-needs', label: "Understand Your Child's Needs" },
  { id: 'look-beyond-academics', label: 'Look Beyond Academic Results' },
  { id: 'visit-campus', label: 'Visit the School Campus' },
  { id: 'check-safety', label: 'Check Safety and Student Care' },
  { id: 'talk-teachers', label: 'Talk to Teachers and the Admissions Team' },
  { id: 'explore-opportunities', label: 'Explore Learning Opportunities' },
  { id: 'consider-values', label: "Consider the School's Values" },
  { id: 'why-parents-choose', label: 'Why Parents Choose NIMT Beacon School' },
  { id: 'final-thoughts', label: 'Final Thoughts' }
];

export default function BlogDetailPage() {
  const [activeSection, setActiveSection] = useState<string>('understand-needs');
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  
  // Modals state
  const [isVisitModalOpen, setIsVisitModalOpen] = useState<boolean>(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [visitSubmitted, setVisitSubmitted] = useState<boolean>(false);
  const [applySubmitted, setApplySubmitted] = useState<boolean>(false);

  // Form states
  const [visitForm, setVisitForm] = useState({
    parentName: '',
    mobile: '',
    email: '',
    childName: '',
    grade: 'Grade I',
    visitDate: '',
    visitSlot: 'Morning (9:00 AM - 11:00 AM)'
  });

  const [applyForm, setApplyForm] = useState({
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

  // Scroll spy effect for TOC
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of tocSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitSubmitted(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySubmitted(true);
  };

  const resetVisitForm = () => {
    setVisitForm({
      parentName: '',
      mobile: '',
      email: '',
      childName: '',
      grade: 'Grade I',
      visitDate: '',
      visitSlot: 'Morning (9:00 AM - 11:00 AM)'
    });
    setVisitSubmitted(false);
    setIsVisitModalOpen(false);
  };

  const resetApplyForm = () => {
    setApplyForm({
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
    setApplySubmitted(false);
    setIsApplyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#FFFC4D] selection:text-black pb-24">
      {/* Premium Elegant Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 bg-[#0041F5] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#0041F5]/15">
              N
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900 block leading-none">NIMT BEACON</span>
              <span className="text-[10px] uppercase tracking-widest text-[#0041F5] font-bold block mt-1">School</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-[#0041F5] transition-colors">Home</a>
            <a href="#" className="hover:text-[#0041F5] transition-colors">Academics</a>
            <a href="#" className="hover:text-[#0041F5] transition-colors">Admissions</a>
            <a href="#" className="text-[#0041F5] font-bold flex items-center gap-1.5">
              Blog <span className="h-1.5 w-1.5 rounded-full bg-[#0041F5]"></span>
            </a>
            <a href="#" className="hover:text-[#0041F5] transition-colors">Contact</a>
          </nav>

          <div>
            <button 
              onClick={() => setIsVisitModalOpen(true)}
              className="bg-[#0041F5] hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0041F5]/20 hover:-translate-y-0.5"
            >
              Book Campus Visit
            </button>
          </div>
        </div>
      </header>

      {/* Main Blog Core Area */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* 1. Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Home</span>
            <ChevronRight className="h-4 w-4 text-gray-300" />
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Blogs</span>
            <ChevronRight className="h-4 w-4 text-gray-300" />
            <span className="text-gray-900 font-semibold truncate">How to Choose the Right School</span>
          </nav>

          {/* 2. Category Badge & Meta Metrics */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#0041F5] text-white tracking-widest uppercase">
              BLOG
            </span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 font-medium">
              <Clock className="h-4 w-4 text-[#0041F5]" />
              <span>8 min read</span>
            </div>
            <span className="text-gray-300 font-light">•</span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 font-medium">
              <Calendar className="h-4 w-4 text-[#0041F5]" />
              <span>July 17, 2026</span>
            </div>
            <span className="text-gray-300 font-light">•</span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 font-medium">
              <User className="h-4 w-4 text-[#0041F5]" />
              <span>NIMT Editorial Team</span>
            </div>
          </div>

          {/* 3. Large Blog Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            How to Choose the Right School for Your Child
          </h1>
        </div>

        {/* 4. Beautiful DSLR landscape hero image (IMAGE 1) */}
        <div className="max-w-5xl mx-auto px-0 sm:px-6 mb-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none sm:rounded-2xl shadow-xl">
            <Image
              src="/blogs/how-to-choose-the-right-school-for-your-child-1.webp"
              alt="Real Indian students interacting in a bright, modern classroom at NIMT Beacon School"
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-sm bg-black/45 backdrop-blur-md px-4 py-2.5 rounded-xl max-w-2xl hidden md:block border border-white/10">
              <span className="font-bold text-[#FFFC4D]">NIMT Learning Ecosystem:</span> Real Indian students learning together inside a bright, premium classroom under professional guidance.
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3 px-4 italic sm:hidden">
            NIMT Campus Classroom: Real Indian students in interactive classroom with natural light.
          </p>
        </div>

        {/* Multi-column layout with Desktop Sticky TOC */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Table of Contents sidebar */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-32 bg-[#F6EADA]/50 p-6 rounded-2xl border border-[#F6EADA]">
              <div className="flex items-center gap-2.5 mb-4">
                <BookOpen className="h-5 w-5 text-[#0041F5]" />
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">In this article</h3>
              </div>
              <ul className="space-y-3">
                {tocSections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          setActiveSection(section.id);
                        }}
                        className={`block text-sm py-1.5 border-l-2 pl-3 transition-all duration-200 ${
                          isActive
                            ? 'font-bold border-[#0041F5] text-[#0041F5] translate-x-1'
                            : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                        }`}
                      >
                        {section.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

         
            </aside>

            {/* Core Blog Text Container - width bounded up to 4xl equivalent */}
            <article className="lg:col-span-9 max-w-4xl mx-auto w-full">
              
              {/* 5. Introduction */}
              <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed mb-8 space-y-6">
                <p className="text-xl sm:text-2xl text-slate-900 font-medium leading-relaxed border-l-4 border-[#0041F5] pl-6 py-1">
                  Choosing the right school for your child is one of the biggest decisions you will make as a parent. A school is not just a place where children learn subjects like English, Mathematics, and Science. It is where they develop confidence, make friends, build good habits, and prepare for their future. Every child is different, so the best school is one that understands their needs and helps them grow both academically and personally.
                </p>
              </div>

              {/* CTA 1 (After Introduction) */}
              <div className="my-10 bg-[#0041F5]/5 border border-[#0041F5]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-extrabold text-slate-900">Looking for the Right School?</h3>
                  <p className="text-sm text-gray-600 max-w-md">Schedule a customized personal tour and experience NIMT Beacon School&apos;s award-winning campus environment.</p>
                </div>
                <button
                  onClick={() => setIsVisitModalOpen(true)}
                  className="w-full sm:w-auto bg-[#0041F5] hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 whitespace-nowrap hover:shadow-md hover:shadow-[#0041F5]/20 flex items-center justify-center gap-2"
                >
                  Book Campus Visit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* 6. H2 Sections with Beautiful Formatting & EXACT CONTENT */}

              {/* Section 1 - Text only to conserve image count */}
              <section id="understand-needs" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Understand Your Child&apos;s Needs
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Before you start visiting schools, think about your child&apos;s personality, interests, and learning style. Some children enjoy sports, while others love reading, art, music, or science. A good school should provide opportunities that match your child&apos;s strengths and encourage them to discover new talents.
                  </p>
                </div>
              </section>

              {/* Section 2 - (IMAGE 2) */}
              <section id="look-beyond-academics" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Look Beyond Academic Results
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image (IMAGE 2) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/how-to-choose-the-right-school-for-your-child-2.webp"
                    alt="Indian children participating in outdoor sports and physical activities at school"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Many parents focus only on examination results, but a child&apos;s overall development is equally important. Choose a school that balances academics with sports, creative activities, leadership programs, and life skills. These experiences help children become confident, responsible, and independent individuals.
                  </p>

                  {/* Checklist Card */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 my-6">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">Admissions Checklist</span>
                    <h4 className="text-md font-bold text-slate-900 mb-4">Core Academic & Co-curricular Indicators</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                        <span>Interactive child-centric teaching methodologies instead of rote memorization</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                        <span>Adequate counselor-to-student balance for emotional scaffolding</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                        <span>Highly comprehensive, active digital integration across laboratories</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                        <span>Diversified sports, creative arts, and global leadership forums</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 - Text only */}
              <section id="visit-campus" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Visit the School Campus
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    A personal visit can tell you much more than a brochure or website. Walk through the classrooms, library, laboratories, sports facilities, and common areas. Observe how teachers interact with students and whether children appear happy, engaged, and comfortable. A positive school environment often reflects the quality of education provided.
                  </p>
                </div>
              </section>

              {/* Section 4 - (IMAGE 3) */}
              <section id="check-safety" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Check Safety and Student Care
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image (IMAGE 3) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/how-to-choose-the-right-school-for-your-child-3.webp"
                    alt="A safe, secure, bright modern corridor and residential hostel facility at NIMT Beacon School"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Every parent wants their child to learn in a safe environment. Find out about the school&apos;s security measures, medical support, transportation, and student supervision. If you are considering a boarding school, visit the hostel, dining area, and study rooms to understand how students live and learn outside classroom hours.
                  </p>

                  {/* Warning Box */}
                  <div className="bg-[#F6EADA]/50 border-l-4 border-l-[#FFFC4D] rounded-r-xl p-5 my-6 flex gap-4 items-start">
                    <AlertTriangle className="h-6 w-6 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Crucial Security Protocol Check</h4>
                      <p className="text-sm text-gray-700">
                        Always verify that the educational facilities maintain dynamic electronic visitor logs, comprehensive camera networks covering all perimeter zones, and fully vetted, GPS-equipped boarding and transport routines.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 - Text only */}
              <section id="talk-teachers" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Talk to Teachers and the Admissions Team
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Meeting teachers can help you understand the school&apos;s teaching approach and values. Don&apos;t hesitate to ask questions about classroom size, individual attention, communication with parents, extracurricular activities, and academic support. A good school will always be happy to explain its learning methods and answer your concerns.
                  </p>
                </div>
              </section>

              {/* Section 6 - Text only */}
              <section id="explore-opportunities" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Explore Learning Opportunities
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Today&apos;s education goes beyond textbooks. Modern schools offer smart classrooms, science and computer laboratories, robotics, coding, sports, music, art, and public speaking opportunities. These activities help children develop creativity, problem-solving skills, and confidence that will benefit them throughout life.
                  </p>
                </div>
              </section>

              {/* Section 7 - Text only */}
              <section id="consider-values" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Consider the School&apos;s Values
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    A school should not only prepare students for examinations but also teach respect, honesty, discipline, kindness, and responsibility. Strong values help children become better citizens and confident individuals who can face future challenges with maturity.
                  </p>
                </div>
              </section>

              {/* Section 8 - (IMAGE 4) */}
              <section id="why-parents-choose" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Why Parents Choose NIMT Beacon School
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image (IMAGE 4) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/how-to-choose-the-right-school-for-your-child-4.webp"
                    alt="Architectural premium landscape and sprawling lawns of NIMT Beacon School campus"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    At <strong>NIMT Beacon School, Ghaziabad</strong>, we believe every child deserves a learning environment where they feel safe, respected, and inspired. Our experienced teachers focus on both academic excellence and character development. From modern classrooms and well-equipped laboratories to sports facilities and boarding options, every part of our campus is designed to support a child&apos;s overall growth.
                  </p>
                  <p>
                    We encourage curiosity, creativity, teamwork, leadership, and practical learning so that students develop the confidence to succeed in school and beyond.
                  </p>

                  {/* Highlight Features Box with beautiful Blue Icons */}
                  <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 my-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-[#0041F5]" />
                      <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">Unmatched School Infrastructure</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">CBSE STEM Integration</h5>
                          <p className="text-xs text-gray-600">Dynamic curricula with digital labs, robotics, and design thinking hubs.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">Elite Smart Classrooms</h5>
                          <p className="text-xs text-gray-600">Acoustically insulated rooms offering rich digital display systems.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">Complete Security Perimeter</h5>
                          <p className="text-xs text-gray-600">Constant RFID tracing, AI-driven gate monitoring, and physical checks.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Star className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">Holistic Arts & Sports</h5>
                          <p className="text-xs text-gray-600">Olympic-size athletic layouts, music centers, and dramatic playrooms.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA 2 (After "Why Parents Choose NIMT Beacon School") - Clean Typographic layout to stick strictly to max 4 heavy images */}
              <div className="my-12 overflow-hidden bg-[#F6EADA]/40 border border-[#F6EADA] rounded-2xl p-8 sm:p-10 flex flex-col justify-center space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0041F5]">Campus Experience</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">Visit NIMT Beacon School</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Take the first step toward high-quality secondary preparation. Walk through our classrooms and labs, meet our admissions experts, and clarify your enrollment questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    onClick={() => setIsVisitModalOpen(true)}
                    className="bg-[#0041F5] hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 text-center"
                  >
                    Book Campus Visit
                  </button>
                  <button 
                    onClick={() => setIsApplyModalOpen(true)}
                    className="bg-transparent hover:bg-white text-slate-900 border border-slate-300 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 text-center"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Section 9 - Text only */}
              <section id="final-thoughts" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Final Thoughts
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Choosing the right school takes time, and it is worth visiting a few campuses before making your decision. Look beyond advertisements and rankings. Spend time understanding the school&apos;s environment, teaching approach, facilities, and values. Most importantly, choose a place where your child will feel happy, supported, and excited to learn every day.
                  </p>
                  <p>
                    If you are looking for a <strong>CBSE school in Ghaziabad</strong> that combines quality education, modern facilities, caring teachers, and holistic development, we invite you to visit <strong>NIMT Beacon School</strong>. Meet our team, explore the campus, and discover how we can help your child build a strong foundation for a bright future.
                  </p>

              
                </div>
              </section>

              {/* Social Share (Mobile and Tablet layout, visible when TOC is hidden) */}
              <div className="lg:hidden my-10 py-6 border-y border-gray-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 text-center">Share This Article</h4>
                <div className="flex items-center justify-center gap-3">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 transition-colors hover:bg-gray-50"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://whatsapp.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 transition-colors hover:bg-gray-50"
                  >
                    <Send className="h-5 w-5 rotate-45" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 transition-colors hover:bg-gray-50"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 transition-colors hover:bg-gray-50"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <button 
                    onClick={handleCopyLink}
                    className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 transition-colors hover:bg-gray-50 relative"
                  >
                    <Link2 className="h-5 w-5" />
                    {copied && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded shadow-md whitespace-nowrap">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>

                     {/* Author Box */}
                   <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 my-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
             {/* Circular Avatar Badge with Full Uncropped Logo */}
             <div className="relative h-24 w-24 rounded-full bg-white shrink-0 border border-gray-200/80 shadow-md p-3 flex items-center justify-center">
               <Image
                 src="/nimt-beacon-logo.webp"
                 alt="NIMT Beacon School Editorial Team Avatar"
                 fill
                 className="object-contain p-1"
                 priority
               />
             </div>
             
             <div className="text-center sm:text-left space-y-2">
               <span className="text-xs font-bold uppercase tracking-widest text-[#0041F5]">Written By</span>
               <h3 className="text-lg font-bold text-slate-900">NIMT Beacon School Editorial Team</h3>
               <p className="text-sm text-gray-600 leading-relaxed">
                 Providing parents, teachers, and students with useful articles on education, child development, school updates, and admission guidance for schools in Ghaziabad and NCR.
               </p>
             </div>
           </div>
            </article>

          </div>
        </div>

     
     {/* Modular Reusable CTA */}
             <BlogCTA onBookVisit={() => setIsVisitModalOpen(true)} />
     
             {/* Modular Reusable Related Blogs */}
             <RelatedBlogs />
     
             {/* Modular Reusable FAQ Section */}
             <BlogFaq />

      </main>

      {/* Sticky Bottom Call to Action for mobile & tablet reading comfort */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200/80 p-4 shadow-2xl flex md:hidden items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-[#0041F5]">NIMT ADMISSIONS</span>
          <span className="text-xs font-bold text-slate-900 truncate">Admissions active for 2026-27</span>
        </div>
        <button
          onClick={() => setIsVisitModalOpen(true)}
          className="bg-[#0041F5] hover:bg-blue-700 text-white font-bold text-xs px-5 py-3 rounded-full shadow-md shadow-[#0041F5]/15 transition-all"
        >
          Book Visit
        </button>
      </div>

    {/* Placed Global Portal Components */}
         <BookVisitModal isOpen={isVisitModalOpen} onClose={() => setIsVisitModalOpen(false)} />
         <ApplyNowModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
    </div>
  );
}
