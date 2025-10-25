"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Grow Habit",
      description:
        "A simple and intuitive web app for tracking daily habits and managing to-do lists to improve productivity.",
      tags: ["React", "HTML", "CSS"],
      link: "https://grow-habit-mu.vercel.app/",
      gradient: "from-cyan-500/20 to-blue-500/20",
      image: "/GrowHabit.png",
    },
    {
      id: 4,
      title: "Portfolio",
      description:
        "A modern, responsive personal portfolio website showcasing projects, skills, and professional achievements with an engaging and user-friendly design.",
      tags: [
        "React",
        "Next.js",
        "HTML",
        "Tailwind CSS",
        "Aceternity",
        "Framer Motion",
      ],
      link: "#",
      gradient: "from-cyan-500/20 to-blue-500/20",
      image: "/Portfolio.png",
    },
    {
      id: 2,
      title: "Famous Inventors",
      description:
        "Explore the achievements of famous inventors, learn about their groundbreaking inventions, and see how they accelerated technological progress.",
      tags: ["HTML", "CSS"],
      link: "https://famousinventors.netlify.app/",
      gradient: "from-purple-500/20 to-pink-500/20",
      image: "/FamousInventors.png",
    },
    {
      id: 3,
      title: "Whack-A-Mole",
      description:
        "A fast-paced arcade game where players hit popping moles as quickly as possible to score points before time runs out.",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "https://whack-a-mole12.netlify.app/",
      gradient: "from-cyan-500/20 to-purple-500/20",
      image: "/WhackAMole.png",
    },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-bold mb-16 text-balance text-center"
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative flex-shrink-0 w-full md:w-[500px] overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-accent/50 snap-center cursor-pointer my-6 interactive"
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div className="relative h-80 overflow-hidden bg-background/50">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </motion.div>
              </motion.div>

              <div className="relative p-8 bg-background/80 backdrop-blur-sm overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCard === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      hoveredCard === project.id
                        ? `radial-gradient(circle 300px at ${
                            mousePosition.x
                          }px ${
                            mousePosition.y - 300
                          }px, rgba(0, 217, 255, 0.15), transparent 100%)`
                        : "transparent",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.svg
                      className="w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ rotate: 45 }}
                      animate={{ rotate: hoveredCard === project.id ? 0 : 45 }}
                      transition={{ duration: 0.1 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground mb-6 text-sm leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        custom={i}
                        variants={tagVariants}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(0, 217, 255, 0.2)",
                        }}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/30 group-hover:border-accent/60 transition-colors cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          Scroll horizontally to view more projects →
        </p>
      </div>
    </section>
  );
}
