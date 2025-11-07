import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MicroButton from './MicroButton';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

  return (
    <section id="contact" className="relative bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Tell us about your project</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600 md:text-base">
            We typically reply within one business day.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
              <input required type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-0 transition focus:border-gray-900" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-0 transition focus:border-gray-900" placeholder="jane@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">What do you need?</label>
            <textarea required rows={5} className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-gray-900" placeholder="Website redesign, brand identity, launch campaign..." />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-gray-500">By sending, you agree to our privacy policy.</p>
            <MicroButton className="bg-gray-900 text-white">
              Send message
            </MicroButton>
          </div>
        </form>

        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="pointer-events-none fixed inset-x-0 bottom-6 mx-auto w-[90%] max-w-md rounded-xl border border-black/10 bg-white p-4 text-center shadow-lg"
            >
              <p className="text-sm font-medium text-gray-900">Thanks! We'll be in touch shortly.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
