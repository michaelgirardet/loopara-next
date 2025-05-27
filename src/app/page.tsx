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

function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Ouvrir accordéon faq
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="sm:pt-42 lg:pt-58 bg-noirfont-hind z-20 flex min-h-screen w-screen flex-col pt-36 md:pb-24 lg:pb-36">
      {/* Hero Section */}
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-4 text-center xl:mb-36">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">
            Inspire ta prochaine boucle.
          </h1>
          <h2 className="bg-keppel bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            En une seconde.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white">
            Loopara est un générateur de fichiers MIDI simple et rapide. Crée en quelques secondes
            des motifs personnalisés, choisis ta gamme, ton tempo, et télécharge un fichier prêt à
            l&apos;emploi pour Ableton, FL Studio ou Logic.
          </p>

          <Link href={"/control"}>
            <button
              type="button"
              className="mt-6 cursor-pointer rounded-full border bg-misty px-10 py-5 font-semibold text-keppel text-noir transition-all hover:bg-keppel hover:text-noir"
            >
              Démarrer
            </button>
          </Link>
        </div>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 right-0 z-0 hidden sm:block">
          <svg
            className="block w-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <title>wave-effect</title>
            <path
              fill="#44BBA4"
              fillOpacity="1"
              d="M0,128L21.8,160C43.6,192,87,256,131,266.7C174.5,277,218,235,262,192C305.5,149,349,107,393,96C436.4,85,480,107,524,112C567.3,117,611,107,655,85.3C698.2,64,742,32,785,42.7C829.1,53,873,107,916,133.3C960,160,1004,160,1047,160C1090.9,160,1135,160,1178,186.7C1221.8,213,1265,267,1309,256C1352.7,245,1396,171,1418,133.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
            M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z;
            M0,160 C480,0 960,320 1440,160 L1440,320 L0,320 Z;
            M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
              />
            </path>
          </svg>
        </div>
      </div>

      {/* Grille de features */}
      <div className="mx-10 grid w-[70%] grid-cols-1 gap-5 self-center py-10 text-center md:grid-cols-3">
        <div className="mx-5 flex flex-col items-center justify-center">
          <div className="mb-4 inline-block rounded-lg bg-keppel bg-opacity-20 p-3">
            <Zap className="text-white" size={24} />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">Rapide & Intuitif</h2>
          <p className="text-lg text-white">
            Génère des patterns MIDI en quelques secondes, sans complexité inutile.
          </p>
        </div>
        <div className="mx-5 flex flex-col items-center">
          <div className="mb-4 inline-block rounded-lg bg-keppel bg-opacity-20 p-3">
            <Music className="text-white" size={24} />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">Musicalement pertinent</h2>
          <p className="text-lg text-white">
            Des patterns qui respectent les règles musicales, parfaits pour démarrer tes
            compositions.
          </p>
        </div>
        <div className="mx-5 flex flex-col items-center">
          <div className="mb-4 inline-block rounded-lg bg-keppel bg-opacity-20 p-3">
            <Download className="text-white" size={24} />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">Compatible</h2>
          <p className="text-lg text-white">
            Fichiers MIDI universels, prêts à l&apos;emploi dans ton DAW favori.
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
            <BookOpen className="text-white" size={24} />
            <h2 className="text-4xl font-bold text-white">Comment ça marche ?</h2>
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
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-noir font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-lg text-white">{item.text}</span>
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
            <Music className="text-white" size={24} />
            <h3 className="text-4xl font-bold text-white">À propos de Loopara</h3>
          </motion.div>
          <motion.div
            className="rounded-xl border border-keppel/30 bg-eerie p-6 text-lg leading-relaxed text-gray-200 shadow-lg"
            variants={fadeInUp}
          >
            Loopara est né de la passion pour la MAO et du désir de simplifier la phase de création
            musicale. Cet outil s&apos;adresse aux beatmakers, musiciens, enseignants ou curieux
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
            <Zap className="text-white" size={24} />
            <h3 className="text-4xl font-bold text-white">Pourquoi choisir Loopara ?</h3>
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
            <MessageCircle className="text-white" size={24} />
            <h3 className="text-4xl font-bold text-white">FAQ – Questions fréquentes</h3>
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
          <ArrowRight size={24} className="text-white" />
          <h4 className="text-3xl font-bold text-white">À lire aussi</h4>
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
              className="flex w-full items-center justify-center rounded-lg bg-keppel px-5 py-3 font-semibold text-noir transition-all duration-300 hover:bg-keppelhover hover:shadow-lg hover:shadow-keppel/10"
            >
              Essayer maintenant
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Page;
