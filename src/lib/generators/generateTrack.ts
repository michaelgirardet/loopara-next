import MidiWriter from "midi-writer-js";
import { chordProgressions } from "@/lib/music/progressions";
import { generateChordsTrack } from "@/lib/music/buildChord";
import { generateMelodyTrack } from "../modes/melody";
import { generateArpeggioTrack } from "../modes/arpeggios";
import { generateDrumsTrack } from "../modes/drums";
import { genrePresets } from "../config/genre-presets.ts";
import type { GenerateProps } from "../types/types";
import { getScale } from "../music/scale";

type WriterEvent = InstanceType<typeof MidiWriter.NoteEvent>;

export const generateTrack = ({
  rootNote,
  scaleType,
  mode,
  rhythms,
  tempo,
  genre,
}: GenerateProps) => {
  const track = new MidiWriter.Track();
  track.setTempo(tempo); // Applique le tempo global

  // Appliquer preset genre si disponible
  const preset = genrePresets[genre as keyof typeof genrePresets];
  const noteCount = preset?.noteCount ?? 8;
  const pattern = preset?.pattern ?? "up";

  // Génère la gamme musicale
  const scale = getScale(rootNote, scaleType);

  // Progression harmonique si besoin
  let progression: number[] | null = null;
  if (mode === "chords" || mode === "arpeggios") {
    const availableProgressions = chordProgressions[scaleType];
    progression =
      availableProgressions[
        Math.floor(Math.random() * availableProgressions.length)
      ];
  }

  let events: WriterEvent[] = [];

  switch (mode) {
    case "chords":
      events = generateChordsTrack(scale, noteCount, rhythms, progression);
      break;
    case "melody":
      events = generateMelodyTrack(scale, noteCount, rhythms);
      break;
    case "arpeggios":
      events = generateArpeggioTrack(scale, progression, rhythms, pattern);
      break;
    case "drums":
      events = generateDrumsTrack(genre, rhythms);
      break;
  }

  track.addEvent(events); // Ajoute tous les événements MIDI à la piste
  return track;
};