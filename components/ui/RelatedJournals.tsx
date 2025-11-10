"use client"

import Link from "next/link"
import Image from "next/image"
import journals from "@/lib/journals.json"
import { Journal } from "@/types/journal"

interface RelatedJournalsProps {
  currentSlug: string
}

export default function RelatedJournals({ currentSlug }: RelatedJournalsProps) {
  const allJournals = journals as Journal[]
  const related = allJournals.filter((j) => j.slug !== currentSlug).slice(0, 3)

  return (
    <section className="mt-20 border-t pt-10">
      <h2 className="text-2xl font-semibold mb-6">Discover More from Aroma Biji</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {related.map((journal) => (
          <Link
            key={journal.id}
            href={`/journal/${journal.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative w-full h-52">
              <Image
                src={journal.image}
                alt={journal.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-700 transition-colors">
                {journal.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">{journal.excerpt}</p>
              <span className="text-xs text-gray-500 mt-2 block">
                {new Date(journal.date).toLocaleDateString()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
