import ContactHeroSection from "@/components/web-site/contact-us/contact-hero-section";
import Section1 from "@/components/web-site/ways-to-bank/section-1";
import Section2 from "@/components/web-site/ways-to-bank/section-2";
import Section3 from "@/components/web-site/ways-to-bank/section-3";
import Section4 from "@/components/web-site/ways-to-bank/section-4";
import Section5 from "@/components/web-site/ways-to-bank/section-5";
import Section6 from "@/components/web-site/ways-to-bank/section-6";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <ContactHeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
