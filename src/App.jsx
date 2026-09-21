import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import { projects } from './data/projects';

// Components
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Creative from './components/Creative';
import Contact from './components/Contact';
import Footer from './components/Footer';

// --- Links & files in ONE place (change here, updates everywhere) ---
const GITHUB_URL = 'https://github.com/abhinavcreates';
const LINKEDIN_URL = 'https://www.linkedin.com/in/abhinav-singh-541901306';
const INSTAGRAM_URL = 'https://www.instagram.com/the_abhinav_thakur_/';
// File must exist at public/Abhinav_Singh_CV.pdf (rename your public/CV.pdf)
const CV_FILE = 'CV.pdf';

// Loader sirf session me ek baar dikhega (refresh pe dobara nahi)
const hasSeenLoader = () => {
  try {
    return sessionStorage.getItem('seenLoader') === '1';
  } catch {
    return false;
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(() => !hasSeenLoader());

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
      try {
        sessionStorage.setItem('seenLoader', '1');
      } catch {
        /* storage blocked, ignore */
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Loader ke time me hi project images download kar lo (cache me aa jayengi)
  useEffect(() => {
    projects.forEach((p) => {
      if (p.image) new Image().src = p.image;
    });
  }, []);

  // Particles: mobile (< 768px) pe 6, warna 20. Random values ek baar hi banengi.
  const particles = useMemo(() => {
    const count = window.innerWidth < 768 ? 6 : 20;
    return Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-x-hidden selection:bg-blue-500/30 font-sans">

      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: p.x, y: window.innerHeight + 100, opacity: 0 }}
            animate={{ y: -100, opacity: [0, 0.5, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'linear', delay: p.delay }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px] shadow-[0_0_10px_#60a5fa]"
          />
        ))}
        {/* blur kam on mobile: heavy blur saste phones pe scroll atkata hai */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[80px] md:blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[80px] md:blur-[128px]"></div>
      </div>

      {/* --- LOADER --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-1 bg-blue-500 absolute"
            />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              className="text-2xl md:text-4xl font-mono text-blue-400 tracking-[0.2em] md:tracking-[0.5em] z-10 text-center font-bold"
            >
              INITIALIZING
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DESKTOP SIDEBAR --- */}
      <div className="fixed left-4 bottom-0 z-50 hidden md:flex flex-col gap-6 items-center">
        <div className="w-[1px] h-20 bg-gray-600"></div>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-blue-400 text-xl hover:-translate-y-1 transition-all"><FaGithub /></a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 text-xl hover:-translate-y-1 transition-all"><FaLinkedin /></a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-blue-400 text-xl hover:-translate-y-1 transition-all"><FaInstagram /></a>
        <div className="w-[1px] h-20 bg-gray-600"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      {!isLoading && (
        <div className="relative w-full z-10">

          {/* HERO SECTION */}
          <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-20 relative overflow-hidden pt-20 md:pt-0">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">

              {/* LEFT: TEXT */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-center md:text-left md:w-1/2"
              >
                <div className="inline-block px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-300 text-sm mb-6 backdrop-blur-sm">
                  Available for Freelance & Hires
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Orbitron'] tracking-wider">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
                    Abhinav Singh
                  </span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
                  Crafting digital experiences with <span className="text-blue-400 font-semibold">Code</span> & <span className="text-purple-400 font-semibold">Creativity</span>.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                  <motion.a href="#projects" whileHover={{ scale: 1.05 }} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all cursor-pointer">
                    See My Work
                  </motion.a>
                  <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="px-8 py-3 border border-slate-600 hover:bg-slate-800 rounded-full font-semibold transition-all cursor-pointer">
                    Contact Me
                  </motion.a>
                  <motion.a
                    href={CV_FILE}
                    download="Abhinav_Singh_CV.pdf"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-8 py-3 border border-blue-500/40 text-blue-300 hover:bg-blue-500/10 rounded-full font-semibold transition-all cursor-pointer"
                  >
                    <FaDownload className="text-sm" /> Download CV
                  </motion.a>
                </div>

                {/* MOBILE SOCIAL ICONS (sirf phone pe) */}
                <div className="flex md:hidden gap-6 justify-center items-center mt-6 p-4 border-t border-slate-800">
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white text-2xl">
                    <FaGithub />
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 text-2xl">
                    <FaLinkedin />
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 text-2xl">
                    <FaInstagram />
                  </a>
                </div>
              </motion.div>

              {/* RIGHT: CODE WINDOW */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="md:w-1/2 flex justify-center w-full"
              >
                <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs text-gray-400 font-mono">Developer.jsx</span>
                  </div>
                  <div className="p-6 font-mono text-sm md:text-base text-gray-300 leading-relaxed bg-slate-900/90">
                    <p><span className="text-purple-400">const</span> <span className="text-yellow-400">developer</span> = <span className="text-blue-400">{`{`}</span></p>
                    <p className="pl-4">name: <span className="text-green-400">'Abhinav Singh'</span>,</p>
                    <p className="pl-4">role: <span className="text-green-400">'Full Stack Dev'</span>,</p>
                    <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node'</span>, <span className="text-green-400">'Python'</span>],</p>
                    <p className="pl-4">hardWorker: <span className="text-orange-400">true</span>,</p>
                    <p className="pl-4"><span className="text-purple-400">hireable</span>: <span className="text-orange-400">function</span>() <span className="text-blue-400">{`{`}</span></p>
                    <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">"Ready to work!"</span>;</p>
                    <p className="pl-4"><span className="text-blue-400">{`}`}</span></p>
                    <p><span className="text-blue-400">{`}`}</span>;</p>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-2xl rounded-full pointer-events-none"></div>
                </div>
              </motion.div>

            </div>

            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-24 md:bottom-10 text-gray-500 text-sm">
              Scroll Down ↓
            </motion.div>
          </section>

          {/* OTHER SECTIONS */}
          <Skills />
          <div id="education"><Education /></div>
          <div id="projects"><Projects /></div>
          <div id="creative"><Creative /></div>
          <div id="contact"><Contact /></div>

          <Footer />
          <footer className="py-8 text-center text-slate-600 text-sm bg-slate-950 border-t border-slate-900 pb-24 md:pb-8">
            <p>© {new Date().getFullYear()} Abhinav Singh. All rights reserved.</p>
          </footer>

        </div>
      )}
    </div>
  );
}

export default App;