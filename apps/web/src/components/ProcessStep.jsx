
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function ProcessStep({ number, title, description, isLast, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex items-start gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary text-primary-foreground font-bold text-2xl shadow-lg">
          {number}
        </div>
        {!isLast && (
          <div className="w-1 h-24 bg-gradient-to-b from-primary to-primary/20 mt-4" />
        )}
      </div>
      <div className="flex-1 pb-12">
        <h3 className="text-xl font-semibold mb-2 text-balance">{title}</h3>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </div>
      {!isLast && (
        <ArrowRight className="hidden lg:block w-6 h-6 text-primary/30 mt-4" />
      )}
    </motion.div>
  );
}

export default ProcessStep;
