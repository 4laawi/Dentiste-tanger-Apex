import BlogView from "@/components/BlogView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.fr.seo.blog.title,
  description: TRANSLATIONS.fr.seo.blog.description,
  alternates: {
    canonical: '/blog',
    languages: {
      'en': '/en/blog',
      'fr': '/blog',
      'x-default': '/blog',
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
