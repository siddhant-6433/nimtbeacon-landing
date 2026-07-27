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
  { id: 'learning-preparation', label: 'सीखने के लिए तैयार करना' },
  { id: 'social-skills', label: 'Social Skills का विकास' },
  { id: 'confidence', label: 'आत्मविश्वास का बढ़ना' },
  { id: 'communication-skills', label: 'Communication Skills' },
  { id: 'learning-habits', label: 'सीखने की अच्छी आदतें' },
  { id: 'how-to-choose', label: 'सही Preschool कैसे चुनें?' },
  { id: 'nimt-early-learning', label: 'NIMT में Early Learning' },
  { id: 'conclusion', label: 'निष्कर्ष और भविष्य की राह' }
];

export default function BlogDetailPage() {
  const [activeSection, setActiveSection] = useState<string>('learning-preparation');
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
    grade: 'Pre-Nursery',
    visitDate: '',
    visitSlot: 'Morning (9:00 AM - 11:00 AM)'
  });

  const [applyForm, setApplyForm] = useState({
    childName: '',
    dob: '',
    session: '2026-2027',
    grade: 'Pre-Nursery',
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
      grade: 'Pre-Nursery',
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
      grade: 'Pre-Nursery',
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
            <span className="text-gray-900 font-semibold truncate">Preschool क्यों ज़रूरी है?</span>
          </nav>

          {/* 2. Category Badge & Meta Metrics */}
          <div className="flex flex-wrap items-center gap-4 mb-6" id="blog-meta">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#0041F5] text-white tracking-widest uppercase">
              EARLY EDUCATION
            </span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5 font-medium">
              <Clock className="h-4 w-4 text-[#0041F5]" />
              <span>5 min read</span>
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
            Preschool क्यों ज़रूरी है? बच्चों की सीखने की पहली मज़बूत शुरुआत
          </h1>
        </div>

        {/* 4. Beautiful DSLR landscape hero image (IMAGE 1) */}
        <div className="max-w-5xl mx-auto px-0 sm:px-6 mb-12" id="blog-hero-container">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none sm:rounded-2xl shadow-xl">
            <Image
              src="/blogs/preschool-kyon-zaruri-hai-1.webp"
              alt="Young Indian students learning creatively in a colorful, modern playroom at NIMT Beacon School"
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
              id="hero-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-sm bg-black/45 backdrop-blur-md px-4 py-2.5 rounded-xl max-w-2xl hidden md:block border border-white/10">
              <span className="font-bold text-[#FFFC4D]">NIMT Early Years:</span> बच्चों के मानसिक, सामाजिक और भावनात्मक विकास के लिए एक सुरक्षित, रचनात्मक और खुशहाल माहौल।
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3 px-4 italic sm:hidden">
            NIMT Early Years Block: बच्चों के शुरुआती वर्षों को सुरक्षित और सार्थक बनाने के लिए विशेष संसाधन।
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
                  हर माता-पिता चाहते हैं कि उनके बच्चे की पढ़ाई की शुरुआत अच्छे माहौल से हो। अक्सर यह सवाल पूछा जाता है कि <strong>&quot;Preschool क्यों ज़रूरी है?&quot;</strong> क्या बच्चा सीधे Nursery या Class 1 में जा सकता है? इसका जवाब है कि Preschool बच्चों को स्कूल की दुनिया के लिए तैयार करता है। यह केवल पढ़ाई की शुरुआत नहीं है, बल्कि बच्चे के मानसिक, सामाजिक और भावनात्मक विकास का पहला कदम है।
                </p>
                <p>
                  आज के समय में एक अच्छा <strong>Preschool</strong> बच्चों को सिर्फ A, B, C या 1, 2, 3 नहीं सिखाता। यह उन्हें सीखने का तरीका, दूसरों के साथ मिलकर रहना, आत्मविश्वास और नई चीज़ों को समझने की आदत विकसित करने में मदद करता है।
                </p>
              </div>

              {/* CTA 1 (After Introduction) */}
              <div className="my-10 bg-[#0041F5]/5 border border-[#0041F5]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm" id="cta-block-1">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-extrabold text-slate-900">बच्चे की शुरुआती शिक्षा को लेकर असमंजस में हैं?</h3>
                  <p className="text-sm text-gray-600 max-w-md">NIMT Ghaziabad में हमारे Early Years Block का व्यक्तिगत दौरा शेड्यूल करें और प्ले-बेस्ड लर्निंग मॉडल को करीब से समझें।</p>
                </div>
                <button
                  onClick={() => setIsVisitModalOpen(true)}
                  className="w-full sm:w-auto bg-[#0041F5] hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 whitespace-nowrap hover:shadow-md hover:shadow-[#0041F5]/20 flex items-center justify-center gap-2"
                >
                  Book Campus Visit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Section 1 - Preschool बच्चों को सीखने के लिए तैयार करता है */}
              <section id="learning-preparation" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Preschool बच्चों को सीखने के लिए तैयार करता है
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    छोटे बच्चों का दिमाग बहुत तेज़ी से विकसित होता है। इसी उम्र में वे नई बातें सबसे जल्दी सीखते हैं। Preschool में बच्चे खेल-खेल में रंग, आकार, भाषा, गिनती और नई गतिविधियाँ सीखते हैं। इससे पढ़ाई उनके लिए बोझ नहीं बल्कि एक मज़ेदार अनुभव बन जाती है।
                  </p>
                </div>
              </section>

              {/* Section 2 - Social Skills का विकास होता है */}
              <section id="social-skills" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Social Skills का विकास होता है
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 2) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/preschool-kyon-zaruri-hai-2.webp"
                    alt="Indian children participating in indoor games and early learning activities"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="boarding-sports-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    घर में बच्चा अक्सर परिवार के लोगों के साथ रहता है, लेकिन Preschool में वह पहली बार दूसरे बच्चों के साथ समय बिताता है। यहाँ बच्चे मिलकर खेलना, अपनी बारी का इंतज़ार करना, चीज़ें साझा करना और दूसरों का सम्मान करना सीखते हैं। यही छोटे-छोटे अनुभव आगे चलकर उनके व्यक्तित्व को मज़बूत बनाते हैं।
                  </p>

                  {/* Highlights Comparative Box */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">CORE GROWTH SKILLS</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">व्यक्तिगत विकास के स्तंभ:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>सामाजिक मेलजोल और संवाद की क्षमता</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>चीज़ें साझा करने और बांटने की आदत</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>दूसरों के विचारों और भावनाओं का सम्मान</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>सहयोगात्मक रूप से कार्य करने की भावना</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">ROUTINE ADVANTAGES</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">दैनिक दिनचर्या के बड़े फायदे:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>एक व्यवस्थित शेड्यूल के अनुसार काम करना</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>अनावश्यक स्क्रीन टाइम में भारी कमी आना</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>अनुभवी शिक्षिकाओं का निरंतर मार्गदर्शन</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>खेल और रचनात्मक गतिविधियों का अद्भुत संतुलन</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 - आत्मविश्वास बढ़ता है */}
              <section id="confidence" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  आत्मविश्वास बढ़ता है
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Preschool बच्चों को धीरे-धीरे अपने दम पर छोटे-छोटे काम करना सिखाता है। अपना बैग संभालना, अपनी चीज़ों का ध्यान रखना, टीचर से बात करना और नई गतिविधियों में भाग लेना उनके आत्मविश्वास को बढ़ाता है। जब बच्चा नई जगह पर सहज महसूस करता है, तो आगे की पढ़ाई भी आसान हो जाती है।
                  </p>
                </div>
              </section>

              {/* Section 4 - Communication Skills बेहतर होती हैं */}
              <section id="communication-skills" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Communication Skills बेहतर होती हैं
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Preschool में बच्चे हर दिन नए शब्द सीखते हैं और अपनी बात कहना सीखते हैं। कहानी सुनना, कविता बोलना, चित्र बनाना और समूह में गतिविधियाँ करना उनकी भाषा और Communication Skills को बेहतर बनाता है। यही कौशल आगे चलकर पढ़ाई और जीवन दोनों में काम आते हैं।
                  </p>
                </div>
              </section>

              {/* Section 5 - सीखने की अच्छी आदतें बनती हैं */}
              <section id="learning-habits" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  सीखने की अच्छी आदतें बनती हैं
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 3) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/preschool-kyon-zaruri-hai-3.webp"
                    alt="A bright, colorful and safe preschool playroom hallway at NIMT Beacon School"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="hostel-corridor-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    Preschool बच्चों को एक नियमित दिनचर्या की आदत डालता है। समय पर आना, कक्षा में बैठना, ध्यान से सुनना और गतिविधियों में भाग लेना उन्हें स्कूल जीवन के लिए तैयार करता है। जब बच्चे शुरुआत से ही अच्छी आदतें सीखते हैं, तो आगे की कक्षाओं में उन्हें आसानी होती है।
                  </p>

                  {/* Warning Security Box */}
                  <div className="bg-[#F6EADA]/50 border-l-4 border-l-[#FFFC4D] rounded-r-xl p-5 my-6 flex gap-4 items-start">
                    <AlertTriangle className="h-6 w-6 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">शुरुआती सुरक्षा मानक:</h4>
                      <p className="text-sm text-gray-700">
                        हमेशा सुनिश्चित करें कि प्रीस्कूल में फर्नीचर के नुकीले किनारे न हों, बच्चों की ऊंचाई के अनुसार वॉशरुम हों, निरंतर सहायिकाओं (Nannies) की निगरानी हो और गैर-विषैले (non-toxic) खिलौने व सामग्रियां हों।
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 - सही Preschool कैसे चुनें? */}
              <section id="how-to-choose" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  सही Preschool कैसे चुनें?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    हर Preschool एक जैसा नहीं होता। माता-पिता को केवल भवन देखकर निर्णय नहीं लेना चाहिए। एक अच्छे Preschool में सुरक्षित वातावरण, अनुभवी शिक्षक, साफ़-सुथरी कक्षाएँ, सीखने वाली गतिविधियाँ, खेल का समय और बच्चों पर व्यक्तिगत ध्यान होना चाहिए। सबसे अच्छा तरीका है कि आप स्वयं स्कूल जाकर वातावरण देखें और शिक्षकों से बात करें।
                  </p>
                </div>
              </section>

              {/* Section 7 - NIMT Beacon School में Early Learning */}
              <section id="nimt-early-learning" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  NIMT Beacon School में Early Learning
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 4) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/preschool-kyon-zaruri-hai-4.webp"
                    alt="Lush green sprawling grounds of NIMT Beacon School Early Learning campus"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="school-landscape-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    <strong>NIMT Beacon School</strong> में हमारा मानना है कि हर बच्चे की सीखने की शुरुआत खुशियों और आत्मविश्वास के साथ होनी चाहिए। हमारा Preschool Program बच्चों की उम्र और सीखने की गति को ध्यान में रखकर तैयार किया गया है।
                  </p>
                  <p>
                    हम खेल आधारित सीखने (Play-Based Learning), कहानी, संगीत, कला, रचनात्मक गतिविधियों और सुरक्षित वातावरण के माध्यम से बच्चों की जिज्ञासा और आत्मविश्वास को बढ़ावा देते हैं। हमारे अनुभवी शिक्षक हर बच्चे पर व्यक्तिगत ध्यान देते हैं ताकि वह अपनी क्षमता के अनुसार आगे बढ़ सके।
                  </p>
                  <p>
                    माता-पिता अपने बच्चों के लिए <strong>Day School, Day Boarding, या Play Group ऑप्शंस</strong> में से अपनी सुविधानुसार चुन सकते हैं।
                  </p>

                  {/* Highlight Features Box with beautiful Blue Icons */}
                  <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 my-8" id="nimt-advantages-grid">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-[#0041F5]" />
                      <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">NIMT के मुख्य आकर्षण और लाभ</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">लचीले लर्निंग फॉर्मेट्स</h5>
                          <p className="text-xs text-gray-600">Day School, Play-Way अधिगम और Day Boarding विकल्पों का बेहतरीन मेल।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">सर्वश्रेष्ठ इंफ्रास्ट्रक्चर</h5>
                          <p className="text-xs text-gray-600">सुरक्षित, रंगीन थीम आधारित क्लासरूम्स और संवेदी (Sensory) प्ले एरिया।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">उच्च सुरक्षा और स्वच्छता</h5>
                          <p className="text-xs text-gray-600">24/7 सीसीटीवी कवरेज, प्रशिक्षित सहायिकाएं (Nannies) और पूर्णतः सैनिटाइज्ड क्षेत्र।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Star className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">प्रयोगात्मक शिक्षा पद्धति</h5>
                          <p className="text-xs text-gray-600">स्टोरीटेलिंग, संगीतमय राइम्स, कला, और संज्ञानात्मक खेल गतिविधियों का समायोजन।</p>
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
                  अपने बच्चे के उज्ज्वल भविष्य की शुरुआत का सही निर्णय लें। हमारे खूबसूरत कैंपस और खिलौनों से सुसज्जित क्लासरूम को प्रत्यक्ष रूप से देखने के लिए आएं।
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

              {/* Section 8 - Conclusion */}
              <section id="conclusion" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  निष्कर्ष
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    अगर आप सोच रहे हैं कि <strong>&quot;Preschool क्यों ज़रूरी है?&quot;</strong>, तो इसका सरल उत्तर है—यह बच्चे के उज्ज्वल भविष्य की पहली सीढ़ी है। Preschool बच्चों को केवल पढ़ाई के लिए नहीं, बल्कि जीवन के लिए तैयार करता है। यहाँ वे सीखते हैं, दोस्त बनाते हैं, आत्मविश्वास बढ़ाते हैं और नई दुनिया को समझना शुरू करते हैं।
                  </p>
                  <p>
                    अगर आप अपने बच्चे के लिए <strong>Ghaziabad में एक अच्छे Preschool</strong> की तलाश कर रहे हैं, तो <strong>NIMT Beacon School</strong> आइए। हमारे Campus को देखिए, शिक्षकों से मिलिए और जानिए कि हम बच्चों की शुरुआती शिक्षा को कैसे आनंददायक, सुरक्षित और सार्थक बनाते हैं।
                  </p>

                  {/* Information Card Box */}
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 my-6 flex gap-3.5 items-start">
                    <Info className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Admissions Cycle Active</h4>
                      <p className="text-sm text-gray-600">
                        शैक्षणिक वर्ष 2026-2027 के लिए Pre-Nursery, Nursery, और Kindergarten में दाखिले की प्रक्रिया शुरू हो चुकी है। सीमित सीटों के कारण जल्द से जल्द कैम्पस विज़िट शेड्यूल करें।
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            
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
