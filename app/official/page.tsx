import type { Metadata } from "next";
import Script from "next/script";
import OfficialPage from "@/components/pages/OfficialPage";

export const metadata: Metadata = {
  title: "Official Aroma Biji Website | Luxury Indonesian Coffee",
  description:
    "Aroma Biji official website (aromabiji.co). Discover our luxury Indonesian coffee, heritage, products, and verified brand information.",
  keywords: [
    "Aroma Biji official",
    "AromaBiji official website",
    "aromabiji.co",
    "luxury Indonesian coffee",
    "official Aroma Biji site",
    "Aroma Biji SAYA Group",
  ],
  alternates: {
    canonical: "https://aromabiji.co/official",
  },
  openGraph: {
    type: "website",
    url: "https://aromabiji.co/official",
    title: "Official Aroma Biji Website | Luxury Indonesian Coffee",
    description:
      "Aroma Biji official website (aromabiji.co). Verified brand information, story, and products.",
    images: [
      {
        url: "https://aromabiji.co/images/aroma-biji-product.webp",
        width: 1200,
        height: 630,
        alt: "Aroma Biji — Luxury Indonesian Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroma Biji — Official Website",
    description:
      "Verified official website of Aroma Biji at aromabiji.co.",
    images: ["https://aromabiji.co/images/aroma-biji-product.webp"],
  },
};

export default function Official() {
  // ✅ Update these with real values. Avoid fake phone numbers for trust + SEO.
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aroma Biji",
    url: "https://aromabiji.co",
    logo: "https://aromabiji.co/images/aroma-biji-logo.png",
    sameAs: [
      "https://www.instagram.com/aromabiji",
      // Add only profiles that реально exist:
      // "https://www.tiktok.com/@aromabiji.id",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "SAYA Group",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+62-822-2187-1409",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Indonesian"],
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aroma Biji",
    url: "https://aromabiji.co",
  };

  // Optional: small FAQ schema for richer snippets (keep concise).
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is aromabiji.co the official Aroma Biji website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. aromabiji.co is the official and active domain for Aroma Biji under SAYA Group.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I buy Aroma Biji?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aroma Biji is available offline at selected locations and can be ordered worldwide via WhatsApp with delivery up to 30 days depending on destination and customs.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <OfficialPage />
    </>
  );
}
