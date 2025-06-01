"use client";
import { motion } from "framer-motion";
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
import { homeHowItWorks, homeFaq } from "./home/home.data";
import TestimonialsCarousel from "./home/TestimonialsCarousel";
import AnimatedHeroSection from "@/components/AnimatedHeroSection";

function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      {/* Hero Section */}
      <AnimatedHeroSection />

      {/* Features Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center p-6 text-center lg:p-8">
              <div className="mb-6 inline-block rounded-xl bg-turquoise/20 p-4 lg:p-5">
                <Zap className="text-teal-400" size={28} />
              </div>
              <h2 className="mb-4 text-xl font-bold text-white lg:text-2xl">Rapide & Intuitif</h2>
              <p className="text-base leading-relaxed text-gray-300 lg:text-lg">
                Génère des patterns MIDI en quelques secondes, sans complexité inutile.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 text-center lg:p-8">
              <div className="mb-6 inline-block rounded-xl bg-turquoise/20 p-4 lg:p-5">
                <Music className="text-teal-400" size={28} />
              </div>
              <h2 className="mb-4 text-xl font-bold text-white lg:text-2xl">
                Musicalement pertinent
              </h2>
              <p className="text-base leading-relaxed text-gray-300 lg:text-lg">
                Des patterns qui respectent les règles musicales, parfaits pour démarrer tes
                compositions.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 text-center lg:p-8">
              <div className="mb-6 inline-block rounded-xl bg-turquoise/20 p-4 lg:p-5">
                <Download className="text-teal-400" size={28} />
              </div>
              <h2 className="mb-4 text-xl font-bold text-white lg:text-2xl">Compatible</h2>
              <p className="text-base leading-relaxed text-gray-300 lg:text-lg">
                Fichiers MIDI universels, prêts à l&apos;emploi dans ton DAW favori.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="flex items-center justify-center gap-3 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <BookOpen className="mb-1 text-teal-400" size={24} />
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Comment ça marche ?
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {homeHowItWorks.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-xl border border-teal-400/30 bg-gray-800 p-6 shadow-lg transition-colors duration-300 hover:border-teal-400/50 lg:gap-6 lg:p-8"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-turquoise text-lg font-bold text-gray-900 lg:h-12 lg:w-12 lg:text-xl">
                  {index + 1}
                </span>
                <span className="text-base leading-relaxed text-white lg:text-lg">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-12">
            <Music className="text-teal-400" size={24} />
            <h3 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              À propos de Loopara
            </h3>
          </div>
          <div className="rounded-xl border border-teal-400/30 bg-gray-800 p-6 text-base leading-relaxed text-gray-200 shadow-lg lg:p-8 lg:text-lg">
            Loopara est né de la passion pour la MAO et du désir de simplifier la phase de création
            musicale. Cet outil s&apos;adresse aux beatmakers, musiciens, enseignants ou curieux
            souhaitant créer des idées rapidement. Aucune inscription, aucune friction – juste de la
            créativité immédiate.
          </div>
        </motion.div>
      </section>

      {/* Why Choose Loopara */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-12">
            <Zap className="text-teal-400" size={24} />
            <h3 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Pourquoi choisir Loopara ?
            </h3>
          </div>
          <div className="space-y-6 rounded-xl border border-teal-400/30 bg-gray-800 p-6 text-base text-white shadow-lg lg:p-8 lg:text-lg">
            <p className="leading-relaxed">
              Loopara place la créativité au cœur de l&apos;expérience. Notre algorithme intègre des
              logiques musicales avancées pour produire des résultats cohérents et inspirants, même
              sans connaissances théoriques.
            </p>
            <p className="leading-relaxed">
              Que tu sois beatmaker, compositeur ou passionné, tu bénéficies d&apos;un outil rapide,
              efficace, sans compromis sur la qualité musicale.
            </p>
            <p className="leading-relaxed">
              Notre mission : rendre la création musicale accessible, immédiate et ludique — une
              boucle à la fois.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-12">
            <MessageCircle className="mb-1 text-teal-400" size={24} />
            <h3 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              FAQ – Questions fréquentes
            </h3>
          </div>

          <div className="space-y-4 rounded-xl border border-teal-400/30 bg-gray-800 p-6 shadow-lg lg:p-8">
            {homeFaq.map((item, index) => (
              <div
                key={item.id}
                className="border-b border-teal-400/20 pb-4 last:border-b-0 last:pb-0"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <h4 className="pr-4 text-base font-bold text-white lg:text-lg">
                    {item.question}
                  </h4>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-teal-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-3 px-2 text-sm leading-relaxed text-gray-300 lg:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-12">
            <ArrowRight size={24} className="mb-2 text-teal-400" />
            <h4 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              À lire aussi
            </h4>
          </div>

          <div className="mb-8 rounded-xl border border-teal-400/30 bg-gray-800 p-6 shadow-lg lg:p-8">
            <p className="text-center text-base font-medium leading-relaxed text-white lg:text-lg">
              Tu veux aller plus loin ? Consulte nos articles sur la théorie musicale, la production
              assistée par ordinateur ou les astuces pour enrichir tes arrangements.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="btn-primary btn-lg flex w-full items-center justify-center text-base font-semibold transition-all duration-300 hover:scale-105 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/20 sm:w-auto sm:px-12 lg:px-16 lg:py-5 lg:text-lg"
            >
              Essayer maintenant
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer spacer */}
      <div className="h-16 lg:h-24" />
    </div>
  );
}

export default Page;
