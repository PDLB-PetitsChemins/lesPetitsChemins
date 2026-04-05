import {
  Accessibility,
  BusFront,
  Car,
  CircleAlert,
  CircleQuestionMark,
  Clock3,
  FileText,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  TrainFront,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../components/ImageWithFallback";

type InfoCard = {
  title: string;
  icon: LucideIcon;
  iconBg: string;
  bg: string;
  items: string[];
};

type FaqItem = {
  question: string;
  answer: string;
  highlight?: boolean;
};

const transportCards: InfoCard[] = [
  {
    title: "Transports en commun",
    icon: TrainFront,
    iconBg: "bg-[#34D399]",
    bg: "bg-[#DCFCE7]",
    items: [
      "Metro : arrêt Saint-Sever (accessible) ou Joffre-Mutualite (le plus proche)",
      "Bus et TEOR : lignes 27, F1, F7, F9 et T5, a 200m",
    ],
  },
  {
    title: "En voiture",
    icon: Car,
    iconBg: "bg-[#C4B5FD]",
    bg: "bg-[#F3E8FF]",
    items: [
      "Parking gratuit sur site",
      "Places PMR reservees a l'entree",
      "Acces facile depuis le centre-ville",
    ],
  },
  {
    title: "Besoin d'aide ?",
    icon: BusFront,
    iconBg: "bg-white",
    bg: "bg-[#FCD34D]",
    items: [
      "Navette possible depuis un point de rassemblement",
      "Contactez-nous pour en organiser une",
    ],
  },
];

const accessibilityCards: InfoCard[] = [
  {
    title: "Mobilite",
    icon: Accessibility,
    iconBg: "bg-[#C4B5FD]",
    bg: "bg-white",
    items: ["Site de plain-pied, rampes d'acces", "Toilettes adaptees"],
  },
  {
    title: "Accompagnement",
    icon: HeartHandshake,
    iconBg: "bg-[#C4B5FD]",
    bg: "bg-white",
    items: ["Accueil personnalise", "Benevoles formes sur place"],
  },
  {
    title: "Documents FALC",
    icon: FileText,
    iconBg: "bg-[#C4B5FD]",
    bg: "bg-white",
    items: ["Supports Facile a Lire et a Comprendre", "Signaletique claire"],
  },
  {
    title: "Espace calme",
    icon: Sparkles,
    iconBg: "bg-[#C4B5FD]",
    bg: "bg-white",
    items: ["Zone de repos au calme pour souffler si besoin"],
  },
  {
    title: "Alimentation",
    icon: Utensils,
    iconBg: "bg-[#C4B5FD]",
    bg: "bg-white",
    items: ["Repas adaptes (sans allergenes)", "Regimes speciaux possibles"],
  },
  {
    title: "Horaires souples",
    icon: Clock3,
    iconBg: "bg-[#C4B5FD]",
    bg: "bg-white",
    items: [
      "Arrivez et partez quand vous voulez",
      "Pas d'obligation de rester",
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Faut-il s'inscrire ?",
    answer:
      "Oui, mais c'est gratuit ! Ca nous aide a bien vous accueillir et a preparer les repas en quantite suffisante.",
  },
  {
    question: "C'est payant ?",
    answer:
      "Non, tout est gratuit : entree, animations, repas. C'est un festival accessible a tous, sans barriere financiere.",
  },
  {
    question: "Je peux venir avec un accompagnant ?",
    answer:
      "Bien sur ! Indiquez-le lors de l'inscription pour que nous puissions bien vous accueillir tous les deux.",
  },
  {
    question: "Il y aura des enfants ?",
    answer:
      "Oui, c'est ouvert a tous les ages. L'apres-midi festif est particulierement adapte aux familles. Les enfants doivent etre accompagnes.",
  },
  {
    question: "Je suis en situation de handicap, comment ca se passe ?",
    answer:
      "Tout est prevu : site accessible, espaces calmes, documents FALC et equipe formee. Contactez-nous pour preparer votre venue selon vos besoins.",
  },
  {
    question: "Qui appeler en cas d'urgence le jour J ?",
    answer: "Le jour du festival, contactez Marie Claquin au 06 68 46 20 55.",
    highlight: true,
  },
];

export default function InfosPratiquesPage() {
  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      <section className="bg-[#FFF5E6] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mt-8 max-w-4xl text-center">
            <h1 className="text-4xl font-black text-[#424242] md:text-6xl">
              Venir au festival
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base font-semibold text-[#424242] md:text-xl">
              Tout ce qu&apos;il faut savoir pour une journee{" "}
              <span className="relative inline-block">
                sereine
                <span
                  className="pointer-events-none absolute -bottom-0.5 left-0 h-1 w-full -rotate-3 rounded-full bg-[#C4B5FD]"
                  aria-hidden
                />
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-[6px] border-dotted border-[#F87171] bg-[#FFF5E6] pb-14 pt-8 md:pb-20 md:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="relative mx-auto w-full max-w-xl self-start lg:mx-0 lg:max-w-none">
              <div className="absolute left-1/2 -top-8 z-20 h-16 w-16 -translate-x-1/2 rounded-full bg-[#FCD34D]" />
              <ImageWithFallback
                src="/quartier_libre_entree.png"
                alt="Quartier Libre - Atelier Lucien"
                className="relative z-10 aspect-4/3 w-full rounded-lg object-cover neo-border-thin"
                width={312}
                height={304}
              />
              <div className="absolute left-1/2 -bottom-8 z-20 h-16 w-16 -translate-x-1/2 rounded-full bg-[#34D399]" />
            </div>

            <div className="rounded-2xl bg-white p-6 neo-border-thin">
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-[#F87171] p-2.5">
                  <MapPin className="h-6 w-6 text-[#424242]" />
                </span>
                <h2 className="text-2xl font-extrabold text-[#424242]">
                  Ou sommes-nous ?
                </h2>
              </div>

              <p className="mt-4 text-lg font-bold text-[#424242]">
                Quartier Libre - Atelier Lucien
              </p>
              <p className="mt-2 text-base text-[#424242]">
                Friche culturelle SNCF Saint-Sever
                <br />
                1 rue Malouet
                <br />
                76100 Rouen
              </p>

              <div className="mt-6 overflow-hidden rounded-lg neo-border-thin">
                <iframe
                  title="Carte - Quartier Libre Atelier Lucien"
                  src="https://www.google.com/maps?q=Quartier+Libre+Atelier+Lucien+1+rue+Malouet+76100+Rouen&output=embed"
                  className="h-80 w-full md:h-96 lg:h-112"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-[6px] border-dotted border-[#F87171] bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-7 text-center text-3xl font-extrabold text-[#424242] md:text-5xl">
            Comment venir ?
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {transportCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-2xl p-8 neo-border-thin ${card.bg}`}
              >
                <div
                  className={`mx-auto flex w-fit rounded-3xl p-3.5 neo-border-thin md:mx-0 ${card.iconBg}`}
                >
                  <card.icon className="h-7 w-7 text-[#424242]" />
                </div>
                <h3 className="mt-4 text-center text-2xl font-bold text-[#424242] md:text-left">
                  {card.title}
                </h3>

                <div className="mt-4 space-y-2">
                  {card.items.map((item) => (
                    <p key={item} className="text-base text-[#424242]">
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[6px] border-dotted border-[#F87171] bg-[#A7F3D0] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto mt-7 max-w-3xl text-center text-3xl font-extrabold text-[#424242] md:text-5xl">
            Le festival est 100 % accessible
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {accessibilityCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-2xl p-8 neo-border-thin ${card.bg}`}
              >
                <div
                  className={`mx-auto flex w-fit rounded-3xl p-3.5 neo-border-thin md:mx-0 ${card.iconBg}`}
                >
                  <card.icon className="h-7 w-7 text-[#424242]" />
                </div>
                <h3 className="mt-4 text-center text-2xl font-bold text-[#424242] md:text-left">
                  {card.title}
                </h3>

                <div className="mt-4 space-y-2">
                  {card.items.map((item) => (
                    <p key={item} className="text-base text-[#424242]">
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[6px] border-dotted border-[#F87171] bg-[#F9A8D4]/70 py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto mt-7 max-w-3xl text-center text-3xl font-extrabold text-[#424242] md:text-5xl">
            Une question, un besoin specifique ?
          </h2>

          <p className="mt-6 text-xl font-semibold text-[#424242]">
            On s&apos;adapte a vous,
            <br />
            pas l&apos;inverse !
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 rounded-2xl bg-white p-6 neo-border-thin">
            <a
              href="mailto:marie.claquin@lepredelabataille.fr"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold text-[#424242] hover:underline"
            >
              <Mail className="h-5 w-5 text-[#F87171]" />
              marie.claquin@lepredelabataille.fr
            </a>
            <a
              href="tel:+33668462055"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold text-[#424242] hover:underline"
            >
              <Phone className="h-5 w-5 text-[#F87171]" />
              06 68 46 20 55
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF5E6] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-7 text-center text-3xl font-extrabold text-[#424242] md:text-5xl">
            Questions frequentes
          </h2>

          <div className="mt-10 space-y-6">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-2xl">
                <div
                  className={`flex items-center justify-between gap-4 rounded-t-2xl px-8 py-4 neo-border-thin ${
                    item.highlight ? "bg-[#F87171]" : "bg-[#FCD34D]"
                  }`}
                >
                  <h3 className="text-base font-bold text-[#424242] md:text-lg">
                    {item.question}
                  </h3>
                  {item.highlight ? (
                    <CircleAlert className="h-6 w-6 shrink-0 text-[#424242]" />
                  ) : (
                    <CircleQuestionMark className="h-6 w-6 shrink-0 text-[#424242]" />
                  )}
                </div>

                <div className="rounded-b-2xl bg-white px-8 py-6 neo-border-thin">
                  <p className="text-base text-[#424242]">{item.answer}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/inscription"
              className="neo-hover inline-flex h-14 items-center justify-center rounded-lg bg-[#F87171] px-8 text-base font-extrabold text-[#424242] neo-border-thin neo-shadow"
            >
              Je m&apos;inscris gratuitement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
