import { notFound } from "next/navigation";
import Image from "next/image";
import journals from "@/lib/journals.json";
import { Journal } from "@/types/journal";
import RelatedJournals from "@/components/ui/RelatedJournals";
import ShareButtons from "@/components/ui/ShareButtons";

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
    title: `${journal.title} | Wild Luwak`,
    description: journal.metaDescription,
    keywords: journal.keywords.join(", "),
    openGraph: {
      title: `${journal.title} | Wild Luwak`,
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
  const currentUrl = `https://aromabiji.co/journal/${slug}`;

  if (!journal) notFound();

  return (
    <>
    <article className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-style font-semibold mb-2">{journal.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        {journal.author} •{" "}
        {new Date(journal.date).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="relative w-full font-text h-[400px] md:h-[500px] mb-10">
        <Image
          src={journal.image}
          alt={journal.title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {journal.content.sections.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-style font-semibold mb-2">{section.heading}</h2>
          <p className="text-black leading-relaxed whitespace-pre-line">
            {section.body}
          </p>
        </div>
      ))}

      <footer className="mt-12 pt-10 ">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-widest text-black/80 font-medium">
            Share this story
          </p>
          <ShareButtons url={currentUrl} title={journal.title} />
        </div>
      </footer>

      <RelatedJournals currentSlug={journal.slug} />
    </article>
    </>
  );
}
