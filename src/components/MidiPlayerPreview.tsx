"use client";
import { useState, useEffect, useRef } from "react";
import { Midi } from "@tonejs/midi";
import Soundfont from "soundfont-player";
import { Pause, CirclePlay } from "lucide-react";
import { loadDrumSamples, playDrum } from "@/lib/audio/drum-sampler";

interface MidiPlayerPreviewProps {
  midiData: Uint8Array;
  mode: "chords" | "melody" | "arpeggios" | "drums";
  genre: string;
}

function MidiPlayerPreview({ midiData, mode, genre }: MidiPlayerPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const instrumentRef = useRef<Soundfont.Player | null>(null);
  const timeoutRefs = useRef<number[]>([]);

  useEffect(() => {
    const init = async () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
        await audioContextRef.current.resume();
      }

      const ctx = audioContextRef.current;

      if (mode === "drums") {
        await loadDrumSamples(genre, ctx);
      } else {
        instrumentRef.current = await Soundfont.instrument(ctx, "acoustic_grand_piano");
      }
    };

    init();
  }, [mode, genre]);

  const playMidi = async () => {
    if (!audioContextRef.current) return;

    const midi = new Midi(midiData);
    const ctx = audioContextRef.current;

    for (const note of midi.tracks[0].notes) {
      const timeout = window.setTimeout(() => {
        if (mode === "drums") {
          playDrum(note.midi, ctx, note.velocity);
        } else {
          instrumentRef.current?.play(note.name, ctx.currentTime, {
            gain: note.velocity,
            duration: note.duration,
          });
        }
      }, note.time * 1000);

      timeoutRefs.current.push(timeout);
    }

    setIsPlaying(true);
  };

  const stopMidi = () => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      stopMidi();
    } else {
      playMidi();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={handlePlayPause}
        className="border-misty hover:bg-misty flex cursor-pointer items-center gap-2 rounded-full border px-6 py-3 text-base font-semibold text-white hover:text-rich"
      >
        {isPlaying ? (
          <>
            <Pause />
            <span>Stop</span>
          </>
        ) : (
          <>
            <CirclePlay />
            <span>Écouter</span>
          </>
        )}
      </button>
    </div>
  );
}

export default MidiPlayerPreview;
