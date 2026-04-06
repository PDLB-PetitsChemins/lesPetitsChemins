import type { Metadata } from "next";
import { defaultOgImage } from "../lib/seo";

export const metadata: Metadata = {
  title: "Inscription",
  description:
    "Inscription gratuite au festival Les Petits Chemins : reservez votre place et preparez votre venue.",
  alternates: {
    canonical: "/inscription",
  },
  openGraph: {
    title: "Inscription - Festival Les Petits Chemins",
    description:
      "Inscription gratuite au festival Les Petits Chemins : reservez votre place et preparez votre venue.",
    url: "/inscription",
    images: [
      {
        url: defaultOgImage,
        alt: "Inscription au Festival Les Petits Chemins",
      },
    ],
  },
  twitter: {
    title: "Inscription - Festival Les Petits Chemins",
    description:
      "Inscription gratuite au festival Les Petits Chemins : reservez votre place et preparez votre venue.",
    images: [defaultOgImage],
  },
};

export default function InscriptionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
