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
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <SectionTitle
              subtitle="Let's build something"
              title="Work together."
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-secondary mt-12 max-w-sm"
            >
              Interested in a project or just want to say hi? Feel free to reach out through any of these channels.
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
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-secondary group-hover:border-accent group-hover:text-accent transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-secondary/60 mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-xl group-hover:text-accent transition-colors">
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
