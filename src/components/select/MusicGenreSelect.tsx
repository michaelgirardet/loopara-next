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
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-xl bg-eerie/80 p-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-2 text-misty">
        <Music3 className="h-5 w-5" />
        <label htmlFor="music-genre" className="text-base font-semibold tracking-wide">
          Genre musical
        </label>
      </div>
  
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="music-genre"
          className="w-full rounded-md border border-misty/30 bg-noir px-4 py-3 text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate"
        >
          <SelectValue placeholder="Choisir un genre..." />
        </SelectTrigger>
  
        <SelectContent className="z-50 w-full rounded-md border border-misty/20 bg-eerie/60 backdrop-blur-xl text-white shadow-lg">
          {GENRES.map((genre) => (
            <SelectItem
              key={genre.value}
              value={genre.value}
              className="cursor-pointer px-4 py-2 text-sm transition-colors duration-150 hover:bg-slate/20 hover:text-misty"
            >
              {genre.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
  
}
