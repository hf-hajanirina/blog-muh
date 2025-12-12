import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HAJANIRINA Harisoa Muriel - Basketteuse Professionnelle Malgache",
  description: "Blog officiel de Harisoa Muriel Hajanirina, basketteuse professionnelle de l'équipe nationale de Madagascar. Découvrez ma carrière, mes statistiques et suivez mon parcours sportif.",
  keywords: ["basketball", "Madagascar", "Harisoa Muriel", "HAJANIRINA", "athlète malgache", "équipe nationale", "sport"],
  authors: [{ name: "HAJANIRINA Harisoa Muriel" }],
  openGraph: {
    title: "HAJANIRINA Harisoa Muriel - Basketteuse Professionnelle",
    description: "Basketteuse professionnelle de l'équipe nationale de Madagascar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
