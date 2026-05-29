import React from "react";
import { Container } from "./Container";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <span className="text-xl tracking-tighter font-heading">
            SG<span className="text-accent">.</span>
          </span>
        </div>

        <div className="text-xs font-medium uppercase tracking-widest text-secondary">
          &copy; {currentYear} Senanur Gercek. All rights reserved.
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-secondary transition-colors hover:text-accent">
            Back to Top
          </a>
        </div>
      </Container>
    </footer>
  );
};
