import { Smile, Meh } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface ScaleTypeSelectProps {
  value: "major" | "minor";
  onChange: (value: "major" | "minor") => void;
}

const SCALE_TYPES = [
  { label: "Majeure", value: "major" },
  { label: "Mineure", value: "minor" },
];

export default function ScaleTypeSelect({ value, onChange }: ScaleTypeSelectProps) {
  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3 rounded-xl bg-gunmetal p-6 backdrop-blur-xl">
      <label
        htmlFor="scale-type-select"
        className="flex items-center gap-2 text-base font-semibold tracking-wide text-white"
      >
        {value === "major" ? (
          <Smile className="h-5 w-5 text-turquoise" />
        ) : (
          <Meh className="h-5 w-5 text-turquoise" />
        )}
        Type de gamme
      </label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="scale-type-select"
          className="relative w-full rounded-md border-2 border-turquoise/30 bg-gunmetal px-4 py-3 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-turquoise"
        >
          <SelectValue placeholder="🎼 Choisir un type" />
        </SelectTrigger>

        <SelectContent className="z-50 w-full rounded-md border border-turquoise/20 bg-gunmetal/60 text-white backdrop-blur-xl">
          {SCALE_TYPES.map((type) => (
            <SelectItem
              key={type.value}
              value={type.value}
              className="cursor-pointer px-4 py-2 text-sm transition-all hover:bg-white/20 hover:font-semibold"
            >
              <span className="flex items-center justify-between">{type.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
