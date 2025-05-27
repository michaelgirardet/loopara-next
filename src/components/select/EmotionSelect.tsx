"use client";

import { Heart } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const EMOTION_OPTIONS = [
  { label: "Heureux", value: "happy" },
  { label: "Triste", value: "sad" },
  { label: "Rêveur", value: "dreamy" },
  { label: "Tendu", value: "tense" },
  { label: "Mélancolique", value: "melancholic" },
  { label: "Énergique", value: "uplifting" },
];

interface EmotionSelectProps {
  value: string;
  onChange: (selected: string) => void;
}

export default function EmotionSelect({ value, onChange }: EmotionSelectProps) {
  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3 rounded-xl bg-gunmetal p-6 backdrop-blur-xl">
      <label
        htmlFor="emotion-select"
        className="flex items-center gap-2 text-base font-semibold tracking-wide text-white"
      >
        <Heart className="h-5 w-5 text-turquoise" />
        Émotion musicale
      </label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="emotion-select"
          className="relative w-full rounded-md border-2 border-turquoise/30 bg-gunmetal px-4 py-3 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-turquoise"
        >
          <SelectValue placeholder="Choisir une émotion..." />
        </SelectTrigger>

        <SelectContent className="z-50 w-full rounded-md border border-turquoise/20 bg-gunmetal/60 text-white backdrop-blur-xl">
          {EMOTION_OPTIONS.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="cursor-pointer px-4 py-2 text-sm transition-all hover:bg-white/20 hover:font-semibold"
            >
              <span className="flex items-center justify-between">{option.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
