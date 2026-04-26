"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "Accueil" },
  { path: "/programme", label: "Programme" },
  { path: "/infos-pratiques", label: "Infos Pratiques" },
  { path: "/inscription", label: "Inscription" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b-[6px] border-dotted border-[#FFD54F] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-3">
          <Link href="/" className="mr-3 flex items-center gap-3 md:mr-4 md:gap-4" onClick={() => setIsOpen(false)}>
            <Image
              src="/Guirlandes.svg"
              alt="Logo Les petits chemins"
              width={220}
              height={90}
              className="h-auto w-40 md:w-44 lg:w-48"
              priority
            />
            <span
              className="hidden text-base font-semibold text-[#44403C] xl:block"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Festival Les Petits Chemins Citoyens
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

          <motion.button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg bg-white p-2 neo-border-thin hover:bg-[#f5f5f5] xl:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 420, damping: 24 }}
          >
            <div className="relative h-6 w-6">
              <motion.span
                className="absolute right-0 left-0 top-1 h-0.5 rounded-full bg-[#44403C]"
                animate={isOpen ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 460, damping: 30 }}
              />
              <motion.span
                className="absolute right-0 left-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-[#44403C]"
                animate={isOpen ? { opacity: 0, scaleX: 0.2 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              />
              <motion.span
                className="absolute right-0 left-0 top-5 h-0.5 rounded-full bg-[#44403C]"
                animate={isOpen ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 460, damping: 30 }}
              />
            </div>
          </motion.button>
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
