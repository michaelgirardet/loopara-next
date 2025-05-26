import { Guitar } from "lucide-react";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";

interface RhythmMultiSelectProps {
  value: string[];
  onChange: (selected: string[]) => void;
}

const RHYTHM_OPTIONS = [
  { label: "Croche", value: "8" },
  { label: "Noire", value: "4" },
  { label: "Blanche", value: "2" },
];

export default function RhythmMultiSelect({ value, onChange }: RhythmMultiSelectProps) {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-xl bg-eerie/80 p-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-2 text-white">
        <Guitar className="h-5 w-5" />
        <label htmlFor="rhythm-select" className="text-base font-semibold tracking-wide">
          Durées rythmiques
        </label>
      </div>
      <MultiSelect value={value} onValueChange={onChange}>
        <MultiSelectTrigger
          id="rhythm-select"
          className="w-full rounded-md border border-misty/30 bg-noir px-4 py-3 text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-keppel"
        >
          <MultiSelectValue placeholder="Choisir des durées..." />
        </MultiSelectTrigger>
        <MultiSelectContent className="z-50 w-full rounded-md border border-misty/20 bg-eerie/60 text-white shadow-lg backdrop-blur-xl">
          {RHYTHM_OPTIONS.map((option) => (
            <MultiSelectItem
              key={option.label}
              value={option.value}
              className="cursor-pointer px-4 py-2 text-sm transition-colors duration-150 hover:bg-keppel/20 hover:text-white"
            >
              {option.label}
            </MultiSelectItem>
          ))}
        </MultiSelectContent>
      </MultiSelect>
    </div>
  );
}
