import { Metadata } from 'next';
import AromaBijiChocolateClient from '@/components/pages/ChocolatePage';

// ─── 1. DYNAMIC METADATA & OPEN GRAPH (SEO & GEO) ─────────────────────────────
export const metadata: Metadata = {
  title: "Aroma Biji Dark Chocolate | Single-Origin Indonesian",
  description: "Experience the uncompromising depth of Indonesia's rarest specialty chocolate. 55% single-origin dark chocolate infused with wild Luwak Arabica from Sumatra, Java, and Sulawesi.",
  keywords: [
    "Aroma Biji dark chocolate",
    "Indonesian dark chocolate",
    "Single-origin chocolate",
    "Wild Luwak Arabica",
    "Sumatra coffee chocolate",
    "Java Preanger chocolate",
    "Luxury chocolate Indonesia",
    "Specialty coffee infused chocolate"
  ],
  alternates: {
    canonical: 'https://www.aromabiji.com/chocolate',
  },
  openGraph: {
    title: "Aroma Biji Dark Chocolate",
    description: "Experience the uncompromising depth of Indonesia's rarest specialty chocolate. 55% single-origin dark chocolate infused with wild Luwak Arabica.",
    url: "https://www.aromabiji.com/chocolate",
    siteName: "Aroma Biji",
    images: [
      {
        url: "/images/og-chocolate-archive.jpg", 
        width: 1200,
        height: 630,
        alt: "Aroma Biji Dark Chocolate Collection featuring Indonesian Luwak Arabica",
      },
    ],
    locale: "en_ID", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroma Biji Dark Chocolate",
    description: "Single-origin dark chocolate infused with wild Luwak Arabica. Crafted in Indonesia without compromise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ChocolatePage() {
  // ─── 2. GOOGLE RICH RESULTS (JSON-LD) ───────────────────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.aromabiji.com/#organization",
        "name": "Aroma Biji",
        "url": "https://www.aromabiji.com",
        "description": "Premium Indonesian specialty coffee and luxury dark chocolate purveyor, sourcing wild Luwak Arabica from remote highland terroirs.",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "ID"
          }
        }
      },
      {
        "@type": "ItemList",
        "name": "Aroma Biji Dark Chocolate Collection",
        "description": "A collection of 55% dark chocolate bars sourced from Indonesian highland Luwak Arabica.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Product",
              "name": "Alur Badak 55% Dark Chocolate",
              "image": "https://www.aromabiji.com/products/3d-alurbadak.png",
              "description": "Single-origin 55% dark chocolate from the Aceh Highlands, Sumatra. Complex wild Luwak fermentation with earthy and dark fruit notes.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "countryOfOrigin": { "@type": "Country", "name": "Indonesia" }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Product",
              "name": "Java Preanger 55% Dark Chocolate",
              "image": "https://www.aromabiji.com/products/3d-javapreanger.png",
              "description": "Single-origin 55% dark chocolate from the Priangan Plateau, Java. Silky and fragrant with caramel and warm spice notes.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "countryOfOrigin": { "@type": "Country", "name": "Indonesia" }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Product",
              "name": "Red Bourbon 55% Dark Chocolate",
              "image": "https://www.aromabiji.com/products/3d-redbourbon.png",
              "description": "Single-origin 55% dark chocolate from the Kerinci Valley, Sumatra. A rare varietal with red cherry intensity and a cedar smoke finish.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "countryOfOrigin": { "@type": "Country", "name": "Indonesia" }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Product",
              "name": "Toraja 55% Dark Chocolate",
              "image": "https://www.aromabiji.com/products/3d-toraja.png",
              "description": "Single-origin 55% dark chocolate from Tana Toraja, Sulawesi. Deep, ancient profile with bitter cocoa and wet stone notes.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "countryOfOrigin": { "@type": "Country", "name": "Indonesia" }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Product",
              "name": "Aceh Gayo 55% Dark Chocolate",
              "image": "https://www.aromabiji.com/products/3d-acehgayo.png",
              "description": "Single-origin 55% dark chocolate from the Gayo Mountains, Sumatra. Bone-dry clean with a honeyed floral lift.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "countryOfOrigin": { "@type": "Country", "name": "Indonesia" }
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Product",
              "name": "Lintong Nihuta 55% Dark Chocolate",
              "image": "https://www.aromabiji.com/products/3d-lintongnihuta.png",
              "description": "Single-origin 55% dark chocolate from the Lake Toba Rim, Sumatra. Channels deep-earth minerals and wild berries.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "countryOfOrigin": { "@type": "Country", "name": "Indonesia" }
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "Product",
              "name": "Mandailing 55% Dark Chocolate",
              "image": "https://www.aromabiji.com/products/3d-mandailing.png",
              "description": "Single-origin 55% dark chocolate from the Bukit Barisan mountains, Sumatra. Full-bodied with deep cocoa and exotic sweet spice.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "countryOfOrigin": { "@type": "Country", "name": "Indonesia" }
            }
          }
        ]
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