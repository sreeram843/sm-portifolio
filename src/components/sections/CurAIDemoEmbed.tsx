"use client";

const DEFAULT_DEMO_URL = "https://app.cura-i.com/demo";

export default function CurAIDemoEmbed() {
  const demoUrl = process.env.NEXT_PUBLIC_CURAI_DEMO_URL ?? DEFAULT_DEMO_URL;

  return (
    <div className="mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]">
      <div className="rounded-[2rem] border-[6px] border-foreground/10 bg-surface p-1.5 shadow-[0_12px_40px_rgb(26_26_26_/_0.08)] sm:rounded-[2.25rem] sm:border-[8px] sm:p-2">
        <div className="flex justify-center pt-1.5 sm:pt-2">
          <div className="h-1 w-12 rounded-full bg-foreground/10 sm:h-1.5 sm:w-16" />
        </div>
        <div className="mt-1.5 overflow-hidden rounded-[1.5rem] border border-border bg-background sm:mt-2 sm:rounded-[1.75rem]">
          <iframe
            src={demoUrl}
            title="CurAI demo — try the assistant"
            className="block h-[480px] w-full border-0 sm:h-[520px] lg:h-[560px]"
            loading="lazy"
            allow="clipboard-write"
          />
        </div>
        <div className="flex justify-center py-1.5 sm:py-2">
          <div className="h-1 w-20 rounded-full bg-foreground/15 sm:w-24" />
        </div>
      </div>
    </div>
  );
}
