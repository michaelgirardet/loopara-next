import { z } from "zod";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ✅ Validation avec Zod
const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Message trop court"),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: "Validation échouée",
        details: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { name, email, message } = result.data;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name} via Loopara" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `💌 Nouveau message de ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true, message: "Message envoyé" });
  } catch (err) {
    console.error("Erreur email :", err);
    return NextResponse.json({ error: "Erreur lors de l'envoi du message." }, { status: 500 });
  }
}
