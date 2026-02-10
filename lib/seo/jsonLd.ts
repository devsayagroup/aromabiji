import { SITE } from "./site";
import type { Product } from "@/types/product";

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logo}`,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function productJsonLd(product: Product) {
  // If you don’t sell online yet, omit offers.
  // If you do sell online, include offers with URL.
  const minPrice = Math.min(...product.variants.map((v) => v.price_idr));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} Coffee`,
    description: product.description,
    brand: { "@type": "Brand", name: SITE.name },
    category: "Coffee",
    image: product.variants.map((v) => `${SITE.url}${v.image}`),
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: String(minPrice),
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/product/${product.id}`,
    },
  };
}

export function articleJsonLd({
  title,
  description,
  slug,
  image,
  datePublished,
  author = "Aroma Biji Editorial",
}: {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  author?: string;
}) {
  const url = `${SITE.url}/journal/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [`${SITE.url}${image}`],
    datePublished,
    author: { "@type": "Organization", name: author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` },
    },
    mainEntityOfPage: url,
  };
}
