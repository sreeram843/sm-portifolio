"use client";

const DEFAULT_DEMO_URL = "https://app.cura-i.com/demo";

export const CURAI_PHONE_HEIGHT = 640;

export default function CurAIDemoEmbed() {
  const demoUrl = process.env.NEXT_PUBLIC_CURAI_DEMO_URL ?? DEFAULT_DEMO_URL;

  return (
    <div className="w-full max-w-[300px] shrink-0 sm:max-w-[320px]">
      <div className="rounded-[2.25rem] border-[8px] border-foreground/10 bg-surface p-2 shadow-[0_12px_40px_rgb(26_26_26_/_0.08)]">
        <div className="flex justify-center pt-2">
          <div className="h-1.5 w-16 rounded-full bg-foreground/10" />
        </div>
        <div className="mt-2 overflow-hidden rounded-[1.75rem] border border-border bg-background">
          <iframe
            src={demoUrl}
            title="CurAI demo — try the assistant"
            className="block w-full border-0"
            style={{ height: "560px" }}
            loading="lazy"
            allow="clipboard-write"
          />
        </div>
        <div className="flex justify-center py-2">
          <div className="h-1 w-24 rounded-full bg-foreground/15" />
        </div>
      </div>
    </div>
  );
}
