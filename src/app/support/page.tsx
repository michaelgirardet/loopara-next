"use client";
import { motion } from "framer-motion";
import { HelpCircle, BookOpen, Mail, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <motion.main
      className="pt-38 pb-18 sm:pt-42 md:pb-18 lg:pt-50 mx-auto max-w-4xl px-6 font-hind text-white md:pt-48 lg:pb-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white">Centre de support Loopara</h1>
        <p className="mt-4 text-lg text-white">
          Besoin d’aide ? Tu es au bon endroit. Explore les ressources ou contacte-nous.
        </p>
      </header>

      {/* Support Options */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* FAQ */}
        <motion.div
          className="rounded-lg border border-keppel/30 bg-eerie p-6 shadow-md"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-4 flex items-center gap-3 text-xl font-semibold text-keppel">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-keppel/20 backdrop-blur-sm">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-white">Consulte la FAQ</h2>
          </div>
          <p className="mb-4 text-white">
            La majorité des questions courantes sont déjà répondues ici.
          </p>
          <Link href="/faq" className="text-sm font-medium text-keppel hover:underline">
            Lire la FAQ →
          </Link>
        </motion.div>

        {/* Tutoriels */}
        <motion.div
          className="rounded-lg border border-keppel/30 bg-eerie p-6 shadow-md"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-4 flex items-center gap-3 text-xl font-semibold text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-keppel/20 text-keppel backdrop-blur-sm">
              <BookOpen size={24} />
            </div>
            <h2>Tutoriels pas à pas</h2>
          </div>
          <p className="mb-4 text-white">
            Apprends à utiliser Loopara avec nos tutoriels pratiques.
          </p>
          <Link href="/tutoriel" className="text-sm font-medium text-keppel hover:underline">
            Accéder aux tutoriels →
          </Link>
        </motion.div>

        {/* Contact direct */}
        <motion.div
          className="rounded-lg border border-keppel/30 bg-eerie p-6 shadow-md md:col-span-2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-4 flex items-center gap-3 text-xl font-semibold text-keppel">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-keppel/20 backdrop-blur-sm">
              <Mail size={24} />
            </div>
            <h2 className="text-white">Besoin d’aide personnalisée ?</h2>
          </div>
          <p className="mb-4 text-white">
            Tu n’as pas trouvé ce que tu cherchais ? Tu peux nous écrire directement.
          </p>
          <Link href="/contact" className="text-sm font-medium text-keppel hover:underline">
            Contacter l’équipe Loopara →
          </Link>
        </motion.div>
      </section>

      {/* Alerte info maintenance */}
      <div className="mt-12 flex items-center gap-3 rounded-lg bg-keppel/10 p-4 text-sm text-white">
        <AlertCircle size={18} />
        <span>
          Info : La plateforme est accessible 24/7, mais les réponses peuvent prendre 24-48h les
          week-ends.
        </span>
      </div>
    </motion.main>
  );
}
