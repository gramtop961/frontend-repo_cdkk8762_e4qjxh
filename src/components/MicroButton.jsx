import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// A reusable magnetic button with soft press and subtle glow
const MicroButton = ({ children, href, onClick, className = '' }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.2);
    y.set(relY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      className="relative inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      <Comp
        href={href}
        onClick={onClick}
        className={`group relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium shadow-lg shadow-gray-900/10 transition will-change-transform ${className}`}
      >
        <span className="relative z-10 inline-flex items-center">
          {children}
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </span>
        <motion.span
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-rose-500/0 via-rose-500/10 to-rose-500/0 opacity-0 blur-md transition-opacity group-hover:opacity-100"
        />
      </Comp>
    </motion.div>
  );
};

export default MicroButton;
