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
  Share2, 
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
  Sparkles
} from 'lucide-react';
import BookVisitModal from '@/components/BookVisitModal';
import ApplyNowModal from '@/components/ApplyNowModal';
import BlogCTA from '@/components/BlogCTA';
import RelatedBlogs from '@/components/RelatedBlogs';
import BlogFaq from '@/components/BlogFaq';

// Define the H2 sections for the Table of Contents
interface TOCSection {
  id: string;
  label: string;
}

const tocSections: TOCSection[] = [
  { id: 'parents-look', label: 'What Should Parents Look for in a Good School?' },
  { id: 'environment-matters', label: 'Why School Environment Matters' },
  { id: 'safety-care', label: 'Importance of Safety and Student Care' },
  { id: 'learn-grow', label: 'NIMT Beacon School – A Place to Learn and Grow' },
  { id: 'final-thoughts', label: 'Final Thoughts' }
];

export default function BlogDetailPage() {
  const [activeSection, setActiveSection] = useState<string>('parents-look');
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
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  // FAQ Schema JSON-LD Data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the curriculum followed at NIMT Beacon School?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NIMT Beacon School follows the CBSE curriculum integrated with advanced STEM (Science, Technology, Engineering, and Math) modules, hands-on learning, and comprehensive co-curricular programs to ensure holistic development."
        }
      },
      {
        "@type": "Question",
        "name": "How does NIMT Beacon School ensure student safety and secure transit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The school implements 24/7 CCTV monitoring across campus, thorough background checks for all academic and support staff, GPS-enabled secure transport fleets, and strict gate entry protocols."
        }
      },
      {
        "@type": "Question",
        "name": "Does NIMT Beacon School offer boarding or hostel facilities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, NIMT Beacon School features secure, state-of-the-art separate boarding houses for boys and girls, with round-the-clock wardens, nutrient-rich meals, and integrated academic support."
        }
      },
      {
        "@type": "Question",
        "name": "What is the teacher-to-student ratio at NIMT Beacon School?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain an excellent 1:15 teacher-to-student ratio, ensuring personalized attention, individualized care, and deep interactive engagement in every single classroom."
        }
      },
      {
        "@type": "Question",
        "name": "How can we schedule a campus visit or book an in-person school tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Parents can instantly book a personalized campus visit by clicking the 'Book Campus Visit' button in our blog, selecting a preferred date/slot, or by reaching out directly to our admissions helpline."
        }
      }
    ]
  };

  // Article Schema JSON-LD Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Choosing the Best School in Ghaziabad: A Comprehensive Guide for Parents",
    "image": [
      "https://picsum.photos/seed/beacon_classroom/1200/630"
    ],
    "datePublished": "2026-07-17T04:30:00-07:00",
    "dateModified": "2026-07-17T04:30:00-07:00",
    "author": {
      "@type": "Organization",
      "name": "NIMT Beacon School Editorial Team",
      "url": "https://nimt.ac.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NIMT Beacon School",
      "logo": {
        "@type": "ImageObject",
        "url": "https://picsum.photos/seed/beacon_classroom/200/50"
      }
    },
    "description": "An exhaustive, premium educational guide helping parents identify essential parameters when looking for the best school in Ghaziabad, highlighting environment, safety, and academic rigor."
  };

  // Breadcrumb Schema JSON-LD Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nimt.ac.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": "https://nimt.ac.in/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Choosing the Best School in Ghaziabad",
        "item": "https://nimt.ac.in/blogs/best-school-in-ghaziabad"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#FFFC4D] selection:text-black">
      {/* JSON-LD Schemas injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Main Luxury Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#0041F5] rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md shadow-[#0041F5]/20">
              N
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-gray-900 block">NIMT BEACON</span>
              <span className="text-[10px] uppercase tracking-widest text-[#0041F5] font-semibold block -mt-1">School</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#0041F5] transition-colors">Home</a>
            <a href="#" className="hover:text-[#0041F5] transition-colors">Academics</a>
            <a href="#" className="hover:text-[#0041F5] transition-colors">Admissions</a>
            <a href="#" className="text-[#0041F5] font-semibold flex items-center gap-1">
              Blog <span className="h-1.5 w-1.5 rounded-full bg-[#0041F5]"></span>
            </a>
            <a href="#" className="hover:text-[#0041F5] transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsVisitModalOpen(true)}
              className="bg-[#0041F5] hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0041F5]/25 hover:-translate-y-0.5"
            >
              Book Campus Visit
            </button>
          </div>
        </div>
      </header>

      {/* Blog Detail Main Stage */}
      <main className="py-10">
        {/* Top Header & Title Area */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* 1. Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Home</span>
            <ChevronRight className="h-4 w-4 text-gray-300" />
            <span className="hover:text-gray-900 transition-colors cursor-pointer">Blogs</span>
            <ChevronRight className="h-4 w-4 text-gray-300" />
            <span className="text-gray-900 font-medium truncate">Choosing the Best School in Ghaziabad</span>
          </nav>

          {/* 2. Category Badge & Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0041F5] text-white tracking-widest uppercase">
              BLOG
            </span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5">
              <Clock className="h-4 w-4 text-gray-400" />
              <span>8 min read</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span>July 17, 2026</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center text-sm text-gray-500 gap-1.5">
              <User className="h-4 w-4 text-gray-400" />
              <span>NIMT Editorial Team</span>
            </div>
          </div>

          {/* 3. Large Blog Title (H1) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            Choosing the Best School in Ghaziabad: A Comprehensive Guide for Parents
          </h1>
        </div>

        {/* 4. DSLR landscape hero image */}
        <div className="max-w-5xl mx-auto px-0 sm:px-6 mb-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none sm:rounded-2xl shadow-xl">
            <Image
              src="/blogs/best-school-in-ghaziabad.webp"
              alt="Real Indian students interacting in a bright, modern classroom at NIMT Beacon School"
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
           
          </div>
          <p className="text-xs text-gray-500 text-center mt-3 px-4 italic sm:hidden">
            NIMT Campus Classroom: Real Indian students in interactive classroom with natural light.
          </p>
        </div>

        {/* Content & Table of Contents layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky Table of Contents (Desktop Only) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-32 bg-[#F6EADA]/50 p-6 rounded-2xl border border-[#F6EADA]">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-[#0041F5]" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Table of Contents</h3>
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
                            ? 'font-semibold border-[#0041F5] text-[#0041F5] translate-x-1'
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

            {/* Core Blog Content (Maximum width 4xl equivalent in columns) */}
            <article className="lg:col-span-9 max-w-4xl mx-auto w-full">
              
              {/* 5. Introduction */}
              <div className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-8 space-y-6">
                <p className="text-xl text-slate-800 font-medium leading-relaxed border-l-4 border-[#0041F5] pl-5 py-1">
                  Finding the perfect educational institution for your child is one of the most significant decisions you will make as a parent. In a rapidly evolving world, education is no longer just about memorizing facts and scoring well in exams; it is about nurturing critical thinking, emotional intelligence, and physical well-being.
                </p>
                <p className="text-[18px] leading-relaxed text-gray-700">
                  Ghaziabad, a vibrant and expanding educational hub, offers a plethora of choices, making the selection process both exciting and overwhelming. This comprehensive guide is designed to help parents navigate the complex landscape of school admissions, highlighting key aspects that define an exceptional learning environment.
                </p>
              </div>

              {/* CTA 1 (After Introduction) */}
              <div className="my-10 bg-[#0041F5]/5 border border-[#0041F5]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900">Looking for the Right School?</h3>
                  <p className="text-sm text-gray-600 max-w-md">Schedule a customized personal tour and experience NIMT Beacon School&apos;s award-winning campus environment.</p>
                </div>
                <button
                  onClick={() => setIsVisitModalOpen(true)}
                  className="w-full sm:w-auto bg-[#0041F5] hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 whitespace-nowrap hover:shadow-md hover:shadow-[#0041F5]/20 flex items-center justify-center gap-2"
                >
                  Book Campus Visit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* 6. H2 Sections containing: Heading -> Landscape Image -> Section Content */}

              {/* Section 1 */}
              <section id="parents-look" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/25 relative inline-block">
                  What Should Parents Look for in a Good School?
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/best-school-in-ghaziabad-1.webp"
                    alt="Young Indian elementary children working on a STEM creative project with a mentor"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    When evaluating potential schools, parents should look beyond the outer facade and focus on elements that foster holistic development. A robust academic curriculum, qualified and compassionate faculty, state-of-the-art facilities, and a strong emphasis on co-curricular activities are paramount.
                  </p>
                  <p>
                    Furthermore, look for a school that encourages curiosity and active participation rather than passive listening. A great school doesn&apos;t just teach; it inspires a lifelong love for learning. By providing classrooms designed to act as spaces of active experimentation, children gain confidence and absorb deep structural understanding of physical and logical systems.
                  </p>

                  {/* Checklist Card */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 my-6">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#0041F5] mb-3 block">Admissions Checklist</span>
                    <h4 className="text-md font-bold text-slate-900 mb-4">Core Academic & Co-curricular Indicators</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                        <span>Interactive child-centric teaching methodologies instead of rote memorization</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                        <span>Adequate counselor-to-student balance for emotional scaffolding</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                        <span>Highly comprehensive, active digital integration across laboratories</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-[#0041F5] shrink-0 mt-0.5" />
                        <span>Diversified sports, creative arts, and global leadership forums</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="environment-matters" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/25 relative inline-block">
                  Why School Environment Matters
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/best-school-in-ghaziabad-2.webp"
                    alt="Gravel paths and sprawling green educational campus landscape of NIMT Beacon School"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    The physical and emotional environment of a school plays a vital role in a student&apos;s academic and personal growth. A green, peaceful, and well-designed campus provides a calming atmosphere that enhances concentration and reduces stress.
                  </p>
                  <p>
                    Classroom designs should allow ample natural light and ventilation, creating an inviting space for collaboration. When children feel comfortable and inspired by their surroundings, their academic performance and general happiness improve significantly. Architectural harmony is deeply coupled with emotional intelligence; children learn best when surrounded by spacious environments.
                  </p>

                  {/* Highlight Quote */}
                  <blockquote className="border-l-4 border-l-[#0041F5] bg-[#F6EADA]/40 py-5 px-6 rounded-r-xl my-6">
                    <p className="text-[17px] font-medium italic text-slate-800 leading-relaxed">
                      &ldquo;A green, peaceful campus is not a luxury; it is a critical driver of emotional stability and focus for growing minds. Spacing and physical breathing room actively reduce study anxiety.&rdquo;
                    </p>
                    <cite className="block mt-2 text-xs uppercase tracking-wider font-bold text-[#0041F5] not-italic">— NIMT Council on Child Well-being</cite>
                  </blockquote>
                </div>
              </section>

              {/* Section 3 */}
              <section id="safety-care" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/25 relative inline-block">
                  Importance of Safety and Student Care
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/best-school-in-ghaziabad-3.webp"
                    alt="A clean, secure, brightly lit modern hostel corridor with state of the art safety features"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    In today&apos;s world, safety is a non-negotiable priority for every parent. A school must provide a secure, secure cocoon where students can learn without fear. This includes round-the-clock physical security, CCTV surveillance, background-checked staff, and strict visitor protocols.
                  </p>
                  <p>
                    Equally important is emotional safety. Look for schools that have proactive anti-bullying policies, professional counsellors, and a nurturing hostel environment where residential students feel cared for and valued. Secure transit loops with active GPS-tracking and emergency reaction cells are absolutely vital to complete the security circle for parents.
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

              {/* Section 4 */}
              <section id="learn-grow" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/25 relative inline-block">
                  NIMT Beacon School – A Place to Learn and Grow
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/best-school-in-ghaziabad-4.webp"
                    alt="Modern architecturally premium facade of NIMT Beacon School campus under bright daylight"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    NIMT Beacon School stands out as a shining example of modern education in Ghaziabad. Rooted in a rich heritage of academic excellence, the school combines a progressive global curriculum with traditional values. With a sprawling green campus, state-of-the-art labs, creative arts studios, and comprehensive sports facilities, NIMT Beacon School provides the ideal launchpad for the leaders of tomorrow.
                  </p>
                  <p>
                    Our passionate educators are committed to nurturing the unique potential of every child, ensuring they are well-prepared for both academic success and the challenges of life. By incorporating technology naturally into the CBSE framework, students obtain a highly global perspective.
                  </p>

                  {/* Highlight Features Box with beautiful Blue Icons */}
                  <div className="bg-[#0041F5]/5 border border-[#0041F5]/10 rounded-2xl p-6 my-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-[#0041F5]" />
                      <h4 className="font-bold text-slate-900 text-md uppercase tracking-wider">Unmatched School Infrastructure</h4>
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

       
              {/* Section 5 */}
              <section id="final-thoughts" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-[#0041F5]/25 relative inline-block">
                  Final Thoughts
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0041F5]"></span>
                </h2>

                {/* Immediately below heading: Landscape Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md my-6">
                  <Image
                    src="/blogs/best-school-in-ghaziabad-5.webp"
                    alt="A happy smiling Indian family parent and child posing on school grounds during sunset"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="prose max-w-none text-gray-700 text-[18px] leading-relaxed space-y-6">
                  <p>
                    The journey of finding the right school is a investment in your child&apos;s future. By prioritizing a nurturing environment, academic integrity, robust safety measures, and holistic growth, you can set your child on a path to lifelong success.
                  </p>
                  <p>
                    NIMT Beacon School welcomes parents to experience our vibrant community firsthand, explore our facilities, and witness how we combine academic rigor with a compassionate learning atmosphere to shape well-rounded, future-ready global citizens. We believe every child contains a distinct spark, waiting to be kindled by our pedagogical methods.
                  </p>

               
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



      {/* Sticky bottom CTA on Mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-4 py-3 shadow-lg flex items-center justify-between gap-4">
        <div className="text-left">
          <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Admissions Active</span>
          <span className="text-xs font-extrabold text-slate-900">NIMT Beacon School</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsVisitModalOpen(true)}
            className="bg-[#0041F5] hover:bg-blue-700 text-white font-semibold text-xs px-3 py-2 rounded-lg"
          >
            Book Visit
          </button>
          <button
            onClick={() => setIsApplyModalOpen(true)}
            className="bg-transparent text-slate-900 border border-gray-300 font-semibold text-xs px-3 py-2 rounded-lg"
          >
            Apply Now
          </button>
        </div>
      </div>

     {/* Placed Global Portal Components */}
      <BookVisitModal isOpen={isVisitModalOpen} onClose={() => setIsVisitModalOpen(false)} />
      <ApplyNowModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
    </div>
  );
}
