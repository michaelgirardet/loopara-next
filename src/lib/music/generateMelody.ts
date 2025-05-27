import MidiWriter from "midi-writer-js";
import { buildChord } from "@/lib/modes/chords";
import { applyHumanization } from "@/lib/music/applyHumanization";
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

function durationToTicks(duration: string): number {
  return DURATION_TICKS[duration] ?? 480;
}

const MIN_OCTAVE = 4;
const MAX_OCTAVE = 5;
const MIN_TICKS = 1920 * 2;

function getShiftedScale(scale: string[]): string[] {
  const shifted: string[] = [];
  for (let octave = MIN_OCTAVE; octave <= MAX_OCTAVE; octave++) {
    for (const note of scale) {
      shifted.push(note.replace(/\d/, `${octave}`));
    }
  }
  return shifted;
}

function generateMotif(chordNotes: string[], motifLength = 4): string[] {
  const motif: string[] = [];

  // 1. Choisir une note de départ dans l'accord
  let index = Math.floor(Math.random() * chordNotes.length);
  const direction = Math.random() > 0.5 ? 1 : -1;

  for (let i = 0; i < motifLength; i++) {
    const note = chordNotes[Math.max(0, Math.min(index, chordNotes.length - 1))];
    const octave = Math.floor(Math.random() * (MAX_OCTAVE - MIN_OCTAVE + 1)) + MIN_OCTAVE;
    motif.push(note.replace(/\d/, `${octave}`));

    // Mouvement mélodique : monter ou descendre dans l'accord
    index += direction;
  }

  return motif;
}

export function generateMelody(
  scale: string[],
  _noteCount: number,
  rhythms: string[],
  genre: string,
  progression?: number[]
): NoteEvent[] {
  const safeRhythms = rhythms && rhythms.length > 0 ? rhythms : ["4"];
  let totalTicks = 0;
  const shiftedScale = getShiftedScale(scale);
  const baseProgression =
    progression ?? Array.from({ length: 4 }, () => Math.floor(Math.random() * scale.length));

  const events: NoteEvent[] = [];

  while (totalTicks < MIN_TICKS) {
    for (let i = 0; i < baseProgression.length; i++) {
      const degree = baseProgression[i];
      const chord = buildChord(scale, degree);
      const motif = generateMotif(chord, 4);

      for (let j = 0; j < motif.length; j++) {
        const note = motif[j];
        const isLastNote = (i === baseProgression.length - 1) && (j === motif.length - 1);

        const duration = safeRhythms[i % safeRhythms.length];
        const ticks = durationToTicks(duration);
        totalTicks += ticks;

        // Résolution : termine sur la tonique ou dominante
        const pitch = isLastNote
          ? [shiftedScale[0], shiftedScale[4]][Math.floor(Math.random() * 2)]
          : note;

        events.push(
          new MidiWriter.NoteEvent({
            pitch: [pitch],
            duration,
            velocity: Math.floor(Math.random() * 15 + 75),
          })
        );

        if (totalTicks >= MIN_TICKS) break;
      }

      if (totalTicks >= MIN_TICKS) break;
    }
  }

  const preset = genre ? humanizationPresets[genre] : undefined;
  return applyHumanization(events, preset);
}
