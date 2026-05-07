import UrgenceView from "@/components/UrgenceView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.urgence.title,
  description: TRANSLATIONS.fr.seo.urgence.description,
};

export default function Page() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="urgence">
      <UrgenceView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
