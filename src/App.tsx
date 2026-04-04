/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Navbar from './components/Navbar';
import resumeData from './data/resume.json';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-blue-500/30">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <main className="container mx-auto px-6 pt-32 pb-24 space-y-32">
              <Hero data={resumeData.basics} />
              <Experience data={resumeData.experience} />
              <Projects data={resumeData.projects} />
              <Skills data={resumeData.skills} />
              <Education data={resumeData.education} />
              <Achievements data={resumeData.achievements} />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold tracking-tighter mb-8"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          SJS
        </span>
      </motion.div>
      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

