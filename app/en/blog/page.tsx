import BlogView from "@/components/BlogView";
import { TRANSLATIONS } from "@/constants";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: TRANSLATIONS.en.seo.blog.title,
  description: TRANSLATIONS.en.seo.blog.description,
};

export default function BlogPageEN() {
  const lang = 'en';
  const t = TRANSLATIONS[lang];

  return (
    <ClientPageLayout lang={lang} t={t} currentView="blog">
      <BlogView t={t} lang={lang} />
    </ClientPageLayout>
  );
}
