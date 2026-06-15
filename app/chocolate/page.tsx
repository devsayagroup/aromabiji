import { Metadata } from 'next';
import AromaBijiChocolateClient from '@/components/pages/ChocolatePage';
import { chocolateProducts } from '@/lib/products-chocolate';
import { SITE } from '@/lib/seo/site';

// DYNAMIC METADATA & OPEN GRAPH (SEO & GEO) 
export const metadata: Metadata = {
  title: "Aroma Biji | Single-Origin Indonesian Dark Chocolate",
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
    canonical: `${SITE.url}/chocolate`,
  },
  openGraph: {
    title: "Aroma Biji | Premium Indonesian Dark Chocolate",
    description: "Discover 55% single-origin dark chocolate infused with wild Luwak Arabica. Crafted in Indonesia.",
    url: `${SITE.url}/chocolate`,
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
  const itemListElements = chocolateProducts.map((product, index) => {
    const mainRegion = product.origin.split(',')[0]; 
    return {
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Thing", 
        "@id": `${SITE.url}/chocolate/${product.slug}`,
        "url": `${SITE.url}/chocolate/${product.slug}`,
        "name": `${product.name} 55% Dark Chocolate`,
        "image": `${SITE.url}${product.seoImage || product.image}`,
        "description": `Single-origin ${mainRegion} dark chocolate from ${product.origin}. Infused with wild Luwak Arabica coffee. ${product.tagline}`
      }
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        "name": "Aroma Biji",
        "url": SITE.url,
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
        "itemListElement": itemListElements
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