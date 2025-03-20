import InscriptionEmail from "@/emails/inscription-email";
import { render } from "@react-email/render";
import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

// Configuration du transporteur Nodemailer avec Gmail
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Vérification des données requises
    if (!data || !data.email) {
      return NextResponse.json(
        { error: "Données d'inscription incomplètes" },
        { status: 400 }
      );
    }

    // Rendu du template d'email avec les données du formulaire
    const emailHtml = await render(
      InscriptionEmail(data)
    );

    // Configuration de l'email
    const mailOptions = {
      from: `"FOTA Tennis" <${process.env.GMAIL_USER}>`,
      to: "landlo14@yahoo.fr",
      subject: "Nouvelle inscription Tennis Academy",
      html: emailHtml,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Échec de l'envoi de l'email", details: error },
      { status: 500 }
    );
  }
} 