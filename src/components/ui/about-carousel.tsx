"use client";
// import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, { useEffect, useId, useRef, useState } from "react";

/* -------------------------------- Types -------------------------------- */
interface SlideData {
  title: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

/* -------------------------------- Slide -------------------------------- */
const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100
                   w-[70vw] h-[70vw] mx-[2vw]
                   sm:w-[50vw] sm:h-[50vw] sm:mx-[3vw]
                   md:w-[95vmin] md:h-[55vmin] md:mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // 🔥 faster
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] overflow-hidden transition-all duration-75 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out"
            style={{ opacity: current === index ? 1 : 0.5 }}
            alt={title}
            src={src}
            draggable={false}
          />
        </div>
      </li>
    </div>
  );
};

/* ---------------------------- Controls (UNCHANGED) ---------------------------- */
const CarouselControl = ({
  type,
  title,
  handleClick,
}: {
  type: string;
  title: string;
  handleClick: () => void;
}) => (
  <button
    className={`w-8 text-black h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center mx-1 sm:mx-2 justify-center bg-primary border-3 border-transparent rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
      type === "previous" ? "rotate-180" : ""
    }`}
    title={title}
    onClick={handleClick}
  >
    {">"}
  </button>
);

/* -------------------------------- Carousel -------------------------------- */
export function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const check = () => setIsMobileView(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const slideCount = slides.length;
  const infiniteSlides = [...slides, ...slides, ...slides];

  /* --------------------- Swipe logic (UNCHANGED) --------------------- */
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const SWIPE_THRESHOLD = 30; // 🔥 faster swipe response

  const handlePreviousClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = () => {
    isDragging.current = true;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current || startX.current === null) return;

    const diff = startX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      diff > 0 ? handleNextClick() : handlePreviousClick();
    }

    startX.current = null;
    isDragging.current = false;
  };

  /* ---------------- Infinite loop reset (FASTER) ---------------- */
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (current >= slideCount) setCurrent(current - slideCount);
      else if (current < -slideCount) setCurrent(current + slideCount);
    }, 500); // 🔥 reduced from 1000ms

    return () => clearTimeout(timer);
  }, [current, isTransitioning, slideCount]);

  const offset = (current + slideCount) * (100 / infiniteSlides.length);
  const id = useId();

  return (
    <div
      className="relative w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] md:w-[95vmin] md:h-[55vmin] mx-auto"
      aria-labelledby={`carousel-${id}`}
    >
      <ul
        className="absolute flex mx-[-2vw] sm:mx-[-3vw] md:mx-[-4vmin] transition-transform duration-500 ease-out touch-pan-y select-none"
        style={{ transform: `translateX(-${offset}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {infiniteSlides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current + slideCount}
            handleSlideClick={(i) => {
              if (isMobile) {
                setIsModalOpen(true);
              } else {
                setCurrent(i - slideCount);
                setIsModalOpen(true);
              }
            }}
          />
        ))}
      </ul>

      {/* Controls */}
      <div className="absolute flex justify-center w-full top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="flex justify-between w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] md:w-[calc(100%+6rem)] pointer-events-auto">
          <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />
          <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>

      <MobileGalleryModal
        slides={slides}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Mobile dots */}
      {isMobileView && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => {
            const activeIndex =
              ((current % slideCount) + slideCount) % slideCount;

            return (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ease-out
            ${activeIndex === i ? "w-6 bg-white" : "w-2 bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ---------------------------- Mobile Modal ---------------------------- */
const MobileGalleryModal = ({
  slides,
  isOpen,
  onClose,
}: {
  slides: SlideData[];
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <div className="h-[100dvh] flex flex-col">
        <div className="flex justify-between items-center px-10 py-4">
          <div>Image Gallery</div>
          <button onClick={onClose} className="text-white text-xl">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-10">
          <div className="flex flex-col gap-4">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.src}
                alt={slide.title}
                className="w-full object-cover"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
