import RedaSaouiView from "@/components/RedaSaouiView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.doctor.title,
  description: TRANSLATIONS.fr.seo.doctor.description,
};

export default function Page() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="about">
      <RedaSaouiView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
