"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";

function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const router = useRouter();
  const searchParams = useSearchParams();

  // Déclencher le toast de déconnexion}
  useEffect(() => {
    if (searchParams.get("signedOut") === "true") {
      toast.success("Déconnexion réussie !");

      // Nettoyer l'URL pour éviter les toasts au rechargement
      const pathname = window.location.pathname;
      const params = new URLSearchParams(searchParams.toString());
      params.delete("signedOut");
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [router, searchParams]);

  return (
    <div className="bg-background text-foreground min-h-screen w-full">
      <AnimatedHeroSection />

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: <Zap className="text-primary" size={28} />,
              title: "Rapide & Intuitif",
              text: "Génère des patterns MIDI en quelques secondes, sans complexité inutile.",
            },
            {
              icon: <Music className="text-primary" size={28} />,
              title: "Musicalement pertinent",
              text: "Des patterns qui respectent les règles musicales, parfaits pour démarrer tes compositions.",
            },
            {
              icon: <Download className="text-primary" size={28} />,
              title: "Compatible",
              text: "Fichiers MIDI universels, prêts à l'emploi dans ton DAW favori.",
            },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="bg-muted rounded-xl p-4">{item.icon}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="text-primary" size={24} />
            <h2 className="text-center text-3xl font-bold">Comment ça marche ?</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {homeHowItWorks.map((item, index) => (
              <Card key={item.id} className="border-primary/20 hover:border-primary flex">
                <CardContent className="flex items-center justify-center gap-4 p-6">
                  <div className="bg-primary text-background flex h-10 w-10 items-center justify-center rounded-full border border-turquoise font-bold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground text-sm lg:text-base">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Music className="text-primary" size={24} />
            <h2 className="text-center text-3xl font-bold">A propos de Loopara</h2>
          </div>
          <Card>
            <CardContent className="text-muted-foreground p-6">
              Loopara est né de la passion pour la MAO et du désir de simplifier la création
              musicale. Cet outil s'adresse aux beatmakers, musiciens, enseignants ou curieux
              souhaitant créer des idées rapidement. Aucune inscription, aucune friction — juste de
              la créativité immédiate.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center justify-center gap-3">
            <MessageCircle className="text-primary" size={24} />
            <h3 className="text-center text-3xl font-bold">FAQ</h3>
          </div>
          <div className="space-y-4">
            {homeFaq.map((item) => (
              <div
                key={item.id}
                className="bg-muted cursor-pointer rounded-lg border p-4 hover:border-turquoise hover:text-turquoise"
              >
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between font-semibold">
                    <span>{item.question}</span>
                    <ChevronDown className="ml-4 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <Separator className="my-2" />
                  <p className="text-muted-foreground mt-2 text-sm">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <h4 className="text-3xl font-bold">Envie de découvrir Loopara ?</h4>
          <p className="text-muted-foreground text-lg">
            Explore nos articles sur la théorie musicale, la MAO, et crée des boucles originales.
          </p>
          <Button size="lg" className="btn-primary btn-lg">
            Essayer maintenant
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Page;
