import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TrustStrip from "./components/TrustStrip";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <div className="page-wrapper">
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <div className="bottom-strip" aria-hidden="true" />
      </main>
      <TrustStrip />
    </div>
  );
}
