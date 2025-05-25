// Définir la gamme et le mode
export const getScale = (root: string, type: "major" | "minor"): string[] => {
  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const semitones = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
  };
  const rootIndex = notes.indexOf(root);
  return semitones[type].map((semi) => `${notes[(rootIndex + semi) % 12]}4`);
};
