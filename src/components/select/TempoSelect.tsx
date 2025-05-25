import { Drum } from "lucide-react";
import { motion } from "framer-motion";

type TempoSelectProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function TempoSelect({ value, onChange }: TempoSelectProps) {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-xl bg-[#121417] p-6 text-white shadow-lg">
      <div className="flex items-center gap-2 text-white">
        <Drum className="h-5 w-5" />
        <label htmlFor="tempo-input" className="text-base font-semibold">
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
        className="w-full rounded-md border border-zinc-700 bg-[#1c1d21] px-3 py-2 text-center text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#E2768A]"
        whileFocus={{
          scale: 1.02,
          boxShadow: "0px 0px 8px rgba(226, 118, 138, 0.7)",
        }}
      />

      <motion.input
        id="tempo-range"
        type="range"
        min={40}
        max={240}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#E2768A]"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      />
    </div>
  );
}
