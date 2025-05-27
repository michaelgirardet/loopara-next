export const emotionChordPresets: Record<string, number[][]> = {
    happy: [
      [0, 4, 5, 3], // I–V–vi–IV
      [0, 3, 4],    // I–IV–V
    ],
    sad: [
      [0, 5, 6, 4], // i–VI–VII–V
      [0, 3, 4],    // i–iv–v
    ],
    dreamy: [
      [0, 1, 4, 5], // I–II–V–vi (lydian)
      [0, 4, 1, 5], // I–V–II–vi
    ],
    tense: [
      [0, 1, 3, 4], // i–II–iv–v (phrygian / locrian)
      [0, 4, 1, 3],
    ],
    melancholic: [
      [0, 3, 4, 6], // i–iv–v–VII
      [0, 5, 3, 4], // i–VI–iv–v
    ],
    uplifting: [
      [0, 5, 1, 4], // I–vi–ii–V
      [0, 4, 2, 5], // I–V–iii–vi
    ],
  };
  