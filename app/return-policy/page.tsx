import { Metadata } from "next";
import ReturnPolicyClient from "@/components/pages/ReturnPolicyPage";

// 1. DYNAMIC METADATA & OPEN GRAPH
export const metadata: Metadata = {
  title: "Return & Exchange Policy | Aroma Biji",
  description: "Transparent, fair, and dedicated to your satisfaction. Read Aroma Biji's return policy, refund processes, and eligibility for specialty coffee beans and merchandise.",
  openGraph: {
    title: "Return & Exchange Policy | Aroma Biji",
    description: "Transparent, fair, and dedicated to your satisfaction. Read Aroma Biji's return policy, refund processes, and eligibility for specialty coffee beans and merchandise.",
    url: "https://www.aromabiji.com/return-policy",
    siteName: "Aroma Biji Archive",
    images: [
      {
        url: "/images/og-return-policy.jpg", // Make sure to add a luxury placeholder image here
        width: 1200,
        height: 630,
        alt: "Aroma Biji Customer Care",
      },
    ],
    locale: "en_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return & Exchange Policy | Aroma Biji",
    description: "Read Aroma Biji's return policy, refund processes, and eligibility for specialty coffee beans.",
  },
};

export default function ReturnPolicyPage() {
  // 2. GOOGLE MERCHANT CENTER JSON-LD SCHEMA
  // This explicitly tells search engines your exact return terms.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Return Policy - Aroma Biji",
    "description": "Aroma Biji return, exchange, and refund policies.",
    "mainEntity": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "ID",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 7,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/OriginalShippingFees",
      "refundType": "https://schema.org/FullRefund"
    }
  };

  return (
    <>
      {/* Inject JSON-LD to the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Render the Animated Client UI */}
      <ReturnPolicyClient />
    </>
  );
}