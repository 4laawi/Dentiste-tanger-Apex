import DentalImplantsView from "@/components/DentalImplantsView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.implants.title,
  description: TRANSLATIONS.fr.seo.implants.description,
  alternates: {
    canonical: '/dental-implants-morocco',
    languages: {
      'en': '/en/dental-implants-morocco',
      'fr': '/dental-implants-morocco',
    },
  },
};

export default function Page() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="home">
      <DentalImplantsView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
