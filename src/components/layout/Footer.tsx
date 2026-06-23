import FooterAboutGrid from "@/components/layout/FooterAboutGrid";
import FooterLowerSection from "@/components/layout/FooterLowerSection";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14">
        <FooterAboutGrid />
        <FooterLowerSection />

        <p className="mt-16 text-sm text-muted-light sm:mt-20 md:mt-28">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
