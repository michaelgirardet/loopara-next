import MidiWriter from "midi-writer-js";
import { drumPresets } from "@/lib/modes/drums";
import { humanizationPresets } from "@/lib/config/humanization-presets";
import { applyHumanization } from "./applyHumanization";

type NoteEvent = InstanceType<typeof MidiWriter.NoteEvent>;

const DURATION_TICKS: Record<string, number> = {
  "1": 1920,
  "2": 960,
  "4": 480,
  "8": 240,
  "16": 120,
  "32": 60,
};

export function generateDrumsTrack(
  style: keyof typeof drumPresets = "pop",
  rhythm: string[] = ["16"]
): NoteEvent[] {
  const events: NoteEvent[] = [];
  const preset = drumPresets[style];
  if (!preset || !preset.grid) return [];

  const {
    grid,
    swing = 0.5,
    ghostNotes = false,
    hatVariation = false,
    velocityRange = [70, 100],
    fillFrequency = 0,
  } = preset;

  const MIN_TICKS = 1920 * 2;
  let totalTicks = 0;
  let stepIndex = 0;
  const stepLength = DURATION_TICKS[rhythm[0]] ?? 120;

  while (totalTicks < MIN_TICKS) {
    const step = grid[stepIndex % grid.length];
    const modified = [...step];

    // 🎛️ Hi-hat variation
    if (hatVariation) {
      if (Math.random() < 0.1) {
        const index = modified.indexOf("F#2");
        if (index !== -1) modified.splice(index, 1);
      }
      if (Math.random() < 0.1) {
        modified.push("F#2");
      }
    }

    // 🥁 Ghost notes
    if (ghostNotes && stepIndex % 2 === 1 && Math.random() < 0.3) {
      modified.push("D1");
    }

    // 🌀 Fills
    if (fillFrequency > 0 && stepIndex > 0 && stepIndex % 8 === 7) {
      if (Math.random() < fillFrequency) {
        modified.push("F3");
      }
    }

    const duration = rhythm[stepIndex % rhythm.length]; // ✅ Ajouté

    for (const note of modified.filter(Boolean) as string[]) {
      let velocity = Math.floor(
        Math.random() * (velocityRange[1] - velocityRange[0]) + velocityRange[0]
      );

      if (note === "F#2") {
        velocity = Math.floor(Math.random() * 10 + 40);
      }

      if (note === "D1") {
        velocity = Math.floor(Math.random() * 10 + 30);
      }

      const isSwung = duration === "16" && stepIndex % 2 === 1;
      const swingOffset = isSwung ? stepLength * (swing - 0.5) : 0;

      events.push(
        new MidiWriter.NoteEvent({
          pitch: [note],
          duration,
          velocity,
          channel: 10,
          startTick: totalTicks + swingOffset,
        })
      );
    }

    totalTicks += stepLength;
    stepIndex++;
  }
  // ✅ Humanisation après génération complète
  return applyHumanization(events, humanizationPresets[style] ?? {});
}
