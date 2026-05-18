import { Metadata } from 'next';
import { TRANSLATIONS } from '@/constants';
import ClientPageLayout from '@/components/ClientPageLayout';
import SeoServiceView from '@/components/SeoServiceView';
import { SEO_SERVICES } from '@/data/seoServices';

export async function generateMetadata(): Promise<Metadata> {
  const data = SEO_SERVICES["facettes-dentaires-tanger"];
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: {
      canonical: `https://apexdental.ma/${data.slug}`,
      languages: {
        'fr': `https://apexdental.ma/${data.slug}`,
        'x-default': `https://apexdental.ma/${data.slug}`,
      },
    },
  };
}

export default function Page() {
  const lang = 'fr';
  const t = TRANSLATIONS[lang];
  const data = SEO_SERVICES["facettes-dentaires-tanger"];

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
