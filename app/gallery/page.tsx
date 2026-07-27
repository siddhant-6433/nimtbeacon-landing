

'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Check, 
  MapPin, 
  Calendar, 
  Phone, 
  Mail,
  Clock,
  BookOpen,
  Camera
} from 'lucide-react';

// Brand Constants
const BRAND = {
  name: 'NIMT Beacon School',
  colors: {
    primary: '#0041f5',
    secondaryBg: '#f6eada',
    background: '#ffffff',
    accent: '#fffc4d',
  }
};

// Filter categories as specified by the user
const CATEGORIES = [
  'All',
  'Campus',
  'Academics',
  'Classrooms',
  'Science Labs',
  'Computer Labs',
  'Robotics',
  'Library',
  'Sports',
  'Events',
  'Annual Function',
  'Cultural Activities',
  'Art & Craft',
  'Music & Dance',
  'Hostel',
  'Day Boarding',
  'Celebrations',
  'Field Trips'
] as const;

type CategoryType = typeof CATEGORIES[number];

interface ImageItem {
  id: string;
  unsplashId: string;
  alt: string;
  categories: CategoryType[];
  width: number;
  height: number;
}

// 32 premium, DSLR-quality real photographs mapping exactly to NIMT Beacon School's activities
const GALLERY_IMAGES: ImageItem[] = [
  // Campus
  {
    id: 'img-1',
    unsplashId: 'photo-1541829016-215cf3913990.webp',
    alt: 'NIMT Beacon School premium modern building corridors with high glass windows and natural sunlight',
    categories: ['Campus'],
    width: 800,
    height: 1100, // Tall
  },
  {
    id: 'img-2',
    unsplashId: 'photo-1585320806297-9794b3e4eeae.webp',
    alt: 'Lush green lawns and clean landscape of the NIMT Beacon School campus garden',
    categories: ['Campus'],
    width: 800,
    height: 800, // Medium/Square
  },
  {
    id: 'img-3',
    unsplashId: 'photo-1567057419565-4349c49d8a04.webp',
    alt: 'Apple-inspired luxury school architecture and courtyard layout',
    categories: ['Campus'],
    width: 800,
    height: 1200, // Tall/Large
  },

  // Academics & Classrooms
  {
    id: 'img-4',
    unsplashId: 'photo-1597848212624-a19eb35e2651.webp',
    alt: 'Happy Indian primary school students laughing and learning in a bright classroom',
    categories: ['Academics', 'Classrooms'],
    width: 800,
    height: 600, // Small/Landscape
  },
  {
    id: 'img-5',
    unsplashId: 'photo-1577896851231-70ef18881754.webp',
    alt: 'Indian high school girls collaborating on academic projects with notebooks and pens',
    categories: ['Academics', 'Classrooms'],
    width: 800,
    height: 1000, // Tall
  },
  {
    id: 'img-6',
    unsplashId: 'photo-1517245386807-bb43f82c33c4.webp',
    alt: 'Smart classroom setting with interactive touchscreen board and modern desks',
    categories: ['Academics', 'Classrooms'],
    width: 800,
    height: 530, // Small/Landscape
  },

  // Science Labs
  {
    id: 'img-7',
    unsplashId: 'photo-1532094349884-543bc11b234d.webp',
    alt: 'Modern chemistry laboratory with clean test tubes, colorful solutions, and safety glassware',
    categories: ['Academics', 'Science Labs'],
    width: 800,
    height: 1000, // Tall
  },
  {
    id: 'img-8',
    unsplashId: 'photo-1581093458791-9f3c3900df4b.webp',
    alt: 'Science student adjusting precision microscope in the biology practical lab',
    categories: ['Academics', 'Science Labs'],
    width: 800,
    height: 800, // Medium/Square
  },

  // Computer Labs
  {
    id: 'img-9',
    unsplashId: 'photo-1516321318423-f06f85e504b3.webp',
    alt: 'Advanced computer laboratory featuring wide flat-screen monitors and ergonomic seating',
    categories: ['Academics', 'Computer Labs'],
    width: 800,
    height: 600, // Small/Landscape
  },
  {
    id: 'img-10',
    unsplashId: 'photo-1427504494785-3a9ca7044f45.webp',
    alt: 'Senior school students typing programs and coding together in computer lab',
    categories: ['Academics', 'Computer Labs'],
    width: 800,
    height: 1100, // Tall/Large
  },

  // Robotics
  {
    id: 'img-11',
    unsplashId: 'photo-1564981797816-1043664bf78d.webp',
    alt: 'STEM robotics workshop with kids building automated rover models with custom circuits',
    categories: ['Academics', 'Robotics'],
    width: 800,
    height: 1000, // Tall
  },
  {
    id: 'img-12',
    unsplashId: 'photo-1561557944-6e7860d1a7eb.webp',
    alt: 'Detailed closeup of student hand assembling Arduino hardware and microcontrollers',
    categories: ['Academics', 'Robotics'],
    width: 800,
    height: 600, // Small/Landscape
  },

  // Library
  {
    id: 'img-13',
    unsplashId: 'photo-1544717305-2782549b5136.webp',
    alt: 'Peaceful sunlit reading desk surrounded by tall shelves filled with reference books',
    categories: ['Academics', 'Library'],
    width: 800,
    height: 1200, // Tall/Large
  },
  {
    id: 'img-14',
    unsplashId: 'photo-1535982330050-f1c2fb79ff78.webp',
    alt: 'Luxury reading library room with study lamps and cozy seating pockets',
    categories: ['Academics', 'Library'],
    width: 800,
    height: 800, // Medium/Square
  },


];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Memoized filtered images
  const filteredImages = useMemo(() => {
    return GALLERY_IMAGES.filter((img) => {
      // 1. Filter by active category tab
      const matchesCategory = activeFilter === 'All' || img.categories.includes(activeFilter);
      
      // 2. Filter by search text (searching alt description or categories for extra accessibility)
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === '' || 
        img.alt.toLowerCase().includes(query) || 
        img.categories.some(c => c.toLowerCase().includes(query));
        
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Handle active filter click
  const handleFilterClick = (category: CategoryType) => {
    setActiveFilter(category);
  };

  return (
    <div id="gallery-root" className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#0041f5]/10 selection:text-[#0041f5]">
      
      {/* Top micro-banner for Apple premium vibe */}


      {/* Main Container with ample white space */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        
        {/* Page Header Area */}
        <div id="gallery-header" className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0041f5]/10 border border-[#0041f5]/15 text-xs font-semibold tracking-widest text-[#0041f5] uppercase mb-6 animate-fade-in">
            <Camera className="w-3.5 h-3.5" />
            <span>Gallery</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#fffc4d]" />
          </div>
          
          {/* Main Large Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Life at NIMT Beacon School
          </h1>
          
          {/* Description */}
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Explore everyday moments from our classrooms, laboratories, sports facilities, cultural events, celebrations, competitions, campus life, and student activities.
          </p>

     
        </div>

 

        {/* Pinterest Masonry Grid Container */}
        {filteredImages.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layoutId={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.16, 1, 0.3, 1], // Custom premium cubic-bezier ease-out
                    delay: Math.min(index * 0.04, 0.4) // Subtle stagger capping at 0.4s
                  }}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-sm bg-slate-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-out border border-slate-100/50"
                  style={{
                    marginBottom: '24px' // Standard gap
                  }}
                >
                  {/* Aspect ratio bounding box for Next.js Image */}
                  <div 
                    className="relative w-full overflow-hidden"
                    style={{ 
                      aspectRatio: `${image.width} / ${image.height}` 
                    }}
                  >
                    <Image
                      src={'/'+`${image.unsplashId}`}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* A very subtle premium vignette gradient on the bottom just to ground the card visually (keeps it safe) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty Search or filter state */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 max-w-md mx-auto"
          >
            <div className="w-16 h-16 bg-[#f6eada] rounded-full flex items-center justify-center mx-auto mb-6 text-slate-500">
              <Camera className="w-8 h-8 text-[#0041f5]" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">No moments found</h3>
            <p className="text-slate-500 text-sm mb-6">
              We couldn&apos;t find any images matching &ldquo;{searchQuery}&rdquo; under the category &ldquo;{activeFilter}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#0041f5] text-white text-xs font-semibold rounded-full hover:bg-[#0041f5]/90 transition-all shadow-sm"
            >
              Reset Filters & Search
            </button>
          </motion.div>
        )}


      </main>

   

    </div>
  );
}
