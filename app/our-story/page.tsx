'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Calendar, Compass, Award, ShieldCheck, Heart, User, CheckCircle } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const milestones: Milestone[] = [
  {
    year: '2001',
    title: 'The Journey Begins',
    description: 'NIMT Beacon School was started by a group of passionate educators. We opened with just a few small classrooms, a small playground, and a deep commitment to give children a warm, supportive space to learn.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80',
    tag: 'Founding Year'
  },
  {
    year: '2005',
    title: 'Campus Expansion',
    description: 'To welcome more children, we expanded our main campus building. We built larger, brighter classrooms, set up our first library, and created a dedicated play area for early years students.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    tag: 'New Infrastructure'
  },
  {
    year: '2012',
    title: 'Smart Classrooms Introduced',
    description: 'We believe visual tools make learning easier and more fun. In 2012, we introduced interactive smart screens in all classrooms, allowing teachers to share practical examples and videos.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    tag: 'Modern Tools'
  },
  {
    year: '2018',
    title: 'Advanced Science Laboratories',
    description: 'To support practical learning, we built modern physics, chemistry, and biology laboratories. Here, students can perform experiments safely and see science come alive in front of their eyes.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    tag: 'Academic Growth'
  },
  {
    year: '2022',
    title: 'Robotics & Coding Hub',
    description: 'Understanding technology is essential for the future. We introduced basic robotics and logical programming classes. Students design small machines, learning math and physics through play.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    tag: 'Future-Ready Skills'
  },
  {
    year: '2025',
    title: 'Integrated JEE & NEET Support',
    description: 'We created an integrated program for senior secondary students who dream of becoming engineers and doctors. They receive expert school coaching alongside regular CBSE classes to avoid extra tuition stress.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    tag: 'Higher Success'
  },
  {
    year: '2026',
    title: 'Future Ready Learning Campus',
    description: 'Today, our campus is a safe space for hundreds of happy students. We continue to introduce green solar energy, modern playfields, and comprehensive teacher coaching programs.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    tag: 'Looking Forward'
  }
];

export default function OurStoryPage() {
  return (
    <>
      
      <main id="our-story-main" className="pt-24 min-h-screen">
        
        {/* Hero Section */}
        <section id="story-hero" className="relative h-[450px] bg-slate-900 flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
            alt="NIMT Beacon School students in an outdoor learning discussion"
            fill
            className="object-cover opacity-35"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto text-center px-4 z-10">
            <span className="inline-block bg-accent text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
              Our Journey & History
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              An Educational Legacy Built on Trust, Care, and Community
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              For over two decades, we have focused on what matters most: helping every child feel valued, safe, and encouraged to discover their unique potential.
            </p>
          </div>
        </section>

        {/* History Overview & Philosophy */}
        <section id="story-history-philosophy" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider block">How We Began</span>
                <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight leading-tight">
                  A Simple Goal: To Teach with Kindness and Encouragement
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  In 2001, our founders noticed that many schools focused only on textbook reading and examination grades. They wanted to create a school that did things differently—where students could ask questions freely, learn by doing, and build strong character values alongside high academic marks.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  That vision became **NIMT Beacon School**. We believe that when children feel happy and safe in their classrooms, they naturally enjoy learning. We provide personal attention to every student, ensuring no child feels left behind.
                </p>
                
                {/* Visual Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex gap-3 items-start" id="highlight-1">
                    <div className="p-2 bg-slate-50 text-primary rounded-xl shrink-0 border border-slate-100">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Caring Educators</h4>
                      <p className="text-slate-500 text-xs mt-1">Teachers who listen, understand, and guide with patience.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start" id="highlight-2">
                    <div className="p-2 bg-slate-50 text-primary rounded-xl shrink-0 border border-slate-100">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Safe environment</h4>
                      <p className="text-slate-500 text-xs mt-1">A secure, green school campus with 24x7 watchful staff.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Image Side */}
              <div className="lg:col-span-6 relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-xl" id="story-history-img-wrapper">
                <Image
                  src="/campus-main.webp"
                  alt="NIMT Beacon School beautifully landscaped main campus"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest block mb-1">Our Base</span>
                  <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                    &quot;We built a space where nature and learning come together. Our campus features open green spaces where students can breathe and play safely.&quot;
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Milestone Timeline Section */}
        <section id="story-timeline" className="py-20 bg-alt-bg/30 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">Milestones</span>
              <h2 className="text-2xl sm:text-4.5xl font-bold text-slate-900 tracking-tight leading-tight">
                Our Educational Growth
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-3">
                Look back at how our school has evolved over the years, introducing modern facilities and programs for our children.
              </p>
            </div>

            {/* Vertical/Horizontal Timeline Grid */}
            <div className="space-y-12 max-w-5xl mx-auto">
              {milestones.map((milestone, idx) => (
                <div 
                  key={idx}
                  id={`milestone-card-${milestone.year}`}
                  className={`flex flex-col lg:flex-row items-center gap-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Photo representation */}
                  <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden shrink-0 bg-slate-50">
                    <Image
                      src={milestone.image}
                      alt={`${milestone.title} - NIMT Beacon Milestone ${milestone.year}`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-lg">
                      {milestone.tag}
                    </div>
                  </div>

                  {/* Copy Description */}
                  <div className="w-full lg:w-1/2 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <span className="text-2xl sm:text-3xl font-extrabold text-primary">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{milestone.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Future Vision Section */}
        <section id="story-future" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
            <span className="p-2 rounded-xl bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <Compass className="h-4 w-4" /> Our Future Vision
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight leading-tight">
              Preparing Confident Learners for Tomorrow
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              Our growth does not mean we change who we are. Even as we build modern learning spaces, introduce virtual tools, and design advanced labs, our focus remains on the child. We are committed to keeping NIMT Beacon School a friendly, encouraging, and supportive place where learning remains a joyful adventure.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <div className="px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2" id="future-value-1">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-xs font-bold text-slate-800">Green & Sustainable Campus</span>
              </div>
              <div className="px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2" id="future-value-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-xs font-bold text-slate-800">Teacher Mentoring Focus</span>
              </div>
              <div className="px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2" id="future-value-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-xs font-bold text-slate-800">Holistic Student Growth</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      
    </>
  );
}
