import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import type { Product } from "@/types/product";
import ProductDetailPage from "@/components/pages/ProductDetailPage";
import { SITE } from "@/lib/seo/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = (products as Product[]).find((p) => p.id === id);
  const base = new URL(SITE.url);

  // FIX: Updated base paths to /coffee
  const pagePath = `/coffee/${id}`;
  const pageUrl = `${SITE.url}${pagePath}`;

  // IMPORTANT: don't index "not found" pages
  if (!product) {
    return {
      metadataBase: base,
      title: "Coffee Not Found | Aroma Biji",
      description: "Explore Aroma Biji premium Indonesian coffee collection.",
      alternates: { canonical: pagePath },
      robots: { index: false, follow: true },
      openGraph: {
        title: "Coffee Not Found | Aroma Biji",
        description: "Explore Aroma Biji premium Indonesian coffee collection.",
        url: pageUrl,
        siteName: SITE.name,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Coffee Not Found | Aroma Biji",
        description: "Explore Aroma Biji premium Indonesian coffee collection.",
      },
    };
  }

  // FIX: Updated real paths to /coffee
  const realPath = `/coffee/${product.id}`;
  const realUrl = `${SITE.url}${realPath}`;

  // Prefer packshot for OG
  const bestImage = product.variants?.[0]?.image ?? product.image;
  const ogImageAbs = bestImage.startsWith("http") ? bestImage : `${SITE.url}${bestImage}`;

  const baseKeywords = [
    "Aroma Biji",
    "Indonesian coffee",
    "premium Indonesian coffee",
    "specialty coffee Indonesia",
    "single origin coffee",
    "coffee beans Indonesia",
    "artisan coffee",
    "heritage roasting",
    "buy Indonesian coffee",
    "WhatsApp coffee order",
    "coffee gifts",
  ];

  const productKeywords = [
    product.name,
    `${product.name} coffee`,
    `${product.name} beans`,
    product.origin,
    "whole bean coffee",
    "ground coffee",
    "drip coffee sachet",
  ];

  const luwakKeywords = [
    "luwak coffee",
    "kopi luwak",
    "wild luwak coffee",
    "luwak coffee Indonesia",
    "civet coffee",
    "luxury Indonesian coffee",
  ];

  const keywords = [...new Set([...baseKeywords, ...productKeywords, ...luwakKeywords])];

  return {
    metadataBase: base,
    title: `${product.name} | Aroma Biji`,
    description: product.description,
    keywords,
    alternates: { canonical: realPath }, // Now points to /coffee/[id]
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title: `${product.name} | Aroma Biji`,
      description: product.description,
      url: realUrl,
      siteName: SITE.name,
      type: "website",
      images: [
        {
          url: ogImageAbs,
          width: 1200,
          height: 630,
          alt: `${product.name} by Aroma Biji`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Aroma Biji`,
      description: product.description,
      images: [ogImageAbs],
    },
  };
}

export default async function CoffeeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = (products as Product[]).find((p) => p.id === id);
  if (!product) return notFound();

  // FIX: Updated page URL to /coffee
  const pageUrl = `${SITE.url}/coffee/${product.id}`;
  const bestImage = product.variants?.[0]?.image ?? product.image;

  const minPrice =
    product.variants?.length
      ? Math.min(...product.variants.map((v) => v.price_idr))
      : undefined;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "Aroma Biji" },
    category: "Coffee",
    image: [`${SITE.url}${bestImage}`],
    url: pageUrl,
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "IDR",
      ...(minPrice ? { price: minPrice } : {}),
      availability: "https://schema.org/InStoreOnly",
      seller: { "@type": "Organization", name: "Aroma Biji" },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      // FIX: Position 2 is now "Coffee" instead of "Product"
      { "@type": "ListItem", position: 2, name: "Coffee", item: `${SITE.url}/coffee` },
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
      {/* 
        You can safely reuse your existing ProductDetailPage UI component here.
        Because we updated lib/products.ts to include `category: 'coffee'`, 
        the 'Add to Cart' inside this component will naturally work perfectly. 
      */}
      <ProductDetailPage product={product} allProducts={products as Product[]} />
    </>
  );
}