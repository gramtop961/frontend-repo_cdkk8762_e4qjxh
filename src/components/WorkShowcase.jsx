import React from 'react';
import { motion } from 'framer-motion';
import HoverCard from './HoverCard';

const projects = [
  {
    title: 'Astra Cloud',
    desc: 'Brand system and launch campaign for a dev-first cloud platform.',
    tag: 'Brand + Launch',
  },
  {
    title: 'Muse Home',
    desc: 'Conversion-first redesign for a DTC interiors brand.',
    tag: 'Web + Growth',
  },
  {
    title: 'Nova Finance',
    desc: 'Product marketing engine and content strategy.',
    tag: 'PMM + Content',
  },
];

const WorkShowcase = () => {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex items-end justify-between"
      >
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Selected work</h2>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Explore all →</a>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((item, i) => (
          <HoverCard key={i}>
            <div className="mb-8 flex items-center gap-2 text-xs">
              <span className="rounded-full bg-gray-900 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white">{item.tag}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            <div className="mt-6 flex items-center text-sm font-medium text-gray-900">
              View case study <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </HoverCard>
        ))}
      </div>
    </section>
  );
};

export default WorkShowcase;
