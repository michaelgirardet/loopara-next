export interface GenerateProps {
  rootNote: string;
  scaleType: "major" | "minor";
  mode: "melody" | "chords" | "arpeggios" | "drums";
  genre: string;
  rhythms: string[];
  tempo: number;
}

export interface ControlProps {
  onGenerate: (data: {
    rootNote: string;
    scaleType: "major" | "minor";
    mode: "melody" | "chords" | "arpeggios" | "drums";
    genre: string;
    rhythms: string[];
    tempo: number;
  }) => void;
}

export interface RootNoteSelectProps {
  value: string;
  onChange: (note: string) => void;
}
