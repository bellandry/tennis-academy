import { programmes } from "@/constants";
import { SITE_URL, siteConfig } from "@/lib/site";

export function StructuredData() {
  const programOffers = programmes.map((program) => ({
    "@type": "Offer",
    name: program.title,
    description: program.description,
    url: `${SITE_URL}/programs/${program.id}`,
    category: "Cours de tennis",
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "SportsActivityLocation"],
        "@id": `${SITE_URL}/#business`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: siteConfig.logo,
          contentUrl: siteConfig.logo,
        },
        image: siteConfig.image,
        telephone: siteConfig.telephone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.countryCode,
        },
        areaServed: {
          "@type": "City",
          name: "Bafoussam",
        },
        sameAs: siteConfig.socialProfiles,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: siteConfig.telephone,
          email: siteConfig.email,
          availableLanguage: ["fr"],
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "https://schema.org/Monday",
              "https://schema.org/Tuesday",
              "https://schema.org/Wednesday",
              "https://schema.org/Thursday",
              "https://schema.org/Friday",
            ],
            opens: "06:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "https://schema.org/Saturday",
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "https://schema.org/Sunday",
            opens: "10:00",
            closes: "16:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Programmes de tennis FOTA",
          itemListElement: programOffers,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${SITE_URL}/#business` },
        inLanguage: "fr-CM",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
