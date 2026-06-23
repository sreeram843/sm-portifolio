"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { budgetOptions, profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MediumIcon, XIcon } from "@/components/ui/Icons";

const socials = [
  { href: profile.github, label: "GitHub", icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: profile.medium, label: "Medium", icon: MediumIcon },
  { href: profile.x, label: "X", icon: XIcon },
];

export default function Connect() {
  return (
    <section id="connect" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-salt/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gray-mid"
            >
              Connect
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold sm:text-5xl"
            >
              Got a hard problem?
              <br />
              <span className="text-gradient">Let&apos;s talk.</span>
            </motion.h2>
            <p className="mt-6 max-w-md leading-relaxed text-salt/65">
              Healthcare platforms, scheduling engines, AI tooling, or engineering leadership —
              I&apos;m open to the right conversations.
            </p>

            <div className="mt-10 space-y-3 text-sm text-salt/60">
              <a href={`mailto:${profile.email}`} className="block transition hover:text-salt">
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="block transition hover:text-salt"
              >
                {profile.phone}
              </a>
              <p>{profile.location}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-xl text-salt/55 transition hover:border-gray-light/30 hover:text-salt"
                >
                  <Icon size={label === "X" ? 18 : 20} />
                </a>
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            action={`mailto:${profile.email}`}
            method="GET"
            className="glass rounded-2xl p-8"
          >
            <div className="space-y-4">
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-salt/40 focus:border-gray-light/40"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-salt/40 focus:border-gray-light/40"
              />
              <select
                name="budget"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-salt/60 outline-none focus:border-gray-light/40"
                defaultValue=""
              >
                {budgetOptions.map((o) => (
                  <option key={o} value={o === budgetOptions[0] ? "" : o} className="bg-pepper">
                    {o}
                  </option>
                ))}
              </select>
              <textarea
                name="body"
                rows={4}
                required
                placeholder="What's on your mind?"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-salt/40 focus:border-gray-light/40"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-salt py-3.5 text-sm font-semibold text-pepper transition hover:bg-gray-light"
              >
                <Send size={16} />
                Send message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
