
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function IndustryCard({ icon: Icon, name, description, image, index }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-card text-card-foreground rounded-xl overflow-hidden border border-border transition-all duration-300 hover:border-primary hover:shadow-lg flex flex-col h-full"
    >
      <div className="relative h-48 w-full bg-muted overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover image-fade-in group-hover:scale-105 ${isLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3 text-white">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/90 text-primary-foreground backdrop-blur-sm flex-shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-semibold truncate">{name}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

export default IndustryCard;
