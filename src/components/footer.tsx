"use client";

import { motion } from "framer-motion";

import { BROKERAGE } from "../lib/site";
import { trackClick } from "../lib/gtm";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center items-center gap-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="space-y-1 text-sm text-muted-foreground">
          <p className="text-foreground">
            <strong className="font-medium">
              Marketed by {BROKERAGE.name}
            </strong>{" "}
            — {BROKERAGE.relationship}
          </p>
          <p>{BROKERAGE.address}</p>
          <p>
            <a
              href={`tel:${BROKERAGE.phone}`}
              className="hover:underline"
              onClick={() => trackClick("Phone", "footer")}
            >
              {BROKERAGE.phoneDisplay}
            </a>{" "}
            ·{" "}
            <a
              href={`mailto:${BROKERAGE.email}`}
              className="hover:underline"
              onClick={() => trackClick("Email", "footer")}
            >
              {BROKERAGE.email}
            </a>
          </p>
          <p>
            RERA ORN: {BROKERAGE.reraOrn} · Advertising Permit (Trakheesi) No:{" "}
            {BROKERAGE.trakheesiPermit}
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sea Mirror. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
