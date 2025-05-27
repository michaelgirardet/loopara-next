type BuildChordOptions = {
  extensions?: string[];
  inversion?: number;
  voicing?: "drop2" | "drop3" | "close" | "open";
};

export function buildChord(
  scale: string[],
  degree: number,
  options?: { extensions?: string[]; octaveShift?: number; inversion?: number; voicing?: string },
  _p0?: {
    extensions?: string[];
    octaveShift?: number;
    inversion?: number;
  }
): string[] {
  const extensions = _p0?.extensions ?? [];
  const octaveShift = _p0?.octaveShift ?? 0;
  const inversion = _p0?.inversion ?? 0;

  // Base triade : fondamentale + tierce + quinte
  const chord = [
    scale[degree],
    scale[(degree + 2) % scale.length],
    scale[(degree + 4) % scale.length],
  ];

  // Ajout optionnel de 7e ou 9e
  if (extensions.includes("7")) {
    chord.push(scale[(degree + 6) % scale.length]);
  }
  if (extensions.includes("9")) {
    chord.push(scale[(degree + 1) % scale.length]);
  }

  // Inversion : déplace les premières notes en haut
  for (let i = 0; i < inversion; i++) {
    const note = chord.shift();
    if (note) chord.push(note);
  }

  // Applique le décalage d’octave
  return chord.map((note) =>
    note.replace(/\d/, (digit) => `${Number.parseInt(digit) + octaveShift}`)
  );
}
