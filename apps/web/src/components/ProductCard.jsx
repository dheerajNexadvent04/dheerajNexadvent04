
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ProductCard({ icon: Icon, title, description, image, index }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card text-card-foreground rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-border flex flex-col h-full"
    >
      <div className="relative h-56 w-full bg-muted overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover image-fade-in group-hover:scale-105 ${isLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      
      <div className="p-8 pt-0 flex flex-col flex-grow">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-background text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 -mt-7 relative z-10 shadow-md border border-border">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-balance">{title}</h3>
        <p className="leading-relaxed text-muted-foreground mt-auto">{description}</p>
      </div>
    </motion.div>
  );
}

export default ProductCard;
