"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ctaLinkClassName, connectLinkClassName } from "@/lib/linkClasses";
import { getScrollRevealProps } from "@/lib/scrollReveal";
import { certifications, profile } from "@/lib/data";

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Medium", href: profile.medium },
  { label: "X", href: profile.x },
];

export default function FooterLowerSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div {...getScrollRevealProps(0, reducedMotion)}>
      <div className="mt-20 grid gap-16 border-t border-border pt-16 md:mt-28 md:grid-cols-2 md:gap-24">
        <div>
          <p className="mb-6 text-sm text-muted">Credentials</p>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <p className="text-base text-foreground">{cert.name}</p>
                <p className="text-sm text-muted">
                  {cert.issuer} · {cert.date}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-6 text-sm text-muted">Connect</p>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={connectLinkClassName}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${profile.email}`} className={connectLinkClassName}>
                {profile.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
          Want to collaborate together?
        </p>
        <p className="mt-3 text-base text-muted">
          I&apos;d love to{" "}
          <a href={`mailto:${profile.email}`} className={ctaLinkClassName}>
            connect
          </a>
          .
        </p>
      </div>
    </motion.div>
  );
}
