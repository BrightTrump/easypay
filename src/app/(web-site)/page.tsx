import HeroSection from "@/components/web-site/home-page/hero-section/hero-section";
import FeatureSection from "@/components/web-site/home-page/feature-section/feature-section";
import Services from "@/components/web-site/home-page/services/services";
import WhyChooseUs from "@/components/web-site/home-page/why-choose-us";
import HowItWorks from "@/components/web-site/home-page/how-it-works/how-it-works";
import AboutUs from "@/components/web-site/home-page/about-us/about-us";
import OurServices from "@/components/web-site/home-page/our-services/our-sevices";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeatureSection />
      <AboutUs />
      <OurServices />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
    </main>
  );
}
