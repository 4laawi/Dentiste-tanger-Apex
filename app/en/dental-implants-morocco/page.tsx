import DentalImplantsView from "@/components/DentalImplantsView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.en.seo.implants.title,
  description: TRANSLATIONS.en.seo.implants.description,
  alternates: {
    canonical: '/en/dental-implants-morocco',
    languages: {
      'en': '/en/dental-implants-morocco',
      'fr': '/dental-implants-morocco',
    },
  },
};

export default function Page() {
  const lang = 'en';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="home">
      <DentalImplantsView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
