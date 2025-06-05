import { type NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { prisma } from "@/lib/prisma";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("image") as File;

  if (!file || !file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Fichier invalide" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const mimeType = file.type; // ex: image/png
  const extension = mimeType.split("/")[1] || "png";
  const filename = `${randomUUID()}.${extension}`;
  const filePath = path.join(process.cwd(), "public/uploads", filename);

  try {
    await writeFile(filePath, buffer);

    const imageUrl = `/uploads/${filename}`;

    // Met à jour le champ profileImage dans Prisma
    await prisma.user.update({
      where: { email: session.user.email },
      data: { image: imageUrl },
    });

    return NextResponse.json({ success: true, imageUrl });
  } catch (error) {
    console.error("Erreur upload image :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
