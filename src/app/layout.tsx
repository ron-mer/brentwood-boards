import type { Metadata } from "next";
import { Abril_Fatface, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const abril = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} | Artisan Charcuterie & Grazing Tables in Los Angeles`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} | Artisan Charcuterie & Grazing Tables`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${abril.variable} ${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
