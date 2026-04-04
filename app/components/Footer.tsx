import Link from "next/link";
import { Camera, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-[#1A1A1A] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3
              className="mb-4 text-xl font-black text-[#FFD54F]"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Contact
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Marie Claquin</p>
              <p>marie.claquin@lepredelabataille.fr</p>
              <p>06 68 46 20 55</p>
            </div>
          </div>

          <div>
            <h3
              className="mb-4 text-xl font-black text-[#FFD54F]"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Liens utiles
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="transition hover:text-[#FFD54F]">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="transition hover:text-[#FFD54F]">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="transition hover:text-[#FFD54F]">
                  CGU
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 text-xl font-black text-[#FFD54F]"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Suivez-nous
            </h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-lg bg-white p-3 text-[#1A1A1A] transition hover:bg-[#FFD54F] neo-border-thin"
                aria-label="Facebook"
              >
                <Globe size={24} />
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-white p-3 text-[#1A1A1A] transition hover:bg-[#FFD54F] neo-border-thin"
                aria-label="Instagram"
              >
                <Camera size={24} />
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-white p-3 text-[#1A1A1A] transition hover:bg-[#FFD54F] neo-border-thin"
                aria-label="Email"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8 border-t-2 border-gray-600 pt-8">
          <p className="mb-4 text-center text-sm text-gray-400">Avec le soutien de :</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="rounded-lg bg-white px-6 py-3">
              <p className="font-bold text-[#1A1A1A]">Département 76</p>
            </div>
            <div className="rounded-lg bg-white px-6 py-3">
              <p className="font-bold text-[#1A1A1A]">Le Pré de la Bataille</p>
            </div>
            <div className="rounded-lg bg-white px-6 py-3">
              <p className="font-bold text-[#1A1A1A]">Quartier Libre</p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>© 2026 Festival Les Petits Chemins - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
