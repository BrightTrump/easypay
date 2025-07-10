import Section1 from "@/components/web-site/ways-to-bank/section-1";
import Section2 from "@/components/web-site/ways-to-bank/section-2";
import Section3 from "@/components/web-site/ways-to-bank/section-3";
import Section4 from "@/components/web-site/ways-to-bank/section-4";
import Section5 from "@/components/web-site/ways-to-bank/section-5";
import Section6 from "@/components/web-site/ways-to-bank/section-6";
import WaysHeroSection from "@/components/web-site/ways-to-bank/ways-hero-section";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <WaysHeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
