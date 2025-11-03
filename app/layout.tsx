import type { Metadata } from "next";
import "@/styles/globals.css";
import LayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: "Aroma Biji – Meet the Original Taste | Luxury Indonesian Coffee by SAYAGROUP",
  description:"Discover Aroma Biji — luxury Indonesian coffee handcrafted with 40 years of expertise. Meet the original taste of authentic, ethical, and rare coffee beans.",
  openGraph: {
    title: "Aroma Biji – Meet the Original Taste | Luxury Indonesian Coffee by SAYAGROUP",
    description:"Discover Aroma Biji — luxury Indonesian coffee handcrafted with 40 years of expertise. Meet the original taste of authentic, ethical, and rare coffee beans.",
    url: "https://aromabiji.com",
    siteName: "Aroma Biji",
    images: [
      {
        url: "/logo/AromaBij-WildLuwak.png",
        width: 1200,
        height: 630,
        alt: "Aroma Biji",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroma Biji – Meet the Original Taste",
    description:"Discover Aroma Biji — luxury Indonesian coffee handcrafted with 40 years of expertise. Meet the original taste of authentic, ethical, and rare coffee beans.",
    images: ["/logo/AromaBij-WildLuwak.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LayoutClient>{children}</LayoutClient>
    </html>
  );
}
