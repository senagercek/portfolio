import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";

export const Learning = () => {
  return (
    <section className="py-24 md:py-40">
      <Container>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl mx-auto"
        >
            <h4 className="text-sm uppercase tracking-[0.5em] text-accent font-bold mb-12">Vision</h4>
            <h2 className="text-4xl md:text-5xl font-heading mb-12 leading-tight">
                Frontend uzmanlığı + backend öğrenerek full-stack olma hedefi.
            </h2>
            <p className="text-xl text-secondary leading-relaxed">
                Yeni teknolojiler ve ölçeklenebilir mimariler üzerine sürekli gelişim. Her projede daha temiz, daha hızlı ve daha etkileyici deneyimler yaratmak için çalışıyorum.
            </p>
        </motion.div>
      </Container>
    </section>
  );
};
