import ProblemsView from "@/components/ProblemsView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.en.seo.problems.title,
  description: TRANSLATIONS.en.seo.problems.description,
  alternates: {
    canonical: 'https://apexdental.ma/en/problemes-traites',
    languages: {
      'en': 'https://apexdental.ma/en/problemes-traites',
      'fr': 'https://apexdental.ma/problemes-traites',
    
      'x-default': 'https://apexdental.ma/problemes-traites',
    },
  },
};

export default function Page() {
  const lang = 'en';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="problems">
      <ProblemsView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
