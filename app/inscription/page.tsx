"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Mail, Phone, Users, Briefcase } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

const faqs = [
  {
    question: "Faut-il s'inscrire ?",
    answer:
      "Oui, mais c'est gratuit ! Cela nous aide à bien vous accueillir et à organiser la journée.",
    highlight: false,
  },
  {
    question: "C'est payant ?",
    answer:
      "Non, tout est gratuit : entrée et animations. C'est un festival accessible à tous, sans barrière financière.",
    highlight: false,
  },
  {
    question: "Je peux venir avec un accompagnant ?",
    answer:
      "Bien sûr ! Indiquez-le lors de l'inscription pour que nous puissions bien vous accueillir tous les deux.",
    highlight: false,
  },
  {
    question: "Il y aura des enfants ?",
    answer:
      "Oui, c'est ouvert à tous les âges. L'après-midi festif est particulièrement adapté aux familles. Les enfants doivent être accompagnés.",
    highlight: false,
  },
  {
    question: "Je suis en situation de handicap, comment ça se passe ?",
    answer:
      "Tout est prévu ! Le site est 100% accessible, nous avons des espaces calmes et une équipe formée. Contactez-nous pour qu'on organise ensemble votre venue selon vos besoins spécifiques.",
    highlight: false,
  },
  {
    question: "Qui appeler en cas d'urgence le jour J ?",
    answer:
      "Le jour du festival, vous pourrez joindre Marie Claquin au 06 68 46 20 55 en cas d'urgence.",
    highlight: true,
  },
];

function FaqItem({
  question,
  answer,
  highlight,
}: {
  question: string;
  answer: string;
  highlight: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold neo-border-thin ${
          highlight ? "bg-[#F87171]" : "bg-[#FCD34D]"
        } ${open ? "rounded-tl-2xl rounded-tr-2xl" : "rounded-2xl"}`}
        aria-expanded={open}
      >
        <span className="text-base font-bold text-[#424242]">{question}</span>
        <ChevronDown
          size={24}
          className={`shrink-0 text-[#424242] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="rounded-bl-2xl rounded-br-2xl border-x-2 border-b-2 border-[#1a1a1a] bg-white px-6 py-5 text-base text-[#424242]">
          {answer}
        </div>
      )}
    </div>
  );
}

type InscriptionTab = "individuel" | "professionnel";

export default function InscriptionPage() {
  const [activeTab, setActiveTab] = useState<InscriptionTab>("individuel");

  useEffect(() => {
    if (
      document.querySelector(
        'script[src="https://tally.so/widgets/embed.js"]'
      )
    )
      return;
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    // Re-trigger Tally embed loading when tab changes
    const w = window as unknown as { Tally?: { loadEmbeds: () => void } };
    if (w.Tally) {
      w.Tally.loadEmbeds();
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      {/* Hero */}
      <section className="border-b-[6px] border-dotted border-[#FFD54F] bg-[#FFF5E6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-4 max-w-4xl text-center">
            <h1 className="text-4xl font-black text-[#424242] md:text-6xl">
              On vous attend !
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base font-semibold text-[#424242] md:text-xl">
              L&apos;inscription est gratuite et prend{" "}
              <span className="relative inline-block">
                <strong>2 minutes</strong>
                <span
                  className="pointer-events-none absolute -bottom-0.5 left-0 h-1 w-full -rotate-3 rounded-full bg-[#FCD34D]"
                  aria-hidden
                />
              </span>
            </p>

            <div className="mx-auto mt-12 max-w-md">
              <ImageWithFallback
                src="/inscription_hero.png"
                alt="Participants au festival"
                className="w-full rounded-lg object-cover"
                width={500}
                height={280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sélecteur + Formulaire Tally */}
      <section
        className={`py-16 md:py-20 transition-colors duration-300 ${
          activeTab === "individuel" ? "bg-[#FFF5E6]" : "bg-[#DCFCE7]"
        }`}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Titre */}
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[#424242] md:text-4xl">
            Vous venez ...
          </h2>

          {/* Onglets */}
          <div className="mx-auto flex max-w-lg justify-center gap-4 sm:gap-6">
            <button
              onClick={() => setActiveTab("individuel")}
              className={`flex flex-1 flex-col items-center gap-4 rounded-2xl px-4 py-8 text-center neo-border-thin transition-colors ${
                activeTab === "individuel"
                  ? "bg-[#FCD34D]"
                  : "bg-[#FFF5E6] hover:bg-[#FEF3C7]"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  activeTab === "individuel"
                    ? "bg-[#FFF5E6]"
                    : "bg-[#FCD34D]"
                }`}
              >
                <Users size={28} className="text-[#424242]" />
              </div>
              <span className="text-base font-bold text-[#424242]">
                A titre individuel / en famille
              </span>
            </button>

            <button
              onClick={() => setActiveTab("professionnel")}
              className={`flex flex-1 flex-col items-center gap-4 rounded-2xl px-4 py-8 text-center neo-border-thin transition-colors ${
                activeTab === "professionnel"
                  ? "bg-[#34D399]"
                  : "bg-[#DCFCE7] hover:bg-[#BBF7D0]"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  activeTab === "professionnel"
                    ? "bg-[#34D399]"
                    : "bg-[#34D399]"
                }`}
              >
                <Briefcase size={28} className="text-[#424242]" />
              </div>
              <span className="text-base font-bold text-[#424242]">
                A titre professionnel / Au nom d&apos;une structure
              </span>
            </button>
          </div>

          {/* Formulaire Tally */}
          <div className="mt-10">
            {activeTab === "individuel" ? (
              <iframe
                key="individuel"
                data-tally-src="https://tally.so/embed/D4D6Zq?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="500"
                frameBorder={0}
                title="Formulaire d'inscription individuelle"
              />
            ) : (
              <iframe
                key="professionnel"
                data-tally-src="https://tally.so/embed/A7DeA0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="500"
                frameBorder={0}
                title="Formulaire d'inscription professionnelle"
              />
            )}
          </div>
        </div>
      </section>

      {/* Contact / Question */}
      <section className="border-y-[6px] border-dotted border-[#F87171] bg-[#F9A8D4]/70 py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold text-[#424242] md:text-5xl">
            Une question, un besoin spécifique ?
          </h2>

          <p className="mt-6 text-xl font-semibold text-[#424242]">
            On s&apos;adapte à vous,
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

      {/* FAQ */}
      <section className="bg-[#FFF5E6] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-[#424242] md:text-4xl">
            Questions fréquentes
          </h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                highlight={faq.highlight}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
