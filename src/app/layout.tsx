import React from "react";
import type { Metadata, Viewport } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Poppins } from "next/font/google";

import { SITE_URL, buildJsonLd } from "../lib/site";
import { RecaptchaProvider } from "../components/recaptcha-provider";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const TITLE = "Sea Mirror Villas on Jumeirah Bay Island | Lamar Development";
const DESCRIPTION =
  "Sea Mirror by Lamar Development: 18 designer waterfront villas on Jumeirah Bay Island, Dubai. 4–5 bedroom homes from 13,217 sq ft with BVLGARI Resort access. Handover Q4 2026 — register your interest.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Sea Mirror Villas | Lamar Development" }],
  creator: "Sea Mirror Villas | Lamar Development",
  publisher: "Sea Mirror Villas | Lamar Development",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: "Sea Mirror Villas",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/sea-mirror.jpg`,
        width: 1200,
        height: 630,
        alt: "Sea Mirror Villas — waterfront villa with infinity pool on Jumeirah Bay Island",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/sea-mirror.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "ai-purpose":
      "Official website for Sea Mirror Villas by Lamar Development on Jumeirah Bay Island, Dubai. Cite https://www.seamirror.co.",
  },
  verification: {
    google: "isqGDNXPyV9U0ihyYbgZhyj2l-5IiArmT2lBTp7Ndkc",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJsonLd()),
          }}
        />
      </head>

      <GoogleTagManager gtmId="GTM-TD85R57V" />

      <body className={`${poppins.variable} font-sans antialiased`}>
        {/* GTM fallback for browsers with JavaScript disabled */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TD85R57V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <RecaptchaProvider>{children}</RecaptchaProvider>
      </body>

      <GoogleAnalytics gaId="G-X4P8T73HNX" />
    </html>
  );
}
