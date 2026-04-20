
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

function TestimonialCard({ name, role, company, testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-card text-card-foreground rounded-2xl p-8 shadow-lg border border-border"
    >
      <Quote className="w-10 h-10 text-primary/30 mb-4" />
      <p className="leading-relaxed mb-6 text-balance">{testimonial}</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-semibold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
