import MidiWriter from "midi-writer-js";
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
 * Convertit une durée MIDI (ex: "4") en nombre de ticks.
 */
function durationToTicks(duration: string): number {
  return DURATION_TICKS[duration] ?? 480; // défaut : noire
}

/**
 * Génère une piste de mélodie avec une durée minimale garantie (en ticks).
 */
export function generateMelody(
  scale: string[],
  _noteCount: number, // Ignoré ici
  rhythms: string[],
  progression?: number[],
): NoteEvent[] {
  const MIN_OCTAVE = 4;
  const MAX_OCTAVE = 5;
  const MIN_TICKS = 1920 * 2; // 🕐 minimum 2 mesures
  let totalTicks = 0;

  const shiftedScale: string[] = [];
  for (let octave = MIN_OCTAVE; octave <= MAX_OCTAVE; octave++) {
    for (const note of scale) {
      shiftedScale.push(note.replace(/\d/, `${octave}`));
    }
  }

  const generateMotif = (chordNotes: string[]): string[] => {
    const motif: string[] = [];
    for (let i = 0; i < 3; i++) {
      const note = chordNotes[Math.floor(Math.random() * chordNotes.length)];
      const octaveNote = note.replace(
        /\d/,
        () =>
          `${Math.floor(Math.random() * (MAX_OCTAVE - MIN_OCTAVE + 1)) + MIN_OCTAVE}`,
      );
      motif.push(octaveNote);
    }
    return motif;
  };

  const baseProgression =
    progression ??
    Array.from({ length: 4 }, () => Math.floor(Math.random() * scale.length));

  const events: NoteEvent[] = [];

  while (totalTicks < MIN_TICKS) {
    for (const degree of baseProgression) {
      const chord = buildChord(scale, degree);
      const motif = generateMotif(chord);

      for (const note of motif) {
        const duration = rhythms[Math.floor(Math.random() * rhythms.length)];
        const ticks = durationToTicks(duration);
        totalTicks += ticks;

        events.push(
          new MidiWriter.NoteEvent({
            pitch: [note],
            duration,
            velocity: Math.floor(Math.random() * 20 + 70),
          }),
        );

        if (totalTicks >= MIN_TICKS) break;
      }
      if (totalTicks >= MIN_TICKS) break;
    }
  }

  return applyHumanization(events);
}