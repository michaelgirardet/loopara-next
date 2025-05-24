// core/note.ts
export function noteToMidiNumber(note: string): number | null {
    const notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
    const match = note.match(/^([A-G]#?)(\d)$/);
    if (!match) return null;
    const [, pitch, octave] = match;
    const noteIndex = notes.indexOf(pitch);
    return noteIndex + 12 * (Number.parseInt(octave) + 1);
  }