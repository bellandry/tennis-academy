import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

const Legal = () => {
  return (
    <>
      <Header />
      <div className="container pt-24 pb-16">
        <h1>Mentions Légales</h1>
        <section>
          <h2>1. Identification de l&apos;éditeur du site web</h2>
          <p>
            Nom de l&apos;organisme ou de l&apos;entreprise :{" "}
            <span className="text-tennis-500">FOTA Cameroun</span>
          </p>
          <p>Adresse du siège social : FOTA Cameroun, Bafoussam Cameroun</p>
          <p>
            Numéro de téléphone :{" "}
            <span className="text-tennis-500">+237 6 90 11 78 02</span>
          </p>
          <p>
            Adresse e-mail de contact :{" "}
            <span className="text-tennis-500">fota-cameroun@gmail.com</span>
          </p>
          {/* <p>
            Numéro d&apos;enregistrement de l&apos;entreprise ou
            d&apos;immatriculation au registre du commerce et des sociétés
            (RCCM) : [Numéro RCCM]
          </p> */}
          <p>Nom du directeur de la publication : FOMEKONG Cyrile</p>
        </section>
        <section>
          <h2>2. Informations sur l&apos;hébergeur du site web</h2>
          <p>Nom de l&apos;hébergeur : OVHCLOUD</p>
          <p>Adresse de l&apos;hébergeur : 2 RUE KELLERMANN 59100 ROUBAIX</p>
          {/* <p>
            Numéro de téléphone de l&apos;hébergeur : [Numéro de téléphone de la
            société d&apos;hébergement]
          </p>
          <p>
            Adresse e-mail ou site web de l&apos;hébergeur : [Adresse e-mail ou
            URL du site web de la société d&apos;hébergement]
          </p> */}
        </section>
        <section>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            Droits d&apos;auteur : Tous les contenus de ce site, incluant, de
            façon non limitative, les textes, images, logos, vidéos, sont la
            propriété exclusive de FOTA Cameroun ou de ses partenaires et sont
            protégés par les lois relatives à la propriété intellectuelle.
          </p>
          <p>
            Marques : Les marques FOTA et FOTA Cameroun sont des marques
            déposées de FOTA Cameroun
          </p>
        </section>
        <section>
          <h2>4. Limitation de responsabilité</h2>
          <p>
            L&apos;éditeur du site web s&apos;efforce de fournir des
            informations exactes et à jour, mais ne peut garantir
            l&apos;exactitude, l&apos;exhaustivité ou la pertinence de ces
            informations. En conséquence, l&apos;utilisateur reconnaît utiliser
            ces informations sous sa responsabilité exclusive.
          </p>
          <p>
            Le site web peut contenir des liens vers des sites web tiers.
            L&apos;éditeur du site web n&apos;exerce aucun contrôle sur ces
            sites et décline toute responsabilité quant à leur contenu.
          </p>
        </section>
        <section>
          <h2>5. Protection des données personnelles</h2>
          <p>
            Les informations relatives à la collecte et au traitement des
            données personnelles sont disponibles dans notre{" "}
            <Link className="text-tennis-500" href="/privacy">
              Politique de confidentialité
            </Link>
            .
          </p>
        </section>
        <section>
          <h2>6. Droit applicable et juridiction</h2>
          <p>
            Le présent site web est régi par le droit camerounais. Tout litige
            relatif à l&apos;interprétation ou à l&apos;exécution des présentes
            mentions légales sera soumis à la compétence exclusive des tribunaux
            camerounais.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Legal;
