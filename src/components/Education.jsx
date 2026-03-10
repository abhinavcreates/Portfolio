import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaAws, FaGoogle, FaPython, FaHtml5 } from 'react-icons/fa';
import { SiUdemy, SiCisco, SiInfosys } from 'react-icons/si';
import { TbExternalLink } from 'react-icons/tb'; // Ek naya icon link dikhane ke liye

const Education = () => {

  // EDUCATION DATA
  const educationData = [
    {
      id: 1,
      title: "Bachelor of Computer Applications (BCA)",
      grade: "7.75",
      institution: "PSIT College of Higher Education",
      year: "2024 - Present",
      desc: "Focusing on Web Development, Data Structures, and Software Engineering.",
    },
    {
      id: 2,
      title: "Secondary (10th)",
      grade: "84.75%",
      institution: "P.D.P Inter College",
      year: "2024",
      desc: "Completed Secondary Education with building a strong foundation in Mathematics, Science, and analytical skills.",
    },
    {
      id: 3,
      title: "Higher Secondary (12th)",
      grade: "81%",
      institution: "P.D.P Inter College",
      year: "2024",
      desc: "Completed with focus on Computer Science and Mathematics along with discipline and academic consistency.",
    }
  ];

  // === CERTIFICATES DATA 
  const certifications = [
    {
      id: 1,
      title: "AWS Technical Essentials",
      issuer: "AWS Training & Certification",
      year: "July 2025",
      icon: <FaAws className="text-orange-500" />,
      //  Certificate link section:
      imageLink: "/images/certificates/aws.jpg" 
    },
    {
      id: 2,
      title: "Master of Essential C++",
      issuer: "Udemy",
      year: "June 2025",
      icon: <SiUdemy className="text-purple-500" />,
      imageLink: "/images/certificates/cpp_udemy.jpg"
    },
    {
      id: 3,
      title: "HTML Essentials",
      issuer: "Cisco Networking Academy",
      year: "Dec 2025",
      icon: <SiCisco className="text-blue-400" />,
      imageLink: "/images/certificates/HTML.jpg"
    },
    {
      id: 4,
      title: "Python for Data Science",
      issuer: "Infosys Springboard",
      year: "Dec 2025",
      icon: <SiInfosys className="text-blue-600" />,
      imageLink: "/images/certificates/python_ds.jpg"
    },
    {
      id: 5,
      title: "Intro to Generative AI Studio",
      issuer: "Google Cloud / Simplilearn",
      year: "June 2025",
      icon: <FaGoogle className="text-red-500" />,
      imageLink: "/images/certificates/Gen_AI.jpg"
    },
    {
      id: 6,
      title: "Programming Fundamentals (Python)",
      issuer: "Infosys Springboard",
      year: "Oct 2025",
      icon: <FaPython className="text-yellow-400" />,
      imageLink: "/images/certificates/python_infosys.jpg"
    },
  ];

  return (
    <section className="py-20 px-4 md:px-20 text-white z-10 relative">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      >
        Education & Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-blue-400">
            <FaGraduationCap /> Education
          </h3>
          <div className="flex flex-col gap-6">
            {educationData.map((edu) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: edu.id * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-500 transition-colors shadow-lg"
              >
                <h4 className="text-xl font-bold">{edu.title}</h4>
                <p className="text-blue-300 text-sm">{edu.grade} | {edu.institution} | {edu.year}</p>
                <p className="text-gray-400 mt-2 text-sm">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column (Updated to be clickable) */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-purple-400">
            <FaCertificate /> Certifications
          </h3>
          <div className="flex flex-col gap-4">
            {certifications.map((cert) => (
              // Yahan humne motion.div ko motion.a (anchor tag) bana diya
              <motion.a 
                key={cert.id}
                href={cert.imageLink} // Link yahan se aayega
                target="_blank"       // Naye tab mein khulega
                rel="noopener noreferrer" // Security ke liye
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, x: 5 }} // Hover karne par thoda hilega
                transition={{ duration: 0.3, delay: cert.id * 0.03 }}
                viewport={{ once: true }}
                // cursor-pointer add kiya taaki pata chale click ho sakta hai
                className="flex items-center justify-between p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-purple-500 transition-all shadow-lg group cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-center gap-4">
                    {/* Icon Box */}
                    <div className="text-3xl p-3 bg-slate-900 rounded-lg border border-slate-600 group-hover:border-purple-400 transition-colors z-10">
                    {cert.icon}
                    </div>
                    
                    {/* Text Info */}
                    <div className="z-10">
                    <h4 className="text-lg font-bold group-hover:text-purple-300 transition-colors flex items-center gap-2">
                        {cert.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">{cert.year}</p>
                    </div>
                </div>
                
                {/* External Link Icon (Hover pe dikhega) */}
                <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity text-xl z-10 pr-2">
                    <TbExternalLink />
                </div>

                 {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-xl" />

              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;