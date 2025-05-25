import { motion } from "framer-motion";
import MusicGenreSelect from "@/components/select/MusicGenreSelect";
import ModeSelect from "@/components/select/ModeSelect";
import RootNoteSelect from "@/components/select/RootNoteSelect";
import ScaleTypeSelect from "@/components/select/ScaleTypeSelect";
import RhythmMultiSelect from "@/components/select/RhythmMultiSelect";
import TempoSelect from "@/components/select/TempoSelect";

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
      className="mx-auto mt-24 w-full max-w-7xl scroll-mt-28 px-4 sm:px-8 lg:px-12"
      id="generate-grid"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-gradient-to-br from-[#121317] to-[#1b1d21] p-8 rounded-2xl shadow-2xl border border-[#E2768A]/20">
        {selectors.map((child) => (
          <motion.div
            key={child.key}
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex flex-col rounded-xl bg-[#0F1012]/70 backdrop-blur-md p-6 shadow-lg transition hover:shadow-xl border border-[#ffffff11]"
          >
            {child}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
