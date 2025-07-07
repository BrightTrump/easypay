import FeatureSection from "@/components/web-site/home-page/feature-section/feature-section";
import HeroSection from "@/components/web-site/home-page/hero-section/hero-section";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
