import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";

export const Learning = () => {
  return (
    <section className="py-24 md:py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h4 className="mb-12 text-sm font-bold uppercase tracking-[0.5em] text-accent">Growth Mindset</h4>
          <h2 className="mb-12 text-4xl leading-tight font-heading md:text-5xl">
            Growing as a frontend developer while expanding toward full-stack product development.
          </h2>
          <p className="text-xl leading-relaxed text-secondary">
            I am continuously improving my knowledge of modern frontend tools, scalable architecture, and real-world product thinking to build cleaner, faster, and more effective digital experiences.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
