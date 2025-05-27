"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Info, Mail } from "lucide-react";

export default function Page() {
  return (
    <motion.main
      className="pt-38 sm:pt-42 mx-auto max-w-4xl px-6 pb-20 font-hind text-white md:pb-24 md:pt-48 lg:pb-36 lg:pt-52"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <header className="mb-12 flex items-center gap-3">
        <ShieldCheck size={32} className="text-keppel" />
        <h1 className="text-center text-4xl font-bold text-keppel">Politique de Confidentialité</h1>
      </header>

      {/* Intro */}
      <motion.section
        className="mb-10 rounded-lg border border-keppel/20 bg-eerie p-6 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-white">
          La confidentialité est au cœur de Loopara. Nous avons conçu notre outil pour qu’il
          fonctionne sans pisteurs, ni collecte de données inutiles.
        </p>
      </motion.section>

      {/* Sections */}
      <motion.section
        className="space-y-8 text-sm leading-relaxed text-white"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          {
            id: 1,
            icon: <Info size={18} />,
            title: "1. Données collectées",
            content:
              "Loopara collecte uniquement des données techniques minimales (comme l’adresse IP) nécessaires au bon fonctionnement du site. Aucune donnée personnelle ou sensible n’est stockée.",
          },
          {
            id: 2,
            icon: <ShieldCheck size={18} />,
            title: "2. Usage des données",
            content:
              "Ces données servent exclusivement à assurer la stabilité, la sécurité et la performance de l’expérience utilisateur. Elles ne sont jamais partagées avec des tiers.",
          },
          {
            id: 3,
            icon: <ShieldCheck size={18} />,
            title: "3. Cookies",
            content:
              "Loopara n’utilise pas de cookies publicitaires ni de traceurs tiers. Aucun cookie n’est installé sans nécessité technique.",
          },
          {
            id: 4,
            icon: <ShieldCheck size={18} />,
            title: "4. Stockage",
            content:
              "Toutes les données techniques sont hébergées en Europe et automatiquement supprimées après une courte période d’inactivité.",
          },
          {
            id: 5,
            icon: <Mail size={18} />,
            title: "5. Contact",
            content:
              "Pour toute question concernant votre vie privée ou pour exercer vos droits, écrivez-nous à : contact@loopara.app",
          },
        ].map((item, index) => (
          <motion.div
            key={item.id}
            className="rounded-lg border border-keppel/20 bg-eerie p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <h2 className="mb-2 flex items-center gap-2 text-base font-semibold text-keppel">
              {item.icon}
              {item.title}
            </h2>
            <p className="text-gray-300">{item.content}</p>
          </motion.div>
        ))}
      </motion.section>
    </motion.main>
  );
}
