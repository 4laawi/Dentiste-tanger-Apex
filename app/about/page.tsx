import AboutView from "@/components/AboutView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.about.title,
  description: TRANSLATIONS.fr.seo.about.description,
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
