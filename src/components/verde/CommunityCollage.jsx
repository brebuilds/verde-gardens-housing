
import React from 'react';
import { motion } from 'framer-motion';

const communityImages = [
  {
    src: 'https://picsum.photos/400/300?random=800',
    alt: 'Students taking a selfie at SEU Arizona'
  },
  {
    src: 'https://picsum.photos/400/300?random=801',
    alt: 'Students celebrating in a classroom'
  },
  {
    src: 'https://picsum.photos/400/300?random=802',
    alt: 'SEU Arizona student portrait'
  },
  {
    src: 'https://picsum.photos/400/300?random=803',
    alt: 'Large group of SEU Arizona students'
  },
  {
    src: 'https://picsum.photos/400/300?random=804',
    alt: 'SEU Arizona classroom learning environment'
  },
  {
    src: 'https://picsum.photos/400/300?random=805',
    alt: 'SEU Arizona student with university materials'
  },
  {
    src: 'https://picsum.photos/400/300?random=806',
    alt: 'A lecture in an SEU Arizona classroom'
  },
  {
    src: 'https://picsum.photos/400/300?random=807',
    alt: 'SEU Arizona students in a lecture hall'
  },
];

export default function CommunityCollage() {
  return (
    <section className="relative py-20 md:py-28 bg-neutral-100/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-neutral-800 mb-3">
            Life at SEU Arizona
          </h3>
          <p className="text-neutral-600">
            Where friendship, faith, and learning come together
          </p>
        </motion.div>

        {/* Perfect 2x4 Rectangle Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[24rem] md:h-[30rem]">
          {communityImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.03),transparent_50%)]"></div>
    </section>
  );
}
