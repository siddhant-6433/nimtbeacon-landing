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
  { id: 'what-is-day-school', label: 'What Is a Day School?' },
  { id: 'what-is-boarding-school', label: 'What Is a Boarding School?' },
  { id: 'boarding-vs-day', label: 'Boarding School vs Day School' },
  { id: 'which-is-better', label: 'Which School Is Better for Your Child?' },
  { id: 'things-to-consider', label: 'Things Parents Should Consider' },
  { id: 'why-choose-nimt', label: 'Why Parents Choose NIMT Beacon School' },
  { id: 'final-thoughts', label: 'Final Thoughts' }
];

export default function BlogDetailPage() {
  const [activeSection, setActiveSection] = useState<string>('what-is-day-school');
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
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#FFFC4D] selection:text-black pb-24 animate-fade-in">
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
              id="header-visit-btn"
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
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" id="blog-breadcrumbs">
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Home</span>
            <ChevronRight className="h-4 w-4 text-gray-300" />
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Blogs</span>
            <ChevronRight className="h-4 w-4 text-gray-300" />
            <span className="text-gray-900 font-semibold truncate">Boarding School vs Day School</span>
          </nav>

          {/* 2. Category Badge & Meta Metrics */}
          <div className="flex flex-wrap items-center gap-4 mb-6" id="blog-meta">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#0041F5] text-white tracking-widest uppercase">
              BLOG
            </span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 font-medium">
              <Clock className="h-4 w-4 text-[#0041F5]" />
              <span>7 min read</span>
            </div>
            <span className="text-gray-300 font-light">•</span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 font-medium">
              <Calendar className="h-4 w-4 text-[#0041F5]" />
              <span>July 19, 2026</span>
            </div>
            <span className="text-gray-300 font-light">•</span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 font-medium">
              <User className="h-4 w-4 text-[#0041F5]" />
              <span>NIMT Editorial Team</span>
            </div>
          </div>

          {/* 3. Large Blog Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight" id="blog-title">
            Boarding School vs Day School: Which One Is Right for Your Child?
          </h1>
        </div>

        {/* 4. Beautiful DSLR landscape hero image (IMAGE 1) */}
        <div className="max-w-5xl mx-auto px-0 sm:px-6 mb-12" id="blog-hero-container">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none sm:rounded-2xl shadow-xl">
            <Image
              src="/blogs/boarding-school-vs-day-school-1.webp"
              alt="Real Indian students interacting in a bright, modern classroom at NIMT Beacon School"
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
              id="hero-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-sm bg-black/45 backdrop-blur-md px-4 py-2.5 rounded-xl max-w-2xl hidden md:block border border-white/10">
              <span className="font-bold text-[#FFFC4D]">NIMT Learning Ecosystem:</span> Providing elite Day, Day Boarding, and Full Boarding educational pathways under professional guardianship.
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3 px-4 italic sm:hidden">
            NIMT Campus Classroom: Providing premium learning settings for day and boarding students.
          </p>
        </div>

        {/* Multi-column layout with Desktop Sticky TOC */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Table of Contents sidebar */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-32 bg-[#F6EADA]/50 p-6 rounded-2xl border border-[#F6EADA]" id="toc-sidebar">
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
            <article className="lg:col-span-9 max-w-4xl mx-auto w-full" id="blog-content-body">
              
              {/* 5. Introduction */}
              <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed mb-8 space-y-6">
                <p className="text-xl sm:text-2xl text-slate-900 font-medium leading-relaxed border-l-4 border-[#0041F5] pl-6 py-1">
                  Choosing between a boarding school and a day school is an important decision for every parent. Both options offer quality education, but the right choice depends on your child&apos;s personality, learning style, family routine, and future goals. Before making a decision, it is helpful to understand how both types of schools support a child&apos;s growth.
                </p>
              </div>

              {/* CTA 1 (After Introduction) */}
              <div className="my-10 bg-[#0041F5]/5 border border-[#0041F5]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm" id="cta-block-1">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-extrabold text-slate-900">Confused About the Right Setting?</h3>
                  <p className="text-sm text-gray-600 max-w-md">Schedule a personalized physical tour at NIMT Ghaziabad to understand our Day and Boarding setups firsthand.</p>
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

              {/* Section 1 - What Is a Day School? */}
              <section id="what-is-day-school" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  What Is a Day School?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    A day school is where students attend classes during the day and return home after school. Children spend their evenings and weekends with their families. This option allows parents to stay closely involved in their child&apos;s daily routine while students enjoy the comfort of home.
                  </p>
                  <p>
                    Day schools are often a good choice for younger children who benefit from spending more time with their parents. They also suit families who prefer to guide their child&apos;s studies and daily activities at home.
                  </p>
                </div>
              </section>

              {/* Section 2 - What Is a Boarding School? (IMAGE 2) */}
              <section id="what-is-boarding-school" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  What Is a Boarding School?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image (IMAGE 2) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/boarding-school-vs-day-school-2.webp"
                    alt="Indian children participating in outdoor sports and physical activities at school"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="boarding-sports-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    A boarding school provides both education and accommodation on campus. Students study, live, eat, and take part in activities within the school environment. Experienced teachers, wardens, and staff guide students throughout the day.
                  </p>
                  <p>
                    A boarding school helps children become independent, disciplined, and responsible. They learn to manage their time, build strong friendships, and develop confidence by living in a structured environment.
                  </p>
                </div>
              </section>

              {/* Section 3 - Boarding School vs Day School */}
              <section id="boarding-vs-day" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Boarding School vs Day School
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Both options have their own advantages. The best choice depends on what your child needs at this stage of life.
                  </p>

                  {/* Comparative Side-by-Side Box layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    {/* Day School Offers Column */}
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">AT A GLANCE</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">A Day School Offers:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>Daily support from family</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>More time at home</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>Regular interaction with parents</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>A familiar home environment</span>
                        </li>
                      </ul>
                    </div>

                    {/* Boarding School Offers Column */}
                    <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">AT A GLANCE</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">A Boarding School Offers:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>A structured daily routine</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>More focus on studies</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>Better time management</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>Sports and activities after school</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>Opportunities to build independence & leadership</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 - Which School Is Better for Your Child? */}
              <section id="which-is-better" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Which School Is Better for Your Child?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    There is no single answer. Some children perform better while staying with their families, while others thrive in a boarding environment where they learn to become self-reliant.
                  </p>
                  <p>
                    If your child enjoys participating in sports, extracurricular activities, leadership programs, and group learning, a boarding school can provide many opportunities for overall development. If your child prefers spending more time with family, a day school may be the better option.
                  </p>
                </div>
              </section>

              {/* Section 5 - Things Parents Should Consider (IMAGE 3) */}
              <section id="things-to-consider" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Things Parents Should Consider
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image (IMAGE 3) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/boarding-school-vs-day-school-3.webp"
                    alt="A safe, secure, bright modern corridor and residential hostel facility at NIMT Beacon School"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="hostel-corridor-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Before choosing a school, visit the campus and look beyond the classrooms. Check the learning environment, teacher-student interaction, sports facilities, safety measures, library, laboratories, and extracurricular programs.
                  </p>
                  <p>
                    If you are considering a boarding school, also visit the hostel, dining area, study rooms, and medical facilities. A well-managed hostel should feel safe, comfortable, and welcoming for every student.
                  </p>

                  {/* Warning Security Box */}
                  <div className="bg-[#F6EADA]/50 border-l-4 border-l-[#FFFC4D] rounded-r-xl p-5 my-6 flex gap-4 items-start">
                    <AlertTriangle className="h-6 w-6 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Boarding Selection Safeguard</h4>
                      <p className="text-sm text-gray-700">
                        Always evaluate the presence of full-time wardens, active dining surveillance, integrated medical wings, structured prep hours, and a high counselor-to-boarder ratio.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 - Why Many Parents Choose NIMT Beacon School (IMAGE 4) */}
              <section id="why-choose-nimt" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Why Many Parents Choose NIMT Beacon School
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image (IMAGE 4) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/boarding-school-vs-day-school-4.webp"
                    alt="Architectural premium landscape and sprawling lawns of NIMT Beacon School campus"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="school-landscape-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    At <strong>NIMT Beacon School, Ghaziabad</strong>, we believe every child deserves a learning environment where they feel safe, respected, and inspired. That is why we offer <strong>Day School, Day Boarding, and Full Boarding options</strong>, allowing families to choose the learning environment that best suits their child&apos;s needs.
                  </p>
                  <p>
                    Students benefit from experienced teachers, modern classrooms, science and computer laboratories, sports facilities, a well-stocked library, and a safe, well-managed boarding campus. Along with strong academics, we encourage students to participate in sports, creative activities, leadership programs, and practical learning that prepares them for the future.
                  </p>

                  {/* Highlight Features Box with beautiful Blue Icons */}
                  <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 my-8" id="nimt-advantages-grid">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-[#0041F5]" />
                      <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">Unmatched NIMT Flexible Formats</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">Three Formats Under One Roof</h5>
                          <p className="text-xs text-gray-600">Opt between Day School, Day Boarding, or Full Boarding as per family schedule.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">Elite Boarding Houses</h5>
                          <p className="text-xs text-gray-600">Secure, premium residency layouts with clean rooms and organic mess kitchens.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">Robust Security Protocols</h5>
                          <p className="text-xs text-gray-600">24/7 guarded premises, CCTV security, dynamic entry, and vetted transit fleets.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Star className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">Holistic Prep Curricula</h5>
                          <p className="text-xs text-gray-600">Rich sports grounds, athletic track, design laboratories, and artistic theaters.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA 2 (After "Why Parents Choose NIMT Beacon School") */}
              <div className="my-12 overflow-hidden bg-[#F6EADA]/40 border border-[#F6EADA] rounded-2xl p-8 sm:p-10 flex flex-col justify-center space-y-5" id="cta-block-2">
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

              {/* Section 7 - Final Thoughts */}
              <section id="final-thoughts" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Final Thoughts
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    When comparing boarding school vs day school, the most important question is not which one is better, but which one is better for your child. Every child learns differently and grows in different environments.
                  </p>
                  <p>
                    Take time to visit the school, speak with teachers, explore the campus, and understand the school&apos;s approach to learning and student care. A personal visit will help you make a confident decision.
                  </p>
                  <p>
                    If you are looking for a <strong>CBSE school in Ghaziabad</strong> that offers Day School, Day Boarding, and Full Boarding under one campus, we invite you to visit <strong>NIMT Beacon School</strong>. Meet our team, explore our facilities, and discover the learning environment that is right for your child.
                  </p>

                  {/* Information Card Box */}
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 my-6 flex gap-3.5 items-start">
                    <Info className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Admissions Cycle Active</h4>
                      <p className="text-sm text-gray-600">
                        Enrollment cycles for academic year 2026-2027 are currently open for Day School, Day Boarding, and Full Boarding formats. Schedule your campus physical interaction to avoid placement lists.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Social Share (Mobile and Tablet layout, visible when TOC is hidden) */}
              <div className="lg:hidden my-10 py-6 border-y border-gray-200" id="mobile-share">
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
