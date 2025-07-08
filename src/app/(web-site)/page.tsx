import HeroSection from "@/components/web-site/home-page/hero-section/hero-section";
import FeatureSection from "@/components/web-site/home-page/feature-section/feature-section";
import WhyChooseUs from "@/components/web-site/home-page/why-choose-us";
import HowItWorks from "@/components/web-site/home-page/how-it-works/how-it-works";
import AboutUs from "@/components/web-site/home-page/about-us/about-us";
import OurServices from "@/components/web-site/home-page/our-services/our-sevices";
import ContactUs from "@/components/web-site/home-page/contact-us/contact-us";
import Card from "@/components/web-site/home-page/card/card";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeatureSection />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <HowItWorks />
      <Card />
      <ContactUs />
    </main>
  );
}
