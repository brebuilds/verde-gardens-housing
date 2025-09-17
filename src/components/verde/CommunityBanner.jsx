import React from 'react';
import { motion } from 'framer-motion';

export default function CommunityBanner() {
  return (
    <section id="community" className="scroll-mt-20">
      <div className="bg-neutral-900 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            More than a lease—join a community.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto"
          >
            Be paired with roommates that match your vibe, join study & game nights, and enjoy shared spaces—all right across from campus and the church community.
          </motion.p>
        </div>
      </div>
    </section>
  );
}