import type { Metadata } from "next";
import WildLuwakCoffeePage from "@/components/pages/WildLuwakCoffeePage";

const SITE_URL = "https://aromabiji.co";

export const metadata: Metadata = {
  title: "Wild Luwak Coffee (Kopi Luwak) Indonesia | Aroma Biji",
  description: "Explore Aroma Biji Wild Luwak Coffee from Indonesia: refined aroma, smooth body, and a responsible approach. Available offline at Soekarno-Hatta International Airport & Plaza Bali, and worldwide orders via WhatsApp (delivery up to 30 days).",
  alternates: { canonical: `${SITE_URL}/wild-luwak-coffee` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/wild-luwak-coffee`,
    siteName: "Aroma Biji",
    title: "Wild Luwak Coffee (Kopi Luwak) Indonesia | Aroma Biji",
    description:
      "A complete guide to Wild Luwak Coffee: taste notes, authenticity tips, brewing, and how to order worldwide via WhatsApp.",
    images: [
      {
        url: `${SITE_URL}/images/og-wild-luwak-coffee.jpg`,
        width: 1200,
        height: 630,
        alt: "Aroma Biji Wild Luwak Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wild Luwak Coffee (Kopi Luwak) Indonesia | Aroma Biji",
    description: "Taste notes, authenticity, brewing tips, and worldwide ordering via WhatsApp.",
    images: [`${SITE_URL}/images/full-product.jpeg`],
  },
  keywords: [
    "Wild Luwak Coffee",
    "Luwak Coffee",
    "Luwak Coffee Indonesia",
    "Kopi Luwak",
    "Civet Coffee",
    "Buy Luwak Coffee",
    "Authentic Kopi Luwak",
    "Ethical Luwak Coffee",
    "Aroma Biji Wild Luwak",
  ],
};

export default function WildLuwakCoffee() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Wild Luwak Coffee",
            item: `${SITE_URL}/wild-luwak-coffee`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Wild Luwak Coffee (Kopi Luwak)?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Wild Luwak Coffee (Kopi Luwak) is an Indonesian coffee associated with a natural selection process in the wild before the beans are cleaned and roasted. Aroma Biji focuses on craft, flavor clarity, and responsible sourcing.",
            },
          },
          {
            "@type": "Question",
            name: "Do you ship Wild Luwak Coffee worldwide?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. We accept orders via WhatsApp and ship worldwide. International delivery can take up to 30 days depending on destination and customs clearance.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I buy Aroma Biji offline?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Aroma Biji is available offline at Soekarno-Hatta International Airport and Plaza Bali. For availability, contact us via WhatsApp.",
            },
          },
          {
            "@type": "Question",
            name: "How do I know if Kopi Luwak is authentic?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Look for transparent origin information, consistent packaging, and a seller that can explain sourcing and handling. If you need help choosing, contact Aroma Biji via WhatsApp for guidance.",
            },
          },
        ],
      },
      {
        "@type": "WebPage",
        name: "Wild Luwak Coffee (Kopi Luwak) Indonesia | Aroma Biji",
        url: `${SITE_URL}/wild-luwak-coffee`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WildLuwakCoffeePage />
    </>
  );
}
