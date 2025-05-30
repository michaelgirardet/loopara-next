import { NextResponse } from "next/server";
// Import le singleton dans toutes les routes, actions...
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // 🔐 Validation de base
    if (!email || !password) {
      return NextResponse.json({ message: "Email et mot de passe requis." }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Le mot de passe doit contenir au moins 6 caractères." },
        { status: 400 }
      );
    }

    // 🔎 Vérifie si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Un compte existe déjà avec cet email." },
        { status: 409 }
      );
    }

    // 🔐 Hashage sécurisé
    const hashedPassword = await bcrypt.hash(password, 12);

    // ✅ Création de l'utilisateur
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d’inscription :", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
