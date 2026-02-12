import type { Metadata } from "next";
import { SITE } from "@/lib/seo/site";
import { Questrial } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import LayoutClient from "./layout-client";
import { orgJsonLd } from "@/lib/seo/jsonLd";
import Script from "next/script";
import GoogleAnalytics from "./analytics/GoogleAnalytics";

const textFont = Questrial({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400"],
});

const styleFont = localFont({
  src: "../styles/TheSeasons.otf",
  variable: "--font-style",
});


const titleDefault =
  "Aroma Biji – Meet the Original Taste | Luxury Indonesian Coffee by SAYAGROUP";

const descriptionDefault =
  "Aroma Biji is luxury Indonesian coffee handcrafted with 40 years of expertise. Discover authentic single origins, ethical sourcing, and rare selections including Wild Luwak Coffee.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: titleDefault,
    template: "%s | Aroma Biji",
  },

  description: descriptionDefault,

  applicationName: SITE.name,

  alternates: {
    canonical: "/", // base canonical for homepage (page-level can override)
  },

  // Optional but useful
  category: "Coffee",
  creator: "Aroma Biji",
  publisher: "SAYAGROUP",

  // IMPORTANT: add proper icons (SEO tools love this)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: titleDefault,
    description: descriptionDefault,
    url: SITE.url,
    siteName: "Aroma Biji",
    locale: "en_US",
    type: "website",
    images: [
      {
        // Use a 1200x630 “hero” image, NOT a small logo
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Aroma Biji – Luxury Indonesian Coffee",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aroma Biji – Meet the Original Taste",
    description: descriptionDefault,
    images: ["/og/home.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    // extra directives commonly checked by tools
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // If you have Search Console verification, add it
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  // },

  // Helpful for global keywords (page-level should still override for specific targeting)
  keywords: [
    "Aroma Biji",
    "Indonesian coffee",
    "luxury coffee",
    "specialty coffee",
    "Wild Luwak Coffee",
    "Luwak Coffee Indonesia",
    "Kopi Luwak",
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  
  return (
    <html lang="en">
      <body className={`${textFont.variable} ${styleFont.variable} font-text bg-white`}>
      <Script
        id="org-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }}
      />
      {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}
      {/* <GoogleAnalytics gaId="G-LB5MBXKJCG" />  */}
      <GoogleAnalytics/>
      <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
