import MidiWriter from "midi-writer-js";
import type { HumanizationOptions } from "@/types/types";

type NoteEvent = InstanceType<typeof MidiWriter.NoteEvent> & {
  startTick?: number;
};

export function applyHumanization(
  events: NoteEvent[],
  options: HumanizationOptions = {}
): NoteEvent[] {
  const {
    velocityRange = [50, 100],
    velocityVariation = 6,
    timingVariationTicks = 10,
    accentPattern = [],
  } = options;

  return events.map((event, i) => {
    const baseVelocity = event.velocity ?? 80;

    // 🎚 Accentuation (si fournie)
    const accentVelocity = accentPattern.length > 0
      ? accentPattern[i % accentPattern.length]
      : baseVelocity;

    // 🎛 Vélocité ajustée
    const variedVelocity = accentVelocity + Math.floor(Math.random() * (2 * velocityVariation + 1) - velocityVariation);
    const clampedVelocity = Math.max(velocityRange[0], Math.min(velocityRange[1], variedVelocity));

    // ⏱ Décalage aléatoire du startTick
    const offset = Math.floor(Math.random() * (2 * timingVariationTicks + 1) - timingVariationTicks);
    const adjustedStartTick = event.startTick !== undefined
      ? Math.max(0, event.startTick + offset)
      : undefined;

    return new MidiWriter.NoteEvent({
      ...event,
      velocity: clampedVelocity,
      ...(adjustedStartTick !== undefined && { startTick: adjustedStartTick }),
    });
  });
}
