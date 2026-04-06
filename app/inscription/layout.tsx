import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription",
  description:
    "Inscription gratuite au festival Les Petits Chemins : reservez votre place et preparez votre venue.",
};

export default function InscriptionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
