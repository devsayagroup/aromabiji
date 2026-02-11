import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo/site";
import journals from "@/lib/journals.json";
import { products } from "@/lib/products";
import type { Product } from "@/types/product";

type Journal = { slug: string; date: string };

export default function sitemap(): MetadataRoute.Sitemap {
    const productsData = products as Product[];
    const posts = journals as Journal[];

    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${SITE.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },

        { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE.url}/story`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

        { url: `${SITE.url}/product`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

        // SEO landing
        { url: `${SITE.url}/wild-luwak-coffee`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

        { url: `${SITE.url}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

        { url: `${SITE.url}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${SITE.url}/brewing-methods`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${SITE.url}/official`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

        { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
        { url: `${SITE.url}/cart`, lastModified: now, changeFrequency: "weekly", priority: 0.3 },
    ];

    const productRoutes: MetadataRoute.Sitemap = productsData.map((p) => ({
        url: `${SITE.url}/product/${p.id}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const journalRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
        url: `${SITE.url}/journal/${p.slug}`,
        lastModified: new Date(p.date),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...productRoutes, ...journalRoutes];
}
