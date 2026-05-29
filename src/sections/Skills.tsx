import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

export const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      title: "UI & Design",
      skills: ["Tailwind CSS", "Responsive Design", "Figma", "Design Systems"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Vercel", "Framer Motion", "REST APIs"],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-40">
      <Container>
        <div className="grid gap-16 md:grid-cols-4">
          <div className="md:col-span-1">
            <SectionTitle subtitle="Expertise" title="Skills & Tools" />
          </div>

          <div className="grid gap-12 md:col-span-3 sm:grid-cols-3">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              >
                <h4 className="mb-6 border-b border-border pb-4 text-xl font-heading">{group.title}</h4>
                <ul className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background px-4 py-2 text-xs uppercase tracking-[0.18em] text-secondary transition-colors duration-300 hover:border-accent hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
