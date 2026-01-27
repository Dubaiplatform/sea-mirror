"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Consultation() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900/40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Small label */}
        <motion.p
          className="text-xs tracking-[0.35em] uppercase text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Private Consultation
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-light text-white max-w-3xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let’s Find the Right Property for Your Lifestyle & Investment Goals
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Speak directly with our property advisors for tailored guidance,
          exclusive availability, and transparent insights into Dubai’s most
          desirable real estate opportunities.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="#contact-form"
            className="inline-flex items-center justify-center px-10 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
