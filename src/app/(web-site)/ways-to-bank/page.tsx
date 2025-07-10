import Section2 from "@/components/web-site/about-us/section-2";
import Section3 from "@/components/web-site/about-us/section-3";
import Section4 from "@/components/web-site/about-us/section-4";
import HeroSection from "@/components/web-site/ways-to-bank/hero-section";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
