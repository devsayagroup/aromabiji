// app/official/page.tsx  (for Next.js App Router)
// If you're using Pages Router, drop this file as pages/official.tsx and adjust imports.

import React from "react";

// Replace with your real Head component import if different
// The user provided <Head ... /> prop API — keep that and also include canonical + JSON-LD below
import Head from "../head";

export default function OfficialPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aroma Biji",
    "url": "https://aromabiji.co",
    "logo": "https://aromabiji.co/images/aroma-biji-logo.png",
    "sameAs": [
      "https://www.instagram.com/aromabiji",
      "https://www.facebook.com/aromabiji",
      "https://www.linkedin.com/company/aromabiji",
      "https://twitter.com/aromabiji"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+62-21-xxxx-xxxx",
        "contactType": "customer service",
        "areaServed": "ID",
        "availableLanguage": ["English","Indonesian"]
      }
    ],
    "foundingDate": "2024", // update if needed
    "founders": [
      {
        "@type": "Person",
        "name": "SAYA Group"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 py-20">
      {/* SEO Head in the exact prop format you requested */}
      <Head
        title="Aroma Biji – Official Website | Luxury Indonesian Coffee"
        description="Aroma Biji is the official website of the luxury Indonesian coffee brand. Discover our story, products, sourcing, and the authentic craft behind each bean."
        url="https://aromabiji.co/official"
        keywords="Aroma Biji official, AromaBiji official website, luxury Indonesian coffee, official Aroma Biji site, AromaBiji brand"
        image="https://aromabiji.co/images/aroma-biji-premium-coffee.jpg"
      />

      {/* Canonical link + JSON-LD for Organization */}
      <head>
        <link rel="canonical" href="https://aromabiji.co/official" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* HERO */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Aroma Biji — The Official Website of Our Luxury Indonesian Coffee
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            This is the authentic home of Aroma Biji. Learn about our heritage,
            our craft, and why aromabiji.co is the official source for our
            coffee, story, and products.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="/products"
              className="inline-block rounded-lg px-6 py-3 bg-black text-white font-medium"
            >
              Explore Our Coffee
            </a>
            <a
              href="/story"
              className="inline-block rounded-lg px-6 py-3 border border-gray-300 text-gray-800"
            >
              Read Our Story
            </a>
          </div>
        </header>

        {/* OFFICIAL STATEMENT */}
        <article className="prose mx-auto mb-12">
          <h2>Official Brand Statement</h2>
          <p>
            Aroma Biji is the official, active domain and brand presence for
            Aroma Biji under SAYA Group. We are the authentic source for our
            products, brand information, and communications. If you are looking
            for verified product details, press materials, or partnership
            information, aromabiji.co is the official website to trust.
          </p>

          <h3>Why this matters</h3>
          <p>
            Over time brands evolve and change domain names. To avoid
            confusion—and to make sure customers, partners, and search engines
            access the correct, up-to-date information—Aroma Biji explicitly
            declares aromabiji.co as the official domain for our brand.
          </p>
        </article>

        {/* CREDENTIALS & WHAT WE DO */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Credentials</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>40+ years Indonesian coffee heritage through SAYA Group</li>
              <li>Ethical, traceable sourcing from trusted smallholder farms</li>
              <li>Small-batch artisanal roasting developed by master roasters</li>
              <li>Premium single-origin and curated blends for connoisseurs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">What We Offer</h3>
            <p className="text-gray-700">
              Aroma Biji produces premium Indonesian coffee beans including
              single-origin lots, limited reserve roasts, and artisan blends.
              Each product page on this site contains verified origin, tasting
              notes, and roast profile to ensure transparency and quality.
            </p>
            <p className="mt-3 text-gray-700">
              For wholesale inquiries, retail partnerships, or press assets,
              please use the contact information below.
            </p>
          </div>
        </section>

        {/* BRAND TIMELINE */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Brand Timeline</h3>
          <ol className="space-y-4 text-gray-700">
            <li>
              <strong>Origin:</strong> Our coffee roots begin with dedicated
              Indonesian farmers building generations of coffee expertise.
            </li>
            <li>
              <strong>Craft:</strong> We refine each roast in small batches to
              highlight regional flavor and terroir.
            </li>
            <li>
              <strong>Refinement:</strong> Aroma Biji evolves into a luxury
              coffee brand that celebrates provenance, ethics, and taste.
            </li>
            <li>
              <strong>Official Domain:</strong> aromabiji.co — the current and
              verified home for Aroma Biji brand and commerce.
            </li>
          </ol>
        </section>

        {/* TRUST & AUTHORITY */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-3">Proving Our Authenticity</h3>
          <p className="text-gray-700 mb-3">
            To further establish aromabiji.co as the official brand presence,
            we maintain:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>Verified social profiles linking to aromabiji.co</li>
            <li>Organization schema embedded on this page (search engines)</li>
            <li>Press kit and media contacts (available on request)</li>
            <li>Verified Google Business Profile linking to aromabiji.co</li>
          </ul>
        </section>

        {/* FAQ */}
        {/* <section className="prose mx-auto">
          <h3>Frequently Asked Questions (FAQ)</h3>

          <details className="mb-3">
            <summary className="font-medium">Is aromabiji.co the official site?</summary>
            <p>
              Yes. aromabiji.co is the official and active website for Aroma
              Biji, the luxury Indonesian coffee brand under SAYA Group.
            </p>
          </details>

          <details className="mb-3">
            <summary className="font-medium">What happened to the old domain?</summary>
            <p>
              If you encounter older domains or websites, note that brand
              ownership or websites may change over time. This is why we
              maintain this official page to clarify our verified domain and
              contact points.
            </p>
          </details>

          <details className="mb-3">
            <summary className="font-medium">Where can I find verified product info?</summary>
            <p>
              Verified product descriptions, roast profiles, and origin notes
              are available on each product page on aromabiji.co. For press or
              wholesale data, contact hello@aromabiji.co.
            </p>
          </details>

          <details>
            <summary className="font-medium">How can I verify Aroma Biji on social media?</summary>
            <p>
              Our official social profiles include links that point to
              aromabiji.co. Use the <strong>sameAs</strong> links in our schema
              above to find the official profiles.
            </p>
          </details>
        </section> */}
        
      </section>
    </main>
  );
}
