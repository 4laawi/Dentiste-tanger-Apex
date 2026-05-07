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
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Faculty of Dental Medicine of Rabat"
    }
  };
}
