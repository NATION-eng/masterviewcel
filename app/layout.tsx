import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { DraggableWhatsApp } from "@/components/DraggableWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2e0854",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://masterviewcel.vercel.app"
  ),
  title: "Masterview Consults | Construction, Electrical, Mechanical, Steel & Logistics",
  description:
    "Masterview Consults is a premier indigenous Nigerian enterprise based in Port Harcourt (RC: 3684306). We deliver certified construction works, electrical & mechanical installations, steel & metal projects, technical procurement services, facility maintenance, general engineering consultancy, and nationwide heavy haulage logistics.",
  keywords: [
    "Masterview Consults",
    "Masterview Port Harcourt",
    "Construction Works Nigeria",
    "Electrical Works and Installations",
    "Mechanical Works and Installations",
    "Steel and Metal Projects Fabrication",
    "Technical Procurement Services",
    "Facility and Asset Maintenance",
    "General Engineering Consultancy",
    "Heavy Haulage Logistics Nigeria",
    "Engr Jonathan David CEO",
    "RC 3684306",
  ],
  authors: [{ name: "Masterview Consults" }],
  icons: {
    icon: "/images/m-cel-logo.jpg",
    apple: "/images/m-cel-logo.jpg",
  },
  openGraph: {
    title: "Masterview Consults",
    description:
      "Delivering certified construction works, electrical & mechanical installations, steel & metal projects, technical procurement, maintenance, and logistics across Nigeria. RC: 3684306.",
    url: "https://masterviewcel.vercel.app",
    siteName: "Masterview Consults",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/og-preview.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Masterview Consults - Engineering Solutions For All Enterprises",
        type: "image/jpeg",
      },
      {
        url: "/images/og-preview.png?v=2",
        width: 1200,
        height: 630,
        alt: "Masterview Consults Preview Card",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masterview Consults",
    description:
      "Delivering certified construction works, electrical & mechanical installations, steel & metal projects, technical procurement, maintenance, and logistics across Nigeria. RC: 3684306.",
    images: ["/images/og-preview.jpg?v=2"],
    creator: "@masterviewcel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Masterview Consults",
    alternateName: ["Masterview Consults", "Masterview"],
    url: "https://masterviewcel.vercel.app",
    logo: "https://masterviewcel.vercel.app/images/m-cel-logo.jpg",
    image: "https://masterviewcel.vercel.app/images/og-preview.jpg?v=2",
    description:
      "Masterview Consults is a premier indigenous Nigerian enterprise based in Port Harcourt (RC: 3684306). We deliver certified construction works, electrical & mechanical installations, steel & metal projects, technical procurement services, facility maintenance, general engineering consultancy, and nationwide heavy haulage logistics.",
    identifier: "RC: 3684306",
    taxID: "31664498-0001",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4 Twin-Dove Complex, Anglican Road, Rumualuogu",
      addressLocality: "Port Harcourt",
      addressRegion: "Rivers State",
      addressCountry: "NG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+2349036130587",
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+2347063836336",
        contactType: "technical procurement",
        areaServed: "NG",
        availableLanguage: ["English"],
      },
    ],
    founder: {
      "@type": "Person",
      name: "Engr. Jonathan, David J.",
      jobTitle: "Managing Director / CEO",
      identifier: "COREN: R.79,476",
    },
    sameAs: ["https://www.masterviewcel.com"],
    knowsAbout: [
      "Construction Works",
      "Electrical Works & Installations",
      "Mechanical Works & Installations",
      "Steel & Metal Projects",
      "Technical Procurement Services",
      "Facility & Asset Maintenance",
      "General Engineering Consultancy",
      "Supply Chain & Heavy Haulage Logistics",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-slate-800`}>
        {children}

        {/* Global Moveable / Draggable Floating WhatsApp Connect Button */}
        <DraggableWhatsApp />
      </body>
    </html>
  );
}
