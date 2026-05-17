import UrgenceView from "@/components/UrgenceView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.en.seo.urgence.title,
  description: TRANSLATIONS.en.seo.urgence.description,
  alternates: {
    canonical: '/en/urgence-dentaire-tanger',
    languages: {
      'en': '/en/urgence-dentaire-tanger',
      'fr': '/urgence-dentaire-tanger',
    
      'x-default': '/urgence-dentaire-tanger',
    },
  },
};

export default function Page() {
  const lang = 'en';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="urgence">
      <UrgenceView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
