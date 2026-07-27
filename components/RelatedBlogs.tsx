'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

export interface RelatedBlogItem {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl?: string;
}

const defaultBlogs: RelatedBlogItem[] = [
  {
    id: 1,
    title: "Boarding School vs Day School: Which One Is Right for Your Child?",
    excerpt: "Choosing between a boarding school and a day school is an important decision for every parent.",
    category: "EARLY YEARS",
    readTime: "5 min read",
    imageUrl: "/blogs/boarding-school-vs-day-school-1.webp",
    imageAlt: "Toddler playing with building blocks in modern school play area",
    linkUrl: "/blogs/boarding-school-vs-day-school"
  },
  {
    id: 2,
    title: "डॉक्टर बनने के लिए सही तैयारी कैसे करें?",
    excerpt: "हर साल लाखों छात्र डॉक्टर बनने का सपना देखते हैं। लेकिन केवल सपना देखना ही काफी नहीं है। अगर आप सच में एक सफल डॉक्टर बनना चाहते हैं, तो सही समय पर सही तैयारी शुरू करना बहुत ज़रूरी है।",
    category: "ACADEMICS",
    readTime: "6 min read",
    imageUrl: "/blogs/doctor-banne-ke-liye-sahi-taiyari-kaise-kare-1.webp",
    imageAlt: "/blogs/doctor-banne-ke-liye-sahi-taiyari-kaise-kare-1.webp",
    linkUrl: "/blogs/doctor-banne-ke-liye-sahi-taiyari-kaise-kare"
  },
  {
    id: 3,
    title: "CBSE और ICSE Board में क्या अंतर है?",
    excerpt: "जब बच्चे के स्कूल में एडमिशन की बात आती है, तो माता-पिता के मन में सबसे आम सवाल होता है—CBSE और ICSE Board में क्या अंतर है?",
    category: "STEM",
    readTime: "7 min read",
    imageUrl: "/blogs/cbse-vs-icse-board-me-kya-antar-hai-1.webp",
    imageAlt: "High schooler testing a robot in high quality campus physics laboratory",
    linkUrl: "/blogs/cbse-vs-icse-board-me-kya-antar-hai"
  }
];

interface RelatedBlogsProps {
  blogs?: RelatedBlogItem[];
  viewAllUrl?: string;
}

export default function RelatedBlogs({ blogs = defaultBlogs, viewAllUrl = "/blogs" }: RelatedBlogsProps) {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0041F5] block mb-1">RECOMMENDED</span>
            <h3 className="text-2xl font-bold text-slate-900">Related Articles</h3>
          </div>
          <Link href={viewAllUrl} className="text-sm font-semibold text-[#0041F5] hover:underline flex items-center gap-1">
            View All Blogs <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={blog.linkUrl || "#"}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={blog.imageUrl}
                  alt={blog.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F6EADA] text-slate-900 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col space-y-3">
                <h4 className="font-bold text-slate-900 group-hover:text-[#0041F5] transition-colors leading-snug">
                  {blog.title}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>
                <div className="pt-3 border-t border-gray-100 mt-auto flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span>{blog.readTime}</span>
                  <span className="text-[#0041F5] group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    Read More <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}