import MidiWriter from "midi-writer-js";
import { drumPresets } from "@/lib/modes/drums";

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
 * Génère un pattern de batterie avec répétitions dynamiques jusqu’à 2 mesures minimum.
 */
export function generateDrumsTrack(
  style: keyof typeof drumPresets = "pop",
  rhythms: string[] = ["8"]
): NoteEvent[] {
  const events: NoteEvent[] = [];
  const baseGrid = drumPresets[style];
  if (!baseGrid) return [];

  const MIN_TICKS = 1920 * 2; // 🎯 Objectif = 2 mesures
  let totalTicks = 0;
  let stepIndex = 0;

  while (totalTicks < MIN_TICKS) {
    const step = baseGrid[stepIndex % baseGrid.length];
    const modified = [...step];

    // 🎛️ Variation sur le hi-hat (note MIDI F#2)
    if (Math.random() < 0.1 && modified.includes("F#2")) {
      modified.splice(modified.indexOf("F#2"), 1);
    }
    if (Math.random() < 0.1) {
      modified.push("F#2");
    }

    const notes = modified.filter(Boolean) as string[];
    const duration = rhythms[stepIndex % rhythms.length];
    const ticks = DURATION_TICKS[duration] ?? 240;

    for (const note of notes) {
      const velocity =
        note === "F#2"
          ? Math.floor(Math.random() * 10 + 40) // hat doux
          : Math.floor(Math.random() * 20 + 70); // kick/snare plus fort

      events.push(
        new MidiWriter.NoteEvent({
          pitch: [note],
          duration,
          velocity,
          channel: 10,
        })
      );
    }

    totalTicks += ticks;
    stepIndex++;
  }

  return events;
}
