"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { FAQS } from "../lib/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-lg  text-primary  mb-4">FAQ's</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Native <details> keeps every answer in the DOM for search
              engines and AI assistants; content is only collapsed visually. */}
          {FAQS.map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <details className="group border-b border-border text-black">
                <summary className="flex items-center justify-between gap-4 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden text-lg font-light py-4 hover:underline">
                  <h3 className="text-lg font-light">{faq.question}</h3>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="leading-relaxed pb-4 text-sm">{faq.answer}</p>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
