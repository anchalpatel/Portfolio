import React, { useEffect, useState } from 'react'
import { navLinks } from '../Constants/NavLiks'

function Navbar() {
  const [active, setActive] = useState("home")

  const handleScroll = (id) => {
  const section = document.getElementById(id)

  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth",
    })
  }
}

  // 🔥 Detect active section on scroll
  useEffect(() => {
  const handleActiveSection = () => {
    let currentSection = "home"
    let minDistance = Infinity

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id)

      if (section) {
        const offsetTop = section.offsetTop
        const distance = Math.abs(window.scrollY - (offsetTop - 100))

        if (distance < minDistance) {
          minDistance = distance
          currentSection = link.id
        }
      }
    })

    setActive(currentSection)
  }

  window.addEventListener("scroll", handleActiveSection)

  return () => window.removeEventListener("scroll", handleActiveSection)
}, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0B0F19]/70 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-4">        
        {/* Logo */}
        <h1 
          className="text-xl font-bold cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          onClick={() => handleScroll("home")}
        >
          AP
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.id

            return (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`relative transition duration-300 group
                  ${isActive ? "text-white" : "text-gray-300 hover:text-white"}
                `}
              >
                {link.label}

                {/* Gradient underline */}
                <span
                  className={`absolute left-0 bottom-[-4px] h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </button>
            )
          })}
        </div>

      </div>
    </nav>
  )
}

export default Navbar