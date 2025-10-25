"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-6 left-6 right-6 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl z-50">
      <div className="flex justify-between items-center gap-2 md:gap-8 px-4 md:px-8 py-3">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg md:text-xl font-heading font-bold text-accent hover:text-accent/80 transition-colors flex-shrink-0"
        >
          MadPanda
        </button>

        <div className="hidden md:flex gap-8 lg:gap-12 flex-1 justify-center">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.button
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm lg:text-base font-heading font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </motion.button>
              <motion.svg
                className="text-accent flex-shrink-0 w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ rotate: 45 }}
                animate={{ rotate: hoveredItem === item.id ? 0 : 45 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </div>
          ))}
        </div>

        <motion.a
          href="https://drive.google.com/file/d/1hi1vX8Z5mPVET2M6m1YyPhTjJA_4vczB/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0, 217, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-4 lg:px-6 py-2 bg-accent text-background font-heading font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 flex-shrink-0 shadow-lg text-sm lg:text-base whitespace-nowrap btn-interactive"
        >
          Resume
        </motion.a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground flex-shrink-0 interactive"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 space-y-2 z-40"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-accent transition-colors rounded-lg hover:bg-white/5 interactive"
            >
              {item.label}
            </button>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full px-4 py-3 mt-2 bg-accent text-background font-heading font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 text-center text-sm interactive"
          >
            Resume
          </motion.a>
        </motion.div>
      )}
    </nav>
  );
}
