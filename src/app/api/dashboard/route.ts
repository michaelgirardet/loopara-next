import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/auth"; // adapte si le fichier est ailleurs
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      posts: true,
      profile: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
  }

  return NextResponse.json({
    name: user.name,
    email: user.email,
    projects: user.posts.map((p) => ({
      title: p.title,
      createdAt: p.createdAt,
      published: p.published,
    })),
    profile: user.profile,
  });
}
