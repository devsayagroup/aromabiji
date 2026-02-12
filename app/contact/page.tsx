// import type { Metadata } from "next";
// import ContactPage from "@/components/pages/ContactPage";

// const SITE_URL = "https://aromabiji.co";
// const PAGE_URL = `${SITE_URL}/contact`;
// const OG_IMAGE = `${SITE_URL}/logo/logo-aroma-gold.webp`; // make sure you have this (or change)

// export async function generateMetadata(): Promise<Metadata> {
//   const title = "Contact Aroma Biji | Order via WhatsApp • Worldwide Shipping";
//   const description =
//     "Order Aroma Biji coffee via WhatsApp, or visit us exclusively at Soekarno-Hatta International Airport and Plaza Bali. Worldwide shipping available (up to 30 days depending on destination and customs).";

//   return {
//     title,
//     description,
//     alternates: { canonical: PAGE_URL },
//     openGraph: {
//       type: "website",
//       url: PAGE_URL,
//       title,
//       description,
//       siteName: "Aroma Biji",
//       images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Contact Aroma Biji" }],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [OG_IMAGE],
//     },
//     keywords: [
//       "Aroma Biji contact",
//       "order Aroma Biji",
//       "WhatsApp coffee order",
//       "Indonesian coffee",
//       "Soekarno Hatta Airport coffee",
//       "Plaza Bali coffee",
//       "worldwide coffee shipping",
//     ],
//   };
// }

// export default function Contact() {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "Aroma Biji",
//     url: SITE_URL,
//     logo: `${SITE_URL}/logo/AromaBiji-WildLuwak.png`,
//     sameAs: [
//       "https://www.instagram.com/aromabiji",
//       "https://www.tiktok.com/aromabiji.id",
//     ],
//     contactPoint: [
//       {
//         "@type": "ContactPoint",
//         contactType: "customer support",
//         telephone: "+62-822-2187-1409",
//         availableLanguage: ["en", "id"],
//       },
//     ],
//   };

//   // Optional: add Place schema (if you have exact addresses later)
//   // For now we keep it clean to avoid inaccurate data.

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
//       <ContactPage />
//     </>
//   );
// }



import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

const SITE_URL = "https://aromabiji.co";
const PAGE_URL = `${SITE_URL}/contact`;
const OG_IMAGE = `${SITE_URL}/images/aroma-biji-product.webp`; // put in /public/images/

export const metadata: Metadata = {
  title: "Contact Aroma Biji | Order via WhatsApp • Offline Stores • Worldwide Shipping",
  description:
    "Order Aroma Biji coffee via WhatsApp, or shop offline at Soekarno-Hatta International Airport and Plaza Bali. We ship worldwide (up to 30 days depending on destination and customs).",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Contact Aroma Biji | Order via WhatsApp",
    description:
      "Order via WhatsApp or shop offline at Soekarno-Hatta International Airport and Plaza Bali. Worldwide shipping available (up to 30 days).",
    siteName: "Aroma Biji",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Aroma Biji Contact" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Aroma Biji | Order via WhatsApp",
    description:
      "Order via WhatsApp or shop offline at Soekarno-Hatta International Airport and Plaza Bali. Worldwide shipping available (up to 30 days).",
    images: [OG_IMAGE],
  },
  keywords: [
    "Aroma Biji",
    "Aroma Biji contact",
    "order Aroma Biji",
    "WhatsApp coffee order",
    "Soekarno Hatta Airport coffee",
    "Plaza Bali coffee",
    "Indonesian coffee beans",
    "worldwide coffee shipping",
  ],
};

export default function Contact() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aroma Biji",
    url: SITE_URL,
    logo: `${SITE_URL}/logo/AromaBiji-WildLuwak.png`,
    sameAs: [
      "https://www.instagram.com/aromabiji",
      "https://www.tiktok.com/aromabiji.id",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+62-822-2187-1409",
        availableLanguage: ["en", "id"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "marketing@aromabiji.co",
        availableLanguage: ["en", "id"],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <ContactPage />
    </>
  );
}

