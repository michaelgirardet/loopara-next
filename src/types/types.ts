export interface GenerateProps {
  rootNote: string;
  scaleType: "major" | "minor";
  mode: "melody" | "chords" | "arpeggios" | "drums";
  rhythm: string[];
  tempo: number;
  genre: string;
  emotion?: string;
}

export interface ControlProps {
  onGenerate: (data: {
    rootNote: string;
    scaleType: "major" | "minor";
    mode: "melody" | "chords" | "arpeggios" | "drums";
    genre: string;
    rhythm: string[];
    emotion: string;
    tempo: number;
  }) => void;
}

export interface RootNoteSelectProps {
  value: string;
  onChange: (note: string) => void;
}

export type DrumGrid = string[][];

export type DrumPreset = {
  grid: DrumGrid;
  swing?: number; // 0.5 = binaire, > 0.5 = swing
  ghostNotes?: boolean;
  hatVariation?: boolean;
  velocityRange?: [number, number]; // [min, max]
  fillFrequency?: number; // fréquence des fills (0 → jamais, 1 → toujours)
};

export type HumanizationOptions = {
  velocityRange?: [number, number]; // plage autorisée
  velocityVariation?: number; // ex: ±6
  timingVariationTicks?: number; // ex: ±15 ticks
  accentPattern?: number[]; // ex: [100, 80, 90, 80]
};

// Profil utilisateur
export interface UserProfile {
  bio?: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  phone?: string;
  website?: string;
  location?: string;
  joinDate?: string;
}
