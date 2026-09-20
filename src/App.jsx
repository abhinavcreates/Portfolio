import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';

// Components
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Creative from './components/Creative';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setIsLoading(false); }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Screen size check karke particle count decide karna
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    // Agar mobile (width < 768px) hai toh 6 particles, nahi toh 20
    setParticleCount(window.innerWidth < 768 ? 6 : 20);
  }, []);

  const particles = Array.from({ length: particleCount }); 

  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-x-hidden selection:bg-blue-500/30 font-sans">
      
      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        {particles.map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 100, opacity: 0 }}
            animate={{ y: -100, opacity: [0, 0.5, 0] }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px] shadow-[0_0_10px_#60a5fa]"
          />
        ))}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
      </div>

      {/* --- FIX 1: LOADER TEXT RESPONSIVE --- */}
      <AnimatePresence>
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4">
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="h-1 bg-blue-500 absolute" />
            {/* Yahan text size (text-2xl) aur tracking (0.2em) kam kar di hai mobile ke liye */}
            <motion.h1 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, scale: 1.5 }} 
              className="text-2xl md:text-4xl font-mono text-blue-400 tracking-[0.2em] md:tracking-[0.5em] z-10 text-center font-bold"
            >
              INITIALIZING
            </motion.h1>
          </div>
        )}
      </AnimatePresence>

      {/* --- DESKTOP SIDEBAR (Phone pe hidden rahega) --- */}
      <div className="fixed left-4 bottom-0 z-50 hidden md:flex flex-col gap-6 items-center">
        <div className="w-[1px] h-20 bg-gray-600"></div>
        {/*  Links Check  */}
        <a href="https://github.com/abhinavcreates" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 text-xl hover:-translate-y-1 transition-all"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/abhinav-singh-541901306" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 text-xl hover:-translate-y-1 transition-all"><FaLinkedin /></a>
        <a href="https://www.instagram.com/the_abhinav_thakur_57/   " target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 text-xl hover:-translate-y-1 transition-all"><FaInstagram /></a>
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
                   href="/CV.pdf"
                   download="CV.pdf"
                   whileHover={{ scale: 1.05 }}
                   className="inline-flex items-center gap-2 px-8 py-3 border border-blue-500/40 text-blue-300 hover:bg-blue-500/10 rounded-full font-semibold transition-all cursor-pointer"
>
                <FaDownload className="text-sm" /> Download CV
                </motion.a>
                </div>

               {/* --- FIX 2: MOBILE SOCIAL ICONS (Sirf Phone pe dikhenge) --- */}
<div className="flex md:hidden gap-6 justify-center items-center mt-6 p-4 border-t border-slate-800">
    <a 
      href="https://github.com/abhinavcreates" 
      target="_blank" 
      rel="noreferrer" 
      className="text-gray-400 hover:text-white text-2xl"
    >
      <FaGithub />
    </a>
    
    <a 
      href="https://www.linkedin.com/in/abhinav-singh-541901306" 
      target="_blank" 
      rel="noreferrer" 
      className="text-gray-400 hover:text-blue-500 text-2xl"
    >
      <FaLinkedin />
    </a>
    
    <a 
      href="https://www.instagram.com/the_abhinav_thakur_/" 
      target="_blank" 
      rel="noreferrer" 
      className="text-gray-400 hover:text-pink-500 text-2xl"
    >
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
            <p>© 2025 Abhinav Singh. All rights reserved.</p>
          </footer>

        </div>
      )}
    </div>
  );
}

export default App;