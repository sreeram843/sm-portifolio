import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 md:px-10 md:py-6 lg:px-14">
        <a
          href="#"
          className="min-w-0 shrink text-sm font-medium tracking-tight text-foreground sm:text-base"
        >
          <span className="sm:hidden">Sriram M.</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="flex shrink-0 items-center gap-3 sm:gap-5 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-xs text-muted transition-colors hover:text-foreground sm:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
