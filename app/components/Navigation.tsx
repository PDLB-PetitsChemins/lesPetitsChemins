"use client";

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
    <nav className="sticky top-0 z-50 bg-white neo-border-thin">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <div className="text-2xl font-black" style={{ fontFamily: "Nunito, sans-serif" }}>
              <span className="text-[#FF8A65]">Les Petits</span>{" "}
              <span className="text-[#4DB6AC]">Chemins</span>
            </div>
          </Link>

          <div className="hidden items-center space-x-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`rounded-lg px-4 py-2 font-bold transition-all ${
                  isActive(item.path)
                    ? "bg-[#FFD54F] text-[#1A1A1A] neo-border-thin"
                    : "text-[#424242] hover:bg-[#FFF5E6]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg bg-white p-2 neo-border-thin hover:bg-gray-50 md:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div id="menu-mobile" className="space-y-2 border-t-2 border-[#1A1A1A] py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 font-bold transition-all ${
                  isActive(item.path)
                    ? "bg-[#FFD54F] text-[#1A1A1A] neo-border-thin"
                    : "text-[#424242] hover:bg-[#FFF5E6]"
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
