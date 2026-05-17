import HomeView from "@/components/HomeView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";
import { getHomeJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.home.title,
  description: TRANSLATIONS.fr.seo.home.description,
  alternates: {
    canonical: 'https://apexdental.ma',
    languages: {
      'en': 'https://apexdental.ma/en',
      'fr': 'https://apexdental.ma',
    
      'x-default': 'https://apexdental.ma',
    },
  },
  openGraph: {
    title: TRANSLATIONS.fr.seo.home.title,
    description: TRANSLATIONS.fr.seo.home.description,
    url: 'https://apexdental.ma',
    siteName: 'APEX Dental Clinic',
    images: [
      {
        url: '/hero-image.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Home() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getHomeJsonLd(lang)) }}
      />
      <HomeView 
        t={t} 
        expertise={t.expertise} 
        lang={lang}
      />
    </ClientPageLayout>
  );
}
