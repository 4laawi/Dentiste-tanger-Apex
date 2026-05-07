import BlogPostView from "@/components/BlogPostView";
import { TRANSLATIONS } from "@/constants";
import { BLOG_POSTS } from "@/blogData";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return BLOG_POSTS.fr.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.fr.find((p) => p.slug === slug);
  
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lang = 'fr';
  const t = TRANSLATIONS[lang];
  const post = BLOG_POSTS[lang].find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <ClientPageLayout lang={lang} t={t} currentView="blog">
      <BlogPostView t={t} lang={lang} post={post} />
    </ClientPageLayout>
  );
}
