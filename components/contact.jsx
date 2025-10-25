"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance font-body">
            I&apos;m always interested in hearing about new projects and
            opportunities. Feel free to reach out if you&apos;d like to
            collaborate or just say hello!
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 217, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent text-background font-heading font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg btn-interactive"
            >
              Send Email
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1hi1vX8Z5mPVET2M6m1YyPhTjJA_4vczB/view?usp=sharing"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 217, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-accent text-accent font-heading font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300 btn-interactive"
            >
              View Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground font-body">
              © 2025 Gunavanth. Built with Next.js, React, and Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
