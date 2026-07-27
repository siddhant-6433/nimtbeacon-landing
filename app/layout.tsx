import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script"; // Imported for safe script injection

import AdmissionsChatbot from "@/components/AdmissionsChatbot";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIMT Beacon School | Best CBSE Day & Boarding School in Ghaziabad",
  description:
    "Discover educational excellence at NIMT Beacon School, Ghaziabad. Offering Play School, Day Boarding, NEET/JEE foundation, and safe residential campus. Established 2001.",
  keywords: [
    "Best CBSE School in Ghaziabad",
    "Best Boarding School in Ghaziabad",
    "Top CBSE School in Ghaziabad",
    "Day Boarding School in Ghaziabad",
    "CBSE School Near Me",
    "School Admission 2026",
    "Best School for Holistic Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* 1. Google Tag Manager - Injected as high up in the <head> as possible */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M9J8RJ7V');
            `,
          }}
        />
      </head>
      
      <body className="font-sans bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        {/* 2. Google Tag Manager (noscript) - Placed immediately after the opening <body> tag */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9J8RJ7V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <AdmissionsChatbot />
      </body>
    </html>
  );
}