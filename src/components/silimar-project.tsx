"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------------
   DATA
----------------------------------- */

const offerings = [
  {
    title: "Sea Mirror Residence",
    location: "Jumeirah Bay Island",
    images: [
      "/residence/1.jpg",
      "/residence/2.jpg",
      "/residence/3.jpg",
      "/residence/4.jpg",
      "/residence/5.jpg",
      "/residence/6.jpg",
      "/residence/7.jpg",
      "/residence/8.jpg",
      "/residence/9.jpg",
      "/residence/10.jpg",
      "/residence/11.jpg",
      "/residence/12.jpg",
    ],
    href: "/",
  },
];

/* ----------------------------------
   IMAGE SLIDER (AUTO + SWIPE)
----------------------------------- */

function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto slide
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [index, isDragging]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  const getNextIndex = () => (index + 1) % images.length;
  const getPrevIndex = () => (index - 1 + images.length) % images.length;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black ">
      {/* Container for all slides */}
      <div className="relative w-full h-full">
        <AnimatePresence custom={direction} mode="popLayout">
          {/* Current Image */}
          <motion.div
            key={`current-${index}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
              setIsDragging(false);
              if (info.offset.x < -80) paginate(1);
              if (info.offset.x > 80) paginate(-1);
            }}
            className="absolute inset-0 will-change-transform z-10"
          >
            <div className="relative w-full h-full cursor-grab active:cursor-grabbing">
              <Image
                src={images[index]}
                alt="Property image"
                fill
                className="object-cover pointer-events-none select-none"
                priority
                draggable={false}
              />
            </div>
          </motion.div>

          {/* Next Image Preview (Right) */}
          <motion.div
            key={`next-${index}`}
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: "100%", opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 pointer-events-none z-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={images[getNextIndex()]}
                alt="Next property image"
                fill
                className="object-cover select-none"
                draggable={false}
              />
            </div>
          </motion.div>

          {/* Previous Image Preview (Left) */}
          <motion.div
            key={`prev-${index}`}
            initial={{ x: "-100%", opacity: 0.5 }}
            animate={{ x: "-100%", opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 pointer-events-none z-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={images[getPrevIndex()]}
                alt="Previous property image"
                fill
                className="object-cover select-none"
                draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ease-out
        ${
          i === index ? "w-6 bg-white" : "w-2 bg-white/40 md:hover:bg-white/70"
        }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Optional: Arrow Navigation */}
      <button
        onClick={() => paginate(-1)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white items-center justify-center hover:bg-black/70 transition"
        aria-label="Previous image"
      >
        {"<"}
      </button>
      <button
        onClick={() => paginate(1)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white items-center justify-center hover:bg-black/70 transition"
        aria-label="Next image"
      >
        {">"}
      </button>
    </div>
  );
}

/* ----------------------------------
   MAIN SECTION
----------------------------------- */

export function SilimarProject() {
  return (
    <section className="relative py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-lg text-primary uppercase">Similar Projects</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full h-[260px] sm:h-[320px] md:h-[50vh] relative">
            <ImageSlider images={offerings[0].images} />
          </div>

          <div className="text-white space-y-4 flex flex-col justify-center">
            <div>
              <div className="text-2xl">Sea Mirror Residences</div>
              <p>Jumeirah 2, Dubai</p>
            </div>

            <p className="font-thin">
              Sea Mirror Residences is a high-end waterfront project by Lamar
              Development on Jumeirah Bay Island. The masterplan includes an
              intimate collection of ultra-luxury penthouses with generous
              indoor and outdoor spaces
            </p>

            <Link href={"#contact-form"} className="text-primary underline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
