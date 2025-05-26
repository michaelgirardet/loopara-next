import { notFound } from "next/navigation";
import { articles } from "@/app/blog/blog.data";
import { format } from "date-fns";
import { fr } from "date-fns/locale/fr";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Params = {
  params: { slug: string };
};

function Page({ params }: Params) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) return notFound();

  const formattedDate = format(new Date(article.date), "d MMMM yyyy", {
    locale: fr,
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-20 font-hind text-white">
      <Link
        href="/blog"
        className="text-emerald hover:text-emeraldhover mb-6 inline-flex items-center gap-2"
      >
        <ArrowLeft size={18} />
        Retour au blog
      </Link>

      <article>
        <h1 className="text-4xl font-bold text-misty">{article.title}</h1>
        <p className="text-emerald mt-2 text-sm">{formattedDate}</p>

        <p className="mt-6 text-lg text-gray-300">{article.description}</p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-gray-200">
          {/* Remplace cette partie par du markdown ou contenu enrichi si tu le souhaites */}
          <p>{article.excerpt}</p>
          <p>
            Cet article est en cours de rédaction complète. Reviens bientôt pour découvrir un guide
            détaillé !
          </p>
        </div>
      </article>
    </main>
  );
}

export default Page;
