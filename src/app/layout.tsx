import React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sea Mirror Villa | Lamar Development",
  description:
    "Sea Mirror in Jumeirah Bay Island by Lamar Development, Dubai is a project that offers 4, and 5-bedrooms penthouses with modern interiors & amenities. Contact us to get more info",
  keywords: [
    "Sea Mirror Villa",
    "Sea Mirror in Jumeirah",
    "Lamar Development",
    "Dubai project",
    "Bay Island",
    "5-bedroom",
    "4-bedroom",
    "luxury accommodation",
    "wellness retreat",
  ],
  authors: [{ name: "Sea Mirror Villa | Lamar Development" }],
  creator: "Sea Mirror Villa | Lamar Development",
  publisher: "Sea Mirror Villa | Lamar Development",
  alternates: { canonical: "https://seamirror.co/" },
  openGraph: {
    title: "Sea Mirror Villa | Lamar Development",
    description:
      "Sea Mirror in Jumeirah Bay Island by Lamar Development, Dubai is a project that offers 4, and 5-bedrooms penthouses with modern interiors & amenities. Contact us to get more info",
    url: "",
    siteName: "Sea Mirror Villa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://seamirror.co/sea-mirror.jpg",
        width: 1200,
        height: 630,
        alt: "Sea Mirror Villa | Lamar Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sea Mirror Villa | Lamar Development",
    description:
      "Sea Mirror in Jumeirah Bay Island by Lamar Development, Dubai is a project that offers 4, and 5-bedrooms penthouses with modern interiors & amenities. Contact us to get more info",
    images: ["https://seamirror.co/sea-mirror.jpg"],
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
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T3QLSVCJFN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T3QLSVCJFN', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
      </head>

      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
