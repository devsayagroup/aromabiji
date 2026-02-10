// import journals from "@/lib/journals.json"
// import { Journal } from "@/types/journal"
// import JournalSection from "@/components/section/JournalSection"

// export const metadata = {
//   title: "Journal | Aroma Biji",
//   description:
//     "Explore Aroma Biji’s stories about Indonesian coffee, craftsmanship, and sustainability. Discover how our passion shapes every bean.",
//   keywords: [
//     "Aroma Biji",
//     "Indonesian coffee",
//     "specialty coffee",
//     "coffee stories",
//     "artisan roasting",
//   ],
// }

// export default function JournalPage() {
//   return (
//     <main className="min-h-screen bg-neutral-50">
//       <JournalSection />
//     </main>
//   )
// }

import type { Metadata } from "next";
import JournalPage from "@/components/pages/JournalPage";
import journals from "@/lib/journals.json";

export const metadata: Metadata = {
  title: "Journal | Aroma Biji — Editorial of Origin, Craft & Ritual",
  description:
    "Stories from origin, craft, and culture—notes from the highlands, the roast, and the ritual. Explore Aroma Biji’s editorial journal.",
  alternates: { canonical: "https://aromabiji.co/journal" },
  openGraph: {
    title: "Journal | Aroma Biji",
    description:
      "Editorial stories from origin, craft, and ritual. Discover Aroma Biji’s journal.",
    url: "https://aromabiji.co/journal",
    siteName: "Aroma Biji",
    type: "website",
    images: [
      {
        url: "https://aromabiji.co/images/aroma-biji-journal.jpg",
        width: 1200,
        height: 630,
        alt: "Aroma Biji Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | Aroma Biji",
    description:
      "Stories from origin, craft, and culture—notes from the highlands, the roast, and the ritual.",
    images: ["https://aromabiji.co/images/aroma-biji-journal.jpg"],
  },
};

export default function Journal() {
  return <JournalPage journals={journals as any} />;
}
