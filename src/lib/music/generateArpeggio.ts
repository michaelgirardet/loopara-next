import { sanitizerhythm } from "@/lib/music/sanitizeRhythms";
import { applyHumanization } from "./applyHumanization";
import { getArpeggioPattern } from "../modes/arpeggios";
import { buildChord } from "../modes/chords";
import { genreArpeggioPatterns } from "../config/arpeggio-patterns";
import type { NoteEvent } from "midi-writer-js/build/types/midi-events/note-event";
import MidiWriter from "midi-writer-js";

const DURATION_TICKS: Record<string, number> = {
  "1": 1920,
  "2": 960,
  "4": 480,
  "8": 240,
  "16": 120,
  "32": 60,
};

export const generateArpeggio = (
  scale: string[],
  progression: number[] | null,
  rhythm: string[],
  pattern: "up" | "down" | "updown" | "broken" | "auto" = "up",
  genre?: string
): NoteEvent[] => {
  if (!progression) return [];

  const events: NoteEvent[] = [];
  const MIN_TICKS = 1920 * 2;
  let totalTicks = 0;
  let progressionIndex = 0;
  const MAX_INVERSION = 2;

  // 🎛 Motif automatique basé sur le genre
  let effectivePattern = pattern;
  if (pattern === "auto" && genre) {
    const patterns = genreArpeggioPatterns[genre] ?? ["up"];
    effectivePattern = patterns[Math.floor(Math.random() * patterns.length)] as typeof pattern;
  }

  const saferhythm = sanitizerhythm(rhythm);

  while (totalTicks < MIN_TICKS) {
    const degree = progression[progressionIndex % progression.length];

    const inversion = Math.floor(Math.random() * (MAX_INVERSION + 1));
    const chord = buildChord(scale, degree, {
      extensions: ["7"],
      inversion,
    });

    const motif = getArpeggioPattern(
      effectivePattern as
        | "up"
        | "down"
        | "updown"
        | "broken"
        | "rolling"
        | "pingpong"
        | "jump"
        | "trill",
      chord
    );

    let localTicks = 0;
    for (let i = 0; i < motif.length; i++) {
      const note = motif[i];
      const duration = saferhythm[i % saferhythm.length];
      const ticks = DURATION_TICKS[duration] ?? 480;

      const velocity = 60 + Math.floor(20 * Math.sin((Math.PI * i) / motif.length));
      const swingOffset = i % 2 === 1 ? ticks * 0.1 : 0;

      events.push(
        new MidiWriter.NoteEvent({
          pitch: [note],
          duration,
          velocity,
          startTick: totalTicks + localTicks + swingOffset,
        })
      );

      localTicks += ticks;
      if (totalTicks + localTicks >= MIN_TICKS) break;
    }

    totalTicks += localTicks;
    progressionIndex++;
  }

  return applyHumanization(events);
};
