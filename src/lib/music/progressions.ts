export const chordProgressions = {
  major: [
    [0, 4, 5, 3],     // I–V–vi–IV (pop classique)
    [0, 3, 4],        // I–IV–V
    [0, 5, 3, 4],     // I–vi–IV–V
    [0, 4, 1, 5],     // I–V–ii–vi
    [0, 5, 1, 4],     // I–vi–ii–V (jazz/pop)
  ],

  minor: [
    [0, 5, 6, 4],     // i–VI–VII–V (classique / rock)
    [0, 3, 4, 5],     // i–iv–v–VI
    [0, 6, 5, 4],     // i–VII–VI–V
    [0, 3, 6, 4],     // i–iv–VII–V
    [0, 5, 1, 4],     // i–VI–ii°–V
  ],

  dorian: [
    [0, 2, 4, 5],     // i–III–v–VI (funk/jazz)
    [0, 4, 2, 5],     // i–v–III–VI
    [0, 2, 5, 4],     // i–III–VI–v
  ],

  phrygian: [
    [0, 1, 3, 4],     // i–II–iv–v
    [0, 3, 4, 6],     // i–iv–v–VII
    [0, 4, 1, 3],     // i–v–II–iv
  ],

  lydian: [
    [0, 1, 4, 5],     // I–II–V–vi (dreamy / cinematic)
    [0, 5, 4, 1],     // I–vi–V–II
    [0, 4, 1, 5],     // I–V–II–vi
  ],

  mixolydian: [
    [0, 4, 5, 6],     // I–V–vi–VII (bluesy/rock)
    [0, 5, 4, 6],     // I–vi–V–VII
    [0, 2, 5, 6],     // I–iii–vi–VII
  ],

  locrian: [
    [0, 1, 3, 4],     // i°–II–iv–v
    [0, 3, 1, 4],     // i°–iv–II–v
  ],
};
