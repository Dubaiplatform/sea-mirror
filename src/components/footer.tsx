"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-4 border-t border-border">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sea Mirror. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
