import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    keywords?: string;
    image?: string;
    type?: string;
    schema?: Record<string, any>;
    lang?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    keywords,
    image = 'https://www.apexdental.ma/og-image.jpg', // Ensure this exists or use a default
    type = 'website',
    schema,
    lang = 'fr'
}) => {
    const siteTitle = "APEX | Dr. Reda Saoui - Dentiste à Tanger";
    const finalTitle = title ? `${title} | APEX` : siteTitle;
    const finalDescription = description || "APEX - Cabinet dentaire du Dr. Reda Saoui à Tanger. Votre dentiste de confiance pour des soins dentaires d'excellence : implants, facettes, blanchiment et Invisalign.";
    const finalCanonical = canonical || "https://www.apexdental.ma/";

    const jsonLd = schema ? JSON.stringify(schema) : JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "APEX Dental Clinic - Dr. Reda Saoui",
        "image": image,
        "url": "https://www.apexdental.ma",
        "telephone": "+212666061666",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Numero 8, Résidence Zainab, Place des Nations, Av. Abou Bakr Errazi",
            "addressLocality": "Tangier",
            "postalCode": "90010",
            "addressCountry": "MA"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "09:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "09:30",
                "closes": "15:00"
            }
        ],
        "priceRange": "$$"
    });

    return (
        <Helmet>
            {/* Standard Metadata */}
            <html lang={lang} />
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={finalCanonical} />

            {/* Open Graph */}
            <meta property="og:site_name" content="APEX Dental Clinic" />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={finalCanonical} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">{jsonLd}</script>
        </Helmet>
    );
};

export default SEO;
