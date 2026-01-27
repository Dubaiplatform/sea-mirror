"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  explore: [
    { label: "About", href: "#about" },
    { label: "Amenities", href: "#amenities" },
    { label: "Rooms", href: "about-developer" },
    { label: "Type", href: "#type" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
  ],
};

// const socialLinks = [
//   { label: "Instagram", href: "#", icon: Instagram },
//   { label: "Facebook", href: "#", icon: Facebook },
//   { label: "Twitter", href: "#", icon: Twitter },
// ];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
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

export function Footer() {
  return (
    <footer className="py-4  border-t border-border">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8  flex flex-col md:flex-row justify-center items-center gap-4"
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
