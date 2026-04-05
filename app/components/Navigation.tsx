"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Accueil" },
  { path: "/projet", label: "Le Projet" },
  { path: "/programme", label: "Programme" },
  { path: "/infos-pratiques", label: "Infos Pratiques" },
  { path: "/inscription", label: "Inscription" },
  { path: "/partenaires", label: "Partenaires" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b-[6px] border-dotted border-[#FFD54F] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-3">
          <Link href="/" className="flex flex-col items-start" onClick={() => setIsOpen(false)}>
            <Image
              src="/Guirlandes.svg"
              alt="Logo Les petits chemins"
              width={220}
              height={90}
              className="h-auto w-52 md:w-56 lg:w-52"
              priority
            />
            <span
              className="mt-1 text-lg font-semibold text-[#44403C] md:text-xl lg:text-2xl"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Festival Les petits chemins
            </span>
          </Link>

          <div className="hidden items-center space-x-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`rounded-lg px-4 py-2 text-base font-bold transition-all ${
                  isActive(item.path)
                    ? "bg-[#FFD54F] text-[#1A1A1A] neo-border-thin"
                    : "text-[#374151] hover:bg-[#FFF5E6]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg bg-white p-2 neo-border-thin hover:bg-[#f5f5f5] xl:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
          >
            {isOpen ? <X size={24} className="text-[#44403C]" /> : <Menu size={24} className="text-[#44403C]" />}
          </button>
        </div>

        {isOpen && (
          <div id="menu-mobile" className="space-y-2 border-t-2 border-[#44403C] py-4 xl:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 font-bold transition-all ${
                  isActive(item.path)
                    ? "bg-[#FFD54F] text-[#1A1A1A] neo-border-thin"
                    : "text-[#374151] hover:bg-[#FFF5E6]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

    </nav>
  );
}
