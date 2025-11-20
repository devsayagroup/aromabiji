import type { Metadata } from "next";
import "@/styles/globals.css";
import LayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: "Aroma Biji – Meet the Original Taste | Luxury Indonesian Coffee by SAYAGROUP",
  description:"Discover Aroma Biji — luxury Indonesian coffee handcrafted with 40 years of expertise. Meet the original taste of authentic, ethical, and rare coffee beans.",
  openGraph: {
    title: "Aroma Biji – Meet the Original Taste | Luxury Indonesian Coffee by SAYAGROUP",
    description:"Discover Aroma Biji — luxury Indonesian coffee handcrafted with 40 years of expertise. Meet the original taste of authentic, ethical, and rare coffee beans.",
    url: "https://aromabiji.co",
    siteName: "Aroma Biji",
    images: [
      {
        url: "/images/foto-product-full.jpg",
        width: 500,
        height: 500,
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
      <LayoutClient>{children}</LayoutClient>
    </html>
  );
}
