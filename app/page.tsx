import {
  Accessibility,
  Cloud,
  FileText,
  Heart,
  Star,
  Users,
} from "lucide-react";
import { Countdown } from "./components/Countdown";
import { ImageWithFallback } from "./components/ImageWithFallback";
import { NeoBadge } from "./components/NeoBadge";
import { NeoButton } from "./components/NeoButton";
import { NeoCard } from "./components/NeoCard";

const accessibilityItems = [
  { icon: Accessibility, label: "PMR", desc: "Accès complet" },
  { icon: FileText, label: "FALC", desc: "Documents simplifiés" },
  { icon: Heart, label: "Accueil personnalisé", desc: "Équipe formée" },
  { icon: Cloud, label: "Espace calme", desc: "Zone de repos" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      <section className="min-h-screen bg-[#FFF5E6] py-12 md:py-20 lg:flex lg:items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="space-y-7 lg:col-span-3">
              <div className="mb-4 flex items-center space-x-2">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  className="rounded-full bg-white p-2 neo-border-thin"
                >
                  <path
                    d="M10 30 Q 20 20, 30 30 T 50 30"
                    stroke="#FF8A65"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    d="M15 35 Q 25 25, 35 35 T 50 35"
                    stroke="#4DB6AC"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle cx="15" cy="30" r="3" fill="#FFD54F" />
                  <circle cx="45" cy="30" r="3" fill="#F48FB1" />
                </svg>
              </div>

              <h1
                className="text-5xl leading-tight font-black text-[#1A1A1A] sm:text-6xl md:text-7xl"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Festival
                <br />
                Les Petits
                <br />
                Chemins
              </h1>

              <div className="relative h-2 w-50">
                <svg width="200" height="8" className="absolute left-0 -bottom-2">
                  <path
                    d="M0 4 Q 50 0, 100 4 T 200 4"
                    stroke="#FF8A65"
                    strokeWidth="6"
                    fill="none"
                  />
                </svg>
              </div>

              <h2 className="mt-8 text-2xl font-semibold text-[#424242] md:text-3xl">
                Où la culture crée de la citoyenneté
              </h2>

              <div className="space-y-4">
                <div>
                  <NeoBadge color="yellow" className="px-6 py-3 text-2xl md:text-3xl">
                    4 JUIN 2026
                  </NeoBadge>
                </div>
                <p className="text-xl font-bold text-[#1A1A1A] md:text-2xl">
                  📍 Quartier Libre • Rouen
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:pt-6">
                <NeoButton href="/inscription" variant="primary" className="w-full sm:w-auto">
                  Je m&apos;inscris
                </NeoButton>
                <NeoButton href="/projet" variant="secondary" className="w-full sm:w-auto">
                  Découvrir le projet
                </NeoButton>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767274083868-d74fb3123d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwY2VsZWJyYXRpbmclMjBmZXN0aXZhbCUyMGpveXxlbnwxfHx8fDE3Njg3NTYyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Personnes diverses célébrant ensemble"
                  className="h-auto w-full rounded-2xl neo-border-thick neo-shadow-xl"
                  width={1080}
                  height={720}
                />
                <div className="absolute -top-5 -right-4 h-16 w-16 rounded-full bg-[#FFD54F] neo-border-thin md:-top-6 md:-right-6 md:h-20 md:w-20"></div>
                <div className="absolute -bottom-5 -left-4 h-14 w-14 rotate-45 bg-[#F48FB1] neo-border-thin md:-bottom-6 md:-left-6 md:h-16 md:w-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Countdown />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 text-center text-4xl font-black text-[#1A1A1A] md:mb-16 md:text-5xl"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            C&apos;est quoi ce festival ?
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <NeoCard backgroundColor="bg-[#FFF3E0]">
              <div className="space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="rounded-full bg-[#FF8A65] p-4 neo-border-thin">
                    <Users size={48} className="text-[#1A1A1A]" />
                  </div>
                </div>
                <h3
                  className="text-2xl font-black text-[#1A1A1A]"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Créer ensemble
                </h3>
                <p className="text-lg text-[#424242]">
                  12 résidents créent avec des artistes professionnels
                </p>
              </div>
            </NeoCard>

            <NeoCard backgroundColor="bg-[#E8F5E9]">
              <div className="space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="rounded-full bg-[#4DB6AC] p-4 neo-border-thin">
                    <Star size={48} className="text-[#1A1A1A]" />
                  </div>
                </div>
                <h3
                  className="text-2xl font-black text-[#1A1A1A]"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Célébrer la citoyenneté
                </h3>
                <p className="text-lg text-[#424242]">
                  Une journée pour montrer que chacun compte
                </p>
              </div>
            </NeoCard>

            <NeoCard backgroundColor="bg-[#FFF5E6]">
              <div className="space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="rounded-full bg-[#FFD54F] p-4 neo-border-thin">
                    <Heart size={48} className="text-[#1A1A1A]" />
                  </div>
                </div>
                <h3
                  className="text-2xl font-black text-[#1A1A1A]"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Ouvert à tous
                </h3>
                <p className="text-lg text-[#424242]">
                  Gratuit, accessible, festif. Venez comme vous êtes !
                </p>
              </div>
            </NeoCard>
          </div>

          <div className="mt-10 text-center md:mt-12">
            <NeoButton href="/projet" variant="secondary">
              En savoir plus sur le projet →
            </NeoButton>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-black bg-[#4DB6AC] py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-10 text-center text-3xl font-black text-white md:mb-12 md:text-4xl"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Accessible à tous
          </h2>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {accessibilityItems.map((item) => (
              <div key={item.label} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white neo-border-thin md:h-24 md:w-24">
                  <item.icon size={36} className="text-[#2E7D32] md:h-10 md:w-10" strokeWidth={3} />
                </div>
                <h3
                  className="mb-1 text-sm font-black text-white md:text-base"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {item.label}
                </h3>
                <p className="text-xs text-white/90 md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF5E6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659640860300-d8803c5e1f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHZlbnVlJTIwcm91ZW58ZW58MXx8fHwxNzY4NzU2MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quartier Libre - Friche culturelle"
                className="h-72 w-full rounded-2xl object-cover neo-border-thick neo-shadow-xl md:h-96"
                width={1080}
                height={720}
              />
            </div>

            <div className="space-y-6">
              <h2
                className="text-3xl font-black text-[#1A1A1A] md:text-4xl"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Au cœur de la friche culturelle
                <br />
                Quartier Libre
              </h2>
              <p className="text-lg text-[#424242] md:text-xl">
                Un lieu unique à Rouen, ancienne friche SNCF transformée en espace
                culturel et citoyen.
              </p>
              <NeoButton href="/infos-pratiques" variant="primary">
                Voir les infos pratiques
              </NeoButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
