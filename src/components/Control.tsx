import { useEffect, useState } from "react";
import type { ControlProps } from "../types/types";
import RootNoteSelect from "./select/RootNoteSelect";
import ScaleTypeSelect from "./select/ScaleTypeSelect";
import ModeSelect from "./select/ModeSelect";
import RhythmMultiSelect from "./RhythmMultiSelect";
import { WandSparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Toast from "../ui/toast";
import TempoSelect from "./select/TempoSelect";
import MusicGenreSelect from "./MusicGenreSelect";

const Control: React.FC<ControlProps> = ({ onGenerate }) => {
  const [rootNote, setRootNote] = useState("Do");
  const [scaleType, setScaleType] = useState<"major" | "minor">("major");
  const [mode, setMode] = useState<"arpeggios" | "chords" | "melody">(
    "arpeggios",
  );
  const [genre, setGenre] = useState("pop");
  const [rhythms, setRhythms] = useState(["4"]);
  const [tempo, setTempo] = useState(120);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Appliquer des valeurs recommandées selon le genre musical
  useEffect(() => {
    switch (genre) {
      case "lofi":
        setScaleType("minor");
        setMode("melody");
        setRhythms(["8", "4"]);
        setTempo(70);
        break;
      case "house":
        setScaleType("major");
        setMode("chords");
        setRhythms(["4"]);
        setTempo(125);
        break;
      case "trap":
        setScaleType("minor");
        setMode("melody");
        setRhythms(["8", "16"]);
        setTempo(140);
        break;
      case "funk":
        setScaleType("major");
        setMode("arpeggios");
        setRhythms(["16", "8"]);
        setTempo(100);
        break;
      default:
        setScaleType("major");
        setMode("chords");
        setRhythms(["4", "8"]);
        setTempo(110);
        break;
    }
  }, [genre]);

  const handleClick = async () => {
    setIsLoading(true);
    setIsSuccess(false);

    // Simulation d'un délai pour montrer l'animation de chargement
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onGenerate({
      rootNote,
      scaleType,
      mode,
      rhythms,
      tempo,
      genre,
    });

    setIsLoading(false);
    setIsSuccess(true);

    // Réinitialiser le message de succès après 3 secondes
    setTimeout(() => setIsSuccess(false), 3000);
  };

  // Animations framer-motion pour les éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.98 },
  };

  // Bouton de génération
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#E6899A",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-5 mt-24 grid scroll-mt-28 grid-cols-1 justify-items-center gap-10 text-xl text-[#ff7e73] sm:mx-10 sm:grid-cols-2 md:mx-15 lg:mx-20 lg:grid-cols-3"
        id="generate-grid"
      >
        {[
          <MusicGenreSelect
            key="select-genre"
            value={genre}
            onChange={setGenre}
          />,
          <ModeSelect
            key="select-mode"
            value={mode}
            onChange={(value) =>
              setMode(value as "arpeggios" | "chords" | "melody")
            }
          />,
          <RootNoteSelect
            key="select-root"
            value={rootNote}
            onChange={setRootNote}
          />,
          <ScaleTypeSelect
            key="select-scale"
            value={scaleType}
            onChange={(value) => setScaleType(value as "major" | "minor")}
          />,
          <RhythmMultiSelect
            key="select-rhythm"
            value={rhythms}
            onChange={setRhythms}
          />,
          <TempoSelect key="select-tempo" value={tempo} onChange={setTempo} />,
        ].map((child, index) => (
          <motion.div
            key={child.key}
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            custom={index}
            className="z-0 flex w-2xs flex-col rounded-lg bg-[#0F1012] py-10 font-bold backdrop-blur-sm md:w-xs lg:w-2xs xl:w-sm"
          >
            {child}
          </motion.div>
        ))}
      </motion.section>

      <div className="mt-16 flex flex-col items-center text-2xl">
        <div className="my-14">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.button
                key="loading-button"
                disabled
                type="button"
                className="text-clack inline-flex items-center rounded-full bg-[#E2768A] px-8 py-4 text-center text-lg font-semibold"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  aria-hidden="true"
                  className="text-clacke me-3 inline h-6 w-6"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </motion.svg>
                Génération en cours...
              </motion.button>
            ) : (
              <motion.button
                key="generate-button"
                type="button"
                onClick={handleClick}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="text-md mx-5 flex cursor-pointer items-center justify-center gap-4 rounded-full border bg-[#e2768a] px-12 py-6 text-lg font-semibold text-[#030504] shadow-lg hover:bg-[#E6899A]"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2,
                  }}
                >
                  <WandSparkles size={24} />
                </motion.div>
                Générer un fichier MIDI
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isSuccess && <Toast message="Fichier généré avec succès !" />}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Control;
