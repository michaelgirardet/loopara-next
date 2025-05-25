'use client'
import { motion } from "framer-motion";
import { GraduationCap, SlidersHorizontal, Wand2, Download, Music } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    icon: <SlidersHorizontal size={24} className="text-[#E2546E]" />,
    title: "1. Paramètre ta boucle",
    description:
      "Choisis une note racine, une gamme et un mode. Ces éléments définissent la tonalité de ta boucle MIDI.",
    hint: "Exemple : Do mineur pour une ambiance mélancolique.",
  },
  {
    id: 2,
    icon: <Wand2 size={24} className="text-[#E2546E]" />,
    title: "2. Personnalise ton motif",
    description:
      "Ajoute du rythme, ajuste le tempo, explore les genres : chaque détail façonne ta création.",
    hint: "Astuce : mélange des durées (croches, noires…) pour plus de groove.",
  },
  {
    id: 3,
    icon: <Music size={24} className="text-[#E2546E]" />,
    title: "3. Écoute et ajuste",
    description:
      "Joue le rendu généré pour tester l’ambiance. Modifie les paramètres à volonté, c’est instantané.",
    hint: "Tu peux même changer de style en un clic sans tout recommencer.",
  },
  {
    id: 4,
    icon: <Download size={24} className="text-[#E2546E]" />,
    title: "4. Télécharge ton fichier MIDI",
    description:
      "Export prêt à l’emploi pour tous les DAWs : Ableton, FL Studio, Logic, Cubase, etc.",
    hint: "Le fichier contient des pistes séparées si tu actives le multi-piste.",
  },
];

export default function Page() {
  return (
    <div className="font-hind mx-auto max-w-5xl px-6 pb-24 pt-36 text-white">
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <GraduationCap className="mx-auto mb-3 text-[#E2546E]" size={40} />
        <h1 className="text-4xl font-bold text-[#E2546E]">
          Crée ta première boucle MIDI avec Loopara
        </h1>
        <p className="mt-4 text-lg italic text-gray-300">
          En 4 étapes simples, découvre comment générer ta première idée musicale !
        </p>
      </motion.header>

      <div className="relative space-y-20">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex flex-col items-center gap-8 md:flex-row md:gap-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#E2546E] bg-[#0F1012]">
              {step.icon}
            </div>
            <div className="max-w-md">
              <h3 className="mb-2 text-2xl font-bold text-[#E2546E]">{step.title}</h3>
              <p className="text-gray-200">{step.description}</p>
              <p className="mt-1 text-sm italic text-gray-400">{step.hint}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center text-gray-300">
        <p className="mb-2 text-lg font-semibold">🎧 Prêt à essayer ?</p>
        <p className="text-sm text-gray-400">
          Lance Loopara et commence à générer tes premières idées musicales.
        </p>
        <Link href={"/control"}>
        <button
          type="button"
          className="mt-6 rounded-full bg-[#E2546E] px-6 py-3 font-bold text-black hover:bg-[#E6899A]"
          >
          Lancer Loopara
        </button>
          </Link>
      </div>
    </div>
  );
}
