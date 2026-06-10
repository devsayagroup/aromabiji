import { Metadata } from 'next';
import AromaBijiChocolateClient from '@/components/pages/DarkChocolate';

// 1. DYNAMIC METADATA & OPEN GRAPH
export const metadata: Metadata = {
  title: "The Archive Collection | Aroma Biji Chocolate",
  description: "Experience the uncompromising depth of Indonesia's rarest specialty chocolate. Single-origin dark chocolate infused with wild Luwak Arabica.",
  openGraph: {
    title: "The Archive Collection | Aroma Biji Chocolate",
    description: "Experience the uncompromising depth of Indonesia's rarest specialty chocolate. Single-origin dark chocolate infused with wild Luwak Arabica.",
    url: "https://www.aromabiji.com/chocolate",
    siteName: "Aroma Biji",
    images: [
      {
        url: "/images/og-chocolate-archive.jpg", 
        width: 1200,
        height: 630,
        alt: "Aroma Biji Dark Chocolate Collection",
      },
    ],
    locale: "en_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Archive Collection | Aroma Biji",
    description: "Single-origin dark chocolate infused with wild Luwak Arabica. Crafted without compromise.",
  },
};

export default function ChocolatePage() {
  // 2. GOOGLE RICH RESULTS (JSON-LD)
  // Maps all 6 single-origin variants for Google Merchant Center and Search SEO.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Aroma Biji Chocolate Archive",
    "description": "A limited collection of 55% dark chocolate bars sourced from Indonesian highland Luwak Arabica.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Alur Badak 55% Dark Chocolate",
          "description": "From the untamed forests of Aceh, Alur Badak carries the ancient flavour of wild Luwak fermentation.",
          "brand": { "@type": "Brand", "name": "Aroma Biji" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Java Preanger 55% Dark Chocolate",
          "description": "The Priangan Plateau produces a Luwak Arabica unlike any other — silky and fragrant, with a sweetness that lingers.",
          "brand": { "@type": "Brand", "name": "Aroma Biji" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Red Bourbon 55% Dark Chocolate",
          "description": "A Sumatra varietal from Kerinci Valley that burns with red fruit intensity and a smoky finish.",
          "brand": { "@type": "Brand", "name": "Aroma Biji" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Toraja 55% Dark Chocolate",
          "description": "Born in the sacred highlands of Tana Toraja, Sulawesi. Deep, ancient, and unmistakably Indonesian.",
          "brand": { "@type": "Brand", "name": "Aroma Biji" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Aceh Gayo 55% Dark Chocolate",
          "description": "The rarest expression of highland terroir from the Gayo Mountains, bone-dry clean with a honeyed floral finish.",
          "brand": { "@type": "Brand", "name": "Aroma Biji" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Product",
          "name": "Lintong Nihuta 55% Dark Chocolate",
          "description": "From the volcanic rim of Lake Toba, channeling deep-earth minerals and wild berries.",
          "brand": { "@type": "Brand", "name": "Aroma Biji" }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AromaBijiChocolateClient />
    </>
  );
}