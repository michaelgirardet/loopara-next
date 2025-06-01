import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// 🔄 GET : récupérer les infos du profil
export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { profile: true },
  });

  if (!user?.profile) {
    return NextResponse.json({ error: "Profil non trouvé" }, { status: 404 });
  }

  return NextResponse.json(user.profile);
}
// ✏️ PUT : mettre à jour ou créer le profil
export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body = await req.json();
    const { bio, firstname, lastname, username, phone, website, location } = body;

    // Sanitize input: valeurs vides ou undefined → null
    const cleanedData = {
      bio: bio || null,
      firstname: firstname || null,
      lastname: lastname || null,
      username: username || null,
      phone: phone ? String(phone) : null,
      website: website || null,
      location: location || null,
    };

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { profile: true },
    });

    if (!user) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 });
    }

    if (user.profile) {
      await prisma.profile.update({
        where: { userId: user.id },
        data: cleanedData,
      });
    } else {
      await prisma.profile.create({
        data: {
          userId: user.id,
          ...cleanedData,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur mise à jour profil:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
