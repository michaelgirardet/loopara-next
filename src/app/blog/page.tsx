"use client";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { articles } from "./blog.data";

export default function Blog() {
  return (
    <motion.div
      className="mx-auto max-w-6xl px-6 pb-32 pt-40 font-hind text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.header
        className="mb-14 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-keppel bg-keppel/10 px-4 py-2 text-sm font-semibold text-keppel">
          <BookOpen size={18} /> Blog officiel
        </span>
        <h1 className="text-5xl font-bold text-white">Le Blog Loopara</h1>
        <p className="mt-4 max-w-xl text-white">
          Conseils créatifs, tutoriels MAO, et actus autour de la génération MIDI.
        </p>
      </motion.header>

      {/* Articles */}
      <motion.main
        className="grid gap-10 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {articles.map((article) => (
          <motion.article
            key={article.id}
            className="hover:-trankeppel-y-1 group relative flex flex-col justify-between rounded-xl border border-keppel/20 bg-gradient-to-br from-eerie/20 to-eerie p-6 shadow-md transition duration-300 hover:shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-keppel group-hover:underline">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-white">{article.description}</p>
            </div>
            <footer className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <time>{new Date(article.date).toLocaleDateString("fr-FR")}</time>
              <Link
                href={`/blog/${article.slug}`}
                className="flex items-center gap-1 text-keppel hover:underline"
              >
                Lire <ArrowRight size={16} />
              </Link>
            </footer>
          </motion.article>
        ))}
      </motion.main>
    </motion.div>
  );
}
