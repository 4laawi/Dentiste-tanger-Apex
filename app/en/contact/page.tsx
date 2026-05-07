import ContactView from "@/components/ContactView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.en.seo.contact.title,
  description: TRANSLATIONS.en.seo.contact.description,
};

export default function Page() {
  const lang = 'en';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="contact">
      <ContactView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
