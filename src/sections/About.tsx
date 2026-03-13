import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

export const About = () => {
  const highlights = [
    { title: "Frontend Development", description: "Building responsive and fast web applications." },
    { title: "UI Design Thinking", description: "Designing interfaces that are both beautiful and functional." },
    { title: "E-commerce Experiences", description: "Specialized in high-conversion digital storefronts." },
  ];

  return (
    <section id="about" className="py-24 md:py-40">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="Minimal Manifesto"
              title="I design and develop modern web experiences."
            />
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg text-secondary leading-relaxed mb-12"
            >
              Focused on the intersection of aesthetics and code. I believe in minimal design that speaks loudly through quality and performance.
            </motion.p>
            
            <div className="space-y-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1 h-full bg-accent mt-2" />
                  <div>
                    <h4 className="font-heading text-xl mb-1">{item.title}</h4>
                    <p className="text-sm text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
