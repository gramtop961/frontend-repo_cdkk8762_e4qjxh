import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance legibility without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
          <span className="text-xs font-medium tracking-wide text-gray-700">notus marketing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="text-balance font-semibold leading-tight text-gray-900 md:text-6xl text-4xl"
        >
          Minimal ideas. Maximum impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-pretty text-base text-gray-600 md:text-lg"
        >
          We craft clean brand experiences and high‑performing campaigns with obsessive attention to micro‑interactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="group rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-gray-900/10 transition"
          >
            See our work
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="rounded-full border border-gray-300 bg-white/70 px-6 py-3 text-sm font-medium text-gray-800 backdrop-blur-sm"
          >
            Start a project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
