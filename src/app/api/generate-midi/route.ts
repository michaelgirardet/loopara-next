import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { prisma } from "@/lib/prisma";
import MidiWriter from "midi-writer-js";
import { generateTrack } from "@/app/api/generators/generateTrack";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const params = await req.json();
  const { rootNote, scaleType, mode, genre, rhythm, tempo } = params;

  const track = generateTrack({ rootNote, scaleType, mode, genre, rhythm, tempo });
  const writer = new MidiWriter.Writer([track]);
  const buffer = Buffer.from(writer.buildFile());

  if (session?.user?.email) {
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (user) {
      await prisma.midiPattern.create({
        data: {
          title: `${mode} pattern`, // tu peux faire mieux
          data: buffer.toString("base64"), // ou JSON.stringify(events) si plus utile
          userId: user.id,
        },
      });

      await prisma.user.update({
        where: { id: user.id },
        data: { generationCount: { increment: 1 } },
      });
    }
  }

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": "audio/midi",
      "Content-Disposition": "attachment; filename=loopara.mid",
    },
  });
}
