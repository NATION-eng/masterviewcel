import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://www.masterviewcel.com"),
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
  },
  openGraph: {
    title: "Masterview Consults Engineering Limited (M-CEL)",
    description:
      "Delivering engineering precision across oil & gas maintenance, calibration, civil works, and logistics. RC: 7361706.",
    url: "https://www.masterviewcel.com",
    siteName: "Masterview Consults Engineering Limited",
    images: [
      {
        url: "/images/m-cel-logo.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_NG",
    type: "website",
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

        {/* Global Floating WhatsApp Direct Connect Button */}
        <a
          href="https://wa.me/2349036130587?text=Hello%20Masterview%20Consults%20Engineering,%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 whatsapp-float w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          title="Direct WhatsApp Support"
          aria-label="Contact Masterview Consults on WhatsApp"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
