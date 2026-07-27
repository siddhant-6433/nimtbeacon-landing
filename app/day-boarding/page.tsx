'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  Clock, 
  Utensils, 
  BookOpen, 
  Dribbble, 
  ShieldCheck, 
  ChevronDown, 
  Star, 
  Phone, 
  Mail, 
  User, 
  GraduationCap, 
  Check, 
  X, 
  ArrowRight, 
  Heart, 
  Award, 
  Camera, 
  BookMarked,
  Users,
  Shield,
  Activity,
  ThumbsUp,
  Map,
  Compass
} from 'lucide-react';

// Curated high-quality, authentic Unsplash images of Indian school students and environments
const IMAGES = {
  hero: "/smart-classrooms.webp", // Welcoming, bright, real classroom setting
  whyChoose: "/nimt-main-wing.webp", // Bright Indian classroom
  studySupport: "/neet.webp", // Homework guidance/teacher interaction
  diningHall: "/dining-hall.webp", //  healthy food context
  safeCampus: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1200", // Caring environment / students cooperating
  ctaBg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600", // Positive high energy, learning environment
  
  // Healthy meals gallery
  meals: {
    breakfast: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
    lunch: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
    snacks: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=600",
    dining: "https://images.unsplash.com/photo-1574966731985-fc2c35e40da1?auto=format&fit=crop&q=80&w=600"
  },

  // Sports & Activities gallery
  sports: {
    football: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600",
    basketball: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&q=80&w=600",
    cricket: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600",
    swimming: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=600",
    gymnastics: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=600",
    dance: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600",
    music: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=600",
    art: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600",
    yoga: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
  },

  // Typical Day Timelines
  timeline: [
    { title: "Morning Welcome", time: "08:00 AM", desc: "Warm arrival greeting by teachers & transition to morning circle.", img: "https://images.unsplash.com/photo-1603133872871-8c8d8d1c8751?auto=format&fit=crop&q=80&w=600" },
    { title: "Interactive Classes", time: "08:30 AM", desc: "Engaging, practical learning using our smart classroom technology.", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600" },
    { title: "Healthy Lunch", time: "12:30 PM", desc: "Balanced hot vegetarian meals curated by pediatric experts.", img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600" },
    { title: "Homework Guidance", time: "02:00 PM", desc: "Personalized support where schoolwork is fully completed.", img: "https://images.unsplash.com/photo-1610473068565-df2bfe38a6a6?auto=format&fit=crop&q=80&w=600" },
    { title: "Sports & Games", time: "03:30 PM", desc: "Developing fitness, coordination, teamwork, and athletic skills.", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600" },
    { title: "Creative Activities", time: "04:30 PM", desc: "Nurturing fine arts, coding, violin, dance, or public speaking.", img: "https://images.unsplash.com/photo-1571345624175-7164923e3240?auto=format&fit=crop&q=80&w=600" },
    { title: "Evening Departure", time: "05:00 PM", desc: "Returning home smiling, with homework done and stress-free.", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600" }
  ],

  // Facilities Grid
  facilities: [
    { name: "Smart Classrooms", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600", desc: "Fully interactive tech layouts optimized for collaborative learning." },
    { name: "Science Labs", img: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=600", desc: "Modern testing kits, safety features, and dynamic learning models." },
    { name: "Computer Labs", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600", desc: "High-speed workstations equipped for coding, AI development, and design." },
    { name: "Modern Library", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600", desc: "Hundreds of rich volumes paired with serene quiet reading hubs." },
    { name: "Sports Ground", img: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=600", desc: "Professional quality courts, running track, and customized gear." },
    { name: "Music Studio", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80", desc: "Complete scale instruments, visual feedback, and performance stages." },
    { name: "Art Studio", img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80", desc: "Generous space,  easels, pottery tools, and canvas storage." },
    { name: "Activity Room", img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=600&q=80", desc: "Multi-functional spaces designed for dramatic arts, debating, and games." }
  ],

  // Gallery (Pinterest-style filters)
  gallery: [
    { title: "Morning Assembly & Greeting", category: "campus", img: "https://images.unsplash.com/photo-1603133872871-8c8d8d1c8751?auto=format&fit=crop&q=80&w=800" },
    { title: "Collaborative Classroom Learning", category: "academics", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" },
    { title: "Hot Nutritious Lunch Sessions", category: "meals", img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800" },
    { title: "Supervised Homework Guidance", category: "academics", img: "https://images.unsplash.com/photo-1610473068565-df2bfe38a6a6?auto=format&fit=crop&q=80&w=800" },
    { title: "Inter-School Cricket Drills", category: "activities", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800" },
    { title: "Interactive Music & Symphony", category: "activities", img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800" },
    { title: "Creative Painting & Art Sessions", category: "activities", img: "https://images.unsplash.com/photo-1571345624175-7164923e3240?auto=format&fit=crop&q=80&w=800" },
    { title: "Aesthetic Library Exploration", category: "campus", img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&q=80&w=800" },
    { title: "Practical Science Lab Work", category: "academics", img: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=800" },
    { title: "Modern Design & Coding Studio", category: "academics", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" },
    { title: "Happy Dynamic Outdoor Sports", category: "activities", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800" },
    { title: "Campus Courtyard Playtime", category: "campus", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" }
  ]
};

const TESTIMONIALS = [
  {
    quote: "NIMT Beacon School changed our lives. Our son finishes all his homework at school and returns home ready to spend high-quality family time with us. He absolutely loves the evening snacks!",
    author: "Priya Sharma",
    role: "Mother of Aarav (Class IV)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
    rating: 5
  },
  {
    quote: "As working parents, we were always worried about our daughter's safety and dietary habits. The secure, CCTV-monitored campus and highly nutritious lunch menu give us complete peace of mind.",
    author: "Rajesh Iyer",
    role: "Father of Diya (Class VI)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    rating: 5
  },
  {
    quote: "The after-school sports program is outstanding. My daughter has learned swimming and yoga, and her confidence has soared. The teachers are incredibly caring and attentive.",
    author: "Meenakshi Verma",
    role: "Mother of Ananya (Class VIII)",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=300",
    rating: 5
  }
];

const FAQS = [
  {
    question: "What are the Day Boarding timings?",
    answer: "Our Day Boarding operates from 08:00 AM to 05:00 PM, Monday through Friday. This includes standard academic sessions, supervised study, sport hours, dining slot, and interest clubs."
  },
  {
    question: "Are meals included in the boarding fee?",
    answer: "Yes, fully nutritious meals are included. This includes a morning snack, a  hot vegetarian lunch, and a healthy evening snack. Menus are formulated by certified child nutritionists to ensure balanced macro-and micro-nutrients."
  },
  {
    question: "Is homework entirely completed at school?",
    answer: "Absolutely. We designate 90 minutes daily for structured homework support. Qualified faculty assist students in clearing concepts, answering doubts, and completing assignments so that home-time remains family-time."
  },
  {
    question: "What specific sports and creative activities are offered?",
    answer: "We offer professional coaching in Football, Basketball, Cricket, Swimming, Gymnastics, and Yoga. Creative outlets include Classical and Modern Dance, instrumental music (violin, keyboard), Fine Arts, and STEM coding clubs."
  },
  {
    question: "How is student safety and campus security managed?",
    answer: "Our campus features 24/7 CCTV surveillance, strictly gated check-points, background-verified staff, on-duty female support attendants, and continuous GPS-based school transit. A medical room with a registered nurse is open throughout day-boarding hours."
  },
  {
    question: "Is school transport available for Day Boarding?",
    answer: "Yes. GPS-enabled, air-conditioned school buses with trained drivers and female supervisors serve extensive routes throughout the region, aligning with the 5:00 PM evening boarding departure."
  }
];

export default function DayBoardingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<string>('all');
  const [activeSport, setActiveSport] = useState<string>('football');
  const [stickyCtaVisible, setStickyCtaVisible] = useState<boolean>(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState<boolean>(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  // Scroll listener for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setStickyCtaVisible(true);
      } else {
        setStickyCtaVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setIsVisitModalOpen(false);
      setIsApplyModalOpen(false);
    }, 2500);
  };

  const filteredGallery = galleryFilter === 'all' 
    ? IMAGES.gallery 
    : IMAGES.gallery.filter(item => item.category === galleryFilter);

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen selection:bg-[#0041f5]/10 selection:text-[#0041f5] overflow-x-hidden antialiased">
      
      {/* HEADER NAVIGATION */}

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-10 pb-20 md:py-24 bg-gradient-to-b from-[#f6eada]/40 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text content */}
            <div className="lg:col-span-6 space-y-8 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0041f5]/5 border border-[#0041f5]/10 text-xs font-bold text-[#0041f5] tracking-widest uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Day Boarding Program</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
              >
                Learning, Care & <br className="hidden sm:inline" />
                <span className="text-[#0041f5] relative">
                  Growth
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#0041f5]/10 -z-10 rounded-full"></span>
                </span> — All in One Place
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-slate-600 font-normal leading-relaxed max-w-xl"
              >
                Our Day Boarding program gives students a balanced day with learning, healthy meals, homework support, sports, activities, and personal care in a safe and happy environment.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button 
                  onClick={() => setIsVisitModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#0041f5] text-white hover:bg-[#0041f5]/90 px-8 py-4 rounded-full font-semibold text-base transition-all transform hover:-translate-y-1 shadow-lg shadow-[#0041f5]/20 active:scale-95"
                >
                  Book Campus Visit
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsApplyModalOpen(true)}
                  className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-full font-semibold text-base transition-all transform hover:-translate-y-1 active:scale-95 shadow-sm"
                >
                  Apply Now
                </button>
              </motion.div>

              {/* Floating Feature cards over the desk bottom row */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6"
              >
                {[
                  { label: "Healthy Meals", icon: Utensils, bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
                  { label: "Homework Support", icon: BookOpen, bg: "bg-blue-50 text-blue-600 border-blue-100" },
                  { label: "Sports & Activities", icon: Dribbble, bg: "bg-orange-50 text-orange-600 border-orange-100" },
                  { label: "Safe Campus", icon: ShieldCheck, bg: "bg-purple-50 text-purple-600 border-purple-100" }
                ].map((card, i) => (
                  <div key={i} className={`flex flex-col gap-2 p-3.5 rounded-2xl border ${card.bg} text-left shadow-sm`}>
                    <card.icon className="w-5 h-5" />
                    <span className="text-xs font-semibold tracking-tight text-slate-800">{card.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column Large Hero Image Frame */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] shadow-2xl shadow-slate-900/10 border-4 border-white"
              >
                <img 
                  src={IMAGES.hero} 
                  alt="Happy Indian school students arriving at school smiling with teachers" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Visual badge overlaid */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg border border-white/20">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-xs font-bold text-slate-800">Caring Teachers on Duty</span>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3 shadow-lg border border-white/20 max-w-xs">
                  <div className="w-10 h-10 bg-[#0041f5]/10 rounded-xl flex items-center justify-center text-[#0041f5]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800">8:00 AM – 5:00 PM</span>
                    <span className="block text-[10px] text-slate-500 font-medium">Comprehensive Day-Care Care</span>
                  </div>
                </div>
              </motion.div>

              {/* Backing structural  frame element */}
              <div className="absolute -inset-4 bg-[#f6eada] -z-20 rounded-[36px] transform rotate-2 scale-95 opacity-50"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE DAY BOARDING */}
      <section id="why-choose" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative order-last lg:order-first">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-slate-100">
                <img 
                  src={IMAGES.whyChoose} 
                  alt="Real Indian classroom studying together with high focus and interactive setup" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white max-w-sm">
                  <p className="text-sm font-semibold tracking-wider uppercase text-slate-200">Interactive Classrooms</p>
                  <p className="text-lg font-bold">Encouraging active collaborative learning models every single hour.</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f6eada] -z-10 rounded-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0041f5]/5 -z-10 rounded-full"></div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#0041f5] tracking-widest uppercase">Parents&apos; Confidence</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Why Parents Choose Our Day Boarding Program
                </h2>
                <p className="text-slate-600 leading-relaxed font-normal">
                  Our day boarding structure offers an ideal balance of comprehensive rigorous academics and deep emotional support, allowing parents to excel at their work knowing their kids are completely looked after.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Longer Learning Time", desc: "Extra academic hours with direct faculty guidance without any fatigue.", icon: Clock },
                  { title: "Homework Done at School", desc: "Structured study time ensures no homework tension or yelling at home.", icon: BookMarked },
                  { title: "Healthy & Nutritious Meals", desc: "Fresh vegetarian breakfasts, warm wholesome lunches, and rich snacks.", icon: Utensils },
                  { title: "Safe & Caring Environment", desc: "Meticulous sanitization, CCTV feeds, and on-site female floor caretakers.", icon: Shield },
                  { title: "Experienced Teachers", desc: "Faculty members stay beyond primary school slots to supervise and guide.", icon: Users },
                  { title: "Balanced Daily Routine", desc: "Perfect harmony of core logic, high-performance sports, arts, and quiet rest.", icon: Compass }
                ].map((feature, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#f6eada]/20 border border-slate-100 hover:border-slate-200 hover:bg-[#f6eada]/40 transition-all group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0041f5] shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{feature.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. A TYPICAL DAY - Horizontal Timeline */}
      <section id="typical-day" className="py-24 md:py-32 bg-[#f6eada]/20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-[#0041f5] tracking-widest uppercase">Structured Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              A Typical Day at NIMT Beacon School
            </h2>
            <p className="text-slate-600">
              Every day is meticulously planned to build positive habits, keep the body moving, and feed the mind with healthy choices. Here is how your child progresses.
            </p>
          </div>

          {/* Horizontal scroll timeline cards */}
          <div className="overflow-x-auto pb-8 pt-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
            <div className="flex gap-6 min-w-[1400px] px-2">
              {IMAGES.timeline.map((step, idx) => (
                <div key={idx} className="w-[280px] bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0041f5] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Step 0{idx + 1}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0041f5]">{step.time}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Connective arrow dots between steps */}
                  {idx < IMAGES.timeline.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-3 h-3 bg-[#0041f5]/20 rounded-full hidden lg:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-slate-400 font-medium flex items-center justify-center gap-2">
            <span>Scroll horizontally to view the full journey</span>
            <span className="animate-bounce-horizontal">→</span>
          </div>
        </div>
      </section>

      {/* 4. STUDY SUPPORT */}
      <section id="study-support" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#0041f5] tracking-widest uppercase">Academic Stress Removed</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Extra Learning Support Every Single Day
                </h2>
                <p className="text-slate-600 leading-relaxed font-normal">
                  No more post-work frustration trying to make children finish pages of math or language assignments. At NIMT Beacon, homework is solved under direct teacher instruction, leaving evenings entirely free for laughter, recreation, and family connection.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Homework Support", desc: "Expert subject mentors supervise and crosscheck every completed task.", icon: BookMarked },
                  { title: "Doubt Solving", desc: "One-on-one sessions addressing complex syllabus blockages daily.", icon: Award },
                  { title: "Structured Reading Time", desc: "Dedicated daily hours to expand vocabulary and general knowledge.", icon: BookOpen },
                  { title: "Group Learning", desc: "Peer-to-peer workshops to foster healthy scientific debate and teamwork.", icon: Users }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2 p-5 rounded-2xl bg-slate-50 border border-slate-100/80 hover:bg-slate-100/50 transition-all">
                    <div className="w-8 h-8 bg-[#0041f5]/5 rounded-lg flex items-center justify-center text-[#0041f5]">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white">
                <img 
                  src={IMAGES.studySupport} 
                  alt="Dedicated school teacher helping young Indian students understand homework with smiles" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Overlapping small detail badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#f6eada] p-6 rounded-2xl shadow-xl border border-white/40 max-w-[240px]">
                <p className="text-[#0041f5] font-bold text-2xl">100%</p>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">Homework Complete</p>
                <p className="text-[10px] text-slate-500 leading-normal">Our students consistently return home with zero pending notebook tasks.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HEALTHY MEALS */}
      <section id="healthy-meals" className="py-24 md:py-32 bg-[#f6eada]/20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-slate-100">
                <img 
                  src={IMAGES.diningHall} 
                  alt="Indian school students sharing a hot, healthy, balanced meal together in a clean dining hall" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Nutritional Hygiene certified
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#0041f5] tracking-widest uppercase">Pure, Hot Nutrition</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Healthy Food for Healthy Minds
                </h2>
                <p className="text-slate-600 leading-relaxed font-normal">
                  Fresh, balanced, and highly nutritious hot meals are served daily to help children stay active, attentive, and focused throughout the day. We strictly enforce hygiene guidelines and source organic vegetables.
                </p>
              </div>

              {/* Grid of dining gallery items */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: "Breakfast", label: "Fresh Fruits & Oats", img: IMAGES.meals.breakfast },
                  { name: "Lunch", label: "Nutritious Thali", img: IMAGES.meals.lunch },
                  { name: "Evening Snacks", label: "Milk & Whole Wheat", img: IMAGES.meals.snacks },
                  { name: "Dining Hall", label: "Hygienic Lounge", img: IMAGES.meals.dining }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2 group">
                    <div className="relative rounded-2xl overflow-hidden aspect-square border border-slate-100 shadow-sm">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-none">{item.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>




      {/* 9. PARENT TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-[#0041f5] tracking-widest uppercase">Emotional Connections</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              What Our Happy Parents Say
            </h2>
            <p className="text-slate-600">
              Read how our Day Boarding program has transformed families, reduced stress, and supported academic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, idx) => (
              <div key={idx} className="bg-[#f6eada]/20 border border-slate-100/80 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                
                <div className="space-y-6">
                  {/* Rating stars */}
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#0041f5]/20">
                    <img 
                      src={test.image} 
                      alt={test.author} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-none">{test.author}</h4>
                    <span className="text-[10px] text-slate-500 font-semibold">{test.role}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 11. DAY BOARDING BENEFITS */}
      <section id="benefits" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-[#0041f5] tracking-widest uppercase">The NIMT Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Day Boarding Benefits: A Head-to-Head Comparison
            </h2>
            <p className="text-slate-600">
              See how our structured,  program compares to standard day schools in building life skills, ensuring safety, and managing time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            
            {/* Left: What children receive here */}
            <div className="bg-[#f6eada]/20 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-bold text-[10px] tracking-wider uppercase rounded-full mb-6">
                  ✓ Highly Recommended
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">NIMT Beacon School Day Boarding</h3>
                
                <ul className="space-y-4">
                  {[
                    { label: "Academic Excellence", desc: "Supervised by on-site subject matter teachers to fix learning gaps." },
                    { label: "Homework Completed at School", desc: "Zero stress for parents. Safe tutoring hours included on-site." },
                    { label: "Healthy & Wholesome Meals", desc: "Expert nutritionist curated menu ensuring optimal growth." },
                    { label: "Sports & Fitness Included", desc: "Daily physical classes focusing on high discipline games." },
                    { label: "Creative Activities Provided", desc: "Painting, debating, music clubs under master instructions." },
                    { label: "Extremely Safe Campus", desc: "Comprehensive CCTV feed, verified female staff, automatic RFID tracking." },
                    { label: "Highly Caring Teachers", desc: "Empathetic mentoring that treats children like family." },
                    { label: "Better Time Management", desc: "No time wasted in traffic blocks or unguided screentime." },
                    { label: "Confidence Building", desc: "Social interactions, teamwork, and strong speaking habits." }
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xs mt-1">
                        ✓
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm leading-none">{benefit.label}</p>
                        <p className="text-slate-500 text-xs mt-1">{benefit.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-200 mt-8">
                <button 
                  onClick={() => setIsVisitModalOpen(true)}
                  className="w-full py-4 rounded-full bg-[#0041f5] text-white font-bold text-sm hover:bg-[#0041f5]/90 transition-all shadow-md shadow-[#0041f5]/10 active:scale-95"
                >
                  Book Campus Visit
                </button>
              </div>
            </div>

            {/* Right: Standard Day School Limitations */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-200 text-slate-500 font-bold text-[10px] tracking-wider uppercase rounded-full mb-6">
                  ✕ Standard Day Schools
                </div>
                <h3 className="text-2xl font-bold text-slate-500 mb-6">Traditional Day School Programs</h3>

                <ul className="space-y-4 text-slate-500">
                  {[
                    { label: "Limited Academic Support", desc: "Children must navigate complex homework concepts on their own." },
                    { label: "Stressful Homework Evenings", desc: "Frustrated parents spend evenings shouting and supervising." },
                    { label: "Unmonitored Dietary Habits", desc: "Dependence on cold tiffin boxes and unhealthy external snacks." },
                    { label: "Lack of Organized Sports", desc: "Sedentary evening screens replace vital active playground hours." },
                    { label: "Extra Tuition Expenses", desc: "Parents spend heavily on separate music, dance, or sports trainers." },
                    { label: "Transit Coordination Hurdles", desc: "Rushing back from office to organize multiple pickup drivers." },
                    { label: "High Cognitive Fatigue", desc: "Unstructured, chaotic schedules leading to sleep deprivation." },
                    { label: "Isolation", desc: "Spending evenings alone at home waiting for parents to return." }
                  ].map((limitation, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center font-bold text-xs mt-1">
                        ✕
                      </div>
                      <div>
                        <p className="font-bold text-slate-600 text-sm leading-none">{limitation.label}</p>
                        <p className="text-slate-500 text-xs mt-1">{limitation.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-200 mt-8 text-center">
                <span className="text-xs text-slate-400 font-medium italic">Make the stress-free choice today for your family.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    


    

      {/* FOOTER */}


      {/* BOOK CAMPUS VISIT MODAL */}
      <AnimatePresence>
        {isVisitModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVisitModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden p-8 shadow-2xl border border-slate-100 z-10 text-left"
            >
              <button 
                onClick={() => setIsVisitModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="w-12 h-12 bg-[#0041f5]/5 rounded-2xl flex items-center justify-center text-[#0041f5] mb-4">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Book Campus Visit</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select a convenient day to visit NIMT Beacon School. Experience the atmosphere, visit the dining area, and inspect the sports field.
                  </p>
                </div>

                {formSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-2xl flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg mb-2">✓</div>
                    <p className="font-bold text-sm">Campus Tour Scheduled!</p>
                    <p className="text-xs text-emerald-600">Our Admissions officer will call you in the next 2 hours to confirm your time slot.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Parent&apos;s Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Ramesh Sharma" 
                          className="w-full text-sm pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0041f5] focus:ring-1 focus:ring-[#0041f5]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 block">Mobile Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input 
                            type="tel" 
                            required 
                            placeholder="+91 XXXXX XXXXX" 
                            className="w-full text-sm pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0041f5]"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 block">Student&apos;s Class</label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <select required className="w-full text-sm pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-[#0041f5] appearance-none">
                            <option value="">Select Class</option>
                            <option value="Nursery-KG">Nursery to KG</option>
                            <option value="Class 1-5">Class I to V</option>
                            <option value="Class 6-8">Class VI to VIII</option>
                            <option value="Class 9-12">Class IX to XII</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Preferred Date of Visit</label>
                      <input 
                        type="date" 
                        required 
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0041f5]"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-[#0041f5] text-white hover:bg-[#0041f5]/90 transition-all font-bold text-sm rounded-xl mt-2 active:scale-95 shadow-md shadow-[#0041f5]/15"
                    >
                      Confirm Schedule Slot
                    </button>
                  </form>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* APPLY NOW MODAL */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden p-8 shadow-2xl border border-slate-100 z-10 text-left"
            >
              <button 
                onClick={() => setIsApplyModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="w-12 h-12 bg-[#0041f5]/5 rounded-2xl flex items-center justify-center text-[#0041f5] mb-4">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Apply for Admission</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Begin your child&apos;s journey with NIMT Beacon. Fill in this initial form and register for the screening evaluation test.
                  </p>
                </div>

                {formSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-2xl flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg mb-2">✓</div>
                    <p className="font-bold text-sm">Application Received Successfully!</p>
                    <p className="text-xs text-emerald-600">We have mailed the admission prospectus and syllabus of the entrance test to your email.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Student&apos;s Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Aarav Sharma" 
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0041f5]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 block">Contact Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input 
                            type="email" 
                            required 
                            placeholder="parent@example.com" 
                            className="w-full text-sm pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0041f5]"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 block">Contact Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input 
                            type="tel" 
                            required 
                            placeholder="+91 XXXXX XXXXX" 
                            className="w-full text-sm pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0041f5]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 block">Applying For Class</label>
                        <select required className="w-full text-sm px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-[#0041f5]">
                          <option value="">Select Class</option>
                          {[...Array(12)].map((_, i) => (
                            <option key={i+1} value={`Class ${i+1}`}>Class {i+1}</option>
                          ))}
                          <option value="Nursery">Nursery</option>
                          <option value="KG">KG</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 block">Academic Year</label>
                        <select required className="w-full text-sm px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-[#0041f5]">
                          <option value="2026-2027">2026 - 2027</option>
                          <option value="2027-2028">2027 - 2028</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-[#0041f5] text-white hover:bg-[#0041f5]/90 transition-all font-bold text-sm rounded-xl mt-2 active:scale-95 shadow-md shadow-[#0041f5]/15"
                    >
                      Submit Application Form
                    </button>
                  </form>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
