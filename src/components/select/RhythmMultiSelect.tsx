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
    <div className="flex w-full max-w-sm flex-col items-center gap-2 rounded-xl bg-[#121417] p-6 text-sm shadow-lg sm:text-base">
      <div className="flex items-center gap-2 text-white">
        <Guitar className="h-5 w-5" />
        <label htmlFor="rhythm-select" className="text-base font-semibold">
          Durées rythmiques
        </label>
      </div>
      <MultiSelect value={value} onValueChange={onChange}>
        <MultiSelectTrigger
          id="rhythm-select"
          className="w-full rounded-md border border-zinc-700 bg-[#1c1d21] px-4 py-3 text-white focus:ring-2 focus:ring-[#E2768A]"
        >
          <MultiSelectValue placeholder="Choisir des durées..." />
        </MultiSelectTrigger>
        <MultiSelectContent className="z-50 w-full rounded-md border border-zinc-700 bg-[#1c1d21] text-white">
          {RHYTHM_OPTIONS.map((option) => (
            <MultiSelectItem
              key={option.value}
              value={option.value}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-[#E2768A]/20"
            >
              {option.label}
            </MultiSelectItem>
          ))}
        </MultiSelectContent>
      </MultiSelect>
    </div>
  );
}
