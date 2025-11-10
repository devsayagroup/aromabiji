import journals from "@/lib/journals.json"
import { Journal } from "@/types/journal"
import JournalSection from "@/components/section/JournalSection"

export const metadata = {
  title: "Journal | Aroma Biji",
  description:
    "Explore Aroma Biji’s stories about Indonesian coffee, craftsmanship, and sustainability. Discover how our passion shapes every bean.",
  keywords: [
    "Aroma Biji",
    "Indonesian coffee",
    "specialty coffee",
    "coffee stories",
    "artisan roasting",
  ],
}

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <JournalSection />
    </main>
  )
}
