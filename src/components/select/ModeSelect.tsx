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
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-xl bg-eerie/80 p-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-2 text-misty">
        {icon}
        <label htmlFor="mode-select" className="text-base font-semibold tracking-wide">
          Mode
        </label>
      </div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="mode-select"
          className="w-full rounded-md border border-misty/30 bg-noir px-4 py-3 text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-keppel"
        >
          <SelectValue placeholder="Choisir un mode..." />
        </SelectTrigger>
        <SelectContent className="z-50 w-full rounded-md border border-misty/20 bg-eerie/60 backdrop-blur-xl text-white shadow-lg">
          {MODES.map((mode) => (
            <SelectItem
              key={mode.value}
              value={mode.value}
              className="cursor-pointer px-4 py-2 text-sm transition-colors duration-150 hover:bg-keppel/20 hover:text-misty"
            >
              {mode.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
