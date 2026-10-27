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
  title: "Masterview Consults Engineering Limited | Oil & Gas, Civil, Fabrication & Logistics",
  description:
    "Masterview Consults Engineering Limited (M-CEL) is a premier indigenous Nigerian engineering powerhouse based in Port Harcourt (RC: 7361706). We deliver ISO/IEC 17025 precision calibration, API-standard oil & gas maintenance, turnkey civil & defense infrastructure, ASME structural fabrication, and nationwide heavy haulage supply chain logistics.",
  keywords: [
    "Masterview Consults Engineering Limited",
    "M-CEL Port Harcourt",
    "oil and gas maintenance Nigeria API",
    "ISO IEC 17025 calibration Port Harcourt",
    "civil engineering construction Rivers State",
    "ASME structural fabrication welding",
    "heavy haulage logistics supply chain Nigeria",
    "TotalEnergies contractor Obagi Obite OML 58",
    "Nigerian Army Yenagoa contractor",
    "Librod Energy Onne LMP",
    "NLNG Bonny contractor",
    "Engr Jonathan David CEO",
    "COREN registered engineering firm RC 7361706",
  ],
  authors: [{ name: "Masterview Consults Engineering Limited" }],
  icons: {
    icon: "/images/m-cel-logo.jpg",
    apple: "/images/m-cel-logo.jpg",
  },
  openGraph: {
    title: "Masterview Consults Engineering Limited (M-CEL)",
    description:
      "Delivering engineering precision, ISO/IEC 17025 calibration, oil & gas maintenance, and turnkey civil infrastructure across Nigeria. RC: 7361706.",
    url: "https://masterviewcel.vercel.app",
    siteName: "Masterview Consults Engineering Limited",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/og-preview.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Masterview Consults Engineering Limited - Engineering Solutions For All Enterprises",
        type: "image/jpeg",
      },
      {
        url: "/images/og-preview.png?v=2",
        width: 1200,
        height: 630,
        alt: "Masterview Consults Engineering Limited Preview Card",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masterview Consults Engineering Limited (M-CEL)",
    description:
      "Delivering engineering precision, ISO/IEC 17025 calibration, oil & gas maintenance, and turnkey civil infrastructure across Nigeria. RC: 7361706.",
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
    name: "Masterview Consults Engineering Limited",
    alternateName: ["M-CEL", "Masterview Consults", "Masterview Engineering"],
    url: "https://masterviewcel.vercel.app",
    logo: "https://masterviewcel.vercel.app/images/m-cel-logo.jpg",
    image: "https://masterviewcel.vercel.app/images/og-preview.jpg?v=2",
    description:
      "Masterview Consults Engineering Limited (M-CEL) is a premier indigenous Nigerian engineering powerhouse based in Port Harcourt (RC: 7361706). We deliver ISO/IEC 17025 precision calibration, API-standard oil & gas maintenance, turnkey civil & defense infrastructure, ASME structural fabrication, and nationwide heavy haulage supply chain logistics.",
    identifier: "RC: 7361706",
    taxID: "31664498-0001",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor Salije Plaza, Ada George Road, Mgbuoba",
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
      "Oil and Gas Facility Maintenance (API)",
      "Calibration and Metrology (ISO/IEC 17025)",
      "Turnkey Civil and Defense Infrastructure",
      "Structural Steel Fabrication and Welding (ASME)",
      "Supply Chain & Heavy Haulage Logistics",
      "3D BIM Architectural Modeling",
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
