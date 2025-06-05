"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music, Clock, Download, Command, Sparkles, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import HappyMusic from "../../../public/happy-music.svg";
import Image from "next/image";

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
    { id: 1, icon: <Music size={20} />, text: "Motifs MIDI cohérents et musicaux" },
    { id: 2, icon: <Command size={20} />, text: "Contrôle du tempo, style, instruments" },
    {
      id: 3,
      icon: <Sparkles size={20} />,
      text: "Accords, arpèges, mélodies générés automatiquement",
    },
    { id: 4, icon: <Clock size={20} />, text: "Pré-écoute instantanée dans le navigateur" },
    { id: 5, icon: <Download size={20} />, text: "Export immédiat en fichier MIDI universel" },
  ];

  return (
    <motion.main className="section-spacing mx-auto flex w-screen max-w-4xl flex-col items-center justify-center font-hind text-white">
      <div className="flex">
        <div className="flex flex-col items-center justify-evenly">
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

          <motion.p
            className="mt-6 max-w-2xl text-center text-lg text-white/90"
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Loopara est un générateur de motifs MIDI rapide et créatif. Conçu pour les producteurs,
            beatmakers, enseignants et curieux, il rend la composition ludique, intuitive et
            musicale.
          </motion.p>
        </div>
        <Image src={HappyMusic} alt="happy-music" className="max-w-md" />
      </div>
      <Separator className="my-12 bg-turquoise/20" />

      <motion.section
        className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((item, i) => (
          <motion.div key={item.id} variants={fadeUp} custom={i + 2}>
            <Card className="bg-eerie text-white">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="rounded-full bg-turquoise/20 p-2 text-turquoise">{item.icon}</div>
                <p className="text-lg">{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      <Separator className="my-20 bg-turquoise/20" />

      <motion.section
        className="w-full space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp} custom={features.length + 1}>
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-3xl">Notre vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-white/90">
              <blockquote className="text-xl italic">
                “L'inspiration musicale ne devrait jamais être freinée par la technique.”
              </blockquote>
              <p>
                Chez Loopara, on croit que l'expérimentation et la spontanéité sont au cœur de la
                création musicale.
              </p>
              <p>
                Que tu sois beatmaker, compositeur ou simplement curieux, notre outil est conçu pour
                t'accompagner sans te bloquer.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      <Separator className="my-20 bg-turquoise/20" />

      <motion.section
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp} custom={features.length + 2}>
          <Card className="bg-eerie text-white">
            <CardHeader>
              <CardTitle className="text-3xl">Derrière Loopara</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-white/90">
              <p>
                Loopara combine la théorie musicale et des algorithmes intelligents pour générer des
                motifs MIDI logiques, harmonieux et variés.
              </p>
              <p>
                Chaque motif est généré en fonction de ta gamme, ton tempo, et ton type de motif
                préféré. Le tout est prêt à être exporté pour ton DAW favori.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      <Separator className="my-20 bg-turquoise/20" />

      <motion.section
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp} custom={features.length + 3}>
          <Card className="bg-eerie text-white">
            <CardHeader>
              <CardTitle className="text-3xl">Contribue à Loopara</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg text-white/90">
                Tu veux proposer une fonctionnalité ou faire un retour ? Ton avis nous intéresse !
              </p>
              <Button asChild className="bg-turquoise text-rich hover:bg-turquoisehover">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
