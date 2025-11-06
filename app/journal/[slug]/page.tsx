import { notFound } from "next/navigation"
import Image from "next/image"
import journals from "@/lib/journals.json"
import { Journal } from "@/types/journal"

interface JournalPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const allJournals = journals as Journal[]
  return allJournals.map((journal) => ({
    slug: journal.slug,
  }))
}

export async function generateMetadata({ params }: JournalPageProps) {
  const allJournals = journals as Journal[]
  const journal = allJournals.find((j) => j.slug === params.slug)
  if (!journal) return {}

  return {
    title: `${journal.title} | Aroma Biji`,
    description: journal.metaDescription,
    keywords: journal.keywords,
  }
}

export default function JournalSinglePage({ params }: JournalPageProps) {
  const allJournals = journals as Journal[]
  const journal = allJournals.find((j) => j.slug === params.slug)

  if (!journal) notFound()

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <Image
        src={journal.image}
        alt={journal.title}
        width={1000}
        height={600}
        className="rounded-2xl mb-10 object-cover w-full"
      />
      <pre className="text-4xl font-semibold mb-2">{journal.title}</pre>
      <p className="text-sm text-gray-500 mb-8">
        {journal.author} • {new Date(journal.date).toLocaleDateString()}
      </p>

      {journal.content.sections.map((section, index) => (
        <div key={index} className="mb-10">
          <pre className="text-2xl font-semibold mb-2">{section.heading}</pre>
          <p className="text-gray-700 leading-relaxed">{section.body}</p>
        </div>
      ))}

      <div className="mt-12 border-t pt-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Aroma Biji • Crafted with passion
        </p>
      </div>
    </article>
  )
}
