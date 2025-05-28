"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Music, Clock, Download, Command, Sparkles, Home } from "lucide-react";

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

  const features = [
    {
      id: 1,
      icon: <Music size={20} />,
      text: "Motifs MIDI cohérents et musicaux",
    },
    {
      id: 2,
      icon: <Command size={20} />,
      text: "Contrôle du tempo, style, instruments",
    },
    {
      id: 3,
      icon: <Sparkles size={20} />,
      text: "Accords, arpèges, mélodies générés automatiquement",
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
    <motion.main className="mx-auto flex w-screen max-w-4xl flex-col items-center justify-center px-6 pb-24 pt-36 font-hind text-white">
      {/* Titre */}
      <motion.h1
        className="text-center text-5xl font-bold text-turquoise"
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true }}
        variants={fadeUp}
      >
        À propos de Loopara
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="mt-6 max-w-2xl text-center text-xl text-white/90"
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Loopara est un générateur de motifs MIDI rapide et créatif. Conçu pour les producteurs,
        beatmakers, enseignants et curieux, il rend la composition ludique, intuitive et musicale.
      </motion.p>

      {/* Fonctionnalités */}
      <motion.section
        className="mt-14 w-full space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-center text-3xl font-bold text-white/80"
          variants={fadeUp}
          custom={2}
        >
          Fonctionnalités clés
        </motion.h2>
        <ul className="grid grid-cols-2 space-y-4">
          {features.map((item, i) => (
            <motion.li
              key={item.id}
              className="bg-eerie flex flex-col items-center gap-4 rounded-xl p-4 text-center sm:flex-row sm:text-left"
              variants={fadeUp}
              custom={i + 3}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/20 text-turquoise">
                {item.icon}
              </div>
              <span className="text-lg">{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Vision */}
      <motion.section
        className="mt-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="mb-6 text-center text-4xl font-bold text-white"
          variants={fadeUp}
          custom={features.length + 3}
        >
          Notre vision
        </motion.h2>

        <motion.blockquote
          className="rounded-xl border-l-4 border-turquoise bg-gray-800/70 px-6 py-8 text-center text-xl italic text-white/90"
          variants={fadeUp}
          custom={features.length + 3.1}
        >
          “L&apos;inspiration musicale ne devrait jamais être freinée par la technique. Loopara est
          là pour te faire gagner du temps, sans sacrifier la qualité.”
        </motion.blockquote>

        <motion.div
          className="bg-eerie mt-10 space-y-4 rounded-xl p-6 text-lg leading-relaxed text-white/90"
          variants={fadeUp}
          custom={features.length + 3.2}
        >
          <p>
            Chez Loopara, on croit que l&apos;expérimentation et la spontanéité sont au cœur de la
            création musicale. C&apos;est pourquoi on t&apos;aide à générer, écouter et exporter des
            idées en quelques clics.
          </p>
          <p>
            Que tu sois beatmaker, compositeur ou simplement curieux, notre outil est conçu pour
            t&apos;accompagner sans te bloquer.
          </p>
        </motion.div>
      </motion.section>

      {/* Derrière Loopara */}
      <motion.section
        className="mt-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="mb-4 text-center text-3xl font-bold text-white/80"
          variants={fadeUp}
          custom={features.length + 4}
        >
          Derrière Loopara
        </motion.h2>
        <motion.div
          className="bg-eerie space-y-3 rounded-lg p-6 text-lg leading-relaxed text-white/90"
          variants={fadeUp}
          custom={features.length + 4.1}
        >
          <p>
            Loopara combine la théorie musicale et des algorithmes intelligents pour générer des
            motifs MIDI logiques, harmonieux et variés.
          </p>
          <p>
            Chaque motif est généré en fonction de ta gamme, ton tempo, et ton type de motif
            préféré. Le tout est prêt à être exporté pour ton DAW favori.
          </p>
        </motion.div>
      </motion.section>

      {/* Contribuer */}
      <motion.section
        className="mt-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="mb-4 text-center text-3xl font-bold text-white/80"
          variants={fadeUp}
          custom={features.length + 5}
        >
          Contribue à Loopara
        </motion.h2>
        <motion.div
          className="bg-eerie mt-4 flex flex-col items-start gap-4 rounded-lg p-6 sm:flex-row sm:items-center sm:justify-between"
          variants={fadeUp}
          custom={features.length + 5.1}
        >
          <p className="text-center text-lg text-white sm:text-left">
            Tu veux proposer une fonctionnalité ou faire un retour ? Ton avis nous intéresse !
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-2 self-center rounded-full bg-turquoise px-5 py-3 text-left text-sm font-medium text-rich transition-all hover:scale-105 hover:bg-turquoisehover"
          >
            Nous contacter
          </Link>
        </motion.div>
      </motion.section>

      {/* CTA retour */}
      <motion.section
        className="mt-28 text-center"
        variants={fadeUp}
        custom={features.length + 6}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-turquoise px-6 py-3 text-lg font-semibold text-turquoise transition-all hover:bg-turquoise hover:text-rich"
        >
          Retour à l&apos;accueil <Home size={18} />
        </Link>
      </motion.section>
    </motion.main>
  );
}
