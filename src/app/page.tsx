import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ImpactStrip from "@/components/sections/ImpactStrip";
import WorkGallery from "@/components/sections/WorkGallery";
import Experience from "@/components/sections/Experience";
import Writing from "@/components/sections/Writing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactStrip />
        <WorkGallery />
        <Experience />
        <Writing />
      </main>
      <Footer />
    </>
  );
}
