import MidiWriter from "midi-writer-js";
import { chordProgressions } from "@/lib/music/progressions";
import { genrePresets } from "@/lib/config/genre-presets";
import { emotionChordPresets } from "@/lib/config/emotion-presets";
import type { GenerateProps } from "@/types/types";
import { getScale } from "@/lib/music/getScale";
import { generateArpeggio } from "@/lib/music/generateArpeggio";
import { generateDrumsTrack } from "@/lib/music/generateDrums";
import { generateMelody } from "@/lib/music/generateMelody";
import { generateChords } from "@/lib/music/generateChords";

type WriterEvent = InstanceType<typeof MidiWriter.NoteEvent>;

export const generateTrack = ({
  rootNote,
  scaleType,
  mode,
  rhythms,
  tempo,
  genre,
  emotion,
}: GenerateProps) => {
  const track = new MidiWriter.Track();
  track.setTempo(tempo);

  const preset = genrePresets[genre as keyof typeof genrePresets];
  const noteCount = preset?.noteCount ?? 8;
  const pattern = preset?.pattern ?? "up";

  const scale = getScale(rootNote, scaleType);

  let progression: number[] | null = null;
  if (mode === "chords" || mode === "arpeggios") {
    if (emotion && emotionChordPresets[emotion]) {
      const options = emotionChordPresets[emotion];
      progression = options[Math.floor(Math.random() * options.length)];
    } else {
      const availableProgressions = chordProgressions[scaleType];
      progression = availableProgressions[Math.floor(Math.random() * availableProgressions.length)];
    }
  }

  let events: WriterEvent[] = [];

  switch (mode) {
    case "chords":
      events = generateChords(scale, noteCount, rhythms, progression, genre);
      break;
    case "melody":
      events = generateMelody(scale, noteCount, rhythms, genre, undefined);
      break;
    case "arpeggios":
      events = generateArpeggio(scale, progression, rhythms, pattern, genre);
      break;
    case "drums":
      events = generateDrumsTrack(genre, rhythms);
      break;
  }

  track.addEvent(events);
  return track;
};
