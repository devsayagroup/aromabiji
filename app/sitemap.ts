import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo/site";
import journals from "@/lib/journals.json";
import { products } from "@/lib/products";
import type { Product } from "@/types/product";

type Journal = { slug: string; date: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const productsData = products as Product[];
  const posts = journals as Journal[];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/story`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/product`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/journal`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/contact`, changeFrequency: "yearly", priority: 0.4 },
  ];

  const productRoutes: MetadataRoute.Sitemap = productsData.map((p) => ({
    url: `${SITE.url}/product/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const journalRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE.url}/journal/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...journalRoutes];
}
