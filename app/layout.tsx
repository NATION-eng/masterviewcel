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
    "Masterview Consults Engineering Limited (M-CEL) is an indigenous engineering, procurement, construction, calibration, and logistics firm based in Port Harcourt, Rivers State, Nigeria. RC: 7361706.",
  keywords: [
    "Masterview Consults",
    "M-CEL",
    "oil and gas maintenance Nigeria",
    "calibration services ISO 17025",
    "civil construction Rivers State",
    "fabrication ASME",
    "logistics Port Harcourt",
    "TotalEnergies contractor",
    "Nigerian Army Yenagoa",
  ],
  authors: [{ name: "Masterview Consults Engineering Limited" }],
  icons: {
    icon: "/images/m-cel-logo.jpg",
    apple: "/images/m-cel-logo.jpg",
  },
  openGraph: {
    title: "Masterview Consults Engineering Limited | Indigenous Engineering Solutions",
    description:
      "Precision oil & gas maintenance, ISO/IEC 17025 calibration, turnkey civil construction, and heavy industrial logistics in Nigeria. RC: 7361706.",
    url: "https://masterviewcel.vercel.app",
    siteName: "Masterview Consults Engineering Limited",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Masterview Consults Engineering Limited - Engineering Solutions For All Enterprises",
        type: "image/jpeg",
      },
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Masterview Consults Engineering Limited Preview Card",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masterview Consults Engineering Limited | Indigenous Engineering Solutions",
    description:
      "Precision oil & gas maintenance, ISO/IEC 17025 calibration, turnkey civil construction, and heavy industrial logistics in Nigeria. RC: 7361706.",
    images: ["/images/og-preview.jpg"],
    creator: "@masterviewcel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-slate-800`}>
        {children}

        {/* Global Moveable / Draggable Floating WhatsApp Connect Button */}
        <DraggableWhatsApp />
      </body>
    </html>
  );
}
