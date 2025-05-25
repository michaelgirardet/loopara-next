import MidiWriter from "midi-writer-js";

type NoteEvent = InstanceType<typeof MidiWriter.NoteEvent>;
/**
 * Applique une humanisation simple aux événements MIDI :
 * de légères variations de vélocité pour rendre l'interprétation plus naturelle.
 *
 * @param events Liste d’événements MIDI (typiquement des NoteEvent)
 * @returns Nouvelle liste d’événements avec vélocités légèrement modifiées
 */
export function applyHumanization(events: NoteEvent[]): NoteEvent[] {
  return events.map((event) => {
    // Applique une variation aléatoire entre -4 et +3 à la vélocité d’origine
    const newVelocity = event.velocity + Math.floor(Math.random() * 8 - 4);

    // Crée un nouvel événement MIDI avec la vélocité ajustée
    return new MidiWriter.NoteEvent({
      ...event, // Recopie tous les autres paramètres (note, durée, etc.)
      velocity: Math.max(50, Math.min(100, newVelocity)), // Contraint la vélocité entre 50 et 100
    });
  });
}
