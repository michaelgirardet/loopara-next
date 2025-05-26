"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Music, Clock, Download, Heart, Command, Sparkles, Home } from "lucide-react";

export default function Page() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  // Tableau de features
  const features = [
    {
      id: 1,
      icon: <Music size={20} />,
      text: "Motifs MIDI cohérents et musicaux",
    },
    {
      id: 2,
      icon: <Command size={20} />,
      text: "Contrôle total du tempo, style, instruments",
    },
    {
      id: 3,
      icon: <Sparkles size={20} />,
      text: "Génération intuitive d'accords, arpèges, mélodies",
    },
    {
      id: 4,
      icon: <Clock size={20} />,
      text: "Pré-écoute instantanée dans le navigateur",
    },
    {
      id: 5,
      icon: <Download size={20} />,
      text: "Export immédiat en fichier MIDI universel",
    },
  ];

  return (
    <motion.main
      className="mx-auto flex w-screen max-w-4xl flex-col items-center justify-center px-6 pb-24 pt-36 font-hind text-white"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          },
        },
      }}
    >
      <motion.h1 className="text-5xl font-bold text-white" variants={fadeUp} custom={0}>
        À propos de Loopara
      </motion.h1>

      <motion.p className="mt-6 text-xl text-white/90" variants={fadeUp} custom={1}>
        Loopara est un générateur de motifs MIDI rapide et créatif. Conçu pour les producteurs,
        beatmakers, enseignants et curieux, il rend la composition ludique, intuitive et musicale.
      </motion.p>

      <motion.section className="mt-14 space-y-6" variants={fadeUp} custom={2}>
        <h2 className="text-center text-3xl font-bold text-white/80">Fonctionnalités clés</h2>
        <ul className="space-y-4">
          {features.map((item, i) => (
            <motion.li
              key={item.id}
              className="flex items-center gap-4 rounded-xl bg-eerie p-4 shadow-md"
              variants={fadeUp}
              custom={i + 3}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-keppel/20 text-keppel">
                {item.icon}
              </div>
              <span className="text-lg">{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section className="mt-20" variants={fadeUp} custom={features.length + 3}>
        <h2 className="text-center text-3xl font-bold text-white/80">Notre vision</h2>
        <div className="mt-4 rounded-lg bg-eerie p-6 shadow-lg">
          <p className="text-xl text-white">
            Notre mission est simple : rendre la composition musicale instantanée, accessible et
            inspirante. Grâce à des algorithmes intelligents, Loopara te permet de créer, tester et
            exporter des idées en quelques clics.
          </p>
        </div>
      </motion.section>

      <motion.section className="mt-20" variants={fadeUp} custom={features.length + 4}>
        <h2 className="text-center text-3xl font-bold text-white/80">Contribue à Loopara</h2>
        <div className="mt-4 flex flex-col items-start gap-4 rounded-lg bg-eerie p-6 shadow-md sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-white">
            Tu veux proposer une fonctionnalité ou faire un retour ? Ton avis nous intéresse !
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-keppel px-5 py-3 font-semibold text-noir transition-all hover:bg-keppelhover hover:shadow-lg hover:shadow-keppel/10"
          >
            <Heart size={20} />
            Nous contacter
          </Link>
        </div>
      </motion.section>

      <motion.section className="mt-28 text-center" variants={fadeUp} custom={features.length + 5}>
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-keppel px-6 py-3 text-lg font-semibold text-keppel transition-all hover:bg-keppel hover:text-noir hover:shadow-lg hover:shadow-keppel/10"
        >
          Retour à l&apos;accueil <Home size={18} />
        </Link>
      </motion.section>
    </motion.main>
  );
}
