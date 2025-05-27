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
  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3 rounded-xl bg-gunmetal p-6 backdrop-blur-xl">
      <label
        htmlFor="music-genre"
        className="flex items-center gap-2 text-base font-semibold tracking-wide text-white"
      >
        <Music3 className="h-5 w-5 text-turquoise" />
        Genre musical
      </label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="music-genre"
          className="relative w-full rounded-md border-2 border-turquoise/30 bg-gunmetal px-4 py-3 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-turquoise"
        >
          <SelectValue placeholder="🎵 Choisir un genre..." />
        </SelectTrigger>

        <SelectContent className="z-50 w-full rounded-md border border-turquoise/20 bg-gunmetal/60 text-white backdrop-blur-xl">
          {GENRES.map((genre) => (
            <SelectItem
              key={genre.value}
              value={genre.value}
              className="cursor-pointer px-4 py-2 text-sm transition-all hover:bg-white/20 hover:font-semibold"
            >
              <span className="flex items-center justify-between">{genre.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
