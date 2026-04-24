import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillData } from "../Constants/SkillsData";

const categories = Object.keys(skillData);

function Skills() {
  const [active, setActive] = useState("All");

  return (
    <section id="skills" className="pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Heading */}
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-8">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* 🔘 Sliding Tabs */}
        <div className="mb-8 flex justify-center overflow-x-auto">
          <div className="relative flex bg-white/5 border border-white/10 rounded-full p-1">

            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 text-sm z-10 whitespace-nowrap"
              >
                {/* Sliding pill */}
                {active === cat && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                {/* Text */}
                <span
                  className={`relative transition-colors duration-300 ${
                    active === cat ? "text-white" : "text-gray-400"
                  }`}
                >
                  {cat}
                </span>
              </motion.button>
            ))}

          </div>
        </div>

        {/* 🧠 Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="
              grid gap-4
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
            "
          >
            {skillData[active].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <div className="flex flex-col gap-2.5">

                    {/* Top row */}
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-200 group-hover:text-white transition">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.7, delay: i * 0.05 }}
                        className="
                          h-full rounded-full
                          bg-gradient-to-r from-blue-400 to-purple-500
                          group-hover:from-blue-300 group-hover:to-purple-400
                          transition-all duration-300
                        "
                      />
                    </div>

                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

export default Skills;