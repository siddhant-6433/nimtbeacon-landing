export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DayRoutineItem {
  time: string;
  activity: string;
}


export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  stars: number;
  quote: string;
  videoSrc: string;
  thumbnail: string;
}
export const FAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is the campus safe for children?",
    answer: "Yes, NIMT Beacon School features 24x7 security with trained guards, comprehensive CCTV coverage across academic & residential buildings, strict double-gate entry/exit policies, and dedicated wardens on shift around-the-clock."
  },
  {
    id: "faq-2",
    question: "How do students communicate with parents?",
    answer: "We offer dedicated communication slots during the week. Students have controlled access to calls/video check-ins, allowing them to remain connected with their parents while maintaining a focused, distraction-free routine."
  },
  {
    id: "faq-3",
    question: "What is the food quality like?",
    answer: "Our in-house dining hall serves pure, hygienic, balanced, and nutritious multi-cuisine meals. Meals are prepared under strict hygienic supervision by professional chefs, providing standard daily energy requirements tailored for growing boarders."
  },
  {
    id: "faq-4",
    question: "How is the boarding routine structured?",
    answer: "The boarding schedule is meticulously designed to balance academic studies, mandatory self-study sessions with mentors, sport & co-curricular activities, and healthy sleeping slots (typically 8 hours of sleep)."
  },
  {
    id: "faq-5",
    question: "What about medical support?",
    answer: "We have an on-campus modern medical wing with 24x7 nursing staff, regular doctor visits, emergency ambulance provisions, and tie-ups with leading local multi-specialty hospitals."
  },
  {
    id: "faq-6",
    question: "How is hostel accommodation arranged?",
    answer: "Hostels are divided into separate spacious blocks for boys and girls. Rooms are well-ventilated, equipped with custom study desks, personal storage wardrobes, and high-quality bedding. Resident wardens stay within the blocks."
  },
  {
    id: "faq-7",
    question: "What is the admission process?",
    answer: "Admissions start by submitting the Inquiry Form. Following this, an interaction and assessment are scheduled, which help evaluate the child's readiness for a residential life. Selected candidates are then offered seats based on vacancy."
  },
  {
    id: "faq-8",
    question: "What is the fee structure?",
    answer: "The fee structure is transparent and covers tuition, boarding lodge, food services, laundry, sports amenities, and competitive prep. Complete fee breakdowns can be sent directly to registered email addresses post-inquiry."
  }
];

export const DailyRoutine: DayRoutineItem[] = [
  { time: "6:00 AM", activity: "Wake Up" },
  { time: "6:00 AM – 6:30 AM", activity: "Freshen Up" },
  { time: "6:30 AM – 7:00 AM", activity: "Morning Exercise" },
  { time: "7:00 AM – 7:45 AM", activity: "Bath & Get Ready" },
  { time: "7:45 AM – 8:05 AM", activity: "Breakfast" },
  { time: "8:10 AM", activity: "Departure to School" },
  { time: "8:30 AM – 2:00 PM", activity: "School Hours" },
  { time: "2:00 PM – 2:30 PM", activity: "Lunch" },
  { time: "2:30 PM – 4:30 PM", activity: "Supervised Study" },
  { time: "4:30 PM – 5:30 PM", activity: "Games & Sports Activities" },
  { time: "5:45 PM – 6:00 PM", activity: "Evening Snacks" },
  { time: "6:00 PM – 7:30 PM", activity: "Evening Study Hours" },
  { time: "7:30 PM – 8:00 PM", activity: "Dinner" },
  { time: "8:00 PM – 9:00 PM", activity: "Self Study / Reading Time" },
  { time: "9:00 PM – 10:00 PM", activity: "Relaxation, Bed Preparation & Lights Off" }
];

export const Testimonials: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Parents of Vivan",
    role: "Class 5th Student",
    stars: 5,
    quote: "The school provides real-time updates and personalized feedback, helping us stay connected with our child's progress..",
    videoSrc: "/videos/testimonial-1.mp4",
    thumbnail: "/images/testimonial-1.webp",
  },
  {
    id: "t-2",
    name: "Parent Of Kavyansh ",
    role: "Class 11th Student",
    stars: 5,
    quote: "The teachers are very helpful and supportive. We've seen a lot of improvement in our child since Class 11",
    videoSrc: "/videos/testimonial-2.mp4",
    thumbnail: "/images/testimonial-2.webp",
  },
  {
    id: "t-3",
    name: "Parent Of Vani Kaushik",
    role: "Class 5th Student",
    stars: 5,
    quote: "We are fully satisfied with the school. The staff and teachers have made a very valuable contribution to our child's academic and personal growth.",
    videoSrc: "/videos/testimonial-3.mp4",
    thumbnail: "/images/testimonial-3.webp",
  },
];
