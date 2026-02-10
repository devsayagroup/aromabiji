import type { Metadata } from "next";
import { SITE } from "@/lib/seo/site";
import { Questrial } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import LayoutClient from "./layout-client";
import { orgJsonLd } from "@/lib/seo/jsonLd";
import Script from "next/script";

const textFont = Questrial({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400"],
});

const styleFont = localFont({
  src: "../styles/TheSeasons.otf",
  variable: "--font-style",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Aroma Biji – Meet the Original Taste | Luxury Indonesian Coffee by SAYAGROUP",
  description:"Aroma Biji is luxury Indonesian coffee handcrafted with 40 years of expertise. Meet the original taste of authentic, ethical, and rare coffee beans.",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aroma Biji – Meet the Original Taste | Luxury Indonesian Coffee by SAYAGROUP",
    description:"Aroma Biji is luxury Indonesian coffee handcrafted with 40 years of expertise. Meet the original taste of authentic, ethical, and rare coffee beans.",
    url: "https://aromabiji.co",
    siteName: "Aroma Biji",
    images: [
      {
        url: "/images/logo-aroma-gold.webp",
        width: 500,
        height: 500,
        alt: "Aroma Biji",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroma Biji – Meet the Original Taste",
    description:"Aroma Biji is luxury Indonesian coffee handcrafted with 40 years of expertise. Meet the original taste of authentic, ethical, and rare coffee beans.",
    images: ["/images/foto-product-full.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${textFont.variable} ${styleFont.variable} font-text bg-white `}>
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }}
      />
      <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
