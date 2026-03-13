import React from "react";
import { Container } from "./Container";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="font-heading text-xl tracking-tighter">
            SG<span className="text-accent">.</span>
          </span>
        </div>
        
        <div className="text-secondary text-xs uppercase tracking-widest font-medium">
          &copy; {currentYear} Senanur Gerçek. All rights reserved.
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-xs uppercase tracking-widest font-bold text-secondary hover:text-accent transition-colors">
            Back to Top
          </a>
        </div>
      </Container>
    </footer>
  );
};
