import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { homeTestimonials } from "./home.data";

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const total = homeTestimonials.length;

  const handleNext = () => setIndex((prev) => (prev + 1) % total);
  const handlePrev = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <section className="mx-auto my-24 max-w-3xl px-6">
      <div className="mb-6 flex items-center justify-center gap-3">
        <p className="text-3xl font-bold text-[#E2768A]">Témoignages</p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={homeTestimonials[index].id}
            className="rounded-xl border border-[#E2768A]/30 bg-gradient-to-br from-[#E2768A]/10 to-[#1c1d21] p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-light text-gray-200 italic">
              “{homeTestimonials[index].quote}”
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E2768A] font-bold text-white">
                {homeTestimonials[index].initial}
              </div>
              <div className="ml-3">
                <p className="font-semibold text-white">
                  {homeTestimonials[index].name}
                </p>
                <p className="text-sm text-gray-300">
                  {homeTestimonials[index].role}
                </p>
              </div>
            </div>
          </motion.blockquote>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-full border border-[#E2768A]/30 p-2 text-white transition hover:bg-[#E2768A]/20"
            aria-label="Témoignage précédent"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full border border-[#E2768A]/30 p-2 text-white transition hover:bg-[#E2768A]/20"
            aria-label="Témoignage suivant"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
