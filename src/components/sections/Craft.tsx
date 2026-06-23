"use client";

import { Award, GraduationCap } from "lucide-react";
import { certifications, craftTags, education } from "@/lib/data";

export default function Craft() {
  return (
    <section id="craft" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gray-mid">
          Craft & credentials
        </p>
        <h2 className="font-display mb-12 text-3xl font-bold sm:text-4xl">
          Tools I reach for. Problems I solve.
        </h2>

        <div className="flex flex-wrap gap-2">
          {craftTags.map((tag) => (
            <span
              key={tag}
              className="glass rounded-full px-4 py-2 font-mono text-xs text-salt/65 transition hover:border-gray-light/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <Award size={16} className="text-gray-mid" />
            <h3 className="font-display text-lg font-semibold">Certifications</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="glass rounded-xl p-5 transition hover:border-gray-light/25"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-mid/80">
                  {cert.issuer}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-salt/85">{cert.name}</p>
                <p className="mt-2 font-mono text-xs text-salt/50">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <GraduationCap size={16} className="text-gray-mid" />
            <h3 className="font-display text-lg font-semibold">Education</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {education.map((item) => (
              <div
                key={`${item.school}-${item.degree}`}
                className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-salt/80">{item.school}</p>
                    <p className="mt-0.5 text-xs text-salt/60">{item.degree}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-mono text-xs text-salt/50">{item.period}</p>
                    {"detail" in item && item.detail && (
                      <p className="mt-0.5 font-mono text-[10px] text-salt/40">{item.detail}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
