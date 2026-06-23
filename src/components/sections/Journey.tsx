"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { journey } from "@/lib/data";

export default function Journey() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="journey" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gray-mid"
        >
          The journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-16 text-3xl font-bold sm:text-4xl"
        >
          Four chapters. One thread: systems that matter.
        </motion.h2>

        <div className="relative space-y-0">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gray-light/40 to-transparent md:block" />

          {journey.map((chapter, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={chapter.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative md:pl-10"
              >
                <div className="absolute left-0 top-6 hidden h-3.5 w-3.5 rounded-full border-2 border-gray-light bg-pepper md:block" />

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="glass w-full rounded-2xl p-6 text-left transition hover:border-white/12"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-gray-mid">{chapter.year}</p>
                      <h3 className="font-display mt-1 text-xl font-bold">{chapter.company}</h3>
                      <p className="text-sm text-salt/60">{chapter.role}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-salt/55">
                        {chapter.metric}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-salt/45 transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-salt/70">{chapter.story}</p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 space-y-2 overflow-hidden border-t border-white/5 pt-4"
                      >
                        {chapter.details.map((d) => (
                          <li key={d} className="flex gap-2 text-sm text-salt/55">
                            <span className="text-gray-mid/80">·</span>
                            {d}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </button>

                {i < journey.length - 1 && <div className="h-4" />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
