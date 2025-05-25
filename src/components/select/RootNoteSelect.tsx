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
    <div className="flex w-full max-w-sm flex-col items-center gap-2 rounded-xl bg-[#121417] p-6 text-sm shadow-lg sm:text-base">
      <div className="flex items-center gap-2 text-white">
        <Music2 className="h-5 w-5" />
        <label htmlFor="note-select" className="text-base font-semibold">
          Note racine
        </label>
      </div>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="note-select"
          className="w-full rounded-md border border-zinc-700 bg-[#1c1d21] px-4 py-3 text-white focus:ring-2 focus:ring-[#E2768A]"
        >
          <SelectValue placeholder="Sélectionner une note" />
        </SelectTrigger>
        <SelectContent className="bg-[#1c1d21] text-white">
          {NOTES.map((note) => (
            <SelectItem key={note} value={note} className="uppercase">
              {note}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
