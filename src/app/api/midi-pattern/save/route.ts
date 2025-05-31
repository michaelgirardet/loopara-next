import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { title, data } = body;

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Restriction sur les comptes gratuits
  if (user.role === "USER" && user.generationCount >= 10) {
    return NextResponse.json({ error: "Limite atteinte" }, { status: 403 });
  }

  // Sauvegarde du motif
  await prisma.midiPattern.create({
    data: {
      title,
      data,
      userId: user.id,
    },
  });

  // Incrément du compteur
  await prisma.user.update({
    where: { id: user.id },
    data: {
      generationCount: { increment: 1 },
    },
  });

  return NextResponse.json({ success: true });
}
