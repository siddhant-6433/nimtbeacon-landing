'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, GraduationCap, ShieldCheck, FileText, Download, Eye, Search, 
  MapPin, Phone, Mail, Award, Clock, Users, BookOpen, ChevronRight, 
  ChevronDown, X, Info, HelpCircle, Check, Filter, ArrowRight, Image as ImageIcon, Calendar
} from 'lucide-react';

// Brand guidelines configuration
const BRAND = {
  primary: '#0041f5',
  secondary: '#f6eada',
  accent: '#fffc4d',
};

// Programmatic 35 Mandatory Documents Dataset
const DOCUMENTS = [
  { id: "1", title: "CBSE Affiliation Certificate", category: "Certificates", size: "1.4 MB", date: "May 12, 2026", ref: "CBSE-AFF-2026" },
  { id: "2", title: "School Recognition Certificate", category: "Certificates", size: "1.1 MB", date: "May 10, 2026", ref: "SCH-REC-2026" },
  { id: "3", title: "Trust / Society Registration", category: "Certificates", size: "2.4 MB", date: "Apr 22, 2026", ref: "TRST-REG-991" },
  { id: "4", title: "NOC Certificate", category: "Certificates", size: "940 KB", date: "Mar 18, 2026", ref: "NOC-CBSE-2026" },
  { id: "5", title: "Building Safety Certificate", category: "Certificates", size: "1.8 MB", date: "Jun 02, 2026", ref: "BLD-SAFE-2026" },
  { id: "6", title: "Fire Safety Certificate", category: "Certificates", size: "1.2 MB", date: "Jun 15, 2026", ref: "FIRE-SAFE-2026" },
  { id: "7", title: "Water & Health Certificate", category: "Certificates", size: "820 KB", date: "Jan 12, 2026", ref: "WTR-HLTH-2026" },
  { id: "8", title: "Sanitation Certificate", category: "Certificates", size: "750 KB", date: "Jan 12, 2026", ref: "SAN-CERT-2026" },
  { id: "9", title: "Land Certificate", category: "Certificates", size: "3.2 MB", date: "Feb 08, 2026", ref: "LND-DEED-2026" },
  { id: "10", title: "School Management Committee", category: "Compliance", size: "980 KB", date: "Jun 24, 2026", ref: "SMC-LIST-2026" },
  { id: "11", title: "Parent Teacher Association", category: "Compliance", size: "860 KB", date: "Jun 20, 2026", ref: "PTA-BODY-2026" },
  { id: "13", title: "Holiday Calendar", category: "Academic", size: "1.1 MB", date: "Jun 01, 2026", ref: "HOL-CAL-2026" },
  { id: "14", title: "Fee Structure", category: "Admissions", size: "920 KB", date: "May 20, 2026", ref: "FEE-STR-2026" },
  { id: "15", title: "Admission Policy", category: "Admissions", size: "1.5 MB", date: "May 15, 2026", ref: "ADM-POL-2026" },
  { id: "16", title: "Transfer Certificate Policy", category: "Policies", size: "880 KB", date: "Mar 10, 2026", ref: "TC-POL-2026" },
  { id: "17", title: "Promotion Policy", category: "Academic", size: "950 KB", date: "Apr 05, 2026", ref: "PRM-POL-2026" },
  { id: "18", title: "School Prospectus", category: "Admissions", size: "4.8 MB", date: "Jun 10, 2026", ref: "SCH-PROSP-2026" },
  { id: "19", title: "Mandatory Public Disclosure PDF", category: "Compliance", size: "2.6 MB", date: "Jun 28, 2026", ref: "MAND-DISC-2026" },
  { id: "20", title: "Annual Report", category: "Academic", size: "3.4 MB", date: "Jun 25, 2026", ref: "ANN-REP-2025" },
  { id: "21", title: "School Brochure", category: "Admissions", size: "5.2 MB", date: "Jun 12, 2026", ref: "SCH-BROC-2026" },
  { id: "22", title: "Transport Policy", category: "Policies", size: "1.1 MB", date: "Mar 15, 2026", ref: "TRSP-POL-2026" },
  { id: "23", title: "Hostel Rules", category: "Policies", size: "1.3 MB", date: "Apr 20, 2026", ref: "HSTL-RUL-2026" },
  { id: "24", title: "Child Protection Policy", category: "Policies", size: "1.6 MB", date: "May 30, 2026", ref: "CHILD-PROT-2026" },
  { id: "25", title: "POSH Policy", category: "Policies", size: "1.2 MB", date: "Jun 02, 2026", ref: "POSH-POL-2026" },
  { id: "26", title: "Anti Bullying Policy", category: "Policies", size: "980 KB", date: "May 18, 2026", ref: "ANTI-BULL-2026" },
  { id: "27", title: "Grievance Redressal Policy", category: "Policies", size: "1.1 MB", date: "May 25, 2026", ref: "GRV-REDR-2026" },
  { id: "28", title: "Privacy Policy", category: "Policies", size: "850 KB", date: "Jan 10, 2026", ref: "PRIV-POL-2026" },
  { id: "29", title: "Terms & Conditions", category: "Policies", size: "920 KB", date: "Jan 10, 2026", ref: "TERMS-COND-2026" },
  { id: "30", title: "School Uniform Details", category: "Admissions", size: "1.7 MB", date: "May 28, 2026", ref: "UNIF-DET-2026" },
  { id: "31", title: "Book List", category: "Academic", size: "1.2 MB", date: "May 28, 2026", ref: "BOOK-LST-2026" },
  { id: "32", title: "Medical Policy", category: "Policies", size: "1.0 MB", date: "Feb 15, 2026", ref: "MED-POL-2026" },
  { id: "33", title: "Visitor Policy", category: "Policies", size: "850 KB", date: "Mar 01, 2026", ref: "VIS-POL-2026" },
  { id: "34", title: "Emergency Response Plan", category: "Policies", size: "2.2 MB", date: "Apr 12, 2026", ref: "EMERG-PLAN-2026" },
  { id: "35", title: "School Timings", category: "Admissions", size: "640 KB", date: "Jun 01, 2026", ref: "SCH-TIME-2026" }
];

// Helper to generate dynamic descriptions
const getDocDescription = (title: string, category: string) => {
  return `Official certified ${title} for NIMT Beacon School. This document has been verified by the Governing Council and is filed in compliance with CBSE statutory requirements for ${category}.`;
};



// Photo Gallery
const GALLERY = [
  { title: "Administration Office", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600" },
  { title: "Reception", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600" },
  { title: "Principal Office", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600" },
  { title: "Campus Outer", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600" },
  { title: "Library", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600" },
  { title: "Labs View", img: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600" },
  { title: "Certificates Wall", img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600" },
  { title: "Award Wall", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600" }
];



// FAQS
const FAQS = [
  { q: "What is Mandatory Public Disclosure?", a: "Mandatory Public Disclosure is an official regulatory requirement issued by the Central Board of Secondary Education (CBSE) to ensure maximum transparency across school operations, including infrastructure safety, administrative compliance, academic statistics, certificates, and operational policies." },
  { q: "How can I download and verify certificates?", a: "Every certificate card in our database features a validated 'Download PDF' option which saves a digital, tamper-proof, high-resolution copy carrying official digital signatures, and a 'Preview' button which renders an elegant real-time certified representation instantly in your browser." },
  { q: "How often are administrative documents updated?", a: "Documents are refreshed immediately upon receiving board revisions, statutory approvals, or annual checks. The system automatically updates the 'Last Updated' stamp visible on each card to show the parent body that information is live." },
  { q: "How can I request additional documents not visible here?", a: "Parents or legal auditors can submit direct requests by utilizing our 'Request Documents' modal at the bottom of the page, or by communicating with the School Information Officer at info@nimtbeacon.edu.in." },
  { q: "Where can I obtain the fee structure details?", a: "You can securely view the comprehensive fee layout by pressing 'Request Fee Details' or downloading the detailed Fee Structure PDF directly from the Fee Structure segment. Our system avoids cluttering the page layout with static raw tables to keep the aesthetic minimal and clean." },
  { q: "Who should I contact regarding school records?", a: "All official administrative correspondence should be addressed directly to the Registrar's Office at NIMT Beacon School via registrar@nimtbeacon.edu.in, or by booking a campus-office meeting with our admissions executives." }
];

export default function DisclosurePortal() {
  // Navigation State
  const [activeSection, setActiveSection] = React.useState('general-info');
  
  // Search & Filter state for Download Center
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('Alphabetical'); // Alphabetical, Latest, Category
  const [visibleCount, setVisibleCount] = React.useState(12);

  // Interaction State for Modals & Forms
  const [previewDoc, setPreviewDoc] = React.useState<typeof DOCUMENTS[0] | null>(null);
  const [lightboxImage, setLightboxImage] = React.useState<{ title: string; img: string } | null>(null);
  const [feeRequestModal, setFeeRequestModal] = React.useState(false);
  const [feeFormSubmitted, setFeeFormSubmitted] = React.useState(false);
  const [feeEmail, setFeeEmail] = React.useState('');
  const [feeName, setFeeName] = React.useState('');
  
  // Accordion state
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  // Success Toasts Simulation
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Scroll Spy logic to highlight navigation item
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'general-info', 'academic-results', 'faculty-info', 'campus-infra', 'document-center', 'fee-structure', 'academic-calendar', 'policies-grid', 'photo-gallery', 'faq-section'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter & Sort Documents list
  const filteredDocs = React.useMemo(() => {
    let result = DOCUMENTS.filter((doc) => {
      const matchSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategory === 'All' || doc.category === selectedCategory;
      return matchSearch && matchCategory;
    });

    if (sortBy === 'Alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'Latest') {
      // Sort mock latest by parsing id (higher is newer in our mock database)
      result.sort((a, b) => Number(b.id) - Number(a.id));
    } else if (sortBy === 'Category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  const displayedDocs = filteredDocs.slice(0, visibleCount);

  // Simulation of a PDF Download action with elegant browser notification
  const handleDownload = (docTitle: string, docRef: string) => {
    showToast(`Successfully downloaded digital certified file: ${docTitle} [REF: ${docRef}]`);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-[#0041f5]/20 selection:text-[#0041f5]">
      {/* Dynamic Toast System */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white rounded-xl shadow-2xl p-4 flex items-center gap-3 border border-slate-800"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-300">Secure Audit Download</p>
              <p className="text-sm font-medium text-white">{toastMessage}</p>
            </div>
            <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white ml-auto">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Immersive Apple-inspired Page Hero */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden py-16">
        {/* Dynamic decorative backdrop circles */}
        <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] rounded-full bg-[#0041f5] opacity-25 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-10 w-[400px] h-[400px] rounded-full bg-[#fffc4d] opacity-10 blur-[150px]" />
        
        {/* DSLR Background Image with clean cinematic gradient overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920" 
            alt="School Reception" 
            className="w-full h-full object-cover opacity-35 object-center scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#fffc4d] text-xs font-bold tracking-wider uppercase mb-6 shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Mandatory Public Disclosure</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-sans text-white"
          >
            School Information &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0041f5] via-blue-400 to-[#fffc4d]">
              Public Document Portal
            </span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans"
          >
            NIMT Beacon School believes in complete transparency. Parents, board members, and legal auditors can easily access important school information, policies, certificates, reports, and statutory documents from one place.
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => scrollToSection('document-center')}
              className="w-full sm:w-auto bg-[#0041f5] hover:bg-[#0041f5]/90 text-white text-sm font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#0041f5]/25 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Documents</span>
            </button>
       
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => scrollToSection('quick-nav')}>
          <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">Explore Portal</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-slate-400 flex justify-center p-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#fffc4d]" />
          </motion.div>
        </div>
      </section>

      {/* QUICK NAVIGATION SECTION */}
      <section id="quick-nav" className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[10px] tracking-widest text-[#0041f5] font-bold uppercase block mb-1">Index Navigation</span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">Quick Section Jumps</h2>
          </div>

          {/* Quick Nav Icons Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: "general-info", label: "General Information", icon: Info, count: "12 Fields" },
              { id: "academic-results", label: "Academic Results", icon: GraduationCap, count: "Class X & XII" },
              { id: "campus-infra", label: "School Infrastructure", icon: Building, count: "13 Facilities" },
              { id: "faculty-info", label: "Faculty Information", icon: Users, count: "Teacher Ratio" },
              { id: "fee-structure", label: "Fee Structure", icon: Award, count: "Download Details" },
              { id: "policies-grid", label: "School Policies", icon: ShieldCheck, count: "12 Polices" },
              { id: "document-center", label: "Statutory Certificates", icon: FileText, count: "35 Documents" },
              { id: "photo-gallery", label: "Photo Gallery", icon: ImageIcon, count: "8 DSLR Frames" }
            ].map((nav, i) => (
              <button 
                key={i}
                onClick={() => scrollToSection(nav.id)}
                className="group flex flex-col items-start p-5 rounded-2xl bg-slate-50 hover:bg-[#0041f5]/5 border border-slate-100 hover:border-[#0041f5]/20 text-left transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#0041f5] flex items-center justify-center text-[#0041f5] group-hover:text-white shadow-sm transition-all duration-300 mb-4">
                  <nav.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#0041f5] transition-colors">{nav.label}</h3>
                <span className="text-xs text-slate-400 group-hover:text-slate-500 font-medium mt-1">{nav.count}</span>
                <ChevronRight className="absolute bottom-5 right-5 w-4 h-4 text-slate-300 group-hover:text-[#0041f5] group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT - SIDEBAR SPLIT LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12 items-start relative">
          
          {/* Sticky Apple-style Sidebar Index Navigation */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-28 space-y-6">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">TABLE OF CONTENTS</h4>
              
              <nav className="space-y-1">
                {[
                  { id: "general-info", label: "General Information", icon: Info },
                  { id: "faculty-info", label: "Faculty Information", icon: Users },
                  { id: "document-center", label: "Download Center", icon: FileText },
                  { id: "policies-grid", label: "School Policies", icon: ShieldCheck },
                ].map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all duration-250 ${
                        isActive 
                          ? 'bg-[#0041f5] text-white shadow-md shadow-[#0041f5]/15 font-bold' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-[#0041f5]'
                      }`}
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{item.label}</span>
                      {isActive && <motion.div layoutId="sidebar-active" className="w-1.5 h-1.5 rounded-full bg-[#fffc4d] ml-auto" />}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col items-start gap-2">
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-semibold">Latest Refresh</span>
                <span className="text-xs font-mono font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded">June 30, 2026</span>
              </div>
            </div>
          </aside>

          {/* Main Informative Sections Panel */}
          <main className="lg:col-span-3 space-y-24">
            
            {/* GENERAL INFORMATION */}
            <section id="general-info" className="scroll-mt-24">
              <div className="border-b border-slate-100 pb-5 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-xs tracking-widest text-[#0041f5] font-bold uppercase block mb-1">SECTION I</span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">General School Information</h2>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">CBSE Mandatory Appx-IX</span>
              </div>

              {/* Premium Glass-Card Grid */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-slate-50/50 p-6 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0041f5]">
                    <Building className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">Affiliation & Institution Register</h3>
                    <p className="text-xs text-slate-400">Verified institutional references updated on CBSE database</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  {/* Column 1 */}
                  <div className="p-6 space-y-6">
                    {[
                      { label: "School Name", value: "NIMT Beacon School", icon: Building },
                      { label: "School Address", value: "NIMT Knowledge Campus, NH-24 Bypass, Ghaziabad", icon: MapPin },
                      { label: "CBSE Affiliation Number", value: "2131310 (Certified Senior Secondary)", icon: ShieldCheck },
                      { label: "School Code", value: "60401 (CBSE Region East)", icon: FileText },
                      { label: "Principal Name", value: "Dr. Arundhati Sen (M.Sc., B.Ed., Ph.D. Education)", icon: Users },
                      { label: "Principal Email", value: "principal@nimtbeacon.edu.in", icon: Mail }
                    ].map((row, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 mt-0.5">
                          <row.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400 font-sans">{row.label}</p>
                          <p className="text-sm font-bold text-slate-800 mt-0.5 font-sans leading-relaxed">{row.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="p-6 space-y-6">
                    {[
                      { label: "School Phone / Hotline", value: "+91 120 4880991 / 4880992", icon: Phone },
                      { label: "Website", value: "www.nimtbeacon.edu.in", icon: BookOpen },
                      { label: "Campus Type", value: "Sprawling Co-Ed Premium Residential & Day Campus", icon: MapPin },
                      { label: "School Office Timings", value: "Summer: 07:30 AM - 01:30 PM | Winter: 08:00 AM - 02:00 PM", icon: Clock },
                      { label: "Medium of Instruction", value: "English (Strict Dual-Language Speaking Protocols)", icon: BookOpen },
                      { label: "Streams Offered (Grade XI-XII)", value: "Science (Medical/Non-Med), Commerce, Fine Arts & Humanities", icon: GraduationCap }
                    ].map((row, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 mt-0.5">
                          <row.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400 font-sans">{row.label}</p>
                          <p className="text-sm font-bold text-slate-800 mt-0.5 font-sans leading-relaxed">{row.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ACADEMIC RESULTS */}
            <section id="academic-results" className="scroll-mt-24">
              <div className="border-b border-slate-100 pb-5 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-xs tracking-widest text-[#0041f5] font-bold uppercase block mb-1">SECTION II</span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">CBSE Board Performance Records</h2>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">Official Consolidated Registry</span>
              </div>

              {/* Reusable Statistics Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* CLASS X STATISTICS CARD */}
                <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute right-0 top-0 w-28 h-28 bg-[#0041f5]/5 rounded-full -mr-10 -mt-10 blur-xl" />
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold bg-[#0041f5]/10 text-[#0041f5] px-3.5 py-1.5 rounded-full uppercase">Class X Board Results</span>
                      <span className="text-xs font-mono text-slate-400 font-semibold">A.Y. 2024 - 2025</span>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400 mb-1">Pass Percentage</p>
                        <p className="text-4xl font-extrabold text-[#0041f5]">100%</p>
                        <p className="text-[10px] text-emerald-600 font-bold mt-1">✓ Complete Passing Rate</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400 mb-1">Students Appeared</p>
                        <p className="text-4xl font-extrabold text-slate-800">142</p>
                        <p className="text-[10px] text-slate-400 font-medium mt-1">Registered & Evaluated</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400 mb-1">Highest Score</p>
                        <p className="text-4xl font-extrabold text-slate-800">99.4%</p>
                        <p className="text-[10px] text-[#0041f5] font-bold mt-1">National Level Rank</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400 mb-1">Average Score</p>
                        <p className="text-4xl font-extrabold text-slate-800">88.2%</p>
                        <p className="text-[10px] text-slate-500 font-semibold mt-1">Top 10% CBSE Region</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleDownload("Class X Official Board Registry PDF", "CBSE-X-2025")}
                    className="w-full bg-slate-50 hover:bg-[#0041f5] text-slate-700 hover:text-white text-xs font-bold py-3.5 rounded-xl border border-slate-100 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 mt-auto"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official Board Ledger</span>
                  </button>
                </div>

                {/* CLASS XII STATISTICS CARD */}
                <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute right-0 top-0 w-28 h-28 bg-[#fffc4d]/10 rounded-full -mr-10 -mt-10 blur-xl" />
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold bg-[#0041f5]/10 text-[#0041f5] px-3.5 py-1.5 rounded-full uppercase">Class XII Board Results</span>
                      <span className="text-xs font-mono text-slate-400 font-semibold">A.Y. 2024 - 2025</span>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400 mb-1">Pass Percentage</p>
                        <p className="text-4xl font-extrabold text-[#0041f5]">100%</p>
                        <p className="text-[10px] text-emerald-600 font-bold mt-1">✓ Complete Passing Rate</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400 mb-1">Students Appeared</p>
                        <p className="text-4xl font-extrabold text-slate-800">128</p>
                        <p className="text-[10px] text-slate-400 font-medium mt-1">Streams combined</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400 mb-1">Highest Score</p>
                        <p className="text-4xl font-extrabold text-slate-800">99.6%</p>
                        <p className="text-[10px] text-[#0041f5] font-bold mt-1">Stream topper science</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400 mb-1">Average Score</p>
                        <p className="text-4xl font-extrabold text-slate-800">89.4%</p>
                        <p className="text-[10px] text-slate-500 font-semibold mt-1">Over 70% Distinction</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleDownload("Class XII Official Board Registry PDF", "CBSE-XII-2025")}
                    className="w-full bg-slate-50 hover:bg-[#0041f5] text-slate-700 hover:text-white text-xs font-bold py-3.5 rounded-xl border border-slate-100 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 mt-auto"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official Board Ledger</span>
                  </button>
                </div>

              </div>
            </section>

            {/* FACULTY INFORMATION */}
            <section id="faculty-info" className="scroll-mt-24">
              <div className="border-b border-slate-100 pb-5 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-xs tracking-widest text-[#0041f5] font-bold uppercase block mb-1">SECTION III</span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">Faculty & Teaching Infrastructure</h2>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">Human Resources & Credentials</span>
              </div>

              {/* Grid Cards of Faculty Composition */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "Executive Directors", names: "Principal & Vice Principal", value: "2 Leaders", desc: "Academicians with over 25+ combined years of administrative experience in premium international CBSE institutions." },
                  { title: "Post Graduate Teachers (PGT)", names: "Grades XI & XII Specialist Coaches", value: "18 Teachers", desc: "All carrying postgraduate designations (M.Sc/M.A/M.Ed) in their respective instructional domains." },
                  { title: "Trained Graduate Teachers (TGT)", names: "Middle & Upper School Instructors", value: "24 Teachers", desc: "Certified pedagogy experts (B.Ed / BA / BSc) guiding concept foundations and critical thinking." }
                ].map((fac, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">{fac.title}</h4>
                    <p className="text-xs text-slate-500 mb-4">{fac.names}</p>
                    <div className="text-3xl font-extrabold text-slate-800 mb-3">{fac.value}</div>
                    <p className="text-xs text-slate-500 leading-relaxed">{fac.desc}</p>
                  </div>
                ))}
              </div>

              {/* Bento Grid with ratio details */}
              <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="md:col-span-1 flex flex-col justify-between items-start">
                  <div>
                    <h4 className="text-xs font-bold text-[#0041f5] uppercase tracking-wider mb-2">Teacher Student Ratio</h4>
                    <p className="text-3xl font-extrabold text-slate-800">1 : 15</p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">Every pupil receives personalized learning attention, structured mentoring pathways, and continuous cognitive feedback logs.</p>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">CBSE Compliant</span>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Elite Ratio</span>
                  </div>
                </div>

                <div className="md:col-span-2 grid grid-cols-2 gap-6 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0">
                  {[
                    { label: "Primary Teachers (PRT)", val: "32 Certified Teachers" },
                    { label: "Special Education Needs", val: "3 Registered Officers" },
                    { label: "In-House Psychologists", val: "2 Clinical Counselors" },
                    { label: "Co-curricular Mentors", val: "14 Certified Coaches" }
                  ].map((stat, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#fffc4d] mt-1.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                        <p className="text-sm font-bold text-slate-800 mt-0.5">{stat.val}</p>
                        <p className="text-[11px] text-slate-400 font-medium">100% full-time contracts</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>


            {/* STATUTORY MANDATORY DOCUMENT CENTER */}
            <section id="document-center" className="scroll-mt-24">
              <div className="border-b border-slate-100 pb-5 mb-8">
                <span className="text-xs tracking-widest text-[#0041f5] font-bold uppercase block mb-1">SECTION V</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">Statutory Download & Auditing Center</h2>
                <p className="text-sm text-slate-500 mt-1">Access all 35 mandated CBSE compliance documents. Real-time auditing ledger.</p>
              </div>

              {/* Controls Grid */}
              <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                  
                  {/* Search Input */}
                  <div className="relative flex-grow max-w-md">
                    <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <input 
                      type="text"
                      placeholder="Search certificates, policies, guidelines..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-semibold focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all text-slate-800"
                    />
                    {searchTerm && (
                      <button onClick={() => setSearchTerm('')} className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Sorter selection */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sort:</span>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#0041f5]"
                    >
                      <option value="Alphabetical">Alphabetical</option>
                      <option value="Latest">Latest Uploads</option>
                      <option value="Category">Grouping</option>
                    </select>
                  </div>
                </div>

                {/* Categories Pilling bar */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {['All', 'Certificates', 'Compliance', 'Academic', 'Admissions', 'Policies'].map((cat, idx) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={idx}
                        onClick={() => { setSelectedCategory(cat); setVisibleCount(12); }}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                          isSelected 
                            ? 'bg-[#0041f5] text-white shadow-sm' 
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Grid Results */}
              {displayedDocs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {displayedDocs.map((doc, idx) => (
                    <motion.div 
                      key={doc.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.4) }}
                      className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
                    >
                      <div>
                        {/* Upper row tags */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="text-[10px] font-mono tracking-wider font-bold text-[#0041f5] bg-[#0041f5]/5 px-2.5 py-1 rounded">
                            {doc.category.toUpperCase()}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">STAMP: {doc.date}</span>
                        </div>

                        {/* Title & Ref */}
                        <h4 className="text-sm font-extrabold text-slate-800 tracking-tight font-sans mb-1">{doc.title}</h4>
                        <p className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-widest">REF: {doc.ref} | {doc.size}</p>
                        
                        <p className="text-xs text-slate-500 leading-relaxed mt-3 mb-6">
                          {getDocDescription(doc.title, doc.category)}
                        </p>
                      </div>

                      {/* Interactive Bottom Actions */}
                      <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-slate-100">
                        <button 
                          onClick={() => setPreviewDoc(doc)}
                          className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold py-2.5 px-4 rounded-xl transition-all"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview Document</span>
                        </button>
                        <button 
                          onClick={() => handleDownload(doc.title, doc.ref)}
                          className="flex items-center justify-center gap-1.5 bg-[#0041f5] hover:bg-[#0041f5]/90 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-slate-100 p-12 text-center shadow-sm">
                  <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                  <h4 className="text-sm font-bold text-slate-800">No regulatory documents match your filter</h4>
                  <p className="text-xs text-slate-500 mt-2">Try adjusting your category pills or search input to see more certificates.</p>
                  <button 
                    onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }} 
                    className="mt-4 text-xs font-bold text-[#0041f5] hover:underline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Show more Pagination action */}
              {filteredDocs.length > visibleCount && (
                <div className="text-center mt-10">
                  <button 
                    onClick={() => setVisibleCount((prev) => prev + 12)}
                    className="bg-white hover:bg-[#0041f5]/5 text-slate-700 hover:text-[#0041f5] text-xs font-bold px-8 py-3.5 rounded-full border border-slate-100 hover:border-[#0041f5]/20 shadow-sm transition-all"
                  >
                    Load More Compliance Files ({filteredDocs.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </section>

      


            {/* POLICIES GRID SECTION */}
            <section id="policies-grid" className="scroll-mt-24">
              <div className="border-b border-slate-100 pb-5 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-xs tracking-widest text-[#0041f5] font-bold uppercase block mb-1">SECTION VIII</span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">School Guidelines & Policy Board</h2>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">Regulatory Operational Directives</span>
              </div>

              {/* Bento Grid layout of policies */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                  { title: "Admission Policy", code: "ADM-POL" },
                  { title: "Assessment Policy", code: "ASM-POL" },
                  { title: "Attendance Policy", code: "ATT-POL" },
                  { title: "Examination Policy", code: "EXM-POL" },
                  { title: "Promotion Policy", code: "PRM-POL" },
                  { title: "Transfer Policy", code: "TRF-POL" },
                  { title: "Anti-Bullying Policy", code: "BULL-POL" },
                  { title: "Child Safety Policy", code: "CHLD-POL" },
                  { title: "Privacy Policy", code: "PRV-POL" },
                  { title: "Hostel Policy", code: "HST-POL" },
                  { title: "Transport Policy", code: "TSP-POL" },
                  { title: "Medical Policy", code: "MED-POL" }
                ].map((pol, idx) => {
                  // Find corresponding doc details from main documents database
                  const docMatch = DOCUMENTS.find(d => d.title.toLowerCase().includes(pol.title.toLowerCase())) || { size: "1.2 MB", date: "Jun 2026", ref: `${pol.code}-2026` };
                  
                  return (
                    <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 mb-4">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-800 tracking-tight font-sans mb-1">{pol.title}</h4>
                        <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">REF: {docMatch.ref} | {docMatch.size}</p>
                        <p className="text-xs text-slate-500 leading-relaxed mt-2.5 mb-6">
                          Official governing framework setting forth rules, student expectations, administrative parameters, and audit-compliant mandates.
                        </p>
                      </div>

                      <div className="flex gap-2 pt-4 border-t border-slate-100">
                        <button 
                          onClick={() => setPreviewDoc(docMatch as any)}
                          className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 text-[11px] font-bold py-2 rounded-lg transition-all"
                        >
                          View
                        </button>
                        <button 
                          onClick={() => handleDownload(pol.title, docMatch.ref)}
                          className="flex-1 bg-[#0041f5]/10 hover:bg-[#0041f5] text-[#0041f5] hover:text-white text-[11px] font-bold py-2 rounded-lg transition-all"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

   

          </main>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <section className="bg-[#0041f5] py-20 text-white relative overflow-hidden">
        {/* Abstract glow maps */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white opacity-5 blur-[150px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] tracking-widest text-[#fffc4d] font-bold uppercase block mb-4">Admissions & Audits desk</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-sans text-white">Need More Information?</h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Our admissions counselors, legal officers, and administration teams are always happy to assist parents and statutory boards with official documentation procedures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
         
          </div>
        </div>
      </section>

      {/* DETAILED GLASS-MORPHIC PREVIEW MODAL */}
      <AnimatePresence>
        {previewDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            >
              {/* Header block */}
              <div className="bg-slate-900 text-white p-6 flex justify-between items-center border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-[#0041f5] flex items-center justify-center text-[#fffc4d]">
                    <Building className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{previewDoc.title}</h3>
                    <p className="text-[10px] text-slate-400 font-mono">Ledger ID: {previewDoc.ref} | Category: {previewDoc.category}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setPreviewDoc(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Renders dynamic realistic Document Content */}
              <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto bg-white text-slate-800 font-sans">
                {/* Official-looking Letterhead header */}
                <div className="text-center pb-6 border-b border-slate-100">
                  <span className="text-xs font-extrabold tracking-widest text-[#0041f5] block mb-1">NIMT BEACON SCHOOL</span>
                  <span className="text-[9px] text-slate-400 tracking-wider block uppercase mb-4">Affiliated to Central Board of Secondary Education | Code: 2130889</span>
                  <h4 className="text-base font-extrabold tracking-tight underline uppercase text-slate-800 font-sans">{previewDoc.title}</h4>
                </div>

                <div className="space-y-4 text-xs leading-relaxed text-slate-600">
                  <p>
                    <strong>TO WHOMSOEVER IT MAY CONCERN</strong>
                  </p>
                  <p>
                    This is to officially certify that the document titled <strong>{previewDoc.title}</strong> carrying regulatory reference number <strong>{previewDoc.ref}</strong>, registered under primary file index for NIMT Beacon School, has been completely audited, verified, and endorsed as true and accurate by the statutory governance board.
                  </p>
                  <p>
                    This disclosure is filed under strict adherence to <strong>Section Appx-IX</strong> of the CBSE regulatory rules. It validates the institutional parameters, infrastructure layouts, academic standards, and fire/building safety parameters implemented inside the NIMT Knowledge Campus.
                  </p>
                  <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-[10px] space-y-1">
                    <span className="block"><strong>FILE REFERENCE:</strong> {previewDoc.ref}</span>
                    <span className="block"><strong>DATE OF REFRESH:</strong> {previewDoc.date}</span>
                    <span className="block"><strong>STAMP STATUS:</strong> APPROVED & FULLY STATUTORY COMPLIANT</span>
                    <span className="block"><strong>FILE CLASSIFICATION:</strong> CBSE PUBLIC RECORDS DOMAIN</span>
                  </p>
                  <p>
                    The official digital PDF file contains verified signatures from authorized civic engineers, municipal safety departments, and director administrators of NIMT Beacon School. It is stored on our central document-handling systems.
                  </p>
                </div>

                {/* Simulated Seal & Sign block */}
                <div className="pt-8 border-t border-slate-100 flex justify-between items-end text-[10px] text-slate-400">
                  <div>
                    <p className="font-bold text-slate-700">Audit Stamp Seal</p>
                    <p>NIMT Beacon School Ghaziabad</p>
                    <p>CBSE Division NCR</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-700 underline">Dr. Arundhati Sen</p>
                    <p>Principal & Secretary Governing Council</p>
                    <p>Digital Signature Verified</p>
                  </div>
                </div>
              </div>

              {/* Bottom control bar */}
              <div className="bg-slate-50 p-6 flex justify-end gap-3 border-t border-slate-100">
                <button 
                  onClick={() => setPreviewDoc(null)}
                  className="bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold px-5 py-2.5 rounded-xl border border-slate-200 transition-all"
                >
                  Close Preview
                </button>
                <button 
                  onClick={() => {
                    handleDownload(previewDoc.title, previewDoc.ref);
                    setPreviewDoc(null);
                  }}
                  className="bg-[#0041f5] hover:bg-[#0041f5]/90 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md shadow-[#0041f5]/15 hover:shadow-lg transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Signed PDF</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX MODAL FOR IMAGES */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-2">
                <img 
                  src={lightboxImage.img} 
                  alt={lightboxImage.title} 
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto rounded-2xl"
                />
              </div>

              <div className="bg-slate-950 text-white p-4 text-center text-sm font-bold font-sans">
                {lightboxImage.title}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FEE STRUCTURE EMAIL REQUEST MODAL */}
      <AnimatePresence>
        {feeRequestModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#fffc4d]" />
                  <h3 className="text-sm font-bold">Request Fee Structure details</h3>
                </div>
                <button 
                  onClick={() => { setFeeRequestModal(false); setFeeFormSubmitted(false); }}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {!feeFormSubmitted ? (
                  <>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Enter your details below to receive a secure, digitally-signed PDF document of the comprehensive class-wise Fee Structure (A.Y. 2026-2027) directly in your email inbox.
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Parent Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="E.g., Anil Kumar"
                          value={feeName}
                          onChange={(e) => setFeeName(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs focus:outline-none focus:border-[#0041f5] text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          required
                          placeholder="E.g., anil@gmail.com"
                          value={feeEmail}
                          onChange={(e) => setFeeEmail(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs focus:outline-none focus:border-[#0041f5] text-slate-800"
                        />
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        if (feeName && feeEmail) {
                          setFeeFormSubmitted(true);
                          showToast(`Fee schedule sent securely to ${feeEmail}`);
                        } else {
                          showToast("Please fill in both name and email fields.");
                        }
                      }}
                      className="w-full bg-[#0041f5] hover:bg-[#0041f5]/90 text-white text-xs font-bold py-3 rounded-xl transition-all shadow-sm"
                    >
                      Request Fee Structure Link
                    </button>
                  </>
                ) : (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800">Request Dispatched Successfully</h4>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                      Thank you {feeName}! A digital copy of the fee schedule has been sent to <strong>{feeEmail}</strong>. Please check your inbox or spam filters within 2-3 minutes.
                    </p>
                    <button 
                      onClick={() => { setFeeRequestModal(false); setFeeFormSubmitted(false); setFeeName(''); setFeeEmail(''); }}
                      className="mt-4 text-xs font-bold text-[#0041f5] hover:underline"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

   
    </div>
  );
}
