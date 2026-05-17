import RedaSaouiView from "@/components/RedaSaouiView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.en.seo.doctor.title,
  description: TRANSLATIONS.en.seo.doctor.description,
  alternates: {
    canonical: '/en/dr-reda-saoui-dentist',
    languages: {
      'en': '/en/dr-reda-saoui-dentist',
      'fr': '/dentiste-reda-saoui',
      'x-default': '/dentiste-reda-saoui',
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
