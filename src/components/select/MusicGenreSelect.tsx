import { Music3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const GENRES = [
  { label: "Pop", value: "pop" },
  { label: "Lo-fi", value: "lofi" },
  { label: "House", value: "house" },
  { label: "Trap", value: "trap" },
  { label: "Hip-hop", value: "hiphop" },
  { label: "Techno", value: "techno" },
  { label: "Funk", value: "funk" },
  { label: "Dub", value: "dub" },
  { label: "Reggaeton", value: "reggaeton" },
];

interface MusicGenreSelectProps {
  value: string;
  onChange: (genre: string) => void;
}

export default function MusicGenreSelect({ value, onChange }: MusicGenreSelectProps) {
  const selected = GENRES.find((g) => g.value === value)?.label ?? value;

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-2 rounded-xl bg-[#121417] p-6 text-sm shadow-lg sm:text-base">
      <div className="flex items-center gap-2 text-white">
        <Music3 className="h-5 w-5" />
        <label htmlFor="music-genre" className="text-base font-semibold">
          Genre musical
        </label>
      </div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="music-genre"
          className="w-full rounded-md border border-zinc-700 bg-[#1c1d21] px-4 py-3 text-white focus:ring-2 focus:ring-[#E2768A]"
        >
          <SelectValue placeholder="Choisir un genre..." />
        </SelectTrigger>
        <SelectContent className="z-50 w-full rounded-md border border-zinc-700 bg-[#1c1d21] text-white">
          {GENRES.map((genre) => (
            <SelectItem
              key={genre.value}
              value={genre.value}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-[#E2768A]/20"
            >
              {genre.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
