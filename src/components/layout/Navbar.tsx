import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">
        <a href="#" className="text-sm font-medium tracking-tight text-foreground md:text-base">
          {profile.name}
        </a>

        <ul className="flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm text-muted transition-colors hover:text-foreground"
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
