
import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Wifi, Tv, Home, Users, Dumbbell, MapPin } from 'lucide-react';

const APPLY_URL = "https://lincolnprprts.appfolio.com/apply/cce9fd15-8974-4faf-a352-b8ee9a8e41e5/start?source=Website";

export default function Amenities() {
  // keyFeatures constant removed as per instructions

  const interiorImages = [
    {
      src: 'https://picsum.photos/400/400?random=1000',
      alt: 'Cozy living area with modern furniture',
      title: 'Living Spaces'
    },
    {
      src: 'https://picsum.photos/400/400?random=1001',
      alt: 'Comfortable bedroom setup',
      title: 'Private Rooms'
    },
    {
      src: 'https://picsum.photos/400/400?random=1002',
      alt: 'Fully equipped modern kitchen',
      title: 'Full Kitchen'
    },
    {
      src: 'https://picsum.photos/400/400?random=1003',
      alt: 'Shared bedroom with bunk beds',
      title: 'Shared Options'
    },
  ];

  return (
    <section id="amenities" className="bg-white text-neutral-900 scroll-mt-20 pt-0 pb-20 md:pb-28">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
        >
          
        </motion.h2>
        
        {/* Key Features Bar (removed) */}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6">
        {/* Interior Images Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interiorImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="font-semibold text-sm">{image.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg prose-neutral max-w-none"
        >
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-neutral-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Dumbbell className="text-red-600" size={24} />
                <h4 className="font-semibold">Stay Active & Connected</h4>
              </div>
              <p className="text-neutral-700 text-sm">
                Stay active with an on-site basketball court and included EOS gym membership, and connect with your community through regular events.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-red-600" size={24} />
                <h4 className="font-semibold">Perfect Location</h4>
              </div>
              <p className="text-neutral-700 text-sm">
                Our location puts you steps from SEU Arizona and Dream City Church, with shopping, dining, and scenic parks just minutes away.
              </p>
            </div>
          </div>

          <p className="text-neutral-700 leading-relaxed mb-8">
            With digital smart locks, ample parking, and responsive management, you'll feel right at home. Secure your spot in this student-first community—modern, comfortable, and designed for your success.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center pb-20"
        >
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl px-8 py-4 bg-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-red-700 transition focus:outline-none focus:ring-4 focus:ring-red-200"
          >
            Apply Now
          </a>
          <p className="text-sm text-neutral-500 mt-3">
            Start your SEU Arizona journey with Verde Gardens
          </p>
        </motion.div>
      </div>
    </section>
  );
}
