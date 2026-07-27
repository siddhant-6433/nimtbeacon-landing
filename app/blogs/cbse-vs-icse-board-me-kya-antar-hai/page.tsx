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
  { id: 'what-is-cbse', label: 'CBSE Board क्या है?' },
  { id: 'what-is-icse', label: 'ICSE Board क्या है?' },
  { id: 'main-differences', label: 'CBSE और ICSE में मुख्य अंतर' },
  { id: 'which-is-better', label: 'कौन सा Board बेहतर है?' },
  { id: 'how-to-choose', label: 'Board चुनते समय ध्यान रखने योग्य बातें' },
  { id: 'nimt-excellence', label: 'NIMT में Academic Excellence' },
  { id: 'conclusion', label: 'निष्कर्ष और सही फैसला' }
];

export default function BlogDetailPage() {
  const [activeSection, setActiveSection] = useState<string>('what-is-cbse');
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
    grade: 'Grade I - V',
    visitDate: '',
    visitSlot: 'Morning (9:00 AM - 11:00 AM)'
  });

  const [applyForm, setApplyForm] = useState({
    childName: '',
    dob: '',
    session: '2026-2027',
    grade: 'Grade I - V',
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
      grade: 'Grade I - V',
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
      grade: 'Grade I - V',
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
            <span className="text-gray-900 font-semibold truncate">CBSE और ICSE Board में क्या अंतर है?</span>
          </nav>

          {/* 2. Category Badge & Meta Metrics */}
          <div className="flex flex-wrap items-center gap-4 mb-6" id="blog-meta">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#0041F5] text-white tracking-widest uppercase">
              BOARD COMPARISON
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
            CBSE और ICSE Board में क्या अंतर है? 
          </h1>
        </div>

        {/* 4. Beautiful DSLR landscape hero image (IMAGE 1) */}
        <div className="max-w-5xl mx-auto px-0 sm:px-6 mb-12" id="blog-hero-container">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none sm:rounded-2xl shadow-xl">
            <Image
              src="/blogs/cbse-vs-icse-board-me-kya-antar-hai-1.webp"
              alt="Indian students looking at educational boards and school curriculum materials inside classroom"
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
              id="hero-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-sm bg-black/45 backdrop-blur-md px-4 py-2.5 rounded-xl max-w-2xl hidden md:block border border-white/10">
              <span className="font-bold text-[#FFFC4D]">NIMT Board Advisory:</span> अपने बच्चे की सीखने की शैली, करियर के लक्ष्यों और प्राथमिकताओं के अनुरूप सही शिक्षा बोर्ड का चयन करें।
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3 px-4 italic sm:hidden">
            CBSE vs ICSE Guide: दोनों शिक्षा बोर्डों के पाठ्यक्रम और शिक्षण शैलियों की सरल तुलनात्मक समीक्षा।
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
                  जब बच्चे के स्कूल में एडमिशन की बात आती है, तो माता-पिता के मन में सबसे आम सवाल होता है—<strong>CBSE और ICSE Board में क्या अंतर है?</strong> दोनों ही भारत के प्रसिद्ध शिक्षा बोर्ड हैं और दोनों का उद्देश्य बच्चों को अच्छी शिक्षा देना है। लेकिन इनके पढ़ाने का तरीका, पाठ्यक्रम, परीक्षा प्रणाली और सीखने का अनुभव अलग-अलग होता है।
                </p>
                <p>
                  हर माता-पिता चाहते हैं कि उनके बच्चे की पढ़ाई की शुरुआत और शैक्षणिक यात्रा सर्वश्रेष्ठ माहौल में हो। इसलिए सही बोर्ड चुनने से पहले दोनों की बारीकियों, ताकत और कमजोरियों को गहराई से समझना बेहद आवश्यक हो जाता है।
                </p>
              </div>

              {/* CTA 1 (After Introduction) */}
              <div className="my-10 bg-[#0041F5]/5 border border-[#0041F5]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm" id="cta-block-1">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-extrabold text-slate-900">बच्चे के लिए सही बोर्ड चुनने में असमंजस में हैं?</h3>
                  <p className="text-sm text-gray-600 max-w-md">NIMT Beacon School में हमारे शैक्षणिक विशेषज्ञों के साथ एक व्यक्तिगत विज़िट शेड्यूल करें और अपने बच्चे के उज्ज्वल भविष्य के लिए सही करियर पथ चुनें।</p>
                </div>
                <button
                  onClick={() => setIsVisitModalOpen(true)}
                  className="w-full sm:w-auto bg-[#0041F5] hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 whitespace-nowrap hover:shadow-md hover:shadow-[#0041F5]/20 flex items-center justify-center gap-2"
                >
                  Book Campus Visit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Section 1 - CBSE Board क्या है? */}
              <section id="what-is-cbse" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  CBSE Board क्या है?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    <strong>CBSE (Central Board of Secondary Education)</strong> भारत का सबसे बड़ा और सबसे लोकप्रिय राष्ट्रीय स्तर का शिक्षा बोर्ड है। देश के अधिकांश सरकारी और निजी स्कूल इसी बोर्ड से संबद्ध हैं। इसका मुख्य पाठ्यक्रम NCERT की पुस्तकों पर आधारित होता है।
                  </p>
                  <p>
                    CBSE का सिलेबस काफी सरल, संतुलित और सुव्यवस्थित होता है। इसे राष्ट्रीय स्तर की प्रतियोगी परीक्षाओं जैसे कि <strong>JEE (इंजीनियरिंग)</strong> और <strong>NEET (मेडिकल)</strong> को ध्यान में रखकर तैयार किया गया है। ट्रांसफर की स्थिति में पूरे भारत में एक समान सिलेबस होने के कारण CBSE स्कूलों में एडमिशन लेना बेहद सुलभ हो जाता है।
                  </p>
                </div>
              </section>

              {/* Section 2 - ICSE Board क्या है? */}
              <section id="what-is-icse" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  ICSE Board क्या है?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 2) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/cbse-vs-icse-board-me-kya-antar-hai-2.webp"
                    alt="Indian students looking over high-level academic content and project work in school"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="boarding-sports-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    <strong>ICSE (Indian Certificate of Secondary Education)</strong> CISCE (Council for the Indian School Certificate Examinations) द्वारा संचालित एक निजी शिक्षा बोर्ड है। यह बोर्ड अपने विस्तृत पाठ्यक्रम और अंग्रेज़ी भाषा के कड़े मानकों के लिए जाना जाता है।
                  </p>
                  <p>
                    ICSE बोर्ड मुख्य रूप से थ्योरी के बजाय व्यावहारिक (Practical) ज्ञान, प्रोजेक्ट वर्क और समस्या निवारण (Analytical Thinking) पर बहुत अधिक बल देता है। इसका पाठ्यक्रम काफी व्यापक होता है, जिससे छात्रों का समग्र बौद्धिक विकास संभव हो पाता है।
                  </p>

                  {/* Highlights Comparative Box */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">CBSE BOARD HIGHLIGHTS</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">CBSE बोर्ड के मुख्य लाभ:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>राष्ट्रीय प्रतियोगी परीक्षाओं (JEE, NEET, CUET) के अनुकूल सिलेबस</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>समग्र भारत में समान पाठ्यक्रम, जो सुगम स्थानांतरण सुनिश्चित करता है</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>NCERT की आसान और विषय-आधारित मजबूत वैचारिक आधारभूत सामग्री</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                          <span>कम बोझिल और तार्किक रूप से वर्गीकृत परीक्षा पैटर्न</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#0041F5] mb-3 block">ICSE BOARD HIGHLIGHTS</span>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">ICSE बोर्ड के मुख्य लाभ:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>अंग्रेज़ी व्याकरण, साहित्य और भाषा प्रवाह पर विशेष बल</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>वैश्विक स्तर पर स्वीकृत और विदेशी विश्वविद्यालयों के लिए आदर्श ढांचा</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>प्रैक्टिकल परीक्षाओं और प्रोजेक्ट वर्क को भारी अधिभार व महत्व</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                          <span>मानविकी, कला और भाषाओं की व्यापक व गहन अध्ययन श्रृंखला</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 - CBSE और ICSE में मुख्य अंतर */}
              <section id="main-differences" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  CBSE और ICSE में मुख्य अंतर
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    दोनों बोर्डों के अंतर को समझने के लिए कुछ प्रमुख बिंदुओं पर ध्यान देना आवश्यक है:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>1. पाठ्यक्रम (Syllabus):</strong> CBSE का सिलेबस मुख्य रूप से विज्ञान और गणित पर केंद्रित होता है। इसके विपरीत, ICSE का सिलेबस कला, साहित्य, प्रबंधन और विज्ञान समेत सभी विषयों को समान महत्व देकर अत्यधिक विस्तृत और सघन बनाता है।</li>
                    <li><strong>2. भाषा का माध्यम (Medium of Instruction):</strong> CBSE बोर्ड में हिंदी और अंग्रेज़ी दोनों को समान प्राथमिकता दी जा सकती है, लेकिन ICSE बोर्ड में अंग्रेज़ी ही एकमात्र और कड़ा माध्यम है। अंग्रेजी साहित्य पर यहाँ असाधारण बल दिया जाता है।</li>
                    <li><strong>3. प्रतियोगी परीक्षाएं:</strong> JEE, NEET और संघ लोक सेवा आयोग (UPSC) की परीक्षाओं के सिलेबस का प्रारूप मुख्यतः CBSE/NCERT पैटर्न पर आधारित होता है। ICSE से पढ़ने वाले बच्चे भी इनमें सफल होते हैं, परंतु उन्हें कुछ अतिरिक्त प्रयास करने पड़ सकते हैं।</li>
                    <li><strong>4. वैश्विक मान्यता:</strong> विदेशी विश्वविद्यालयों में दाखिले और IELTS/TOEFL जैसी अंग्रेज़ी परीक्षाओं में ICSE के छात्रों को अपनी गहन भाषा पृष्ठभूमि के कारण कुछ अधिक सहजता का अनुभव हो सकता है।</li>
                  </ul>
                </div>
              </section>

              {/* Section 4 - कौन सा Board बेहतर है? */}
              <section id="which-is-better" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  कौन सा Board बेहतर है?
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    इस अत्यंत महत्वपूर्ण सवाल का कोई एक सरल या निश्चित जवाब नहीं है। सर्वश्रेष्ठ बोर्ड वह है जो आपके बच्चे की व्यक्तिगत क्षमता, सीखने के तरीके, और भविष्य के करियर प्राथमिकताओं के साथ मेल खाता हो।
                  </p>
                  <p>
                    यदि आपके बच्चे का सपना भारत में <strong>इंजीनियरिंग (IIT) या मेडिकल (NEET)</strong> के क्षेत्र में जाने का है, तो CBSE बोर्ड आपके लिए सबसे आदर्श होगा। लेकिन यदि आपके बच्चे की रुचि भाषाओं, साहित्य, प्रबंधन, रचनात्मक क्षेत्रों में है या वह भविष्य में <strong>विदेश में उच्च शिक्षा</strong> प्राप्त करना चाहता है, तो ICSE बोर्ड उसके लिए उत्कृष्ट आधार साबित हो सकता है।
                  </p>
                </div>
              </section>

              {/* Section 5 - Board चुनते समय ध्यान रखने योग्य बातें */}
              <section id="how-to-choose" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  Board चुनते समय ध्यान रखने योग्य बातें
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 3) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/cbse-vs-icse-board-me-kya-antar-hai-3.webp"
                    alt="Students studying collaboratively inside the bright classroom of NIMT Beacon School"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="hostel-corridor-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    एक अभिभावक के रूप में केवल बोर्ड का नाम देखकर निर्णय न लें। बोर्ड चुनने के साथ-साथ इन मुख्य तत्वों का मूल्यांकन अवश्य करें:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>क्या स्कूल में अध्यापकों का दल बोर्ड के मानकों के अनुसार योग्य और अनुभवी है?</li>
                    <li>क्या स्कूल का शिक्षण दृष्टिकोण वैचारिक स्पष्टता (Conceptual Learning) पर आधारित है, या रटने (Rote Learning) पर?</li>
                    <li>सह-पाठ्यचर्या (Co-curricular activities) और खेलों के प्रति स्कूल का दृष्टिकोण कैसा है?</li>
                    <li>क्या स्कूल के बुनियादी ढांचे जैसे विज्ञान, कंप्यूटर प्रयोगशाला और पुस्तकालय आधुनिक हैं?</li>
                  </ul>

                  {/* Warning Security Box */}
                  <div className="bg-[#F6EADA]/50 border-l-4 border-l-[#FFFC4D] rounded-r-xl p-5 my-6 flex gap-4 items-start">
                    <AlertTriangle className="h-6 w-6 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">अभिभावकों के लिए विशेष सलाह:</h4>
                      <p className="text-sm text-gray-700">
                        याद रखें, एक उत्कृष्ट स्कूल किसी भी कमजोर पाठ्यक्रम को उत्कृष्ट बना सकता है, परंतु एक उत्कृष्ट पाठ्यक्रम बिना उचित शिक्षण दृष्टिकोण और संसाधनों के बच्चे का सर्वांगीण विकास नहीं कर सकता। अतः संबद्धता के साथ-साथ स्कूल के वास्तविक इंफ्रास्ट्रक्चर की स्वयं जांच अवश्य करें।
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 - NIMT Beacon School में Academic Excellence */}
              <section id="nimt-excellence" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/15 relative inline-block">
                  NIMT Beacon School में Academic Excellence
                  <span className="absolute bottom-0 left-0 h-[2px] w-24 bg-[#0041F5]"></span>
                </h2>

                {/* Landscape Image (IMAGE 4) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/cbse-vs-icse-board-me-kya-antar-hai-4.webp"
                    alt="Sprawling green school campus grounds of NIMT Beacon School"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    id="school-landscape-img"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    <strong>NIMT Beacon School</strong> में हमारा दृढ़ विश्वास है कि शिक्षा चाहे किसी भी बोर्ड की हो, बच्चे के सीखने की प्रक्रिया प्रयोगात्मक और आनंददायक होनी चाहिए।
                  </p>
                  <p>
                    NIMT Beacon School राष्ट्रीय स्तर के <strong>CBSE बोर्ड पाठ्यक्रम</strong> का अनुकरण करता है, जिसे हम अंतरराष्ट्रीय शिक्षा मानकों और अत्यधिक परिष्कृत प्रयोगात्मक अधिगम (Experiential Learning) पद्धतियों के साथ संरेखित करते हैं। हम सुनिश्चित करते हैं कि हमारे छात्रों को प्रतियोगी परीक्षाओं की ठोस तैयारी के साथ-साथ उत्कृष्ट अंग्रेज़ी संचार, तार्किक विश्लेषण और वैश्विक व्यक्तित्व का पूर्ण लाभ मिले।
                  </p>

                  {/* Highlight Features Box with beautiful Blue Icons */}
                  <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 my-8" id="nimt-advantages-grid">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-[#0041F5]" />
                      <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">NIMT के मुख्य शैक्षणिक स्तंभ और लाभ</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">प्रतियोगी परीक्षाओं की तैयारी</h5>
                          <p className="text-xs text-gray-600">नियमित स्कूल समय के दौरान ही JEE, NEET और अन्य ओलंपियाड्स के लिए मजबूत वैचारिक आधार का निर्माण।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">आधुनिक कोडिंग व को-करिकुलर लैब्स</h5>
                          <p className="text-xs text-gray-600">भौतिकी, रसायन, जीव विज्ञान के साथ उन्नत स्टेम (STEM) और कंप्यूटर प्रयोगशालाएं।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">वैश्विक अंग्रेजी और लोक संभाषण</h5>
                          <p className="text-xs text-gray-600">अंग्रेजी भाषा प्रवाह, साहित्य चर्चा और पब्लिक स्पीकिंग कौशल निखारने हेतु विशेष क्लब।</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#0041F5] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Star className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm mb-1">प्रयोगात्मक शिक्षण दृष्टिकोण</h5>
                          <p className="text-xs text-gray-600">रटने की प्रवृत्ति से दूर, व्यवहारिक प्रोजेक्ट्स, केस स्टडीज़ और समूह कार्य द्वारा वास्तविक ज्ञान अर्जन।</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA 2 (After "NIMT Beacon School में Academic Excellence") */}
              <div className="my-12 overflow-hidden bg-[#F6EADA]/40 border border-[#F6EADA] rounded-2xl p-8 sm:p-10 flex flex-col justify-center space-y-5" id="cta-block-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0041F5]">Campus Experience</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">Visit NIMT Beacon School</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  अपने बच्चे के उज्ज्वल भविष्य की दिशा में सबसे सही और पहला कदम बढ़ाएं। हमारे सुंदर अत्याधुनिक परिसर, प्रयोगशालाओं और खेल परिसरों को प्रत्यक्ष रूप से देखने के लिए आएं।
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
                    <strong>CBSE और ICSE दोनों ही अत्यंत गौरवशाली और समृद्ध शिक्षा बोर्ड हैं।</strong> सही फैसला लेते समय अपने पारिवारिक स्थानांतरण की संभावना, प्रतियोगी परीक्षाओं की तैयारी की प्राथमिकता, और बच्चे की भाषा व सीखने की रुचि को कसौटी बनाएं।
                  </p>
                  <p>
                    यदि आप गाज़ियाबाद और एनसीआर (NCR) क्षेत्र में एक सुरक्षित, आधुनिक और सर्वांगीण विकास प्रदान करने वाले सर्वश्रेष्ठ CBSE स्कूल की तलाश कर रहे हैं, तो हम आपका <strong>NIMT Beacon School</strong> में सहर्ष स्वागत करते हैं। आज ही हमारे कैंपस पधारें और देखें कि हम किस तरह अकादमिक उत्कृष्टता को एक नई ऊंचाई प्रदान करते हैं।
                  </p>

              
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
