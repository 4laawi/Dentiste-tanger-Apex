import RedaSaouiView from "@/components/RedaSaouiView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.en.seo.doctor.title,
  description: TRANSLATIONS.en.seo.doctor.description,
  alternates: {
    canonical: 'https://apexdental.ma/en/dr-reda-saoui-dentist',
    languages: {
      'en': 'https://apexdental.ma/en/dr-reda-saoui-dentist',
      'fr': 'https://apexdental.ma/dentiste-reda-saoui',
      'x-default': 'https://apexdental.ma/dentiste-reda-saoui',
    },
  },
};

export default function Page() {
  const lang = 'en';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="about">
      <RedaSaouiView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
