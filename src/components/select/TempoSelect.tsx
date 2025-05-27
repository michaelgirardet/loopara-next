import { Drum } from "lucide-react";
import { motion } from "framer-motion";

type TempoSelectProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function TempoSelect({ value, onChange }: TempoSelectProps) {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-xl bg-eerie/80 p-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-2 text-white">
        <Drum className="h-5 w-5" />
        <label htmlFor="tempo-input" className="text-base font-semibold tracking-wide">
          Tempo (BPM)
        </label>
      </div>

      <motion.input
        id="tempo-input"
        type="number"
        min={40}
        max={240}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-md border border-misty/30 bg-gunmetal px-3 py-2 text-center text-lg font-medium text-white shadow-none focus:outline-none focus:ring-2 focus:ring-turquoise"
        whileFocus={{
          scale: 1.02,
        }}
      />

      <motion.input
        id="tempo-range"
        type="range"
        min={40}
        max={240}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-turquoisehover shadow-none"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      />
    </div>
  );
}
