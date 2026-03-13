import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const ProjectCard = ({ title, category, description, image, tags }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative overflow-hidden"
    >
      <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-border relative">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="pt-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2">
              {category}
            </p>
            <h3 className="text-3xl font-heading mb-3">{title}</h3>
          </div>
          <div className="flex gap-4">
            <button className="text-secondary hover:text-accent transition-colors">
              <Github size={18} />
            </button>
            <button className="text-secondary hover:text-accent transition-colors">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
        
        <p className="text-secondary mb-6 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] uppercase tracking-widest text-secondary/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
