"use client";

import { useEffect, useMemo, useState } from "react";

const TARGET_DATE = new Date("2026-06-04T09:00:00+02:00").getTime();

type TimeLeft = {
  jours: number;
  heures: number;
  minutes: number;
  secondes: number;
};

const INITIAL_TIME_LEFT: TimeLeft = {
  jours: 0,
  heures: 0,
  minutes: 0,
  secondes: 0,
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
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(INITIAL_TIME_LEFT);

  useEffect(() => {
    const firstTick = window.setTimeout(() => {
      setTimeLeft(computeTimeLeft());
    }, 0);

    const timer = window.setInterval(() => {
      setTimeLeft(computeTimeLeft());
    }, 1000);

    return () => {
      window.clearTimeout(firstTick);
      window.clearInterval(timer);
    };
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
    <section className="relative border-b-[6px] border-dotted border-[#FFD54F] bg-[#F3F3F3] py-16 pt-28 md:py-20 md:pt-32">
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
        <h2
          className="mb-8 text-center text-3xl font-extrabold text-[#424242] md:text-4xl"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          Le festival commence dans ...
        </h2>

        <div className="mx-auto max-w-76">
          <div className="relative rounded-lg bg-white neo-border-thin">
            <div className="h-6 rounded-t-lg bg-[#F87171] neo-border-thin" />
            <div className="py-8 text-center">
              <p
                className="text-5xl font-black text-[#424242]"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                {String(timeLeft.jours)}
              </p>
              <p className="mt-3 text-2xl font-semibold text-[#424242]">jours</p>
            </div>

            <div className="absolute -top-2.5 left-4 right-4 flex justify-between">
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
            className="my-4 text-center text-3xl font-bold text-[#424242] md:hidden"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            et
          </p>

          <div className="grid grid-cols-3 gap-4 md:hidden">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className={`rounded-lg p-3 text-center neo-border-thin ${block.bg}`}
              >
                <p
                  className="text-3xl font-extrabold text-[#424242]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
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
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
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
