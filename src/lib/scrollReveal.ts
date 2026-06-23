export const SCROLL_REVEAL_STAGGER_S = 0.07;

export const EXPERTISE_STAGGER_S = 0.04;

export const EXPERIENCE_STAGGER_S = 0.08;

export const SCROLL_REVEAL_VIEWPORT = {
  once: true,
  amount: 0.15,
} as const;

export function getScrollRevealProps(index: number, reducedMotion: boolean) {
  if (reducedMotion) {
    return {};
  }

  return {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: SCROLL_REVEAL_VIEWPORT,
    transition: {
      duration: 0.5,
      delay: index * SCROLL_REVEAL_STAGGER_S,
      ease: "easeOut" as const,
    },
  };
}

export function getExpertiseRevealProps(index: number, reducedMotion: boolean) {
  if (reducedMotion) {
    return {};
  }

  return {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: SCROLL_REVEAL_VIEWPORT,
    transition: {
      duration: 0.4,
      delay: index * EXPERTISE_STAGGER_S,
      ease: "easeOut" as const,
    },
  };
}

export function getExperienceTabRevealProps(index: number, reducedMotion: boolean) {
  if (reducedMotion) {
    return {};
  }

  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: SCROLL_REVEAL_VIEWPORT,
    transition: {
      duration: 0.35,
      delay: index * EXPERIENCE_STAGGER_S,
      ease: "easeOut" as const,
    },
  };
}

export function getExperienceBodyRevealProps(index: number, reducedMotion: boolean) {
  if (reducedMotion) {
    return {};
  }

  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: SCROLL_REVEAL_VIEWPORT,
    transition: {
      duration: 0.5,
      delay: index * EXPERIENCE_STAGGER_S + EXPERIENCE_STAGGER_S,
      ease: "easeOut" as const,
    },
  };
}
