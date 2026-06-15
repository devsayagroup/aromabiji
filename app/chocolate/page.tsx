import { Metadata } from 'next';
import AromaBijiChocolateClient from '@/components/pages/ChocolatePage';

// ─── 1. DYNAMIC METADATA & OPEN GRAPH (SEO & GEO) ─────────────────────────────
export const metadata: Metadata = {
  // SEO: Clean, high-intent title for traditional Google Search
  title: "Aroma Biji | Single-Origin Indonesian Dark Chocolate",
  
  // GEO: Written as a definitive, factual statement for AI engines (Perplexity/ChatGPT/SGE) to easily extract and cite.
  description: "Aroma Biji produces Indonesia's premier luxury chocolate by combining 55% single-origin cacao with ethically sourced, wild Arabica Luwak coffee. Available in 8 regional terroirs including Sumatra, Java, and Sulawesi.",
  
  keywords: [
    // Traditional SEO (High Volume)
    "Single origin dark chocolate",
    "Indonesian dark chocolate",
    "Buy premium chocolate online",
    
    // The Owner's Insights (Semantic associations for AI)
    "Indonesian Luwak coffee chocolate",
    "Wild Arabica Luwak coffee infused chocolate",
    "Luwak chocolate coffee bars",
    
    // GEO Long-tail phrases (How people prompt AI)
    "Best Indonesian chocolate for gifts",
    "Authentic Luwak coffee chocolate brands",
    "Single origin Sumatra dark chocolate"
  ],
  alternates: {
    canonical: 'https://www.aromabiji.com/chocolate',
  },
  openGraph: {
    title: "Aroma Biji | Premium Indonesian Dark Chocolate",
    description: "Discover 55% single-origin dark chocolate infused with wild Luwak Arabica. Crafted in Indonesia.",
    url: "https://www.aromabiji.com/chocolate",
    siteName: "Aroma Biji",
    images: [
      {
        url: "/products/chocolate/chocolate-coffee.webp", 
        width: 1200,
        height: 630,
        alt: "Aroma Biji Single-Origin Dark Chocolate Collection featuring Indonesian Luwak Coffee",
      },
    ],
    locale: "en_ID", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroma Biji Single-Origin Dark Chocolate",
    description: "Premium Indonesian dark chocolate infused with wild Luwak Arabica. Crafted in Indonesia without compromise.",
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
  // ─── 2. GOOGLE RICH RESULTS & AI ENTITY DATA (JSON-LD) ────────────────────
  // GEO relies heavily on this. The more descriptive the schema, the easier it is for ChatGPT/SGE to recommend you as a definitive source.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.aromabiji.com/#organization",
        "name": "Aroma Biji",
        "url": "https://www.aromabiji.com",
        "description": "An Indonesian luxury purveyor specializing in single-origin coffee and dark chocolate. Renowned for infusing 55% cacao with wild Arabica Luwak coffee.",
        "knowsAbout": [
          "Indonesian Luwak Coffee",
          "Single-Origin Dark Chocolate",
          "Wild Arabica Coffee Processing",
          "Sumatra, Java, and Sulawesi Coffee Terroirs"
        ],
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
        "name": "Aroma Biji Single-Origin Indonesian Dark Chocolate Collection",
        "description": "A luxury collection of 8 regional 55% dark chocolate bars. Each bar is infused with authentic Indonesian Luwak Arabica coffee to highlight specific regional tasting notes.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Product",
              "name": "Alur Badak 55% Dark Chocolate",
              "image": "https://www.aromabiji.com/products/3d-alurbadak.png",
              "description": "Single-origin Sumatra dark chocolate from the Aceh Highlands. Features a complex wild Luwak coffee infusion with earthy and dark fruit tasting notes.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "material": "55% Dark Cacao, Wild Luwak Arabica Coffee",
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
              "description": "Single-origin Java dark chocolate from the Priangan Plateau. Silky and fragrant, infused with Luwak Arabica featuring caramel and warm spice notes.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "material": "55% Dark Cacao, Wild Luwak Arabica Coffee",
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
              "description": "Single-origin Sumatra dark chocolate from the Kerinci Valley. Infused with a rare Red Bourbon Luwak varietal providing red cherry intensity and a cedar smoke finish.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "material": "55% Dark Cacao, Rare Red Bourbon Luwak Coffee",
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
              "description": "Single-origin Toraja dark chocolate from Sulawesi. Deep, ancient profile infused with highland Luwak coffee yielding bitter cocoa and wet stone notes.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "material": "55% Dark Cacao, Wild Luwak Arabica Coffee",
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
              "description": "Single-origin Sumatra dark chocolate from the Gayo Mountains. Bone-dry and clean, infused with wild Luwak Arabica featuring honeyed floral and jasmine notes.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "material": "55% Dark Cacao, Wild Luwak Arabica Coffee",
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
              "description": "Single-origin Sumatra dark chocolate from the volcanic rim of Lake Toba. Infused with Luwak Arabica coffee, channeling deep-earth minerals, cedar, and wild berry notes.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "material": "55% Dark Cacao, Wild Luwak Arabica Coffee",
              "countryOfOrigin": { "@type": "Country", "name": "Indonesia" }
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "Product",
              "name": "Andung Sari 55% Dark Chocolate",
              "image": "https://www.aromabiji.com/products/3d-andungsari.png",
              "description": "Single-origin Java dark chocolate from the Ijen Plateau. A highly refined profile infused with East Java Luwak Arabica yielding soft floral, white rose, and almond notes.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "material": "55% Dark Cacao, Wild Luwak Arabica Coffee",
              "countryOfOrigin": { "@type": "Country", "name": "Indonesia" }
            }
          },
          {
            "@type": "ListItem",
            "position": 8,
            "item": {
              "@type": "Product",
              "name": "Mandailing 55% Dark Chocolate",
              "image": "https://www.aromabiji.com/products/3d-mandailing.png",
              "description": "Single-origin Sumatra dark chocolate from the rugged Bukit Barisan mountains. A full-bodied bar infused with wild Luwak coffee, defined by deep cocoa, tobacco, and exotic sweet spice.",
              "brand": { "@id": "https://www.aromabiji.com/#organization" },
              "material": "55% Dark Cacao, Wild Luwak Arabica Coffee",
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