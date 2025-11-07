import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, PenTool, LineChart } from 'lucide-react';
import HoverCard from './HoverCard';

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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="services" className="relative overflow-hidden bg-white/70 py-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-rose-200/40 blur-3xl"
        style={{ y }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">What we do</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Focused offerings to move the needle—no bloat, just clarity.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <HoverCard key={s.title}>
              <div className="mb-4 inline-flex rounded-xl bg-gray-900/90 p-3 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-gray-900 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </div>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
