import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Adaptive Quiz App",
      desc: "A smart quiz application built for the College Tech-Expo. It adapts difficulty based on user performance.",
      tech: ["Python", "HTML", "CSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "The Watch Vault",
      desc: "Created an e-commerce watch website allowing users to view and buy various watches",
      tech: ["HTML", "CSS", "JS"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Personal Portfolio",
      desc: "The website you are looking at right now! High-performance, animated, and fully responsive.",
      tech: ["React", "Tailwind", "Framer Motion"],
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4 text-white relative z-10">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 text-xs rounded-full text-blue-300 border border-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;