"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, HelpCircle, ShieldCheck, FileText, ChevronDown } from "lucide-react";

const faqItems = [
  {
    id: 1,
    icon: <HelpCircle size={20} />,
    question: "Loopara est-il gratuit ?",
    answer:
      "Oui, Loopara est entièrement gratuit et le restera. Tu peux l’utiliser sans inscription et sans limitation.",
  },
  {
    id: 2,
    icon: <ShieldCheck size={20} />,
    question: "Puis-je utiliser les boucles dans mes projets commerciaux ?",
    answer:
      "Absolument. Les fichiers MIDI générés sont libres de droits. Tu peux les intégrer dans tes compositions, que ce soit pour YouTube, des albums ou des jeux vidéo.",
  },
  {
    id: 3,
    icon: <FileText size={20} />,
    question: "Quels logiciels sont compatibles avec les fichiers MIDI ?",
    answer:
      "Les fichiers MIDI générés par Loopara fonctionnent avec tous les logiciels de MAO : Ableton Live, Logic Pro, FL Studio, Cubase, Reaper, GarageBand et plus encore.",
  },
  {
    id: 4,
    icon: <HelpCircle size={20} />,
    question: "Est-ce que Loopara fonctionne sur mobile ou tablette ?",
    answer:
      "Oui, Loopara est responsive. Tu peux générer des idées où que tu sois, depuis ton smartphone ou ta tablette.",
  },
  {
    id: 5,
    icon: <HelpCircle size={20} />,
    question: "Je ne connais pas le solfège, puis-je quand même l'utiliser ?",
    answer:
      "Bien sûr ! Loopara est conçu pour tous. L'interface te guide dans chaque étape, même si tu n'as aucune base en théorie musicale.",
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <motion.main className="mx-auto flex max-w-3xl flex-col items-center justify-start px-6 pb-24 pt-36 font-hind text-white">
      <motion.header
        className="mb-10 flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MessageCircle size={32} className="text-white" />
        <h1 className="text-5xl font-bold text-white">FAQ – Questions fréquentes</h1>
      </motion.header>

      <section>
        {faqItems.map((item, i) => (
          <motion.div
            key={item.id}
            className="cursor-pointer rounded-lg border border-keppel/30 bg-eerie p-4 shadow-md"
            onClick={() => toggle(i)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
                {item.icon}
                {item.question}
              </h2>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  className="mt-3 text-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>
    </motion.main>
  );
}
