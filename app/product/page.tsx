import type { Metadata } from "next";
import ProductPage from "@/components/pages/ProductPage";
import { SITE } from "@/lib/seo/site";
import { products } from "@/lib/products";
import type { Product } from "@/types/product";

const url = `${SITE.url}/product`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Collection Aroma Biji | Premium Indonesian Coffee Beans",
  description:
    "Explore Aroma Biji’s premium coffee collection—single-origin Indonesian beans, artisan blends, and specialty coffee crafted with heritage roasting.",
  alternates: { canonical: url },
  keywords: [
    "Indonesian coffee beans",
    "premium coffee Indonesia",
    "wild luwak coffee",
    "single origin coffee",
    "artisan coffee blends",
    "specialty coffee Indonesia",
    "Aroma Biji products",
    "luxury Indonesian coffee",
  ],
  openGraph: {
    title: "Collection Aroma Biji | Premium Indonesian Coffee Beans",
    description:
      "Explore Aroma Biji’s premium coffee collection—single-origin Indonesian beans, artisan blends, and specialty coffee crafted with heritage roasting.",
    url,
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: "/images/aroma-biji-product.webp", 
        width: 1200,
        height: 630,
        alt: "Aroma Biji Coffee Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroma Biji Collection | Premium Indonesian Coffee Beans",
    description:
      "Explore Aroma Biji’s premium coffee collection—single-origin Indonesian beans, artisan blends, and specialty coffee crafted with heritage roasting.",
    images: ["/images/aroma-biji-product.webp"],
  },
};

export default function Product() {
  const items = (products as Product[]).map((p) => ({
    "@type": "Product",
    name: p.name,
    description: p.description,
    brand: { "@type": "Brand", name: "Aroma Biji" },
    url: `${SITE.url}/product/${p.id}`,
    image: p.variants?.[0]?.image
      ? `${SITE.url}${p.variants[0].image}`
      : `${SITE.url}${p.image}`,
    category: "Coffee",
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      // Use min variant price if available
      price: Math.min(...(p.variants?.map((v) => v.price_idr) ?? [0])),
      availability: "https://schema.org/InStoreOnly",
      url: `${SITE.url}/product/${p.id}`,
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Aroma Biji Collection",
    url,
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
    about: { "@type": "Brand", name: "Aroma Biji", url: SITE.url },
    mainEntity: items,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPage />
    </>
  );
}
