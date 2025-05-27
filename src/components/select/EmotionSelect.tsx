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
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-xl bg-eerie/80 p-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-2 text-white">
        <Heart className="h-5 w-5" />
        <label htmlFor="emotion-select" className="text-base font-semibold tracking-wide">
          Émotion musicale
        </label>
      </div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="emotion-select"
          className="w-full rounded-md border border-misty/30 bg-gunmetal px-4 py-3 text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-turquoise"
        >
          <SelectValue placeholder="Choisir une émotion..." />
        </SelectTrigger>
        <SelectContent className="z-50 w-full rounded-md border border-misty/20 bg-eerie/60 text-white shadow-lg backdrop-blur-xl">
          {EMOTION_OPTIONS.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="cursor-pointer px-4 py-2 text-sm transition-colors duration-150 hover:bg-turquoise/20 hover:text-white"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
