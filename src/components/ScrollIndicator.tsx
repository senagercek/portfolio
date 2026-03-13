import React from "react";
import { motion } from "framer-motion";

export const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-medium rotate-90 mb-8 origin-left">
        Scroll
      </span>
      <div className="w-[1px] h-20 bg-border relative overflow-hidden">
        <motion.div
          animate={{
            y: [0, 80],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-1/3 bg-accent"
        />
      </div>
    </div>
  );
};
