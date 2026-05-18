import BlogView from "@/components/BlogView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.blog.title,
  description: TRANSLATIONS.fr.seo.blog.description,
  alternates: {
    canonical: 'https://apexdental.ma/blog',
    languages: {
      'en': 'https://apexdental.ma/en/blog',
      'fr': 'https://apexdental.ma/blog',
      'x-default': 'https://apexdental.ma/blog',
    },
  },
};

export default function BlogPage() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="blog">
      <BlogView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
