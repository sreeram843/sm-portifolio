"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { getScrollRevealProps } from "@/lib/scrollReveal";
import type { MediumPost } from "@/lib/medium";
import { profile } from "@/lib/data";

export default function WritingCards({ posts }: { posts: MediumPost[] }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="writing" className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">Writing</h2>
          <a
            href={profile.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground"
          >
            All on Medium
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <motion.a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              {...getScrollRevealProps(index, reducedMotion)}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-surface">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-sm text-muted">{post.date}</p>
              <p className="mt-1 bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-[position:0_100%] bg-no-repeat text-base leading-snug text-foreground transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_1px] motion-reduce:bg-[length:100%_1px] motion-reduce:transition-none">
                {post.title}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
