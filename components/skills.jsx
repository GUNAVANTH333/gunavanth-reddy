"use client";

import { motion } from "framer-motion";
import { MovingBorderButton } from "@/components/ui/moving-border";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "Vercel",
    "Figma",
    "Prisma ORM"
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-28 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-14"
      >
        My <span className="text-accent">Skills</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 max-w-4xl"
      >
        {skills.map((skill) => (
          <motion.div key={skill} variants={item}>
            <MovingBorderButton
              as="div"
              borderRadius="0.75rem"
              duration={3000}
              className="px-6 py-3 text-sm font-medium text-accent hover:text-white transition-colors duration-300 btn-interactive"
              containerClassName="h-auto w-auto"
            >
              {skill}
            </MovingBorderButton>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
