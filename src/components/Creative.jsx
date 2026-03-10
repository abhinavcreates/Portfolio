import React from 'react';
import { motion } from 'framer-motion';

const Creative = () => {
  // Yahan apni photos ke naam sahi check kar lena (jpg hai ya png)
  const artPieces = [
    { id: 1, src: "/images/art1.jpg", title: "Retro Vibe" },
    { id: 2, src: "/images/art2.jpg", title: "Nano Banana" },
    { id: 3, src: "/images/art3.jpg", title: "Cyber Punk" },
    { id: 4, src: "/images/art4.jpg", title: "Abstract Flow" }
  ];

  return (
    <section className="py-20 px-4 text-white relative z-10">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        Creative & Hobbies
      </h2>
      
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-300 mb-10 text-center text-lg max-w-2xl mx-auto">
          Apart from coding, I love exploring AI image generation. Here are some of my "Retro Vintage" & "Nano-Banana" style creations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artPieces.map((art) => (
            <motion.div
              key={art.id}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group rounded-xl overflow-hidden border-2 border-slate-700 shadow-2xl h-64 md:h-80"
            >
              {/* Image */}
              <img 
                src={art.src} 
                alt={art.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-xl tracking-wider border border-white/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  {art.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creative;