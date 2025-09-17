import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const MATCHING_IMG = "https://picsum.photos/800/600?random=400";

export default function RoommateMatching() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-snug">
              Need a roommate? <br />
              <span className="text-red-600">We've got you.</span>
            </h3>
            <p className="mt-4 text-neutral-600 text-lg">
              Finding the right roommate can be stressful. We take the guesswork out of it with a thoughtful, lifestyle-based matching process. Or, bring your own friends!
            </p>
            <div className="mt-6 bg-red-50/70 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-neutral-700">
                We send a simple lifestyle questionnaire to thoughtfully match roommates based on study habits, social life, and cleanliness.
              </p>
            </div>
          </motion.div>
          
          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 bg-white p-2.5 rounded-full shadow-lg">
                <Sparkles className="text-red-500" size={24} />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={MATCHING_IMG} alt="Students at Dream City community event" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-xl">
                <h4 className="font-bold text-lg">Your Future Crew Awaits</h4>
                <p className="text-sm text-neutral-200">Community is everything.</p>
            </div>
          </motion.div>
        </div>
      </section>
  );
}