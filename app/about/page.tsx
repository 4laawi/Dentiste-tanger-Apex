import AboutView from "@/components/AboutView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.about.title,
  description: TRANSLATIONS.fr.seo.about.description,
  alternates: {
    canonical: 'https://apexdental.ma/about',
    languages: {
      'en': 'https://apexdental.ma/en/about',
      'fr': 'https://apexdental.ma/about',
    
      'x-default': 'https://apexdental.ma/about',
    },
  },
};

export default function AboutPage() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="about">
      <AboutView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
