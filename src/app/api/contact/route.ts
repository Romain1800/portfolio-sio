import { NextResponse } from "next/server";
import { Resend } from "resend";
import profile from "@/data/profile.json";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Merci de renseigner votre nom, votre email et un message." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Adresse email invalide." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "L'envoi d'email n'est pas configuré sur le serveur." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: profile.email,
      replyTo: email,
      subject: subject?.trim() ? subject.trim() : `Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "L'envoi a échoué. Réessayez plus tard." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue. Réessayez plus tard." },
      { status: 500 }
    );
  }
}
