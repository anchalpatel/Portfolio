import { motion } from "framer-motion";
import { certificateData } from "../Constants/CertificateData";

function Certificates() {
  return (
    <section id="certificates" className="pt-6 pb-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-10 text-left">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>
        
        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {certificateData.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group block rounded-xl border border-white/10 bg-[#0b0b0f] overflow-hidden"
            >
              {/* Image Container */}
              <div className="w-full h-52 bg-black/40 flex items-center justify-center p-3">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-left space-y-1">
                <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition">
                  {cert.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;