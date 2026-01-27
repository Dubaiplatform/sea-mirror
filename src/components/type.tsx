"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const UNIT_TYPES = [
  {
    category: "Sea Mirror Traveltine",
    type: "4 Bedrooms",
    size: "15,993 sq.ft.",
  },
  {
    category: "Sea Mirror Copper",
    type: "5 Bedrooms",
    size: "13,217 sq.ft.",
  },
  {
    category: "Sea Mirror Zinc",
    type: "5 Bedrooms",
    size: "13,969 sq.ft.",
  },
  {
    category: "Sea Mirror Mahogany",
    type: "5 Bedrooms",
    size: "14,532 sq.ft.",
  },

  {
    category: "Sea Mirror Marble",
    type: "5 Bedrooms",
    size: "16,366 sq.ft.",
  },
];

const PAYMENT_PLAN = [
  { title: "Down Payment", value: "10%" },
  { title: "During Construction", value: "50%" },
  { title: "Upon Handover in Q4, 2026", value: "40%" },
];

const cardsWrap = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardItem: any = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Type() {
  return (
    <section
      id="type"
      className="relative md:py-28 sm:py-20 py-20 bg-black text-white overflow-hidden"
    >
      {/* subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900/60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.p
          className="text-lg  text-center text-primary uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Type of Residences
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-center font-light mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Curated Living Spaces
        </motion.h2>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {UNIT_TYPES.map((item, index) => (
              <motion.div
                key={item.type}
                className="grid grid-cols-5 items-center py-10 px-4 hover:bg-white/[0.03] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Name */}
                <div className="col-span-2">
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                    Unit Type
                  </p>
                  <p className="text-2xl font-light">{item.category}</p>
                </div>

                {/* Unit Type */}
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                    Bedrooms
                  </p>
                  <p className="text-2xl font-light">{item.type}</p>
                </div>

                {/* Size */}
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                    Size
                  </p>
                  <p className="text-xl">{item.size}</p>
                </div>

                {/* CTA */}
                <div className="">
                  <Link
                    href="#contact-form"
                    className="inline-block border-b border-primary text-primary tracking-wide hover:opacity-80 transition"
                  >
                    Price on Request
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {UNIT_TYPES.map((item, index) => (
            <motion.div
              key={item.type}
              className="border-[0.5px] border-primary bg-white/[0.02] backdrop-blur-sm p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <p className="text-sm uppercase tracking-widest text-muted-foreground "></p>
                <p className="text-2xl font-light">{item.category}</p>
              </div>

              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Unit Type
              </p>
              <p className="text-xl mb-4">{item.type}</p>

              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Size
              </p>
              <p className="mb-6 text-xl">{item.size}</p>

              <Link
                href="#contact-form"
                className="inline-block border-b border-primary text-primary tracking-wide"
              >
                Price on Request
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment Plan */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 mt-20">
        <motion.p
          className="text-lg  text-center text-primary uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Payment plan
        </motion.p>

        {/* <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-center font-light mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Exclusive Payment Plan
        </motion.h2> */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={cardsWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PAYMENT_PLAN.map((p) => (
            <motion.div
              key={p.title}
              variants={cardItem}
              // whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="border-[0.5px] border-primary  backdrop-blur-sm p-6"
            >
              <p className="text-md uppercase  text-muted-foreground mb-3">
                {p.title}
              </p>

              <p className="text-3xl md:text-4xl font-light text-white">
                {p.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center items-center mt-12 w-full">
          <Button
            asChild
            className="bg-white text-primary-foreground hover:bg-primary/90  hover:text-white"
          >
            <Link href="#contact-form">Register Your Interest</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
