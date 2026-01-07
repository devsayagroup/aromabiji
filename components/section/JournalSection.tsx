"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import journals from "@/lib/journals.json";

type Journal = {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  image: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  content: {
    sections: {
      heading: string;
      body: string;
    }[];
  };
};

export default function JournalSection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-style uppercase mb-12 text-center">
          The Journal of Aroma
        </h1>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-6 auto-rows-[250px]">
          {journals.slice(0, 5).map((journal: Journal, index) => (
            <motion.div
              key={journal.id}
              className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer group ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 3
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <Link href={`/journal/${journal.slug}`}>
                <Image
                  src={journal.image}
                  alt={journal.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white md:p-2">
                  <h3 className="text-lg md:text-xl font-text font-semibold leading-tight mb-1">
                    {journal.title}
                  </h3>
                  <p className="text-xs opacity-80 line-clamp-2">
                    {journal.excerpt}
                  </p>
                  {/* <p className="text-[11px] mt-2 opacity-60">{journal.date}</p> */}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/journal"
            className="px-8 py-3 text-sm font-medium rounded-full bg-black text-white hover:bg-neutral-800 transition"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
