// drumPresets.ts
import type { DrumPreset } from "@/types/types";

export const drumPresets: Record<string, DrumPreset> = {
  pop: {
    grid: [
      ["C2", "F#2"],
      ["F#2"],
      ["D2", "F#2"],
      ["F#2"],
      ["C2", "F#2"],
      ["F#2"],
      ["D2", "F#2"],
      ["F#2"],
    ],
    swing: 0.52,
    ghostNotes: false,
    hatVariation: true,
    velocityRange: [65, 100],
    fillFrequency: 0.2,
  },

  lofi: {
    grid: [["C2"], [], ["D2"], ["F#2"], [], ["C2"], ["F#2"], []],
    swing: 0.56,
    ghostNotes: true,
    hatVariation: true,
    velocityRange: [40, 80],
    fillFrequency: 0.15,
  },

  house: {
    grid: [
      ["C2", "F#2"],
      ["F#2"],
      ["C2", "F#2"],
      ["F#2"],
      ["C2", "F#2"],
      ["F#2"],
      ["C2", "F#2"],
      ["F#2"],
    ],
    swing: 0.5,
    ghostNotes: false,
    hatVariation: false,
    velocityRange: [75, 110],
    fillFrequency: 0.1,
  },

  techno: {
    grid: [["C2"], [], ["C2"], [], ["C2"], [], ["C2"], []],
    swing: 0.48,
    ghostNotes: false,
    hatVariation: false,
    velocityRange: [90, 120],
    fillFrequency: 0.05,
  },

  hiphop: {
    grid: [["C2"], [], ["D2"], [], ["C2"], ["F#2"], ["D2"], []],
    swing: 0.55,
    ghostNotes: true,
    hatVariation: true,
    velocityRange: [60, 100],
    fillFrequency: 0.25,
  },

  trap: {
    grid: [["C2"], ["F#2"], ["D2"], ["F#2"], ["C2"], ["F#2", "F#2"], ["D2"], ["F#2"]],
    swing: 0.53,
    ghostNotes: true,
    hatVariation: true,
    velocityRange: [50, 100],
    fillFrequency: 0.3,
  },

  reggaeton: {
    grid: [["C2"], [], ["D2"], [], ["C2"], ["D2"], [], ["D2"]],
    swing: 0.52,
    ghostNotes: false,
    hatVariation: false,
    velocityRange: [70, 110],
    fillFrequency: 0.1,
  },

  funk: {
    grid: [
      ["C2", "F#2"],
      ["F#2"],
      ["D2", "F#2"],
      ["F#2"],
      ["C2", "F#2"],
      ["F#2"],
      ["D2", "F#2"],
      ["F#2"],
    ],
    swing: 0.58,
    ghostNotes: true,
    hatVariation: true,
    velocityRange: [65, 110],
    fillFrequency: 0.35,
  },

  dub: {
    grid: [["C2"], ["F#2"], [], ["F#2"], [], ["D2"], [], ["F#2"]],
    swing: 0.54,
    ghostNotes: true,
    hatVariation: false,
    velocityRange: [50, 90],
    fillFrequency: 0.2,
  },
};
