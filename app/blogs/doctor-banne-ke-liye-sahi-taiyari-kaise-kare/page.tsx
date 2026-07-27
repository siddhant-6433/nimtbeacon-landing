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
  { id: 'first-step', label: 'पहला कदम: Science PCB' },
  { id: 'understand-neet', label: 'NEET परीक्षा को समझें' },
  { id: 'concepts-and-ncert', label: 'Concept और NCERT बुक्स' },
  { id: 'study-and-practice', label: 'पढ़ाई की आदत और अभ्यास' },
  { id: 'health-and-mindset', label: 'शारीरिक व मानसिक स्वास्थ्य' },
  { id: 'nimt-guidance', label: 'NIMT में NEET Foundation' },
  { id: 'conclusion', label: 'निष्कर्ष और सही फैसला' }
];

export default function BlogDetailPage() {
  const [activeSection, setActiveSection] = useState<string>('first-step');
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
    grade: 'Grade VI - X',
    visitDate: '',
    visitSlot: 'Morning (9:00 AM - 11:00 AM)'
  });

  const [applyForm, setApplyForm] = useState({
    childName: '',
    dob: '',
    session: '2026-2027',
    grade: 'Grade VI - X',
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
      grade: 'Grade VI - X',
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
      grade: 'Grade VI - X',
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
            <span className="text-gray-900 font-semibold truncate">डॉक्टर बनने के लिए सही तैयारी कैसे करें?</span>
          </nav>

          {/* 2. Category Badge & Meta Metrics */}
          <div className="flex flex-wrap items-center gap-4 mb-6" id="blog-meta">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#0041F5] text-white tracking-widest uppercase">
              PREPARATION GUIDE
            </span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 font-medium">
              <Clock className="h-4 w-4 text-[#0041F5]" />
              <span>6 min read</span>
            </div>
            <span className="text-gray-300 font-light">•</span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 font-medium">
              <Calendar className="h-4 w-4 text-[#0041F5]" />
              <span>July 20, 2026</span>
            </div>
            <span className="text-gray-300 font-light">•</span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 font-medium">
              <User className="h-4 w-4 text-[#0041F5]" />
              <span>NIMT Editorial Team</span>
            </div>
          </div>

          {/* 3. Large Blog Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight" id="blog-title">
            डॉक्टर बनने के लिए सही तैयारी कैसे करें? 
          </h1>
        </div>

        {/* 4. Beautiful landscape hero image (IMAGE 1) */}
        <div className="max-w-5xl mx-auto px-0 sm:px-6 mb-12" id="blog-hero-container">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none sm:rounded-2xl shadow-xl">
            <Image
              src="/blogs/doctor-banne-ke-liye-sahi-taiyari-kaise-kare-1.webp"
              alt="Indian students looking over high-level biology notes and textbooks with focus and commitment"
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
              id="hero-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-sm bg-black/45 backdrop-blur-md px-4 py-2.5 rounded-xl max-w-2xl hidden md:block border border-white/10">
              <span className="font-bold text-[#FFFC4D]">NIMT Medical Advisory:</span> डॉक्टर बनने के लिए Class 9 और 10 से बुनियादी विज्ञान अवधारणाओं को मजबूत करना ही सफलता की पहली कुंजी है।
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3 px-4 italic sm:hidden">
            Doctor Preparation Guide: मेडिकल करियर और NEET परीक्षा की तैयारी के लिए एक सरल और व्यावहारिक गाइड।
          </p>
        </div>

        {/* Multi-column layout with Desktop Sticky TOC */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Table of Contents sidebar */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-32 bg-[#F6EADA]/50 p-6 rounded-2xl border border-[#F6EADA]" id="toc-sidebar">
              <div className="flex items-center gap-2.5 mb-4">
                <BookOpen className="h-5 w-5 text-[#0041F5]" />
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">इस लेख में</h3>
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
                  हर साल लाखों छात्र डॉक्टर बनने का सपना देखते हैं। लेकिन केवल सपना देखना ही काफी नहीं है। अगर आप सच में एक सफल डॉक्टर बनना चाहते हैं, तो सही समय पर सही तैयारी शुरू करना बहुत ज़रूरी है। कई छात्र यह नहीं जानते कि <strong>डॉक्टर बनने के लिए सही तैयारी कैसे करें</strong>, किस कक्षा से शुरुआत करें और किन बातों का ध्यान रखें। इस लेख में हम इन्हीं सभी सवालों के आसान और व्यावहारिक जवाब जानेंगे।
                </p>
                <p>
                  हर माता-पिता और छात्र चाहते हैं कि उनकी शैक्षणिक यात्रा और NEET परीक्षा की तैयारी बिना किसी रुकावट के सर्वश्रेष्ठ माहौल में हो। इसलिए सही रणनीति, समय प्रबंधन और उचित मार्गदर्शन को गहराई से समझना बेहद आवश्यक हो जाता है।
                </p>
              </div>

              {/* CTA 1 (After Introduction) */}
              <div className="my-10 bg-[#0041F5]/5 border border-[#0041F5]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm" id="cta-block-1">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-extrabold text-slate-900">क्या आपका सपना भी एक सफल डॉक्टर बनने का है?</h3>
                  <p className="text-sm text-gray-600 max-w-md">NIMT Beacon School में हमारे शैक्षणिक और नीट (NEET) विशेषज्ञों के साथ एक व्यक्तिगत विज़िट शेड्यूल करें और अपने बच्चे के लिए सही मार्गदर्शन व करियर पथ चुनें।</p>
                </div>
                <button
                  onClick={() => setIsVisitModalOpen(true)}
                  className="w-full sm:w-auto bg-[#0041F5] hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 whitespace-nowrap hover:shadow-md hover:shadow-[#0041F5]/20 flex items-center justify-center gap-2"
                >
                  Book Campus Visit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Section 1 - डॉक्टर बनने के लिए सबसे पहला कदम */}
              <section id="first-step" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  डॉक्टर बनने के लिए सबसे पहला कदम
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    अगर आपका लक्ष्य डॉक्टर बनना है, तो सबसे पहले आपको <strong>Science Stream (PCB - Physics, Chemistry, Biology)</strong> चुननी होगी। यही विषय आगे चलकर <strong>NEET (National Eligibility cum Entrance Test)</strong> की तैयारी का आधार बनते हैं। जितनी जल्दी इन विषयों की मजबूत नींव बनेगी, आगे की तैयारी उतनी ही आसान होगी।
                  </p>
                  <p>
                    कक्षा 9 और 10 में विज्ञान (Science) के मूल सिद्धांतों पर पकड़ मजबूत करना इस यात्रा की एक शानदार शुरुआत हो सकती है, जिससे उच्चतर कक्षाओं (Class 11 & 12) में पढ़ाई का दबाव काफी कम हो जाता है।
                  </p>
                </div>
              </section>

              {/* Section 2 - NEET परीक्षा को समझें */}
              <section id="understand-neet" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  NEET परीक्षा को समझें
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 2) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/doctor-banne-ke-liye-sahi-taiyari-kaise-kare-2.webp"
                    alt="Indian medical aspirants studying human anatomy and biology books in a group"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="boarding-sports-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    भारत में MBBS, BDS और कई अन्य मेडिकल कोर्स में प्रवेश के लिए <strong>NEET</strong> सबसे महत्वपूर्ण परीक्षा है। इसमें मुख्य रूप से Physics, Chemistry और Biology से प्रश्न पूछे जाते हैं। इसलिए केवल स्कूल की पढ़ाई करना ही पर्याप्त नहीं है, बल्कि NEET के पैटर्न के अनुसार नियमित अभ्यास भी ज़रूरी है।
                  </p>

                  {/* Highlights Comparative Box */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">NEET PREPARATION STRATEGY</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">नीट परीक्षा की तैयारी के मुख्य स्तंभ:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>NCERT की किताबों पर पूर्ण नियंत्रण और गहन लाइन-बाय-लाइन अध्ययन</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>भौतिकी (Physics) में सूत्रों के साथ नियमित न्यूमेरिकल अभ्यास व अनुप्रयोग</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>रसायन (Chemistry) में रिएक्शन मैकेनिज्म और इनऑर्गेनिक का सतत रिवीज़न</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>जीव विज्ञान (Biology) में फ्लोचार्ट और जटिल चक्रों का बार-बार अभ्यास</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">COMMON CHALLENGES TO AVOID</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">छात्रों द्वारा की जाने वाली मुख्य गलतियां:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>विषयों को गहराई से समझने के बजाय केवल रटने का सतही प्रयास करना</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>नियमित रूप से रिवीज़न न करना और बैकलॉग्स (Backlogs) का पहाड़ बनने देना</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>मॉक टेस्ट (Mock Tests) देने से बचना और समय प्रबंधन का अभ्यास न करना</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>शारीरिक और मानसिक स्वास्थ्य को नज़रअंदाज़ करके अत्यधिक तनाव में रहना</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 - Concept और NCERT बुक्स */}
              <section id="concepts-and-ncert" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Concept और NCERT बुक्स
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    बहुत से छात्र केवल रटकर पढ़ने की कोशिश करते हैं, लेकिन मेडिकल की तैयारी में यह तरीका ज़्यादा काम नहीं आता। हर अध्याय के पीछे का Concept समझना अधिक महत्वपूर्ण है। जब आपकी समझ मजबूत होगी, तब कठिन प्रश्न भी आसानी से हल होने लगेंगे।
                  </p>
                  <p>
                    अधिकांश शिक्षा विशेषज्ञ मानते हैं कि <strong>NEET Preparation</strong> के लिए NCERT की किताबें सबसे महत्वपूर्ण होती हैं। विशेष रूप से Biology की NCERT को अच्छी तरह पढ़ना और बार-बार दोहराना बहुत लाभदायक माना जाता है। इसके बाद आप अतिरिक्त अभ्यास पुस्तकों और Mock Tests की मदद ले सकते हैं।
                  </p>
                </div>
              </section>

              {/* Section 4 - पढ़ाई की आदत और अभ्यास */}
              <section id="study-and-practice" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  पढ़ाई की आदत और अभ्यास
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    डॉक्टर बनने की तैयारी एक दिन या एक महीने में पूरी नहीं होती। इसके लिए लगातार मेहनत करनी पड़ती है। रोज़ाना पढ़ाई का एक निश्चित समय तय करें। छोटे-छोटे लक्ष्य बनाकर पढ़ें और हर सप्ताह अपनी तैयारी की समीक्षा करें।
                  </p>
                  <p>
                    केवल पढ़ना ही पर्याप्त नहीं है। नियमित रूप से <strong>NEET Mock Tests</strong> देना और पिछले वर्षों के प्रश्नपत्र हल करना भी उतना ही आवश्यक है। इससे परीक्षा का अनुभव मिलता है, समय प्रबंधन बेहतर होता है और अपनी कमजोरियों का पता चलता है।
                  </p>
                  <p>
                    सोशल मीडिया, मोबाइल और बिना योजना के पढ़ाई करने से तैयारी प्रभावित हो सकती है। एक सरल Study Plan बनाइए जिसमें पढ़ाई, Revision, Test Practice और आराम—सभी के लिए समय हो। अच्छी तैयारी का मतलब केवल ज़्यादा घंटे पढ़ना नहीं, बल्कि सही तरीके से पढ़ना है।
                  </p>
                </div>
              </section>

              {/* Section 5 - शारीरिक व मानसिक स्वास्थ्य */}
              <section id="health-and-mindset" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  शारीरिक व मानसिक स्वास्थ्य
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 3) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/doctor-banne-ke-liye-sahi-taiyari-kaise-kare-3.webp"
                    alt="A calm student exercising or meditating for healthy mind and body during examinations"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="hostel-corridor-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    लंबी तैयारी के दौरान तनाव होना सामान्य बात है। इसलिए पर्याप्त नींद लें, पौष्टिक भोजन करें और रोज़ थोड़ा समय व्यायाम या योग के लिए निकालें। स्वस्थ शरीर और शांत मन बेहतर एकाग्रता और याद रखने की क्षमता बढ़ाते हैं।
                  </p>

                  {/* Warning Security Box */}
                  <div className="bg-[#F6EADA]/50 border-l-4 border-l-[#FFFC4D] rounded-r-xl p-5 my-6 flex gap-4 items-start">
                    <AlertTriangle className="h-6 w-6 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">अभिभावकों और छात्रों के लिए विशेष सलाह:</h4>
                      <p className="text-sm text-gray-700">
                        याद रखें, डॉक्टर बनने की यात्रा लंबी और धैर्य की मांग करने वाली होती है। अत्यधिक तनाव लेने से प्रदर्शन प्रभावित होता है। इसलिए सप्ताह में कम से कम एक दिन कुछ समय अपनी मनपसंद हॉबी या खेलकूद को अवश्य दें ताकि आपका दिमाग रीफ्रेश हो सके।
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 - NIMT में NEET Foundation */}
              <section id="nimt-guidance" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  NIMT में NEET Foundation
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 4) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/doctor-banne-ke-liye-sahi-taiyari-kaise-kare-4.webp"
                    alt="Sprawling high school biology and chemistry laboratory at NIMT Beacon School"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="school-landscape-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    अगर आपको शुरुआत से सही दिशा मिल जाए, तो तैयारी अधिक व्यवस्थित हो जाती है। अनुभवी शिक्षक, नियमित टेस्ट, Doubt Clearing Sessions और समय-समय पर मिलने वाला मार्गदर्शन छात्रों को बेहतर प्रदर्शन करने में मदद करता है। बिना योजना के पढ़ाई करने की तुलना में सही मार्गदर्शन के साथ तैयारी करना अधिक प्रभावी होता है।
                  </p>
                  <p>
                    <strong>NIMT Beacon School</strong> में हम छात्रों को केवल स्कूली परीक्षाओं के लिए नहीं, बल्कि उनके करियर के लक्ष्यों के लिए तैयार करते हैं। हमारा स्कूल एकीकृत शिक्षण (Integrated Curriculum) मॉडल का पालन करता है जो सीबीएसई बोर्ड के साथ-साथ राष्ट्रीय स्तर की प्रतियोगी परीक्षाओं जैसे JEE और NEET के लिए कक्षा 9वीं से ही एक मजबूत आधार तैयार करता है।
                  </p>

                  {/* Highlight Features Box with beautiful Blue Icons */}
                  <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 my-8" id="nimt-advantages-grid">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-[#0041F5]" />
                      <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">NIMT के मुख्य शैक्षणिक स्तंभ और NEET फाउंडेशन</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">NEET / JEE फाउंडेशन कोर्स</h5>
                          <p className="text-xs text-gray-600">कक्षा 9वीं और 10वीं से ही विज्ञान और गणित के विषयों का विशेष फाउंडेशन बैच जो नीट परीक्षा के सिलेबस से मेल खाता है।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">आधुनिक जीवविज्ञान व स्टेम लैब्स</h5>
                          <p className="text-xs text-gray-600">अत्याधुनिक प्रयोगात्मक प्रयोगशालाएं जहां छात्र मानव शरीर विज्ञान, वनस्पति विज्ञान और रसायनों का व्यावहारिक अध्ययन कर सकते हैं।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">विशेषज्ञ मेंटर्स और डाउट सेशन</h5>
                          <p className="text-xs text-gray-600">विशेषज्ञ अध्यापकों द्वारा व्यक्तिगत मार्गदर्शन, नियमित शंका निवारण सत्र और व्यक्तिगत प्रदर्शन का विश्लेषण।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Star className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">प्रयोगात्मक शिक्षण दृष्टिकोण</h5>
                          <p className="text-xs text-gray-600">रटने की प्रवृत्ति से दूर, विज़ुअल्स, 3D मॉडल्स और व्यावहारिक प्रोजेक्ट्स द्वारा हर कठिन कॉन्सेप्ट को गहराई से समझाना।</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA 2 (After NIMT Section) */}
              <div className="my-12 overflow-hidden bg-[#F6EADA]/40 border border-[#F6EADA] rounded-2xl p-8 sm:p-10 flex flex-col justify-center space-y-5" id="cta-block-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0041F5]">Campus Experience</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">Visit NIMT Beacon School</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  अपने बच्चे के उज्ज्वल भविष्य और डॉक्टर बनने के सपने की दिशा में सबसे सही और पहला कदम बढ़ाएं। हमारे सुंदर अत्याधुनिक परिसर, जीवविज्ञान प्रयोगशालाओं और शैक्षणिक सुविधाओं को प्रत्यक्ष रूप से देखने के लिए आएं।
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

              {/* Section 7 - Conclusion */}
              <section id="conclusion" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  निष्कर्ष और सही फैसला
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    <strong>डॉक्टर बनने के लिए सही तैयारी</strong> का मतलब केवल ज़्यादा पढ़ना नहीं, बल्कि सही दिशा में लगातार मेहनत करना है। मजबूत Concepts, नियमित Revision, Mock Tests, NCERT पर अच्छी पकड़ और अनुशासित दिनचर्या आपको अपने लक्ष्य के करीब ले जाती है।
                  </p>
                  <p>
                    अगर आपका सपना डॉक्टर बनना है, तो आज से ही अपनी तैयारी शुरू करें। सही योजना, धैर्य और लगातार अभ्यास के साथ आप अपने मेडिकल करियर की मजबूत नींव रख सकते हैं। Every small step you take today will bring you closer to becoming a successful doctor tomorrow.
                  </p>
                  <p>
                    यदि आप गाज़ियाबाद और एनसीआर (NCR) क्षेत्र में एक सुरक्षित, आधुनिक और एकीकृत प्रतियोगी परीक्षा तैयारी प्रदान करने वाले सर्वश्रेष्ठ स्कूल की तलाश कर रहे हैं, तो हम आपका <strong>NIMT Beacon School</strong> में सहर्ष स्वागत करते हैं। आज ही हमारे कैंपस पधारें और देखें कि हम किस तरह अकादमिक उत्कृष्टता को एक नई ऊंचाई प्रदान करते हैं।
                  </p>

                  {/* Information Card Box */}
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 my-6 flex gap-3.5 items-start">
                    <Info className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Integrated Admissions Active</h4>
                      <p className="text-sm text-gray-600">
                        शैक्षणिक वर्ष 2026-2027 के लिए माध्यमिक कक्षाओं में प्रतियोगी परीक्षा फाउंडेशन और उच्चतर माध्यमिक में PCB स्ट्रीम के दाखिले की प्रक्रिया शुरू हो चुकी है। सीमित सीटों के कारण जल्द से जल्द कैम्पस विज़िट शेड्यूल करें।
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
