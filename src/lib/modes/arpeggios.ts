import { transposeNote } from "@/lib/music/transposeNote"; // à créer si besoin

export function getArpeggioPattern(
  type: "up" | "down" | "updown" | "broken" | "rolling" | "pingpong" | "jump" | "trill",
  chord: string[]
): string[] {
  switch (type) {
    case "up":
      return chord;

    case "down":
      return chord.slice().reverse();

    case "updown":
      return [...chord, ...chord.slice().reverse()];

    case "broken":
      return [chord[0], chord[2], chord[1], chord[2]];

    case "rolling":
      return [...chord, ...chord.map((n) => transposeNote(n, 12))];

    case "pingpong":
      return [chord[0], chord[2], chord[1], chord[0], chord[2], chord[1]];

    case "jump":
      return [
        chord[0],
        chord[2],
        transposeNote(chord[0], 12),
        chord[1],
        transposeNote(chord[2], 12),
      ];

    case "trill":
      return [chord[0], chord[1], chord[0], chord[1], chord[2]];

    default:
      return chord;
  }
}
