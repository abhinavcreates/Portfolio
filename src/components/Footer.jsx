import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaCode, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

// Bahar rakha hai taaki har render pe dobara na bane
const navItems = [
  { icon: <FaHome />, id: 'hero', label: 'Home' },
  { icon: <FaCode />, id: 'skills', label: 'Skills' },
  { icon: <FaGraduationCap />, id: 'education', label: 'Education' },
  { icon: <FaProjectDiagram />, id: 'projects', label: 'Projects' },
  { icon: <FaEnvelope />, id: 'contact', label: 'Contact' },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  // useRef: value badalne pe re-render nahi hota (state se har scroll pe hota tha)
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // chhote jitters ignore karo taaki bar flicker na kare
      if (Math.abs(diff) < 8) return;

      if (diff > 0 && currentY > 100) {
        setIsVisible(false); // neeche scroll -> hide
      } else {
        setIsVisible(true); // upar scroll -> show
      }
      lastScrollY.current = currentY;
    };

    // passive: browser ko batata hai ki hum scroll rokenge nahi, toh scroll smooth rehta hai
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {/* backdrop-blur sirf desktop pe: phone pe fixed blur scroll ko atkata hai */}
          <div className="bg-slate-900/95 md:bg-slate-900/80 md:backdrop-blur-lg border border-slate-700 px-6 py-3 rounded-full shadow-2xl flex gap-6 pointer-events-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                onClick={() => scrollToSection(item.id)}
                className="relative flex flex-col items-center gap-1 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all group"
              >
                <span className="text-xl group-hover:-translate-y-1 transition-transform">
                  {item.icon}
                </span>
                {/* relative button ke sath tooltip ab hamesha apne icon ke upar hi aayega */}
                <span className="pointer-events-none absolute -top-9 whitespace-nowrap text-[10px] font-semibold bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
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