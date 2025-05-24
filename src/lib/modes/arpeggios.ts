/**
 * Génère un motif d'arpège à partir d’un accord, selon un type donné.
 *
 * @param type Le type de motif d’arpège : "up", "down", "updown", ou "broken"
 * @param chord Un tableau de notes représentant l’accord (ex: ["C4", "E4", "G4"])
 * @returns Un tableau de notes ordonnées selon le motif sélectionné
 */
export function getArpeggioPattern(
    type: "up" | "down" | "updown" | "broken",
    chord: string[],
  ): string[] {
    switch (type) {
      case "up":
        // Motif montant : joue les notes de l'accord dans l'ordre
        return chord;
  
      case "down":
        // Motif descendant : joue les notes de l'accord en sens inverse
        return chord.slice().reverse();
  
      case "updown":
        // Motif aller-retour : monte puis redescend (ex: C–E–G–E–C)
        return [...chord, ...chord.slice().reverse()];
  
      case "broken":
        // Motif "cassé" (souvent utilisé en pop/folk) :
        // 1ère → 3ème → 2ème → 3ème (ex: C–G–E–G)
        return [chord[0], chord[2], chord[1], chord[2]];
  
      default:
        // Si aucun type reconnu : retourne simplement l’accord tel quel
        return chord;
    }
  }