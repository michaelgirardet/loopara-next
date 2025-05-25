import { Music3, Piano } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ModeSelectProps {
  value: "arpeggios" | "chords" | "melody" | "drums";
  onChange: (value: "arpeggios" | "chords" | "melody" | "drums") => void;
}

const MODES = [
  { label: "Arpèges", value: "arpeggios" },
  { label: "Accords", value: "chords" },
  { label: "Mélodie", value: "melody" },
  { label: "Batterie", value: "drums" },
];

export default function ModeSelect({ value, onChange }: ModeSelectProps) {
  const selectedLabel = MODES.find((m) => m.value === value)?.label ?? value;
  const icon = value === "chords" ? <Piano className="h-5 w-5" /> : <Music3 className="h-5 w-5" />;

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-2 rounded-xl bg-[#121417] p-6 text-sm shadow-lg sm:text-base">
      <div className="flex items-center gap-2 text-white">
        {icon}
        <label htmlFor="mode-select" className="text-base font-semibold">
          Mode
        </label>
      </div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="mode-select"
          className="w-full rounded-md border border-zinc-700 bg-[#1c1d21] px-4 py-3 text-white focus:ring-2 focus:ring-[#E2768A]"
        >
          <SelectValue placeholder="Choisir un mode..." />
        </SelectTrigger>
        <SelectContent className="z-50 w-full rounded-md border border-zinc-700 bg-[#1c1d21] text-white">
          {MODES.map((mode) => (
            <SelectItem
              key={mode.value}
              value={mode.value}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-[#E2768A]/20"
            >
              {mode.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
