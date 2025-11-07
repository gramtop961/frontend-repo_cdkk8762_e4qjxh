import React from 'react';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-black/10 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} notus marketing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
