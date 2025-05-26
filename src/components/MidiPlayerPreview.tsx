"use client";
import { useState, useEffect, useRef } from "react";
import { Midi } from "@tonejs/midi";
import Soundfont from "soundfont-player";
import { Pause, CirclePlay } from "lucide-react";

interface MidiPlayerPreviewProps {
  midiData: Uint8Array;
  mode: "chords" | "melody" | "arpeggios" | "drums";
  genre: string;
}

function MidiPlayerPreview({ midiData }: MidiPlayerPreviewProps) {
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
      instrumentRef.current = await Soundfont.instrument(ctx, "acoustic_grand_piano");
    };

    init();
  }, []);

  const playMidi = async () => {
    if (!audioContextRef.current || !instrumentRef.current) return;

    const midi = new Midi(midiData);
    const ctx = audioContextRef.current;
    const now = ctx.currentTime;

    for (const note of midi.tracks[0].notes) {
      const when = now + note.time;
      const duration = note.duration;
      const timeout = window.setTimeout(() => {
        instrumentRef.current?.play(note.name, ctx.currentTime, {
          gain: note.velocity,
          duration,
        });
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
        className="flex cursor-pointer items-center gap-2 rounded-full border border-misty px-6 py-3 text-center text-base font-semibold text-misty hover:bg-misty hover:text-noir"
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
