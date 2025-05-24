import { useState, useRef, useEffect } from "react";
import MidiPlayer from "midi-player-js";
import Soundfont from "soundfont-player";
import { Pause, Play } from "lucide-react";
import { loadDrumSamples, playDrum } from "../audio/drum-sampler";

interface MidiPlayerPreviewProps {
  midiData: Uint8Array;
  mode: "chords" | "melody" | "arpeggios" | "drums";
  genre: string;
}

function MidiPlayerPreview({ midiData, mode, genre }: MidiPlayerPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const instrumentRef = useRef<Soundfont.Player | null>(null);
  const playerRef = useRef<MidiPlayer.Player | null>(null);

  // ⏳ Initialisation unique du contexte + samples
  useEffect(() => {
    const init = async () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
        await audioContextRef.current.resume();
      }

      const ctx = audioContextRef.current;

      if (mode === "drums") {
        await loadDrumSamples(genre, ctx);
      } else if (!instrumentRef.current) {
        instrumentRef.current = await Soundfont.instrument(
          ctx,
          "acoustic_grand_piano",
        );
      }
    };

    init();
  }, [mode, genre]);

  // 🎼 Création du player à chaque nouveau MIDI
  useEffect(() => {
    if (!midiData || !audioContextRef.current) return;

    // Stop précédent
    if (playerRef.current) {
      playerRef.current.stop();
      playerRef.current = null;
      setIsPlaying(false);
    }

    const ctx = audioContextRef.current;
    const player = new MidiPlayer.Player(
      (event: {
        name: string;
        velocity: number;
        channel: number;
        noteNumber: number;
        noteName: string;
      }) => {
        if (event.name === "Note on") {
          const velocity = event.velocity ? event.velocity / 127 : 0.8;

          if (event.channel === 10 && event.noteNumber) {
            // 🥁 Drums
            playDrum(event.noteNumber, ctx, velocity);
          } else if (
            event.noteName &&
            event.noteNumber &&
            event.noteNumber >= 21 &&
            event.noteNumber <= 108 &&
            instrumentRef.current
          ) {
            // 🎹 Instruments mélodiques
            instrumentRef.current.play(event.noteName, 0, { gain: velocity });
          }
        }
      },
    );

    player.loadArrayBuffer(midiData);

    player.on("endOfFile", () => setIsPlaying(false));
    playerRef.current = player;
  }, [midiData]);

  // ▶️ / ⏹️ Play / Stop
  const handlePlayPause = async () => {
    if (!audioContextRef.current) return;

    await audioContextRef.current.resume();

    if (!playerRef.current) return;

    if (!isPlaying) {
      playerRef.current.play();
      setIsPlaying(true);
    } else {
      playerRef.current.stop();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={handlePlayPause}
        className="flex cursor-pointer items-center gap-2 rounded-md border border-[#fefefe] px-6 py-3 text-center text-sm font-semibold text-[#fefefe] hover:bg-[#fefefe] hover:text-[#030504]"
      >
        {isPlaying ? (
          <>
            <Pause />
            <span>Stop</span>
          </>
        ) : (
          <>
            <Play />
            <span>Écouter</span>
          </>
        )}
      </button>
    </div>
  );
}

export default MidiPlayerPreview;
