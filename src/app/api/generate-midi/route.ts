import { NextResponse } from "next/server";
import MidiWriter from "midi-writer-js";
import { generateTrack } from "@/app/api/generators/generateTrack";

export async function POST(req: Request) {
  const params = await req.json();
  const { rootNote, scaleType, mode, genre, rhythm, tempo } = params;

  const track = generateTrack({ rootNote, scaleType, mode, genre, rhythm, tempo });
  const writer = new MidiWriter.Writer([track]);
  const buffer = Buffer.from(writer.buildFile());

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": "audio/midi",
      "Content-Disposition": "attachment; filename=loopara.mid",
    },
  });
}
