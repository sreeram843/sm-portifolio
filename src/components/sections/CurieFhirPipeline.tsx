"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { curieFhir } from "@/lib/data";

const STEPS = curieFhir.pipeline;
const VALIDATE_INDEX = STEPS.findIndex((step) => step.id === "validate");
const CORRECT_INDEX = STEPS.findIndex((step) => step.id === "correct");
const STEP_MS = 1100;
const HOLD_MS = 1600;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function CurieFhirPipeline() {
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, amount: 0.35 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || !inView) {
      return;
    }

    let cancelled = false;
    let timeoutId = 0;

    const schedule = (fn: () => void, delay: number) => {
      timeoutId = window.setTimeout(fn, delay);
    };

    const advance = (index: number, hasRetried: boolean) => {
      if (cancelled) {
        return;
      }

      setActiveIndex(index);

      if (index === VALIDATE_INDEX && !hasRetried) {
        schedule(() => advance(CORRECT_INDEX, false), STEP_MS);
        return;
      }

      if (index === CORRECT_INDEX && !hasRetried) {
        schedule(() => advance(VALIDATE_INDEX, true), STEP_MS);
        return;
      }

      if (index === VALIDATE_INDEX && hasRetried) {
        schedule(() => advance(0, false), HOLD_MS);
        return;
      }

      schedule(() => advance(index + 1, hasRetried), STEP_MS);
    };

    advance(0, false);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [inView, reducedMotion]);

  const displayIndex = reducedMotion ? STEPS.length - 1 : activeIndex;
  const progress = reducedMotion
    ? 1
    : displayIndex / Math.max(STEPS.length - 1, 1);

  return (
    <div
      ref={containerRef}
      className="mt-6 border-t border-border pt-5"
      aria-label="CurieFHIR processing pipeline"
    >
      <p className="mb-6 text-xs uppercase tracking-wide text-muted">Pipeline</p>

      {/* Desktop / tablet: single-line flow */}
      <div className="relative hidden sm:block">
        <div className="absolute top-[7px] right-3 left-3 h-px bg-border" aria-hidden>
          <motion.div
            className="h-full origin-left bg-foreground/40"
            initial={false}
            animate={{ scaleX: progress }}
            transition={{ duration: 0.55, ease: EASE }}
          />
        </div>

        <ol className="relative grid grid-cols-6 gap-2">
          {STEPS.map((step, index) => {
            const isActive = index === displayIndex;
            const isPast = index < displayIndex;

            return (
              <li key={step.id} className="flex flex-col items-center text-center">
                <motion.span
                  className="relative z-[1] mb-3 h-3.5 w-3.5 rounded-full border border-border bg-background"
                  initial={false}
                  animate={{
                    backgroundColor:
                      isActive || isPast ? "var(--foreground)" : "var(--background)",
                    borderColor:
                      isActive || isPast ? "var(--foreground)" : "var(--border)",
                    scale: isActive ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.45, ease: EASE }}
                />
                <motion.p
                  className="text-sm font-medium text-foreground"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : isPast ? 0.7 : 0.4 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {step.label}
                </motion.p>
                <motion.p
                  className="mt-1 text-[11px] leading-snug text-muted"
                  initial={false}
                  animate={{ opacity: isActive ? 0.9 : isPast ? 0.55 : 0.35 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {step.detail}
                </motion.p>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: quiet vertical rail */}
      <ol className="relative space-y-0 sm:hidden">
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[5px] w-px bg-border"
        >
          <motion.div
            className="w-full origin-top bg-foreground/40"
            initial={false}
            animate={{ scaleY: progress }}
            transition={{ duration: 0.55, ease: EASE }}
          />
        </div>

        {STEPS.map((step, index) => {
          const isActive = index === displayIndex;
          const isPast = index < displayIndex;

          return (
            <li key={step.id} className="relative flex gap-3 py-2.5 pl-5">
              <motion.span
                className="absolute top-[18px] left-0 h-2.5 w-2.5 rounded-full border border-border bg-background"
                initial={false}
                animate={{
                  backgroundColor:
                    isActive || isPast ? "var(--foreground)" : "var(--background)",
                  borderColor:
                    isActive || isPast ? "var(--foreground)" : "var(--border)",
                  scale: isActive ? 1.2 : 1,
                }}
                transition={{ duration: 0.45, ease: EASE }}
              />
              <div>
                <motion.p
                  className="text-sm font-medium text-foreground"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : isPast ? 0.7 : 0.4 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {step.label}
                </motion.p>
                <motion.p
                  className="mt-0.5 text-[11px] text-muted"
                  initial={false}
                  animate={{ opacity: isActive ? 0.9 : isPast ? 0.55 : 0.35 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {step.detail}
                </motion.p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
