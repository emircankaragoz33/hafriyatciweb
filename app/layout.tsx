import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://keleshafriyat.com.tr'),
  title: {
    default: "Keleş Hafriyat | Mersin Toroslar Kazı Dolgu & Hafriyat",
    template: "%s | Keleş Hafriyat"
  },
  description: "Keleş Hafriyat Mersin Toroslar Bölgesinde profesyonel kazı, dolgu, bağ bahçe düzenleme, peyzaj ve tüm hafriyat işlerinizde uzman ekibimizle hizmetinizdeyiz. Hemen teklif alın: 0533 619 92 96",
  keywords: ["keleş hafriyat", "mersin hafriyat", "toroslar hafriyat", "kazı dolgu mersin", "bağ bahçe düzenleme", "peyzaj düzenleme mersin", "Keleş Hafriyat Mersin", "Emrullah Keleş", "hafriyatçı mersin"],
  authors: [{ name: "Keleş Hafriyat" }],
  creator: "Keleş Hafriyat",
  publisher: "Keleş Hafriyat",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://keleshafriyat.com.tr",
    siteName: "Keleş Hafriyat",
    title: "Keleş Hafriyat | Mersin Toroslar Profesyonel Hafriyat Hizmetleri",
    description: "Mersin'in güvenilir hafriyat partneri. Kazı, dolgu, peyzaj ve tüm hafriyat işleri.",
    images: [{
      url: "/logo.png",
      width: 1024,
      height: 1024,
      alt: "Keleş Hafriyat Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keleş Hafriyat | Mersin Hafriyat Çözümleri",
    description: "Profesyonel kazı, dolgu ve hafriyat hizmetleri. Hemen teklif alın.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Keleş Hafriyat",
  "image": "https://keleshafriyat.com.tr/logo.png",
  "@id": "https://keleshafriyat.com.tr",
  "url": "https://keleshafriyat.com.tr",
  "telephone": "0533 619 92 96",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Toroslar",
    "addressLocality": "Mersin",
    "addressRegion": "TR",
    "postalCode": "33000",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.8121,
    "longitude": 34.6415
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/keleshafriyat",
    "https://www.instagram.com/keleshafriyat"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
