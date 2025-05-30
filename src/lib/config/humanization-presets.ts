import type { HumanizationOptions } from "../../types/types";

export const humanizationPresets: Record<string, HumanizationOptions> = {
  pop: {
    velocityRange: [65, 100],
    velocityVariation: 5,
    timingVariationTicks: 6,
    accentPattern: [100, 80, 90, 80],
  },

  lofi: {
    velocityRange: [50, 90],
    velocityVariation: 10,
    timingVariationTicks: 15,
    accentPattern: [85, 75, 80, 70],
  },

  house: {
    velocityRange: [70, 100],
    velocityVariation: 3,
    timingVariationTicks: 4,
    accentPattern: [100, 90, 100, 90],
  },

  techno: {
    velocityRange: [80, 110],
    velocityVariation: 2,
    timingVariationTicks: 2,
    accentPattern: [100, 100, 100, 100], // très mécanique
  },

  trap: {
    velocityRange: [55, 100],
    velocityVariation: 8,
    timingVariationTicks: 10,
    accentPattern: [90, 70, 80, 70],
  },

  hiphop: {
    velocityRange: [60, 95],
    velocityVariation: 6,
    timingVariationTicks: 10,
    accentPattern: [100, 80, 90, 75],
  },

  funk: {
    velocityRange: [70, 110],
    velocityVariation: 8,
    timingVariationTicks: 6,
    accentPattern: [110, 80, 90, 70],
  },

  reggaeton: {
    velocityRange: [65, 105],
    velocityVariation: 5,
    timingVariationTicks: 5,
    accentPattern: [100, 85, 90, 85],
  },

  dub: {
    velocityRange: [50, 95],
    velocityVariation: 9,
    timingVariationTicks: 12,
    accentPattern: [90, 75, 80, 75],
  },
};
