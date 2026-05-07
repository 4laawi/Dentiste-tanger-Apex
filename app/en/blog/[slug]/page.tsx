import BlogPostView from "@/components/BlogPostView";
import { TRANSLATIONS } from "@/constants";
import { BLOG_POSTS } from "@/blogData";
import ClientPageLayout from "@/components/ClientPageLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostJsonLd } from "@/lib/jsonld";

export async function generateStaticParams() {
  return BLOG_POSTS.en.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.en.find((p) => p.slug === slug);
  
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [{ url: post.image }],
    },
    alternates: {
      canonical: `/en/blog/${slug}`,
      languages: {
        'fr': `/blog/${slug}`,
        'en': `/en/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPageEN({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lang = 'en';
  const t = TRANSLATIONS[lang];
  const post = BLOG_POSTS[lang].find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <ClientPageLayout lang={lang} t={t} currentView="blog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogPostJsonLd(post, lang)) }}
      />
      <BlogPostView t={t} lang={lang} post={post} />
    </ClientPageLayout>
  );
}
