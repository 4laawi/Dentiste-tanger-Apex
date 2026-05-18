import ContactView from "@/components/ContactView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.contact.title,
  description: TRANSLATIONS.fr.seo.contact.description,
  alternates: {
    canonical: 'https://apexdental.ma/contact',
    languages: {
      'en': 'https://apexdental.ma/en/contact',
      'fr': 'https://apexdental.ma/contact',
    
      'x-default': 'https://apexdental.ma/contact',
    },
  },
};

export default function Page() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="contact">
      <ContactView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
