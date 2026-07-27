'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Compass, Eye, ShieldCheck, Heart, Sparkles, Smile, Users, BookOpen, Star, HelpCircle } from 'lucide-react';

interface CoreValue {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const coreValues: CoreValue[] = [
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    title: 'Respect',
    desc: 'We value every individual and teach our children to respect different perspectives, backgrounds, and opinions.'
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    title: 'Integrity',
    desc: 'We practice and encourage absolute honesty, taking full responsibility for our actions and choices.'
  },
  {
    icon: <Star className="h-5 w-5 text-primary" />,
    title: 'Excellence',
    desc: 'We support students in doing their best in everything they pursue, whether academics, sports, or creative arts.'
  },
  {
    icon: <Heart className="h-5 w-5 text-primary" />,
    title: 'Kindness',
    desc: 'We teach children to be gentle, helpful, and empathetic, creating a safe and welcoming space for all.'
  },
  {
    icon: <Sparkles className="h-5 w-5 text-primary" />,
    title: 'Innovation',
    desc: 'We welcome new teaching ideas, practical models, and technology to help children solve problems creatively.'
  },
  {
    icon: <Compass className="h-5 w-5 text-primary" />,
    title: 'Responsibility',
    desc: 'We learn to care for our school, our wider community, and the environment around us.'
  },
  {
    icon: <Smile className="h-5 w-5 text-primary" />,
    title: 'Leadership',
    desc: 'We encourage students to take initiative, guide their peers with care, and stand up for what is right.'
  },
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    title: 'Teamwork',
    desc: 'We teach children to collaborate, share tasks, and celebrate success together as a unified team.'
  },
  {
    icon: <HelpCircle className="h-5 w-5 text-primary" />,
    title: 'Curiosity',
    desc: 'We celebrate questions. We believe a curious mind is a learning mind that grows every day.'
  }
];

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      
      <main id="vision-mission-main" className="pt-24 min-h-screen bg-slate-50/50">
        
        {/* Page Hero */}
        <section id="vision-hero" className="relative h-[380px] bg-slate-900 flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80"
            alt="NIMT Beacon students engaging in class projects happily"
            fill
            className="object-cover opacity-25"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto text-center px-4 z-10">
            <span className="inline-block bg-accent text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Our Vision, Mission & Values
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Guided by Strong Principles
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              We focus on building strong character, practical skills, and a lifelong interest in learning.
            </p>
          </div>
        </section>

        {/* Vision & Mission Split Cards */}
        <section id="vision-mission-details" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Vision Card */}
              <div 
                id="vision-glass-card" 
                className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                <div className="space-y-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary" id="vision-icon-box">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Our Outlook</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Our Vision</h2>
                  </div>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                    &quot;To inspire confident learners, responsible citizens, and compassionate leaders who make a positive difference in the world.&quot;
                  </p>
                </div>
                <div className="pt-8 border-t border-slate-50 text-xs text-slate-500 font-medium">
                  NIMT Beacon School Core Purpose
                </div>
              </div>

              {/* Mission Card */}
              <div 
                id="mission-glass-card" 
                className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                <div className="space-y-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary" id="mission-icon-box">
                    <Compass className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Our Pathway</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Our Mission</h2>
                  </div>
                  
                  {/* Milestones list under mission */}
                  <ul className="space-y-3.5 text-slate-700 text-sm sm:text-base">
                    {[
                      'Provide quality education in a happy environment.',
                      'Encourage natural curiosity and critical thinking.',
                      'Develop creative skills and practical problem-solving.',
                      'Build high self-confidence and self-discipline.',
                      'Respect every child\'s unique learning speed and traits.',
                      'Create lifelong learners who love discovering new things.'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8 border-t border-slate-50 text-xs text-slate-500 font-medium">
                  What we execute every day in our classrooms
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section id="vision-values" className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">Our Foundation</span>
              <h2 className="text-2xl sm:text-4.5xl font-bold text-slate-900 tracking-tight">Our Core Values</h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-3">
                These nine values guide our students, teachers, and staff in every daily action, class discussion, and school decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {coreValues.map((val, idx) => (
                <div 
                  key={idx}
                  id={`value-card-${val.title.toLowerCase()}`}
                  className="bg-slate-50/60 p-6 sm:p-8 rounded-3xl border border-slate-100/80 hover:bg-white hover:shadow-md hover:border-slate-100 transition-all duration-200"
                >
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100 mb-5">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">{val.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Educational Philosophy */}
        <section id="vision-philosophy" className="py-20 bg-alt-bg/25 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 relative h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Students reading books in a happy modern school environment"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider block">Our Teaching Spirit</span>
                <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight">Our Educational Philosophy</h2>
                
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  We believe every child learns in a different way and at their own pace. True education is not about memorizing textbook pages; it is about learning how to think, how to explore, and how to use knowledge practically.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Our teachers act as friendly guides rather than strict lecturers. We encourage children to ask &quot;why&quot; and &quot;how&quot; instead of simply giving them raw answers. In this supportive space, students build the confidence to explore their creative abilities and step up as compassionate helpers.
                </p>

                <div className="pt-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                    <BookOpen className="h-5 w-5 text-primary shrink-0" />
                    <span>Learning by Doing with Real-World Projects</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                    <BookOpen className="h-5 w-5 text-primary shrink-0" />
                    <span>Friendly, Supportive, and Highly Personal Care</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
