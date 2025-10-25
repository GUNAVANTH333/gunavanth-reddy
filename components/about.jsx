"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance text-center">
            About <span className="text-accent">Me</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate full-stack developer with a love for creating
              beautiful, performant web experiences. With expertise in modern
              JavaScript frameworks and cloud technologies, I transform ideas
              into elegant solutions.
            </p>

            <p>
              My journey in web development started with a curiosity about how
              things work on the internet. Over the years, I've honed my skills
              in building scalable applications, optimizing performance, and
              crafting intuitive user interfaces that users love.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              pushing the boundaries of what's possible on the web.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
