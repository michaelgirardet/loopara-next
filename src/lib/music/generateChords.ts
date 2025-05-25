import MidiWriter from "midi-writer-js";
import { noteToMidiNumber } from "@/lib/music/noteToMidiNumber";
import { buildChord } from "@/lib/modes/chords";
import { applyHumanization } from "@/lib/music/applyHumanization";

type NoteEvent = InstanceType<typeof MidiWriter.NoteEvent>;

const DURATION_TICKS: Record<string, number> = {
  "1": 1920,
  "2": 960,
  "4": 480,
  "8": 240,
  "16": 120,
  "32": 60,
};

/**
 * Génère une piste d’accords à partir d’une gamme et d’une progression.
 * Répète si besoin pour atteindre 2 mesures minimum.
 */
export function generateChords(
  scale: string[],
  noteCount: number,
  rhythms: string[],
  progression: number[] | null
): NoteEvent[] {
  const MIN_OCTAVE = 3;
  const MAX_OCTAVE = 5;
  const MIN_TICKS = 1920 * 2; // 🎯 Objectif : 2 mesures
  let totalTicks = 0;

  const shiftedScale: string[] = [];

  // Étend la gamme
  for (let octave = MIN_OCTAVE; octave <= MAX_OCTAVE; octave++) {
    for (const note of scale) {
      shiftedScale.push(note.replace(/\d$/, octave.toString()));
    }
  }

  // Filtre les notes jouables
  const playableScale = shiftedScale.filter((note) => {
    const midi = noteToMidiNumber(note);
    return midi !== null && midi >= 21 && midi <= 108;
  });

  const events: NoteEvent[] = [];
  const baseProgression =
    progression ??
    Array.from({ length: Math.floor(noteCount / 3) }, () => Math.floor(Math.random() * 7));

  let progressionIndex = 0;

  while (totalTicks < MIN_TICKS) {
    const degree = baseProgression[progressionIndex % baseProgression.length];

    const chord = buildChord(playableScale, degree, {
      extensions: ["7"],
      octaveShift: 0,
      inversion: 0,
    });

    const duration = rhythms[progressionIndex % rhythms.length];
    const ticks = DURATION_TICKS[duration] ?? 480;

    events.push(
      new MidiWriter.NoteEvent({
        pitch: chord,
        duration,
        velocity: Math.floor(Math.random() * 20 + 70),
      })
    );

    totalTicks += ticks;
    progressionIndex++;
  }

  return applyHumanization(events);
}
