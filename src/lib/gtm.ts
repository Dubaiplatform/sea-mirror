"use client";

import { sendGTMEvent } from "@next/third-parties/google";

/**
 * Push a CTA click into the GTM dataLayer with a consistent shape:
 * { event: "cta_click", cta_label, cta_location, ...extra }
 */
export function trackClick(
  label: string,
  location: string,
  extra: Record<string, string> = {},
) {
  sendGTMEvent({
    event: "cta_click",
    cta_label: label,
    cta_location: location,
    ...extra,
  });
}
