import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container = ({ children, className, as: Component = "div" }: ContainerProps) => {
  return (
    <Component className={cn("max-w-7xl mx-auto px-6 sm:px-12", className)}>
      {children}
    </Component>
  );
};
