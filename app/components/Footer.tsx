import Link from "next/link";
import { Camera, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#404040] py-10 text-white md:py-14">
      <div className="mb-8 border-b-2 border-[#404040]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-1.5 px-4 pb-2 sm:px-6 lg:px-8">
          {Array.from({ length: 32 }).map((_, index) => (
            <span key={`footer-top-dot-${index}`} className="h-1.5 w-1.5 rounded-full bg-[#FCD34D]" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
            <ul className="space-y-2 text-white">
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
            <div className="flex space-x-3">
              <Link
                href="#"
                className="rounded-3xl bg-white p-2 text-[#1A1A1A] transition hover:bg-[#FFD54F]"
                aria-label="Facebook"
              >
                <Globe size={32} />
              </Link>
              <Link
                href="#"
                className="rounded-3xl bg-white p-2 text-[#1A1A1A] transition hover:bg-[#FFD54F]"
                aria-label="Instagram"
              >
                <Camera size={32} />
              </Link>
              <Link
                href="#"
                className="rounded-3xl bg-white p-2 text-[#1A1A1A] transition hover:bg-[#FFD54F]"
                aria-label="Email"
              >
                <Mail size={32} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="mx-auto flex w-fit items-center justify-center gap-1.5">
            {Array.from({ length: 21 }).map((_, index) => (
              <span key={`footer-red-dot-${index}`} className="h-1.5 w-1.5 rounded-full bg-[#F87171]" />
            ))}
          </div>

          <p
            className="mt-8 text-center text-xl font-bold text-[#FCD34D]"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Avec le soutien de
          </p>

          <div className="mt-6 flex flex-wrap items-start justify-center gap-6">
            <div className="w-24 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[48px] bg-white p-2">
                <span className="text-2xl font-black text-[#1A1A1A]">76</span>
              </div>
              <p className="mt-2 text-base text-white">Département 76</p>
            </div>

            <div className="w-24 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[48px] bg-white p-2">
                <span className="text-base font-black text-[#1A1A1A]">LPB</span>
              </div>
              <p className="mt-2 text-base text-white">Le Pré de la Bataille</p>
            </div>

            <div className="w-24 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[48px] bg-white p-2">
                <span className="text-base font-black text-[#1A1A1A]">QL</span>
              </div>
              <p className="mt-2 text-base text-white">Quartier Libre</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-base text-white">
          <p>© 2026 Festival Les Petits Chemins - Tous droits réservées</p>
        </div>
      </div>
    </footer>
  );
}
