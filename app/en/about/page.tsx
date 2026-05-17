import AboutView from "@/components/AboutView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.en.seo.about.title,
  description: TRANSLATIONS.en.seo.about.description,
  alternates: {
    canonical: '/en/about',
    languages: {
      'en': '/en/about',
      'fr': '/about',
    
      'x-default': '/about',
    },
  },
};

export default function AboutPageEN() {
  const lang = 'en';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="about">
      <AboutView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
