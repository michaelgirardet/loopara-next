import MidiWriter from "midi-writer-js";
import { buildChord } from "@/lib/modes/chords";
import { getArpeggioPattern } from "@/lib/modes/arpeggios";
import { applyHumanization } from "@/lib/music/applyHumanization";
import { genreArpeggioPatterns } from "../config/arpeggio-patterns";


type NoteEvent = InstanceType<typeof MidiWriter.NoteEvent>;

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
  rhythms: string[],
  pattern: "up" | "down" | "updown" | "broken" | "auto" = "up",
  genre?: string 
): NoteEvent[] => {
  if (!progression) return [];

  const events: NoteEvent[] = [];
  const MIN_TICKS = 1920 * 2;
  let totalTicks = 0;
  let progressionIndex = 0;
  const MAX_INVERSION = 2;

   // 🎛 Sélection automatique de motif si "auto"
   let effectivePattern = pattern;
   if (pattern === "auto" && genre) {
     const patterns = genreArpeggioPatterns[genre] ?? ["up"];
     effectivePattern = patterns[Math.floor(Math.random() * patterns.length)] as "up" | "down" | "updown" | "broken";
   }

  while (totalTicks < MIN_TICKS) {
    const degree = progression[progressionIndex % progression.length];

    // 🎵 Voicing enrichi : ajout d'inversion aléatoire
    const inversion = Math.floor(Math.random() * (MAX_INVERSION + 1));
    const chord = buildChord(scale, degree, {
      extensions: ["7"],
      inversion,
      voicing: "open",
    });

    const motif = getArpeggioPattern(effectivePattern as "up" | "down" | "updown" | "broken" | "rolling" | "pingpong" | "jump" | "trill", chord);

    let localTicks = 0;
    for (let i = 0; i < motif.length; i++) {
      const note = motif[i];
      const duration = rhythms[i % rhythms.length];
      const ticks = DURATION_TICKS[duration] ?? 480;

      // 🎛 Velocity expressive (pyramide)
      const velocity = 60 + Math.floor(20 * Math.sin((Math.PI * i) / motif.length));

      // 🎵 Start offset (léger groove)
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
