import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { SITE } from "@/lib/seo/site";

const url = `${SITE.url}/about`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "About Aroma Biji | Indonesia’s Luxury Artisan Coffee Brand",
  description: "Discover the heritage behind Aroma Biji. Crafted with 40+ years of coffee mastery, we preserve authentic Indonesian flavors through ethical sourcing and artisanal roasting.",
  alternates: {
    canonical: url,
  },
  keywords: [
    "about Aroma Biji",
    "Indonesian coffee heritage",
    "artisan coffee brand",
    "luxury coffee Indonesia",
    "ethical coffee farming",
    "specialty coffee story",
  ],
  openGraph: {
    title: "About Aroma Biji | Indonesia’s Luxury Artisan Coffee Brand",
    description:
      "Discover the heritage behind Aroma Biji. Crafted with 40+ years of coffee mastery, we preserve authentic Indonesian flavors through ethical sourcing and artisanal roasting.",
    url,
    siteName: SITE.name,
    type: "article",
    images: [
      {
        url: "/images/aroma-biji-product.webp", 
        width: 1200,
        height: 630,
        alt: "About Aroma Biji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aroma Biji | Indonesia’s Luxury Artisan Coffee Brand",
    description:
      "Discover the heritage behind Aroma Biji. Crafted with 40+ years of coffee mastery, we preserve authentic Indonesian flavors through ethical sourcing and artisanal roasting.",
    images: ["/images/aroma-biji-product.webp"],
  },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Aroma Biji",
    url,
    about: {
      "@type": "Brand",
      name: "Aroma Biji",
      url: SITE.url,
      slogan: "Meet the Original Taste",
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPage />
    </>
  );
}
