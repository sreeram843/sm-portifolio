"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { featuredWork } from "@/lib/data";
import { GitHubIcon } from "@/components/ui/Icons";

const demoMessages = [
  { role: "user", text: "What's the weather in Austin?" },
  { role: "ai", text: "72°F and partly cloudy — fetched live before the LLM even woke up." },
  { role: "user", text: "Summarize my uploaded docs on FHIR integration" },
  { role: "ai", text: "Smart mode → RAG pipeline → cited answer from your Qdrant index." },
];

export default function CurAISpotlight() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-white/5 p-8 lg:border-b-0 lg:border-r lg:p-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-salt/10 px-3 py-1 text-xs font-medium text-salt ring-1 ring-gray-light/25">
                <Sparkles size={12} />
                Personal project · Live
              </div>

              <h2 className="font-display text-4xl font-bold">{featuredWork.name}</h2>
              <p className="mt-2 text-lg text-gray-light">{featuredWork.tagline}</p>
              <p className="mt-6 leading-relaxed text-salt/70">{featuredWork.description}</p>

              <ul className="mt-8 space-y-2">
                {featuredWork.highlights.map((h) => (
                  <li key={h.label} className="flex gap-2 text-sm text-salt/65">
                    <span className="text-gray-light">→</span>
                    <span>
                      <span className="text-salt/80">{h.label}</span>
                      {" — "}
                      {h.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {featuredWork.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-xs text-salt/55"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={featuredWork.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-salt px-5 py-2.5 text-sm font-semibold text-pepper transition hover:bg-gray-light"
                >
                  Open CurAI
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={featuredWork.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-salt/70 transition hover:text-salt"
                >
                  <GitHubIcon size={14} />
                  Source
                </a>
              </div>
            </div>

            <div className="relative bg-black/25 p-6 lg:p-8">
              <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-4">
                <div className="h-3 w-3 rounded-full bg-gray-mid/60" />
                <div className="h-3 w-3 rounded-full bg-gray-light/60" />
                <div className="h-3 w-3 rounded-full bg-salt/50" />
                <span className="ml-2 font-mono text-xs text-salt/45">app.cura-i.com</span>
              </div>

              <div className="space-y-4">
                {demoMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: msg.role === "user" ? 12 : -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-salt/10 text-salt"
                          : "glass text-salt/70"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                <div className="glass flex-1 rounded-xl px-4 py-3 font-mono text-xs text-salt/40">
                  Ask anything…
                </div>
                <div className="flex rounded-xl bg-salt/15 px-4 py-3 text-xs font-medium text-salt">
                  Smart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
