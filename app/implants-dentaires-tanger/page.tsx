import DentalImplantsView from "@/components/DentalImplantsView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.implants.title,
  description: TRANSLATIONS.fr.seo.implants.description,
  alternates: {
    canonical: 'https://apexdental.ma/implants-dentaires-tanger',
    languages: {
      'en': 'https://apexdental.ma/en/dental-implants-morocco',
      'fr': 'https://apexdental.ma/implants-dentaires-tanger',
      'x-default': 'https://apexdental.ma/implants-dentaires-tanger',
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûtent les implants dentaires au Maroc ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les implants dentaires au Maroc sont nettement plus abordables qu'en Europe, vous permettant souvent d'économiser 50 à 70% sans compromettre la qualité."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce sûr de se faire poser des implants au Maroc ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, surtout chez APEX. Nous respectons des protocoles de stérilisation et de sécurité internationaux stricts."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure le processus d'implant dentaire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cela implique généralement deux visites. La première pour la pose (3-5 jours), et une seconde 3-6 mois plus tard pour la couronne finale."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles marques d'implants utilisez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous utilisons des marques d'implants premium reconnues mondialement pour assurer un succès à long terme."
      }
    }
  ]
};

export default function Page() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ClientPageLayout lang={lang} t={t} currentView="services">
        <DentalImplantsView t={t} lang={lang} />
      </ClientPageLayout>
    </>
  );
}
