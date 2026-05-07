import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://apexdental.ma';
  
  const staticRoutes = [
    '',
    '/about',
    '/problemes-traites',
    '/dentiste-reda-saoui',
    '/blog',
    '/contact',
    '/urgence-dentaire-tanger',
    '/dental-implants-morocco',
    '/en',
    '/en/about',
    '/en/problemes-traites',
    '/en/dentiste-reda-saoui',
    '/en/blog',
    '/en/contact',
    '/en/english-speaking-dentist-tangier',
    '/en/dental-implants-morocco',
    '/en/urgence-dentaire-tanger',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' || route === '/en' ? 1 : 0.8,
  }));

  // Add blog posts
  BLOG_POSTS.fr.forEach((post) => {
    sitemapEntries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });

  BLOG_POSTS.en.forEach((post) => {
    sitemapEntries.push({
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });

  return sitemapEntries;
}
