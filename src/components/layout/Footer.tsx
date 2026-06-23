import FooterAboutGrid from "@/components/layout/FooterAboutGrid";
import FooterLowerSection from "@/components/layout/FooterLowerSection";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <FooterAboutGrid />
        <FooterLowerSection />

        <p className="mt-20 text-sm text-muted-light md:mt-28">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
