"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <motion.a
      href="#contact-form"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-2 rounded-full bg-primary px-4 py-4 text-black shadow-xl hover:shadow-2xl"
      aria-label="Contact us"
    >
      <MessageCircle className="h-5 w-5" />
      {/* <span className="hidden sm:block text-sm font-medium">Enquire Now</span> */}
    </motion.a>
  );
}
