"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { RECAPTCHA_SITE_KEY } from "../lib/site";

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
