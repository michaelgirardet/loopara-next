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
  const selectedLabel = SCALE_TYPES.find((s) => s.value === value)?.label ?? value;

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-2 rounded-xl bg-[#121417] p-6 text-sm shadow-lg sm:text-base">
      <div className="flex items-center gap-2 text-white">
        {value === "major" ? <Smile className="h-5 w-5" /> : <Meh className="h-5 w-5" />}
        <label htmlFor="scale-type-select" className="text-base font-semibold">
          Type de gamme
        </label>
      </div>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="scale-type-select"
          className="w-full rounded-md border border-zinc-700 bg-[#1c1d21] px-4 py-3 text-white focus:ring-2 focus:ring-[#E2768A]"
        >
          <SelectValue placeholder="Choisir un type" />
        </SelectTrigger>
        <SelectContent className="bg-[#1c1d21] text-white">
          {SCALE_TYPES.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
