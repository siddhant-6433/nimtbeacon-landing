'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { ShieldAlert, Users, Award, BookOpen, Quote, Sparkles, Smile, ShieldCheck } from 'lucide-react';

interface Leader {
  name: string;
  position: string;
  image: string;
  intro: string;
  experience: string;
  qualifications: string;
}

const leaders: Leader[] = [
  {
    name: 'Dr. Sarita Sharma',
    position: 'Principal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    intro: 'Welcome to NIMT Beacon School. I believe education is not only about achieving high marks but also about becoming a confident, responsible, and compassionate individual. Every child deserves opportunities to discover their talents, ask questions, and grow into future leaders. Together with parents, we create an environment where students enjoy learning, respect others, and prepare for life with confidence.',
    experience: '25+ Years in Education Leadership',
    qualifications: 'Ph.D. in Education, M.A. in Psychology'
  },
  {
    name: 'Mr. Amit Mukherjee',
    position: 'Vice Principal',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    intro: 'My focus is to ensure a safe, organized, and friendly school environment. I work closely with students to maintain discipline while supporting their sports, physical fitness, and outdoor activities.',
    experience: '18+ Years Experience',
    qualifications: 'M.P.Ed, B.Ed'
  },
  {
    name: 'Mrs. Rachel D\'Souza',
    position: 'Academic Coordinator',
    image: 'https://images.unsplash.com/photo-1580894732444-8fecef2601ee?auto=format&fit=crop&w=400&q=80',
    intro: 'I design curriculum models that make learning fun, easy to understand, and highly practical. I help our teachers integrate smart tools so students can visualize concepts clearly.',
    experience: '15+ Years Experience',
    qualifications: 'M.Sc, M.Ed, CBSE Trainer'
  },
  {
    name: 'Mr. Vikram Singh',
    position: 'Activities Head',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    intro: 'I believe learning continues outside classrooms. From music assemblies and school theater to community service, I encourage children to find and build their creative strengths.',
    experience: '12+ Years Experience',
    qualifications: 'Master of Fine Arts, PG Diploma in Youth Welfare'
  },
  {
    name: 'Dr. Ananya Sen',
    position: 'Student Counsellor',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    intro: 'Mental wellness and stress management are key to healthy learning. I provide personal, supportive guidance to students, helping them manage emotions, study pressures, and plan their higher studies.',
    experience: '10+ Years Experience',
    qualifications: 'M.Sc in Child Psychology, Certified Career Coach'
  }
];

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      
      <main id="leadership-main" className="pt-24 min-h-screen bg-white">
        
        {/* Page Hero */}
        <section id="leadership-hero" className="relative h-[380px] bg-slate-900 flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80"
            alt="NIMT Beacon leadership in a campus environment"
            fill
            className="object-cover opacity-25"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto text-center px-4 z-10">
            <span className="inline-block bg-accent text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              School Leadership Team
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Experienced Minds, Warm Hearts
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Meet the educators, coordinators, and counselors who guide our classrooms with patience, care, and wisdom.
            </p>
          </div>
        </section>

        {/* Leadership Philosophy Section */}
        <section id="leadership-philosophy" className="py-20 bg-slate-50/60 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="text-primary text-xs font-bold uppercase tracking-wider block">How We Guide</span>
            <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">Our Leadership Philosophy</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At NIMT Beacon School, leadership does not mean standing behind a closed office door. Our principal, coordinators, and heads can be seen walking around the campus daily, chatting with students, listening to teachers, and greeting parents. We believe in leading by example, showing kindness, and making sure that every child feels safe and cared for.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm" id="philosophy-pill-1">
                <Smile className="h-5 w-5 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-slate-900 text-xs uppercase">Approachable</h4>
                <p className="text-slate-500 text-[11px] mt-1">Our doors are always open to hear parent and student feedback.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm" id="philosophy-pill-2">
                <ShieldCheck className="h-5 w-5 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-slate-900 text-xs uppercase">Supportive</h4>
                <p className="text-slate-500 text-[11px] mt-1">We give students positive motivation rather than raw pressure.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm" id="philosophy-pill-3">
                <BookOpen className="h-5 w-5 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-slate-900 text-xs uppercase">Future-Focused</h4>
                <p className="text-slate-500 text-[11px] mt-1">We plan our daily programs around real-world child development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Principal Detailed Section */}
        <section id="principal-special" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-alt-bg/30 rounded-[40px] p-8 sm:p-12 lg:p-16 border border-slate-100/50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                
                {/* Principal image */}
                <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src={leaders[0].image}
                    alt={`${leaders[0].name} - ${leaders[0].position} of NIMT Beacon School`}
                    fill
                    className="object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl text-white">
                    <p className="text-xs font-semibold">{leaders[0].experience}</p>
                    <p className="text-[10px] text-slate-300">{leaders[0].qualifications}</p>
                  </div>
                </div>

                {/* Principal Message Copy */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider block">Message From Our Principal</span>
                  <h2 className="text-2xl sm:text-4.5xl font-bold text-slate-900 tracking-tight">{leaders[0].name}</h2>
                  <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-widest">{leaders[0].position}</p>
                  
                  <div className="relative">
                    <Quote className="h-10 w-10 text-primary/10 absolute -top-5 -left-4 pointer-events-none" />
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4 italic">
                      &quot;Welcome to NIMT Beacon School. We believe education is not only about achieving high marks but also about becoming a confident, responsible, and compassionate individual.&quot;
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Every child deserves opportunities to discover their talents, ask questions, and grow into future leaders. We do not support forced academic pressure; instead, we build curious minds that genuinely enjoy learning and exploring.
                  </p>
                  
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Together with parents, we create an environment where students enjoy learning, respect others, and prepare for life with confidence. I look forward to welcoming you to our campus.
                  </p>

                  <div className="pt-4">
                    <span className="font-sans font-extrabold text-slate-950 block text-base">Dr. Sarita Sharma</span>
                    <span className="text-xs text-slate-500 block">Principal, NIMT Beacon School</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Other Leadership Team Cards */}
        <section id="other-leaders" className="py-20 bg-slate-50/40 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">Our Key Pillars</span>
              <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">Academic & Activity Heads</h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-3">
                These experienced coordinators ensure our educational standards remain high and our student support systems stay exceptionally personal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.slice(1).map((leader, idx) => (
                <div 
                  key={idx} 
                  id={`leader-card-${leader.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Leader Image */}
                    <div className="relative h-[220px] rounded-2xl overflow-hidden bg-slate-50">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} - ${leader.position}`}
                        fill
                        className="object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {/* Name & Position */}
                    <div>
                      <h3 className="font-bold text-slate-900 text-base leading-snug">{leader.name}</h3>
                      <p className="text-primary text-[11px] font-bold uppercase tracking-wider mt-1">{leader.position}</p>
                      <p className="text-slate-400 text-[10px] mt-0.5">{leader.experience}</p>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed">
                      {leader.intro}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 mt-4 text-[10px] text-slate-400 font-medium">
                    {leader.qualifications}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Faculty Quality Summary */}
        <section id="faculty-quality" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <span className="p-2 rounded-xl bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <Users className="h-4 w-4" /> Professional & Patient Faculty
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">Every Teacher is a Mentor</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              Our classroom teachers are selected not just for their university degrees, but for their genuine kindness, patience, and ability to understand children. Every year, our teachers complete multiple mentoring workshops to learn the latest child-friendly methods and supportive classroom care practices.
            </p>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
