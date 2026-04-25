import React, { useEffect, useState } from "react";
import { navLinks } from "../Constants/NavLiks";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "motion/react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleActiveSection = () => {
      let currentSection = "home";
      let minDistance = Infinity;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const distance = Math.abs(window.scrollY - (offsetTop - 100));
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = link.id;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0B0F19]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-4">

          {/* Logo */}
          <h1
            className="text-xl font-bold cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            onClick={() => handleScroll("home")}
          >
            AP
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`relative transition duration-300 group
                    ${isActive ? "text-white" : "text-gray-300 hover:text-white"}
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-[-4px] h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* Hamburger */}
          <div className="md:hidden text-2xl text-white z-50">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.div
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-64 z-50 bg-[#0B0F19] border-l border-white/10 flex flex-col md:hidden"
            >

              {/* Close button */}
              <div className="flex justify-end px-6 py-5">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl text-white"
                >
                  <HiX />
                </button>
              </div>

              {/* Logo inside sidebar */}
              <div className="px-6 mb-8">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  AP
                </span>
              </div>

              {/* Nav links */}
              <div className="flex flex-col px-6 gap-2">
                {navLinks.map((link, i) => {
                  const isActive = active === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => handleScroll(link.id)}
                      className={`text-left px-4 py-3 rounded-xl transition-all duration-200
                        ${isActive
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/20"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;