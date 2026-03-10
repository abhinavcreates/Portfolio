import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaCode, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Agar neeche ja rahe ho (Scrolling Down) -> Hide Footer
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        // Agar upar ja rahe ho (Scrolling Up) -> Show Footer
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Scroll to Section Helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { icon: <FaHome />, id: "hero", label: "Home" },
    { icon: <FaCode />, id: "skills", label: "Skills" },
    { icon: <FaGraduationCap />, id: "education", label: "Edu" },
    { icon: <FaProjectDiagram />, id: "projects", label: "Work" },
    { icon: <FaEnvelope />, id: "contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
          <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-700 px-6 py-3 rounded-full shadow-2xl flex gap-6 pointer-events-auto">
            {navItems.map((item, index) => (
              <button 
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all group"
              >
                <span className="text-xl group-hover:-translate-y-1 transition-transform">{item.icon}</span>
                <span className="text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 bg-slate-800 px-2 py-1 rounded text-white">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Footer;