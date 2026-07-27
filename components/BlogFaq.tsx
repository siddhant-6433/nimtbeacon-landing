'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

const defaultFaqs: FAQItem[] = [
  {
    q: "What is the curriculum followed at NIMT Beacon School?",
    a: "NIMT Beacon School follows the CBSE curriculum integrated with advanced STEM (Science, Technology, Engineering, and Math) modules, hands-on learning, and comprehensive co-curricular programs to ensure holistic development."
  },
  {
    q: "How does NIMT Beacon School ensure student safety and secure transit?",
    a: "The school implements 24/7 CCTV monitoring across campus, thorough background checks for all academic and support staff, GPS-enabled secure transport fleets, and strict gate entry protocols."
  },
  {
    q: "Does NIMT Beacon School offer boarding or hostel facilities?",
    a: "Yes, NIMT Beacon School features secure, state-of-the-art separate boarding houses for boys and girls, with round-the-clock wardens, nutrient-rich meals, and integrated academic support."
  },
  {
    q: "What is the teacher-to-student ratio at NIMT Beacon School?",
    a: "We maintain an excellent 1:15 teacher-to-student ratio, ensuring personalized attention, individualized care, and deep interactive engagement in every single classroom."
  },
  {
    q: "How can we schedule a campus visit or book an in-person school tour?",
    a: "Parents can instantly book a personalized campus visit by clicking the 'Book Campus Visit' button in our blog, selecting a preferred date/slot, or by reaching out directly to our admissions helpline."
  }
];

interface BlogFaqProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function BlogFaq({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Find quick responses regarding NIMT admissions, academic pathways, and security protocols."
}: BlogFaqProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0041F5]">ANSWERS</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#0041F5]">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
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
  );
}