import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface InscriptionEmailProps {
  inscriptionData: {
    inscriptionType: string;
    programme: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    childrenInfo?: Array<{
      firstName: string;
      lastName: string;
      dateOfBirth: string;
    }>;
    level: string;
    additionalInfo?: string;
    contactPreference: string;
  };
}

export const InscriptionEmail = ({
  inscriptionData,
}: InscriptionEmailProps) => {
  const {
    inscriptionType,
    programme,
    firstName,
    lastName,
    email,
    phone,
    dateOfBirth,
    childrenInfo,
    level,
    additionalInfo,
    contactPreference,
  } = inscriptionData;

  return (
    <Html>
      <Head />
      <Preview>Nouvelle inscription à Tennis Academy</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nouvelle inscription à Tennis Academy</Heading>
          <Text style={text}>
            Une nouvelle inscription a été soumise via le formulaire en ligne.
          </Text>

          <Section style={section}>
            <Heading as="h2" style={h2}>
              Type d&apos;inscription
            </Heading>
            <Text style={text}>
              {inscriptionType === "self"
                ? "Inscription personnelle"
                : inscriptionType === "child"
                ? "Inscription d'un enfant"
                : "Inscription de plusieurs enfants"}
            </Text>
          </Section>

          <Section style={section}>
            <Heading as="h2" style={h2}>
              Programme et niveau
            </Heading>
            <Text style={text}>
              Programme: {getProgrammeName(programme)}
              <br />
              Niveau: {getLevelName(level)}
            </Text>
          </Section>

          <Section style={section}>
            <Heading as="h2" style={h2}>
              Coordonnées du contact
            </Heading>
            <Text style={text}>
              Nom: {firstName} {lastName}
              <br />
              Email: {email}
              <br />
              Téléphone: {phone}
              <br />
              Préférence de contact: {contactPreference === "email" ? "Email" : "WhatsApp"}
            </Text>
          </Section>

          {inscriptionType === "self" && (
            <Section style={section}>
              <Heading as="h2" style={h2}>
                Informations personnelles
              </Heading>
              <Text style={text}>
                Date de naissance: {dateOfBirth}
              </Text>
            </Section>
          )}

          {(inscriptionType === "child" || inscriptionType === "multiple-children") && childrenInfo && (
            <Section style={section}>
              <Heading as="h2" style={h2}>
                Informations des enfants
              </Heading>
              {childrenInfo.map((child, index) => (
                <Text key={index} style={text}>
                  <strong>Enfant {index + 1}:</strong>
                  <br />
                  Nom: {child.firstName} {child.lastName}
                  <br />
                  Date de naissance: {child.dateOfBirth}
                  <br />
                </Text>
              ))}
            </Section>
          )}

          {additionalInfo && (
            <Section style={section}>
              <Heading as="h2" style={h2}>
                Informations supplémentaires
              </Heading>
              <Text style={text}>{additionalInfo}</Text>
            </Section>
          )}

          <Hr style={hr} />
          <Text style={footer}>
            Cet email a été généré automatiquement. Ne pas répondre.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

function getProgrammeName(programmeId: string): string {
  const programmes = {
    debutants: "Cours débutants",
    intermediaires: "Cours intermédiaires",
    competition: "Cours compétition",
    stages: "Stages intensifs",
  };
  return programmes[programmeId as keyof typeof programmes] || programmeId;
}

function getLevelName(levelId: string): string {
  const levels = {
    debutant: "Débutant",
    intermediaire: "Intermédiaire",
    avance: "Avancé",
    expert: "Expert",
  };
  return levels[levelId as keyof typeof levels] || levelId;
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  textAlign: "center" as const,
};

const h2 = {
  color: "#333",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "15px 0",
  padding: "0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
};

const section = {
  marginBottom: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};

export default InscriptionEmail; 