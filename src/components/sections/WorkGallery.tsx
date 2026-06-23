import CurAIDemoEmbed from "@/components/sections/CurAIDemoEmbed";
import SelectedWorkCards from "@/components/sections/SelectedWorkCards";
import { GitHubIcon } from "@/components/ui/Icons";
import { featuredWork, workGallery } from "@/lib/data";

type WorkItem = (typeof workGallery)[number];
type ProfessionalItem = WorkItem & { embed?: never };

function CurAIProjectBlock() {
  return (
    <article className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[1fr_320px] lg:items-stretch lg:gap-12 xl:max-w-7xl">
      <div className="order-2 flex flex-col rounded-xl border border-border bg-surface/50 p-5 sm:p-6 md:p-8 lg:order-1 lg:min-h-[640px]">
        <p className="text-xs uppercase tracking-wide text-muted">
          {featuredWork.eyebrow}
        </p>
        <div className="mt-2 flex items-center gap-2.5">
          <h2 className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
            <a
              href={featuredWork.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {featuredWork.name}
            </a>
          </h2>
          <a
            href={featuredWork.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CurAI source on GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon size={20} />
          </a>
        </div>
        <p className="mt-1.5 text-sm text-muted">{featuredWork.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-foreground md:text-base">
          {featuredWork.description}
        </p>

        <ul className="mt-5 flex-1 space-y-3">
          {featuredWork.highlights.map((highlight) => (
            <li key={highlight.label} className="text-sm leading-relaxed text-muted">
              <span className="font-medium text-foreground">{highlight.label}</span>
              {" — "}
              {highlight.text}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2">
            {featuredWork.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="order-1 flex items-start justify-center lg:order-2 lg:justify-end">
        <CurAIDemoEmbed />
      </div>
    </article>
  );
}

export default function WorkGallery() {
  const personal = workGallery.find(
    (item): item is WorkItem & { embed: true } => "embed" in item && !!item.embed,
  );
  const professional = workGallery.filter(
    (item): item is ProfessionalItem => !("embed" in item && item.embed),
  );

  return (
    <section id="work" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14">
      {personal && <CurAIProjectBlock />}
      <SelectedWorkCards items={professional} />
    </section>
  );
}
