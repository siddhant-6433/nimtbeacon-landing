"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { 
  Award, 
  Trophy, 
  BookOpen, 
  Sparkles, 
  School, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  Compass, 
  Heart, 
  Palette, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus, 
  Info, 
  MapPin, 
  Phone, 
  Mail, 
  X, 
  GraduationCap, 
  Clock, 
  Activity, 
  Code, 
  Briefcase, 
  Check 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// --- CUSTOM TYPES & INTERFACES ---

interface AchievementCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "all" | "board" | "topper" | "district" | "merit";
}

interface CompetitiveExamCard {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: "iit" | "neet" | "olympiad" | "ntse" | "scholarship";
}

interface OlympiadCard {
  id: string;
  title: string;
  description: string;
  category: "science" | "math" | "humanities" | "tech";
  image: string;
}

interface SuccessStory {
  id: string;
  name: string;
  role: string;
  achievement: string;
  journey: string;
  futureGoal: string;
  teacherQuote: string;
  parentQuote: string;
  image: string;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  heightClass: string;
}

// --- STATIC DATA SHIELDED FROM SPECIFIC FABRICATION ---

const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence", info: "Nurturing generations of critical thinkers since inception" },
  { value: 2000, suffix: "+", label: "Successful Alumni", info: "Graduating into  global universities and industries" },
  { value: 100, suffix: "+", label: "Awards & Laurels", info: "Acknowledged by premier educational and civic institutions" },
  { value: 95, suffix: "%", label: "Academic Success", info: "Consistently scoring high distinctions and university placements" },
  { value: 100, suffix: "%", label: "Student Participation", info: "Every child is encouraged to take part in sports, arts, and clubs" },
];

const academicCards: AchievementCard[] = [
  {
    id: "acad-1",
    title: "CBSE Board Achievements",
    description: "Our graduating batches consistently secure outstanding average aggregates, showcasing complete subject mastery and scholarly dedication across all streams.",
    image: "https://picsum.photos/seed/nimt-acad-cbse/800/600",
    category: "board",
  },
  {
    id: "acad-2",
    title: "School Toppers Profile",
    description: "Recognizing high achievers who lead with exemplary grades, demonstrating scientific inquiry, creative writing prowess, and high analytic skills.",
    image: "https://picsum.photos/seed/nimt-toppers/800/600",
    category: "topper",
  },
  {
    id: "acad-3",
    title: "District & Zonal Standings",
    description: "NIMT Beacon students repeatedly gain honorable placement in regional educational meets and public-sector academic symposiums.",
    image: "https://picsum.photos/seed/nimt-zonal/800/600",
    category: "district",
  },
  {
    id: "acad-4",
    title: "100% Pass Consistency",
    description: "Our structured academic support ensures that every single student clears their critical board milestones with strong confidence and dignity.",
    image: "https://picsum.photos/seed/nimt-pass-pct/800/600",
    category: "board",
  },
  {
    id: "acad-5",
    title: "Highest Subject Distinctions",
    description: "Perfect and near-perfect scorecards in complex disciplines like Mathematics, Physics, Computer Science, and English Literature.",
    image: "https://picsum.photos/seed/nimt-distinctions/800/600",
    category: "merit",
  },
  {
    id: "acad-6",
    title: "National Merit Certificate Winners",
    description: "Laurels issued directly by national examination boards to our top 1% percentile students for their outstanding scholastic performance.",
    image: "https://picsum.photos/seed/nimt-merit/800/600",
    category: "merit",
  },
];

const competitiveExams: CompetitiveExamCard[] = [
  {
    id: "comp-1",
    title: "IIT-JEE Foundation & Success",
    description: "We provide state-of-the-art physics, chemistry, and advanced mathematics mentorship, enabling aspirants to approach the JEE entry with extreme conceptual clarity.",
    category: "Engineering Preparation",
    iconName: "iit",
  },
  {
    id: "comp-2",
    title: "NEET Medical Training",
    description: "Comprehensive biology modules and mock medical diagnostics prepare future healthcare leaders to excel in premier national medical boards.",
    category: "Medical Preparation",
    iconName: "neet",
  },
  {
    id: "comp-3",
    title: "National & International Olympiads",
    description: "Nurturing deep analytical thinking to face rigorous, logical, and application-based tests on scientific and logical domains.",
    category: "Subject Mastery",
    iconName: "olympiad",
  },
  {
    id: "comp-4",
    title: "NTSE Scholars Program",
    description: "Specialized training for National Talent Search Examination, building solid social studies, mental ability, and general knowledge frameworks.",
    category: "Talent Recognition",
    iconName: "ntse",
  },
  {
    id: "comp-5",
    title: "Prestige Scholarships",
    description: "Connecting our brilliant minds with national merit-based scholarships, relieving financial limits and supporting higher aspirations.",
    category: "Support & Excellence",
    iconName: "scholarship",
  },
];

const olympiadItems: OlympiadCard[] = [
  {
    id: "oly-1",
    title: "Science Olympiad",
    description: "Testing experimental designs, environmental biology, chemistry balances, and astronomical principles.",
    category: "science",
    image: "https://picsum.photos/seed/oly-science/600/400",
  },
  {
    id: "oly-2",
    title: "Math Olympiad",
    description: "Exploring spatial reasoning, number theory, high-level algebra, and geometry problem-solving.",
    category: "math",
    image: "https://picsum.photos/seed/oly-math/600/400",
  },
  {
    id: "oly-3",
    title: "English & Literary Olympiad",
    description: "Cultivating profound vocabulary, creative metaphors, advanced syntax analysis, and analytical writing.",
    category: "humanities",
    image: "https://picsum.photos/seed/oly-english/600/400",
  },
  {
    id: "oly-4",
    title: "Cyber & AI Olympiad",
    description: "Evaluating algorithmic logic, cybersecurity practices, machine learning theory, and data structures.",
    category: "tech",
    image: "https://picsum.photos/seed/oly-cyber/600/400",
  },
  {
    id: "oly-5",
    title: "Elite Quiz Championship",
    description: "Broadening perspectives on global affairs, history, technology milestones, and contemporary literature.",
    category: "humanities",
    image: "https://picsum.photos/seed/oly-quiz/600/400",
  },
  {
    id: "oly-6",
    title: "Debate & Public Speaking Meet",
    description: "Formulating crisp arguments, reading socio-economic realities, and persuading with elegant rhetoric.",
    category: "humanities",
    image: "https://picsum.photos/seed/oly-debate/600/400",
  },
  {
    id: "oly-7",
    title: "National Spelling Bee",
    description: "Mastering language roots, phonetics, and absolute precision under high-pressure live stages.",
    category: "humanities",
    image: "https://picsum.photos/seed/oly-spell/600/400",
  },
  {
    id: "oly-8",
    title: "Coding & Algorithm Challenge",
    description: "Writing optimized, clean code to solve abstract mathematical and structural automation problems.",
    category: "tech",
    image: "https://picsum.photos/seed/oly-coding/600/400",
  },
  {
    id: "oly-9",
    title: "Model United Nations (MUN)",
    description: "Simulating global diplomacy, authoring resolutions, and defending critical sovereign foreign policies.",
    category: "humanities",
    image: "https://picsum.photos/seed/oly-mun/600/400",
  },
  {
    id: "oly-10",
    title: "Autonomous Robotics Competition",
    description: "Assembling custom chassis and programming automated obstacle-evasion and sorting behaviors.",
    category: "tech",
    image: "https://picsum.photos/seed/oly-robotics/600/400",
  },
];

const sportsDisciplines = [
  { title: "Football Champions", desc: "Our team plays with exceptional structure, focusing on fluid passing, defensive discipline, and stellar sportsmanship.", icon: Trophy },
  { title: "Basketball Elite", desc: "Refining high-speed tactical plays, shooting accuracy, and team defense in regional and state championships.", icon: Trophy },
  { title: "Athletics & Track", desc: "Nurturing incredible speed, endurance, and field precision across sprints, relay events, and jumps.", icon: Award },
  { title: "Cricket Academy", desc: "Training with state-of-the-art bowling simulators, tactical field placement, and calculated batting styles.", icon: Trophy },
  { title: "Badminton Club", desc: "Fostering lightning-quick reflexes, precise court placement, and single/double team strategies.", icon: Award },
  { title: "Swimming Excellence", desc: "State-of-the-art swimming pools with qualified trainers focusing on freestyle, breaststroke, and relays.", icon: Trophy },
  { title: "Rhythmic Gymnastics", desc: "Building remarkable flexibility, core power, and posture under professional national-level gymnastic coaching.", icon: Award },
  { title: "Yoga & Mindfulness", desc: "Ensuring deep physical-mental balance, respiratory health, and inner calm for competitive pressure.", icon: Award },
  { title: "Indoor Precision Shooting", desc: "Instilling laser-like focus, breathing control, and hand-eye alignment in safe, high-tech shooting ranges.", icon: Award },
  { title: "District Championships", desc: "Our squads regularly secure top podium finishes in local inter-school confederations.", icon: Trophy },
  { title: "State Championships", desc: "Pushing athletes to represent NIMT with honor against the best sporting talent in the province.", icon: Trophy },
  { title: "National Level Aspirations", desc: "Developing elite-tier training pathways for standout athletes aiming to represent on the country's main stages.", icon: Trophy },
];

const artsAndCulture = [
  { title: "Vocal & Instrumental Music", desc: "Equipping our music studios with classical Indian sitars, tablas, and modern keyboards to nurture auditory art.", image: "https://picsum.photos/seed/nimt-music/800/600" },
  { title: "Classical & Contemporary Dance", desc: "Celebrating heritage through classical Indian mudras and contemporary expression routines.", image: "https://picsum.photos/seed/nimt-dance/800/600" },
  { title: "Theatrical Drama & Plays", desc: "Unlocking stage confidence, emotional depth, scriptwriting, and voice modulation in large school amphitheaters.", image: "https://picsum.photos/seed/nimt-drama/800/600" },
  { title: "Fine Arts & Sculpture", desc: "Exploring oil canvases, eco-friendly clay modeling, and mixed-media collages to visual perfection.", image: "https://picsum.photos/seed/nimt-finearts/800/600" },
  { title: "Creative Writing & Poetry", desc: "Nurturing deep analytical thinking and vocabulary through school journals and literary circles.", image: "https://picsum.photos/seed/nimt-writing/800/600" },
  { title: "Digital Photography & Film", desc: "Teaching rule-of-thirds, camera lighting, visual storytelling, and basic post-production techniques.", image: "https://picsum.photos/seed/nimt-photography/800/600" },
];

const leadershipPoints = [
  { title: "School Prefectural Cabinet", desc: "Democratically elected student councils which manage internal house systems, host assemblies, and govern code-of-conduct initiatives.", icon: School },
  { title: "Oratory & Public Speaking", desc: "Weekly assembly podium sessions that guarantee every child gains confidence speaking eloquently in front of large crowds.", icon: Award },
  { title: "Outward Bound Leadership Camps", desc: "Off-site wilderness and collaborative workshops that build grit, tactical logic, and real camaraderie.", icon: Compass },
  { title: "Community Service & Upliftment", desc: "Active partnerships with regional social projects, offering literacy tutoring and ecological support.", icon: Heart },
  { title: "Social Responsibility Pledges", desc: "Leading campus sustainability, plastic-free challenges, and zero-waste community drives.", icon: CheckCircle2 },
  { title: "Student Entrepreneurship Cell", desc: "A playground to pitch basic community projects, manage budgets, and explore early creative business logic.", icon: Briefcase },
];

const stemCards = [
  { title: "Autonomous Robotics Lab", desc: "Equipped with advanced Arduino, Raspberry Pi, and mechanical modular kits for physical code execution.", icon: Code },
  { title: "Annual Innovation Fair", desc: "Where students display working prototypes addressing energy conservation, clean water, and civic safety.", icon: Sparkles },
  { title: "AI & Machine Learning Club", desc: "Demystifying smart models, data visualization, and ethics in AI in clean, secure computer facilities.", icon: Target },
  { title: "Applied STEM Projects", desc: "Bridging the gap between school textbooks and real-world infrastructure through physical models.", icon: Compass },
  { title: "Deep Scholarly Research", desc: "Encouraging senior secondary students to compile mini-dissertations on ecology, history, or basic physics.", icon: BookOpen },
  { title: "Zonal Science Exhibition Winners", desc: "Our young innovators routinely receive acclaim from state science academies for practical projects.", icon: Award },
];

const successStories: SuccessStory[] = [
  {
    id: "story-1",
    name: "Ananya Iyer",
    role: "Alumna, Class of 2025",
    achievement: "Scholastic Excellence & STEM Leadership",
    journey: "Joining NIMT in Primary School, Ananya discovered her profound fascination for robotics. With individual coaching from our science faculty, she balanced rigorous board preparation with building AI-driven models.",
    futureGoal: "To research Sustainable Systems and Environmental Engineering.",
    teacherQuote: "Ananya's capacity to ask deep, fundamental questions set her apart. She never memorized; she explored.",
    parentQuote: "The individual mentorship at NIMT transformed our daughter's quiet curiosity into a confident, inspiring leadership trait.",
    image: "https://picsum.photos/seed/student-girl/500/500",
  },
  {
    id: "story-2",
    name: "Kabir Mehra",
    role: "Class XII Student",
    achievement: "State Level Athletics & Academic Merit",
    journey: "Kabir arrived as a highly energetic but unfocused student. Through the school's personalized sports development program, he found his stride in track events, eventually leading our senior relay team while keeping his grades high.",
    futureGoal: "To represent the nation in athletics while pursuing high-level computer science.",
    teacherQuote: "Kabir is proof that sports and top-tier studies don't compete; they feed each other's focus.",
    parentQuote: "The school protected Kabir's sporting dreams instead of forcing him to compromise. His growth is highly inspiring.",
    image: "https://picsum.photos/seed/student-boy/500/500",
  },
  {
    id: "story-3",
    name: "Diya Deshmukh",
    role: "Class X Student",
    achievement: "National Level Debate & Cultural Ambassador",
    journey: "Diya had severe stage fright in Class VI. Weekly podium sessions and the school debate club gave her the tools to structure her ideas, eventually leading her to win major regional speaking tournaments.",
    futureGoal: "To study International Law and Diplomacy.",
    teacherQuote: "Seeing Diya command a large audience with such grace is the greatest reward of my teaching career.",
    parentQuote: "NIMT didn't just teach Diya subjects. They gave her a voice that is both elegant and powerful.",
    image: "https://picsum.photos/seed/student-girl-2/500/500",
  },
];

const galleryItems: GalleryItem[] = [
  { id: "gal-1", title: "Annual Prize Distribution", description: "Celebrating outstanding performers on our annual glory stage.", category: "Ceremony", image: "https://picsum.photos/seed/gal-prize/600/800", heightClass: "h-[350px] md:h-[450px]" },
  { id: "gal-2", title: "Gold Medal Triumphs", description: "Close-up of hard-earned medals signifying dedication.", category: "Awards", image: "https://picsum.photos/seed/gal-medal/600/600", heightClass: "h-[250px] md:h-[300px]" },
  { id: "gal-3", title: "Inter-School Sports Day", description: "Vibrant energy and track sprints on our standard fields.", category: "Sports", image: "https://picsum.photos/seed/gal-sports/800/600", heightClass: "h-[250px] md:h-[350px]" },
  { id: "gal-4", title: "Robotics Design Showcase", description: "Students demonstrating automated algorithms to visiting mentors.", category: "STEM", image: "https://picsum.photos/seed/gal-robot/600/700", heightClass: "h-[300px] md:h-[400px]" },
  { id: "gal-5", title: "Regional Science Exhibition", description: "Our innovators demonstrating ecological models.", category: "STEM", image: "https://picsum.photos/seed/gal-science/600/500", heightClass: "h-[250px] md:h-[300px]" },
  { id: "gal-6", title: "Inter-House Debate Contest", description: "Articulating opinions with passion on contemporary issues.", category: "Culture", image: "https://picsum.photos/seed/gal-debate/700/500", heightClass: "h-[250px] md:h-[320px]" },
  { id: "gal-7", title: "School Orchestra Symphony", description: "Performing classical and fusion melodies on annual day.", category: "Arts", image: "https://picsum.photos/seed/gal-music/500/700", heightClass: "h-[300px] md:h-[420px]" },
  { id: "gal-8", title: "Art & Sculpture Gallery", description: "Exhibiting magnificent clay models and oil paintings.", category: "Arts", image: "https://picsum.photos/seed/gal-art/600/800", heightClass: "h-[350px] md:h-[450px]" },
  { id: "gal-9", title: "Proud Parents & Graduates", description: "Shared tears of joy and success at the valedictory ceremony.", category: "Celebration", image: "https://picsum.photos/seed/gal-parents/800/600", heightClass: "h-[250px] md:h-[350px]" },
  { id: "gal-10", title: "Teachers Congratulating Leaders", description: "Mentors honoring student prefects with house sashes.", category: "Leadership", image: "https://picsum.photos/seed/gal-mentors/600/600", heightClass: "h-[250px] md:h-[300px]" },
];

const excelPoints = [
  { title: "Experienced Faculty", desc: "Our educators are active scholars, combining deep subject authority with compassionate, progressive pedagogy.", icon: GraduationCap },
  { title: "Individual Mentorship", desc: "Every child is paired with an academic coach to discover strengths, address blocks, and set safe goals.", icon: Users },
  { title: "Small Learning Groups", desc: "By maintaining modest classroom strengths, we ensure high quality interactive discussions and active attention.", icon: School },
  { title: "Technology Enabled Classrooms", desc: "Equipped with rich visual displays and computational suites that turn dry theory into beautiful exploration.", icon: Code },
  { title: "Competitive Exam Coaching", desc: "Integrated study pipelines for boards, engineering, and medical tests directly in our academic calendar.", icon: Target },
  { title: "Leadership Portfolios", desc: "Encouraging students to lead major campaigns, manage real budgets, and take complete ownership of clubs.", icon: Sparkles },
  { title: "State-of-the-Art Campus", desc: "Acres of beautifully manicured sports fields, specialized laboratories, and inspiring study commons.", icon: Compass },
  { title: "Holistic Development", desc: "A strict balance of academic rigor, athletic discipline, creative freedom, and emotional health.", icon: Heart },
];

const recognitionWallItems = [
  { type: "Trophy", label: "Best Progressive School Award", description: "Acknowledged for structural innovation in child pedagogy." },
  { type: "Shield", label: "State Athletics Overall Shield", description: "Secured for outstanding performance across multiple track disciplines." },
  { type: "Certificate", label: "National Merit Institution Card", description: "Issued for placing in top percentiles in CBSE board outcomes." },
  { type: "Medal", label: "International Math Challenge Gold", description: "Exemplary mental logical capability demonstrated by junior teams." },
  { type: "Badge", label: "Eco-School Green Standard", description: "Honored for fully sustainable campus operations and clean energy projects." },
  { type: "Shield", label: "Regional STEM Innovation Trophy", description: "Gained for outstanding agricultural irrigation robotic prototypes." },
  { type: "Trophy", label: "Inter-School Cultural Champions", desc: "Outstanding theater play and group choir performances." },
  { type: "Medal", label: "National Cyber Olympiad Elite Pin", desc: "Celebrating algorithmic sorting excellence." }
];

const timelineMilestones = [
  { year: "2001", title: "NIMT Foundation Stones", desc: "Launched with a clear vision to offer child-centric, elite-level education." },
  { year: "2007", title: "First Batch CBSE Excellence", desc: "Secured a 100% first-division pass outcome, establishing a high standard." },
  { year: "2012", title: "Inauguration of STEM & Robotics Lab", desc: "Became a pioneer in integrating basic computational logic in middle school." },
  { year: "2016", title: "State Level Sports Arena Open", desc: "Constructed our Olympic-size swimming pool and multi-sport indoor dome." },
  { year: "2020", title: "National Innovation Gold Cup", desc: "Recognized nationally for eco-friendly solar car prototypes authored by seniors." },
  { year: "2024", title: "Beacon Leadership Academy Launch", desc: "Integrating public speaking, design-thinking, and financial literacy into the syllabus." },
  { year: "2026", title: "Silver Jubilee: 25 Years of Glory", desc: "Continuing our heritage of excellence, inspiring dreams, and shaping elite human futures." }
];

const faqs = [
  {
    q: "How does NIMT help students achieve excellent board results?",
    a: "Our strategy avoids high-pressure rote memorization. We provide structured learning modules, weekly individualized check-ins, extensive question banks, and simulated mocks that desensitize exam fear, allowing students to excel naturally.",
  },
  {
    q: "How are students prepared for IIT-JEE and NEET?",
    a: "We integrate foundation coaching directly inside our curriculum. This means students receive expert science and math training during school hours, saving them from exhausting late-evening external tuition.",
  },
  {
    q: "What Olympiads do students participate in?",
    a: "Students actively participate in prestigious Science, Mathematics, English, Cyber, and General Knowledge Olympiads. We provide specialized preparatory resource materials and mentorship for these competitive platforms.",
  },
  {
    q: "How does the school support sports talent?",
    a: "We believe in athletic seriousness. Outstanding athletes receive modified academic schedules, specialized nutrition advising, professional coaches, and physical therapy support, ensuring they represent at zonal, state, and national stages without academic lag.",
  },
  {
    q: "How are leadership skills developed?",
    a: "Leadership is a practiced trait at NIMT. Through our Prefectural Cabinet, house councils, mandatory assembly speaking rosters, and youth-led community projects, every student learns to confidently articulate plans and organize groups.",
  },
  {
    q: "Can every student participate in competitions?",
    a: "Absolutely. We maintain a 100% participation philosophy. No child is sidelined. We offer diverse platforms across academics, art, coding, chess, photography, debates, and gymnastics, ensuring every unique personality shines.",
  },
];

// --- CORE COMPONENT ---

export default function AchievementsPage() {
  // --- FORM STATES & MODALS ---
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form Inputs
  const [bookingForm, setBookingForm] = useState({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    studentName: "",
    grade: "Nursery",
    visitDate: "",
  });

  const [applyForm, setApplyForm] = useState({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    studentName: "",
    grade: "Class I",
    previousSchool: "",
  });

  // --- INTERACTIVE SELECTORS ---
  const [activeOlympiadFilter, setActiveOlympiadFilter] = useState<"all" | "science" | "math" | "humanities" | "tech">("all");
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // --- SUCCESS TOAST TIMER ---
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // --- COUNTER COMPONENT IN-VIEW TRIGGERS ---
  const [startCounters, setStartCounters] = useState(false);
  const statsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (statsSectionRef.current) {
        const rect = statsSectionRef.current.getBoundingClientRect();
        // Trigger counters when section is 80% visible
        if (rect.top < window.innerHeight * 0.85) {
          setStartCounters(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- SUBMISSION HANDLERS ---
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call and save to LocalStorage
    const bookings = JSON.parse(localStorage.getItem("nimt_bookings") || "[]");
    bookings.push({ ...bookingForm, id: Date.now().toString() });
    localStorage.setItem("nimt_bookings", JSON.stringify(bookings));
    
    setSuccessMessage("Thank you! Your campus visit has been successfully booked. Our admission team will contact you shortly.");
    setIsBookingOpen(false);
    setBookingForm({
      parentName: "",
      parentEmail: "",
      parentPhone: "",
      studentName: "",
      grade: "Nursery",
      visitDate: "",
    });
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const applications = JSON.parse(localStorage.getItem("nimt_applications") || "[]");
    applications.push({ ...applyForm, id: Date.now().toString() });
    localStorage.setItem("nimt_applications", JSON.stringify(applications));
    
    setSuccessMessage("Application submitted successfully! Our admissions coordinator will review your request and call you within 24 hours.");
    setIsApplyOpen(false);
    setApplyForm({
      parentName: "",
      parentEmail: "",
      parentPhone: "",
      studentName: "",
      grade: "Class I",
      previousSchool: "",
    });
  };

  const filteredOlympiads = useMemo(() => {
    if (activeOlympiadFilter === "all") return olympiadItems;
    return olympiadItems.filter(item => item.category === activeOlympiadFilter);
  }, [activeOlympiadFilter]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0041f5]/20 selection:text-[#0041f5] overflow-x-hidden">
      
      {/* --- FLOATING SUCCESS NOTIFICATION --- */}
      <AnimatePresence>
        {successMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4"
          >
            <div className="bg-[#0041f5] text-white p-4 rounded-2xl shadow-2xl flex items-start gap-3 border border-white/10 backdrop-blur-lg">
              <div className="bg-white/20 p-2 rounded-full shrink-0">
                <Check className="w-5 h-5 text-[#fffc4d]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#fffc4d]">Submission Successful</h4>
                <p className="text-sm text-white/95 mt-1 leading-relaxed">{successMessage}</p>
              </div>
              <button 
                onClick={() => setSuccessMessage(null)}
                className="text-white/60 hover:text-white ml-auto shrink-0 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* --- PAGE HERO --- */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#f6eada]/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pr-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0041f5]/10 text-[#0041f5] text-xs font-bold uppercase tracking-wider w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#0041f5]" />
              Achievements
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] text-balance">
              Celebrating Every Student&apos;s Success
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed text-balance">
              Every achievement reflects the hard work of our students, teachers, and parents. At NIMT Beacon School, we encourage every child to dream big, work hard, and achieve excellence in academics, sports, leadership, innovation, and creativity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#academics" 
                className="inline-flex items-center justify-center bg-[#0041f5] hover:bg-[#0041f5]/95 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-[#0041f5]/20 hover:shadow-2xl hover:shadow-[#0041f5]/30 transition group text-center"
              >
                Explore Achievements
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
              </a>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center justify-center bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold px-8 py-4 rounded-2xl shadow-sm hover:shadow transition text-center"
              >
                Book Campus Visit
              </button>
            </div>
          </div>

          {/* Visual Right (Image-first 65% design philosophy) */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src="/achievement.webp" 
              alt="NIMT Beacon Students Celebrating" 
              fill
              priority
              className="object-cover group-hover:scale-105 transition duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white p-6 md:p-8 rounded-2xl bg-slate-950/40 backdrop-blur-md border border-white/10">
              <p className="text-[#fffc4d] text-xs font-bold uppercase tracking-widest">NIMT Beacon Champions</p>
              <h3 className="text-xl md:text-2xl font-bold mt-1 text-white">Competing on the Global Stage</h3>
              <p className="text-sm text-slate-200 mt-2 leading-relaxed">
               Our students proudly represent NIMT Beacon School at prestigious national and international championships, earning outstanding rankings, world-level participation, and recognized certifications. 
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: OUR JOURNEY OF EXCELLENCE (Counters) --- */}
      <section id="journey" ref={statsSectionRef} className="py-24 bg-[#f6eada]/40 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0041f5]">Milestones in Numbers</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our Journey of Excellence</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              A record of trust, consistent achievements, and a warm learning atmosphere that empowers children.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <StatCounter 
                key={idx} 
                target={stat.value} 
                suffix={stat.suffix} 
                label={stat.label} 
                info={stat.info}
                trigger={startCounters}
              />
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 3: ACADEMIC ACHIEVEMENTS --- */}
      <section id="academics" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0041f5]">Scholastic Laurels</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Academic Achievements</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Honoring academic thoroughness and individual growth across core board curriculums and high subject honors.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicCards.map((card) => (
              <div 
                key={card.id}
                className="group flex flex-col h-full bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0041f5] uppercase tracking-wider shadow-sm">
                    {card.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#0041f5] transition duration-200">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-grow">
                    {card.description}
                  </p>
                
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

  

      


   

     
   

      {/* --- SECTION 14: TIMELINE OF SUCCESS --- */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0041f5]">Our Legacy</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Timeline of Success</h2>
            <p className="text-slate-600 leading-relaxed text-sm max-w-lg mx-auto">
              Follow our structural growth from basic foundations to state-level infrastructure achievements and digital silver jubilees.
            </p>
          </div>

          {/* Timeline Node Tree */}
          <div className="relative border-l-2 border-[#0041f5]/20 ml-4 md:ml-32 space-y-12 pb-6">
            {timelineMilestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                
                {/* Year Badge Left - Visible on Desktop */}
                <div className="absolute hidden md:block -left-36 top-1 text-right w-24">
                  <span className="text-xl font-bold text-[#0041f5] font-mono tracking-tight">{milestone.year}</span>
                </div>

                {/* Core Circle Node */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-[#0041f5] bg-white group-hover:bg-[#0041f5] transition duration-300" />
                
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
                  {/* Year Tag for Mobile */}
                  <span className="inline-block md:hidden text-xs font-bold text-[#0041f5] font-mono mb-1">{milestone.year}</span>
                  <h4 className="font-bold text-slate-900 text-lg leading-snug">{milestone.title}</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">{milestone.desc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 15: CALL TO ACTION --- */}
      <section className="relative py-24 bg-[#0041f5] text-white overflow-hidden">
        {/* Abstract vector backgrounds */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-12 -left-12 w-96 h-96 rounded-full border-8 border-white" />
          <div className="absolute -bottom-12 -right-12 w-96 h-96 rounded-full border-8 border-white" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#fffc4d]">Admissions Now Open</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Your Child Could Be Our Next Success Story
          </h2>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Admissions are fully open from Nursery to Class XII. Give your child the foundational parameters of elite scholarship, ethical leadership, and high technology competence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={() => setIsApplyOpen(true)}
              className="bg-white hover:bg-[#f6eada] text-[#0041f5] font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Apply Online Now
            </button>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#0041f5] hover:bg-white/10 text-white border-2 border-white/20 hover:border-white font-bold px-8 py-4 rounded-2xl transition"
            >
              Book Campus Tour
            </button>
          </div>
        </div>
      </section>

     

   

      {/* --- MODAL: BOOK CAMPUS VISIT --- */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-100 shadow-2xl p-8 overflow-hidden z-10"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsBookingOpen(false)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="space-y-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0041f5]/10 text-[#0041f5] flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Book Campus Visit</h3>
                  <p className="text-slate-500 text-xs">Schedule an individual guided walkthrough of our modern classrooms, sports dome, and labs.</p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="text-slate-700 block mb-1">Parent&apos;s Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Ramesh Iyer"
                      value={bookingForm.parentName}
                      onChange={(e) => setBookingForm({...bookingForm, parentName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-700 block mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. parent@email.com"
                        value={bookingForm.parentEmail}
                        onChange={(e) => setBookingForm({...bookingForm, parentEmail: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-slate-700 block mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. 9876543210"
                        value={bookingForm.parentPhone}
                        onChange={(e) => setBookingForm({...bookingForm, parentPhone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-700 block mb-1">Student Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Rahul"
                        value={bookingForm.studentName}
                        onChange={(e) => setBookingForm({...bookingForm, studentName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-slate-700 block mb-1">Target Grade *</label>
                      <select 
                        value={bookingForm.grade}
                        onChange={(e) => setBookingForm({...bookingForm, grade: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                      >
                        {["Nursery", "Kindergarten", "Class I - V", "Class VI - VIII", "Class IX - XII"].map((gr) => (
                          <option key={gr} value={gr}>{gr}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 block mb-1">Preferred Date *</label>
                    <input 
                      type="date" 
                      required
                      value={bookingForm.visitDate}
                      onChange={(e) => setBookingForm({...bookingForm, visitDate: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#0041f5] hover:bg-[#0041f5]/95 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-[#0041f5]/10 mt-2 text-sm"
                  >
                    Confirm Booking Request
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL: APPLY NOW --- */}
      <AnimatePresence>
        {isApplyOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplyOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-100 shadow-2xl p-8 overflow-hidden z-10"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsApplyOpen(false)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="space-y-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0041f5]/10 text-[#0041f5] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Admission Inquiry Form</h3>
                  <p className="text-slate-500 text-xs">Apply for Nursery to Class XII. Our coordinator will contact you to explain eligibility and fee schedules.</p>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="text-slate-700 block mb-1">Parent&apos;s Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Preeti Deshmukh"
                      value={applyForm.parentName}
                      onChange={(e) => setApplyForm({...applyForm, parentName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-700 block mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. parent@example.com"
                        value={applyForm.parentEmail}
                        onChange={(e) => setApplyForm({...applyForm, parentEmail: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-slate-700 block mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. 9876543210"
                        value={applyForm.parentPhone}
                        onChange={(e) => setApplyForm({...applyForm, parentPhone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-700 block mb-1">Student Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Aranya"
                        value={applyForm.studentName}
                        onChange={(e) => setApplyForm({...applyForm, studentName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-slate-700 block mb-1">Admitted Class *</label>
                      <select 
                        value={applyForm.grade}
                        onChange={(e) => setApplyForm({...applyForm, grade: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                      >
                        {["Nursery", "KG - I", "KG - II", "Class I - V", "Class VI - VIII", "Class IX", "Class XI"].map((cl) => (
                          <option key={cl} value={cl}>{cl}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 block mb-1">Previous School (if applicable)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Modern Primary School"
                      value={applyForm.previousSchool}
                      onChange={(e) => setApplyForm({...applyForm, previousSchool: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-850 font-normal focus:outline-none focus:border-[#0041f5] transition text-sm"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#0041f5] hover:bg-[#0041f5]/95 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-[#0041f5]/10 mt-2 text-sm"
                  >
                    Submit Admissions Request
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL: GALLERY LIGHTBOX --- */}
      <AnimatePresence>
        {selectedGalleryItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGalleryItem(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-2xl z-10"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedGalleryItem(null)}
                  className="absolute top-5 right-5 z-20 text-white bg-slate-950/40 hover:bg-slate-950/60 p-2 rounded-full backdrop-blur-sm transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Big Image (65% visual weight) */}
                <div className="relative h-[300px] sm:h-[450px] w-full bg-slate-900">
                  <Image 
                    src={selectedGalleryItem.image} 
                    alt={selectedGalleryItem.title} 
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Text */}
                <div className="p-8 space-y-3 bg-white">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[#0041f5]" />
                    <span className="text-xs font-bold text-[#0041f5] uppercase tracking-widest">{selectedGalleryItem.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedGalleryItem.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{selectedGalleryItem.description}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-400 font-medium">
                    <span>NIMT Beacon School Pride Gallery</span>
                    <button 
                      onClick={() => {
                        setSelectedGalleryItem(null);
                        setIsBookingOpen(true);
                      }}
                      className="text-[#0041f5] font-bold hover:underline"
                    >
                      Visit Campus In Person
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// --- LIGHTWEIGHT INTERNAL STATS COUNTER COMPONENT ---

interface StatProps {
  target: number;
  suffix: string;
  label: string;
  info: string;
  trigger: boolean;
}

function StatCounter({ target, suffix, label, info, trigger }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(Math.floor(duration / target), 30);
    
    const timer = setInterval(() => {
      start += Math.ceil(target / 40); // larger step size to complete smoothly
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [trigger, target]);

  return (
    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition flex flex-col justify-between h-full group">
      <div>
        <div className="text-3xl lg:text-4xl font-extrabold text-[#0041f5] font-mono tracking-tight group-hover:scale-105 transition-transform duration-300">
          {count}
          {suffix}
        </div>
        <h4 className="font-bold text-slate-900 text-base mt-2 group-hover:text-[#0041f5] transition">
          {label}
        </h4>
      </div>
      <p className="text-slate-500 text-xs leading-relaxed mt-3 pt-3 border-t border-slate-100">
        {info}
      </p>
    </div>
  );
}
