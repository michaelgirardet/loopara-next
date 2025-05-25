import { motion } from "framer-motion";
import { Drum } from "lucide-react";

type TempoSelectProps = {
  value: number;
  onChange: (value: number) => void;
};

function TempoSelect({ value, onChange }: TempoSelectProps) {
  return (
    <div key="tempo-controls" className="flex flex-col gap-2 font-bold text-[#ff7e73]">
      <div className="mx-5 items-center justify-center gap-4 md:flex-row">
        <div>
          <div className="flex items-center justify-center gap-2 text-center text-[#FEFEFE]">
            <Drum />
            <label htmlFor="tempo-input" className="mb-1 block text-[#FEFEFE]">
              Tempo (BPM)
            </label>
          </div>
          <div className="flex w-full justify-end">
            <motion.input
              id="tempo-input"
              type="number"
              min={40}
              max={240}
              step={1}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="h-10 rounded-md bg-[#030504] text-center font-medium text-[#FEFEFE] shadow-sm transition-all duration-200"
              whileFocus={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(226, 84, 110, 1)",
              }}
            />
          </div>
          <div>
            <label htmlFor="tempo-range" className="sr-only">
              Contrôle du tempo (curseur)
            </label>
            <motion.input
              id="tempo-range"
              type="range"
              min={40}
              max={240}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="flex w-full cursor-grab accent-[#E2768A]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ cursor: "grabbing" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempoSelect;
