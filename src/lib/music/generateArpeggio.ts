import MidiWriter from "midi-writer-js";
import { buildChord } from "@/lib/modes/chords";
import { getArpeggioPattern } from "@/lib/modes/arpeggios";
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
 * Génère une séquence d'arpèges avec une durée minimale totale de 2 mesures.
 */
export const generateArpeggio = (
  scale: string[],
  progression: number[] | null,
  rhythms: string[],
  pattern: "up" | "down" | "updown" | "broken" = "up",
): NoteEvent[] => {
  if (!progression) return [];

  const events: NoteEvent[] = [];
  const MIN_TICKS = 1920 * 2;
  let totalTicks = 0;
  let progressionIndex = 0;

  // Répète la progression autant que nécessaire
  while (totalTicks < MIN_TICKS) {
    const degree = progression[progressionIndex % progression.length];
    const chord = buildChord(scale, degree);
    const motif = getArpeggioPattern(pattern, chord);

    for (let i = 0; i < motif.length; i++) {
      const note = motif[i];
      const duration = rhythms[i % rhythms.length];
      const ticks = DURATION_TICKS[duration] ?? 480;
      const velocity = Math.floor(Math.random() * 20 + 70);

      events.push(
        new MidiWriter.NoteEvent({
          pitch: [note],
          duration,
          velocity,
        }),
      );

      totalTicks += ticks;
      if (totalTicks >= MIN_TICKS) break;
    }

    progressionIndex++;
  }

  return applyHumanization(events);
};