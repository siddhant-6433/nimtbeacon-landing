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
  { id: 'requirements', label: 'अच्छे स्कूल में क्या होना चाहिए?' },
  { id: 'benefits', label: 'बोर्डिंग स्कूल के लाभ' },
  { id: 'holistic-growth', label: 'पढ़ाई के साथ सम्पूर्ण विकास' },
  { id: 'hostel-facilities', label: 'हॉस्टल की सुविधाएँ' },
  { id: 'school-visit', label: 'कैंपस विज़िट क्यों ज़रूरी है?' },
  { id: 'common-mistakes', label: 'किन गलतियों से बचें?' },
  { id: 'conclusion', label: 'निष्कर्ष और सही चुनाव' }
];

export default function BlogDetailPage() {
  const [activeSection, setActiveSection] = useState<string>('requirements');
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
            <span className="text-gray-900 font-semibold truncate">गाज़ियाबाद का सबसे अच्छा बोर्डिंग स्कूल कैसे चुनें?</span>
          </nav>

          {/* 2. Category Badge & Meta Metrics */}
          <div className="flex flex-wrap items-center gap-4 mb-6" id="blog-meta">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#0041F5] text-white tracking-widest uppercase">
              PARENTS GUIDE
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
            Boarding School vs Day School: गाज़ियाबाद का सबसे अच्छा बोर्डिंग स्कूल कैसे चुनें? 
          </h1>
        </div>

        {/* 4. Beautiful landscape hero image (IMAGE 1) */}
        <div className="max-w-5xl mx-auto px-0 sm:px-6 mb-12" id="blog-hero-container">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none sm:rounded-2xl shadow-xl">
            <Image
              src="/blogs/ghaziabad-ka-sabse-accha-boarding-school-1.webp"
              alt="Beautiful clean rendering of an Indian boarding school campus with safety features"
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
              id="hero-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-sm bg-black/45 backdrop-blur-md px-4 py-2.5 rounded-xl max-w-2xl hidden md:block border border-white/10">
              <span className="font-bold text-[#FFFC4D]">NIMT Boarding Advisory:</span> गाज़ियाबाद में सर्वश्रेष्ठ बोर्डिंग स्कूल चुनते समय शैक्षणिक स्तर के साथ-साथ हॉस्टल की सुरक्षा और संतुलित जीवन शैली का मूल्यांकन करना सबसे महत्वपूर्ण है।
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3 px-4 italic sm:hidden">
            Boarding School Selection Guide: गाज़ियाबाद में सर्वश्रेष्ठ बोर्डिंग स्कूलों के चयन और हॉस्टल सुविधाओं के मूल्यांकन के लिए एक संपूर्ण मार्गदर्शिका।
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

              {/* Share section inside desktop TOC */}
           
            </aside>

            {/* Core Blog Text Container - width bounded up to 4xl equivalent */}
            <article className="lg:col-span-9 max-w-4xl mx-auto w-full" id="blog-content-body">
              
              {/* 5. Introduction */}
              <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed mb-8 space-y-6">
                <p className="text-xl sm:text-2xl text-slate-900 font-medium leading-relaxed border-l-4 border-[#0041F5] pl-6 py-1">
                  अगर आप अपने बच्चे के लिए <strong>गाज़ियाबाद का सबसे अच्छा बोर्डिंग स्कूल</strong> ढूंढ रहे हैं, तो यह फैसला केवल स्कूल की इमारत देखकर नहीं लेना चाहिए। एक अच्छा बोर्डिंग स्कूल वह होता है जहाँ बच्चे को अच्छी शिक्षा के साथ सुरक्षित वातावरण, अनुशासित जीवन, अच्छे संस्कार और अपने व्यक्तित्व को विकसित करने के अवसर मिलें।
                </p>
                <p>
                  आज के समय में कई माता-पिता चाहते हैं कि उनके बच्चे ऐसी जगह पढ़ें जहाँ पढ़ाई के साथ-साथ खेल, नेतृत्व, आत्मविश्वास और जीवन कौशल भी विकसित हों। यही कारण है कि <strong>Ghaziabad Boarding School</strong> की तलाश करते समय केवल फीस या रिज़ल्ट नहीं, बल्कि पूरे स्कूल के वातावरण को समझना ज़रूरी है।
                </p>
              </div>

              {/* CTA 1 (After Introduction) */}
              <div className="my-10 bg-[#0041F5]/5 border border-[#0041F5]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm" id="cta-block-1">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-extrabold text-slate-900">क्या आप अपने बच्चे के लिए सर्वश्रेष्ठ बोर्डिंग स्कूल तलाश रहे हैं?</h3>
                  <p className="text-sm text-gray-600 max-w-md">NIMT Beacon School के बोर्डिंग लाइफ और हॉस्टल विंग का अनुभव करने के लिए एक व्यक्तिगत विज़िट शेड्यूल करें और हमारे काउंसलर्स से सीधा मार्गदर्शन पाएं।</p>
                </div>
                <button
                  onClick={() => setIsVisitModalOpen(true)}
                  className="w-full sm:w-auto bg-[#0041F5] hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 whitespace-nowrap hover:shadow-md hover:shadow-[#0041F5]/20 flex items-center justify-center gap-2"
                >
                  Book Campus Visit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Section 1 - एक अच्छे Boarding School में क्या होना चाहिए? */}
              <section id="requirements" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  एक अच्छे Boarding School में क्या होना चाहिए?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    हर बोर्डिंग स्कूल अलग होता है। Admission लेने से पहले इन महत्वपूर्ण बुनियादी बातों और आवश्यक सुविधाओं पर ध्यान देना चाहिए:
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 list-none pl-0">
                    <li className="flex items-center gap-2.5 text-base text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0" />
                      <span>सुरक्षित और निगरानी वाला Hostel</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-base text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0" />
                      <span>अनुभवी और सहयोगी शिक्षक</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-base text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0" />
                      <span>साफ़ और आरामदायक रहने की व्यवस्था</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-base text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0" />
                      <span>पौष्टिक और संतुलित भोजन</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-base text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0" />
                      <span>आधुनिक Science और Computer Labs</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-base text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0" />
                      <span>अच्छी Library</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-base text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0" />
                      <span>Sports और Co-Curricular Activities</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-base text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0" />
                      <span>Medical Support और सुरक्षा प्रहरी</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-base text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0" />
                      <span>नियमित Parent Communication व्यवस्था</span>
                    </li>
                  </ul>
                  
                  <p className="mt-4">
                    इन उत्कृष्ट सुविधाओं से बच्चों को पढ़ाई के साथ-साथ सुरक्षित और संतुलित जीवन मिलता है।
                  </p>
                </div>
              </section>

              {/* Section 2 - Boarding School बच्चों के लिए क्यों अच्छा हो सकता है? */}
              <section id="benefits" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Boarding School बच्चों के लिए क्यों अच्छा हो सकता है?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 2) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/ghaziabad-ka-sabse-accha-boarding-school-2.webp"
                    alt="Happy students interacting in a well-structured boarding house lounge area"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="boarding-sports-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    एक अच्छा <strong>Boarding School</strong> बच्चों को आत्मनिर्भर बनाता है। वे अपना समय व्यवस्थित करना, अपनी ज़िम्मेदारियाँ निभाना और दूसरों के साथ मिलकर रहना सीखते हैं।
                  </p>
                  <p>
                    Hostel में रहने वाले छात्र एक निश्चित दिनचर्या का पालन करते हैं। समय पर उठना, पढ़ाई करना, खेलना, समूह में रहना और अनुशासन का पालन करना उनकी आदत बन जाती है। यही अनुभव आगे चलकर उनके व्यक्तित्व को मजबूत बनाता है।
                  </p>

                  {/* Highlights Comparative Box */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">BOARDING LIFE ADVANTAGES</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">बोर्डिंग लाइफ के प्रमुख लाभ:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>स्वतंत्रता और उच्च आत्मनिर्भरता की आदत विकसित होना</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>समय का बेहतर प्रबंधन और व्यवस्थित अनुशासित दिनचर्या</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>अलग-अलग राज्यों के छात्रों के साथ रहने से सामाजिक कौशल</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>डिजिटल उपकरणों और मोबाइल के अनावश्यक भटकाव से मुक्ति</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">WHAT TO EVALUATE</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">चयन करते समय ध्यान रखने योग्य बातें:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>सुरक्षा मापदंड और 24/7 कैंपस निगरानी तंत्र</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>रेजीडेंट डॉक्टरों और आपातकालीन चिकित्सा सुविधाओं की व्यवस्था</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>छात्र और रेजीडेंट स्टाफ के बीच का अनुपात और संवाद माध्यम</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>सप्ताहांत और शाम की खेल एवं को-करिकुलर गतिविधियों का ढांचा</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 - पढ़ाई के साथ सम्पूर्ण विकास */}
              <section id="holistic-growth" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  पढ़ाई के साथ सम्पूर्ण विकास
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    आज शिक्षा केवल परीक्षा में अच्छे अंक लाने तक सीमित नहीं है। एक अच्छे स्कूल का उद्देश्य बच्चों का सम्पूर्ण विकास करना होता है।
                  </p>
                  <p>
                    इसलिए Boarding School चुनते समय यह भी देखें कि वहाँ बच्चों को किन-किन गतिविधियों में भाग लेने का अवसर मिलता है जो उनके करियर और रुचि को विस्तार दे सकें:
                  </p>
                  
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 list-none pl-0">
                    <li className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-sm font-bold text-slate-800 shadow-sm">
                      ⚽ Sports
                    </li>
                    <li className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-sm font-bold text-slate-800 shadow-sm">
                      🤖 Robotics
                    </li>
                    <li className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-sm font-bold text-slate-800 shadow-sm">
                      🎵 Music
                    </li>
                    <li className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-sm font-bold text-slate-800 shadow-sm">
                      🎨 Art
                    </li>
                    <li className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-sm font-bold text-slate-800 shadow-sm">
                      🗣️ Debate
                    </li>
                    <li className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-sm font-bold text-slate-800 shadow-sm">
                      🎤 Public Speaking
                    </li>
                    <li className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-sm font-bold text-slate-800 shadow-sm">
                      🔬 Science Projects
                    </li>
                    <li className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-sm font-bold text-slate-800 shadow-sm">
                      🌟 Leadership Activities
                    </li>
                  </ul>

                  <p>
                    ये सभी रचनात्मक गतिविधियाँ बच्चों का आत्मविश्वास बढ़ाती हैं और उन्हें भविष्य की चुनौतियों के लिए तैयार करती हैं।
                  </p>
                </div>
              </section>

              {/* Section 4 - Hostel की सुविधाएँ भी उतनी ही महत्वपूर्ण हैं */}
              <section id="hostel-facilities" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Hostel की सुविधाएँ भी उतनी ही महत्वपूर्ण हैं
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    क्योंकि बच्चा स्कूल में ही रहेगा, इसलिए Hostel की गुणवत्ता बहुत महत्वपूर्ण होती है। Admission से पहले Hostel ज़रूर देखें और निम्न बिंदुओं का बारिकी से निरीक्षण करें:
                  </p>
                  
                  <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 my-6">
                    <h4 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-[#0041F5]" />
                      हॉस्टल निरीक्षण चेकलिस्ट (Hostel Inspection Checklist):
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex gap-2.5 items-start">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                        <span className="text-sm font-medium text-gray-700">कमरों की सफाई और उचित वेंटिलेशन</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                        <span className="text-sm font-medium text-gray-700">सीसीटीवी कैमरे और फिजिकल सुरक्षा व्यवस्था</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                        <span className="text-sm font-medium text-gray-700">24 घंटे वार्डन्स की उपलब्धता और सहयोग</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                        <span className="text-sm font-medium text-gray-700">अध्ययन कक्ष (Study Rooms) की एकाग्रता</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                        <span className="text-sm font-medium text-gray-700">स्वच्छ और हवादार भोजन कक्ष (Dining Hall)</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                        <span className="text-sm font-medium text-gray-700">चिकित्सा कक्ष (Medical Room) व एम्बुलेंस</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                        <span className="text-sm font-medium text-gray-700">दैनिक दिनचर्या (Daily Routine) का सुचारू पालन</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    एक अच्छा Hostel बच्चों को घर जैसा सुरक्षित और सकारात्मक वातावरण देता है, जिससे वे होमसिकनेस से बचकर पढ़ाई पर ध्यान दे पाते हैं।
                  </p>
                </div>
              </section>

              {/* Section 5 - Parents को School Visit क्यों करनी चाहिए? */}
              <section id="school-visit" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Parents को School Visit क्यों करनी चाहिए?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 3) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/ghaziabad-ka-sabse-accha-boarding-school-3.webp"
                    alt="Parents walking through a modern clean boarding school library and academic campus"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="hostel-corridor-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    किसी भी स्कूल का सही अनुभव केवल वेबसाइट या Brochure से नहीं मिलता। Campus Visit के दौरान आप प्रत्यक्ष रूप से देख सकते हैं और सही निर्णय ले सकते हैं।
                  </p>
                  
                  <p>
                    सच्ची जानकारी ही आपको बेहतर फैसला लेने में मदद करती है, इसलिए जब भी आप कैंपस जाएँ तो इन बातों को विशेष रूप से महसूस करें:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex gap-3 items-start">
                      <span className="text-[#0041F5] font-extrabold text-lg bg-white h-8 w-8 rounded-full flex items-center justify-center border border-gray-100 shadow-sm shrink-0">1</span>
                      <p className="text-sm text-gray-700"><strong className="text-slate-900">Classrooms & Labs:</strong> क्लासरूम का वेंटिलेशन, प्रकाश व्यवस्था और प्रयोगात्मक कंप्यूटर व साइंस लैब्स का ढांचा देखें।</p>
                    </div>
                    <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex gap-3 items-start">
                      <span className="text-[#0041F5] font-extrabold text-lg bg-white h-8 w-8 rounded-full flex items-center justify-center border border-gray-100 shadow-sm shrink-0">2</span>
                      <p className="text-sm text-gray-700"><strong className="text-slate-900">Hostel Dorms:</strong> कमरों का आकार, स्वच्छता, अलमारी, वाशरूम की स्वच्छता और गद्दों की गुणवत्ता की जांच करें।</p>
                    </div>
                    <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex gap-3 items-start">
                      <span className="text-[#0041F5] font-extrabold text-lg bg-white h-8 w-8 rounded-full flex items-center justify-center border border-gray-100 shadow-sm shrink-0">3</span>
                      <p className="text-sm text-gray-700"><strong className="text-slate-900">Teachers Interaction:</strong> वहां के शिक्षकों से बात करें और बच्चों के प्रति उनके शैक्षणिक और व्यवहारिक दृष्टिकोण को समझें।</p>
                    </div>
                    <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex gap-3 items-start">
                      <span className="text-[#0041F5] font-extrabold text-lg bg-white h-8 w-8 rounded-full flex items-center justify-center border border-gray-100 shadow-sm shrink-0">4</span>
                      <p className="text-sm text-gray-700"><strong className="text-slate-900">Sports & Culture:</strong> खेल के मैदान की विशालता और वहां के छात्रों के व्यवहार तथा स्कूल कल्चर को महसूस करें।</p>
                    </div>
                  </div>

                  {/* Warning Security Box */}
                  <div className="bg-[#F6EADA]/50 border-l-4 border-l-[#FFFC4D] rounded-r-xl p-5 my-6 flex gap-4 items-start">
                    <AlertTriangle className="h-6 w-6 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">अभिभावकों के लिए स्कूल विज़िट की सलाह:</h4>
                      <p className="text-sm text-gray-700">
                        याद रखें, केवल चमचमाते विज्ञापन को देखकर फैसला न लें। हमेशा मेस एरिया में डाइनिंग भोजन की गुणवत्ता को खुद चखें और वहां की सुरक्षा प्रणालियों का बारीकी से आकलन करें। यही निर्णय आपके बच्चे के सुखद भविष्य का आधार बनेगा।
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 - गाज़ियाबाद में Boarding School चुनते समय किन गलतियों से बचें? */}
              <section id="common-mistakes" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  गाज़ियाबाद में Boarding School चुनते समय किन गलतियों से बचें?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 4) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/ghaziabad-ka-sabse-accha-boarding-school-4.webp"
                    alt="Spacious secure modern boarding school campus visual representing excellent holistic infrastructure"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="school-landscape-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    कई माता-पिता केवल आकर्षक विज्ञापन देखकर जल्दबाजी में Admission का फैसला कर लेते हैं, जो बाद में बच्चों के मानसिक दबाव या असंतोष का कारण बनता है। इसके बजाय इन आवश्यक पहलुओं की अच्छी तरह जांच करें:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                    <li><strong className="text-slate-900">School Recognition:</strong> सीबीएसई या अन्य राष्ट्रीय/अंतरराष्ट्रीय बोर्डों से स्कूल की संबद्धता की जांच करें।</li>
                    <li><strong className="text-slate-900">Teacher Experience:</strong> बोर्डिंग रेजीडेंट टीचर्स का शैक्षणिक और संवेगात्मक मार्गदर्शन में पुराना अनुभव।</li>
                    <li><strong className="text-slate-900">Student Safety:</strong> कैंपस के अंदर और बाहर की सुरक्षा प्रणालियां तथा महिला स्टाफ की पर्याप्त संख्या।</li>
                    <li><strong className="text-slate-900">Academic & Career support:</strong> बोर्ड परीक्षा की तैयारी के साथ JEE/NEET/CLAT फाउंडेशन जैसी करियर मार्गदर्शन कोचिंग सुविधा।</li>
                    <li><strong className="text-slate-900">Hostel Management & Parent Reviews:</strong> अन्य बोर्डिंग अभिभावकों की वास्तविक समीक्षाएं।</li>
                  </ul>

                  {/* Highlight Features Box with beautiful Blue Icons */}
                  <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 my-8" id="nimt-advantages-grid">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-[#0041F5]" />
                      <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">NIMT BEACON BOARDING SCHOOL ADVANTAGES</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">एकीकृत करियर फाउंडेशन विंग</h5>
                          <p className="text-xs text-gray-600">कक्षा 9वीं से ही सीबीएसई बोर्ड की पढ़ाई के साथ JEE और NEET परीक्षाओं की उत्कृष्ट तैयारी और विशेष मेंटरशिप बैच।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">सुरक्षित एवं वातानुकूलित हॉस्टल्स</h5>
                          <p className="text-xs text-gray-600">24/7 गार्ड्स, सीसीटीवी सुरक्षा, स्वच्छ रहने के कमरे और बच्चों के लिए अलग-अलग अध्ययन कक्ष की आरामदायक व्यवस्था।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">स्नेही व अनुभवी रेजीडेंट वार्डन्स</h5>
                          <p className="text-xs text-gray-600">बच्चों को घर जैसा प्यार, कुशल अनुशासन, संवेगात्मक सुरक्षा और किसी भी शंका समाधान के लिए हमेशा तत्पर अनुभवी स्टाफ।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Star className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">संतुलित पौष्टिक शाकाहारी मेस</h5>
                          <p className="text-xs text-gray-600">उच्च गुणवत्तापूर्ण सामग्री से निर्मित स्वच्छ, स्वादिष्ट और संतुलित डाइनिंग भोजन जो बच्चों की सेहत को रखे चुस्त-दुरुस्त।</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA 2 (After NIMT Section) */}
              <div className="my-12 overflow-hidden bg-[#F6EADA]/40 border border-[#F6EADA] rounded-2xl p-8 sm:p-10 flex flex-col justify-center space-y-5" id="cta-block-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0041F5]">Campus Experience</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">Visit NIMT Beacon School Boarding Campus</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  अपने बच्चे के सुरक्षित, अनुशासित और आत्मनिर्भर भविष्य की दिशा में सबसे सही और पहला कदम बढ़ाएं। हमारे सुंदर अत्याधुनिक बोर्डिंग परिसर, भोजन कक्ष, खेल के मैदान और शैक्षणिक सुविधाओं को प्रत्यक्ष रूप से देखने के लिए आएं।
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
                  निष्कर्ष और सही चुनाव
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    अगर आप <strong>गाज़ियाबाद का सबसे अच्छा बोर्डिंग स्कूल</strong> चुनना चाहते हैं, तो केवल नाम या विज्ञापन देखकर निर्णय न लें। स्कूल का वातावरण, शिक्षकों का अनुभव, Hostel की व्यवस्था, सुरक्षा, पढ़ाई और बच्चों के सम्पूर्ण विकास के अवसर—इन सभी बातों को ध्यान से समझें।
                  </p>
                  <p>
                    सबसे अच्छा तरीका है कि आप स्वयं Campus जाएँ, Hostel देखें, शिक्षकों से बात करें और पूरे वातावरण को महसूस करें। जब स्कूल बच्चों को अच्छी शिक्षा के साथ सुरक्षित, अनुशासित और प्रेरणादायक माहौल देता है, तभी वह वास्तव में एक अच्छा Boarding School कहलाता है।
                  </p>
                  <p>
                    यदि आप <strong>Ghaziabad में Boarding School</strong> के विकल्प देख रहे हैं, तो अलग-अलग स्कूलों की तुलना करें, सुविधाओं को समझें और वही स्कूल चुनें जो आपके बच्चे की ज़रूरतों और भविष्य के लक्ष्यों के अनुसार सबसे उपयुक्त हो।
                  </p>

                  {/* Information Card Box */}
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 my-6 flex gap-3.5 items-start">
                    <Info className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Boarding Admissions Active (Grade VI - XII)</h4>
                      <p className="text-sm text-gray-600">
                        शैक्षणिक वर्ष 2026-2027 के लिए हॉस्टल और बोर्डिंग सीटों की प्रवेश प्रक्रिया शुरू हो चुकी है। सीमित क्षमता के कारण माता-पिता से अनुरोध है कि वे यथाशीघ्र कैंपस विज़िट बुक करें।
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
          <span className="text-xs font-bold text-slate-900 truncate">Boarding Seats active for 2026-27</span>
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
