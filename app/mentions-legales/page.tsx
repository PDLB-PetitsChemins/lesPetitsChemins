import type { Metadata } from "next";
import { defaultOgImage } from "../lib/seo";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales et politique de confidentialité du festival Les Petits Chemins.",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales - Festival Les Petits Chemins",
    description:
      "Mentions légales et politique de confidentialité du festival Les Petits Chemins.",
    url: "/mentions-legales",
    images: [
      {
        url: defaultOgImage,
        alt: "Mentions légales du Festival Les Petits Chemins",
      },
    ],
  },
  twitter: {
    title: "Mentions légales - Festival Les Petits Chemins",
    description:
      "Mentions légales et politique de confidentialité du festival Les Petits Chemins.",
    images: [defaultOgImage],
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-[#FFF7DF] px-4 pb-16 pt-10 text-[#1A1A1A] md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 rounded-3xl border-2 border-dashed border-[#1A1A1A] bg-[#FFE69A] p-6 md:p-8">
          <h1 className="font-['Bebas_Neue'] text-4xl uppercase tracking-wide md:text-6xl">
            Mentions légales
          </h1>
          <p className="mt-3 text-base md:text-lg">
            Informations légales et politique de confidentialité du site du festival
            Les Petits Chemins.
          </p>
        </header>

        <section id="mentions-legales" className="mb-8 rounded-3xl border-2 border-dashed border-[#1A1A1A] bg-white p-6 md:p-8">
          <h2 className="font-['Bebas_Neue'] text-3xl uppercase tracking-wide md:text-4xl">
            Mentions légales
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed md:text-base">
            <p>
              <strong>Éditeur du site:</strong> Association Le Pré de la Bataille
            </p>
            <p>
              <strong>Nom du site:</strong> Festival Les Petits Chemins
            </p>
            <p>
              <strong>Contact:</strong> festivalpetitschemins@gmail.com
            </p>
            <p>
              <strong>Hébergement:</strong> Vercel Inc.
            </p>
            <p>
              <strong>Responsabilité:</strong> Les informations diffusées sur ce site
              sont fournies à titre informatif. L&apos;association s&apos;efforce d&apos;assurer
              leur exactitude et leur mise à jour.
            </p>
            <p>
              <strong>Propriété intellectuelle:</strong> Les contenus de ce site
              (textes, images, éléments graphiques) sont protégés par le droit de
              la propriété intellectuelle. Toute reproduction non autorisée est
              interdite.
            </p>
          </div>
        </section>

        <section
          id="politique-confidentialite"
          className="rounded-3xl border-2 border-dashed border-[#1A1A1A] bg-white p-6 md:p-8"
        >
          <h2 className="font-['Bebas_Neue'] text-3xl uppercase tracking-wide md:text-4xl">
            Politique de confidentialité et protection des données personnelles
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed md:text-base">
            <p>
              Dans le cadre du Festival Les Petits Chemins, l&apos;Association Le Pré de
              la Bataille collecte des données personnelles vous concernant.
              Conformément au Règlement Général sur la Protection des Données (RGPD -
              UE 2016/679) et à la loi Informatique et Libertés, nous vous informons
              des conditions de traitement de ces données.
            </p>
            <p>
              <strong>Responsable du traitement:</strong> Association Le Pré de la
              Bataille - Pôle Parcours Social 39 rue du Pré de la Bataille 76000
              Rouen représentée Sophie LION, Directrice Générale.
            </p>
            <p>
              <strong>Données collectées:</strong> Nom, prénom, adresse électronique,
              numéro de téléphone, nom de la structure professionnelle.
            </p>
            <p>
              <strong>Finalités du traitement:</strong> Ces données sont collectées pour
              les finalités suivantes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Gestion des inscriptions et de la participation au festival</li>
              <li>
                Communication relative à l&apos;événement (informations pratiques,
                programme, modifications éventuelles)
              </li>
              <li>Suivi des partenariats professionnels</li>
            </ul>
            <p>
              <strong>Base légale:</strong> Le traitement est fondé sur votre
              consentement (article 6.1.a du RGPD), recueilli lors de la saisie de
              vos informations sur le présent formulaire.
            </p>
            <p>
              <strong>Durée de conservation:</strong> Vos données sont conservées
              pendant une durée de 12 mois à compter de la date du festival, puis
              supprimées ou anonymisées.
            </p>
            <p>
              <strong>Destinataires des données:</strong> Les données collectées sont
              destinées exclusivement à l&apos;équipe organisatrice du festival au sein
              de l&apos;association Le Pré de la Bataille. Elles ne font l&apos;objet d&apos;aucune
              cession, vente ou transmission à des tiers.
            </p>
            <p>
              <strong>Vos droits:</strong> Conformément à la réglementation en
              vigueur, vous disposez des droits suivants:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification en cas d&apos;inexactitude</li>
              <li>Droit à l&apos;effacement (&laquo; droit à l&apos;oubli &raquo;)</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>
                Droit de retirer votre consentement à tout moment, sans que cela
                remette en cause la licéité du traitement effectué avant le retrait
              </li>
            </ul>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse
              suivante: dpo@lepredelabataille.fr.
            </p>
            <p>
              En cas de réclamation, vous pouvez également saisir la CNIL
              (Commission Nationale de l&apos;Informatique et des Libertés) via son site
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold underline decoration-2 underline-offset-4"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
