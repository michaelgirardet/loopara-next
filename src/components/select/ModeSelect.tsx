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
  const icon =
    value === "chords" ? (
      <Piano className="h-5 w-5 text-turquoise" />
    ) : (
      <Music3 className="h-5 w-5 text-turquoise" />
    );

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3 rounded-xl bg-gunmetal p-6 backdrop-blur-xl">
      <label
        htmlFor="mode-select"
        className="flex items-center gap-2 text-base font-semibold tracking-wide text-white"
      >
        {icon}
        Mode
      </label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="mode-select"
          className="relative w-full rounded-md border-2 border-turquoise/30 bg-gunmetal px-4 py-3 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-turquoise"
        >
          <SelectValue placeholder="🎼 Choisir un mode..." />
        </SelectTrigger>

        <SelectContent className="z-50 w-full rounded-md border border-turquoise/20 bg-gunmetal/60 text-white backdrop-blur-xl">
          {MODES.map((mode) => (
            <SelectItem
              key={mode.value}
              value={mode.value}
              className="cursor-pointer px-4 py-2 text-sm transition-all hover:bg-white/20 hover:font-semibold"
            >
              <span className="flex items-center justify-between">{mode.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
