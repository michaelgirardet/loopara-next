import { Drum } from "lucide-react";
import { motion } from "framer-motion";

type TempoSelectProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function TempoSelect({ value, onChange }: TempoSelectProps) {
  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-4 rounded-xl bg-gunmetal p-6 backdrop-blur-xl">
      <label
        htmlFor="tempo-input"
        className="flex items-center gap-2 text-base font-semibold tracking-wide text-white"
      >
        <Drum className="h-5 w-5 text-turquoise" />
        Tempo (BPM)
      </label>

      <motion.input
        id="tempo-input"
        type="number"
        min={40}
        max={240}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        whileFocus={{ scale: 1.02 }}
        className="w-full rounded-md border-2 border-turquoise/30 bg-gunmetal px-4 py-3 text-center text-lg font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-turquoise"
      />

      <motion.input
        id="tempo-range"
        type="range"
        min={40}
        max={240}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full accent-turquoise transition-all duration-200"
      />
    </div>
  );
}
