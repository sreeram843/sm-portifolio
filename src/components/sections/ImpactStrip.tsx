"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { highlightMetrics } from "@/lib/data";

type MetricAnim = {
  to: number;
  prefix?: string;
  suffix: string;
};

const metricAnimConfig: Record<string, MetricAnim> = {
  "90M+": { to: 90, suffix: "M+" },
  "7×": { to: 7, suffix: "×" },
  "+57%": { to: 57, prefix: "+", suffix: "%" },
  "9+": { to: 9, suffix: "+" },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function AnimatedMetricValue({
  value,
  active,
  reducedMotion,
}: {
  value: string;
  active: boolean;
  reducedMotion: boolean;
}) {
  const config = metricAnimConfig[value];
  const [display, setDisplay] = useState(reducedMotion ? config?.to ?? 0 : 0);

  useEffect(() => {
    if (!config) {
      return;
    }

    if (reducedMotion || !active) {
      setDisplay(config.to);
      return;
    }

    setDisplay(0);
    const controls = animate(0, config.to, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [active, config, reducedMotion]);

  if (!config) {
    return <>{value}</>;
  }

  return (
    <>
      {config.prefix}
      {display}
      {config.suffix}
    </>
  );
}

function MetricCell({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="relative"
    >
      <motion.p
        className="font-serif text-3xl tabular-nums text-foreground md:text-4xl"
        initial={reducedMotion ? false : { opacity: 0.4 }}
        animate={inView ? { opacity: 1 } : { opacity: 0.4 }}
        transition={{ duration: 0.4, delay: index * 0.14 }}
      >
        <AnimatedMetricValue value={value} active={inView} reducedMotion={reducedMotion} />
      </motion.p>
      <motion.p
        className="mt-2 text-sm leading-snug text-muted"
        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{
          duration: 0.45,
          delay: reducedMotion ? 0 : 0.35 + index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export default function ImpactStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-border">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:px-10 md:py-12 lg:px-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8% 0px" }}
      >
        {highlightMetrics.map((metric, index) => (
          <MetricCell key={metric.value} value={metric.value} label={metric.label} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
