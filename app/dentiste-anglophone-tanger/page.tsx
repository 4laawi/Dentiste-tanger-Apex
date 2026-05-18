import EnglishDentistView from "@/components/EnglishDentistView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.english_dentist.title,
  description: TRANSLATIONS.fr.seo.english_dentist.description,
  alternates: {
    canonical: 'https://apexdental.ma/dentiste-anglophone-tanger',
    languages: {
      'en': 'https://apexdental.ma/en/english-speaking-dentist-tangier',
      'fr': 'https://apexdental.ma/dentiste-anglophone-tanger',
    
      'x-default': 'https://apexdental.ma/dentiste-anglophone-tanger',
    },
  },
};

export default function Page() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="about">
      <EnglishDentistView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
