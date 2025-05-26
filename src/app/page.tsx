"use client";
import { useState } from "react";
import {
  Music,
  Download,
  Zap,
  BookOpen,
  MessageCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { homeFaq, homeHowItWorks } from "./home/home.data";
import TestimonialsCarousel from "@/app/home/TestimonialsCarousel";
import Link from "next/link";

// Animation d'entrée motion
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

function page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Ouvrir accordéon faq
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-hind text-powder pt-40 sm:pt-42 lg:pt-58 flex min-h-screen w-screen flex-col bg-noir pb-16 md:pb-24 md:pt-56 lg:pb-36">
      {/* Hero Section */}
      <div className="mb-16 flex flex-col items-center justify-center text-center ">
        <div className="relative">
          <h1 className="mb-2 bg-clip-text text-5xl font-bold text-misty md:text-6xl lg:text-7xl">
            Inspire ta prochaine boucle.
          </h1>
          <h2 className="bg-misty bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            En une seconde.
          </h2>
        </div>

        <h2 className="mx-5 mt-8 max-w-2xl text-2xl font-bold text-white md:text-3xl">
          Laisse-toi surprendre - chaque clic est une nouvelle idée musicale !
        </h2>

        <p className="mx-5 mt-6 max-w-2xl text-lg text-white">
          Loopara est un générateur de fichiers MIDI simple et rapide. Crée en quelques secondes des
          motifs personnalisés, choisis ta gamme, ton tempo, et télécharge un fichier prêt à
          l'emploi pour Ableton, FL Studio ou Logic.
        </p>
      </div>

      {/* Grille de features */}
      <div className="mx-10 grid w-[70%] grid-cols-1 self-center py-10 md:grid-cols-3 text-center gap-5">
        <div className="mx-5 flex flex-col items-center justify-center">
          <div className="mb-4 inline-block rounded-lg bg-keppel bg-opacity-20 p-3">
            <Zap className="text-white" size={24} />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-misty">Rapide & Intuitif</h2>
          <p className="text-lg text-white ">
            Génère des patterns MIDI en quelques secondes, sans complexité inutile.
          </p>
        </div>
        <div className="mx-5 flex flex-col items-center">
          <div className="mb-4 inline-block rounded-lg bg-keppel bg-opacity-20 p-3">
            <Music className="text-white" size={24} />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-misty">Musicalement pertinent</h2>
          <p className="text-lg text-white">
            Des patterns qui respectent les règles musicales, parfaits pour démarrer tes
            compositions.
          </p>
        </div>
        <div className="mx-5 flex flex-col items-center">
          <div className="mb-4 inline-block rounded-lg bg-keppel bg-opacity-20 p-3">
            <Download className="text-white" size={24} />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-misty">Compatible</h2>
          <p className="text-lg text-white">
            Fichiers MIDI universels, prêts à l'emploi dans ton DAW favori.
          </p>
        </div>
      </div>

      {/* Comment ça marche ?*/}
      <div>
        <motion.section
          className="mx-auto my-24 max-w-5xl px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div className="mb-10 flex items-center justify-center gap-3" variants={fadeInUp}>
            <BookOpen className="text-misty" size={24} />
            <h2 className="text-4xl font-bold text-misty">Comment ça marche ?</h2>
          </motion.div>

          <motion.ul
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {homeHowItWorks.map((item, index) => (
              <motion.li
                key={item.id}
                className="flex items-center justify-center gap-4 rounded-lg border border-keppel/30 bg-eerie p-6 shadow-lg"
                variants={fadeInUp}
              >
                <span className="flex w-8 h-8 items-center justify-center rounded-full bg-noir font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-lg text-misty">{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      </div>

      {/* À Propos */}
      <div>
        <motion.section
          className="mx-auto my-24 max-w-4xl px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div className="mb-6 flex items-center justify-center gap-3" variants={fadeInUp}>
            <Music className="text-misty" size={24} />
            <h3 className="text-4xl font-bold text-misty">À propos de Loopara</h3>
          </motion.div>
          <motion.div
            className="rounded-xl border border-keppel/30 bg-eerie p-6 text-lg leading-relaxed text-gray-200 shadow-lg"
            variants={fadeInUp}
          >
            Loopara est né de la passion pour la MAO et du désir de simplifier la phase de création
            musicale. Cet outil s'adresse aux beatmakers, musiciens, enseignants ou curieux
            souhaitant créer des idées rapidement. Aucune inscription, aucune friction – juste de la
            créativité immédiate.
          </motion.div>
        </motion.section>
      </div>

      {/* Pourquoi choisir Loopara ? */}
      <div>
        <motion.section
          className="mx-auto my-24 max-w-4xl px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div className="mb-6 flex items-center justify-center gap-3" variants={fadeInUp}>
            <Zap className="text-misty" size={24} />
            <h3 className="text-4xl font-bold text-misty">Pourquoi choisir Loopara ?</h3>
          </motion.div>
          <motion.div
            className="space-y-4 rounded-xl border border-keppel/30 bg-eerie p-6 text-lg text-white shadow-lg"
            variants={fadeInUp}
          >
            <p>
              Loopara place la créativité au cœur de l’expérience. Notre algorithme intègre des
              logiques musicales avancées pour produire des résultats cohérents et inspirants, même
              sans connaissances théoriques.
            </p>
            <p>
              Que tu sois beatmaker, compositeur ou passionné, tu bénéficies d’un outil rapide,
              efficace, sans compromis sur la qualité musicale.
            </p>
            <p>
              Notre mission : rendre la création musicale accessible, immédiate et ludique — une
              boucle à la fois.
            </p>
          </motion.div>
        </motion.section>
      </div>
      {/* FAQ Section */}
      <div>
        <motion.section
          className="mx-auto my-24 max-w-4xl px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="mb-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle className="text-misty" size={24} />
            <h3 className="text-4xl font-bold text-misty">FAQ – Questions fréquentes</h3>
          </motion.div>

          <div className="space-y-4 rounded-xl border border-keppel/30 bg-eerie p-6 shadow-lg">
            {homeFaq.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => toggle(index)}
                className="cursor-pointer border-b border-keppel/10 pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">{item.question}</h4>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} className="text-white" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      className="mt-2 text-gray-300"
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
          </div>
        </motion.section>
      </div>

      {/* Testimonial */}
      <div>
        <TestimonialsCarousel />
      </div>

      {/* Blog CTA */}
      <motion.section
        className="mx-auto my-24 max-w-4xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div className="mb-6 flex items-center gap-3" variants={fadeInUp}>
          <ArrowRight size={24} className="text-misty" />
          <h4 className="text-3xl font-bold text-misty">À lire aussi</h4>
        </motion.div>
        <motion.div
          className="rounded-xl border border-keppel/30 bg-eerie p-6 shadow-lg"
          variants={fadeInUp}
        >
          <p className="text-lg font-medium text-white">
            Tu veux aller plus loin ? Consulte nos articles sur la théorie musicale, la production
            assistée par ordinateur ou les astuces pour enrichir tes arrangements.
          </p>
        </motion.div>
        <motion.div className="mt-10 flex justify-center" variants={fadeInUp}>
          <Link href={"/control"}>
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-lg bg-keppel px-5 py-3 font-semibold text-noir transition-all duration-300 hover:shadow-lg hover:shadow-keppel/10 hover:bg-keppelhover"
            >
            Essayer maintenant
          </button>
            </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default page;
