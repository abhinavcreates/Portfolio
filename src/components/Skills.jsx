import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaBootstrap } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si'; // SiC is for C language

const Skills = () => {
  const skills = [
    { name: "C", icon: <SiC />, color: "text-blue-500" },
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  ];

  return (
    <section id="skills" className="py-20 px-4 text-white relative z-10">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex flex-col items-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-blue-500 shadow-xl backdrop-blur-sm cursor-pointer group"
          >
            <div className={`text-6xl mb-4 ${skill.color} drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all`}>
              {skill.icon}
            </div>
            <p className="font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;