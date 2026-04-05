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

              <p className="mx-auto mt-7 max-w-sm text-base font-semibold text-[#424242] md:max-w-xl md:text-2xl lg:mx-0">
                Où la culture crée de la <strong>citoyenneté</strong> !
              </p>

              <div className="mx-auto mt-4 h-1 w-28 -rotate-[5deg] rounded-full bg-[#F87171] lg:mx-0" />

              <div className="mt-6 inline-flex rounded-4xl bg-[#FCD34D] px-8 py-4 neo-border-thin neo-shadow">
                <span
                  className="text-3xl font-black text-[#424242]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  4 juin 2026
                </span>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-[#424242] md:text-xl">
                <MapPin className="h-5 w-5" />
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
              <div className="absolute left-1/2 -top-7 h-16 w-16 -translate-x-1/2 rounded-full bg-[#FCD34D]" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767274083868-d74fb3123d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwY2VsZWJyYXRpbmclMjBmZXN0aXZhbCUyMGpveXxlbnwxfHx8fDE3Njg3NTYyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Personnes diverses célébrant ensemble"
                className="relative z-10 aspect-square w-full rounded-lg object-cover neo-border-thin"
                width={304}
                height={304}
              />
              <div className="absolute left-1/2 -bottom-7 h-16 w-16 -translate-x-1/2 rounded-full bg-[#34D399]" />
            </div>
          </div>
        </div>
      </section>

      <Countdown />

      <section className="border-b-[6px] border-dotted border-[#F87171] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 pb-2 pt-12 sm:px-6 lg:px-8">
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
              <div className="absolute left-1/2 -top-7 h-16 w-16 -translate-x-1/2 rounded-full bg-[#F9A8D4]" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659640860300-d8803c5e1f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHZlbnVlJTIwcm91ZW58ZW58MXx8fHwxNzY4NzU2MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quartier Libre - Friche culturelle"
                className="relative z-10 aspect-square w-full rounded-lg object-cover neo-border-thin"
                width={304}
                height={304}
              />
              <div className="absolute left-1/2 -bottom-7 h-16 w-16 -translate-x-1/2 rounded-full bg-[#F87171]" />
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
