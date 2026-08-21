"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Carousel } from "./ui/about-carousel";
import { trackClick } from "../lib/gtm";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const fadeInLeft: any = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const fadeInRight: any = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

export function Features() {
  const slideData = [
    {
      src: "/sea-mirror-villa/10.jpg",
      title:
        "Sea Mirror villa facade with cantilevered timber roofs and green screened upper floor, Jumeirah Bay Island",
    },
    {
      src: "/sea-mirror-villa/11.avif",
      title:
        "Sea Mirror villa exterior by Jacobsen Arquitetura on Jumeirah Bay Island, Dubai",
    },
    {
      src: "/sea-mirror-villa/12.avif",
      title:
        "Sea Mirror waterfront villa by Studio MK27 with landscaped gardens, Jumeirah Bay Island",
    },
    {
      src: "/sea-mirror-villa/1.jpg",
      title:
        "Sea Mirror villa infinity pool terrace with outdoor lounge and palm gardens",
    },
    {
      src: "/sea-mirror-villa/2.jpg",
      title:
        "Sea Mirror villa entrance courtyard with stone steps and fluted concrete wall",
    },
    {
      src: "/sea-mirror-villa/3.jpg",
      title:
        "Sea Mirror villa dining room by Patricia Urquiola with sculptural gold chandelier opening to the garden",
    },
    {
      src: "/sea-mirror-villa/4.jpg",
      title:
        "Sea Mirror villa living room with timber ceiling opening to the infinity pool and Arabian Gulf views",
    },
    {
      src: "/sea-mirror-villa/5.jpg",
      title:
        "Sea Mirror villa lounge and bar with backlit wine shelving and courtyard pool",
    },
    {
      src: "/sea-mirror-villa/6.jpg",
      title:
        "Sea Mirror villa master bedroom with upholstered headboard wall and leather armchair",
    },
    {
      src: "/sea-mirror-villa/7.jpg",
      title:
        "Sea Mirror villa glass courtyard facade with twin plunge pools reflecting palm trees",
    },
    {
      src: "/sea-mirror-villa/8.jpg",
      title:
        "Sea Mirror villa bathroom with green marble double vanity and travertine walls",
    },
    {
      src: "/sea-mirror-villa/9.jpg",
      title:
        "Sea Mirror villa bedroom with timber-slatted walls, copper accents and garden views",
    },
  ];

  return (
    <section id="about" className="py-18 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center overflow-hidden">
          {/* Image – FIRST on mobile */}
          <motion.div
            {...fadeInRight}
            className="relative md:aspect-[4/5] sm:aspect-[3/2] aspect-[3/2] overflow-hidden order-1 lg:order-2"
          >
            <Image
              src="/sea-mirror-villa/11.avif"
              alt="Sea Mirror villa exterior by Jacobsen Arquitetura and Studio MK27 on Jumeirah Bay Island"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text – SECOND on mobile */}
          <motion.div {...fadeInLeft} className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground mb-4 text-balance">
              Every home made modern. Every home made unique
            </h2>
            <p className="md:text-lg sm:text-md text-sm text-muted-foreground leading-relaxed mb-10 text-pretty">
              {" "}
              Sea Mirror is an exclusive seafront villa community located on
              Jumeirah Bay Island. The 18 unique private homes have been
              designed by international award-winning architects and designers.
              Each home boasts expansive indoor and outdoor entertainment
              spaces, complemented by world class amenities from the
              neighbouring BVLGARI Hotel, marina and yacht club. While
              peacefully secluded off the Arabian Gulf Coast, residents are only
              10 minutes from the buzz of Downtown Dubai and 15 minutes from the
              International Airport. Sea Mirror offers the ultimate balance
              between privacy, access and exquisite design{" "}
            </p>

            <Button
              asChild
              className="bg-white text-primary-foreground hover:bg-primary/90 hover:text-white"
            >
              <Link
                href="#contact-form"
                onClick={() => trackClick("Register Your Interest", "about")}
              >
                Register Your Interest
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className=" mt-20 overflow-hidden">
        <Carousel slides={slideData} />
      </div>
    </section>
  );
}
