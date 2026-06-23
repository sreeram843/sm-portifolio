"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { getExpertiseRevealProps, getScrollRevealProps } from "@/lib/scrollReveal";
import { expertise, profile } from "@/lib/data";

export default function FooterAboutGrid() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="grid gap-16 md:grid-cols-2 md:gap-24 lg:grid-cols-3"
      {...getScrollRevealProps(0, reducedMotion)}
    >
      <div className="lg:col-span-2">
        <p className="mb-6 text-sm text-muted">About</p>
        <div className="space-y-5 text-base leading-relaxed text-foreground">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-6 text-sm text-muted">Expertise</p>
        <ul className="space-y-2">
          {expertise.map((item, index) => (
            <motion.li
              key={item}
              className="text-base text-foreground"
              {...getExpertiseRevealProps(index, reducedMotion)}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
