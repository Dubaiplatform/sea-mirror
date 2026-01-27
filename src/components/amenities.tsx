"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const section2 = [
  {
    title: "24/7 concierge services to attend to your every need",
    icon: "",
  },
  {
    title: "Expansive staff quarters for maids and drivers",
    icon: "",
  },
  {
    title:
      "Personalize your interiors with our bespoke and custom handmade furniture package",
    icon: "",
  },
  {
    title:
      "Excellent technical service packages to keep your home immaculate: landscaping, façade maintenance, etc",
    icon: "",
  },
  {
    title:
      "Exceptional in-home service packages for effortless relaxation and luxury: maid's service, spa treatments, catering etc",
    icon: "",
  },
  {
    title:
      "Direct access with complimentary membership to the entire BVLGARI Hotel and Resort",
    icon: "",
  },
];

const section1 = [
  {
    title: "Indulge in luxury with personal wine cellar and cigar room",
    icon: "",
  },
  {
    title: "Relax completely with in-home spa facilities and treatments",
    icon: "",
  },
  {
    title: "4 car underground parking showroom",
    icon: "",
  },
  {
    title: "Private access to Jumeira Bay's waterfront",
    icon: "",
  },

  {
    title: "State-of-the-art kitchen appliances",
    icon: "",
  },
  {
    title:
      "Entire home automation services for ultimate convenience and security",
    icon: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Amenities() {
  return (
    <section id="amenities" className="relative py-20 lg:py-32 bg-white">
      {/* <GemParticles /> */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-lg  text-primary uppercase mb-4 ">
            World-Class Amenities
          </p>
          <h2 className="text-2xl md:text-3xl font-light leading-tight tracking-tight text-center text-black">
            Spacious lounge areas for lavish entertaining
            <br className="" />A private oasis of verdant gardens and terraces
            <br className="" />2 swimming pools for relaxing and lap swimming
          </h2>
        </motion.div>
      </div>

      <div className="md:mt-20">
        <div className="">
          <div className="grid md:grid-cols-2">
            <div className="w-full aspect-square">
              <Image
                src={"/sea-mirror-villa/22.jpg"}
                alt=""
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-center items-center md:px-20 px-5 md:mt-0 sm:mt-10 mt-10">
              <motion.div
                className="grid grid-cols-1 text-black w-full gap-2  mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {section1.map((amenity: any, index: number) => (
                  <motion.article
                    key={index}
                    variants={itemVariants}
                    className={`flex gap-2 `}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    • <div>{amenity?.title}</div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="md:mt-0 sm:mt-10 mt-10">
          <div className="grid md:grid-cols-2 ">
            {/* IMAGE — FIRST ON MOBILE */}
            <div className="w-full aspect-square order-1 md:order-2">
              <Image
                src={"/sea-mirror-villa/32.jpg"}
                alt=""
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT — SECOND ON MOBILE */}
            <div className="flex justify-center items-center order-2 md:order-1 md:px-20 px-5 md:mt-0 sm:mt-10 mt-10">
              <motion.div
                className="grid text-black w-full grid-cols-1 gap-2 mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {section2.map((amenity: any, index: number) => (
                  <motion.article
                    key={index}
                    variants={itemVariants}
                    className={`flex gap-2 `}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    • <div>{amenity?.title}</div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-12">
        <>
          <Link
            className="bg-black text-white hover:bg-primary/90  hover:text-white text-lg px-4 py-4"
            href="#contact-form"
          >
            Download Brochure
          </Link>
        </>
      </div>
    </section>
  );
}
