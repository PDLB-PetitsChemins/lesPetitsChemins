import {
  Accessibility,
  Cloud,
  FileText,
  Heart,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Countdown } from "./components/Countdown";
import { ImageWithFallback } from "./components/ImageWithFallback";

const festivalCards = [
  {
    title: "Créer ensemble",
    text: "12 résidents créent des improvisations avec des artistes professionnels",
    bg: "bg-[#FECACA]",
    iconBg: "bg-[#F87171]",
    icon: Users,
  },
  {
    title: "Célébrer la citoyenneté",
    text: "Une journée pour montrer que chacun compte",
    bg: "bg-[#E7E5E4]",
    iconBg: "bg-[#34D399]",
    icon: Star,
  },
  {
    title: "Ouvert à tous",
    text: "Gratuit, accessible, festif. Venez comme vous êtes !",
    bg: "bg-[#FFF5E6]",
    iconBg: "bg-[#FCD34D]",
    icon: Heart,
  },
];

const accessibilityItems = [
  { icon: Accessibility, label: "PMR", desc: "Accès complet" },
  { icon: FileText, label: "FALC", desc: "Facile à lire et à comprendre" },
  { icon: Heart, label: "Accueil personnalisé", desc: "Équipe formée" },
  { icon: Cloud, label: "Espace calme", desc: "Zone de repos" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      <section className="border-b-[6px] border-dotted border-[#FF8A65] bg-[#FFF5E6] pt-4 md:pt-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 pb-16 md:pb-20 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1
                className="mx-auto max-w-xs text-4xl leading-tight font-black text-[#424242] md:max-w-lg md:text-6xl lg:mx-0"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Festival Les Petits Chemins
              </h1>

              <div className="mx-auto mt-7 max-w-sm md:max-w-xl lg:mx-0 lg:w-fit lg:max-w-none">
                <p className="text-base font-semibold text-[#424242] md:text-2xl">
                  Où la culture crée de la <strong>citoyenneté</strong> !
                </p>
                <div className="mt-2 flex justify-end">
                  <div className="h-1 w-36 -rotate-[5deg] rounded-full bg-[#F87171]" />
                </div>
              </div>

              <div className="mt-6 inline-flex rounded-4xl bg-[#FCD34D] px-8 py-4 neo-border-thin neo-shadow">
                <span
                  className="text-3xl font-black text-[#424242]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  4 juin 2026
                </span>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-base font-bold text-[#374151] md:text-xl lg:justify-start">
                <MapPin className="h-5 w-5 shrink-0 text-[#E53935] md:h-6 md:w-6" strokeWidth={2.5} />
                <span>Quartier Libre - Rouen</span>
              </div>

              <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-4 lg:mx-0">
                <Link
                  href="/inscription"
                  className="inline-flex h-14 items-center justify-center rounded-lg bg-[#F87171] px-6 text-base font-extrabold text-[#424242] neo-border-thin neo-shadow"
                >
                  Je m&apos;inscris
                </Link>
                <Link
                  href="/projet"
                  className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-6 text-base font-semibold text-[#424242] neo-border-thin neo-shadow"
                >
                  Je découvre le projet
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-76">
              <div className="absolute left-1/2 -top-10 z-20 h-16 w-16 -translate-x-1/2 rounded-full bg-[#FCD34D]" />
              <ImageWithFallback
                src="/hero_img.png"
                alt="Personnes diverses célébrant ensemble"
                className="relative z-10 aspect-square w-full rounded-lg object-cover neo-border-thin"
                width={304}
                height={304}
              />
              <div className="absolute left-1/2 -bottom-10 z-20 h-16 w-16 -translate-x-1/2 rounded-full bg-[#34D399]" />
            </div>
          </div>
        </div>
      </section>

      <Countdown />

      <section className="relative border-b-[6px] border-dotted border-[#F87171] bg-white pb-16 pt-28 md:pb-20 md:pt-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-2 h-16 md:h-20"
          style={{
            backgroundImage: "url('/girlandes_round.svg')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center top",
            backgroundSize: "clamp(180px, 32vw, 320px) auto",
          }}
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 pb-2 pt-0 sm:px-6 lg:px-8">
          <h2
            className="mb-10 text-center text-3xl font-extrabold text-[#424242] md:text-5xl"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            C&apos;est quoi ce festival ?
          </h2>

          <div className="mx-auto grid max-w-md grid-cols-1 gap-5 md:max-w-5xl md:grid-cols-3">
            {festivalCards.map((item) => (
              <div key={item.title} className={`rounded-lg p-8 text-center neo-border-thin ${item.bg}`}>
                <div className="mb-4 flex justify-center">
                  <div className={`rounded-3xl p-2 ${item.iconBg}`}>
                    <item.icon className="h-8 w-8 text-[#424242]" />
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-[#424242]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-[#424242]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/projet"
              className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-8 text-base font-normal text-[#424242] neo-border-thin neo-shadow"
            >
              En savoir plus sur le projet
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b-[6px] border-dotted border-[#F87171] bg-[#6EE7B7]/60 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mx-auto mb-11 max-w-xl text-center text-3xl font-extrabold text-[#424242] md:text-5xl"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            Un festival accessible à tous
          </h2>

          <div className="mx-auto grid max-w-76 grid-cols-2 gap-x-6 gap-y-8 md:max-w-4xl md:grid-cols-4">
            {accessibilityItems.map((item) => (
              <div key={item.label} className="text-center">
                <div className="mx-auto mb-3 w-fit rounded-[40px] bg-white p-6">
                  <item.icon size={32} className="text-[#424242]" />
                </div>
                <h3
                  className="text-xl font-bold text-[#424242]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  {item.label}
                </h3>
                <p className="mt-1 text-base text-[#424242]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF5E6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mx-auto mb-12 max-w-xl text-center text-3xl font-extrabold text-[#424242] md:text-5xl"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            Au coeur de la friche culturelle Quartier Libre
          </h2>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-76">
              <div className="absolute left-1/2 -top-10 z-20 h-16 w-16 -translate-x-1/2 rounded-full bg-[#F9A8D4]" />
              <ImageWithFallback
                src="/quartier_libre_entree.png"
                alt="Quartier Libre - Friche culturelle"
                className="relative z-10 aspect-square w-full rounded-lg object-cover neo-border-thin"
                width={304}
                height={304}
              />
              <div className="absolute left-1/2 -bottom-10 z-20 h-16 w-16 -translate-x-1/2 rounded-full bg-[#F87171]" />
            </div>

            <div className="mx-auto w-full max-w-md text-center lg:mx-0 lg:text-left">
              <p className="text-base text-[#1A1A1A] md:text-lg">
                Un lieu unique à Rouen, ancienne friche SNCF transformée en espace culturel et citoyen.
              </p>

              <Link
                href="/infos-pratiques"
                className="mx-auto mt-8 inline-flex h-14 items-center justify-center rounded-lg bg-[#FCD34D] px-8 text-base font-bold text-[#424242] neo-border-thin neo-shadow lg:mx-0"
              >
                Voir les infos pratiques
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
