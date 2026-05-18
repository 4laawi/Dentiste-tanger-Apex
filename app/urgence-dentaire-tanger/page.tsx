import UrgenceView from "@/components/UrgenceView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

const BASE = 'https://apexdental.ma';

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.urgence.title,
  description: TRANSLATIONS.fr.seo.urgence.description,
  alternates: {
    canonical: `${BASE}/urgence-dentaire-tanger`,
    languages: {
      'en': `${BASE}/en/urgence-dentaire-tanger`,
      'fr': `${BASE}/urgence-dentaire-tanger`,
      'x-default': `${BASE}/urgence-dentaire-tanger`,
    },
  },
};

const urgenceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmergencyService",
      "@id": `${BASE}/urgence-dentaire-tanger#emergency-service`,
      "name": "Urgence Dentaire Tanger — APEX Dental Clinic",
      "description": "Service d'urgence dentaire à Tanger disponible le samedi et sur rendez-vous prioritaire. SOS dentiste, mal de dents, abcès, dent cassée.",
      "telephone": "+212666061666",
      "url": `${BASE}/urgence-dentaire-tanger`,
      "areaServed": [
        { "@type": "City", "name": "Tanger" },
        { "@type": "City", "name": "Fnideq" },
        { "@type": "City", "name": "Tétouan" }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Place des Nations, Avenue Abou Bakr Errazi, Résidence Zainab",
        "addressLocality": "Tanger",
        "postalCode": "90000",
        "addressCountry": "MA"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:30",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:30",
          "closes": "15:00"
        }
      ],
      "parentOrganization": {
        "@id": `${BASE}/#dental-clinic`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Cherchez-vous un dentiste ouvert maintenant à Tanger ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "APEX Dental Clinic est votre cabinet d'urgence dentaire à Tanger. Notre cabinet est prêt à vous recevoir pour toute urgence dentaire. Contactez-nous par téléphone au +212666061666 pour une prise en charge immédiate."
          }
        },
        {
          "@type": "Question",
          "name": "Le cabinet dentaire est-il ouvert le samedi à Tanger ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, APEX Dental Clinic est ouvert le samedi de 09h30 à 15h00 pour les urgences dentaires à Tanger. Nous assurons également des rendez-vous d'urgence sur demande pour les cas graves."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce qui est considéré comme une urgence dentaire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une urgence dentaire inclut : douleur intense (pulpite), gonflement ou abcès dentaire, dent cassée ou expulsée, saignement incontrôlé, ou traumatisme facial. Appelez-nous immédiatement au +212666061666."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il prendre rendez-vous pour une urgence dentaire à Tanger ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bien que nous priorisions les urgences, merci d'appeler au préalable au +212666061666 pour que notre équipe puisse préparer votre accueil et vous soulager au plus vite."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="urgence">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(urgenceSchema) }}
      />
      <UrgenceView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
