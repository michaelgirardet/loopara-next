import { motion } from "framer-motion";
import MusicGenreSelect from "@/components/select/MusicGenreSelect";
import ModeSelect from "@/components/select/ModeSelect";
import RootNoteSelect from "@/components/select/RootNoteSelect";
import ScaleTypeSelect from "@/components/select/ScaleTypeSelect";
import RhythmMultiSelect from "@/components/select/RhythmMultiSelect";
import TempoSelect from "@/components/select/TempoSelect";
import { Gem } from "lucide-react";

interface SelectorGridProps {
  genre: string;
  setGenre: (value: string) => void;
  mode: "arpeggios" | "chords" | "melody" | "drums";
  setMode: (value: "arpeggios" | "chords" | "melody" | "drums") => void;
  rootNote: string;
  setRootNote: (value: string) => void;
  scaleType: "major" | "minor";
  setScaleType: (value: "major" | "minor") => void;
  rhythms: string[];
  setRhythms: (value: string[]) => void;
  tempo: number;
  setTempo: (value: number) => void;
  containerVariants: import("framer-motion").Variants;
  itemVariants: import("framer-motion").Variants;
  onChange: (value: "arpeggios" | "chords" | "melody" | "drums") => void;
}

export default function SelectorGrid({
  genre,
  setGenre,
  mode,
  setMode,
  rootNote,
  setRootNote,
  scaleType,
  setScaleType,
  rhythms,
  setRhythms,
  tempo,
  setTempo,
  containerVariants,
  itemVariants,
}: SelectorGridProps) {
  const selectors = [
    <MusicGenreSelect key="genre" value={genre} onChange={setGenre} />,
    <ModeSelect key="mode" value={mode} onChange={setMode} />,
    <RootNoteSelect key="root" value={rootNote} onChange={setRootNote} />,
    <ScaleTypeSelect key="scale" value={scaleType} onChange={setScaleType} />,
    <RhythmMultiSelect key="rhythm" value={rhythms} onChange={setRhythms} />,
    <TempoSelect key="tempo" value={tempo} onChange={setTempo} />,
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto mt-24 w-full max-w-7xl scroll-mt-28 px-4 sm:px-8 lg:px-12 flex flex-col gap-5"
      id="generate-grid"
    >
      
      <div className="text-center text-5xl font-bold text-misty flex justify-center items-center gap-5"><Gem size={38} />
        <h1>Loop<span className="text-keppel">Mint</span></h1></div>

      <h2 className="mt-6 text-center text-xl text-misty/90">
  Frais, unique, prêt à jouer — chaque boucle est ta signature.
</h2>

      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-keppel/20 bg-gradient-to-br from-eerie to-noir p-8 shadow-2xl sm:grid-cols-2 lg:grid-cols-3">
        {selectors.map((child) => (
          <motion.div
            key={child.key}
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex flex-col items-center justify-center rounded-xl border border-eerie bg-noir p-6 shadow-lg backdrop-blur-md transition hover:shadow-xl"
          >
            {child}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
