
import React from 'react';
import { motion } from 'framer-motion';

export default function IntroText() {
  return (
    <section className="bg-white pt-0 pb-20 md:pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg prose-neutral max-w-none"
        >
          <p className="text-neutral-700 leading-relaxed">
            Choose from three distinct room options: a private bedroom with a large bed, black bunk beds with a desk setup, or gray twin beds at ground level—plus, our roommate questionnaire helps match you with the perfect fit. The living room boasts a cozy couch and a 55-inch TV, while the kitchen comes with all the basics you need (just bring your own towels and bedding).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
