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

  // Using the direct product image from our new flattened structure
  const bestImage = product.image;
  const ogImageAbs = bestImage?.startsWith("http") ? bestImage : `${SITE.url}${bestImage}`;

  const baseKeywords = [
    "Aroma Biji",
    "Indonesian chocolate coffee",
    "premium chocolate Indonesia",
    "single origin chocolate",
    "artisan dark chocolate",
    "buy Indonesian chocolate",
    "chocolate gifts",
  ];

  const productKeywords = [
    product.name,
    `${product.name} dark chocolate`,
    `${product.name} 55% cocoa`,
    product.origin,
    "specialty chocolate",
  ];

  const luwakKeywords = [
    "luwak Arabica chocolate",
    "wild luwak infused",
    "luxury Indonesian chocolate",
  ];

  const keywords = [...new Set([...baseKeywords, ...productKeywords, ...luwakKeywords])];

  return {
    metadataBase: base,
    title: `${product.name} Dark Chocolate`,
    description: product.description,
    keywords,
    alternates: { canonical: realPath },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title: `${product.name} Dark Chocolate`,
      description: product.description,
      url: realUrl,
      siteName: SITE.name,
      type: "website",
      images: [
        {
          url: ogImageAbs,
          width: 1200,
          height: 630,
          alt: `${product.name} Dark Chocolate by Aroma Biji`,
        },
      ],
      locale: "en_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Aroma Biji Chocolate`,
      description: product.description,
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
  const bestImage = product.image;

  // JSON-LD for Google Rich Snippets
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} 55% Dark Chocolate`,
    description: product.description,
    brand: { "@type": "Brand", name: "Aroma Biji" },
    category: "Chocolate",
    image: [`${SITE.url}${bestImage}`],
    url: pageUrl,
    countryOfOrigin: { "@type": "Country", name: "Indonesia" },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "IDR",
      price: product.price_idr, // Accessing price directly now
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