export function getHomeJsonLd(lang: 'en' | 'fr') {
  const isEn = lang === 'en';
  const baseUrl = 'https://apexdental.ma';
  const pageUrl = isEn ? `${baseUrl}/en` : baseUrl;

  const address = {
    "@type": "PostalAddress",
    "streetAddress": "Place des Nations, Avenue Abou Bakr Errazi, Résidence Zainab",
    "addressLocality": isEn ? "Tangier" : "Tanger",
    "addressRegion": "Tanger-Tétouan-Al Hoceïma",
    "postalCode": "90000",
    "addressCountry": "MA"
  };

  const geo = {
    "@type": "GeoCoordinates",
    "latitude": 35.7767,
    "longitude": -5.8039
  };

  const openingHours = [
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
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
        "@id": `${baseUrl}/#dental-clinic`,
        "name": isEn
          ? "APEX Dental Clinic - Dr. Reda Saoui | Dentist in Tangier"
          : "APEX Dental Clinic - Dr. Reda Saoui | Dentiste à Tanger",
        "description": isEn
          ? "Premium dental clinic in Tangier, Morocco. Expert in implants, veneers, Invisalign and cosmetic dentistry. Dr. Reda Saoui — your trusted dentist in Tangier."
          : "Cabinet dentaire premium à Tanger, Maroc. Expert en implants dentaires, facettes, Invisalign et esthétique dentaire. Dr. Reda Saoui — votre dentiste à Tanger.",
        "image": `${baseUrl}/dr-reda.webp`,
        "logo": `${baseUrl}/logo.png`,
        "url": pageUrl,
        "telephone": "+212666061666",
        "email": "contact@apexdental.ma",
        "priceRange": "$$",
        "currenciesAccepted": "MAD, EUR",
        "paymentAccepted": "Cash, Credit Card, Insurance",
        "hasMap": "https://maps.google.com/maps?cid=0xd0c7fb2933d913f:0x80899102823ebcf3",
        "address": address,
        "geo": geo,
        "openingHoursSpecification": openingHours,
        "medicalSpecialty": [
          "Dentistry",
          "Implantology",
          "Orthodontics",
          "Cosmetic Dentistry"
        ],
        "availableService": [
          { "@type": "MedicalProcedure", "name": isEn ? "Dental Implants" : "Implants Dentaires" },
          { "@type": "MedicalProcedure", "name": isEn ? "Dental Veneers" : "Facettes Dentaires" },
          { "@type": "MedicalProcedure", "name": isEn ? "Teeth Whitening" : "Blanchiment Dentaire" },
          { "@type": "MedicalProcedure", "name": "Invisalign" },
          { "@type": "MedicalProcedure", "name": isEn ? "Dental Emergency" : "Urgence Dentaire" }
        ],
        "sameAs": [
          "https://www.instagram.com/dr_reda_saoui/",
          "https://maps.google.com/maps?cid=0xd0c7fb2933d913f:0x80899102823ebcf3"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "reviewCount": "124"
        }
      },
      {
        "@type": ["Person", "Physician"],
        "@id": `${baseUrl}/#dr-reda-saoui`,
        "name": "Dr. Reda Saoui",
        "jobTitle": isEn ? "Dentist in Tangier" : "Dentiste à Tanger",
        "description": isEn
          ? "Dr. Reda Saoui is a leading dentist in Tangier specialising in implantology, cosmetic dentistry and Invisalign."
          : "Le Dr. Reda Saoui est un dentiste de référence à Tanger, spécialiste en implantologie, dentisterie esthétique et Invisalign.",
        "image": `${baseUrl}/dr-reda.webp`,
        "url": isEn ? `${baseUrl}/en/dr-reda-saoui-dentist` : `${baseUrl}/dentiste-reda-saoui`,
        "worksFor": { "@id": `${baseUrl}/#dental-clinic` },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Faculté de Médecine Dentaire de Rabat"
        },
        "knowsLanguage": ["fr", "ar", "en", "es"],
        "sameAs": [
          "https://www.instagram.com/dr_reda_saoui/"
        ]
      }
    ]
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
