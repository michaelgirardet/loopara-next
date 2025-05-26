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
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-xl bg-eerie/80 p-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-2 text-misty">
        <Music2 className="h-5 w-5" />
        <label htmlFor="note-select" className="text-base font-semibold tracking-wide">
          Note racine
        </label>
      </div>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="note-select"
          className="w-full rounded-md border border-misty/30 bg-noir px-4 py-3 text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald"
        >
          <SelectValue placeholder="Sélectionner une note" />
        </SelectTrigger>
        <SelectContent className="z-50 w-full rounded-md border border-misty/20 bg-eerie/60 backdrop-blur-xl text-white shadow-lg placeholder:white">
          {NOTES.map((note) => (
            <SelectItem key={note} value={note} className="uppercase cursor-pointer px-4 py-2 text-sm transition-colors duration-150 hover:bg-emerald/20 hover:text-misty">
              {note}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
