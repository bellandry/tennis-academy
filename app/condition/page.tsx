import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions d’Utilisation",
  description:
    "Prenez connaissance des conditions générales d'utilisation du site FOTA Cameroun. Découvrez les règles encadrant l’utilisation de nos services et contenus.",
  keywords:
    "conditions d'utilisation, CGU FOTA, règles d'utilisation site, mentions légales, droits et responsabilités, FOTA Cameroun",
  openGraph: {
    title: "Conditions Générales d’Utilisation | FOTA Cameroun",
    description:
      "Lisez nos conditions d'utilisation pour comprendre les droits, responsabilités et engagements liés à l’utilisation du site FOTA Cameroun.",
    url: "https://fota.laclass.dev/condition",
    images: [
      {
        url: "/og-image.png",
        width: 1640,
        height: 924,
        alt: "Conditions d’utilisation FOTA Cameroun",
      },
    ],
    type: "article",
    siteName: "FOTA Cameroun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions d’Utilisation | FOTA Cameroun",
    description:
      "Découvrez les conditions d'utilisation du site FOTA Cameroun. Informez-vous sur les règles d'accès, d'inscription et de navigation.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://fota.laclass.dev/condition",
  },
};

function Condition() {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-2 pt-24 pb-16">
        <h1>Conditions d&apos;Utilisation de FOTA Cameroun</h1>

        <h2>1. Acceptation des conditions</h2>
        <p>
          En accédant et en utilisant le Site Web{" "}
          <Link className="text-tennis-500" href="/#">
            FOTA Cameroun
          </Link>
          et les services que nous offrons, vous acceptez ces conditions
          d&apos;utilisation.
        </p>

        <h2>2. Fourniture et gestion des services</h2>
        <p>
          Pour vous inscrire à des cours, gérer votre compte, traiter les
          paiements et vous fournir les services que vous demandez.
        </p>
        <p>
          Communiquer avec vous : Pour répondre à vos questions, vous envoyer
          des informations sur les cours, les promotions et d&apos;autres mises
          à jour importantes.
        </p>
        <p>
          Améliorer notre Site : Pour analyser l&apos;utilisation du Site,
          optimiser le contenu et améliorer l&apos;expérience utilisateur.
        </p>
        <p>
          Marketing : Pour vous envoyer des offres promotionnelles et du
          matériel marketing, sous réserve de votre consentement lorsque la loi
          l&apos;exige.
        </p>
        <p>
          Sécurité : Pour protéger la sécurité de notre Site et prévenir la
          fraude.
        </p>
        <p>
          Obligations légales : Pour nous conformer à nos obligations légales.
        </p>

        <h2>3. Partage de vos informations</h2>
        <p>
          Nous pouvons partager vos informations avec les parties suivantes :
        </p>
        <p>
          Prestataires de services : Nous partageons des informations avec des
          prestataires de services tiers qui nous aident à fournir nos services
          (par exemple, traitement des paiements, hébergement web, analyse de
          données).
        </p>
        <p>
          Partenaires : Nous pouvons partager des informations avec des
          partenaires pour vous proposer des offres spéciales ou des promotions,
          sous réserve de votre consentement.
        </p>
        <p>
          Autorités légales : Nous pouvons divulguer vos informations si la loi
          l&apos;exige, ou en réponse à une demande légale valide.
        </p>
        <p>
          Transferts d&apos;entreprise : Dans le cas d&apos;une fusion,
          d&apos;une acquisition ou d&apos;une vente d&apos;actifs, vos
          informations peuvent être transférées à la nouvelle entité.
        </p>

        <h2>4. Sécurité de vos informations</h2>
        <p>
          Nous prenons des mesures de sécurité raisonnables pour protéger vos
          informations contre la perte, le vol, l&apos;accès non autorisé, la
          divulgation, l&apos;altération et la destruction. Cependant, aucune
          méthode de transmission sur Internet, ni aucune méthode de stockage
          électronique, n&apos;est totalement sécurisée. Par conséquent, nous ne
          pouvons pas garantir la sécurité absolue de vos informations.
        </p>

        <h2>5. Vos droits</h2>
        <p>
          Vous disposez des droits suivants concernant vos informations
          personnelles :
        </p>
        <p>
          Accès : Vous avez le droit d&apos;accéder aux informations
          personnelles que nous détenons à votre sujet.
        </p>
        <p>
          Rectification : Vous avez le droit de demander la correction de toute
          information inexacte ou incomplète.
        </p>
        <p>
          Suppression : Vous avez le droit de demander la suppression de vos
          informations personnelles, sous réserve de certaines exceptions.
        </p>
        <p>
          Limitation du traitement : Vous avez le droit de demander la
          limitation du traitement de vos informations personnelles dans
          certaines circonstances.
        </p>
        <p>
          Opposition : Vous avez le droit de vous opposer au traitement de vos
          informations.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Condition;
