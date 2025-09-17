import React from 'react';
import { motion } from 'framer-motion';
import { Home, Wifi, Bed, Dumbbell } from 'lucide-react';

const features = [
    { icon: <Home size={24} />, title: "Move-in Ready", subtitle: "Fully furnished & equipped" },
    { icon: <Wifi size={24} />, title: "All-Inclusive", subtitle: "WiFi, utilities & more" },
    { icon: <Bed size={24} />, title: "3 Room Options", subtitle: "Private & shared layouts" },
    { icon: <Dumbbell size={24} />, title: "EOS Gym Access", subtitle: "Premium membership included" },
];

export default function KeyFeatures() {
  return (
    <section className="bg-white -mt-16 pb-16 md:pb-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white text-center shadow-lg hover:shadow-xl border border-neutral-100 hover:border-neutral-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-red-600 mb-3">{feature.icon}</div>
              <h4 className="font-semibold text-base text-neutral-800">{feature.title}</h4>
              <p className="text-sm text-neutral-600 mt-1">{feature.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}