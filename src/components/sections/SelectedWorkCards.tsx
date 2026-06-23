"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { getScrollRevealProps } from "@/lib/scrollReveal";
import { workGallery } from "@/lib/data";

type ProfessionalItem = (typeof workGallery)[number] & { embed?: never };

export default function SelectedWorkCards({ items }: { items: ProfessionalItem[] }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="mt-20 border-t border-border pt-16 md:mt-24 md:pt-20">
      <h2 className="mb-8 font-serif text-xl text-foreground md:text-2xl">Selected work</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {items.map((item, index) => (
          <motion.li key={item.title} {...getScrollRevealProps(index, reducedMotion)}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border border-border bg-surface/50 p-5 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[3px] hover:border-foreground/20 hover:bg-surface hover:shadow-[0_8px_24px_rgb(26_26_26/0.06)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none md:p-6"
            >
              <p className="text-xs uppercase tracking-wide text-muted">{item.subtitle}</p>
              <h3 className="mt-2 font-serif text-lg leading-snug text-foreground">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted transition-colors duration-200 group-hover:text-foreground">
                {item.description}
              </p>
              <p className="mt-4 text-xs text-muted-light transition-colors duration-200 group-hover:text-muted">
                View details{" "}
                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </p>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
