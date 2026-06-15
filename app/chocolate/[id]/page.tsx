import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { chocolateProducts } from "@/lib/products-chocolate";
import ChocolateDetailClient from "@/components/pages/ChocolateDetailPage"; // Ensure this matches your actual import path
import { SITE } from "@/lib/seo/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = chocolateProducts.find((p) => p.id === id);
  const base = new URL(SITE.url);

  const pagePath = `/chocolate/${id}`;
  const pageUrl = `${SITE.url}${pagePath}`;

  // IMPORTANT: don't index "not found" pages
  if (!product) {
    return {
      metadataBase: base,
      title: "Chocolate Not Found | Aroma Biji",
      description: "Explore Aroma Biji premium Indonesian dark chocolate collection.",
      alternates: { canonical: pagePath },
      robots: { index: false, follow: true },
      openGraph: {
        title: "Chocolate Not Found | Aroma Biji",
        description: "Explore Aroma Biji premium Indonesian dark chocolate collection.",
        url: pageUrl,
        siteName: SITE.name,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Chocolate Not Found | Aroma Biji",
        description: "Explore Aroma Biji premium Indonesian dark chocolate collection.",
      },
    };
  }

  const realPath = `/chocolate/${product.id}`;
  const realUrl = `${SITE.url}${realPath}`;

  // ─── USING THE NEW SEO WEBP IMAGE ───────────────────────────────────────
  const bestImage = product.seoImage || product.image;
  const ogImageAbs = bestImage?.startsWith("http") ? bestImage : `${SITE.url}${bestImage}`;

  // ─── GEO & SEO DYNAMIC DESCRIPTIONS ─────────────────────────────────────
  // Extracting just the island (e.g., "Java" from "Java, West Java") for cleaner SEO titles
  const mainRegion = product.origin.split(',')[0]; 
  
  // Formatted strictly for AI Generative Engines to easily parse facts
  const geoDescription = `Aroma Biji ${product.name} is a premium 55% single-origin dark chocolate from ${product.origin}. Infused with wild Indonesian Luwak Arabica coffee. ${product.description}`;

  const baseKeywords = [
    "Aroma Biji",
    "Indonesian Luwak coffee chocolate", 
    "Wild Arabica Luwak infused chocolate", 
    "Premium Indonesian dark chocolate",
    "Single origin chocolate Indonesia",
    "Artisan dark chocolate 55%",
    "Luxury chocolate gifts",
  ];

  const productKeywords = [
    product.name,
    `${product.name} dark chocolate`,
    `${product.name} chocolate coffee`,
    `${product.origin} dark chocolate`,
    `Single origin ${mainRegion} chocolate`,
    ...product.notes // Injects dynamic tasting notes (e.g., "Cedar", "Wild Berry") into keywords
  ];

  const keywords = [...new Set([...baseKeywords, ...productKeywords])];

  return {
    metadataBase: base,
    title: `${product.name} 55% Dark Chocolate | Single-Origin ${mainRegion} | Aroma Biji`,
    description: geoDescription,
    keywords,
    alternates: { canonical: realPath },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title: `${product.name} 55% Dark Chocolate | Aroma Biji`,
      description: geoDescription,
      url: realUrl,
      siteName: SITE.name,
      type: "website",
      images: [
        {
          url: ogImageAbs,
          width: 1200,
          height: 1200, // Typically WebP product shots are square, adjust if yours are 1200x630
          alt: `${product.name} Single-Origin Dark Chocolate by Aroma Biji`,
        },
      ],
      locale: "en_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} Dark Chocolate | Aroma Biji`,
      description: geoDescription,
      images: [ogImageAbs],
    },
  };
}

export default async function ChocolateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = chocolateProducts.find((p) => p.id === id);
  if (!product) return notFound();

  const pageUrl = `${SITE.url}/chocolate/${product.id}`;
  
  // Use the dedicated WebP image for Google Rich Results
  const bestImage = product.seoImage || product.image;
  
  // Rebuild the geoDescription for the JSON-LD to ensure consistency
  const geoDescription = `Aroma Biji ${product.name} is a premium 55% single-origin dark chocolate from ${product.origin}. Infused with wild Indonesian Luwak Arabica coffee. ${product.description}`;

  // ─── GOOGLE RICH RESULTS & AI ENTITY DATA (JSON-LD) ───────────────────────
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} 55% Single-Origin Dark Chocolate`,
    description: geoDescription,
    brand: { "@type": "Brand", name: "Aroma Biji" },
    category: "Chocolate",
    material: "55% Dark Cacao, Wild Luwak Arabica Coffee", // Crucial for GEO AI parsing
    image: [`${SITE.url}${bestImage}`], // Feeds the .webp to Google Images/Shopping
    url: pageUrl,
    countryOfOrigin: { "@type": "Country", "name": "Indonesia" },
    // Explicitly define the tasting notes and origin for search engines
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Tasting Notes",
        value: product.notes.join(", ")
      },
      {
        "@type": "PropertyValue",
        name: "Origin Terroir",
        value: product.origin
      }
    ],
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "IDR",
      price: product.price_idr,
      availability: "https://schema.org/InStoreOnly",
      seller: { "@type": "Organization", name: "Aroma Biji" },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Chocolate Archive", item: `${SITE.url}/chocolate` },
      { "@type": "ListItem", position: 3, name: product.name, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ChocolateDetailClient product={product} allProducts={chocolateProducts} />
    </>
  );
}