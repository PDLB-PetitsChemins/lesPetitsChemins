import {
  Bike,
  Building2,
  CalendarDays,
  Clock3,
  Coffee,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageSquare,
  Music2,
  PartyPopper,
  Scissors,
  Shirt,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { defaultOgImage } from "../lib/seo";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "Programme complet du festival Les Petits Chemins : matinée professionnelle, après-midi festif et informations pratiques.",
  alternates: {
    canonical: "/programme",
  },
  openGraph: {
    title: "Programme - Festival Les Petits Chemins",
    description:
      "Découvrez le programme complet du festival : matinée professionnelle et après-midi festif ouvert à tous.",
    url: "/programme",
    images: [
      {
        url: defaultOgImage,
        alt: "Programme du Festival Les Petits Chemins",
      },
    ],
  },
  twitter: {
    title: "Programme - Festival Les Petits Chemins",
    description:
      "Découvrez le programme complet du festival : matinée professionnelle et après-midi festif ouvert à tous.",
    images: [defaultOgImage],
  },
};

type TimelineItem = {
  time: string;
  title: string;
  icon: LucideIcon;
  iconBg: string;
  rowBg: string;
};

type AudienceCard = {
  title: string;
  bg: string;
  iconBg: string;
  items: string[];
  icon: LucideIcon;
};

type AfternoonCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  bg: string;
  iconBg: string;
};

const timelineItems: TimelineItem[] = [
  {
    time: "9h - 9h30",
    title: "Accueil et petit-déjeuner",
    icon: Coffee,
    iconBg: "bg-[#C4B5FD]",
    rowBg: "bg-[#DCFCE7]",
  },
  {
    time: "9h30 - 10h",
    title: "Présentation de l'association",
    icon: Users,
    iconBg: "bg-[#34D399]",
    rowBg: "bg-white",
  },
  {
    time: "10h - 10h40",
    title:
      "Présentation du Centre d'Activités de Jour et du Foyer d'Hébergement",
    icon: Sparkles,
    iconBg: "bg-[#34D399]",
    rowBg: "bg-[#DCFCE7]",
  },
  {
    time: "10h50 - 11h",
    title: "Pause café",
    icon: Coffee,
    iconBg: "bg-[#C4B5FD]",
    rowBg: "bg-[#DCFCE7]",
  },
  {
    time: "11h - 11h40",
    title:
      "Présentation du Service d'Accompagnement à la Vie Sociale et du Foyer d'Accueil Médicalisé",
    icon: Sparkles,
    iconBg: "bg-[#34D399]",
    rowBg: "bg-white",
  },
  {
    time: "12h - 12h30",
    title: "Projection capsule vidéo et clôture",
    icon: CalendarDays,
    iconBg: "bg-[#34D399]",
    rowBg: "bg-white",
  },
];

const afternoonCards: AfternoonCard[] = [
  {
    title: "Stands citoyens",
    description:
      "Tenus par les personnes accompagnées et les professionnels : découvrez leurs actions sur le territoire.",
    icon: MessageSquare,
    bg: "bg-white",
    iconBg: "bg-[#FCD34D]",
  },
  {
    title: "Animations Quartier Libre",
    description: "Réparation de vélo, jardinage, friperie, couture.",
    icon: Bike,
    bg: "bg-white",
    iconBg: "bg-[#FCD34D]",
  },
  {
    title: "Happenings artistiques",
    description: "Scénettes et improvisations par l'équipe Kocasse.",
    icon: PartyPopper,
    bg: "bg-white",
    iconBg: "bg-[#FCD34D]",
  },
  {
    title: "Boîte à mots citoyens",
    description: "Partagez votre vision de la citoyenneté.",
    icon: HeartHandshake,
    bg: "bg-white",
    iconBg: "bg-[#FCD34D]",
  },
  {
    title: "DJ set dansant (16h - 17h30)",
    description: "On finit en beauté !",
    icon: Music2,
    bg: "bg-[#FCD34D]",
    iconBg: "bg-[#C4B5FD]",
  },
];

const audienceCards: AudienceCard[] = [
  {
    title: "La matinée s'adresse à ...",
    bg: "bg-[#BBF7D0]",
    iconBg: "bg-[#34D399]",
    icon: Building2,
    items: [
      "Tous les travailleurs sociaux",
      "Structures ESMS",
      "Institutionnels et partenaires",
      "Étudiants en formation",
    ],
  },
  {
    title: "L'après-midi accueille ...",
    bg: "bg-[#FFF5E6]",
    iconBg: "bg-[#FCD34D]",
    icon: Users,
    items: [
      "Tout le monde !",
      "Familles",
      "Habitants du quartier",
      "Personnes accompagnées d'ESMS du territoire",
      "Curieux et curieuses",
    ],
  },
];

const comfortItems = [
  { label: "Accueil dès 9h", icon: Clock3 },
  { label: "Temps calmes prévus", icon: Sparkles },
  { label: "100% accessible", icon: GraduationCap },
];

function DotsRow({ colorClass }: { colorClass: string }) {
  return (
    <div className="mx-auto flex w-fit items-center justify-center gap-1.5">
      {Array.from({ length: 21 }).map((_, index) => (
        <span
          key={`programme-dot-${colorClass}-${index}`}
          className={`h-1.5 w-1.5 rounded-full ${colorClass}`}
        />
      ))}
    </div>
  );
}

export default function ProgrammePage() {
  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      <section className="relative overflow-hidden border-b-[6px] border-dotted border-[#FCD34D] bg-[#FFF5E6] py-10 md:py-14">
        <div
          className="pointer-events-none absolute inset-x-0 top-2 h-16 md:h-20"
          style={{
            backgroundImage: "url('/girlandes_triangle.svg')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center top",
            backgroundSize: "clamp(180px, 32vw, 320px) auto",
          }}
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-14 max-w-4xl text-center md:mt-16">
            <div className="relative mx-auto w-fit">
              <Sparkles
                className="absolute -left-12 top-8 h-7 w-7 -rotate-12 text-[#FCD34D] md:-left-16 md:top-10 md:h-9 md:w-9"
                aria-hidden
              />
              <Sparkles
                className="absolute -right-12 top-2 h-7 w-7 rotate-12 text-[#F9A8D4] md:-right-16 md:top-5 md:h-9 md:w-9"
                aria-hidden
              />
              <Sparkles
                className="absolute -left-10 bottom-8 h-6 w-6 text-[#FB7185] md:-left-14 md:bottom-10 md:h-8 md:w-8"
                aria-hidden
              />
              <Sparkles
                className="absolute -right-10 bottom-6 h-6 w-6 text-[#4DB6AC] md:-right-14 md:bottom-9 md:h-8 md:w-8"
                aria-hidden
              />

              <div className="mx-auto inline-flex rounded-[999px] bg-[#FCD34D] px-10 py-8 neo-border-thin neo-shadow md:px-16 md:py-14">
                <p className="text-4xl leading-tight font-black text-[#424242] md:text-6xl">
                  4 juin
                  <br />
                  2026
                </p>
              </div>
            </div>

            <h1 className="mt-8 text-4xl font-black text-[#424242] md:text-6xl">
              Programme de la journée
            </h1>

            <div className="mx-auto mt-5 max-w-2xl">
              <p className="text-base font-semibold text-[#424242] md:text-xl">
                Une journée qui{" "}
                <span className="relative inline-block font-bold text-[#424242]">
                  change tout
                  <span
                    className="pointer-events-none absolute -bottom-0.5 left-0 h-1 w-full -rotate-3 rounded-full bg-[#34D399]"
                    aria-hidden
                  />
                </span>{" "}
                !
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 text-[#424242] sm:flex-row">
              <div className="inline-flex items-center gap-2 rounded-[33px] bg-[#34D399] px-6 py-3 neo-border-thin">
                <Clock3 className="h-5 w-5" />
                <span className="font-extrabold">9h00 - 12h30</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-[33px] bg-[#FCD34D] px-6 py-3 neo-border-thin">
                <Clock3 className="h-5 w-5" />
                <span className="font-extrabold">14h - 17h30</span>
              </div>
            </div>

            <p className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-[#374151] md:text-lg">
              <CalendarDays className="h-5 w-5 text-[#F87171]" />
              <MapPin className="h-5 w-5 text-[#F87171]" />
              Quartier Libre - Rouen
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-[6px] border-dotted border-[#F87171] bg-[#BBF7D0]/50 py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <DotsRow colorClass="bg-[#F87171]" />

          <h2 className="mt-7 text-center text-3xl font-extrabold text-[#424242] md:text-5xl">
            Matinée professionnelle
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[#1A1A1A] md:text-lg">
            Pour les professionnels du secteur social, médico-social et les
            partenaires institutionnels.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-4 neo-border-thin md:p-6">
            <div className="space-y-4">
              {timelineItems.map((item) => (
                <article
                  key={item.time}
                  className={`rounded-2xl p-4 neo-border-thin ${item.rowBg}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-2xl p-2.5 ${item.iconBg}`}>
                      <item.icon className="h-5 w-5 text-[#424242]" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#424242] md:text-lg">
                        {item.time}
                      </p>
                      <p className="mt-1 text-base text-[#424242]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b-[6px] border-dotted border-[#F87171] bg-[#FFF5E6] pb-14 pt-24 md:pb-20 md:pt-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-2 h-16 md:h-20"
          style={{
            backgroundImage: "url('/girlandes_triangle.svg')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center top",
            backgroundSize: "clamp(180px, 32vw, 320px) auto",
          }}
          aria-hidden
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto mt-7 max-w-3xl text-center text-3xl font-extrabold text-[#424242] md:text-5xl">
            Après-midi festif et participatif, ouvert à tous !
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {afternoonCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-2xl p-8 neo-border-thin ${card.bg} ${
                  card.title.includes("DJ") ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`mx-auto flex w-fit rounded-3xl p-3.5 neo-border-thin md:mx-0 ${card.iconBg}`}
                >
                  <card.icon className="h-7 w-7 text-[#424242]" />
                </div>
                <h3 className="mt-4 text-center text-2xl font-bold text-[#424242] md:text-left">
                  {card.title}
                </h3>
                <p className="mt-2 text-center text-base text-[#424242] md:text-left">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[6px] border-dotted border-[#F87171] bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-[#424242] md:text-5xl">
            Pour qui ?
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {audienceCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-2xl p-8 neo-border-thin ${card.bg}`}
              >
                <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
                  <div className={`rounded-2xl p-2.5 ${card.iconBg}`}>
                    <card.icon className="h-5 w-5 text-[#424242]" />
                  </div>
                  <h3 className="text-center text-2xl font-extrabold text-[#424242] md:text-left">
                    {card.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {card.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-white/70 p-3 neo-border-thin"
                    >
                      <span
                        className={`mt-1 block h-3 w-3 shrink-0 rounded-full ${card.iconBg}`}
                      />
                      <p className="text-base text-[#424242]">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[6px] border-dotted border-[#FCD34D] bg-[#C4B5FD] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <DotsRow colorClass="bg-[#F87171]" />

          <h2 className="mt-7 text-center text-3xl font-extrabold text-[#424242] md:text-5xl">
            Comment ça se passe ?
          </h2>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {comfortItems.map((item) => (
              <div key={item.label} className="text-center">
                <div className="mx-auto w-fit rounded-[40px] bg-white p-6 neo-border-thin">
                  <item.icon className="h-8 w-8 text-[#424242]" />
                </div>
                <p className="mt-3 text-lg font-bold text-[#424242]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 text-center neo-border-thin md:p-10">
            <h2 className="text-3xl font-extrabold text-[#424242] md:text-4xl">
              Ça vous dit ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#424242] md:text-lg">
              L&apos;inscription est gratuite et nous aide à bien vous
              accueillir.
            </p>

            <div className="mt-8">
              <Link
                href="/inscription"
                className="neo-hover inline-flex h-14 items-center justify-center rounded-lg bg-[#F87171] px-8 text-base font-extrabold text-[#424242] neo-border-thin neo-shadow"
              >
                Je m&apos;inscris gratuitement
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF5E6] pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-[#FFF5E6] px-4 py-3 neo-border-thin">
            <span className="rounded-2xl bg-[#FCD34D] p-2">
              <Bike className="h-5 w-5 text-[#424242]" />
            </span>
            <span className="rounded-2xl bg-[#FCD34D] p-2">
              <Shirt className="h-5 w-5 text-[#424242]" />
            </span>
            <span className="rounded-2xl bg-[#FCD34D] p-2">
              <Scissors className="h-5 w-5 text-[#424242]" />
            </span>
            <p className="text-sm font-semibold text-[#424242] md:text-base">
              Quartier Libre: réparation de vélo, friperie, couture et plein
              d&apos;initiatives citoyennes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
