"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const longestRotatingWord = useMemo(
    () =>
      profile.rotatingWords.reduce((longest, word) =>
        word.length > longest.length ? word : longest,
      ),
    [],
  );

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const id = window.setInterval(() => {
      setWordIndex((index) => (index + 1) % profile.rotatingWords.length);
    }, 3200);

    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const activeWord = profile.rotatingWords[wordIndex];

  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-12 lg:px-14">
      <p className="mb-6 text-sm text-muted">
        {profile.title} · {profile.location}
      </p>

      <h1 className="max-w-5xl font-serif text-[2rem] leading-[1.2] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
        {profile.heroLine}{" "}
        <span className="inline-grid align-bottom">
          <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden>
            {longestRotatingWord}.
          </span>
          <span className="col-start-1 row-start-1 whitespace-nowrap">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={activeWord}
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-block text-muted"
              >
                {activeWord}.
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        {profile.pitch}
      </p>
    </section>
  );
}
