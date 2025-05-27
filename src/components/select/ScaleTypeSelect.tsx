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
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-xl bg-eerie/80 p-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-2 text-white">
        {value === "major" ? <Smile className="h-5 w-5" /> : <Meh className="h-5 w-5" />}
        <label htmlFor="scale-type-select" className="text-base font-semibold tracking-wide">
          Type de gamme
        </label>
      </div>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="scale-type-select"
          className="w-full rounded-md border border-misty/30 bg-gunmetal px-4 py-3 text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-turquoise"
        >
          <SelectValue placeholder="Choisir un type" />
        </SelectTrigger>
        <SelectContent className="z-50 w-full rounded-md border border-misty/20 bg-eerie/60 text-white shadow-lg backdrop-blur-xl">
          {SCALE_TYPES.map((type) => (
            <SelectItem
              key={type.value}
              value={type.value}
              className="cursor-pointer px-4 py-2 text-sm transition-colors duration-150 hover:bg-turquoise/20 hover:text-white"
            >
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
