import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // 🔐 Validation
    if (!email || !password) {
      return NextResponse.json({ message: "Email et mot de passe requis." }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Le mot de passe doit contenir au moins 6 caractères." },
        { status: 400 }
      );
    }

    // 🔎 Vérifie l'existence
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Un compte existe déjà avec cet email." },
        { status: 409 }
      );
    }

    // 🔐 Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // ✅ Création utilisateur + profil vide
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        profile: {
          create: {},
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d’inscription :", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
