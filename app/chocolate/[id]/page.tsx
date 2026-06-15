import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { chocolateProducts } from "@/lib/products-chocolate";
import ChocolateDetailClient from "@/components/pages/ChocolateDetailPage";
import { SITE } from "@/lib/seo/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = chocolateProducts.find((p) => p.id === id || p.slug === id);
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

  const realPath = `/chocolate/${product.slug}`;
  const realUrl = `${SITE.url}${realPath}`;
  
  // ─── GEO ALIGNMENT: USE THE DEDICATED WEBP IMAGE ────────────────────────
  const bestImage = product.seoImage || product.image;
  const ogImageAbs = bestImage?.startsWith("http") ? bestImage : `${SITE.url}${bestImage}`;

  const mainRegion = product.origin.split(',')[0]; 
  const geoDescription = `Aroma Biji ${product.name} is a premium 55% single-origin dark chocolate from ${product.origin}. Infused with wild Indonesian Luwak Arabica coffee. ${product.description}`;

  const baseKeywords = [
    "Aroma Biji",
    "Indonesian Luwak coffee chocolate", 
    "Wild Arabica Luwak infused chocolate", 
    "Premium Indonesian dark chocolate",
    "Single origin chocolate Indonesia",
    "Artisan dark chocolate 55%",
  ];

  const productKeywords = [
    product.name,
    `${product.name} dark chocolate`,
    `${product.origin} dark chocolate`,
    `Single origin ${mainRegion} chocolate`,
    ...product.notes 
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
          height: 1200, 
          alt: `${product.name} Single-Origin Dark Chocolate by Aroma Biji` 
        }
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
  const product = chocolateProducts.find((p) => p.id === id || p.slug === id);
  if (!product) return notFound();

  const pageUrl = `${SITE.url}/chocolate/${product.slug}`;
  const bestImage = product.seoImage || product.image;
  const geoDescription = `Aroma Biji ${product.name} is a premium 55% single-origin dark chocolate from ${product.origin}. Infused with wild Indonesian Luwak Arabica coffee. ${product.description}`;

  // ─── FIX: CHANGED @type FROM 'Product' TO 'Thing' TO BYPASS GSC STRICT RULES 
  const itemJsonLd = {
    "@context": "https://schema.org",
    "@type": "Thing", // This specifically removes the requirement for prices and reviews
    "name": `${product.name} 55% Single-Origin Dark Chocolate`,
    "description": geoDescription,
    "image": [`${SITE.url}${bestImage}`],
    "url": pageUrl,
    // Custom properties so AI bots (GEO) still get the tasting notes and terroir
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Tasting Notes",
        "value": product.notes.join(", ")
      },
      {
        "@type": "PropertyValue",
        "name": "Origin Terroir",
        "value": product.origin
      }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ChocolateDetailClient product={product} allProducts={chocolateProducts} />
    </>
  );
}