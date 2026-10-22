import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import {
  BROKERAGE,
  FAQS,
  KEY_FACTS,
  PROJECT,
  SITE_URL,
  UNIT_TYPES,
} from "../../lib/site";

export const metadata: Metadata = {
  title: "About Sea Mirror Villas | Official Site",
  description: PROJECT.description,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Sea Mirror Villas | Official Site",
    description: PROJECT.description,
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-invert">
          <p className="text-lg text-primary uppercase mb-4">Official listing</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8">
            About Sea Mirror Villas, Jumeirah Bay Island
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {PROJECT.description}
          </p>

          <h2 className="text-2xl font-light mt-12 mb-4">Key facts</h2>
          <ul className="space-y-2 text-muted-foreground">
            {KEY_FACTS.map((fact) => (
              <li key={fact.label}>
                <strong className="text-white">{fact.label}:</strong>{" "}
                {"href" in fact && fact.href ? (
                  <a href={fact.href} className="text-primary underline">
                    {fact.value}
                  </a>
                ) : (
                  fact.value
                )}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-light mt-12 mb-4">Villa types</h2>
          <ul className="space-y-2 text-muted-foreground">
            {UNIT_TYPES.map((unit) => (
              <li key={unit.category}>
                {unit.category} — {unit.type}, {unit.size}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-light mt-12 mb-4">Payment plan</h2>
          <p className="text-muted-foreground">
            10% down payment, 50% during construction, 40% upon handover in{" "}
            {PROJECT.handover}. Prices on request at{" "}
            <Link href="/#contact-form" className="text-primary underline">
              {SITE_URL}
            </Link>
            .
          </p>

          <h2 className="text-2xl font-light mt-12 mb-4">
            Frequently asked questions
          </h2>
          {FAQS.map((faq) => (
            <div key={faq.question} className="mb-6">
              <h3 className="text-xl font-light mb-2">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}

          <h2 className="text-2xl font-light mt-12 mb-4">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Marketed by {BROKERAGE.name}.{" "}
            {BROKERAGE.relationship} Phone: {BROKERAGE.phoneDisplay}. Email:{" "}
            {BROKERAGE.email}. Address: {BROKERAGE.address}.
          </p>

          <p className="mt-10">
            <Link href="/" className="text-primary underline">
              Return to Sea Mirror Villas
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
