const fs = require('fs');
const path = require('path');

const slugs = [
  "facettes-dentaires-tanger",
  "invisalign-tanger",
  "implants-dentaires-tanger",
  "blanchiment-dentaire-tanger"
];

slugs.forEach(slug => {
  const dirPath = path.join(__dirname, 'app', slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const fileContent = `import { Metadata } from 'next';
import { TRANSLATIONS } from '@/constants';
import ClientPageLayout from '@/components/ClientPageLayout';
import SeoServiceView from '@/components/SeoServiceView';
import { SEO_SERVICES } from '@/data/seoServices';

export async function generateMetadata(): Promise<Metadata> {
  const data = SEO_SERVICES["${slug}"];
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: {
      canonical: \`/\${data.slug}\`,
      languages: {
        'fr': \`/\${data.slug}\`,
        'x-default': \`/\${data.slug}\`,
      },
    },
  };
}

export default function Page() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];
  const data = SEO_SERVICES["${slug}"];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Generate Medical Web Page Schema
  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": data.seoTitle,
    "description": data.seoDescription,
    "about": {
      "@type": "MedicalProcedure",
      "name": data.title
    }
  };

  return (
    <ClientPageLayout lang={lang} t={t} currentView="services">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, medicalSchema]) }}
      />
      <SeoServiceView data={data} lang={lang} />
    </ClientPageLayout>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), fileContent, 'utf-8');
});

console.log('Generated SEO pages.');
