"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "RawFeed",
      description:
        "A link-sharing discussion platform where each thread gives you an auto-generated pseudonym and avatar, keeping your identity consistent within a conversation but unlinkable across threads.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS v4",
        "Express",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "Google OAuth",
      ],
      demoLink: "https://raw-feed.vercel.app/",
      githubLink: "https://github.com/GUNAVANTH333/RawFeed",
      gradient: "from-cyan-500/20 to-blue-500/20",
      image: "/RawFeed.png",
    },
    {
      id: 2,
      title: "CineBook",
      description:
        "A cinema ticket booking platform with an interactive seat map, tiered pricing, and TTL-based seat locking to prevent double-booking, plus an admin dashboard for managing movies, screens, and shows.",
      tags: [
        "React 19",
        "Vite",
        "TypeScript",
        "React Router v7",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "JWT",
        "bcrypt",
        "Zod",
      ],
      demoLink: "https://cinebookapp.vercel.app/",
      githubLink: "https://github.com/GUNAVANTH333/SESD_Project_CineBook",
      gradient: "from-cyan-500/20 to-purple-500/20",
      image: "/CineBook.png",
    },
    {
      id: 3,
      title: "CGPA-Analyzer",
      description:
        "A modern, full-stack web application for students to track their academic performance, calculate and predict CGPA, and manage semester grades efficiently.",
      tags: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "Prisma ORM",
      ],
      demoLink: "https://cgpa-analyzer.vercel.app/",
      githubLink: "https://github.com/GUNAVANTH333/CGPA-Analyzer",
      gradient: "from-cyan-500/20 to-purple-500/20",
      image: "/CGPA-Analyzer.png",
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
      gradient: "from-cyan-500/20 to-blue-500/20",
      image: "/Portfolio.png",
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
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory custom-scroll"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => {
                const target = project.demoLink || project.githubLink;
                if (target) {
                  window.open(target, "_blank", "noopener,noreferrer");
                }
              }}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative flex-shrink-0 w-full md:w-[500px] overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-accent/50 snap-center cursor-pointer my-6 interactive flex flex-col"
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div className="relative h-80 overflow-hidden bg-background/50 flex-shrink-0">
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

              <div className="relative p-8 bg-background/80 backdrop-blur-sm overflow-hidden flex-1 flex flex-col">
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

                <div className="relative z-10 flex flex-col flex-1">
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
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`${project.title} GitHub repository`}
                          className="p-2 rounded-full border border-white/10 text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.61.56.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.63 5.24-5.13 5.52.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.77.54A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
                          </svg>
                        </motion.a>
                      )}
                      {project.demoLink && (
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`${project.title} live site`}
                          className="p-2 rounded-full border border-white/10 text-accent hover:border-accent/50 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </motion.a>
                      )}
                    </div>
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
                    className="flex flex-wrap gap-2 mt-auto"
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
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          Scroll horizontally to view more projects →
        </p>
      </div>
    </section>
  );
}
