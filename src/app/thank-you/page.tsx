"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-xl w-full text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="w-16 h-16 text-primary" />
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-white mb-4">
          Thank You
        </h1>

        {/* Divider */}
        <div className="w-16 h-px bg-primary mx-auto mb-6" />

        {/* Message */}
        <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-10">
          Your request has been received successfully. Our team will contact you
          shortly to assist you with the next steps.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3 text-sm tracking-wide uppercase border border-white/20 text-white hover:bg-white hover:text-black transition"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
