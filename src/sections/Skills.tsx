import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

export const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "TypeScript"],
    },
    {
      title: "Design",
      skills: ["Figma", "UI Systems", "Tailwind CSS"],
    },
    {
      title: "Tools",
      skills: ["Git", "Vercel", "Framer Motion"],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-40">
      <Container>
        <div className="grid md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <SectionTitle
              subtitle="Expertise"
              title="Skills & Tools"
            />
          </div>
          
          <div className="md:col-span-3 grid sm:grid-cols-3 gap-12">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              >
                <h4 className="font-heading text-xl mb-6 pb-4 border-b border-border">{group.title}</h4>
                <ul className="space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-secondary text-sm tracking-wide flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
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
