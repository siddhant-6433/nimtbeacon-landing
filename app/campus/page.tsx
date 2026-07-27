"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  Search,
  BookOpen,
  Compass,
  Award,
  ShieldCheck,
  Calendar,
  Clock,
  ArrowRight,
  X,
  ChevronDown,
  ChevronRight,
  Heart,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Users,
  Eye,
  CheckCircle,
  FileText,
  Video,
  Play,
  ArrowLeft,
  ChevronLeft,
  QrCode,
  Download,
  Flame,
  Dribbble,
  Book,
  Laptop,
  GraduationCap
} from "lucide-react";
import Image from "next/image";

// Types
interface Facility {
  id: string;
  title: string;
  category: "academics" | "tech" | "sports" | "arts" | "services";
  image: string;
  details: string;
  features: string[];
}

// Data Sets
const FACILITIES: Facility[] = [
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    category: "academics",
    image: "/smart-classrooms.webp",
    details: "Our smart classrooms are at the heart of our progressive curriculum. They are outfitted with interactive multi-touch LED panels, 4K digital teaching systems, high-speed Wi-Fi, and modular ergonomic furniture designed to easily transition between lecture formats and collaborative group configurations.",
    features: ["Interactive 4K LED Smartboards", "Modular, collaborative seating systems", "Dual-band high-speed student Wi-Fi", "Integrated audio-visual recording systems"]
  },
  {
    id: "science-lab",
    title: "Science Laboratory",
    category: "academics",
    image: "/science-lab.webp",
    details: "We house individual, state-of-the-art laboratory bays for Physics, Chemistry, and Biology. Each lab is designed with absolute student safety in mind, featuring custom emergency ventilation hoods, high-precision equipment (including computerized microscopes and digital sensors), and dedicated workstations.",
    features: ["Fully integrated safety ventilation hoods", " German optical & digital microscopes", "1:1 student-to-apparatus availability", "On-hand professional lab assistants"]
  },
  {
    id: "robotics-ai-lab",
    title: "Robotics & AI Lab",
    category: "tech",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    details: "A workspace built for future tech pioneers. The Robotics and AI lab encourages project-based learning. It is fully stocked with Arduino, Raspberry Pi, and LEGO Mindstorms kits, plus industrial-grade 3D printers, soldering stations, and powerful graphics computers for programming neural networks and modeling robotics.",
    features: [" 3D printers and laser cutters", "Arduino & Raspberry Pi prototyping kits", "High-performance GPU coding workstations", "Hands-on engineering toolkits"]
  },
  {
    id: "computer-lab",
    title: "Computer Laboratory",
    category: "tech",
    image: "/Computer-lab.jpg",
    details: "The high-tech computer lab is configured to support software engineering, graphic arts, digital writing, and general academic research. Every workstation is equipped with industry-standard software packages from Adobe Creative Cloud to modern programming environments.",
    features: ["1:1 student-to-computer ratio", "Adobe Creative Suite & development compilers", "Fiber-optic gigabit high-speed internet", "Clean, climate-controlled layout"]
  },
  {
    id: "mathematics-lab",
    title: "Chemistry  Laboratory",
    category: "academics",
    image: "/Chemistry.jpg",
    details: "The Math Lab transforms equations and abstract theorems into tactile, visible experiments. Using mathematical games, geometrical modeling kits, puzzles, and interactive computer visualization software, students experience the logic and beauty of math dynamically.",
    features: ["Physical 3D geometric models", "Interactive algebraic visualization software", "Mathematical brain-teasers & logic kits", "Collaborative problem-solving spaces"]
  },
  {
    id: "language-lab",
    title: "Biology Laboratory",
    category: "academics",
    image: "/Biology.jpg",
    details: "To cultivate multi-lingual global citizens, our Language Lab offers advanced speech-interactive systems. Students utilize  headsets and voice-recording software to practice accent training, phonetics, and speech synthesis in French, Spanish, German, Mandarin, and Sanskrit.",
    features: ["High-fidelity digital headset stations", "Acoustic-treated sound dampening panels", "AI-assisted pronunciation & phonetic coaches", "Multi-lingual digital study library"]
  },
  {
    id: "library",
    title: "Learning Resource Library",
    category: "academics",
    image: "/library-1.jpg",
    details: "Spanning a massive sunlit wing of the campus, the library houses over 25,000 physical volumes, comfortable ergonomic reading pods, and an expansive computer terminal area. It connects students directly to world-class online academic libraries and digital databases for holistic research.",
    features: ["Over 25,000 physical titles & international journals", "Quiet personal study pods & research carrels", "Integrated digital terminal research bank", "Dedicated team of professional librarians"]
  },
  {
    id: "astronomy-space-lab",
    title: "Group Discussion",
    category: "academics",
    image: "/group-discussion.webp",
    details: "Our Astronomy Lab is an inspirational facility that features professional-grade computer-controlled telescopes, digital planetarium simulators, and detailed physical models of our solar system. Regular night-sky viewing camps are organized here.",
    features: ["Professional motor-driven tracking telescopes", "Digital planetarium sphere projection", "Atmospheric and astrophysics software", "Weekly cosmic star-gazing sessions"]
  },
  {
    id: "stem-lab",
    title: "Athletic Meet",
    category: "sports",
    image: "/athletic-meet.webp",
    details: "An inspiring makerspace designed around the principles of STEM. Here, theoretical concepts from Science and Math are combined with Engineering and Tech to build real-world physical solutions, encouraging collaborative problem-solving and rapid prototyping.",
    features: ["Advanced CAD design stations", "Pneumatic, woodworking, & molding units", "Design-thinking brainstorming boards", "Annual school STEM & Innovation fairs"]
  },
  {
    id: "shooting-range",
    title: "Indoor Shooting Range",
    category: "sports",
    image: "/Indoor.webp",
    details: "Our Olympic-standard 10-meter indoor shooting range is designed to foster mental focus, breathing control, and poise. It features automatic pulley targets and is supervised by state-certified shooting instructors maintaining a zero-accident record.",
    features: ["Olympic-standard 10m target lines", "Automatic electronic target retrieval", "Specialized air rifles and sound protective gear", "Strict one-on-one professional coaching"]
  },
  {
    id: "sports-academy",
    title: "Sports Academy Complex",
    category: "sports",
    image: "/sports.webp",
    details: "Physical fitness is critical to personality. Our extensive multi-sports complex features professional turf football fields, wooden basketball courts, full cricket pitches, badminton halls, and a safety-monitored swimming pool, all coached by NIS-certified professionals.",
    features: ["Professional grass football and cricket fields", "Polished indoor wooden basketball courts", "Fitted indoor badminton & gymnastics courts", "State-certified, NIS-trained fitness coaches"]
  },
  {
    id: "music-room",
    title: "Music Room",
    category: "arts",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80",
    details: "Our custom sound-insulated music studio provides students with hands-on training in western, fusion, and Indian classical genres. It features acoustic guitars, electronic keyboards, violin banks, synthesizers, and classical instruments like Sitar and Tabla.",
    features: ["Professional-grade sound insulation", "Guitars, keyboards, violin, and percussion bank", "Vocal audio recording & editing setup", "Preparation for global music certification exams"]
  },
  {
    id: "dance-studio",
    title: "Dance Studio",
    category: "arts",
    image: "/dance-studio.webp",
    details: "A spacious dance studio outfitted with professional floor-to-ceiling mirror arrays,  sound systems, and shock-absorbent wooden spring floors designed to prevent joint fatigue during intense rehearsals.",
    features: [" spring-loaded wooden flooring", "Full wall high-definition mirror installations", "Dedicated classical (Kathak, Bharatnatyam) mentors", "Sleek contemporary and hip-hop coaches"]
  },
  {
    id: "arts-studio",
    title: "Fun art & Craft Activity",
    category: "arts",
    image: "/arts-studio.webp",
    details: "Our sunlit Fine Arts Studio is a vibrant sanctuary where creativity flourishes. Armed with painting easels, pottery wheels, clay ovens, and digital drawing tablets, students express their artistic visions under fine-arts masters.",
    features: ["Sunlit drawing & oil-painting easels", "Mechanical pottery wheels & baking kilns", "Abundant  quality painting supplies", "Exhibition lobby displaying student work"]
  },
  {
    id: "auditorium",
    title: "Grand Auditorium",
    category: "arts",
    image: "/Auditorium.webp",
    details: "Our centralized school auditorium is a  structure seating over 800 audience members. It features state-of-the-art acoustics, Dolby digital surround sound, motorized theatrical curtains, and a highly advanced overhead LED lighting grid.",
    features: ["Air-conditioned 800+  seating space", "State-of-the-art acoustic wall panels", "Motorized theater stage and LED lighting setup", "Full backstage green rooms & tech control center"]
  },
  {
    id: "medical-room",
    title: "Medical Room",
    category: "services",
    image: "/Medical-Room.webp",
    details: "The health of our students is of paramount importance. Our medical room is staffed by two registered pediatric nurses and features modern diagnostic apparatus, emergency oxygen tanks, quiet rest beds, and is linked to local tier-1 hospitals with an emergency ambulance standby.",
    features: ["Full-time registered pediatric nurses", "Fully equipped emergency recovery beds", "Regular physical checkups and health records", "Instant parent notification SMS systems"]
  },
  {
    id: "counselling-centre",
    title: "Counselling Centre",
    category: "services",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    details: "A peaceful private suite designed to provide warmth and psychological comfort. Our certified student counselors offer personal development guidance, stress-coping strategies, peer-relation counseling, and world-class college admissions preparation.",
    features: ["Certified resident child psychologists", "Private, cozy consultation cabins", "Structured college guidance and career fairs", "Mindfulness and exam-anxiety relief workshops"]
  },
  {
    id: "dining-hall",
    title: "Hygienic Dining Hall",
    category: "services",
    image: "/dining-hall.webp",
    details: "Our modern, stainless-steel kitchen and massive dining hall serve nutritious, chef-prepared, balanced multi-cuisine vegetarian meals daily. Menu layouts are crafted by leading pediatric nutritionists to boost cognitive and physical energy levels.",
    features: ["Dietitian-approved organic vegetarian menus", "Stainless-steel automated sterilization kitchen", "Purified RO water dispensers", "Spacious, spotless communal eating benches"]
  },
  {
    id: "transport",
    title: "Safe Transport",
    category: "services",
    image: "/bus.webp",
    details: "We operate a  fleet of comfortable, air-conditioned school buses. Each bus is secured with live GPS tracking systems, automated speed limiters, onboard CCTV, and is accompanied by a female conductor and certified security guard.",
    features: ["Real-time GPS tracking for parents", "Speed-governors and dual security cameras", "Female transport conductors on all routes", "Trained, background-verified bus drivers"]
  },
  {
    id: "hostel-facilities",
    title: " Boarding Hostel",
    category: "services",
    image: "/hostel.webp",
    details: "Offering  residential quarters with separate air-conditioned wings for boys and girls. Our boarders enjoy spacious study desks, recreational gaming rooms, home-theater zones, laundry services, and supportive guidance from residential house parents.",
    features: ["Separate air-conditioned boys & girls wings", "Resident house parents and tutors", "Nutritional custom meal plans", "Weekend outdoor excursions and sports"]
  },
  {
    id: "kids-play-zone",
    title: "Kids Play Zone",
    category: "services",
    image: "/Arts.webp",
    details: "Designed with modern European safety materials, this zone lets our kindergarteners and primary kids run, jump, and play. Features  slides, climbing setups, and activity walls built on rubberized soft-fall lawns.",
    features: ["Impact-absorbing soft rubber flooring", "Non-toxic organic plastic play machinery", "Fenced, high-visibility layout", "Constant trained female play assistants"]
  },
  {
    id: "campus-garden",
    title: "Footwall Ground",
    category: "sports",
    image: "/Football.webp",
    details: "Spotted with ancient shade-giving trees, botanical herb layouts, and dynamic seating, our lush green landscaping keeps the campus oxygen-rich, tranquil, and beautiful, serving as an ideal outdoor study space.",
    features: ["Curation of 100+ native organic plant varieties", "Quiet shaded seating clusters for reading", "Durable paved eco-jogging tracks", "Active organic waste composting unit"]
  },
  {
    id: "reception",
    title: "Junior Champs Playground",
    category: "sports",
    image: "/junior-champs.webp",
    details: "The gateway to NIMT Beacon School. Our elegant administrative welcome deck is staffed by friendly, professional education coordinators ready to help parents, alumni, and visitors navigate inquiries effortlessly.",
    features: ["Aesthetic, quiet lobby lounges", "Interactive visitor kiosks", "Parent relation coordinators", "Digital school showcase panels"]
  }
];

// Sports academy disciplines
const SPORTS_DISCIPLINES = [
  { name: "Football", icon: "⚽", desc: "FIFA-standard turf pitch, professional tournament coaching, regular leagues.", bg: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80" },
  { name: "Basketball", icon: "🏀", desc: "FIBA-certified maple wood indoor court with high-impact safety paddings.", bg: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80" },
  { name: "Cricket", icon: "🏏", desc: "Professional turf cricket pitches, mechanical bowling nets, expert batsman clinics.", bg: "https://images.unsplash.com/photo-1531415080290-bc98545ab2ef?auto=format&fit=crop&w=600&q=80" },
  { name: "Volleyball", icon: "🏐", desc: "Outdoor sand court & indoor hardcourt facilities with professional net systems.", bg: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80" },
  { name: "Badminton", icon: "🏸", desc: "Four synthetic multi-layer shock absorber courts in our sports complex.", bg: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80" },
  { name: "Athletics", icon: "🏃", desc: "8-lane standard synthetic athletic track, specialized jumping and throwing pits.", bg: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80" },
  { name: "Yoga & Mindfulness", icon: "🧘", desc: "Scented wooden-floor meditation zen center for breathing, flexibility, and poise.", bg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80" },
  { name: "Gymnastics", icon: "🤸", desc: " gymnastic foam pits, balance beams, parallel bars, and certified spotting rings.", bg: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
  { name: "Swimming Pool", icon: "🏊", desc: "Semi-Olympic sized temperature-controlled 6-lane pool with dual-stage filter.", bg: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80" }
];

// Pinterest Gallery Images
const GALLERY_ITEMS = [
  { id: 1, tag: "Science Lab", title: "Chemistry Experiments", src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" },
  { id: 2, tag: "Library", title: "Peaceful Research Hub", src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80" },
  { id: 3, tag: "Computer Lab", title: "Coding Bootcamp Workspace", src: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=800&q=80" },
  { id: 4, tag: "Football", title: "Inter-School Football Champions", src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80" },
  { id: 5, tag: "Basketball", title: "Dribble & Shoot Competitions", src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80" },
  { id: 6, tag: "Students studying", title: "Peer-to-Peer Group Seminars", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" },
  { id: 7, tag: "Teachers teaching", title: "Creative & Inspired Pedagogy", src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80" },
  { id: 8, tag: "Music room", title: "Symphony & Acoustic Recitals", src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80" },
  { id: 9, tag: "Dance room", title: "Rhythm & Expression Rehearsals", src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
  { id: 10, tag: "Art room", title: "Canvas Painting Studio", src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80" },
  { id: 11, tag: "Campus", title: "Sunlit Main Administrative Block", src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" },
  { id: 12, tag: "Gardens", title: "Botanical Nature Study Space", src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
  { id: 13, tag: "Smart classrooms", title: "Smartboard Collaborative Sessions", src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80" },
  { id: 14, tag: "Hostel", title: "Cozy Modern Residential Bunks", src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80" },
  { id: 15, tag: "Dining Hall", title: "Organic Nutritional Kitchen", src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" },
  { id: 16, tag: "Robotics", title: "AI Models & Microprocessor Coding", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" },
  { id: 17, tag: "Shooting range", title: "Poise, Breathing & Pistol Targets", src: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80" }
];

// Stands out items
const STANDS_OUT_ITEMS = [
  { title: "Modern Infrastructure", icon: Compass, desc: "Architecturally spectacular classrooms, labs, and halls built for optimal acoustics, ventilation, and engagement." },
  { title: "Safe Environment", icon: ShieldCheck, desc: "24/7 security control setups, verified entries, AI smart CCTV feeds, and on-call medical centers." },
  { title: "Technology Enabled", icon: Laptop, desc: "Interactive smartboards, robotic units, specialized software, and gigabit fiber coverage everywhere." },
  { title: "Experienced Faculty", icon: GraduationCap, desc: "Renowned subject experts, physical coaches, and creative art mentors with deep pediatric empathy." },
  { title: "Beautiful Green Campus", icon: LeafIcon, desc: "Eco-conscious oxygen-rich campuses with beautiful garden walkways and open learning courtyards." },
  { title: "Learning Beyond Classroom", icon: BookOpen, desc: "Enriching field tours, cosmic stargazing, innovation makerspaces, and target shooting systems." },
  { title: "Sports Excellence", icon: Award, desc: "Elite multi-sports arenas, synthetic tracks, specialized trainers, and active state tournaments." },
  { title: "Creative Development", icon: Sparkles, desc: "Fully equipped sound dampened musical suites, full mirror dance setups, and fine arts workspaces." }
];

function LeafIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-13.9.2" />
      <path d="M9 22v-4" />
    </svg>
  );
}

// Student life slideshow items
const STUDENT_LIFE_ITEMS = [
  { title: "Students Experimenting", quote: "Testing hypotheses in the Biology lab makes science come alive. We aren't just learning equations—we are discovering why they matter.", student: "Aarav Sharma, Grade 11", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" },
  { title: "Students Reading", quote: "The Library is my favorite place. Surrounded by giant windows and thousands of pages, it feels like I can travel anywhere in the world during my recess.", student: "Ananya Iyer, Grade 9", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80" },
  { title: "Students Playing", quote: "Scoring my first basket on this beautiful wooden court was unforgettable. The coaching makes us better teammates on and off the court.", student: "Rohan Verma, Grade 10", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80" },
  { title: "Students Performing", quote: "Playing Sitar in front of 800 parents on the Auditorium stage was nerve-wracking, but our mentors built our confidence to shine brightly.", student: "Meera Nair, Grade 12", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80" },
  { title: "Students Coding", quote: "In the Robotics lab, we built a solar rover from scratch. It's so cool to write lines of code and immediately watch a physical rover roll forward!", student: "Kabir Mehta, Grade 8", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" }
];

export default function CampusFacilitiesPage() {
  // State variables
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFacility, setActiveFacility] = useState<Facility | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSportIndex, setActiveSportIndex] = useState<number>(0);
  
  // Booking modal and its steps
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [bookingData, setBookingData] = useState({
    parentName: "",
    childName: "",
    childGrade: "Grade 1",
    email: "",
    phone: "",
    visitDate: "",
    visitTime: "10:00 AM",
    visitType: "General Tour"
  });

  // UI state
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Monitor scroll for beautiful glass navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter facilities
  const filteredFacilities = FACILITIES.filter((facility) => {
    const matchesCategory = selectedCategory === "all" || facility.category === selectedCategory;
    const matchesSearch = facility.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          facility.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle FAQ
  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Submit Booking Form
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingData.parentName && bookingData.phone && bookingData.visitDate) {
      setBookingStep(3); // Go to Confirmation Ticket step
    }
  };

  // Reset Booking state
  const openBookingModal = () => {
    setBookingData({
      parentName: "",
      childName: "",
      childGrade: "Grade 1",
      email: "",
      phone: "",
      visitDate: "",
      visitTime: "10:00 AM",
      visitType: "General Tour"
    });
    setBookingStep(1);
    setBookingModalOpen(true);
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen selection:bg-[#0041f5] selection:text-white scroll-smooth relative">
      
 

      {/* 2. Page Hero - Parallax Scroll Ready */}
      <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Cinematic Campus Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/campus-main.webp"
            alt="NIMT Beacon School Campus Exterior"
            fill
            className="object-cover object-center scale-105"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:to-transparent/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0041f5]/10 border border-[#0041f5]/15 text-[#0041f5] text-xs font-bold uppercase tracking-wider mb-6 w-fit">
              <Sparkles className="h-3.5 w-3.5" />
              WORLD CLASS CAMPUS FACILITIES
            </div>
            
            <h1 className="font-sans font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-6">
              A Campus Designed for Learning, <span className="text-[#0041f5]">Growth</span> & Success
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-sans">
              Every corner of NIMT Beacon School is designed to inspire learning, creativity, confidence, and overall development. From modern classrooms to advanced laboratories and sports facilities, students experience an environment that supports their complete growth.
            </p>
          </motion.div>

          <div className="hidden lg:col-span-5 lg:flex items-center justify-center relative">
            {/* Elegant glassmorphic floaty cards on the side of hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full h-[500px]"
            >
              <div className="absolute top-10 right-0 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
                  alt="Students studying happily"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute bottom-4 left-0 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-xs border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[#0041f5]/10 rounded-xl text-[#0041f5]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Strictly Secure & Safe</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  24/7 AI-CCTV cameras, smart security controls, and safe GPS-tracked transit.
                </p>
              </div>

              <div className="absolute top-4 left-10 bg-[#0041f5] text-white p-5 rounded-2xl shadow-xl max-w-xs">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">Live Campus Area</p>
                <p className="text-2xl font-bold tracking-tight">5+ Acres</p>
                <p className="text-[11px] text-blue-100 mt-1">Lush green environment and high-tech academic modules.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Introduction Section (70% Image, 30% Content) */}
      <section className="py-24 bg-[#f6eada]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* 70% space for beautiful large image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[16/10] group"
            >
              <Image
                src="/nimt-main-wing.webp"
                alt="Beautiful Green School Building and Students"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="text-xs uppercase tracking-widest font-bold bg-[#0041f5] px-3.5 py-1.5 rounded-full mb-2 inline-block">NIMT Main Wing</span>
              </div>
            </motion.div>

            {/* 30% Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col justify-center"
            >
              <span className="text-xs font-bold text-[#0041f5] uppercase tracking-wider mb-3 block">
                EVERYTHING UNDER ONE ROOF
              </span>
              <h2 className="font-sans font-bold tracking-tight text-3xl sm:text-4xl text-slate-900 leading-tight mb-6">
                Everything Your Child Needs Under One Roof
              </h2>
              <div className="h-1 w-12 bg-[#0041f5] rounded-full mb-6" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                NIMT Beacon School provides modern facilities that support academics, sports, creativity, technology, health, safety, and overall personality development. Every facility is designed to help students enjoy learning every day.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-200/60 p-4 rounded-2xl bg-white/60">
                  <p className="text-[#0041f5] text-2xl font-bold">100%</p>
                  <p className="text-xs text-gray-500 font-medium">Smart Classrooms</p>
                </div>
                <div className="border border-slate-200/60 p-4 rounded-2xl bg-white/60">
                  <p className="text-[#0041f5] text-2xl font-bold">24+</p>
                  <p className="text-xs text-gray-500 font-medium">Labs & Studios</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Interactive Facilities Explorer & Grid */}
      <section id="facilities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0041f5] uppercase tracking-wider mb-3 block">
              OUR SPACES & HUBS
            </span>
            <h2 className="font-sans font-bold tracking-tight text-3xl sm:text-4xl text-slate-900 mb-4">
              Explore Our Campus Facilities
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              NIMT Beacon School offers a pristine layout of learning environments. Filter facilities or search directly to see details.
            </p>
          </div>

     

          {/* Facilities Grid (70% Image height inside cards) */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredFacilities.map((facility) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  key={facility.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-xl hover:border-slate-300/40 transition-all duration-300 flex flex-col h-[440px]"
                >
                  {/* Image container: 70% height */}
                  <div className="relative h-[290px] overflow-hidden bg-gray-100">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {facility.category}
                    </span>
                  </div>

                  {/* Content Container: 30% height */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-sans font-bold text-slate-900 text-lg group-hover:text-[#0041f5] transition-colors line-clamp-1 mb-1">
                        {facility.title}
                      </h3>
             
                    </div>

     
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Zero search results */}
          {filteredFacilities.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <Compass className="h-10 w-10 text-gray-400 mx-auto mb-4" />
              <p className="text-slate-700 font-bold mb-1">No facilities found</p>
              <p className="text-gray-500 text-xs max-w-sm mx-auto">
                No matching facility found for &ldquo;{searchQuery}&rdquo;. Try browsing using the category filters above.
              </p>
            </div>
          )}
        </div>
      </section>



      {/* 7. Campus Safety ( Blue Bento-styled Grid) */}
      <section id="safety" className="py-24 bg-[#0041f5] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-blue-200 uppercase tracking-widest bg-blue-800 px-3.5 py-1.5 rounded-full mb-4 inline-block">
                SAFE & SECURE PERIMETER
              </span>
              <h2 className="font-sans font-bold tracking-tight text-3xl sm:text-5xl text-white mb-6 leading-tight">
                A Safe Campus Parents Can Trust
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed mb-8">
                At NIMT Beacon School, we recognize that learning only blooms in an atmosphere of utter peace and physical safety. We&apos;ve built multi-layered security infrastructure, monitoring student safety from transit to school activities.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "24×7 CCTV Surveillance", desc: "200+ High-definition AI camera channels scanning borders and hallways." },
                { title: "Smart Visitor Verification", desc: "Digital verification gates authorizing access only to vetted guardians." },
                { title: "Female Support Staff", desc: "Trained female teachers, caretakers, and bus staff monitoring kids." },
                { title: "In-House Medical Support", desc: "Pediatricians on-call, trauma nurses, and direct critical ward ties." },
                { title: "Active Fire Safeguards", desc: "Automatic sprinklers, certified alarms, and strict evacuation pathways." },
                { title: "Trained Response Teams", desc: "Certified school wardens drilled in emergency student assemblies." },
                { title: "GPS Enabled Transport", desc: "School buses tracked in real-time with automated speed alarm triggers." },
                { title: "Strict Perimeter Control", desc: "Gated entryways blocked with biometric cards and verified logs." }
              ].map((safety, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-blue-200 shrink-0" />
                    <h4 className="font-bold text-white text-base leading-tight">{safety.title}</h4>
                  </div>
                  <p className="text-xs text-blue-100/80 leading-relaxed">{safety.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>




 

      {/* 11. FAQ Accordions */}
      <section id="faq" className="py-24 bg-[#f6eada]/20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0041f5] uppercase tracking-wider mb-3 block">
              COMMON QUESTIONS
            </span>
            <h2 className="font-sans font-bold tracking-tight text-3xl sm:text-4xl text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Answers regarding student access, safety protocols, and laboratory integration.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What facilities are available?",
                a: "NIMT Beacon School hosts over 24+ world-class facilities categorized into Academics & Labs (Smart Classrooms, Science, Math, and Language Labs), Innovation (Robotics, AI, Astronomy, Space and STEM Labs), Professional Sports Academy disciplines, sound-insulated Music and Dance Studios, a safe GPS Transport Fleet, clean dining, boarding hostels, and kids play zone spaces."
              },
              {
                q: "Do students use smart classrooms?",
                a: "Yes, 100% of our core curriculum classrooms are fully enabled smart classrooms. They feature 4K interactive multi-touch displays, integrated audio-visual systems, high-speed school-monitored student Wi-Fi, and modular seating arrangements."
              },
              {
                q: "Are laboratories well equipped?",
                a: "Absolutely. Our separate laboratories for Physics, Chemistry, and Biology are fully stocked with high-precision optical microscopes, automatic safety ventilation hoods, and digital data collection sensors. All tech labs (Robotics & AI) feature industrial-standard microprocessors, laser cutters, and 3D printing equipment under safe coaching."
              },
              {
                q: "Is transport available?",
                a: "Yes, we run a  fleet of comfortable, air-conditioned school buses covering all major neighborhood hubs. Every single bus features live parent GPS-tracking, smart onboard cameras, a certified bus security guard, and a trained female conductor."
              },
              {
                q: "How safe is the campus?",
                a: "NIMT maintains a gold-standard safety protocols system. We run a 24/7 security central control room monitoring over 200+ AI CCTV streams. Entries are locked behind strict visitor check-in desks. We also host on-campus medical bays staffed by full-time pediatric nurses."
              },
              {
                q: "What sports are available?",
                a: "Our Sports Academy offers extensive coaching across Football, Basketball, Cricket, Volleyball, Badminton, Athletics synthetic tracks, Gymnastics, Yoga and Mindfulness meditation blocks, and a semi-Olympic sized swimming pool overseen by NIS-certified professional coaches."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/50 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`p-1.5 rounded-full bg-gray-100 text-slate-600 transition-transform duration-300 ${faqOpen[index] ? "rotate-180 bg-[#0041f5]/10 text-[#0041f5]" : ""}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                
                <AnimatePresence>
                  {faqOpen[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-50">
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



      {/* A. Dynamic Overlay Drawer / Modal for Facility Details */}
      <AnimatePresence>
        {activeFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFacility(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="relative bg-white text-slate-900 rounded-[2rem] shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row z-10 border border-slate-200"
            >
              {/* Image side: 50% width on Desktop */}
              <div className="relative md:w-1/2 min-h-[250px] md:min-h-auto bg-slate-100">
                <Image
                  src={activeFacility.image}
                  alt={activeFacility.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-slate-900 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  {activeFacility.category}
                </span>
              </div>

              {/* Text Side: 50% width on Desktop */}
              <div className="md:w-1/2 p-8 sm:p-10 overflow-y-auto max-h-[60vh] md:max-h-[90vh] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="font-sans font-bold text-slate-900 text-2xl sm:text-3xl leading-tight">
                      {activeFacility.title}
                    </h3>
                    <button
                      onClick={() => setActiveFacility(null)}
                      className="p-2 hover:bg-gray-100 text-gray-500 hover:text-slate-900 rounded-full transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-sans">
                    {activeFacility.details}
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
                    Key Features & Infrastructure:
                  </h4>
                  <ul className="space-y-2.5 mb-8">
                    {activeFacility.features.map((feat, index) => (
                      <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-gray-500 leading-normal">
                        <CheckCircle className="h-5 w-5 text-[#0041f5] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setActiveFacility(null);
                      openBookingModal();
                    }}
                    className="flex-grow bg-[#0041f5] hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl text-xs sm:text-sm transition-all text-center"
                  >
                    Book Visit to This Facility
                  </button>
                  <button
                    onClick={() => setActiveFacility(null)}
                    className="bg-gray-100 hover:bg-gray-200 text-slate-700 font-semibold py-3.5 px-6 rounded-xl text-xs sm:text-sm transition-all text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* B. Dynamic Fullscreen Lightbox for Gallery */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col items-center justify-center p-4 select-none">
            {/* Overlay Close Area */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

            {/* Top Bar controls */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white z-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
                  {GALLERY_ITEMS[lightboxIndex].tag}
                </span>
                <h4 className="font-bold text-base md:text-lg">{GALLERY_ITEMS[lightboxIndex].title}</h4>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Central Lightbox Image */}
            <div className="relative max-w-5xl w-full aspect-[16/10] max-h-[75vh] flex items-center justify-center z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_ITEMS[lightboxIndex].src}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-w-full max-h-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />

              {/* Navigation Arrows */}
              <button
                onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null))}
                className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null))}
                className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Counter */}
            <div className="absolute bottom-6 text-gray-400 text-xs z-10">
              Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* C. Dynamic Multi-Step "Book Campus Visit" Modal */}
      <AnimatePresence>
        {bookingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBookingModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative bg-white text-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-lg w-full p-8 sm:p-10 z-10 border border-slate-200"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-[10px] tracking-widest text-[#0041f5] font-bold uppercase block mb-1">
                    BEACON DISCOVERY
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                    {bookingStep === 3 ? "Your Visit is Confirmed" : "Book Your Campus Visit"}
                  </h3>
                </div>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="p-2 hover:bg-gray-100 text-gray-500 hover:text-slate-900 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Step 1: Input Information */}
              {bookingStep === 1 && (
                <div className="space-y-5">
                  <p className="text-xs text-gray-500 leading-normal">
                    Enter details below to schedule an interactive personalized walk-through of the school&apos;s high-tech facilities under our senior counselor guidance.
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1.5">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={bookingData.parentName}
                        onChange={(e) => setBookingData({ ...bookingData, parentName: e.target.value })}
                        className="w-full bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-[#0041f5] rounded-xl px-4 py-3 text-sm text-slate-950 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1.5">
                          Child&apos;s Name
                        </label>
                        <input
                          type="text"
                          placeholder="Emily Doe"
                          value={bookingData.childName}
                          onChange={(e) => setBookingData({ ...bookingData, childName: e.target.value })}
                          className="w-full bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-[#0041f5] rounded-xl px-4 py-3 text-sm text-slate-950 outline-none transition-all placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1.5">
                          Target Grade
                        </label>
                        <select
                          value={bookingData.childGrade}
                          onChange={(e) => setBookingData({ ...bookingData, childGrade: e.target.value })}
                          className="w-full bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-[#0041f5] rounded-xl px-4 py-3 text-sm text-slate-950 outline-none transition-all"
                        >
                          {["Preschool", "Kindergarten", "Grade 1", "Grade 3", "Grade 6", "Grade 9", "Grade 11"].map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        className="w-full bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-[#0041f5] rounded-xl px-4 py-3 text-sm text-slate-950 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1.5">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        className="w-full bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-[#0041f5] rounded-xl px-4 py-3 text-sm text-slate-950 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (bookingData.parentName && bookingData.phone) {
                        setBookingStep(2);
                      } else {
                        alert("Please fill in the required fields (Parent Name and Phone Number).");
                      }
                    }}
                    className="w-full bg-[#0041f5] hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-sm transition-all text-center mt-4 shadow-md"
                  >
                    Proceed to Schedule Tour
                  </button>
                </div>
              )}

              {/* Step 2: Schedule Time & Date */}
              {bookingStep === 2 && (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <p className="text-xs text-gray-500 leading-normal">
                    Select your preferred date, tour type, and morning time slots. Campus tours are conducted Mon-Sat.
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1.5">
                        Select Visit Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingData.visitDate}
                        onChange={(e) => setBookingData({ ...bookingData, visitDate: e.target.value })}
                        className="w-full bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-[#0041f5] rounded-xl px-4 py-3 text-sm text-slate-950 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1.5">
                          Preferred Time
                        </label>
                        <select
                          value={bookingData.visitTime}
                          onChange={(e) => setBookingData({ ...bookingData, visitTime: e.target.value })}
                          className="w-full bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-[#0041f5] rounded-xl px-4 py-3 text-sm text-slate-950 outline-none transition-all"
                        >
                          {["09:30 AM", "11:00 AM", "12:30 PM", "02:00 PM"].map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1.5">
                          Tour Focus
                        </label>
                        <select
                          value={bookingData.visitType}
                          onChange={(e) => setBookingData({ ...bookingData, visitType: e.target.value })}
                          className="w-full bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-[#0041f5] rounded-xl px-4 py-3 text-sm text-slate-950 outline-none transition-all"
                        >
                          {["General Tour", "Academics & Labs", "Sports Complex", "Boarding & Hostels"].map((typ) => (
                            <option key={typ} value={typ}>{typ}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setBookingStep(1)}
                      className="bg-gray-100 hover:bg-gray-200 text-slate-700 font-semibold py-4 px-6 rounded-xl text-sm transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-grow bg-[#0041f5] hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-sm transition-all shadow-md"
                    >
                      Confirm Booking Ticket
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Beautiful Confirmation Ticket with simulated QR */}
              {bookingStep === 3 && (
                <div className="space-y-6">
                  <div className="bg-[#f6eada]/40 p-6 rounded-3xl border border-[#f6eada] text-center relative overflow-hidden">
                    {/* Top ticket cutouts */}
                    <div className="absolute top-1/2 -left-3 h-6 w-6 rounded-full bg-white -translate-y-1/2 border-r border-slate-200" />
                    <div className="absolute top-1/2 -right-3 h-6 w-6 rounded-full bg-white -translate-y-1/2 border-l border-slate-200" />
                    
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#0041f5] uppercase tracking-wider mb-2">
                      <CheckCircle className="h-4 w-4" /> NIMT BEACON VISIT PASS
                    </div>
                    
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{bookingData.parentName}</h4>
                    <p className="text-[11px] text-gray-500 font-medium">Child: {bookingData.childName || "Not specified"} ({bookingData.childGrade})</p>
                    
                    <div className="h-px border-t-2 border-dashed border-gray-200 my-4" />
                    
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase font-semibold block">Date</span>
                        <span className="text-xs text-slate-900 font-bold">{bookingData.visitDate}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase font-semibold block">Time slot</span>
                        <span className="text-xs text-slate-900 font-bold">{bookingData.visitTime}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase font-semibold block">Focus tour</span>
                        <span className="text-xs text-[#0041f5] font-bold">{bookingData.visitType}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase font-semibold block">Pass Code</span>
                        <span className="text-xs text-slate-900 font-mono font-bold">NIMT-2026-X82L</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-6 pt-6 border-t border-gray-100">
                      <QrCode className="h-20 w-20 text-slate-800 mb-2" />
                      <span className="text-[9px] text-gray-400 font-mono">SCAN AT ENTRANCE GATES</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 text-center leading-normal">
                    We have sent a digital copy of this pass and directions to your registered phone number <strong className="text-slate-800">{bookingData.phone}</strong>. Our admissions coordinator will call you soon.
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        window.print();
                      }}
                      className="flex-grow bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="h-4 w-4" /> Print Ticket
                    </button>
                    <button
                      onClick={() => setBookingModalOpen(false)}
                      className="bg-gray-100 hover:bg-gray-200 text-slate-700 font-semibold py-4 px-6 rounded-xl text-xs sm:text-sm transition-all"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
