import type { Metadata } from "next";
import { Sen, Work_Sans, Amiri, Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFloatingButton from "@/components/ContactFloatingButton";
import MobileActionBar from "@/components/MobileActionBar";
import { TRANSLATIONS } from "@/constants";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-sen",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "APEX | Dr. Reda Saoui - Dentiste à Tanger",
  description: "Bienvenue chez APEX Dental Clinic. Le Dr. Reda Saoui, votre dentiste de confiance à Tanger, propose des soins d'excellence : implants, facettes et Invisalign.",
  metadataBase: new URL('https://apexdental.ma'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'fr': '/',
      'x-default': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#6AE0F2',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}>) {
  const { lang } = await params;
  const currentLang = lang || 'fr';
  
  return (
    <html lang={currentLang} className={`${sen.variable} ${workSans.variable} ${amiri.variable} ${karla.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
