import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 flex items-center justify-between rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur-lg"
        >
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-gray-900 text-white">n</div>
            <span>notus</span>
          </a>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#work" className="transition hover:text-gray-900">Work</a>
            <a href="#services" className="transition hover:text-gray-900">Services</a>
            <a href="#about" className="transition hover:text-gray-900">About</a>
            <a href="#contact" className="transition hover:text-gray-900">Contact</a>
          </nav>
          <motion.a
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-gray-900/10"
          >
            Let's talk
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
