import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "senanurgercek1@gmail.com", href: "mailto:senanurgercek1@gmail.com" },
    { icon: <Github size={20} />, label: "GitHub", value: "github.com/senagercek", href: "https://github.com/senagercek" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/senanur-gercek", href: "https://linkedin.com/in/senanur-gercek" },
    { icon: <MapPin size={20} />, label: "Location", value: "Istanbul, Turkey", href: null },
  ];

  return (
    <section id="contact" className="py-24 md:py-40">
      <Container>
        <div className="grid gap-20 md:grid-cols-2">
          <div>
            <SectionTitle subtitle="Contact" title="Let's work together." />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 max-w-md text-xl leading-relaxed text-secondary"
            >
              Available for freelance projects, collaborations, and junior frontend developer opportunities. If you are looking for a developer who values clean UI and thoughtful execution, feel free to get in touch.
            </motion.p>
          </div>

          <div className="space-y-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-secondary transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                    {info.icon}
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-widest text-secondary/60">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-xl transition-colors group-hover:text-accent">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-xl">{info.value}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
