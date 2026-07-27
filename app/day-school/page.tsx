'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Calendar,
  ChevronDown,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  ShieldCheck,
  Star,
  Users,
  Phone,
  Mail,
  Award,
  Compass,
  Brain,
  Sparkles,
  Clock,
  Shield,
  Activity,
  GraduationCap,
  Sparkle,
  ArrowRight,
  X,
  MapPin,
  CheckCircle2,
  Lock,
  Smartphone,
  Flame,
  Heart,
  Palette,
  Eye,
  Menu,
  HeartHandshake
} from 'lucide-react';

// ==========================================
// STATIC DATA FOR HIGH-END DSLR IMAGES & INFO
// ==========================================

const WHY_CHOOSE_CARDS = [
  {
    title: 'Academic Excellence',
    desc: 'An inquiry-based curriculum modeled on the finest international pedagogy, driving intellectual curiosity and academic rigor.',
    icon: GraduationCap,
  },
  {
    title: 'Personal Attention',
    desc: 'With a tight 1:12 teacher-student ratio, we map and support each child’s unique pace, interests, and developmental milestones.',
    icon: Users,
  },
  {
    title: 'Modern Smart Classrooms',
    desc: 'Fully air-conditioned spaces with interactive ultra-HD displays, dynamic ergonomic seating, and individual digital work zones.',
    icon: Sparkles,
  },
  {
    title: 'Sports & Activities',
    desc: 'State-of-the-art courts, specialized coaching across sports, visual arts, instrumental music, and theatre arts programs.',
    icon: Activity,
  },
  {
    title: 'Safe & Secure Campus',
    desc: 'Comprehensive multi-tier access control, active RFID child tracking, standard background-checked staff, and 24/7 on-campus medics.',
    icon: Shield,
  },
  {
    title: 'Character Building',
    desc: 'Our Core Values program integrates leadership, emotional intelligence, resilience, and global citizenship into daily routines.',
    icon: Heart,
  },
];

const TIMELINE_STEPS = [
  {
    time: '08:00 AM',
    title: 'Arrival & Morning Assembly',
    desc: 'Students are welcomed by name at our secure drop-off deck. The morning begins with physical wellness, a brief mindfulness session, and collaborative house announcements.',
    image: '/smart-classrooms.webp',
  },
  {
    time: '09:30 AM',
    title: 'Interactive Classroom Learning',
    desc: 'Core humanities and analytical sciences come alive. Teachers utilize interactive technology and collaborative tables, encouraging critical discourse and group debates.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
  },
  {
    time: '11:15 AM',
    title: 'STEM & Science Activities',
    desc: 'In our world-class labs, students design prototypes, code micro-controllers, and conduct hands-on chemical experiments, translating theory into active innovation.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0bd3a69d44?auto=format&fit=crop&q=80&w=800',
  },
  {
    time: '01:00 PM',
    title: 'Sports & Physical Education',
    desc: 'Under professional coaches, students train in tennis, soccer, basketball, or swimming, building resilience, strategic thinking, sportsmanship, and cardiorespiratory health.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
  },
  {
    time: '02:15 PM',
    title: 'Music, Dance & Art',
    desc: 'A dedicated block for creative expression. Students compose original musical arrangements, master classical/contemporary dance steps, or engage in sculpture and pottery.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=800',
  },
  {
    time: '03:30 PM',
    title: 'Safe Departure',
    desc: 'Our transport team facilitates structured boarding of GPS-monitored, female-staffed shuttle services, with immediate real-time departure logs sent directly to parents.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800',
  },
];

const ENVIRONMENT_GRID = [
  {
    title: 'Smart Classroom',
    desc: 'Designed with warm natural lighting, high-acoustic panelling, and  interactive displays.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'STEM Lab',
    desc: 'Equipped with 3D printers, laser cutters, advanced robotics kits, and design thinking zones.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Computer Lab',
    desc: 'Featuring top-tier iMac stations, fully licensed design software, and high-speed secure coding environments.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Library',
    desc: 'A sunlit double-height sanctuary cataloging over 20,000 resources, cozy reading pods, and research bays.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Language Lab',
    desc: 'State-of-the-art interactive audio bays specialized for mastering phonetics, linguistic range, and accents.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Activity Room',
    desc: 'An expansive creative suite for dynamic roleplay, motor skills development, and early sensory design.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
  },
];

const HOLISTIC_LIST = [
  {
    title: 'Leadership Skills',
    desc: 'Nurtured through structured peer councils, community outreach projects, and dedicated public speaking clubs.',
    icon: Compass,
  },
  {
    title: 'Creative Thinking',
    desc: 'Cross-disciplinary design sprints where children synthesize art, engineering, and logic to solve local issues.',
    icon: Brain,
  },
  {
    title: 'Communication Skills',
    desc: 'Mastery in debate, editorial writing, and multimedia presentations, helping children formulate precise, persuasive ideas.',
    icon: Sparkle,
  },
  {
    title: 'Confidence Building',
    desc: 'Annual stage-productions, presentation showcases, and athletic platforms that allow every student to rise and shine.',
    icon: Award,
  },
  {
    title: 'Teamwork',
    desc: 'Structured sports houses and robotics squads that teach constructive collaboration, shared victory, and collective learning.',
    icon: Users,
  },
  {
    title: 'Innovation',
    desc: 'Encouraging child-led business pitch days, technology hackathons, and creative prototyping in our Maker Spaces.',
    icon: Sparkles,
  },
];

const FACILITIES_CAROUSEL = [
  {
    title: 'Smart Classrooms',
    desc: 'Acoustically designed, highly engaging spaces with 4K touch displays and fully modular  tables.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Science Labs',
    desc: 'Cutting-edge safety features, high-precision equipment, and dedicated individual experimental tables for chemistry, physics, and biology.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Computer Labs',
    desc: 'Ergonomic layouts boasting individual modern terminals, dedicated artificial intelligence servers, and high-performance design software.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Digital Library',
    desc: 'Integrating Kindle research docks,  search systems, global research journals, and vast physical titles.',
    image: 'https://images.unsplash.com/photo-1491841573554-29d455140d6b?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Sports Complex',
    desc: 'Olympic-quality indoor courts, professional synthetic turf fields, athletic tracks, and physical development gyms.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Medical Room',
    desc: 'A clinical-grade facility managed full-time by a certified pediatrician and pediatric nurse, with an active ambulance on site.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: ' Cafeteria',
    desc: 'Bright, hygienic dining spaces offering nutritionist-vetted organic meals prepared fresh on-site with zero artificial additives.',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Hygienic Transport',
    desc: 'Vast fleet of GPS-equipped, air-conditioned luxury shuttles featuring complete CCTV, panic buttons, and verified female staff chaperones.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800',
  },
];

const SAFETY_FEATURES = [
  { title: 'GPS-enabled Transport', desc: 'Real-time vehicle coordinates, speed telemetry, and immediate geo-fencing alerts sent directly to parent smartphones.' },
  { title: 'CCTV Monitoring', desc: 'Continuous surveillance of all public corridors, playground exits, classroom clusters, and outer boundaries.' },
  { title: 'Female Staff Assistance', desc: 'Every class block and transport vehicle carries a dedicated, fully verified female chaperone to assist younger students.' },
  { title: 'Medical Support', desc: 'A fully stocked clinical-grade first-aid bay staffed by registered critical-care nurses is active during all hours.' },
  { title: 'Visitor Verification', desc: 'Strict multi-tier, digital check-in protocols requiring QR-authorization and live face scans for campus access.' },
  { title: 'Secure Campus', desc: 'Sealed parameters with professional guards trained in advanced safety drills and child management.' },
  { title: 'Emergency Response', desc: 'Comprehensive protocols designed with local law enforcement and major hospitals for instant medical triage.' },
];

const CO_CURRICULAR = [
  { title: 'Football', category: 'Athletics', image: '/campus.webp' },
  { title: 'Basketball', category: 'Athletics', image: '/campus.webp' },
  { title: 'Music', category: 'Arts & Expression', image: '/campus.webp' },
  { title: 'Dance', category: 'Arts & Expression', image: '/campus.webp' },
  { title: 'Art & Pottery', category: 'Arts & Expression', image: '/campus.webp' },
  { title: 'Public Speaking', category: 'Leadership', image: '/campus.webp' },
  { title: 'Yoga & Mindfulness', category: 'Wellness', image: '/campus.webp' },
  { title: 'Annual Events', category: 'Global Culture', image: '/campus.webp' },
  { title: 'Science Fair', category: 'Academic', image: '/campus.webp' },
  { title: 'Olympiads', category: 'Academic', image: '/campus.webp' },
];

const TESTIMONIALS = [
  {
    quote: "NIMT Beacon School has transformed our daughter's outlook on learning. The smart classrooms and focus on public speaking have given her immense confidence. It's truly world-class education.",
    author: "Dr. Aniruddh Sharma",
    role: "Parent of Tara Sharma (Grade VI)",
    rating: 5,
    avatar: "/campus.webp",
  },
  {
    quote: "We were looking for an international school that prioritized safety as much as academics. The high-tech campus, female chaperones, and GPS bus tracking provide absolute peace of mind.",
    author: "Priyanka Mehra",
    role: "Parent of Kabir Mehra (Grade IV)",
    rating: 5,
    avatar: "/campus.webp",
  },
  {
    quote: "The STEM and robotics programs are brilliant. The educators don't just teach from textbooks; they encourage hands-on modeling. My son loves going to school every single morning.",
    author: "Sanjay Sen",
    role: "Parent of Aarav Sen (Grade VIII)",
    rating: 5,
    avatar: "/campus.webp",
  },
];

const MASONRY_GALLERY = [
  { title: 'Children smiling in smart class', category: 'Students', image: '/campus.webp' },
  { title: 'Teacher guiding individual student', category: 'Guidance', image: '/campus.webp' },
  { title: 'Advanced chemistry laboratory trial', category: 'Laboratories', image: '/campus.webp' },
  { title: 'Bright digital library room', category: 'Library', image: '/campus.webp' },
  { title: 'Children training on track fields', category: 'Sports', image: '/campus.webp' },
  { title: 'Morning assembly campus greenery', category: 'Campus Assembly', image: '/campus.webp' },
  { title: 'Students coding inside iMac room', category: 'Computer Lab', image: '/campus.webp' },
  { title: 'Spacious collaborative smart rooms', category: 'Classrooms', image: '/campus.webp' },
  { title: 'Annual science exhibition presentation', category: 'Events', image: '/campus.webp' },
];

const DAY_SCHOOL_ADVANTAGES = [
  '✓ Personal attention with 1:12 teacher ratio',
  '✓ Modern classrooms with 4K touch displays',
  '✓ Safe campus with digital visitor tracking',
  '✓ Academic mentoring & personalized plans',
  '✓  Sports facilities (Tennis, Swimming, Soccer)',
  '✓ Rich Fine Arts, Music & Theatre curriculum',
  '✓ Technology integration with iMac coding & STEM',
  '✓ Tailored career guidance from Grade IX',
];

const TYPICAL_SCHOOLS = [
  '✗ High teacher-student ratios (1:40)',
  '✗ Blackboard-centric classrooms',
  '✗ Basic manual visitor books',
  '✗ Rigid, non-personalized plans',
  '✗ Limited playing fields',
  '✗ Arts treated as side periods',
  '✗ Basic computer literacy focus',
  '✗ generic counsel at graduation',
];

const FAQ_LIST = [
  {
    q: 'What are the transportation routes and tracking safety measures?',
    a: 'We operate a comprehensive fleet of air-conditioned luxury shuttles across major residential sectors. Every bus features GPS real-time tracking, dual-facing cameras, verified speed limiters, automated geofence entry/exit messages, and is mandatorily chaperoned by a verified female staff member.',
  },
  {
    q: 'What are the school timings for the Day School Program?',
    a: 'Our  Day School program runs from 08:00 AM to 03:30 PM. This extended window enables a harmonious integration of academic coursework, active STEM labs, athletic coaching, and creative arts without requiring children to carry heavy bags or pursue external tutoring.',
  },
  {
    q: 'Are  organic meals served at the school?',
    a: 'Yes. Our on-site, clinical-grade kitchen prepares fresh, organic breakfast, healthy mid-day fruits, and a multi-cuisine hot buffet lunch. The entire cycle is planned and supervised by in-house clinical nutritionists, prioritizing balanced macronutrients with zero artificial preservatives or trans-fats.',
  },
  {
    q: 'How does the school ensure medical safety and emergency response?',
    a: 'The school features an on-campus modern medical bay managed full-time by licensed clinical nursing staff. We maintain immediate emergency arrangements with premier regional hospitals, and our custom school ambulance remains stationed on campus during all operational hours.',
  },
  {
    q: 'What is the standard admission process and fee structure?',
    a: 'Admissions begin with an online booking for a personal campus visit. Following interaction with our admissions counselor and a basic assessment of student readiness, confirmation is processed. We maintain transparent fees with fully inclusive sports, meals, labs, and textbooks included.',
  },
  {
    q: 'Which board curriculum does the school follow?',
    a: 'We follow a state-of-the-art inquiry-based international framework modeled on finest modern pedagogies, deeply integrated with academic milestones to prepare children for both top international universities and competitive examinations like JEE, NEET, and CLAT.',
  },
];

export default function DaySchoolLandingPage() {
  // Navigation & Interactive states
  const [activeDayStep, setActiveDayStep] = React.useState(0);
  const [activeFacility, setActiveFacility] = React.useState(0);
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [activeFAQ, setActiveFAQ] = React.useState<number | null>(null);

  // Forms Modals
  const [isVisitModalOpen, setIsVisitModalOpen] = React.useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = React.useState(false);
  const [isProspectusDownloaded, setIsProspectusDownloaded] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Form Inputs State
  const [visitForm, setVisitForm] = React.useState({ name: '', email: '', phone: '', grade: 'Grade I', date: '' });
  const [applyForm, setApplyForm] = React.useState({ studentName: '', parentName: '', email: '', phone: '', grade: 'Grade I', previousSchool: '' });
  const [formSuccessMessage, setFormSuccessMessage] = React.useState('');

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccessMessage(`Thank you, ${visitForm.name}! Your campus visit is scheduled for ${visitForm.date}. Our admissions officer will contact you shortly at ${visitForm.phone}.`);
    setVisitForm({ name: '', email: '', phone: '', grade: 'Grade I', date: '' });
    setTimeout(() => {
      setFormSuccessMessage('');
      setIsVisitModalOpen(false);
    }, 5000);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccessMessage(`Application for ${applyForm.studentName} has been submitted successfully! An admission package and assessment details have been dispatched to ${applyForm.email}.`);
    setApplyForm({ studentName: '', parentName: '', email: '', phone: '', grade: 'Grade I', previousSchool: '' });
    setTimeout(() => {
      setFormSuccessMessage('');
      setIsApplyModalOpen(false);
    }, 5000);
  };

  const handleDownloadProspectus = () => {
    setIsProspectusDownloaded(true);
    setTimeout(() => {
      setIsProspectusDownloaded(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen selection:bg-blue-600 selection:text-white">
      
 <section id="hero" className="relative pt-16 pb-20 lg:pt-28 lg:pb-32 bg-gradient-to-b from-blue-50/40 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/60 text-[#0041f5] text-xs font-bold tracking-wider uppercase mb-6">
              <Sparkle className="w-3.5 h-3.5 fill-[#0041f5]" />
              Day School Program
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Where Every School Day Inspires <span className="text-[#0041f5]">Learning</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our Day School combines academic excellence, caring teachers, modern classrooms, sports, arts, and holistic development in a safe, nurturing environment where children grow with confidence every day.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-cta-visit"
                onClick={() => setIsVisitModalOpen(true)}
                className="bg-[#0041f5] hover:bg-blue-600 text-white font-bold px-8 py-4.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Campus Visit
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-cta-prospectus"
                onClick={handleDownloadProspectus}
                className="border border-slate-200 hover:border-[#0041f5] text-slate-800 hover:text-[#0041f5] font-bold px-8 py-4.5 rounded-full bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                {isProspectusDownloaded ? 'Downloaded ✓' : 'Download Prospectus'}
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="mt-12 flex items-center gap-6 text-slate-500 text-xs font-semibold">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0041f5] stroke-[3]" />
                Nursery to Class XII
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0041f5] stroke-[3]" />
                Interactive Boarding Feel
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0041f5] stroke-[3]" />
                Delhi NCR Campus
              </span>
            </div>
          </div>

          {/* Right Column Interactive Floating Cards Image */}
          {/* Added lg:pt-6 here to cleanly push the container down relative to the grid wrapper */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end lg:pt-6">
            <div className="relative w-full max-w-[520px] aspect-[5/4] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="/campus.webp"
                alt="NIMT Beacon School students smiling and arriving at school happily"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Card 1: Academic Excellence */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-12 -left-6 md:-left-12 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-slate-100 max-w-[210px]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#0041f5]">
                  <GraduationCap className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 leading-tight">Academic Excellence</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Inquiry-Based Learning</p>
                </div>
              </motion.div>

              {/* Floating Card 2: Safe Campus */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-16 -left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-slate-100 max-w-[190px]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f6eada] flex items-center justify-center text-amber-700">
                  <ShieldCheck className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 leading-tight">Safe Campus</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">24/7 Smart Guarding</p>
                </div>
              </motion.div>

              {/* Floating Card 3: Experienced Faculty */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-28 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-slate-100 max-w-[210px]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Users className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 leading-tight">Experienced Faculty</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">1:12 Mentorship Ratio</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
 
      {/* ==========================================
          3. A DAY AT NIMT (TIMELINE SECTION)
          ========================================== */}
      <section id="day-at-nimt" className="py-20 lg:py-32 bg-[#fdfbf7] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0041f5] block mb-3">
              Daily Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Day at NIMT
            </h2>
            <p className="text-slate-600 mt-4">
              Explore how our curated timeline inspires collaboration, curiosity, play, and security from morning arrival to evening departure.
            </p>
          </div>

          {/* Interactive Timeline Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TIMELINE_STEPS.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDayStep(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 ${
                  activeDayStep === idx
                    ? 'bg-[#0041f5] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0041f5] hover:text-[#0041f5]'
                }`}
              >
                {step.time} - {step.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Detailed Timeline View Container */}
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDayStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image side */}
                <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[300px] lg:min-h-[460px] bg-slate-50">
                  <Image
                    src={TIMELINE_STEPS[activeDayStep].image}
                    alt={TIMELINE_STEPS[activeDayStep].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute top-6 left-6 bg-[#0041f5] text-white text-xs font-extrabold px-3 py-1.5 rounded-full">
                    {TIMELINE_STEPS[activeDayStep].time}
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <span className="text-[#0041f5] font-extrabold text-sm tracking-wider uppercase mb-2 block">
                    Routine Block
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    {TIMELINE_STEPS[activeDayStep].title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {TIMELINE_STEPS[activeDayStep].desc}
                  </p>
                  
                  {/* Small Info Badges */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100 text-xs text-slate-500 font-bold">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      Pedagogical Focus
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span>Holistic Development Block</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. SMART LEARNING ENVIRONMENT (GRID GALLERY)


      {/* ==========================================
          5. HOLISTIC DEVELOPMENT (SPLIT SECTION)
          ========================================== */}
      <section id="holistic" className="py-20 lg:py-32 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Big Beautiful Action Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="/campus.webp"
                  alt="Children smiling on sports field playing football and engineering activities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle2 className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">100% Comprehensive Profile</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">Physical, emotional, and technical readiness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Title + 6 Core Development Cards */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0041f5] block mb-3">
                Character & Competence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Holistic Development Framework
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-10">
                NIMT Day School is not just about academic rankings. We intentionally cultivate six distinct capabilities that transform students from learners into visionary leaders.
              </p>

              {/* Grid of 6 competencies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {HOLISTIC_LIST.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#0041f5] flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="advantages" className="py-20 lg:py-32 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0041f5] block mb-3">
              The Standard Defined
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Day School Advantages
            </h2>
            <p className="text-slate-600 mt-4 text-sm sm:text-base">
              See the difference in child outcome when compared with local traditional formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* NIMT Day School Card */}
            <div className="bg-white p-8 rounded-3xl border border-[#0041f5]/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#0041f5] text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-2xl">
                The  Choice
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#0041f5] flex items-center justify-center font-bold">N</span>
                NIMT Day School
              </h3>
              
              <ul className="space-y-4">
                {DAY_SCHOOL_ADVANTAGES.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-slate-700 text-sm font-semibold">
                    <span className="text-emerald-600 shrink-0 select-none font-bold">✓</span>
                    <span>{adv.substring(2)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical Day School Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md">
              <h3 className="text-xl font-extrabold text-slate-500 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center font-bold">✗</span>
                Typical Day Schools
              </h3>
              
              <ul className="space-y-4">
                {TYPICAL_SCHOOLS.map((ty, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-slate-400 text-sm font-medium">
                    <span className="text-rose-500 shrink-0 select-none font-bold">✗</span>
                    <span>{ty.substring(2)}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          12. CALL TO ACTION (BLUE GRADIENT SECTION)
          ========================================== */}
      <section id="cta-enroll" className="py-20 lg:py-32 bg-gradient-to-r from-blue-700 via-[#0041f5] to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.04] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200 block mb-3">
            Enrollment Open 2026-27
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Give Your Child the Best Learning Experience
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Admissions are now open from Nursery to Class XII. Schedule a campus visit or begin your enrollment application today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsVisitModalOpen(true)}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0041f5] font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Campus Visit
            </button>
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 border border-blue-400/40 text-white font-extrabold px-8 py-4 rounded-full transition-all duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          13. FAQ (ACCORDION SECTION)
          ========================================== */}
      <section id="faq" className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0041f5] block mb-3">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-4 text-sm sm:text-base">
              Have specific queries regarding food allergens, safety cameras, transport pick-ups, or assessment criteria? Find your answers below.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center bg-[#fdfbf7]/40 hover:bg-[#fdfbf7]/80 transition-colors gap-4"
                  >
                    <span className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <span className={`w-6 h-6 rounded-full bg-white text-slate-500 border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white"
                      >
                        <div className="p-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ==========================================
          FOOTER COPYRIGHT & DISCLOSURES
          ========================================== */}

      {/* ==========================================
          MODAL: BOOK CAMPUS VISIT
          ========================================== */}
      <AnimatePresence>
        {isVisitModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVisitModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white rounded-3xl w-full max-w-lg p-8 shadow-2xl border border-slate-100 overflow-hidden z-10"
            >
              <button
                onClick={() => setIsVisitModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[#0041f5]" />
                Book Campus Visit
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Tour our modern STEM labs, smart classrooms, athletic centers, and meet the Principal in person.
              </p>

              {formSuccessMessage ? (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl border border-emerald-100 flex gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>{formSuccessMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleVisitSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Parent Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={visitForm.name}
                      onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. name@domain.com"
                        value={visitForm.email}
                        onChange={(e) => setVisitForm({ ...visitForm, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Contact Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={visitForm.phone}
                        onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Intended Grade</label>
                      <select
                        value={visitForm.grade}
                        onChange={(e) => setVisitForm({ ...visitForm, grade: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                      >
                        <option>Nursery / KG</option>
                        <option>Grade I - V</option>
                        <option>Grade VI - VIII</option>
                        <option>Grade IX - XII</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Preferred Visit Date</label>
                      <input
                        type="date"
                        required
                        value={visitForm.date}
                        onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0041f5] hover:bg-blue-600 text-white font-extrabold py-4 rounded-xl shadow-md transition-all mt-6 text-sm"
                  >
                    Confirm Visit Schedule
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==========================================
          MODAL: APPLY NOW FORM
          ========================================== */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white rounded-3xl w-full max-w-lg p-8 shadow-2xl border border-slate-100 overflow-hidden z-10"
            >
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#0041f5]" />
                Online Admission Application
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Complete our digital intake profile below. No immediate fees apply during pre-registration.
              </p>

              {formSuccessMessage ? (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl border border-emerald-100 flex gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>{formSuccessMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Child&apos;s Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={applyForm.studentName}
                      onChange={(e) => setApplyForm({ ...applyForm, studentName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Parent / Guardian Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={applyForm.parentName}
                        onChange={(e) => setApplyForm({ ...applyForm, parentName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Seeking Admission Grade</label>
                      <select
                        value={applyForm.grade}
                        onChange={(e) => setApplyForm({ ...applyForm, grade: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                      >
                        <option>Nursery / KG</option>
                        <option>Grade I - V</option>
                        <option>Grade VI - VIII</option>
                        <option>Grade IX - XII</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={applyForm.email}
                        onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Contact Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={applyForm.phone}
                        onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Previous School Attended (If Any)</label>
                    <input
                      type="text"
                      placeholder="e.g. Modern Elementary, New Delhi"
                      value={applyForm.previousSchool}
                      onChange={(e) => setApplyForm({ ...applyForm, previousSchool: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0041f5] focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0041f5] hover:bg-blue-600 text-white font-extrabold py-4 rounded-xl shadow-md transition-all mt-6 text-sm"
                  >
                    Submit Pre-Registration Application
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==========================================
          STICKY BOTTOM CONTACT / VISIT FLOATER
          ========================================== */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2">
        <button
          onClick={() => setIsVisitModalOpen(true)}
          className="bg-[#0041f5] hover:bg-blue-600 text-white text-xs font-extrabold tracking-wide uppercase px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-all border border-blue-400/20"
        >
          <Calendar className="w-4 h-4" />
          Visit Campus
        </button>
      </div>

    </div>
  );
}
