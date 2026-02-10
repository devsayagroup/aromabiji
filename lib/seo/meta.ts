import type { Metadata } from "next";
import { SITE } from "./site";

export function buildMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string; // "/product/aceh-gayo"
  image?: string; // absolute or /public path
}): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? SITE.ogImage;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
