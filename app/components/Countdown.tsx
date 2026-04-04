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

  const timeBlocks = useMemo(
    () => [
      { label: "heures", value: timeLeft.heures, bg: "bg-[#FFEDD5]" },
      { label: "minutes", value: timeLeft.minutes, bg: "bg-[#FEE2E2]" },
      { label: "secondes", value: timeLeft.secondes, bg: "bg-[#FEF3C7]" },
    ],
    [timeLeft],
  );

  return (
    <section className="bg-[#E7E5E4] py-16 md:py-20">
      <div className="mb-8 border-y-2 border-[#44403C] py-1">
        <div className="mx-auto flex w-fit items-center gap-2.5">
          {Array.from({ length: 21 }).map((_, index) => (
            <span key={`countdown-dot-${index}`} className="h-1.5 w-1.5 rounded-full bg-[#F87171]" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-8 text-center text-3xl font-extrabold text-[#424242] md:text-4xl"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Le festival commence dans ...
        </h2>

        <div className="mx-auto max-w-[304px]">
          <div className="relative rounded-lg bg-white neo-border-thin">
            <div className="h-6 rounded-t-lg bg-[#F87171] neo-border-thin" />
            <div className="py-8 text-center">
              <p
                className="text-5xl font-black text-[#424242]"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {String(timeLeft.jours)}
              </p>
              <p className="mt-3 text-2xl font-semibold text-[#424242]">jours</p>
            </div>

            <div className="absolute left-4 right-4 top-[-10px] flex justify-between">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={`bar-${index}`} className="h-4 w-0.5 rounded-full bg-[#44403C]" />
              ))}
            </div>

            <div className="absolute left-4 right-4 top-1.5 flex justify-between">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={`dot-${index}`} className="h-1 w-1 rounded-full bg-[#44403C]" />
              ))}
            </div>
          </div>

          <p
            className="my-4 text-center text-3xl font-bold text-[#424242]"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            et
          </p>

          <div className="grid grid-cols-3 gap-4">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className={`rounded-lg p-3 text-center neo-border-thin ${block.bg}`}
              >
                <p
                  className="text-3xl font-extrabold text-[#424242]"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {String(block.value).padStart(2, "0")}
                </p>
                <p className="text-sm font-semibold text-[#424242]">{block.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 hidden max-w-5xl md:grid md:grid-cols-3 md:gap-6">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className={`rounded-lg p-6 text-center neo-border-thin ${block.bg}`}
            >
              <p
                className="text-5xl font-extrabold text-[#424242]"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {String(block.value).padStart(2, "0")}
              </p>
              <p className="mt-2 text-lg font-semibold text-[#424242]">
                {block.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
