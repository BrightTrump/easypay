import HeroSection from "@/components/web-site/home-page/hero-section/hero-section";
import FeatureSection from "@/components/web-site/home-page/feature-section/feature-section";
import Services from "@/components/web-site/home-page/services/services";
import WhyChooseUs from "@/components/web-site/home-page/why-choose-us";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeatureSection />
      <Services />
      <WhyChooseUs />
    </main>
  );
}
