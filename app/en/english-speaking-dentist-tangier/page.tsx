import EnglishDentistView from "@/components/EnglishDentistView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.en.seo.english_dentist.title,
  description: TRANSLATIONS.en.seo.english_dentist.description,
  alternates: {
    canonical: '/en/english-speaking-dentist-tangier',
    languages: {
      'en': '/en/english-speaking-dentist-tangier',
      'fr': '/english-speaking-dentist-tangier',
    
      'x-default': '/english-speaking-dentist-tangier',
    },
  },
};

export default function Page() {
  const lang = 'en';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="about">
      <EnglishDentistView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
