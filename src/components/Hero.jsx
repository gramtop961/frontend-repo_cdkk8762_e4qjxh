import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import MicroButton from './MicroButton';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance legibility without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
          <span className="text-xs font-medium tracking-wide text-gray-700">notus marketing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.8, ease: 'easeOut' }}
          className="text-balance font-semibold leading-tight text-gray-900 md:text-6xl text-4xl"
        >
          Minimal ideas. Maximum impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-pretty text-base text-gray-600 md:text-lg"
        >
          Modern, minimalist campaigns and digital experiences for fintech, e‑commerce, and product teams. Clean design, delightful motion, measurable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <MicroButton href="#work" className="bg-gray-900 text-white">
            See our work
          </MicroButton>
          <MicroButton href="#contact" className="border border-gray-300 bg-white/80 text-gray-900">
            Start a project
          </MicroButton>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-600"
        >
          <div className="mx-auto h-8 w-4 rounded-full border border-gray-400/60">
            <motion.span
              className="mx-auto mt-1 block h-2 w-0.5 rounded-full bg-gray-500"
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
