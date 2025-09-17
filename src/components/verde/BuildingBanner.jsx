import React from 'react';
import { motion } from 'framer-motion';

export default function BuildingBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="w-full h-48 md:h-64"
    >
      <img 
        src="https://picsum.photos/1920/400?random=900" 
        alt="Verde Gardens building exterior"
        className="w-full h-full object-cover object-center"
      />
    </motion.div>
  );
}