// app/brewing-methods/page.tsx
import type { Metadata } from "next";
import BrewingMethodsPage from "@/components/pages/BrewingMethodsPage";

const SITE_URL = "https://aromabiji.co";

export const metadata: Metadata = {
  title: "Brewing Methods | Aroma Biji Coffee Guide",
  description:
    "Learn how to brew Aroma Biji coffee with French Press, Espresso, Coffee Dripper, Siphon, and Moka Pot. Simple ratios, grind size, temperature, and brew time—crafted for a refined cup.",
  alternates: {
    canonical: `${SITE_URL}/brewing-methods`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/brewing-methods`,
    siteName: "Aroma Biji",
    title: "Brewing Methods | Aroma Biji Coffee Guide",
    description:
      "A luxury brewing guide: ratios, grind size, temperature, and brew time for French Press, Espresso, Dripper, Siphon, and Moka Pot.",
    images: [
      {
        url: `${SITE_URL}/images/aroma-biji-product.webp`, // optional (create later)
        width: 1200,
        height: 630,
        alt: "Aroma Biji Brewing Methods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brewing Methods | Aroma Biji Coffee Guide",
    description:
      "Brew guide by Aroma Biji: French Press, Espresso, Dripper, Siphon, Moka Pot.",
    images: [`${SITE_URL}/images/aroma-biji-product.webp`],
  },
  keywords: [
    "Aroma Biji brewing guide",
    "Indonesian coffee brewing methods",
    "French press ratio",
    "espresso recipe",
    "coffee dripper recipe",
    "moka pot recipe",
    "siphon coffee recipe",
    "coffee temperature 91-96",
  ],
};

export default function BrewingMethods() {
  // JSON-LD: Breadcrumb + HowTo (lightweight + SEO friendly)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Brewing Methods",
            item: `${SITE_URL}/brewing-methods`,
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "French Press Coffee",
        description:
          "Aroma Biji French Press guide: medium coarse grind, 91–96°C, 3–5 minutes.",
        totalTime: "PT5M",
        supply: [{ "@type": "HowToSupply", name: "Coffee (35 g)" }, { "@type": "HowToSupply", name: "Water (500 ml)" }],
        step: [
          { "@type": "HowToStep", name: "Grind", text: "Use a medium coarse grind." },
          { "@type": "HowToStep", name: "Brew", text: "Add 35 g coffee to 500 ml water at 91–96°C. Steep 3–5 minutes." },
          { "@type": "HowToStep", name: "Press & Serve", text: "Press slowly and serve immediately." },
        ],
      },
      {
        "@type": "HowTo",
        name: "Espresso Machine",
        description: "Aroma Biji espresso guide: fine grind, 91–96°C, 20–30 seconds.",
        totalTime: "PT1M",
        supply: [
          { "@type": "HowToSupply", name: "Coffee (7–10 g)" },
          { "@type": "HowToSupply", name: "Yield (30–60 ml)" },
        ],
        step: [
          { "@type": "HowToStep", name: "Grind", text: "Use a fine grind suitable for espresso." },
          { "@type": "HowToStep", name: "Extract", text: "Extract 20–30 seconds at 91–96°C for 30–60 ml yield." },
        ],
      },
      {
        "@type": "HowTo",
        name: "Coffee Dripper (Pour Over)",
        description: "Aroma Biji dripper guide: fine coarse grind, 91–96°C, 2–3 minutes.",
        totalTime: "PT3M",
        supply: [{ "@type": "HowToSupply", name: "Coffee (30 g)" }, { "@type": "HowToSupply", name: "Water (500 ml)" }],
        step: [
          { "@type": "HowToStep", name: "Grind", text: "Use a fine coarse grind (adjust to taste)." },
          { "@type": "HowToStep", name: "Brew", text: "Pour 500 ml water at 91–96°C over 30 g coffee, total 2–3 minutes." },
        ],
      },
      {
        "@type": "HowTo",
        name: "Siphon / Vacuum Pot",
        description: "Aroma Biji siphon guide: medium fine grind, 91–96°C, 3–5 minutes.",
        totalTime: "PT5M",
        supply: [{ "@type": "HowToSupply", name: "Coffee (25 g)" }, { "@type": "HowToSupply", name: "Water (300 ml)" }],
        step: [
          { "@type": "HowToStep", name: "Grind", text: "Use a medium fine grind." },
          { "@type": "HowToStep", name: "Brew", text: "Brew with 300 ml water at 91–96°C for 3–5 minutes total." },
        ],
      },
      {
        "@type": "HowTo",
        name: "Moka Pot",
        description: "Aroma Biji moka pot guide: fine grind, 91–96°C, 2 minutes.",
        totalTime: "PT2M",
        supply: [{ "@type": "HowToSupply", name: "Coffee (6 g)" }, { "@type": "HowToSupply", name: "Water (240 ml)" }],
        step: [
          { "@type": "HowToStep", name: "Grind", text: "Use a fine grind (not powdery)." },
          { "@type": "HowToStep", name: "Brew", text: "Brew with 240 ml water; total brew time about 2 minutes." },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrewingMethodsPage />
    </>
  );
}
