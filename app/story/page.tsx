import type { Metadata } from "next";
import StoryPage from "@/components/pages/StoryPage";
import { SITE } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Story Aroma Biji | From Indonesian Farms to Luxury Coffee Experience",
  description:
    "Follow the journey of Aroma Biji—from Indonesian coffee farms to a luxury artisanal brand. Learn about our ethical sourcing, roasting philosophy, and the people behind the craft.",
  keywords: [
    "Aroma Biji",
    "Aroma Biji story",
    "Indonesian coffee story",
    "Wild Luwak Coffee",
    "coffee origin journey",
    "ethical coffee Indonesia",
    "Indonesian coffee farms",
    "coffee roasting philosophy",
    "specialty coffee story",
    "luxury Indonesian coffee",
  ],
  alternates: { canonical: "/story" },
  openGraph: {
    title: "Story Aroma Biji | From Indonesian Farms to Luxury Coffee Experience",
    description:
      "Follow the journey of Aroma Biji—from Indonesian coffee farms to a luxury artisanal brand. Learn about our ethical sourcing, roasting philosophy, and the people behind the craft.",
    url: `${SITE.url}/story`,
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/aroma-biji-product.webp`,
        width: 1200,
        height: 630,
        alt: "Aroma Biji Story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroma Biji Story | From Indonesian Farms to Luxury Coffee Experience",
    description:
      "Follow the journey of Aroma Biji—from Indonesian coffee farms to a luxury artisanal brand.",
    images: [`${SITE.url}/images/aroma-biji-product.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function Story() {
  return <StoryPage />;
}
