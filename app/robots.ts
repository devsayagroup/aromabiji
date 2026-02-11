import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cart"], // adjust if needed
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
