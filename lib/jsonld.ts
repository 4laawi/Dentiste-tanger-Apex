export function getHomeJsonLd(lang: 'en' | 'fr') {
  const isEn = lang === 'en';
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "APEX Dental Clinic - Dr. Reda Saoui",
    "image": "https://apexdental.ma/dr-reda.webp",
    "url": isEn ? "https://apexdental.ma/en" : "https://apexdental.ma",
    "telephone": "0666-061666",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Place des Nations, Avenue Abou Bakr Errazi, Résidence Zainab",
      "addressLocality": "Tangier",
      "postalCode": "90000",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.7767,
      "longitude": -5.8039
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:30",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:30",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/dr_reda_saoui/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Faculty of Dental Medicine of Rabat"
    }
  };
}

export function getBlogPostJsonLd(post: any, lang: 'en' | 'fr') {
  const baseUrl = 'https://apexdental.ma';
  const postUrl = `${baseUrl}${lang === 'en' ? '/en' : ''}/blog/${post.slug}`;
  
  // Basic BlogPosting schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `${baseUrl}${post.image}`,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": `${baseUrl}${lang === 'en' ? '/en/dr-reda-saoui-dentist' : '/dentiste-reda-saoui'}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "APEX Dental Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "description": post.seoDescription,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    }
  };

  // Attempt to parse FAQs from content
  const faqs: any[] = [];
  const faqMatch = post.content.matchAll(/<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/g);
  for (const match of faqMatch) {
    if (match[1] && match[2]) {
      faqs.push({
        "@type": "Question",
        "name": match[1].replace(/<[^>]*>?/gm, ''),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": match[2].replace(/<[^>]*>?/gm, '')
        }
      });
    }
  }

  if (faqs.length > 0) {
    return [
      blogSchema,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs
      }
    ];
  }

  return blogSchema;
}
