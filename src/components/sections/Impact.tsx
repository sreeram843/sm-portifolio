"use client";

import { motion } from "framer-motion";
import { impactMoments } from "@/lib/data";

export default function Impact() {
  return (
    <section id="impact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gray-mid"
        >
          Impact at scale
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-12 max-w-lg text-3xl font-bold sm:text-4xl"
        >
          Numbers that tell a story, not a resume.
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactMoments.map((moment, i) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-white/15"
            >
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${moment.accent} opacity-20 blur-2xl transition group-hover:opacity-40`}
              />
              <p className={`font-display relative text-4xl font-bold text-salt`}>
                {moment.value}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-salt/70">
                {moment.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
