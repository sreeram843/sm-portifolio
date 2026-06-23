"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  getExperienceBodyRevealProps,
  getExperienceTabRevealProps,
} from "@/lib/scrollReveal";
import { journey } from "@/lib/data";

type JourneyRole = (typeof journey)[number];

function ExperienceCard({
  role,
  index,
  reducedMotion,
}: {
  role: JourneyRole;
  index: number;
  reducedMotion: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <motion.div
        aria-hidden
        className="relative flex shrink-0 items-center gap-1.5 border-b border-border bg-surface/60 px-4 py-2 md:px-5 md:py-2.5"
        {...getExperienceTabRevealProps(index, reducedMotion)}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-border" />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </motion.div>

      <motion.div
        className="flex flex-col px-5 pt-5 pb-6 md:px-6 md:pt-6 md:pb-7"
        {...getExperienceBodyRevealProps(index, reducedMotion)}
      >
        <p className="font-serif text-2xl leading-none tracking-tight text-foreground md:text-3xl">
          {role.year}
        </p>
        <div className="mt-4 border-t border-border pt-4 md:mt-5 md:pt-5">
          <h3 className="font-serif text-lg leading-snug text-foreground md:text-xl">
            {role.company}
          </h3>
          <p className="mt-1.5 text-xs text-muted md:text-sm">{role.role}</p>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted md:mt-5 md:text-[15px] md:leading-relaxed">
          {role.story}
        </p>
      </motion.div>
    </article>
  );
}

export default function Experience() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="experience" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14">
        <h2 className="font-serif text-2xl text-foreground md:text-3xl">Experience</h2>

        <ul className="mx-auto mt-10 max-w-2xl space-y-6 md:mt-12 md:space-y-8">
          {journey.map((role, index) => (
            <li key={role.company}>
              <ExperienceCard role={role} index={index} reducedMotion={reducedMotion} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
