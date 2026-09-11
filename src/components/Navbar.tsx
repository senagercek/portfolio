import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import Link from "next/link";

export const Navbar = () => {
  const cvHref = "/Senanur-Gercek-CV.pdf";
  // Add your CV file at public/Senanur-Gercek-CV.pdf to make this button downloadable.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 py-4 backdrop-blur-md" : "bg-transparent py-8"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link href="/">
          <span className="cursor-pointer text-2xl tracking-tighter font-heading">
            SG<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="cursor-pointer text-xs font-medium uppercase tracking-[0.2em] text-secondary transition-colors hover:text-foreground">
                {link.name}
              </span>
            </Link>
          ))}
          <a
            href={cvHref}
            download="Senanur-Gercek-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
          >
            Download CV
          </a>
        </div>

        <div className="md:hidden">
          {/* Mobile menu can be added here later if needed. */}
        </div>
      </Container>
    </motion.nav>
  );
};
