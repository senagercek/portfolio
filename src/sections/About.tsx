import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

export const About = () => {
  const highlights = [
    {
      title: "React & Next.js Development",
      description: "Building maintainable frontend interfaces with reusable components and modern development patterns.",
    },
    {
      title: "Responsive UI Design",
      description: "Creating polished layouts that stay consistent across mobile, tablet, and desktop screens.",
    },
    {
      title: "User-Focused Experiences",
      description: "Designing clean, intuitive interfaces that balance clarity, usability, and visual quality.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-40">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <SectionTitle subtitle="About Me" title="I design and build modern frontend experiences with a strong eye for UI." />
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-lg leading-relaxed text-secondary"
            >
              I am a frontend developer focused on React and Next.js, with a strong interest in responsive design, clean interfaces, and user-focused digital products. I enjoy turning ideas into structured, elegant web experiences and continuously improving my skills with modern frontend technologies.
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
                  <div className="mt-2 h-full w-1 bg-accent" />
                  <div>
                    <h4 className="mb-1 text-xl font-heading">{item.title}</h4>
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
