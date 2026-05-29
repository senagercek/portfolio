import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { ScrollIndicator } from "../components/ScrollIndicator";

export const Hero = () => {
  const cvHref = "/Senanur-Gercek-CV.pdf";
  // Add your CV file at public/Senanur-Gercek-CV.pdf to activate the download button.

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <Container className="relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-accent"
          >
            Frontend Developer & UI-Focused Web Designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-6xl leading-[0.9] text-foreground font-heading md:text-8xl lg:text-9xl"
          >
            SENANUR <br /> GERCEK<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-secondary md:text-xl"
          >
            I build clean, responsive, and user-focused web interfaces with React, Next.js, and Tailwind CSS, turning ideas into elegant digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            <Button variant="primary" onClick={() => (window.location.href = "#projects")}>
              View Projects
            </Button>
            <a
              href={cvHref}
              download
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-sm font-medium uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Download CV
            </a>
            <Button variant="outline" onClick={() => (window.location.href = "#contact")}>
              Contact Me
            </Button>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-12 right-12 hidden lg:block">
        <ScrollIndicator />
      </div>

      <div className="pointer-events-none absolute top-1/2 -right-64 h-[800px] w-[800px] -translate-y-1/2 rounded-full border border-border opacity-50" />
    </section>
  );
};
