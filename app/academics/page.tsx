'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Code,
  FlaskConical,
  Compass,
  Monitor,
  Library as LibraryIcon,
  Globe,
  Radio,
  Dribbble,
  Calendar,
  ChevronDown,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Briefcase,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

// --- STYLES & CONFIGURATION ---
const PRIMARY_COLOR = '#0041f5';
const SANDY_LINEN = '#f6eada';
const ACCENT_YELLOW = '#fffc4d';

// --- DATA DEFINITIONS ---

interface JourneyStage {
  id: string;
  title: string;
  sub: string;
  image: string;
  description: string;
  highlights: string[];
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 'early',
    title: 'Play School & Nursery',
    sub: 'Early Years',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200',
    description: 'Children learn through fun activities, stories, music, games, and hands-on experiences that build confidence and curiosity.',
    highlights: ['Play-based learning', 'Language development', 'Social skills', 'Creative activities']
  },
  {
    id: 'primary',
    title: 'Primary School',
    sub: 'Classes I–V',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200',
    description: 'Students build strong foundations in English, Mathematics, Science, and Social Studies while developing creativity, communication, and teamwork.',
    highlights: ['Smart classrooms', 'Reading habits', 'STEM activities', 'Sports & Arts']
  },
  {
    id: 'middle',
    title: 'Middle School',
    sub: 'Classes VI–VIII',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200',
    description: 'Students strengthen academic concepts through practical learning, robotics, science experiments, coding, and project-based activities.',
    highlights: ['Robotics & Automation', 'Coding & Logic', 'Science labs', 'Mathematics lab', 'Olympiad preparation']
  },
  {
    id: 'secondary',
    title: 'Secondary School',
    sub: 'Classes IX–X',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
    description: 'Students receive focused academic preparation, board exam guidance, leadership opportunities, and career awareness.',
    highlights: ['CBSE board preparation', 'Subject mentoring', 'Career guidance', 'Practical learning']
  },
  {
    id: 'senior_sec',
    title: 'Senior Secondary',
    sub: 'Classes XI–XII',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    description: 'Comprehensive streams designed to prepare students for college, competitive exams, and diverse career pathways in a supportive, modern environment.',
    highlights: ['Integrated JEE/NEET Support', 'Expert Stream Electives', 'University Placements', 'Leadership Portfolios']
  }
];

interface StreamData {
  id: string;
  name: string;
  image: string;
  description: string;
  subjects: string[];
  careers: string[];
  opportunities: string;
}

const STREAMS: StreamData[] = [
  {
    id: 'science',
    name: 'Science Stream',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200',
    description: 'Ideal for students who dream of becoming doctors, engineers, scientists, researchers, or technology professionals. Designed with a robust emphasis on experimental learning and analytical skills.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science'],
    careers: ['Engineering', 'Medical', 'Research', 'Technology', 'Artificial Intelligence'],
    opportunities: 'Advanced laboratory projects, guest lectures by research scientists, coding bootcamps, and robotics design exposure.'
  },
  {
    id: 'commerce',
    name: 'Commerce Stream',
    image: 'https://images.unsplash.com/photo-1552581230-c01bc0d48425?auto=format&fit=crop&q=80&w=1200',
    description: 'Perfect for students interested in business, finance, entrepreneurship, economics, banking, and management. Fosters practical understanding of economic systems and market dynamics.',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'Entrepreneurship'],
    careers: ['CA (Chartered Accountancy)', 'CS (Company Secretary)', 'MBA & Management', 'Investment Banking', 'Entrepreneurship', 'Corporate Finance'],
    opportunities: 'Incubation cell projects, mock business challenges, stock market simulations, and guest sessions by business leaders.'
  },
  {
    id: 'humanities',
    name: 'Humanities Stream',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200',
    description: 'Designed for students interested in law, psychology, civil services, media, education, design, literature, and public administration. Develops deep empathy, research, writing, and communication skills.',
    subjects: ['History', 'Political Science', 'Psychology', 'Geography', 'Legal Studies', 'Economics'],
    careers: ['Law', 'UPSC & Civil Services', 'Media & Journalism', 'Teaching & Academia', 'Psychology & Counselling', 'Public Administration'],
    opportunities: 'Model United Nations, debate clubs, writing and publication mentorship, legal internships, and field research projects.'
  }
];

interface SmartSpace {
  title: string;
  image: string;
  desc: string;
  icon: React.ReactNode;
}

const SMART_SPACES: SmartSpace[] = [
  {
    title: 'Smart Classroom',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
    desc: 'Fully air-conditioned classrooms equipped with ultra-HD interactive smart panels and rich multimedia resources.',
    icon: <Monitor className="w-5 h-5 text-[#0041f5]" />
  },
  {
    title: 'Computer Lab',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200',
    desc: 'High-speed modern desktop systems configured with programming platforms, coding kits, and graphic tools.',
    icon: <Code className="w-5 h-5 text-[#0041f5]" />
  },
  {
    title: 'Science Lab',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    desc: 'State-of-the-art diagnostic equipment for individual chemistry, physics, and biology practical experimentation.',
    icon: <FlaskConical className="w-5 h-5 text-[#0041f5]" />
  },
  {
    title: 'Mathematics Lab',
    image: 'https://images.unsplash.com/photo-1453733190148-c44698c265f8?auto=format&fit=crop&q=80&w=1200',
    desc: 'Hands-on wooden tools, 3D geometric models, and interactive learning boards that bring abstract formulas to life.',
    icon: <Compass className="w-5 h-5 text-[#0041f5]" />
  },
  {
    title: 'Robotics Lab',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    desc: 'Cutting-edge development center with custom STEM kits, micro-controllers, sensors, and 3D printers.',
    icon: <Sparkles className="w-5 h-5 text-[#0041f5]" />
  },
  {
    title: 'Library',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200',
    desc: 'Over 15,000 physical volumes, interactive digital journals, reading bays, and private discussion spaces.',
    icon: <LibraryIcon className="w-5 h-5 text-[#0041f5]" />
  },
  {
    title: 'Language Lab',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    desc: 'Specially structured digital station with speech clarity software, audio aids, and accent modules.',
    icon: <Globe className="w-5 h-5 text-[#0041f5]" />
  },
  {
    title: 'Astronomy Lab',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    desc: 'Observational lab with programmable telescopes, galaxy maps, and stellar projectors.',
    icon: <Radio className="w-5 h-5 text-[#0041f5]" />
  }
];

const BEYOND_CLASSROOM = [
  { title: 'Science Exhibitions', desc: 'Where critical ideas materialize into beautiful functional models and working prototypes.' },
  { title: 'Educational Tours', desc: 'Connecting textbook lessons to historical monuments, museums, and environmental reserves.' },
  { title: 'STEM Projects', desc: 'Collaborative projects that merge science, engineering, and mathematics to solve real challenges.' },
  { title: 'Robotics', desc: 'Programming, compiling, and testing automated systems that solve navigation and sorting tasks.' },
  { title: 'Art Integration', desc: 'Expressive synthesis of academic theories through canvas paintings, digital art, and drama.' },
  { title: 'Debates', desc: 'Formulating convincing arguments on critical global topics to build high-grade eloquence.' },
  { title: 'Public Speaking', desc: 'Developing voice projection, physical posture, and presentation design for audience impact.' },
  { title: 'Leadership Activities', desc: 'Student Council bodies and house management systems that coordinate massive festivals.' },
  { title: 'Community Service', desc: 'Active local support programs, sustainability campaigns, and outreach drives to build empathy.' }
];

const TEACHER_HIGHLIGHTS = [
  { title: 'Experienced Faculty', desc: 'Sincere educators with deep academic backgrounds, board assessment credentials, and modern training.' },
  { title: 'Personal Mentoring', desc: 'Going beyond standard lecturing to guide each student based on their unique learning traits.' },
  { title: 'Continuous Assessment', desc: 'Gentle, supportive analysis of core knowledge without causing stress or exam-induced fatigue.' },
  { title: 'Student Support', desc: 'Dedicated counselor desks, remedial coaching systems, and structured study hours.' }
];

const PHOTO_GALLERY = [
  { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600', tag: 'Smart Classrooms' },
  { url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=600', tag: 'Science Labs' },
  { url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600', tag: 'Computer Lab' },
  { url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600', tag: 'Library' },
  { url: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=600', tag: 'Teachers Teaching' },
  { url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600', tag: 'Students Learning' },
  { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600', tag: 'Group Discussions' },
  { url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600', tag: 'Practical Experiments' },
  { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600', tag: 'Robotics' },
  { url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600', tag: 'Coding & STEM' },
  { url: 'https://images.unsplash.com/photo-1453733190148-c44698c265f8?auto=format&fit=crop&q=80&w=600', tag: 'Math Lab Drawing' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600', tag: 'Projects' }
];

const WHY_PARENTS_CHOOSE = [
  { title: 'Experienced Teachers', desc: 'Subject experts focused on conceptual clarity, active guidance, and real student growth.' },
  { title: 'Modern Infrastructure', desc: 'Beautiful high-tech labs, rich reference libraries, and high-speed computer infrastructure.' },
  { title: 'CBSE Curriculum', desc: 'Deep alignment with the national syllabus, updated for critical logic and real-world skill-building.' },
  { title: 'Individual Attention', desc: 'Balanced class groups that ensure each child is heard, mentored, and actively supported.' },
  { title: 'Technology Enabled', desc: 'Integrating digital simulation models, interactive boards, and coding into daily learning.' },
  { title: 'Practical Education', desc: 'Transforming dense theories into experiments, field trips, and creative model-making.' },
  { title: 'Leadership Development', desc: 'Student assemblies, public debating, house systems, and group initiatives that form character.' },
  { title: 'Career Guidance', desc: 'One-on-one professional path counselling, integrated exam preparation, and college workshops.' }
];

const FAQS = [
  {
    q: 'What curriculum does the school follow?',
    a: 'NIMT Beacon School strictly follows the Central Board of Secondary Education (CBSE) curriculum, integrated with modern experiential and hands-on learning methodologies.'
  },
  {
    q: 'How are students prepared for board exams?',
    a: 'We provide specialized subject mentoring, mock examinations, timed writing practices, and supportive mental wellness workshops to help students tackle Class X and XII exams with high confidence.'
  },
  {
    q: 'Does the school provide JEE and NEET preparation?',
    a: 'Yes! We offer a completely integrated preparation program for engineering (JEE) and medical (NEET) entrance exams within the regular timetable, run by experienced guest faculty.'
  },
  {
    q: 'What streams are available in Class XI?',
    a: 'Students can choose from three comprehensive streams: Science (Medical & Non-Medical), Commerce (with or without Mathematics), and Humanities (Arts & Social Sciences).'
  },
  {
    q: 'How are practical subjects taught?',
    a: 'We emphasize 65% practical exploration. Laboratory sessions are conducted twice a week in our specialized chemistry, physics, biology, mathematics, and robotics labs.'
  },
  {
    q: 'What is the student-teacher ratio?',
    a: 'We maintain a highly beneficial 15:1 student-to-teacher ratio in early years and a 25:1 ratio in secondary classes to guarantee individual attention and customized feedback.'
  }
];

// --- STATS ANIMATION HOOK ---
function useAnimatedValue(targetValue: number, startAnimation: boolean, suffix: string = '') {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / targetValue));
    const timer = setInterval(() => {
      start += 1;
      if (start > targetValue) {
        setValue(targetValue);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, Math.max(stepTime, 20));

    return () => clearInterval(timer);
  }, [targetValue, startAnimation]);

  return value + suffix;
}

export default function AcademicsPage() {
  // --- STATE ---
  const [activeJourney, setActiveJourney] = useState<string>('early');
  const [activeStream, setActiveStream] = useState<string>('science');
  const [activeSpaceIndex, setActiveSpaceIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Dialog modal states
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showVisitModal, setShowVisitModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form states
  const [studentName, setStudentName] = useState('');
  const [targetGrade, setTargetGrade] = useState('Nursery');
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('10:00 AM');

  // Trigger stats on scroll
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current) return;
      const rect = statsRef.current.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (inView) {
        setStatsInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial trigger
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form submit handlers
  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setModalSuccess(true);
    }, 1200);
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setModalSuccess(true);
    }, 1200);
  };

  const resetModals = () => {
    setShowApplyModal(false);
    setShowVisitModal(false);
    setModalSuccess(false);
    setStudentName('');
    setParentName('');
    setParentPhone('');
    setParentEmail('');
    setVisitDate('');
  };

  // Stats Counters
  const participCounter = useAnimatedValue(100, statsInView, '%');
  const excelCounter = useAnimatedValue(95, statsInView, '%+');
  const yearsCounter = useAnimatedValue(25, statsInView, '+');

  return (
    <div id="academics-page-container" className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#0041f5]/20 selection:text-[#0041f5]">
      


      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#f6eada]/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0041f5]/10 rounded-full w-fit mb-6 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#0041f5]"></span>
                <span className="text-[11px] font-bold tracking-widest text-[#0041f5] uppercase">Academics</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-none mb-6"
              >
                Building Strong <br className="hidden sm:inline" />
                <span className="text-[#0041f5]">Foundations</span> <br />
                for Lifelong Success
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed"
              >
                At NIMT Beacon School, learning goes beyond textbooks. Our academic program helps students build knowledge, confidence, creativity, critical thinking, and strong values through engaging classroom experiences and practical learning.
              </motion.p>

            </div>

            {/* Right DSLR Image / Graphic Column */}
            <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full">
              
              {/* Backing decorative shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#f6eada]/50 rounded-full blur-3xl -z-10"></div>
              
              {/* Large DSLR classroom image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white"
              >
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
                  alt="Students actively learning with teacher guidance in a modern class"
                  fill
                  priority
                  className="object-cover transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Overlay gradient for image readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent"></div>
              </motion.div>

              {/* FLOATING BADGES/CARDS OVERLAY */}
              <div className="absolute -top-4 -left-4 sm:top-8 sm:-left-8 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 rounded-2xl shadow-xl border border-slate-100/60 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-[#0041f5]/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#0041f5]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">CBSE Curriculum</span>
                  <span className="block text-[10px] text-slate-400 font-medium">National Standard</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-2 sm:bottom-12 sm:-right-8 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 rounded-2xl shadow-xl border border-slate-100/60 flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 rounded-xl bg-[#0041f5]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#0041f5]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Experienced Faculty</span>
                  <span className="block text-[10px] text-slate-400 font-medium">Personalized Mentorship</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 hidden md:flex bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-slate-100/60 items-center gap-3 animate-bounce-slow" style={{ animationDelay: '3s' }}>
                <div className="w-10 h-10 rounded-xl bg-[#0041f5]/10 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-[#0041f5]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Smart Classrooms</span>
                  <span className="block text-[10px] text-slate-400 font-medium">Interactive Learning</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 sm:-left-12 sm:bottom-12 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 rounded-2xl shadow-xl border border-slate-100/60 flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '0.7s' }}>
                <div className="w-10 h-10 rounded-xl bg-[#0041f5]/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#0041f5]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Integrated Learning</span>
                  <span className="block text-[10px] text-slate-400 font-medium">JEE & NEET Prep</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: PHILOSOPHY --- */}
      <section id="philosophy" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left 65% Photo Dominance Area */}
            <div className="lg:col-span-7">
              <div className="relative h-[380px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200"
                  alt="High quality school campus building, bright day"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                
                {/*  quote overlays */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-xl max-w-md hidden sm:block">
                  <p className="text-slate-800 text-sm font-medium italic leading-relaxed">
                    &ldquo;We do not teach children what to think, but how to think critically, express confidently, and adapt beautifully.&rdquo;
                  </p>
                  <span className="block text-xs font-bold text-[#0041f5] mt-3 tracking-widest uppercase">Academic Dean</span>
                </div>
              </div>
            </div>

            {/* Right Column with Content */}
            <div className="lg:col-span-5">
              <span className="block text-[11px] font-bold tracking-widest text-[#0041f5] uppercase mb-3">OUR ACADEMIC PHILOSOPHY</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                Learning That Inspires Every Child
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We believe every child learns differently. Our teaching approach combines classroom learning, practical activities, technology, creativity, and personal guidance to help every student reach their full potential.
              </p>

              {/* Grid of 6 interactive feature cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Concept-Based', text: 'Deep structural clarity.' },
                  { title: 'Individual Attention', text: 'Tailored study paths.' },
                  { title: 'Practical Learning', text: 'Hands-on laboratory sessions.' },
                  { title: 'Creative Thinking', text: 'Unlocking original ideas.' },
                  { title: 'Character Building', text: 'Focusing on essential values.' },
                  { title: 'Digital Learning', text: 'Modern coding & tool literacy.' }
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50/60 border border-slate-100/80 hover:bg-[#f6eada]/40 hover:border-[#0041f5]/20 hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="block text-sm font-bold text-slate-900 mb-1 group-hover:text-[#0041f5] transition-colors">{feature.title}</span>
                    <span className="block text-xs text-slate-500 leading-snug">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ---  SENIOR SECONDARY STREAMS SECTION --- */}
      <section id="senior-streams-section" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[11px] font-bold tracking-widest text-[#0041f5] uppercase mb-3">SENIOR SECONDARY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Classes XI & XII Stream Choices</h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              We provide highly focused academic training in Science, Commerce, and Humanities. Our students are mentored by expert teachers to excel in board examinations and build a solid pathway for national and international colleges.
            </p>
          </div>

          {/* Stream Switcher */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto mb-12 p-1.5 bg-[#f6eada]/40 rounded-2xl border border-[#f6eada]/60">
            {STREAMS.map((stream) => (
              <button
                key={stream.id}
                onClick={() => setActiveStream(stream.id)}
                className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeStream === stream.id
                    ? 'bg-[#0041f5] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0041f5]'
                }`}
              >
                {stream.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Stream Display Block */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {STREAMS.map((stream) => {
                if (stream.id !== activeStream) return null;
                return (
                  <motion.div
                    key={stream.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                  >
                    {/* Stream Content */}
                    <div className="lg:col-span-6 text-left">
                      <span className="text-[11px] font-bold tracking-widest text-[#0041f5] uppercase block mb-1">Stream Spotlight</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">{stream.name}</h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">{stream.description}</p>
                      
                      {/* Subjects & Careers list */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div>
                          <span className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Core Subjects</span>
                          <div className="flex flex-wrap gap-2">
                            {stream.subjects.map((sub, sIdx) => (
                              <span key={sIdx} className="px-3 py-1.5 bg-white text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Career Pathways</span>
                          <div className="flex flex-wrap gap-2">
                            {stream.careers.map((career, cIdx) => (
                              <span key={cIdx} className="px-3 py-1.5 bg-[#0041f5]/5 text-[#0041f5] text-xs font-medium rounded-full border border-[#0041f5]/10">
                                {career}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Future opportunities */}
                      <div className="p-4 rounded-xl bg-[#f6eada]/40 border border-[#f6eada]/60 mb-6">
                        <span className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">Special Opportunities</span>
                        <p className="text-slate-600 text-xs leading-relaxed">{stream.opportunities}</p>
                      </div>

                      <button
                        onClick={() => setShowApplyModal(true)}
                        className="px-6 py-3 bg-[#0041f5] text-white hover:bg-[#0041f5]/90 text-xs font-bold rounded-full shadow-md shadow-[#0041f5]/15 flex items-center gap-2 transition-all"
                      >
                        Inquire for {stream.name}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                    </div>

                    {/* Stream DSLR Image Area (Double block layout) */}
                    <div className="lg:col-span-6 relative h-[280px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-200">
                      <Image
                        src={stream.image}
                        alt={stream.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* --- SECTION: INTEGRATED JEE & NEET PREPARATION --- */}
      <section id="jee-neet" className="py-20 lg:py-32 bg-[#f6eada]/20 border-y border-[#f6eada]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 text-left">
              <span className="inline-block text-[11px] font-bold tracking-widest text-[#0041f5] uppercase mb-3">COMPETITIVE EDGE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Integrated JEE & NEET Preparation
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm sm:text-base">
                Students preparing for engineering and medical careers receive additional academic support within the regular school schedule. Expert faculty, practice tests, doubt-solving sessions, and continuous guidance help students prepare confidently without depending entirely on external coaching.
              </p>

              {/* Grid feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Experienced Faculty', desc: 'Expert competitive trainers.' },
                  { title: 'Daily Practice Questions', desc: 'Sustained logic sharpening.' },
                  { title: 'Regular Mock Tests', desc: 'Detailed, timed mock testing.' },
                  { title: 'Doubt Clearing Sessions', desc: 'Resolved instantly with mentors.' },
                  { title: 'Performance Tracking', desc: 'Scientific data analytics.' },
                  { title: 'Career Mentoring', desc: 'Personal strategy mapping.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0041f5] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs sm:text-sm font-bold text-slate-900 mb-0.5">{item.title}</span>
                      <span className="block text-[11px] text-slate-500 leading-snug">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Large DSLR image */}
            <div className="lg:col-span-7">
              <div className="relative h-[400px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                  alt="High school students working closely together on problem solving"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Tag */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#0041f5] rounded-full animate-ping"></span>
                  <span className="text-xs font-bold text-slate-800">Regular Program Sync</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

     



      {/* --- SECTION: OUR TEACHERS --- */}
      <section id="teachers" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo column */}
            <div className="lg:col-span-6 relative h-[400px] sm:h-[550px] rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=1200"
                alt="Teacher smiling warmly while interacting in clean  classroom"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlay quote */}
              <div className="absolute inset-x-6 bottom-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-xl">
                <span className="block text-[#0041f5] text-xs font-bold uppercase tracking-wider mb-2">Our Educators</span>
                <h5 className="font-extrabold text-slate-900 text-base mb-1">Passionate, Highly Trained Mentors</h5>
                <p className="text-slate-500 text-xs leading-relaxed">Guiding every single student step-by-step with patient care, continuous assessment, and personal encouragement.</p>
              </div>
            </div>

            {/* Right details column */}
            <div className="lg:col-span-6 text-left">
              <span className="block text-[11px] font-bold tracking-widest text-[#0041f5] uppercase mb-3">OUR FACULTY</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Inspiring Mentors and Personal Attention
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Our experienced and dedicated teachers guide every child with care, patience, and personal attention. We build safe, stress-free environments where students feel validated, heard, and supported in their learning efforts.
              </p>

              {/* Highlights cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TEACHER_HIGHLIGHTS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100/60 hover:bg-[#f6eada]/30 hover:border-[#0041f5]/20 transition-all duration-300">
                    <span className="block text-sm font-bold text-slate-900 mb-1.5">{item.title}</span>
                    <span className="block text-xs text-slate-500 leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION: ACADEMIC RESULTS --- */}
      <section ref={statsRef} className="py-16 sm:py-24 bg-[#0041f5] text-white relative overflow-hidden">
        
        {/* Background visual graphics */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#f6eada]/5 -skew-x-12 origin-top-right"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#fffc4d]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="inline-block text-[11px] font-bold tracking-widest text-[#fffc4d] uppercase mb-3">REAL STATISTICS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Our Academic Milestones</h2>
            <p className="text-[#f6eada]/80 mt-4 leading-relaxed text-sm sm:text-base">
              A comprehensive view of active engagement, school consistency, and academic alignment at NIMT Beacon School over the years.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            
            <div className="p-4">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2">
                {statsInView ? participCounter : '0%'}
              </span>
              <span className="block text-xs sm:text-sm font-bold text-[#f6eada] uppercase tracking-wider">
                Student Participation
              </span>
              <span className="block text-[11px] text-white/60 mt-1">In Co-curriculars & Projects</span>
            </div>

            <div className="p-4">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-[#fffc4d] tracking-tight mb-2">
                {statsInView ? excelCounter : '0%'}
              </span>
              <span className="block text-xs sm:text-sm font-bold text-[#f6eada] uppercase tracking-wider">
                Academic Excellence
              </span>
              <span className="block text-[11px] text-white/60 mt-1">Sustained Progression Rate</span>
            </div>

            <div className="p-4">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2">
                {statsInView ? yearsCounter : '0'}
              </span>
              <span className="block text-xs sm:text-sm font-bold text-[#f6eada] uppercase tracking-wider">
                Years of Excellence
              </span>
              <span className="block text-[11px] text-white/60 mt-1">Foundational Educational Legacy</span>
            </div>

            <div className="p-4">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-[#fffc4d] tracking-tight mb-2">
                Thousands
              </span>
              <span className="block text-xs sm:text-sm font-bold text-[#f6eada] uppercase tracking-wider">
                Successful Alumni
              </span>
              <span className="block text-[11px] text-white/60 mt-1">Thriving in Great Institutions</span>
            </div>

          </div>

          {/* Sincere Warning Note block to align with design specs */}
          <p className="text-[10px] text-slate-200/50 mt-16 max-w-xl mx-auto italic">
            *Verification clause: Statistical indicators denote general classroom engagement, verified internal syllabus progression, and overall legacy calculations.
          </p>

        </div>
      </section>



    

  

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold tracking-widest text-[#0041f5] uppercase mb-3">COMMON INQUIRIES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500 mt-3 text-sm">
              Quick informational answers to clear common boarding and curriculum queries.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0041f5] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#0041f5]' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

  

      {/* ============================================== */}
      {/* --- INTERACTIVE MODAL: ADMISSION APPLICATION --- */}
      {/* ============================================== */}
      <AnimatePresence>
        {showApplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={resetModals}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50"
              >
                <X className="w-5 h-5" />
              </button>

              {!modalSuccess ? (
                <>
                  <div className="mb-6 text-left">
                    <span className="text-[10px] font-bold tracking-widest text-[#0041f5] uppercase block mb-1">Interactive Application</span>
                    <h3 className="text-2xl font-black text-slate-900">Apply for Admission</h3>
                    <p className="text-slate-500 text-sm mt-1">Submit basic details to receive customized counseling support and slot allocation.</p>
                  </div>

                  <form onSubmit={handleApplySubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Student&apos;s Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter child's name"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Target Class / Grade</label>
                        <select
                          value={targetGrade}
                          onChange={(e) => setTargetGrade(e.target.value)}
                          className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                        >
                          <option>Nursery</option>
                          <option>KG & Play School</option>
                          <option>Classes I–V</option>
                          <option>Classes VI–VIII</option>
                          <option>Classes IX–X</option>
                          <option>Class XI Science</option>
                          <option>Class XI Commerce</option>
                          <option>Class XI Humanities</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Parent&apos;s Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Parent name"
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Parent&apos;s Contact Mobile</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Parent&apos;s Email ID</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. parent@example.com"
                        value={parentEmail}
                        onChange={(e) => setParentEmail(e.target.value)}
                        className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full mt-6 py-4 bg-[#0041f5] text-white font-bold rounded-full shadow-lg shadow-[#0041f5]/20 hover:bg-[#0041f5]/90 transition-all duration-300 disabled:opacity-50"
                    >
                      {submitting ? 'Submitting Application...' : 'Submit Application Now'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#0041f5]/10 text-[#0041f5] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Application Received!</h3>
                  <p className="text-slate-500 text-sm mb-6 px-4">
                    Dear <strong>{parentName}</strong>, thank you for showing trust in NIMT Beacon. Your application for <strong>{studentName}</strong> (Grade: <strong>{targetGrade}</strong>) is stored. Our academic counselors will connect on <strong>{parentPhone}</strong> shortly.
                  </p>
                  <button
                    onClick={resetModals}
                    className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-all"
                  >
                    Done & Return
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================== */}
      {/* --- INTERACTIVE MODAL: CAMPUS VISIT BOOK --- */}
      {/* ========================================== */}
      <AnimatePresence>
        {showVisitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={resetModals}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50"
              >
                <X className="w-5 h-5" />
              </button>

              {!modalSuccess ? (
                <>
                  <div className="mb-6 text-left">
                    <span className="text-[10px] font-bold tracking-widest text-[#0041f5] uppercase block mb-1">Campus Coordinator</span>
                    <h3 className="text-2xl font-black text-slate-900">Book Campus Visit</h3>
                    <p className="text-slate-500 text-sm mt-1">Visit our high-end laboratories, physical library spaces, and witness students studying live.</p>
                  </div>

                  <form onSubmit={handleVisitSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Full Name (Parent)</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter parent's name"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Parent&apos;s Phone</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765"
                          value={parentPhone}
                          onChange={(e) => setParentPhone(e.target.value)}
                          className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Parent&apos;s Email</label>
                        <input
                          type="email"
                          required
                          placeholder="parent@example.com"
                          value={parentEmail}
                          onChange={(e) => setParentEmail(e.target.value)}
                          className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Preferred Visit Date</label>
                        <input
                          type="date"
                          required
                          value={visitDate}
                          onChange={(e) => setVisitDate(e.target.value)}
                          className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Preferred Timing slot</label>
                        <select
                          value={visitTime}
                          onChange={(e) => setVisitTime(e.target.value)}
                          className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                        >
                          <option>10:00 AM - 11:30 AM</option>
                          <option>12:00 PM - 01:30 PM</option>
                          <option>02:30 PM - 04:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Number of Visitors</label>
                      <input
                        type="number"
                        min="1"
                        max="5"
                        defaultValue="2"
                        className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0041f5]/20 focus:border-[#0041f5]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full mt-6 py-4 bg-[#0041f5] text-white font-bold rounded-full shadow-lg shadow-[#0041f5]/20 hover:bg-[#0041f5]/90 transition-all duration-300 disabled:opacity-50"
                    >
                      {submitting ? 'Scheduling Visit...' : 'Confirm Campus Visit'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#0041f5]/10 text-[#0041f5] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Tour Slot Booked!</h3>
                  <p className="text-slate-500 text-sm mb-6 px-4">
                    Dear <strong>{parentName}</strong>, we have registered your campus visit slot on <strong>{visitDate}</strong> around <strong>{visitTime}</strong>. A guide will wait at the main lobby of our Greater Noida Campus with visual directories.
                  </p>
                  <button
                    onClick={resetModals}
                    className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-all"
                  >
                    Done & Return
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
