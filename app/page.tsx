"use client";

import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  BookOpen,
  ShieldCheck,
  Users,
  Award,
  ChevronRight,
  TrendingUp,
  Heart,
  Cpu,
  Tv,
  Music,
  Target,
  Clock,
  Coffee,
  CheckCircle2,
  Lock,
  ArrowRight,
  MapPin,
  Calendar,
  Phone,
  FileText,
  Star,
  Quote,
  Activity,
  Plus,
  Minus,
  Navigation,
} from "lucide-react";

export default function Home() {

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (currentIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  };

  
  // Setup Admissions Form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    email: "",
    targetClass: "Nursery",
  });

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.parentName && formData.studentName && formData.phone) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          parentName: "",
          studentName: "",
          phone: "",
          email: "",
          targetClass: "Nursery",
        });
      }, 5000);
    }
  };

  // State for interactive Timeline/Curriculum Journey
  const [activeTimelineStage, setActiveTimelineStage] = useState("early");

  const timelineStages = [
    {
      id: "early",
      title: "Early Years",
      subtitle: "Play school to Nursery",
      image: "/Nursery.webp",
      highlights: [
        "Learning through fun and play-based activities",
        "Games that develop motor and coordination skills",
        "Personal attention with a 10:1 student-teacher ratio",
        "Safe day care facilities with comfortable nap areas",
      ],
      description:

        "A happy and caring environment where young children learn, explore, and grow through fun activities. Our Early Years program helps children build confidence, communication skills, and a love for learning in safe and engaging classrooms.",
      link: "/day-school",
    },
    {
      id: "primary",
      title: "Primary (Classes I-V)",
      subtitle: "The Foundation of Inquiry",
      image: "/primary.webp",
      highlights: [
        "Introduction to STEM through interactive learning",
        "Strong foundation in languages, reading, and logical thinking",
        "Music, theatre, and public speaking activities",
        "Project-based learning to encourage curiosity and confidence",
      ],
      description:
        "Building strong skills in language, mathematics, and environmental studies. Students learn teamwork, creativity, and problem-solving through fun and practical activities.",
      link: "/day-school",
    },
    {
      id: "middle",
      title: "Middle School (VI-VIII)",
      subtitle: "Nurturing Grit & Intellect",
      image: "/Middle.webp",
      highlights: [
        "Robotics and basic coding programs",
        "Professional training in rifle and pistol shooting",
        "Foreign language options: French, German, and Spanish",
        "Practical learning through projects and experiments",
      ],
      description:
        "Helping students turn classroom learning into real-world skills. Middle school encourages independent thinking, hands-on science learning, and specialized sports training.",
      link: "/day-school",
    },
    {
      id: "secondary",
      title: "Secondary (IX-X)",
      subtitle: "CBSE Prep & Future Shaping",
      image: "/secondary.webp",
      highlights: [
        "Comprehensive CBSE board exam preparation",
        "Foundation coaching for competitive exams",
        "Public speaking and debate participation",
        "Leadership seminars and career track profiling",
      ],
      description:
        "Focused on strong CBSE board exam preparation while helping students build confidence, leadership skills, and career awareness. Students receive personal guidance and mentorship to support their academic and future goals.",
      link: "/academics",
    },
    {
      id: "senior",
      title: "Senior Secondary (XI-XII)",
      subtitle: "Gateway to Elite Universities",
      image: "/SeniorSecondary.webp",
      highlights: [
        "Science, Commerce, and Humanities streams",
        "Integrated JEE & NEET preparation",
        "University admission and career guidance",
        "Innovation, research, and entrepreneurship projects",
      ],
      description:
        "Designed to help students excel in CBSE board exams and prepare for admission to leading universities in India and abroad. Expert faculty, focused guidance, and career planning help students achieve their future goals.",
      link: "/academics",
    },
  ];

  // State for World Class Campus Gallery filter
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("all");

  const campusGallery = [
    {
      title: "Physics Laboratory",
      category: "labs",
      image: "/physics-lab.webp",
    },
    {
      title: "Chemistry Laboratory",
      category: "labs",
      image: "/chemistry-lab.webp",
    },
    {
      title: "Biology Laboratory",
      category: "lab",
      image: "/bio-lab.webp",
    },
    {
      title: "School Library Resource Centre",
      category: "academics",
      image: "/library.webp",
    },
    {
      title: "Olympic Standard Indoor Shooting Range",
      category: "sports",
      image: "/Indoor.webp",
    },
    {
      title: " Air-Conditioned Dormitories",
      category: "residence",
      image: "/hostel-room.webp",
    },
    {
      title: "Nutritious Dining Hall",
      category: "residence",
      image: "/dining-hall.webp",
    },
    {
      title: "Football Field",
      category: "sports",
      image: "/Football.webp",
    },
    
  ];

  const filteredGallery =
    activeGalleryFilter === "all"
      ? campusGallery
      : campusGallery.filter((item) => item.category === activeGalleryFilter);

  // FAQ Accordion states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the admission procedure for the 2026-27 academic year?",
      answer:
        "The process starts by filling out our online Inquiry Form or visiting the school campus in Ghaziabad. Our admissions team will then guide you through a personalized campus tour, an interactive session with the parents, and a baseline skill assessment for your child to determine placement.",
    },
    {
      question: "What streams and integrated competitive coaching are offered?",
      answer:
        "NIMT Beacon School offers Science, Commerce, and Humanities. We provide an Integrated Foundation program for JEE (Engineering) & NEET (Medical) from Class VI onwards, taught by  coaching veterans, fully synchronized with CBSE hours.",
    },
    {
      question: "What is the structure and schedule of the Day Boarding program?",
      answer:
        "Our Day Boarding operates from 9:00 AM to 5:00 PM. From 9:00 AM to 2:00 PM, children follow academic cycles. From 2:00 PM onwards, they enjoy nutritious hot lunches, followed by mandatory supervised homework tutorials, foreign language classes, and specialized sports coaching.",
    },
    {
      question: "Can you describe the boarding and safety configurations on campus?",
      answer:
        "We maintain  air-conditioned separate wings for boys and girls, supervised by experienced resident house wardens. Security is absolute: 24/7 CCTV surveillance, biometric check-ins, a full-time residential nurse with ambulance access, and organic, healthy meals prepared under strict hygiene standards.",
    },
    {
      question: "Where is NIMT Beacon School situated, and is transportation available?",
      answer:
        "The campus is situated in Ansal Avantika-II, Ghaziabad, Uttar Pradesh. We operate a fleet of , fully air-conditioned GPS-enabled school buses with on-board cameras, male/female security guards, and real-time tracking apps for parents.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div id="school-homepage">
      {/* SECTION 1: HERO SECTION */}
  <section
  id="cinematic-hero"
  className="relative min-h-screen flex items-center justify-center overflow-hidden text-white pt-24"
>
{/* Background Campus Video */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="w-full h-full object-cover object-top"
  >
    <source src="/campus-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Very light overlay only */}
  <div className="absolute inset-0 bg-[#0041f5]/25" />
</div>

  {/* Hero Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-20">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0041f5] backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-6"
    >
      <Sparkles className="w-4 h-4 text-[#fffc4d]" />
      Ghaziabad's No.1 Boarding & Day Boarding Institution
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-4xl sm:text-6xl lg:text-7xl font-tailwind font-black tracking-tight leading-tight max-w-5xl mx-auto mb-8"
    >
      Where{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-[#fffc4d]">
        Future Leaders
      </span>
      <br className="hidden md:inline" />
      Begin Their Journey
    </motion.h1>

<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-12"
>
  <strong className="text-white">CBSE Affiliated</strong> |{" "}
  <strong className="text-white">Nursery to Class XII</strong> |{" "}
  <strong className="text-white">
    Day Boarding & Residential Boarding
  </strong>
</motion.p>

  </div>
</section>
      {/* SECTION 2: WHY PARENTS CHOOSE NIMT */}
      <section id="why-choose-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0041f5] text-xs font-black tracking-widest uppercase">The NIMT Edge</span>
            <h2 className="text-3xl md:text-5xl font-tailwind font-extrabold tracking-tight text-slate-950 mt-2">
              Why Parents Choose NIMT Beacon School
            </h2>
            <div className="w-16 h-1 bg-[#0041f5] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
  {
    title: "Strong CBSE Academics",
    img: "/cbse.webp",
  },
  {
    title: "Safe & Comfortable Boarding",
    img: "/hostel.webp",
  },
  {
    title: "IIT & JEE Preparation",
    img: "/iit.webp",
  },
  {
    title: "Smart Digital Classrooms",
    img: "/smart-classroom.webp",
  },
  {
    title: "Robotics & AI Labs",
    img: "/Robotics.webp",
  },
  {
    title: "Indoor Shooting Facility",
    img: "/Indoor.webp",
  },

  {
    title: "Leadership Development",
    img: "/Leadership.webp",
  },
  {
    title: "Student Well-Being & Care",
    img: "/Care.webp",
  },
].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-50 border border-slate-200/65 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
        
                </div>
                <div className="p-6">
                  <h3 className="font-tailwind font-black text-lg text-slate-900 mb-2 group-hover:text-[#0041f5] transition-colors">
                    {item.title}
                  </h3>
          
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: NIMT IN NUMBERS */}
      <section id="academic-stats" className="py-20 bg-[#0041f5] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { num: "25+", label: "Years of Educational Excellence" },
              { num: "2000+", label: "Nurtured Global Scholars" },
              { num: "98%", label: "Verified Parent Satisfaction Rate" },
              { num: "100+", label: "Top National & Global Uni Placements" },
              { num: "85%+", label: "Consistent Class XII First Division Outcomes" },
            ].map((stat, idx) => (
              <div key={idx} className="p-4 pt-8 md:pt-4">
                <p className="text-4xl md:text-5xl font-mono font-black text-[#fffc4d] tracking-tight">{stat.num}</p>
                <div className="w-8 h-0.5 bg-sky-200 mx-auto my-3" />
                <p className="text-xs uppercase tracking-wider text-sky-100 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CURRICULUM TIMELINE */}
      <section id="academic-journey" className="py-24 bg-[#f6eada]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0041f5] text-xs font-black tracking-widest uppercase">The Scholastic Timeline</span>
            <h2 className="text-3xl md:text-5xl font-tailwind font-extrabold tracking-tight text-slate-900 mt-2">
              Our Multi-Stage Academic Journey
            </h2>
            <p className="text-sm text-slate-550 max-w-lg mx-auto mt-3">
              Explore how NIMT shapes character and unlocks peak capacity from infant daycare up to competitive Class XII.
            </p>
          </div>

          {/* Timeline Switch Controls */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-slate-300 pb-6">
            {timelineStages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveTimelineStage(stage.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-extrabold transition-all duration-300 ${
                  activeTimelineStage === stage.id
                    ? "bg-[#0041f5] text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-[#0041f5]/10 border border-slate-200"
                }`}
              >
                {stage.title}
              </button>
            ))}
          </div>

          {/* Active timeline block */}
          <AnimatePresence mode="wait">
            {timelineStages.map(
              (stage) =>
                activeTimelineStage === stage.id && (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/50"
                  >
                    <div className="h-[250px] sm:h-[350px] relative rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={stage.image}
                        alt={stage.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-6">
                      <span className="text-xs font-bold text-[#8a5506] bg-[#8a5506]/10 px-3 py-1.5 rounded-full">
                        {stage.subtitle}
                      </span>
                      <h3 className="font-tailwind font-black text-2xl sm:text-3xl text-slate-950">{stage.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-sans">{stage.description}</p>

                      <div className="space-y-3 pt-2">
                        <p className="text-xs font-black uppercase text-slate-400 tracking-wider">Curriculum Highlights</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {stage.highlights.map((hlt, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                              <span>{hlt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                        <Link
                          href={stage.link}
                          className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0041f5] text-white hover:bg-blue-600 transition-all flex items-center gap-1 shadow-md shadow-blue-500/10"
                        >
                          Explore Program Details
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 5: DAY SCHOOL */}
      <section id="day-school" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-[#0041f5] text-xs font-black tracking-widest uppercase">Standard Cohort</span>
              <h2 className="text-3xl md:text-5xl font-tailwind font-black text-slate-950 tracking-tight leading-tight">
               A Complete Day School Experience
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
               Our Day School program helps students grow through quality CBSE academics, sports, creative activities, and teamwork. It is ideal for families looking for a balanced education in a safe and supportive environment.
              </p>

              <div id="day-school-features" className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { name: "Smart Learning Classrooms", icon: Tv },
                  { name: "Astronomy & space workshops", icon: Sparkles },
                  { name: "Modern Computer Labs", icon: Cpu },
                  { name: "Music, Dance & Fine Art cycles", icon: Music },
                ].map((fea, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-150 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-550/15 flex items-center justify-center">
                      <fea.icon className="w-4 h-4 text-[#0041f5]" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">{fea.name}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/day-school"
                  className="px-6 py-3 bg-[#0041f5] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-md inline-flex items-center gap-1.5"
                >
                  Explore Day School Features
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img
                src="/day-school-class.webp"
                alt="Active primary day school class"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[10px] font-black uppercase text-[#0041f5] border border-blue-500/10 shadow">
                Nursery to Class XII
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DAY BOARDING */}
      <section id="day-boarding" className="py-24 bg-[#0041f5] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/day-boarding.webp"
                alt="Active sports period under day boarding"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/70 p-4 rounded-2xl backdrop-blur border border-white/10 text-center">
                <p className="text-xs font-black text-[#fffc4d] uppercase tracking-widest">Ideal for Professional Dual-Working Parents</p>
                <p className="text-[11px] text-sky-100 mt-1">Academics + Healthy Dining + Extra Sports + Supervised Tutoring</p>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-[#fffc4d] text-xs font-black tracking-widest uppercase font-mono">The Ultimate Convenience</span>
              <h2 className="text-3xl md:text-5xl font-tailwind font-black tracking-tight leading-none text-white">
                Supervised Day Boarding Program (9 AM – 5 PM)
              </h2>
              <p className="text-sm text-sky-100 leading-relaxed">
                Designed especially for working and corporate parents, our Day Boarding Program provides a safe, structured, and productive environment for children throughout the day.
Students attend regular classes, enjoy nutritious meals, complete their homework under teacher supervision, and participate in sports and activities before returning home.
This means parents can focus on their professional commitments with peace of mind, knowing their child is learning, growing, and being cared for in a supportive environment.
              </p>

              {/* Master Schedule Block */}
              <div className="bg-slate-900/40 rounded-3xl p-5 border border-white/10 space-y-3.5">
                <p className="text-xs uppercase tracking-widest font-black text-[#fffc4d]">Daily Chronology</p>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="font-semibold text-slate-100 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-400" /> 09:00 AM – 02:00 PM
                    </span>
                    <span className="text-[#fffc4d] font-bold uppercase tracking-wide">Core Academic Sessions</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="font-semibold text-slate-100 flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-sky-400" /> 02:00 PM – 03:00 PM
                    </span>
                    <span className="text-[#fffc4d] font-bold uppercase tracking-wide">Hot Lunch & Quiet Lounge</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5">
                    <span className="font-semibold text-slate-100 flex items-center gap-2">
                      <Target className="w-4 h-4 text-sky-400" /> 03:00 PM – 05:00 PM
                    </span>
                    <span className="text-[#fffc4d] font-bold uppercase tracking-wide">Creative Clubs & Sports Coaching</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/day-boarding"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fffc4d] text-slate-950 hover:bg-yellow-400 transition-all text-center"
                >
                  Learn Day Boarding Secrets
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all text-center"
                >
                  Download Schedule Booklet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FULL RESIDENTIAL BOARDING */}
      <section id="full-boarding" className="py-24 bg-[#f6eada]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0041f5] text-xs font-black tracking-widest uppercase">Home Away From Home</span>
            <h2 className="text-3xl md:text-5xl font-tailwind font-extrabold tracking-tight text-slate-900 mt-2">
              Safe & Comfortable Residential Boarding
            </h2>
            <p className="text-sm text-slate-650 max-w-lg mx-auto mt-3">
              Our separate boarding facilities for boys and girls provide a safe and supportive environment where students can learn and grow with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-tailwind font-black text-2xl text-slate-950 leading-tight">
                A Place to Learn, Grow & Thrive
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Inspired by international boarding school standards, NIMT Beacon's boarding program focuses on academics, personal growth, discipline, and student well-being. With dedicated mentors, caring wardens, medical support, and engaging activities, students enjoy a balanced and enriching residential experience.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Air-conditioned rooms with personal study desks",
                  "Separate hostel facilities for boys and girls",
                  "Caring residential wardens and mentors",
                  "On-campus medical care and professional counselors",
                  "Healthy and nutritious meals planned for student wellness",
                  "Weekend activities, educational trips, workshops, movies, and recreational programs",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Link
                  href="/full-boarding"
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0041f5] text-white hover:bg-blue-600 transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/10"
                >
                  Tour Our Hostel Facilities
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative h-[350px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/hostel.webp"
                alt="Safe  hostel study lounge"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#8a5506] text-[#fffc4d] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#fffc4d]/20">
                Swiss-Standard Living
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WORLD CLASS CAMPUS GALLERY */}
      <section id="campus-life" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#0041f5] text-xs font-black tracking-widest uppercase">The Campus Architecture</span>
            <h2 className="text-3xl md:text-5xl font-tailwind font-black tracking-tight text-slate-950 mt-2">
              Explore Our World Class Campus
            </h2>
            <div className="w-16 h-1 bg-[#0041f5] mx-auto mt-4" />
          </div>

          {/* Filter Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-light-200">
            {[
              { id: "all", name: "All Campus Facilities" },
              { id: "labs", name: "Science Labs" },
              { id: "academics", name: "Academics & Library" },
              { id: "sports", name: "Sports Complexes" },
              { id: "residence", name: "Hostel & Dining" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveGalleryFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeGalleryFilter === btn.id
                    ? "bg-[#0041f5] text-white shadow-md"
                    : "bg-slate-50 text-slate-650 hover:bg-slate-100 border border-slate-200/50"
                }`}
              >
                {btn.name}
              </button>
            ))}
          </div>

          {/* Responsive grid */}
          <motion.div layout id="campus-masonry-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, idx) => (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-72 rounded-2xl overflow-hidden shadow-md border border-slate-150-10 flex flex-col justify-end p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent z-10" />
                  <div className="relative z-20">
                    <span className="text-[9px] uppercase font-black text-[#fffc4d] tracking-widest bg-slate-900/70 border border-white/10 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h4 className="font-tailwind font-black text-sm text-white mt-1 leading-tight">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Detailed facilities route trigger */}
          <div className="pt-10 text-center">
            <Link
              href="/facilities"
              className="px-6 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0041f5] text-xs font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-1"
            >
              Learn More Campus Spaces
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

   

      {/* SECTION 10: SCHOLASTIC ACHIEVEMENTS */}
      <section id="achievements" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#0041f5] text-xs font-black tracking-widest uppercase">The Beacon Standard</span>
              <h2 className="text-3xl md:text-5xl font-tailwind font-black text-slate-950 tracking-tight leading-tight">
                Celebrating Outstanding Scholastic Achievements
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                Our young scholars consistently prove their dominance. Over 25 years, our students have secured top slots in Nationwide CBSE Board Assessments, cleared National Olympiads, and gained entries to premier competitive tracks like IIT-JEE and NEET foundation leagues.
              </p>

              <div id="school-awards" className="space-y-3 pt-3">
                {[
                  "100% Board Pass Rate (Consistent Class XII Results)",
                  "Over 50+ students clearing Olympiad regional tiers in 2025",
                  "2 IIT-JEE Top 500 selections from the senior batch in 2025",
                  "Gold medals in the National Inter-School Rifle Shooting Tournament",
                ].map((aw, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                    <Award className="w-5 h-5 text-[#8a5506] shrink-0" />
                    <span>{aw}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/achievements"
                  className="px-6 py-3 bg-[#0041f5] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blue-600 transition-all shadow inline-flex items-center gap-1"
                >
                  View Outstanding Success Stories
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 border border-slate-150 rounded-2xl text-center">
                  <p className="text-3xl font-mono font-black text-[#0041f5]">98.6%</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">Class XII Board Topper (2025)</p>
                </div>
                <div className="p-6 bg-[#0041f5] text-white rounded-2xl text-center">
                  <p className="text-3xl font-mono font-black text-[#fffc4d]">12+</p>
                  <p className="text-[10px] uppercase font-bold text-slate-200 tracking-wider mt-1">JEE / NEET Scholars (2025)</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 bg-[#8a5506]/15 hover:bg-[#8a5506]/20 transition-all rounded-2xl text-center border border-[#8a5506]/20">
                  <p className="text-3xl font-mono font-black text-[#8a5506]">Gold</p>
                  <p className="text-[10px] uppercase font-bold text-slate-650 tracking-wider mt-1">National Shooting Cup 2025</p>
                </div>
                <div className="p-6 bg-slate-55 block rounded-2xl text-center border border-slate-200">
                  <p className="text-3xl font-mono font-black text-slate-800">100+</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">Olympiad Triumphs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* SECTION 11: PARENTS' CORNER (TESTIMONIALS) */}
<section id="parents-corner" className="py-24 bg-[#f6eada]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-[#0041f5] text-xs font-black tracking-widest uppercase">
        Parent Testimonials
      </span>

      <h2 className="text-3xl md:text-5xl font-tailwind font-extrabold tracking-tight text-slate-900 mt-2">
        What Families Say About NIMT Beacon School
      </h2>

      <div className="w-16 h-1 bg-[#0041f5] mx-auto mt-4" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          video: "/videos/testimonial-1.mp4",
          author: "Parents of Vivan",
          designation: " Class 5th Student ",
        },
        {
          video: "/videos/testimonial-2.mp4",
          author: "Parent Of Kavyansh",
          designation: "Class 11th Student",
        },
        {
          video: "/videos/testimonial-3.mp4",
          author: "Parent Of Vani Kaushik",
          designation: "Class 5th Student",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-3xl bg-black shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500"
        >
          <div className="relative aspect-[9/16]">
   <video
  src={item.video}
  controls
  playsInline
  preload="metadata"
  className="absolute inset-0 w-full h-full object-cover"
/>

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Bottom Content */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5">
   

              <div className="border-t border-white/20 pt-3">
                <h4 className="text-white font-bold text-base">
                  {item.author}
                </h4>

                <p className="text-white/80 text-xs">
                  {item.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* SECTION 12: STUDENT SUCCESS STORIES */}
      {/* <section id="success-stories" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0041f5] text-xs font-black tracking-widest uppercase">Success Profiles</span>
            <h2 className="text-3xl md:text-5xl font-tailwind font-black text-slate-950 mt-2">
              Transformative Student Growth Stories
            </h2>
            <div className="w-16 h-1 bg-[#0041f5] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Academic & Tech Innovation Path",
                student: "Aravind Murthy (Class of 2025)",
                desc: "Equipped with robotics skills and computer labs in high school, Aravind crafted a low-cost automated system for public water tracking, gaining direct admissions to NTU Singapore.",
                image: "https://picsum.photos/seed/successful_student/600/400",
              },
              {
                title: "Sports Mastery & National Title",
                student: "Divya Kaushik (Class of 2024)",
                desc: "By utilizing the Elite Indoor Shooting Range, Divya entered rifle coaching at NIMT, going on to clinch individual Gold in the National CBSE Youth Shooting Cup.",
                image: "https://picsum.photos/seed/athletic_champion/600/400",
              },
            ].map((story, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/50 flex flex-col sm:flex-row shadow"
              >
                <div className="w-full sm:w-1/2 h-56 sm:h-auto relative">
                  <img
                    src={story.image}
                    alt={story.student}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 w-full sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-black text-[#0041f5] tracking-widest leading-none block mb-2">
                      {story.title}
                    </span>
                    <h4 className="font-tailwind font-bold text-sm text-slate-900 mb-2 leading-tight">
                      {story.student}
                    </h4>
                    <p className="text-xs text-slate-550 leading-relaxed font-sans">{story.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <Link
                      href="/achievements"
                      className="text-xs font-bold text-[#0041f5] inline-flex items-center gap-1"
                    >
                      Read full profile <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SECTION 13: ADMISSIONS 2026 CONVERSION BLOCK */}
      <section id="quick-admissions-form" className="py-24 bg-gradient-to-r from-slate-900 to-slate-950 text-white relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#fffc4d] text-xs font-black tracking-widest uppercase font-mono">Admission Guidelines 2026-27</span>
              <h2 className="text-4xl md:text-5xl font-tailwind font-black tracking-tight leading-none text-white">
           Take the First Step Towards Your Child's Bright Future
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Admissions are now open from Preschool to Class XII. Fill out the enquiry form below, and our admissions team will help you with the next steps, school visit, and admission process.

              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#fffc4d]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300">Student assessment and academic guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#fffc4d]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300">Free school brochure and admission information</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#fffc4d]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300">Options available for Day School, Day Boarding, and Full Boarding</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="https://wa.me/919599931443?text=Hi%20NIMT,%20I%27m%20inquiring%20about%20Admissions%202026"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white hover:bg-emerald-600 transition-all flex items-center gap-2"
                >
                  WhatsApp Admissions Desk
                </a>
              </div>
            </div>

            {/* STICKY LEAD CAPTURE CARD */}
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-150 relative">
              <div className="absolute top-4 right-4 bg-red-100 text-red-700 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest animate-pulse border border-red-200">
                Admissions Open
              </div>

              <h3 className="font-tailwind font-black text-xl text-slate-950 mb-1">Request Admissions Kit</h3>
              <p className="text-xs text-slate-500 mb-6">Complete information details for rapid processing.</p>

              {formSubmitted ? (
                <div className="bg-slate-50 border border-emerald-500/20 p-6 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-tailwind font-bold text-slate-900">Inquiry Received Successfully!</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Thank you, our admissions lead counsellor will call you within 2 business hours with pricing catalog and prospectus sheets. Readying campus tour itinerary!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleFormInputChange}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                        Student&apos;s Full Name *
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        required
                        value={formData.studentName}
                        onChange={handleFormInputChange}
                        placeholder="e.g. Aryan Malhotra"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                        Grade / Class Seeking *
                      </label>
                      <select
                        name="targetClass"
                        value={formData.targetClass}
                        onChange={handleFormInputChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all"
                      >
                        <option value="Nursery">Nursery / Play School</option>
                        <option value="Primary">Primary (I - V)</option>
                        <option value="Middle">Middle (VI - VIII)</option>
                        <option value="Secondary">Secondary (IX - X)</option>
                        <option value="SeniorSec">Senior Secondary (XI - XII)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
     <div>
  <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
    Active Phone (WhatsApp) *
  </label>

  <div className="flex">
    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-600 text-sm font-semibold">
      +91
    </span>

    <input
      type="text"
      name="phone"
      required
      value={formData.phone}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 10) {
          setFormData({
            ...formData,
            phone: value,
          });
        }
      }}
      placeholder="9876543210"
      maxLength={10}
      pattern="[0-9]{10}"
      className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-r-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all"
    />
  </div>

  {formData.phone.length > 0 && formData.phone.length < 10 && (
    <p className="mt-1 text-red-500 text-xs">
      Mobile number must be exactly 10 digits
    </p>
  )}
</div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormInputChange}
                        placeholder="e.g. parent@email.com"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#0041f5] rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#0041f5] text-white hover:bg-blue-600 transition-all font-sans shadow-lg shadow-blue-500/10 cursor-pointer text-center"
                    >
                      Submit Official Admissions Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQ BLOCK */}
      <section id="faq-accordions" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0041f5] text-xs font-black tracking-widest uppercase">Answers & Support</span>
            <h2 className="text-3xl md:text-5xl font-tailwind font-extrabold tracking-tight text-slate-900 mt-2">
              Frequently Answered Admissions Questions
            </h2>
            <div className="w-16 h-1 bg-[#0041f5] mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-tailwind font-bold text-sm sm:text-base text-slate-950 focus:outline-none gap-4"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="w-4 h-4 text-[#0041f5] shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#0041f5] shrink-0" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-150-10 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: CAMPUS LOCATION AND MAP */}
      <section id="campus-location" className="py-24 bg-[#f6eada]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#0041f5] text-xs font-black tracking-widest uppercase">Visit Ghaziabad Campus</span>
              <h2 className="text-4xl font-tailwind font-black tracking-tight text-slate-950 leading-tight">
                Our Landmark Ghaziabad Campus Site
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Located in the well-connected residential area of Ansal Avantika-II, Ghaziabad, NIMT Beacon School provides a safe, green, and student-friendly learning environment designed to support academic excellence and holistic development

              </p>

              <div id="school-location-details" className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0041f5] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-tailwind font-bold text-xs text-slate-950">Campus Main Location</h5>
                    <p className="text-xs text-slate-500 mt-1">Ansal, Avantika Ext Rd, Avantika Colony, Shastri Nagar, Ghaziabad, Uttar Pradesh 201002</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-[#8a5506] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-tailwind font-bold text-xs text-slate-950">Quick Driving Directions</h5>
                    <p className="text-xs text-slate-500 mt-1">Easily accessible via NH-24 and the Delhi-Meerut Expressway. Just a 20-minute drive from Indirapuram and Noida Sector 62.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive maps placeholder styled beautifully */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-250 bg-slate-900 text-white flex flex-col justify-between p-8">
              {/* Background graphic grid & route design */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] z-0" />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-[#0041f5]/30 z-0" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                    Central Campus Locator
                  </span>
                  <h4 className="font-tailwind font-bold text-2xl text-white">NIMT Beacon School ghaziabad</h4>
                  <p className="text-sm text-slate-300 mt-2 max-w-lg">Ansal Avantika-II, Ghaziabad, Uttar Pradesh, India - 201013</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Expressway Connectivity</p>
                    <p className="text-sm text-[#fffc4d] font-semibold mt-1">NH-24 Expressway (2.5 KM)</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Transit Time</p>
                    <p className="text-sm text-[#fffc4d] font-semibold mt-1">20 Min from Indirapuram & Noida Sec 62</p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=NIMT+Beacon+School+Ansal+Avantika-II+Ghaziabad"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#0041f5] hover:bg-blue-600 text-white text-center py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Launch Live GPS Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





