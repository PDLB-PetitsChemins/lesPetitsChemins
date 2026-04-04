"use client";

import { useEffect, useMemo, useState } from "react";

const TARGET_DATE = new Date("2026-06-04T09:00:00+02:00").getTime();

type TimeLeft = {
  jours: number;
  heures: number;
  minutes: number;
  secondes: number;
};

function computeTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
  const heures = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const secondes = Math.floor((diff / 1000) % 60);

  return { jours, heures, minutes, secondes };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(computeTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(computeTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const blocks = useMemo(
    () => [
      { label: "Jours", value: timeLeft.jours },
      { label: "Heures", value: timeLeft.heures },
      { label: "Minutes", value: timeLeft.minutes },
      { label: "Secondes", value: timeLeft.secondes },
    ],
    [timeLeft],
  );

  return (
    <section className="bg-[#1A1A1A] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-8 text-center text-3xl font-black text-white md:text-4xl"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Rendez-vous dans
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {blocks.map((block) => (
            <div
              key={block.label}
              className="rounded-2xl bg-[#FFF5E6] p-4 text-center neo-border-thick neo-shadow"
            >
              <p
                className="text-4xl font-black text-[#1A1A1A] md:text-5xl"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {String(block.value).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#424242] md:text-base">
                {block.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
