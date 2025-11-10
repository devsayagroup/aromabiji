import { notFound } from "next/navigation";
import Image from "next/image";
import journals from "@/lib/journals.json";
import { Journal } from "@/types/journal";
import RelatedJournals from "@/components/ui/RelatedJournals";

export async function generateStaticParams() {
  const allJournals = journals as Journal[];
  return allJournals.map((journal) => ({
    slug: journal.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const allJournals = journals as Journal[];
  const journal = allJournals.find((j) => j.slug === decodedSlug);

  if (!journal) return {};

  return {
    title: `${journal.title} | Aroma Biji`,
    description: journal.metaDescription,
    keywords: journal.keywords.join(", "),
    openGraph: {
      title: `${journal.title} | Aroma Biji`,
      description: journal.metaDescription,
      images: [
        {
          url: journal.image,
          width: 1200,
          height: 630,
          alt: journal.title,
        },
      ],
    },
  };
}

export default async function JournalSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const allJournals = journals as Journal[];
  const journal = allJournals.find((j) => j.slug === decodedSlug);

  if (!journal) notFound();

  return (
    <>
    <article className="max-w-4xl mx-auto px-6 py-32">
      <div className="relative w-full font-text h-[400px] md:h-[500px] mb-10">
        <Image
          src={journal.image}
          alt={journal.title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      <h1 className="text-4xl font-style font-semibold mb-2">{journal.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        {journal.author} •{" "}
        {new Date(journal.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {journal.content.sections.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-style font-semibold mb-2">{section.heading}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {section.body}
          </p>
        </div>
      ))}

      <RelatedJournals currentSlug={journal.slug} />
    </article>

    </>
    
  );
}
