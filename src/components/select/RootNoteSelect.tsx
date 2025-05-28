import { Music2 } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface RootNoteSelectProps {
  value: string;
  onChange: (note: string) => void;
}

const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export default function RootNoteSelect({ value, onChange }: RootNoteSelectProps) {
  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3 rounded-xl bg-gunmetal p-6 backdrop-blur-xl">
      <label
        htmlFor="note-select"
        className="flex items-center gap-2 text-base font-semibold tracking-wide text-white"
      >
        <Music2 className="h-5 w-5 text-turquoise" />
        Note racine
      </label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="note-select"
          className="relative w-full rounded-md border-2 border-turquoise/30 bg-gunmetal px-4 py-3 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-turquoise"
        >
          <SelectValue placeholder="🎹 Sélectionner une note" />
        </SelectTrigger>

        <SelectContent className="z-50 w-full rounded-md border border-turquoise/20 bg-gunmetal/60 text-white backdrop-blur-xl">
          {NOTES.map((note) => (
            <SelectItem
              key={note}
              value={note}
              className="cursor-pointer px-4 py-2 text-sm uppercase transition-all hover:bg-white/20 hover:font-semibold"
            >
              <span className="flex items-center justify-between">{note}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
