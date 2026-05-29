import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

export const Experience = () => {
  const experiences = [
    {
      role: "React Developer",
      company: "Freelance",
      period: "2024 - Present",
      points: [
        "Built responsive and reusable UI components to improve consistency across landing pages, e-commerce interfaces, and custom web projects.",
        "Integrated frontend applications with REST APIs and structured component-based architectures for more maintainable development workflows.",
        "Translated design ideas into clean, production-ready interfaces with strong attention to spacing, hierarchy, and user experience.",
      ],
    },
    {
      role: "Backend Intern",
      company: "Acun Medya Academy",
      period: "2023",
      points: [
        "Gained practical experience with C# and .NET Core while strengthening my understanding of application structure and backend logic.",
        "Worked with REST APIs and data management concepts, improving how I approach frontend and backend integration in full product workflows.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-foreground py-24 text-background">
      <Container>
        <div className="max-w-4xl">
          <SectionTitle subtitle="Career" title="Work Experience" className="mb-16 invert" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid gap-8 md:grid-cols-3"
              >
                <div className="md:col-span-1">
                  <p className="font-semibold text-accent">{exp.period}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="mb-2 text-3xl font-heading">{exp.role}</h3>
                  <p className="mb-6 text-xl text-secondary/80">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-4 text-sm text-secondary/60">
                        <span>&mdash;</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
