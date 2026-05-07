import EnglishDentistView from "@/components/EnglishDentistView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.home.title,
  description: TRANSLATIONS.fr.seo.home.description,
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
