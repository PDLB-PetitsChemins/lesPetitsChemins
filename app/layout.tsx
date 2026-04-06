import type { Metadata } from "next";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { defaultOgImage, siteUrl } from "./lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Festival Les Petits Chemins",
    template: "Festival Les Petits Chemins - %s",
  },
  description: "Festival citoyen et culturel à Rouen.",
  keywords: [
    "festival citoyen",
    "festival inclusif",
    "Rouen",
    "Les Petits Chemins",
    "Le Pré de la Bataille",
    "quartier libre",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Festival Les Petits Chemins",
    url: siteUrl,
    images: [
      {
        url: defaultOgImage,
        alt: "Festival Les Petits Chemins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
