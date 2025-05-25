import MidiWriter from "midi-writer-js";
import { chordProgressions } from "@/lib/music/progressions";
import { genrePresets } from "@/lib/config/genre-presets";
import type { GenerateProps } from "@/types/types";
import { getScale } from "@/lib/music/getScale";
import { generateArpeggio } from "@/lib/music/generateArpeggio";
import { generateDrumsTrack } from "../../../lib/music/generateDrums";
import { generateMelody } from "../../../lib/music/generateMelody";
import { generateChords } from "../../../lib/music/generateChords";

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
    progression = availableProgressions[Math.floor(Math.random() * availableProgressions.length)];
  }

  let events: WriterEvent[] = [];

  switch (mode) {
    case "chords":
      events = generateChords(scale, noteCount, rhythms, progression);
      break;
    case "melody":
      events = generateMelody(scale, noteCount, rhythms);
      break;
    case "arpeggios":
      events = generateArpeggio(scale, progression, rhythms, pattern);
      break;
    case "drums":
      events = generateDrumsTrack(genre, rhythms);
      break;
  }

  track.addEvent(events); // Ajoute tous les événements MIDI à la piste
  return track;
};
