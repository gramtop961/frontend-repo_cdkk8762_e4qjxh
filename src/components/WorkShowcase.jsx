import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Astra Cloud',
    desc: 'Brand system and launch campaign for a dev-first cloud platform.',
    tag: 'Brand + Launch',
    color: 'from-rose-100 to-white',
  },
  {
    title: 'Muse Home',
    desc: 'Conversion-first redesign for a DTC interiors brand.',
    tag: 'Web + Growth',
    color: 'from-gray-100 to-white',
  },
  {
    title: 'Nova Finance',
    desc: 'Product marketing engine and content strategy.',
    tag: 'PMM + Content',
    color: 'from-rose-50 to-white',
  },
];

const Card = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.06 }}
    className="group relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br p-6 shadow-sm transition hover:shadow-md"
  >
    <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-rose-200/60 to-rose-100/0 blur-2xl opacity-0 transition group-hover:opacity-100`} />
    <div className="mb-8 flex items-center gap-2 text-xs">
      <span className="rounded-full bg-gray-900 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white">{item.tag}</span>
    </div>
    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
    <div className="mt-6 flex items-center text-sm font-medium text-gray-900">
      View case study <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
    </div>
  </motion.div>
);

const WorkShowcase = () => {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Selected work</h2>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Explore all →</a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((item, i) => (
          <Card key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default WorkShowcase;
