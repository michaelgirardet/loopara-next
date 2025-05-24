export const genrePresets = {
    pop: {
      noteCount: 8,
      scaleType: "major",
      pattern: "up" as const,
    },
    lofi: {
      noteCount: 12,
      scaleType: "minor",
      pattern: "broken" as const,
    },
    house: {
      noteCount: 16,
      scaleType: "major",
      pattern: "updown" as const,
    },
    trap: {
      noteCount: 12,
      scaleType: "minor",
      pattern: "down" as const,
    },
  };