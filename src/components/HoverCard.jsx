import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

// A card with a spotlight + tilt hover
const HoverCard = ({ children, className = '' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    x.set(relX);
    y.set(relY);
  };

  const spotlight = useMotionTemplate`radial-gradient(180px at ${x}px ${y}px, rgba(244, 63, 94, 0.15), transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition will-change-transform hover:shadow-md ${className}`}
      style={{ backgroundImage: spotlight }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
      {children}
    </motion.div>
  );
};

export default HoverCard;
