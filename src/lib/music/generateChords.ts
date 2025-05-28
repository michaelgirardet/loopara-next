import MidiWriter from "midi-writer-js";
import { noteToMidiNumber } from "@/lib/music/noteToMidiNumber";
import { buildChord } from "@/lib/modes/chords";
import { applyHumanization } from "@/lib/music/applyHumanization";
import { midiNumberToNoteName } from "./midiNumberToNoteName";
import { humanizationPresets } from "../config/humanization-presets";

type NoteEvent = InstanceType<typeof MidiWriter.NoteEvent>;

const DURATION_TICKS: Record<string, number> = {
  "1": 1920,
  "2": 960,
  "4": 480,
  "8": 240,
  "16": 120,
  "32": 60,
};

const MIN_TICKS = 1920 * 2;
const MIN_OCTAVE = 3;
const MAX_OCTAVE = 5;

export function generateChords(
  scale: string[],
  noteCount: number,
  rhythm: string[],
  progression: number[] | null,
  genre: string
): NoteEvent[] {
  const events: NoteEvent[] = [];
  const saferhythm = rhythm && rhythm.length > 0 ? rhythm : ["4"];
  let totalTicks = 0;

  // Étendre la gamme
  const shiftedScale: string[] = [];
  for (let octave = MIN_OCTAVE; octave <= MAX_OCTAVE; octave++) {
    for (const note of scale) {
      shiftedScale.push(note.replace(/\d$/, `${octave}`));
    }
  }

  const playableScale = shiftedScale.filter((note) => {
    const midi = noteToMidiNumber(note);
    return midi !== null && midi >= 36 && midi <= 84;
  });

  const baseProgression =
    progression ??
    Array.from({ length: Math.floor(noteCount / 3) }, () => Math.floor(Math.random() * 7));

  let progressionIndex = 0;
  let previousChord: string[] | null = null;

  while (totalTicks < MIN_TICKS) {
    const degree = baseProgression[progressionIndex % baseProgression.length];

    const inversion = Math.floor(Math.random() * 3);
    const chord = buildChord(playableScale, degree, {
      extensions: ["7"],
      inversion,
      voicing: "drop2",
    });

    // Transposition pour adoucir les sauts
    if (previousChord) {
      const lastNote = noteToMidiNumber(previousChord[0]) ?? 60;
      const firstNote = noteToMidiNumber(chord[0]) ?? 60;
      const diff = firstNote - lastNote;
      if (Math.abs(diff) > 7) {
        const shift = diff > 0 ? -12 : 12;
        for (let i = 0; i < chord.length; i++) {
          const midi = noteToMidiNumber(chord[i]);
          if (midi !== null) {
            const shiftedMidi = midi + shift;
            if (shiftedMidi >= 36 && shiftedMidi <= 84) {
              chord[i] = midiNumberToNoteName(shiftedMidi);
            }
          }
        }
      }
    }

    const duration = saferhythm[progressionIndex % saferhythm.length];
    const ticks = DURATION_TICKS[duration] ?? 480;

    events.push(
      new MidiWriter.NoteEvent({
        pitch: chord,
        duration,
        velocity: Math.floor(Math.random() * 15 + 75),
      })
    );

    previousChord = chord;
    totalTicks += ticks;
    progressionIndex++;
  }

  // ✅ Humaniser les événements une fois tous ajoutés
  return applyHumanization(events, humanizationPresets[genre] ?? {});
}
