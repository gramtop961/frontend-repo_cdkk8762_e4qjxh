import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, PenTool, LineChart } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Brand Launch',
    desc: 'From strategy to identity, we ship brands that feel inevitable.',
  },
  {
    icon: PenTool,
    title: 'Product Design',
    desc: 'Elegant interfaces with delightful micro-interactions.',
  },
  {
    icon: LineChart,
    title: 'Growth & Performance',
    desc: 'Conversion-first websites and campaigns that scale.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white/70 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">What we do</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Focused offerings to move the needle—no bloat, just clarity.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gray-900/90 p-3 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-gray-900 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
