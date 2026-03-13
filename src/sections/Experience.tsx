import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

export const Experience = () => {
  const experiences = [
    {
      role: "React Developer",
      company: "Freelance",
      period: "2024 – Present",
      points: [
        "Responsive UI ve component tabanlı frontend geliştirme",
        "API entegrasyonu ve modern frontend mimarisi",
      ],
    },
    {
      role: "Backend Intern",
      company: "Acun Medya Academy",
      period: "2023",
      points: [
        "C# ve .NET Core ile backend deneyimi",
        "REST API ve veri yönetimi",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-foreground text-background">
      <Container>
        <div className="max-w-4xl">
          <SectionTitle
            subtitle="Career"
            title="Work Experience"
            className="mb-16 invert"
          />
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid md:grid-cols-3 gap-8"
              >
                <div className="md:col-span-1">
                  <p className="text-accent font-semibold">{exp.period}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-heading mb-2">{exp.role}</h3>
                  <p className="text-secondary/80 mb-6 text-xl">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-4 text-secondary/60 text-sm">
                        <span>—</span>
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
