
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const APPLY_URL = "https://lincolnprprts.appfolio.com/apply/cce9fd15-8974-4faf-a352-b8ee9a8e41e5/start?source=Website";
const slideshowImages = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dfe32c12_Hero.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/db32f5c1e_VG-LivingArea-Wide.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cc471a565_Hero.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/489885092_DormChurch.jpg"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-neutral-900 text-white flex items-end overflow-hidden">
      {/* Full-screen background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slideshowImages[currentIndex]})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 2, ease: 'easeOut' } }}
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 2, ease: 'easeOut' } }}
            aria-hidden
          />
        </AnimatePresence>
      </div>
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      
      {/* Content positioned at bottom left */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 text-white leading-tight"
              style={{ 
                textShadow: '0 4px 20px rgba(0,0,0,0.8)'
              }}
            >
              Your Sanctuary Away From Home
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="text-lg md:text-xl text-neutral-200 max-w-2xl leading-relaxed mb-8"
              style={{ 
                textShadow: '0 2px 10px rgba(0,0,0,0.8)'
              }}
            >
              Thoughtfully curated 3-bedroom apartments designed with intention for SEU Arizona students. Nestled directly across from campus, where community meets comfort in perfect harmony.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center rounded-3xl px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-red-400/50"
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
               
              {/* Slideshow indicators */}
              <div className="flex items-center gap-3">
                {slideshowImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`relative w-12 h-1 rounded-full transition-all duration-500 ${
                      currentIndex === index 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
