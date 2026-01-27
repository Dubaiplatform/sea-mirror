import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { Amenities } from "../components/amenities";
import { Area } from "../components/area";
import { SilimarProject } from "../components/silimar-project";
import { Type } from "../components/type";
import { FAQ } from "../components/faq";
import { Footer } from "../components/footer";
import ContactForm from "../components/ui/contact-form";
import { Consultation } from "../components/consultation";
import FloatingButton from "../components/ui/floating-button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Features />

        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/sea-mirror-villa/37.jpg')" }}
            role="img"
            aria-label="Iconic Burj Al Arab hotel in Dubai"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
                An architectural reverie encased in oxidized copper reflects the
                ocean’s infinity and unveils a tale of timeless elegance
              </h2>
            </div>
          </div>
        </section>

        <Amenities />

        <Area />

        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/sea-mirror-villa/19.jpg')" }}
            role="img"
            aria-label="Iconic Burj Al Arab hotel in Dubai"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
                Golden mashrabiyas encase majestic architectural dimensions to
                create blissfully shaded interiors against the azure backdrop of
                the Arabian sky
              </h2>
            </div>
          </div>
        </section>

        <Type />

        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/sea-mirror-villa/49.jpg')" }}
            role="img"
            aria-label="Iconic Burj Al Arab hotel in Dubai"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
                An inspired architectural haven that seamlessly blends the
                interior and the exterior to create a secluded verdant oasis
                that gazes towards the ocean and Dubai’s skyline
              </h2>
            </div>
          </div>
        </section>

        <FAQ />
        {/* <Consultation /> */}

        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/sea-mirror-villa/43.jpg')" }}
            role="img"
            aria-label="Iconic Burj Al Arab hotel in Dubai"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
                A monolithic marble base dissolves into elegant wooden verticals
                to reveal a home of unquestionable architectural prowess with
                stunning views of the Dubai skyline and sea
              </h2>
            </div>
          </div>
        </section>

        <ContactForm />

        <SilimarProject />
      </main>
      <Footer />

      <FloatingButton />
    </>
  );
}
