import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.03,
      }}
      className="group relative p-[1px] rounded-2xl transition-all duration-100"
    >
      {/* 🔥 Gradient Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      {/* 🧊 Card Content */}
      <div className="relative rounded-2xl bg-[#0b0b0f] group-hover:bg-[#101018] transition-colors duration-300 p-6 border border-white/10">
        
        {/* Title + links */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
            {project.name}
          </h3>

          <div className="flex items-center gap-3 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub className="text-xl" />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaExternalLinkAlt className="text-lg" />
              </a>
            )}
          </div>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="h-[1px] mb-4 bg-white/10" />

        {/* Description */}
        <ul className="space-y-2">
          {project.description.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default ProjectCard;