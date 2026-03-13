import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import Link from "next/link";

export const Navbar = () => {
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
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-border" : "bg-transparent py-8"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link href="/">
          <span className="font-heading text-2xl tracking-tighter cursor-pointer">
            SG<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-secondary hover:text-foreground transition-colors cursor-pointer">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
            {/* Mobile menu icon could go here, keeping it minimal for now */}
        </div>
      </Container>
    </motion.nav>
  );
};
