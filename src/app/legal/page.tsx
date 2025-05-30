"use client";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Page() {
  return (
    <motion.div
      className="pt-38 sm:pt-42 lg:pt-50 mx-auto max-w-3xl px-6 pb-28 font-hind text-white md:pb-24 md:pt-48 lg:pb-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.header
        className="mb-12 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-turquoise bg-turquoise/10 px-4 py-2 text-sm font-medium text-turquoise">
          <BookOpen size={18} />
          Mentions Légales
        </div>
        <h1 className="text-4xl font-bold text-white">Informations légales et éditeur</h1>
        <p className="mt-4 max-w-xl text-base text-white">
          Les mentions suivantes s’appliquent à l’utilisation du site Loopara.app.
        </p>
      </motion.header>

      {/* Card-style Legal Notice */}
      <motion.section
        className="bg-eerie space-y-8 rounded-xl border border-turquoise/20 p-8 text-sm leading-relaxed text-gray-300 shadow-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div>
          <h2 className="mb-1 font-semibold text-turquoise">Éditeur du site</h2>
          <p>Ce site est édité par Michaël, créateur de Loopara.</p>
        </div>

        <div>
          <h2 className="mb-1 font-semibold text-turquoise">Responsable de la publication</h2>
          <p>
            Michaël –{" "}
            <a href="mailto:contact@loopara.app" className="text-turquoise hover:underline">
              contact@loopara.io
            </a>
          </p>
        </div>

        <div>
          <h2 className="mb-1 font-semibold text-turquoise">Hébergement</h2>
          <p>
            Le site est hébergé par <strong>Hostinger</strong>.
          </p>
        </div>

        <div>
          <h2 className="mb-1 font-semibold text-turquoise">Propriété intellectuelle</h2>
          <p>
            Tous les éléments du site (textes, visuels, code) sont la propriété exclusive de
            Loopara, sauf indication contraire.
          </p>
        </div>

        <div>
          <h2 className="mb-1 font-semibold text-turquoise">Conditions d’utilisation</h2>
          <p>
            En naviguant sur ce site, tu acceptes les présentes conditions. Celles-ci peuvent
            évoluer à tout moment.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
}
