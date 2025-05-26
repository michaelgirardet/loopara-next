import { drumNoteMap } from "./drum-note-map";

const drumBuffers: Record<number, AudioBuffer> = {};

/**
 * Charge les samples de batterie associés à un style donné.
 */
export async function loadDrumSamples(style: string, ctx: AudioContext) {
  const map = drumNoteMap[style];

  if (!map) {
    console.warn(`❌ Aucun drumNoteMap trouvé pour le style "${style}"`);
    return;
  }

  for (const [midiNote, path] of Object.entries(map)) {
    try {
      const response = await fetch(path);

      if (!response.ok) {
        console.warn(`❌ Échec du chargement du fichier : ${path} (HTTP ${response.status})`);
        continue;
      }

      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
      drumBuffers[Number(midiNote)] = audioBuffer;
    } catch (error) {
      console.error(`❌ Erreur lors du décodage du sample "${path}"`, error);
    }
  }

  console.log(`✅ ${Object.keys(drumBuffers).length} samples chargés pour ${style}`);
}

/**
 * Joue un sample de batterie depuis le buffer associé à une note MIDI.
 */
export function playDrum(midiNote: number, ctx: AudioContext, gain = 0.8) {
  const buffer = drumBuffers[midiNote];
  if (!buffer) return;

  const source = ctx.createBufferSource();
  const gainNode = ctx.createGain();

  source.buffer = buffer;
  gainNode.gain.value = gain;

  source.connect(gainNode).connect(ctx.destination);
  source.start();
}
