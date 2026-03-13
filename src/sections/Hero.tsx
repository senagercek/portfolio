import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { ScrollIndicator } from "../components/ScrollIndicator";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Container className="relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent uppercase tracking-[0.4em] text-xs font-semibold mb-6"
          >
            Frontend Developer & Digital Experience Creator
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading text-foreground mb-8 leading-[0.9]"
          >
            SENANUR <br /> GERÇEK<span className="text-accent">.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-secondary max-w-xl mb-12 leading-relaxed"
          >
            Crafting modern and elegant web interfaces with a focus on aesthetics, performance, and user experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <Button variant="primary" onClick={() => (window.location.href = "#projects")}>
              View Projects
            </Button>
            <Button variant="outline" onClick={() => (window.location.href = "#contact")}>
              Contact
            </Button>
          </motion.div>
        </div>
      </Container>
      
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <ScrollIndicator />
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 -right-64 -translate-y-1/2 w-[800px] h-[800px] border border-border rounded-full opacity-50 pointer-events-none" />
    </section>
  );
};
