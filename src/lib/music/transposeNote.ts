import { noteToMidiNumber } from "./noteToMidiNumber";
import { midiNumberToNoteName } from "./midiNumberToNoteName";

export function transposeNote(note: string, semitones: number): string {
  const midi = noteToMidiNumber(note);
  if (midi === null) return note;
  return midiNumberToNoteName(midi + semitones);
}
