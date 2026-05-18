import DentalImplantsView from "@/components/DentalImplantsView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.en.seo.implants.title,
  description: TRANSLATIONS.en.seo.implants.description,
  alternates: {
    canonical: 'https://apexdental.ma/en/dental-implants-morocco',
    languages: {
      'en': 'https://apexdental.ma/en/dental-implants-morocco',
      'fr': 'https://apexdental.ma/implants-dentaires-tanger',
    
      'x-default': 'https://apexdental.ma/implants-dentaires-tanger',
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
