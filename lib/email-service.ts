/**
 * Service pour l'envoi d'emails
 */
export interface EmailData {
  subject: string;
  body: unknown;
}

/**
 * Envoie un email via l'API
 */
export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur lors de l'envoi de l'email:", errorData);
      throw new Error(errorData.error || "Échec de l'envoi de l'email");
    }

    return true;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    throw error;
  }
} 