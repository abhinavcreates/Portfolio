import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

/* Screenshot with a graceful fallback: if the image is missing or the path is
   wrong, a gradient tile with the project's initial is shown instead of a
   broken-image icon. Clicking the image opens the live site. */
function ProjectImage({ src, title, href }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} live demo`}
      className="block h-48 overflow-hidden bg-slate-800"
    >
      {showImage ? (
        <img
          src={src}
          alt={`${title} screenshot`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/30 to-purple-600/30">
          <span className="text-5xl font-bold font-['Orbitron'] text-white/70">
            {title.charAt(0)}
          </span>
        </div>
      )}
    </a>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();

  // NOTE: no id="projects" here on purpose. App.jsx already wraps this
  // component in <div id="projects">, and duplicate ids break anchor links.
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 font-['Orbitron'] tracking-wider">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Projects
        </span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="group flex flex-col rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/60 backdrop-blur-sm transition-colors hover:border-blue-500/50"
          >
            <ProjectImage src={p.image} title={p.title} href={p.live} />

            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* mt-auto keeps the buttons aligned at the bottom of every card */}
              <div className="flex gap-3 mt-auto pt-6">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-sm font-semibold transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-600 hover:bg-slate-800 text-sm font-semibold transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}