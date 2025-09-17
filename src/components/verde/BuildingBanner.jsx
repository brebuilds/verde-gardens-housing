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
        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/9bd29dd82_WEhdQ68w.jpg" 
        alt="Verde Gardens building exterior"
        className="w-full h-full object-cover object-center"
      />
    </motion.div>
  );
}