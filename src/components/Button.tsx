import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {
  const variants = {
    primary: "bg-foreground text-background hover:bg-black",
    secondary: "bg-accent text-white hover:opacity-90",
    outline: "bg-transparent border border-border text-foreground hover:bg-foreground hover:text-background",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-8 py-4 text-sm font-medium transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
