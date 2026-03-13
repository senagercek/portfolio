import React from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Mindful Journey",
      category: "Wellbeing Platform",
      description: "A user-centric platform focused on holistic health and mental wellbeing. Built with a focus on smooth interactions and accessible design.",
      image: "/mindful.png",
      tags: ["Next.js", "React", "Tailwind", "REST API"],
    },
    {
      title: "SENORA E-Commerce",
      category: "Fashion Retail",
      description: "A premium fashion e-commerce experience designed for high-end brands. Features include dynamic filtering, editorial product galleries, and seamless checkout.",
      image: "/senora.png",
      tags: ["React", "Next.js", "Tailwind"],
    },
    {
      title: "Cebinex Financial Dashboard",
      category: "Fintech Solution",
      description: "A sophisticated financial management dashboard providing real-time data visualization and secure API integration for financial tracking.",
      image: "/cebinex.png",
      tags: ["React", "React Query", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#F2F2F2]">
      <Container>
        <SectionTitle
          subtitle="Featured Work"
          title="Curated Projects"
          className="mb-20"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};
